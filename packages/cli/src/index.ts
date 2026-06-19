#!/usr/bin/env node
import { cac } from 'cac'
import chalk from 'chalk'
import fs from 'node:fs'
import fsExtra from 'fs-extra'
import path from 'node:path'
import prompts from 'prompts'
import ora from 'ora'
import { fileURLToPath } from 'node:url'

const { readJson, readFile, writeFile, mkdirp } = fsExtra

// In a real scenario, this would be a remote URL
// For this local demo, we'll point to the registry folder in our monorepo
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'))
const cli = cac(packageJson.name)

// Remote registry URL
const REMOTE_REGISTRY = 'https://raw.githubusercontent.com/ifatich/gwind/main/registry'
const BUNDLED_REGISTRY = path.resolve(__dirname, 'registry')
const WORKSPACE_REGISTRY = path.resolve(__dirname, '../../../registry')
const LOCAL_REGISTRY = fs.existsSync(BUNDLED_REGISTRY) ? BUNDLED_REGISTRY : WORKSPACE_REGISTRY
const BASE_DEPENDENCIES = ['@fontsource/nunito-sans', 'clsx', 'tailwind-merge', 'gwind-v2']

async function getRegistryData(subPath: string) {
  // Check local first (for development)
  const localPath = path.join(LOCAL_REGISTRY, subPath)
  if (fs.existsSync(localPath)) {
    return fsExtra.readJson(localPath)
  }

  // Fetch from remote
  const url = `${REMOTE_REGISTRY}/${subPath}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch registry from ${url}`)
    return response.json()
  } catch (error: any) {
    throw new Error(`Registry Error: ${error.message}`)
  }
}

