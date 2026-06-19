<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    href?: string
    target?: string
    rel?: string
    disabled?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    href: '#',
  },
)
</script>

<template>
  <a
    :href="disabled ? undefined : href"
    :target="disabled ? undefined : target"
    :rel="rel ?? (target === '_blank' ? 'noreferrer' : undefined)"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
    :class="
      cn(
        'inline-flex w-fit items-center gap-1 text-omicron font-semibold leading-6 text-lime-600 underline-offset-4 transition-colors hover:text-lime-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
        disabled && 'pointer-events-none text-black-600',
        props.class,
      )
    "
  >
    <slot />
  </a>
</template>
