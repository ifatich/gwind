// @ts-nocheck
import { defineConfig } from "vitepress";
import { resolve } from "node:path";

export default defineConfig({
  title: "Gwind",
  description: "A Vue 3 Design System — Accessible, Consistent, Performant",
  base: "/gwind/",

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  themeConfig: {
    logo: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
    siteTitle: "Gwind",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Design", link: "/guide/design" },
      { text: "Components", link: "/components/accordion" },
    ],

    sidebar: [
      {
        text: "Guide",
        collapsed: true,
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Design", link: "/guide/design" },
          { text: "Motion", link: "/guide/motion" },
          { text: "Theming", link: "/guide/theming" },
        ],
      },
      {
        text: "Components",
        collapsed: true,
        items: [
          { text: "Accordion", link: "/components/accordion" },
          { text: "Alert", link: "/components/alert" },
          { text: "Avatar", link: "/components/avatar" },
          { text: "Badge", link: "/components/badge" },
          { text: "Breadcrumb", link: "/components/breadcrumb" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Checkbox", link: "/components/checkbox" },
          { text: "Combobox", link: "/components/combobox" },
          { text: "Dialog", link: "/components/dialog" },
          { text: "Divider", link: "/components/divider" },
          { text: "Dropdown", link: "/components/dropdown" },
          {
            text: "Input",
            link: "/components/input",
            collapsed: true,
            items: [
              { text: "Input Affix", link: "/components/input-affix" },
              { text: "Input Field", link: "/components/input-field" },
              { text: "Input File", link: "/components/input-file" },
              { text: "Input Icons", link: "/components/input-icons" },
              { text: "Input Rupiah", link: "/components/input-rupiah" },
            ],
          },
          { text: "Label", link: "/components/label" },
          { text: "Link", link: "/components/link" },
          { text: "Pagination", link: "/components/pagination" },
          { text: "Popover", link: "/components/popover" },
          { text: "Progress", link: "/components/progress" },
          { text: "Radio Group", link: "/components/radio-group" },
          { text: "Select", link: "/components/select" },
          { text: "Spinner", link: "/components/spinner" },
          { text: "Switch", link: "/components/switch" },
          { text: "Table", link: "/components/table" },
          { text: "Tabs", link: "/components/tabs" },
          { text: "Textarea", link: "/components/textarea" },
          { text: "Toast", link: "/components/toast" },
          { text: "Tooltip", link: "/components/tooltip" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/gwind-ui" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Gwind Team",
    },

    search: {
      provider: "local",
    },
  },

  vite: {
    server: {
      fs: {
        allow: ["../.."],
      },
    },
    resolve: {
      dedupe: ["vue"],
      alias: [
        {
          find: "@gwind/ui",
          replacement: resolve(__dirname, "../../packages/ui/src"),
        },
        {
          find: /^@\//,
          replacement: resolve(__dirname, "../../packages/ui/src") + "/",
        },
      ],
    },
  } as any,
});
