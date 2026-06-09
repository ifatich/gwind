import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@gwind/ui': resolve(__dirname, '../../packages/ui/src'),
      '@': resolve(__dirname, '../../packages/ui/src'),
      vue: resolve(__dirname, 'node_modules/vue'),
    },
  },
})
