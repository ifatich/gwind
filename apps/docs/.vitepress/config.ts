// @ts-nocheck
import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'

export default defineConfig({
  title: 'Gwind',
  description: 'A Vue 3 Design System — Accessible, Consistent, Performant',
  base: '/gwind/',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
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
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Combobox', link: '/components/combobox' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: 'Select', link: '/components/select' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Textarea', link: '/components/textarea' },
          { text: 'Tooltip', link: '/components/tooltip' },
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
    server: {
      fs: {
        allow: ['../..'],
      },
    },
    resolve: {
      dedupe: ['vue'],
      alias: [
        { find: '@gwind/ui', replacement: resolve(__dirname, '../../packages/ui/src') },
        { find: /^@\//, replacement: resolve(__dirname, '../../packages/ui/src') + '/' },
      ],
    },
  } as any,
})
