<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, useId } from 'vue'
import { RadioGroupIndicator, RadioGroupItem } from 'reka-ui'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    caption?: string
    error?: string
    value: string
    disabled?: boolean
    styleMode?: 'website' | 'mobile-apps'
    class?: HTMLAttributes['class']
    radioClass?: HTMLAttributes['class']
    labelClass?: HTMLAttributes['class']
    captionClass?: HTMLAttributes['class']
  }>(),
  {
    styleMode: 'website',
  },
)

const generatedId = useId()
const radioId = computed(() => props.id ?? generatedId)
const captionId = computed(() => `${radioId.value}-caption`)
const slots = defineSlots<{
  default?: () => unknown
  caption?: () => unknown
}>()
const hasCaption = computed(() => Boolean(props.caption || props.error || slots.caption))
const isWebsite = computed(() => props.styleMode === 'website')
</script>

<template>
  <RadioGroupItem
    v-bind="$attrs"
    :id="radioId"
    as="div"
    :value="value"
    :disabled="disabled"
    :aria-describedby="hasCaption ? captionId : undefined"
    :class="
      cn(
        'group/radio-field flex w-full gap-2 transition-[background-color,border-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
        hasCaption ? 'items-start' : 'items-center',
        isWebsite
          ? 'max-w-[328px] cursor-pointer rounded-md border border-black-200 p-3 hover:border-lime-600 data-[state=checked]:border-lime-400 data-[state=checked]:bg-lime-100'
          : 'cursor-pointer bg-white',
        disabled && 'cursor-not-allowed hover:border-black-200',
        props.class,
      )
    "
  >
    <span
      data-slot="radio"
      :class="
        cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
          radioClass,
        )
      "
    >
      <span
        class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-black-500 bg-white text-lime-500 transition-[background-color,border-color,transform] duration-150 ease-out group-hover/radio-field:border-lime-600 group-data-[state=checked]/radio-field:border-lime-500 group-data-[disabled]/radio-field:border-black-400 group-data-[disabled]/radio-field:text-black-500"
      >
        <RadioGroupIndicator class="flex items-center justify-center text-current data-[state=checked]:animate-in data-[state=checked]:fade-in-0 data-[state=checked]:zoom-in-75">
          <span aria-hidden="true" class="h-2 w-2 rounded-full bg-current" />
        </RadioGroupIndicator>
      </span>
    </span>

    <div :class="cn('min-w-0 flex-1', hasCaption && 'grid gap-0.5')">
      <div
        :class="
          cn(
            'h-6 truncate text-omicron font-semibold leading-6 text-black-800 transition-colors duration-150 group-hover/radio-field:text-lime-600',
            disabled && 'text-black-600 group-hover/radio-field:text-black-600',
            labelClass,
          )
        "
      >
        <slot>{{ label }}</slot>
      </div>
      <div
        v-if="hasCaption"
        :id="captionId"
        :class="
          cn(
            'h-[18px] truncate !text-omega font-semibold leading-[18px]',
            error ? 'text-red-500' : 'text-black-600',
            disabled && 'text-black-500',
            captionClass,
          )
        "
      >
        <slot name="caption">{{ error || caption }}</slot>
      </div>
    </div>
  </RadioGroupItem>
</template>