async function getRegistryText(subPath: string) {
  const localPath = path.join(LOCAL_REGISTRY, subPath)
  if (fs.existsSync(localPath)) {
    return readFile(localPath, 'utf8')
  }

  const url = `${REMOTE_REGISTRY}/${subPath}`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch registry from ${url}`)
    return response.text()
  } catch (error: any) {
    throw new Error(`Registry Error: ${error.message}`)
  }
}

const toCssPath = (fromDir: string, targetPath: string) => {
  const relativePath = path.relative(fromDir, targetPath).split(path.sep).join('/')
  return relativePath.startsWith('.') ? relativePath : `./${relativePath}`
}

const getInstallCommand = (dependencies: string[]) => {
  const projectRoot = process.cwd()
  let packageManager = ''

  const packageJsonPath = path.join(projectRoot, 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    try {
      packageManager = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')).packageManager ?? ''
    } catch {
      // Fall back to lockfile detection for malformed or unavailable metadata.
    }
  }

  if (packageManager.startsWith('pnpm@') || fs.existsSync(path.join(projectRoot, 'pnpm-lock.yaml'))) {
    return `pnpm add ${dependencies.join(' ')}`
  }
  if (packageManager.startsWith('yarn@') || fs.existsSync(path.join(projectRoot, 'yarn.lock'))) {
    return `yarn add ${dependencies.join(' ')}`
  }
  if (packageManager.startsWith('bun@') || fs.existsSync(path.join(projectRoot, 'bun.lock')) || fs.existsSync(path.join(projectRoot, 'bun.lockb'))) {
    return `bun add ${dependencies.join(' ')}`
  }

  return `npm install ${dependencies.join(' ')}`
}

cli
  .command('init', 'Initialize Gwind UI in your project')
  .action(async () => {
    console.log(chalk.hex('#8b5cf6').bold('\nWelcome to Gwind UI! 🌬️\n'))
    
    const response = await prompts([
      {
        type: 'text',
        name: 'componentsPath',
        message: 'Where do you want to save your components?',
        initial: './src/components/ui'
      },
      {
        type: 'text',
        name: 'utilsPath',
        message: 'Where do you want to save your utils?',
        initial: './src/lib/utils.ts'
      },
      {
        type: 'text',
        name: 'cssPath',
        message: 'Where is your global CSS file?',
        initial: './src/assets/main.css'
      }
    ])

    if (!response.componentsPath) return

    const spinner = ora('Setting up your project...').start()

    try {
      const projectRoot = process.cwd()
      const componentsPath = path.join(projectRoot, response.componentsPath)
      const utilsPath = path.join(projectRoot, response.utilsPath)
      const cssPath = path.join(projectRoot, response.cssPath)
      const cssDir = path.dirname(cssPath)
      const stylePath = path.join(cssDir, 'gwind.css')

      // 1. Create gwind.json
      await writeFile(
        path.join(projectRoot, 'gwind.json'),
        JSON.stringify({ ...response, stylePath: toCssPath(projectRoot, stylePath) }, null, 2)
      )

      // 2. Create utils.ts without replacing consumer customizations.
      const utilsDir = path.dirname(utilsPath)
      await mkdirp(utilsDir)
      if (!fs.existsSync(utilsPath)) {
        await writeFile(
          utilsPath,
          `import '@fontsource/nunito-sans/latin-600.css'
import '@fontsource/nunito-sans/latin-700.css'
import '@fontsource/nunito-sans/latin-800.css'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const GWIND_FONT_CLASS = '![font-family:var(--font-family-base)]'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs, GWIND_FONT_CLASS))
}
`
        )
      }

      // 3. Ensure components directory
      await mkdirp(componentsPath)

      // 4. Install the generated foundation stylesheet and connect it to global CSS.
      await mkdirp(cssDir)
      const foundationCss = await getRegistryText('styles/gwind.css')
      const componentSource = toCssPath(cssDir, componentsPath)
      const generatedCss = `${foundationCss.trim()}\n\n@source "${componentSource}";\n`

      if (path.resolve(cssPath) === path.resolve(stylePath)) {
        await writeFile(cssPath, `@import "tailwindcss";\n${generatedCss}`)
      } else {
        await writeFile(stylePath, generatedCss)

        const styleImport = `@import "${toCssPath(cssDir, stylePath)}";`
        const tailwindImport = '@import "tailwindcss";'
        const tailwindImportPattern = /@import\s+["']tailwindcss["'];?/
        let currentCss = fs.existsSync(cssPath) ? await readFile(cssPath, 'utf8') : ''

        if (!tailwindImportPattern.test(currentCss)) {
          currentCss = `${tailwindImport}\n${currentCss}`
        }

        if (!currentCss.includes(styleImport)) {
          currentCss = currentCss.replace(tailwindImportPattern, match => `${match}\n${styleImport}`)
        }

        await writeFile(cssPath, currentCss)
      }

      spinner.succeed(chalk.green('Project initialized successfully!'))
      if (fs.existsSync(utilsPath)) {
        console.log(chalk.dim(`  Utility: ${response.utilsPath}`))
      }
      console.log(chalk.dim(`  Styles: ${toCssPath(projectRoot, stylePath)}`))
      console.log(chalk.yellow('\nInstall required base dependencies:'))
      console.log(chalk.cyan(getInstallCommand(BASE_DEPENDENCIES)))
      console.log(chalk.cyan('\nYou can now start adding components using:'))
      console.log(chalk.bold('npx gwind-system-ui add <component>'))

    } catch (error: any) {
      spinner.fail(chalk.red(`Error during initialization: ${error.message}`))
    }
  })

cli
  .command('add <component>', 'Add a component to your project')
  .option('--overwrite', 'Overwrite existing component files')
  .action(async (componentName, options) => {
    let config = { componentsPath: './src/components/ui', utilsPath: './src/lib/utils.ts' }
    
    // Try to load config if exists
    const configPath = path.join(process.cwd(), 'gwind.json')
    if (fs.existsSync(configPath)) {
      config = await readJson(configPath)
    }

    const spinner = ora(`Fetching ${componentName}...`).start()
    
    try {
      const installedComponents = new Set<string>()
      const installingComponents = new Set<string>()
      const dependencies = new Set<string>(BASE_DEPENDENCIES)

      const installComponent = async (name: string) => {
        if (installedComponents.has(name)) return
        if (installingComponents.has(name)) {
          throw new Error(`Circular registry dependency detected at ${name}`)
        }

        installingComponents.add(name)

        const componentData = await getRegistryData(`components/${name}.json`)
        for (const dependency of componentData.registryDependencies ?? []) {
          await installComponent(dependency)
        }

        const destDir = path.join(process.cwd(), config.componentsPath, name)
        await mkdirp(destDir)

        for (const file of componentData.files) {
          const filePath = path.join(destDir, file.name)
          if (fs.existsSync(filePath) && !options.overwrite) {
            console.log(chalk.yellow(`  ↷ Skipped existing ${name}/${file.name}`))
            continue
          }

          // Adjust imports in the file to match user's utils path.
          let content = file.content
          if (config.utilsPath) {
            const relativeUtils = path.relative(
              path.dirname(filePath),
              path.join(process.cwd(), config.utilsPath.replace('.ts', ''))
            )
            const finalUtilsPath = relativeUtils.startsWith('.') ? relativeUtils : `./${relativeUtils}`

            content = content.replace(/@\/lib\/utils/g, finalUtilsPath)
            content = content.replace(/(\.\.\/)+lib\/utils/g, finalUtilsPath)
          }

          await writeFile(filePath, content)
          console.log(chalk.green(`  ✔ Created ${name}/${file.name}`))
        }

        for (const dependency of componentData.dependencies ?? []) {
          dependencies.add(dependency)
        }
        installingComponents.delete(name)
        installedComponents.add(name)
      }

      spinner.succeed(`Found ${componentName}.`)
      await installComponent(componentName)
      console.log(chalk.bold.green(`\nSuccessfully added ${Array.from(installedComponents).join(', ')}!`))

      if (dependencies.size > 0) {
        console.log(chalk.yellow(`\nDon't forget to install these dependencies:`))
        console.log(chalk.cyan(getInstallCommand(Array.from(dependencies))))
      }

      console.log(
        chalk.hex('#8b5cf6')('\nBuild with ❤️ by Pegadaian Design || F.I.AL Arasy || Pegadaian')
      )

    } catch (error: any) {
      spinner.fail(chalk.red(`Error adding component: ${error.message}`))
    }
  })

cli.help()
cli.version(packageJson.version)

cli.parse()
