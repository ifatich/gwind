<script setup lang="ts">
import {
  ref,
  computed,
  provide,
  onMounted,
  onUnmounted,
  toRef,
  type HTMLAttributes,
} from 'vue'
import { useSwipe } from '@vueuse/core'
import { cn } from '../../../lib/utils'
import {
  CAROUSEL_INJECTION_KEY,
  type CarouselProps,
  type CarouselEmits,
  type CarouselContext,
} from '.'

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
  loop: true,
  autoplay: false,
  autoplayInterval: 5000,
})

const emit = defineEmits<CarouselEmits>()

const carouselRef = ref<HTMLElement | null>(null)
const virtualPos = ref(0)
const slideCount = ref(0)
const isPaused = ref(false)

let timer: ReturnType<typeof setInterval> | null = null

const selectedIndex = computed(() => {
  if (slideCount.value === 0) return 0
  return ((virtualPos.value % slideCount.value) + slideCount.value) % slideCount.value
})

const registerSlide = () => {
  const index = slideCount.value
  slideCount.value++
  if (props.autoplay && slideCount.value > 1 && !timer) {
    startAutoplay()
  }
  return {
    index,
    unregister: () => {
      slideCount.value = Math.max(0, slideCount.value - 1)
      if (slideCount.value <= 1) {
        stopAutoplay()
      }
      if (virtualPos.value >= slideCount.value && slideCount.value > 0) {
        virtualPos.value = slideCount.value - 1
      }
    },
  }
}

const canScrollPrev = computed(() => {
  if (slideCount.value <= 1) return false
  if (props.loop) return true
  return virtualPos.value > 0
})

const canScrollNext = computed(() => {
  if (slideCount.value <= 1) return false
  if (props.loop) return true
  return virtualPos.value < slideCount.value - 1
})

const scrollTo = (index: number) => {
  if (slideCount.value === 0) return
  if (props.loop) {
    const current = selectedIndex.value
    let diff = index - current
    if (diff > slideCount.value / 2) diff -= slideCount.value
    if (diff < -slideCount.value / 2) diff += slideCount.value
    virtualPos.value += diff
  } else {
    virtualPos.value = Math.max(0, Math.min(index, slideCount.value - 1))
  }
  emit('select', selectedIndex.value)
}

const scrollPrev = () => {
  if (slideCount.value <= 1) return
  if (props.loop || virtualPos.value > 0) {
    virtualPos.value--
    emit('select', selectedIndex.value)
  }
}

const scrollNext = () => {
  if (slideCount.value <= 1) return
  if (props.loop || virtualPos.value < slideCount.value - 1) {
    virtualPos.value++
    emit('select', selectedIndex.value)
  }
}

// Touch & Swipe Support via @vueuse/core
const { direction } = useSwipe(carouselRef, {
  passive: true,
  onSwipeEnd() {
    if (props.orientation === 'horizontal') {
      if (direction.value === 'left') {
        scrollNext()
      } else if (direction.value === 'right') {
        scrollPrev()
      }
    } else {
      if (direction.value === 'up') {
        scrollNext()
      } else if (direction.value === 'down') {
        scrollPrev()
      }
    }
  },
})

// Keyboard Navigation
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    scrollPrev()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    scrollNext()
  }
}

// Autoplay handling
const startAutoplay = () => {
  if (!props.autoplay || slideCount.value <= 1) return
  stopAutoplay()
  timer = setInterval(() => {
    if (!isPaused.value) {
      scrollNext()
    }
  }, props.autoplayInterval)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (props.autoplay && slideCount.value > 1) {
    startAutoplay()
  }
})

onUnmounted(() => {
  stopAutoplay()
})

const context: CarouselContext = {
  carouselRef,
  selectedIndex,
  virtualPos,
  slideCount,
  orientation: toRef(props, 'orientation'),
  loop: toRef(props, 'loop'),
  canScrollPrev,
  canScrollNext,
  scrollPrev,
  scrollNext,
  scrollTo,
  registerSlide,
}

provide(CAROUSEL_INJECTION_KEY, context)
</script>

<template>
  <div
    ref="carouselRef"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    :class="cn('relative focus:outline-none select-none', props.class)"
    @keydown="handleKeyDown"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <slot
      :selected-index="selectedIndex"
      :slide-count="slideCount"
      :can-scroll-prev="canScrollPrev"
      :can-scroll-next="canScrollNext"
      :scroll-prev="scrollPrev"
      :scroll-next="scrollNext"
      :scroll-to="scrollTo"
    />
  </div>
</template>
