<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, computed, type HTMLAttributes } from 'vue'
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
const ctx = context

const itemIndex = ref<number>(-1)
let unregister: (() => void) | null = null

onMounted(() => {
  const reg = ctx.registerSlide()
  itemIndex.value = reg.index
  unregister = reg.unregister
})

onUnmounted(() => {
  if (unregister) unregister()
})

const itemTransform = computed(() => {
  if (!ctx.loop.value || ctx.slideCount.value <= 1 || itemIndex.value < 0) {
    return ''
  }

  const N = ctx.slideCount.value
  const pos = ctx.virtualPos.value
  const i = itemIndex.value

  let rel = (i - (pos % N) + N) % N
  if (rel > N / 2) {
    rel -= N
  }
  const S = pos + rel
  const shift = S - i

  if (shift === 0) return ''

  const isHorizontal = ctx.orientation.value === 'horizontal'
  return isHorizontal
    ? `translate3d(${shift * 100}%, 0px, 0px)`
    : `translate3d(0px, ${shift * 100}%, 0px)`
})

const vItemShift = {
  mounted(el: HTMLElement, binding: { value: string }) {
    el.style.transform = binding.value
  },
  updated(el: HTMLElement, binding: { value: string }) {
    el.style.transform = binding.value
  },
}
</script>

<template>
  <div
    v-itemShift="itemTransform"
    role="group"
    aria-roledescription="slide"
    :class="
      cn(
        'w-full min-w-full max-w-full shrink-0 flex-none overflow-hidden',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
