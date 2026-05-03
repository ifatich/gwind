<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'
import { type HTMLAttributes, computed } from 'vue'

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
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const delegatedProps = computed(() => {
  const { class: _, variant: __, size: ___, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
