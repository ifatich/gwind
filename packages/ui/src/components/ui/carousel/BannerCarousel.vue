<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import Carousel from './Carousel.vue'
import CarouselContent from './CarouselContent.vue'
import CarouselItem from './CarouselItem.vue'
import CarouselPrevious from './CarouselPrevious.vue'
import CarouselNext from './CarouselNext.vue'
import CarouselIndicators from './CarouselIndicators.vue'
import Badge from '../badge/Badge.vue'
import Button from '../button/Button.vue'

export interface BannerSlide {
  id?: string | number
  tag?: string
  title: string
  description?: string
  image: string
  imageAlt?: string
  actionLabel?: string
  actionUrl?: string
}

interface Props {
  items: BannerSlide[]
  autoplay?: boolean
  autoplayInterval?: number
  loop?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  autoplayInterval: 5000,
  loop: true,
})

const emit = defineEmits<{
  (e: 'clickAction', slide: BannerSlide, index: number): void
  (e: 'select', index: number): void
}>()
</script>

<template>
  <Carousel
    :autoplay="props.autoplay"
    :autoplay-interval="props.autoplayInterval"
    :loop="props.loop"
    :class="cn('w-full relative overflow-hidden rounded-2xl shadow-drop-2', props.class)"
    @select="(idx) => emit('select', idx)"
  >
    <!-- Slide Track: Background photo, overlay, tag, title, description slide together -->
    <CarouselContent>
      <CarouselItem
        v-for="(slide, index) in props.items"
        :key="slide.id ?? index"
        class="relative min-h-[460px] md:min-h-[540px] flex flex-col justify-end p-8 sm:p-12 md:p-16 pb-24 md:pb-28 overflow-hidden select-none"
      >
        <!-- Background Image (Slides) -->
        <img
          :src="slide.image"
          :alt="slide.imageAlt ?? slide.title"
          class="absolute inset-0 size-full object-cover object-center pointer-events-none z-0"
        />

        <!-- Dark Scrim Overlay (Slides) -->
        <div
          class="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[1]"
        />

        <!-- Banner Text & CTA Content Area (Slides) -->
        <div class="relative z-10 max-w-3xl w-full flex flex-col items-start gap-3 text-white">
          <!-- Tag Badge -->
          <Badge
            v-if="slide.tag"
            class="!bg-lime-500 !text-white text-sigma font-extrabold px-3 py-1.5 rounded-sm shadow-drop-1 tracking-wide border-0"
          >
            {{ slide.tag }}
          </Badge>

          <!-- Title -->
          <h2 class="font-extrabold text-epsilon md:text-delta text-white leading-tight tracking-tight drop-shadow-sm">
            {{ slide.title }}
          </h2>

          <!-- Description -->
          <p
            v-if="slide.description"
            class="font-semibold text-omicron text-white/90 leading-relaxed line-clamp-3 max-w-2xl"
          >
            {{ slide.description }}
          </p>

          <!-- Action Button -->
          <Button
            v-if="slide.actionLabel"
            type="button"
            variant="default"
            size="md"
            class="mt-1 shadow-drop-1"
            @click="emit('clickAction', slide, index)"
          >
            {{ slide.actionLabel }}
          </Button>
        </div>
      </CarouselItem>
    </CarouselContent>

    <!-- FIXED CONTROLS: Prev & Next Buttons placed at bottom-left, FIXED outside CarouselContent -->
    <div
      class="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-12 md:left-14 z-20 flex items-center gap-4"
    >
      <CarouselPrevious />
      <CarouselNext />
    </div>

    <!-- FIXED INDICATORS: Pill bars placed at bottom-right, FIXED outside CarouselContent -->
    <CarouselIndicators
      class="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-12 md:right-14 z-20"
    />
  </Carousel>
</template>
