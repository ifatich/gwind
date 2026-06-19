<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    fallback?: string
    size?: 'sm' | 'md' | 'lg'
    class?: HTMLAttributes['class']
    imageClass?: HTMLAttributes['class']
    fallbackClass?: HTMLAttributes['class']
  }>(),
  {
    size: 'md',
  },
)

const hasImageError = ref(false)

const sizeClass = computed(() => ({
  sm: 'h-8 w-8 text-omega',
  md: 'h-10 w-10 text-sigma',
  lg: 'h-12 w-12 text-omicron',
}[props.size]))

const fallbackText = computed(() => {
  if (props.fallback) return props.fallback.slice(0, 2).toUpperCase()
  if (!props.alt) return ''

  return props.alt
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()
})
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-black-100 align-middle text-black-800',
        sizeClass,
        props.class,
      )
    "
  >
    <img
      v-if="src && !hasImageError"
      :src="src"
      :alt="alt ?? ''"
      :class="cn('h-full w-full object-cover animate-in fade-in-0 zoom-in-95', imageClass)"
      @error="hasImageError = true"
    >
    <span
      v-else
      :class="cn('font-extrabold leading-none animate-in fade-in-0 zoom-in-95', fallbackClass)"
      aria-hidden="true"
    >
      <slot>{{ fallbackText }}</slot>
    </span>
  </span>
</template>
