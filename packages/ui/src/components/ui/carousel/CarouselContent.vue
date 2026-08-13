<script setup lang="ts">
import { inject, computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { CAROUSEL_INJECTION_KEY } from '.'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(CAROUSEL_INJECTION_KEY)
if (!context) {
  throw new Error('CarouselContent must be used within a Carousel component.')
}

const trackStyle = computed(() => {
  const isHorizontal = context.orientation.value === 'horizontal'
  const offset = -context.virtualPos.value * 100

  return {
    transform: isHorizontal
      ? `translate3d(${offset}%, 0px, 0px)`
      : `translate3d(0px, ${offset}%, 0px)`,
    transition: 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)',
  }
})
</script>

<template>
  <div class="w-full overflow-hidden rounded-2xl">
    <div
      :class="
        cn(
          'flex w-full will-change-transform',
          context.orientation.value === 'vertical' ? 'flex-col' : 'flex-row',
          props.class,
        )
      "
      :style="trackStyle"
    >
      <slot />
    </div>
  </div>
</template>
