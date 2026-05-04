// @ts-nocheck — VitePress uses Vite 5 types, @tailwindcss/vite uses Vite 8
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  title: 'Gwind',
  description: 'A Vue 3 Design System — Accessible, Consistent, Performant',
  base: '/gwind/',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: { light: '/logo-light.svg', dark: '/logo-dark.svg' },
    siteTitle: 'Gwind',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Theming', link: '/guide/theming' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Label', link: '/components/label' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Card', link: '/components/card' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Select', link: '/components/select' },
          { text: 'Tabs', link: '/components/tabs' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gwind-ui' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Gwind Team',
    },

    search: {
      provider: 'local',
    },
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['../..'],
      },
    },
    resolve: {
      alias: [
        { find: '@gwind/ui', replacement: resolve(__dirname, '../../packages/ui/src') },
        { find: /^@\//, replacement: resolve(__dirname, '../../packages/ui/src') + '/' },
      ],
    },
  } as any,
})
