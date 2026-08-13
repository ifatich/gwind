import { type InjectionKey, type Ref } from 'vue'

export { default as Carousel } from './Carousel.vue'
export { default as CarouselContent } from './CarouselContent.vue'
export { default as CarouselItem } from './CarouselItem.vue'
export { default as CarouselPrevious } from './CarouselPrevious.vue'
export { default as CarouselNext } from './CarouselNext.vue'
export { default as CarouselIndicators } from './CarouselIndicators.vue'
export { default as BannerCarousel } from './BannerCarousel.vue'

export interface CarouselProps {
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  class?: any
}

export interface CarouselEmits {
  (e: 'select', index: number): void
}

export interface CarouselContext {
  carouselRef: Ref<HTMLElement | null>
  selectedIndex: Ref<number>
  virtualPos: Ref<number>
  slideCount: Ref<number>
  orientation: Ref<'horizontal' | 'vertical'>
  loop: Ref<boolean>
  canScrollPrev: Ref<boolean>
  canScrollNext: Ref<boolean>
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  registerSlide: () => { index: number; unregister: () => void }
}

export const CAROUSEL_INJECTION_KEY: InjectionKey<CarouselContext> = Symbol('CAROUSEL_INJECTION_KEY')
