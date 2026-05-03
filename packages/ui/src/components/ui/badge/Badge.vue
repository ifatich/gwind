<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../../lib/utils'
import { type HTMLAttributes, computed } from 'vue'

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
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})

const delegatedProps = computed(() => {
  const { class: _, variant: __, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(badgeVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
