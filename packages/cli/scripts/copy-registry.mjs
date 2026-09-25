import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageRoot = path.resolve(__dirname, '..')
const repoRoot = path.resolve(packageRoot, '../..')
const source = path.join(repoRoot, 'registry')
const distDestination = path.join(packageRoot, 'dist', 'registry')
const rootDestination = path.join(packageRoot, 'registry')

if (fs.existsSync(source)) {
  fs.cpSync(source, distDestination, { recursive: true })
  fs.cpSync(source, rootDestination, { recursive: true })
  console.log(`Successfully synced registry to ${distDestination} and ${rootDestination}`)
} else {
  console.warn(`Registry source directory not found at ${source}`)
}
