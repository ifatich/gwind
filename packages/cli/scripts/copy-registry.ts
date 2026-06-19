import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const source = path.resolve(__dirname, '../../../registry')
const destination = path.resolve(__dirname, '../dist/registry')

if (!fs.existsSync(source)) {
  throw new Error(`Registry source not found: ${source}`)
}

fs.cpSync(source, destination, { recursive: true })
console.log(`Bundled registry at ${destination}`)
