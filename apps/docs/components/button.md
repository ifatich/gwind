<script setup>
import { ref } from 'vue'
</script>

# Button

Displays a button or a component that looks like a button.

## Preview

### Variants

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton>Default</GwButton>
    <GwButton variant="secondary">Secondary</GwButton>
    <GwButton variant="destructive">Destructive</GwButton>
    <GwButton variant="outline">Outline</GwButton>
    <GwButton variant="ghost">Ghost</GwButton>
    <GwButton variant="link">Link</GwButton>
  </div>
</div>

### Sizes

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton size="sm">Small</GwButton>
    <GwButton size="default">Default</GwButton>
    <GwButton size="lg">Large</GwButton>
    <GwButton size="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    </GwButton>
  </div>
</div>

### Disabled

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton disabled>Disabled</GwButton>
    <GwButton variant="outline" disabled>Disabled Outline</GwButton>
  </div>
</div>

## Installation

### 1. Manual Installation

Copy the following code into your `src/components/ui/Button.vue` file:

```vue
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--gw-primary)] text-[var(--gw-primary-foreground)] shadow-sm hover:bg-[var(--gw-primary)]/90 active:scale-[0.98]',
        destructive:
          'bg-[var(--gw-destructive)] text-[var(--gw-destructive-foreground)] shadow-sm hover:bg-[var(--gw-destructive)]/90 active:scale-[0.98]',
        outline:
          'border border-[var(--gw-input)] bg-transparent shadow-xs hover:bg-[var(--gw-accent)] hover:text-[var(--gw-accent-foreground)]',
        secondary:
          'bg-[var(--gw-secondary)] text-[var(--gw-secondary-foreground)] shadow-xs hover:bg-[var(--gw-secondary)]/80 active:scale-[0.98]',
        ghost:
          'hover:bg-[var(--gw-accent)] hover:text-[var(--gw-accent-foreground)]',
        link:
          'text-[var(--gw-primary)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: string
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
```

### 2. CLI Installation (Coming Soon)

```bash
npx gwind-system-ui add button
```

## Usage

```vue
<script setup>
import { Button } from '@/components/ui'
</script>

<template>
  <Button>Click me</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive" size="lg">Delete</Button>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'default'` | Visual style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Size preset |
| `as` | `string` | `'button'` | HTML element or component to render as |
| `disabled` | `boolean` | `false` | Disable interaction |
| `class` | `string` | — | Additional CSS classes |
