<script setup lang="ts">
import { inject, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { CAROUSEL_INJECTION_KEY } from '.'
import Button from '../button/Button.vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(CAROUSEL_INJECTION_KEY)
if (!context) {
  throw new Error('CarouselPrevious must be used within a Carousel component.')
}
</script>

<template>
  <Button
    type="button"
    aria-label="Previous slide"
    variant="neutral"
    size="lg"
    :disabled="!context.canScrollPrev.value"
    :class="
      cn(
        '!rounded-full size-10 p-0 bg-white hover:bg-black-100 text-black-800 shadow-drop-1 border border-black-200 transition-colors focus-visible:ring-lime-500 disabled:opacity-40 disabled:cursor-not-allowed',
        props.class,
      )
    "
    @click="context.scrollPrev"
  >
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5 shrink-0 text-black-800"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </slot>
  </Button>
</template>
