# Gwind Design System - Component Creation Rules

This document outlines the Standard Operating Procedure (SOP) for creating new UI components in the Gwind Design System monorepo. Use this as the primary reference to understand the structure, tech stack, and workflow without rescanning the project directory.

## 🛠️ Tech Stack & Architecture
- **Framework**: Vue 3 (Composition API, `<script setup lang="ts">`)
- **Styling**: Tailwind CSS (Utility-first)
- **Monorepo Manager**: pnpm workspaces + Turborepo
- **Documentation**: Vitepress (`apps/docs`)
- **Testing/Preview**: Vue SPA (`apps/playground`)
- **Core Components**: Adapts shadcn-vue architecture (components copied/generated via CLI from the `registry/` folder).

## 🎨 Styling & Design Tokens (gwind-v2)
**CRITICAL RULE**: Never hardcode styling values (Colors, Typography, Spacing). Use tokens from the `gwind-v2` library exclusively.
- **Colors**: Use semantic utility classes (e.g., `bg-black-200`, `border-black-200`, `text-lime-500`). Avoid arbitrary hex codes (e.g., `[#eeeeef]`). **IMPORTANT**: Figma designs use a tens format for color names (e.g., `black-20`), while the `gwind-v2` library uses a hundreds format (e.g., `black-200`). The actual color values are identical.
- **Typography**: Use specific gwind-v2 text tokens (e.g., `text-omicron`, `text-omega`, `text-sigma`). Do not hardcode `leading` if the typography token already includes line-height.
- **Spacing/Sizing**: Use standard Tailwind sizes (e.g., `px-5`, `min-h-5`, `w-24`). Avoid arbitrary pixel precision (e.g., `w-[98px]`, `h-[18px]`) unless absolutely necessary and no standard spacing token applies.

## 📂 Project Structure Overview
- `packages/ui/src/components/ui/`: Main directory for Vue component implementation.
- `packages/ui/src/components/ui/index.ts`: Internal export file (CRITICAL: used by Vitepress for auto-registering components with the `Gw` prefix).
- `packages/ui/src/index.ts`: Main export file for the `@gwind/ui` package.
- `registry/`: Auto-generated JSON directory (DO NOT edit manually).
- `apps/playground/src/App.vue`: Interactive component preview and testing.
- `apps/docs/`: Vitepress documentation.
  - `apps/docs/components/`: Markdown pages for each component.
  - `apps/docs/.vitepress/config.ts`: Vitepress sidebar configuration.

---

## 🚀 Component Creation Workflow

When instructed to create a new component (e.g., `kebab-case-name`), follow these sequential steps:

### 1. Component Implementation (packages/ui)
1. Create a new folder: `packages/ui/src/components/ui/<kebab-case-name>`. 
   *(Note: For component variants, place them inside the parent folder, e.g., `packages/ui/src/components/ui/input/input-rupiah`)*.
2. Create the Vue component file (e.g., `PascalCaseName.vue`). Use `<script setup lang="ts">`.
3. Create an `index.ts` file in the folder to export the component:
   ```ts
   export { default as PascalCaseName } from './PascalCaseName.vue'
   ```

### 2. Export Registration (CRITICAL STEP)
You MUST export the component in these two index files for the registry and documentation systems to recognize it:
1. **Internal Index** (`packages/ui/src/components/ui/index.ts`):
   ```ts
   export * from "./<kebab-case-name>";
   ```
   *(Note: If missed, the component will fail to render in Vitepress docs because it won't be registered as `GwPascalCaseName`)*.
2. **Package Index** (`packages/ui/src/index.ts`):
   ```ts
   export * from "./components/ui/<kebab-case-name>";
   ```

### 3. Build Registry
Never manually create or edit JSON files inside the `registry/` folder! They are dynamically generated.
- Run the following command from the workspace root:
  ```bash
  pnpm run build:registry
  ```
- This script reads `packages/ui` and updates `registry/components/<kebab-case-name>.json` and `registry/index.json`.

### 4. Playground Integration (apps/playground)
Add the component to the playground for testing:
- Open `apps/playground/src/App.vue`.
- Import the component from the local package (e.g., `@gwind/ui`).
- Define necessary reactive states (e.g., `const myValue = ref(false);`).
- Add the component name to the `items` navigation array (e.g., `items: ["Input", "PascalCaseName"]`).
- Render the component in the `<template>` inside a `<Card>` wrapper, following existing patterns. **CRITICAL**: Pastikan Anda memanggil dan mendemonstrasikan SEMUA *behavior* (perilaku), *variant*, dan *state* yang ada (misal: Default, Empty, Error, Disabled) seperti pada contoh gambar/Figma.

### 5. Vitepress Documentation (apps/docs)
Finally, create the documentation:
1. Create a new markdown file: `apps/docs/components/<kebab-case-name>.md`.
2. The Markdown structure must include:
   - `<script setup lang="ts">` for local documentation variables.
   - Title & Brief Description.
   - **Installation**: CLI command (`npx gwind-system-ui add <kebab-case-name>`).
   - **Preview**: Use the `<ShadowPreview>` tag and wrap the component with the `Gw` prefix (e.g., `<GwPascalCaseName>`).
   - **Behavior / Usage**: Explanation of functionality and `<template>` code snippets.
   - **States**: Visual render examples for different states. **CRITICAL**: Pastikan untuk memanggil dan menampilkan SEMUA *state* atau *behavior* yang ada (Default, Disabled, Error, dll) secara terpisah di blok dokumentasi.
   - **Props / Slots / Emits**: API reference table.
3. Register the page in the Vitepress sidebar:
   - Open `apps/docs/.vitepress/config.ts`.
   - Add a route object to the `items` array under the "Components" menu:
     ```ts
     { text: "Title Name", link: "/components/<kebab-case-name>" }
     ```

---
**Message for AI:**
Apply these rules whenever instructed to create or modify components in the Gwind Design System. This pattern is absolute and prevents errors like missing exports or Vitepress rendering failures.
