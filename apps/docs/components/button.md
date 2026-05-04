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
    <GwButton variant="primary">Primary</GwButton>
    <GwButton variant="secondary">Secondary</GwButton>
    <GwButton variant="destructive">Destructive</GwButton>
    <GwButton variant="outline">Outline</GwButton>
    <GwButton variant="ghost">Ghost</GwButton>
    <GwButton variant="tertiary">Tertiary</GwButton>
    <GwButton variant="link">Link</GwButton>
  </div>
</div>

### Sizes

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton size="sm">Small</GwButton>
    <GwButton size="md">Medium (Default)</GwButton>
    <GwButton size="lg">Large</GwButton>
    <GwButton size="xl">Extra Large</GwButton>
    <GwButton size="fab">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
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

Copy the following code into your `src/components/ui/button/Button.vue` file:

```vue
<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'

// Local ripple directive for portability
const vRipple = {
  mounted(el: HTMLElement) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    el.addEventListener('pointerdown', function (e: PointerEvent) {
      if (el.classList.contains('combobox')) return

      const rect = el.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.position = 'absolute'
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.background = 'rgba(0,0,0,0.15)'
      ripple.style.borderRadius = '50%'
      ripple.style.pointerEvents = 'none'
      ripple.style.transform = 'scale(0)'
      ripple.style.transition = 'transform 0.4s, opacity 0.6s'
      ripple.style.zIndex = '1'
      el.appendChild(ripple)

      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)'
        ripple.style.opacity = '0'
      })

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  },
}

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  disabled: false,
})
</script>

<template>
  <Primitive
    v-ripple
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
          state: props.disabled ? 'disabled' : undefined,
        }),
        props.class,
      )
    "
    :disabled="disabled"
  >
    <slot />
  </Primitive>
</template>
```

And the variants in `src/components/ui/button/index.ts`:

```ts
import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'cursor-pointer font-bold inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-lime-600 active:bg-lime-700',
        primary: 'bg-primary text-primary-foreground hover:bg-lime-600 active:bg-lime-700',
        destructive: 'bg-red-500 text-destructive-foreground hover:bg-red-600 active:bg-red-700',
        outline:
          'border border-input bg-primary/0 hover:border-primary/80 active:bg-lime-100',
        combobox: 'border border-input bg-white hover:border-lime-500',
        secondary:
          'bg-white text-lime-500 border-lime-500 border hover:text-lime-600 hover:border-lime-600 active:text-lime-600 active:border-lime-600',
        ghost: 'bg-foreground/0 border-0 hover:bg-foreground/8 active:bg-foreground/20',
        'ghost-fab': 'bg-foreground/5 border-0 hover:bg-foreground/15 active:bg-foreground/20',
        link: 'text-omicron text-primary-on-text py-0 px-1 h-full hover:text-lime-500 focus:text-lime-600 active:text-lime-600',
        neutral:
          'bg-white text-black-600 border-black-500 border hover:text-lime-500 focus:text-lime-600 active:text-lime-600',
        tertiary: 'bg-white text-lime-500 hover:text-lime-600 active:text-lime-600',
        icon: 'bg-primary text-primary-foreground hover:opacity-500',
      },
      size: {
        sm: 'rounded-sm h-8 w-auto px-2 !text-sigma',
        md: 'rounded-md h-10 w-auto px-4 !text-omicron',
        lg: 'rounded-md h-12 w-auto px-4 !text-omicron',
        xl: 'rounded-lg h-14 w-auto px-4 !text-omicron',
        fab: 'h-14 w-14 rounded-full overflow-hidden px-4 transition !text-omicron',
      },
      state: {
        disabled: 'opacity-65 bg-black-500/65 text-white pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
```

### 2. CLI Installation

```bash
npx gwind-system-ui add button
```

## Usage

```vue
<script setup>
import { Button } from '@/components/ui/button'
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
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'combobox' \| 'ghost' \| 'ghost-fab' \| 'link' \| 'neutral' \| 'tertiary' \| 'icon'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'fab'` | `'md'` | Size preset |
| `as` | `string` | `'button'` | HTML element or component to render as |
| `disabled` | `boolean` | `false` | Disable interaction |
| `class` | `string` | — | Additional CSS classes |
