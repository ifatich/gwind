<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ProgressRoot, type ProgressRootProps } from 'reka-ui'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ProgressRootProps {
  modelValue?: number | null
  max?: number
  class?: HTMLAttributes['class']
  indicatorClass?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  max: 100,
})

const percentage = computed(() => {
  const val = props.modelValue ?? 0
  const max = props.max || 100
  return Math.min(100, Math.max(0, (val / max) * 100))
})

const vProgress = {
  mounted(el: HTMLElement, binding: { value: number }) {
    el.style.width = `${binding.value}%`
  },
  updated(el: HTMLElement, binding: { value: number }) {
    el.style.width = `${binding.value}%`
  },
}
</script>

<template>
  <ProgressRoot
    :model-value="props.modelValue"
    :max="props.max"
    :class="
      cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        props.class,
      )
    "
  >
    <div
      v-progress="percentage"
      data-slot="progress-indicator"
      :class="
        cn(
          'h-full rounded-full bg-primary transition-all duration-[660ms] ease-[cubic-bezier(0.65,0,0.35,1)]',
          props.indicatorClass,
        )
      "
    />
  </ProgressRoot>
</template>
