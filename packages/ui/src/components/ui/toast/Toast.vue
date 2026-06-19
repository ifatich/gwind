<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    variant?: 'default' | 'success' | 'warning' | 'error'
    class?: HTMLAttributes['class']
    titleClass?: HTMLAttributes['class']
    descriptionClass?: HTMLAttributes['class']
  }>(),
  {
    variant: 'default',
  },
)

const variantClass = computed(() => ({
  default: 'border-black-200 bg-white text-black-800',
  success: 'border-lime-500 bg-lime-100 text-black-800',
  warning: 'border-orange-500 bg-orange-100 text-black-800',
  error: 'border-red-500 bg-red-100 text-black-800',
}[props.variant]))
</script>

<template>
  <div
    role="status"
    :class="
      cn(
        'grid w-full max-w-sm gap-1 rounded-md border p-4 shadow-sm animate-in fade-in-0 slide-in-from-top-2',
        variantClass,
        props.class,
      )
    "
  >
    <div v-if="title || $slots.title" :class="cn('text-omicron font-extrabold leading-6', titleClass)">
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      v-if="description || $slots.default"
      :class="cn('text-sigma font-semibold leading-5 text-black-600', descriptionClass)"
    >
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>
