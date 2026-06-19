<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { RadioGroupRoot, type RadioGroupRootEmits, type RadioGroupRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<RadioGroupRootProps & {
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
const emits = defineEmits<RadioGroupRootEmits>()
const slots = defineSlots<{
  default?: () => unknown
  title?: () => unknown
  subtitle?: () => unknown
  caption?: () => unknown
}>()

const delegatedProps = computed(() => {
  const {
    class: _class,
    title: _title,
    subtitle: _subtitle,
    caption: _caption,
    error: _error,
    alignment: _alignment,
    styleMode: _styleMode,
    titleClass: _titleClass,
    subtitleClass: _subtitleClass,
    optionsClass: _optionsClass,
    captionClass: _captionClass,
    ...delegated
  } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)
const hasCaption = computed(() => Boolean(props.caption || props.error || slots.caption))
const hasStructure = computed(() => Boolean(
  props.title
  || props.subtitle
  || props.caption
  || props.error
  || slots.title
  || slots.subtitle
  || slots.caption
  || props.optionsClass
  || props.titleClass
  || props.subtitleClass
  || props.captionClass,
))
const isHorizontal = computed(() => props.alignment === 'horizontal')
const isWebsite = computed(() => props.styleMode === 'website')
</script>

<template>
  <div
    v-if="hasStructure"
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

    <RadioGroupRoot
      v-bind="forwarded"
      :class="
        cn(
          'grid gap-2',
          isHorizontal && 'grid-cols-1 sm:grid-cols-2',
          optionsClass,
        )
      "
    >
      <slot />
    </RadioGroupRoot>

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

  <RadioGroupRoot v-else :class="cn('grid gap-2', props.class)" v-bind="forwarded">
    <slot />
  </RadioGroupRoot>
</template>
