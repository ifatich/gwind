<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    label?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    size: 'md',
    label: 'Loading',
  },
)

const sizeClass = computed(() => ({
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
}[props.size]))
</script>

<template>
  <span
    :class="
      cn(
        'inline-block animate-spin rounded-full border-current border-r-transparent text-current',
        sizeClass,
        props.class,
      )
    "
    role="status"
    :aria-label="label"
  >
    <span class="sr-only">{{ label }}</span>
  </span>
</template>
