<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    caption?: string
    error?: string
    alignment?: 'horizontal' | 'vertical'
    styleMode?: 'website' | 'mobile-apps'
    class?: HTMLAttributes['class']
    titleClass?: HTMLAttributes['class']
    subtitleClass?: HTMLAttributes['class']
    optionsClass?: HTMLAttributes['class']
    captionClass?: HTMLAttributes['class']
  }>(),
  {
    alignment: 'horizontal',
    styleMode: 'website',
  },
)

const slots = defineSlots<{
  default?: () => unknown
  title?: () => unknown
  subtitle?: () => unknown
  caption?: () => unknown
}>()
const hasCaption = computed(() => Boolean(props.caption || props.error || slots.caption))
const isHorizontal = computed(() => props.alignment === 'horizontal')
const isWebsite = computed(() => props.styleMode === 'website')
</script>

<template>
  <div
    :class="
      cn(
        'grid gap-2',
        isWebsite && isHorizontal ? 'w-full max-w-[600px]' : 'w-full max-w-[328px]',
        props.class,
      )
    "
  >
    <div class="grid gap-1">
      <div
        v-if="title || $slots.title"
        :class="cn('!text-sigma font-extrabold leading-5 text-black-800', titleClass)"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="subtitle || $slots.subtitle"
        :class="cn('!text-omega font-semibold leading-[18px] text-black-600', subtitleClass)"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
    </div>

    <div
      :class="
        cn(
          'grid gap-2',
          isHorizontal && 'grid-cols-1 sm:grid-cols-2',
          optionsClass,
        )
      "
    >
      <slot />
    </div>

    <div
      v-if="hasCaption"
      :class="
        cn(
          '!text-omega font-semibold leading-[18px]',
          error ? 'text-red-500' : 'text-black-600',
          captionClass,
        )
      "
    >
      <slot name="caption">{{ error || caption }}</slot>
    </div>
  </div>
</template>
