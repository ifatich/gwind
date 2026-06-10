#!/usr/bin/env node
import { cac } from 'cac'
import chalk from 'chalk'
import fs from 'node:fs'
import fsExtra from 'fs-extra'
import path from 'node:path'
import prompts from 'prompts'
import ora from 'ora'
import { fileURLToPath } from 'node:url'

const { readJson, writeFile, mkdirp } = fsExtra

const cli = cac('gwind-ui')

// In a real scenario, this would be a remote URL
// For this local demo, we'll point to the registry folder in our monorepo
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Remote registry URL
const REMOTE_REGISTRY = 'https://raw.githubusercontent.com/ifatich/gwind/main/registry'
const LOCAL_REGISTRY = path.resolve(__dirname, '../../../registry')

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
      // 1. Create gwind.json
      await writeFile(
        path.join(process.cwd(), 'gwind.json'),
        JSON.stringify(response, null, 2)
      )

      // 2. Create utils.ts
      const utilsDir = path.dirname(path.join(process.cwd(), response.utilsPath))
      await mkdirp(utilsDir)
      await writeFile(
        path.join(process.cwd(), response.utilsPath),
        `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs, '!font-sans'))
}
`
      )

      // 3. Ensure components directory
      await mkdirp(path.join(process.cwd(), response.componentsPath))

      spinner.succeed(chalk.green('Project initialized successfully!'))
      console.log(chalk.cyan('\nYou can now start adding components using:'))
      console.log(chalk.bold('npx gwind-ui add <component>'))

    } catch (error: any) {
      spinner.fail(chalk.red(`Error during initialization: ${error.message}`))
    }
  })

cli
  .command('add <component>', 'Add a component to your project')
  .action(async (componentName) => {
    let config = { componentsPath: './src/components/ui', utilsPath: './src/lib/utils.ts' }
    
    // Try to load config if exists
    const configPath = path.join(process.cwd(), 'gwind.json')
    if (fs.existsSync(configPath)) {
      config = await readJson(configPath)
    }

    const spinner = ora(`Fetching ${componentName}...`).start()
    
    try {
      const componentData = await getRegistryData(`components/${componentName}.json`)
      spinner.succeed(`Found ${componentName}.`)

      const destDir = path.join(process.cwd(), config.componentsPath, componentName)
      await mkdirp(destDir)

      for (const file of componentData.files) {
        const filePath = path.join(destDir, file.name)
        // Adjust imports in the file to match user's utils path
        let content = file.content
        if (config.utilsPath) {
          // Calculate relative path from component to utils
          const relativeUtils = path.relative(
            path.dirname(filePath),
            path.join(process.cwd(), config.utilsPath.replace('.ts', ''))
          )
          const finalUtilsPath = relativeUtils.startsWith('.') ? relativeUtils : `./${relativeUtils}`
          
          // Replace @/lib/utils or any relative path to lib/utils
          content = content.replace(/@\/lib\/utils/g, finalUtilsPath)
          content = content.replace(/(\.\.\/)+lib\/utils/g, finalUtilsPath)
        }
        
        await writeFile(filePath, content)
        console.log(chalk.green(`  ✔ Created ${file.name}`))
      }

      console.log(chalk.bold.green(`\nSuccessfully added ${componentName}!`))
      
      if (componentData.dependencies.length > 0) {
        console.log(chalk.yellow(`\nDon't forget to install these dependencies:`))
        console.log(chalk.cyan(`pnpm add ${componentData.dependencies.join(' ')}`))
      }

      console.log(
        chalk.hex('#8b5cf6')('\nBuild with ❤️ by Pegadaian Design || F.I.AL Arasy || Pegadaian')
      )

    } catch (error: any) {
      spinner.fail(chalk.red(`Error adding component: ${error.message}`))
    }
  })

cli.help()
cli.version('0.1.3')

cli.parse()
