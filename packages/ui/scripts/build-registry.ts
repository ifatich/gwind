import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const UI_PATH = path.resolve(__dirname, '../src/components/ui')
const REGISTRY_PATH = path.resolve(__dirname, '../../../registry')

interface RegistryItem {
  name: string
  dependencies: string[]
  registryDependencies: string[]
  files: {
    name: string
    content: string
  }[]
  type: 'ui'
}

const getComponentFiles = (componentName: string) => {
  const componentDir = path.join(UI_PATH, componentName)
  const files = fs.readdirSync(componentDir)
  
  return files.map(file => ({
    name: file,
    content: fs.readFileSync(path.join(componentDir, file), 'utf8')
  }))
}

const main = () => {
  const components = fs.readdirSync(UI_PATH).filter(f => 
    fs.statSync(path.join(UI_PATH, f)).isDirectory()
  )

  const registryIndex: any[] = []

  components.forEach(name => {
    const files = getComponentFiles(name)
    
    // Simple dependency detection (heuristic)
    const dependencies: string[] = []
    if (files.some(f => f.content.includes('reka-ui'))) dependencies.push('reka-ui')
    if (files.some(f => f.content.includes('class-variance-authority'))) dependencies.push('class-variance-authority')
    if (files.some(f => f.content.includes('clsx'))) dependencies.push('clsx')
    if (files.some(f => f.content.includes('tailwind-merge'))) dependencies.push('tailwind-merge')
    if (files.some(f => f.content.includes('@vueuse/core'))) dependencies.push('@vueuse/core')

    const registryItem: RegistryItem = {
      name,
      type: 'ui',
      dependencies,
      registryDependencies: [], // Could be used if components depend on each other
      files
    }

    // Write individual component JSON
    const componentJsonPath = path.join(REGISTRY_PATH, 'components', `${name}.json`)
    fs.writeFileSync(componentJsonPath, JSON.stringify(registryItem, null, 2))

    // Add to index
    registryIndex.push({
      name,
      type: 'ui',
      files: files.map(f => f.name)
    })
  })

  // Write main index
  fs.writeFileSync(
    path.join(REGISTRY_PATH, 'index.json'),
    JSON.stringify(registryIndex, null, 2)
  )

  console.log(`Registry built with ${components.length} components.`)
}

main()
