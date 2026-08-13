<script setup lang="ts">
import { inject, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { CAROUSEL_INJECTION_KEY } from '.'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(CAROUSEL_INJECTION_KEY)
if (!context) {
  throw new Error('CarouselIndicators must be used within a Carousel component.')
}
</script>

<template>
  <div
    v-if="context.slideCount.value > 1"
    :class="cn('flex items-center gap-2', props.class)"
    role="tablist"
    aria-label="Slides"
  >
    <button
      v-for="index in context.slideCount.value"
      :key="index - 1"
      type="button"
      role="tab"
      :aria-selected="context.selectedIndex.value === index - 1"
      :aria-label="`Go to slide ${index}`"
      :class="
        cn(
          'h-1 rounded-[3px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500',
          context.selectedIndex.value === index - 1
            ? 'w-12 bg-white opacity-100'
            : 'w-6 bg-white opacity-20 hover:opacity-50',
        )
      "
      @click="context.scrollTo(index - 1)"
    />
  </div>
</template>
