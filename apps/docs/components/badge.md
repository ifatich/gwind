# Badge

Displays a badge or a tag.

## Preview

### Variants

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwBadge>Default</GwBadge>
    <GwBadge variant="secondary">Secondary</GwBadge>
    <GwBadge variant="destructive">Destructive</GwBadge>
    <GwBadge variant="outline">Outline</GwBadge>
    <GwBadge variant="success">Success</GwBadge>
    <GwBadge variant="warning">Warning</GwBadge>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx @ifatich/gwind-ui add badge
```

### 2. Manual Installation

Copy the following code into your `src/components/ui/badge/Badge.vue` file:

```vue
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--gw-ring)] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--gw-primary)] text-[var(--gw-primary-foreground)] shadow-sm',
        secondary:
          'border-transparent bg-[var(--gw-secondary)] text-[var(--gw-secondary-foreground)]',
        destructive:
          'border-transparent bg-[var(--gw-destructive)] text-[var(--gw-destructive-foreground)] shadow-sm',
        outline: 'text-[var(--gw-foreground)]',
        success:
          'border-transparent bg-[var(--color-success-500)] text-white shadow-sm',
        warning:
          'border-transparent bg-[var(--color-warning-500)] text-white shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type BadgeVariants = VariantProps<typeof badgeVariants>

interface Props extends PrimitiveProps {
  variant?: BadgeVariants['variant']
  class?: string
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  variant: 'default',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(badgeVariants({ variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
```

## Usage

```vue
<script setup>
import { Badge } from '@/components/ui'
</script>

<template>
  <Badge>New</Badge>
  <Badge variant="secondary">Draft</Badge>
  <Badge variant="destructive">Error</Badge>
  <Badge variant="success">Active</Badge>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'success' \| 'warning'` | `'default'` | Visual style variant |
| `as` | `string` | `'div'` | HTML element to render as |
| `class` | `string` | — | Additional CSS classes |
