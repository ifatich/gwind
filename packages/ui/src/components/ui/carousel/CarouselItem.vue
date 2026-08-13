<script setup lang="ts">
import { inject, onMounted, onUnmounted, computed, ref, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { CAROUSEL_INJECTION_KEY } from '.'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const context = inject(CAROUSEL_INJECTION_KEY)
if (!context) {
  throw new Error('CarouselItem must be used within a Carousel component.')
}

const itemIndex = ref<number>(-1)
let unregister: (() => void) | null = null

onMounted(() => {
  const reg = context.registerSlide()
  itemIndex.value = reg.index
  unregister = reg.unregister
})

onUnmounted(() => {
  if (unregister) unregister()
})

const itemStyle = computed(() => {
  if (!context.loop.value || context.slideCount.value <= 1 || itemIndex.value < 0) {
    return {}
  }

  const N = context.slideCount.value
  const pos = context.virtualPos.value
  const i = itemIndex.value

  let rel = (i - (pos % N) + N) % N
  if (rel > N / 2) {
    rel -= N
  }
  const S = pos + rel
  const shift = S - i

  const isHorizontal = context.orientation.value === 'horizontal'
  return {
    transform: isHorizontal
      ? `translate3d(${shift * 100}%, 0px, 0px)`
      : `translate3d(0px, ${shift * 100}%, 0px)`,
  }
})
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="
      cn(
        'w-full min-w-full max-w-full shrink-0 flex-none overflow-hidden',
        props.class,
      )
    "
    :style="itemStyle"
  >
    <slot />
  </div>
</template>
