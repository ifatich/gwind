# Badge

Displays a badge or a tag.

## Preview

### Variants

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwBadge variant="green">Green (Default)</GwBadge>
    <GwBadge variant="brocoli">Brocoli</GwBadge>
    <GwBadge variant="orange">Orange</GwBadge>
    <GwBadge variant="blue">Blue</GwBadge>
    <GwBadge variant="red">Red</GwBadge>
    <GwBadge variant="outline">Outline</GwBadge>
  </div>
</div>

### With Icons

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwBadge variant="green">
      Success
      <template #rightIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </template>
    </GwBadge>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add badge
```

### 2. Manual Installation

Copy the following code into your `src/components/ui/badge/Badge.vue` file:

```vue
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { type BadgeVariants, badgeVariants } from '.'

const props = withDefaults(
  defineProps<{
    variant?: BadgeVariants['variant']
    class?: HTMLAttributes['class']
    modelValue?: boolean
  }>(),
  {
    modelValue: true,
  },
)
</script>

<template>
  <div
    :class="
      cn(
        badgeVariants({ variant: props.variant }),
        !props.modelValue && 'hidden',
        props.class,
      )
    "
  >
    <slot />
    <div
      :class="
        cn(`additional-item cursor-pointer ml-3`, !$slots.rightIcon && `hidden`)
      "
    >
      <slot name="rightIcon" />
    </div>
  </div>
</template>
```

And the variants in `src/components/ui/badge/index.ts`:

```ts
import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  '!text-omega font-bold w-fit inline-flex items-center rounded-md px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        green: '!text-omega border-transparent bg-lime-100 text-lime-500',
        brocoli: '!text-omega border-transparent bg-broccoli-100 text-broccoli-500',
        orange: '!text-omega border-transparent bg-orange-100 text-orange-500',
        blue: '!text-omega border-transparent bg-blue-100 text-blue-500',
        red: '!text-omega border-transparent bg-red-100 text-red-500',
        outline: '!text-omega text-foreground',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
```

## Usage

```vue
<script setup>
import { Badge } from '@/components/ui/badge'
import { ref } from 'vue'

const showBadge = ref(true)
</script>

<template>
  <Badge variant="green">Success</Badge>
  <Badge v-model="showBadge" variant="red">Closable Badge</Badge>
  
  <Badge variant="blue">
    Update Available
    <template #rightIcon>
      <span @click="showBadge = false">×</span>
    </template>
  </Badge>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'green' \| 'brocoli' \| 'orange' \| 'blue' \| 'red' \| 'outline'` | `'green'` | Visual style variant |
| `modelValue` | `boolean` | `true` | Visibility control (v-model) |
| `class` | `string` | — | Additional CSS classes |

## Slots

| Name | Description |
|------|-------------|
| `default` | The main content of the badge |
| `rightIcon` | Content to be displayed on the right side of the badge |
