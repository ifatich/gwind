# Getting Started

Gwind is a Vue 3 Design System built with **Reka UI** and **Tailwind CSS v4**, following the **shadcn/ui** source-code distribution model.

## Prerequisites

- **Node.js** ≥ 18
- **Vue 3** ≥ 3.5
- **Tailwind CSS v4** configured in your project
- **Reka UI** ≥ 2.x

## Installation

### 1. CLI Installation (Recommended)

The fastest way to get started is using the Gwind CLI. It will handle the setup of your utilities and configuration.

```bash
# 1. Initialize your project
npx gwind-system-ui init

# 2. Add your first component
npx gwind-system-ui add button
```

### 2. Manual Installation

If you prefer to set up everything manually:

#### 1. Install dependencies

```bash
pnpm add reka-ui clsx tailwind-merge class-variance-authority @vueuse/core
```

#### 2. Add the `cn` utility

Create `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### 3. Copy components

Copy the source code from the component pages into your `src/components/ui/` directory.

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── Button.vue
│       ├── Input.vue
│       ├── Badge.vue
│       ├── Card.vue
│       ├── Dialog.vue
│       ├── Select.vue
│       └── Tabs.vue
├── lib/
│   └── utils.ts
└── styles/
    └── main.css
```
