<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    decorative?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    orientation: 'horizontal',
    decorative: true,
  },
)

const orientationClass = computed(() =>
  props.orientation === 'vertical' ? 'h-full min-h-6 w-px' : 'h-px w-full',
)
</script>

<template>
  <div
    :role="decorative ? 'presentation' : 'separator'"
    :aria-orientation="decorative ? undefined : orientation"
    :class="cn('shrink-0 bg-black-200', orientationClass, props.class)"
  />
</template>
