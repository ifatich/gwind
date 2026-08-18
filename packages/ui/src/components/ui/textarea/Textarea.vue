<script setup lang="ts">
import { computed, useAttrs, useSlots, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { useVModel } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    containerClass?: HTMLAttributes['class']
    defaultValue?: string | number
    modelValue?: string | number
    maxlength?: number | string
    maxLength?: number | string
    showCount?: string | boolean
    counter?: string | boolean
    counterClass?: HTMLAttributes['class']
  }>(),
  {
    showCount: undefined,
    counter: undefined,
  },
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const attrs = useAttrs()
const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const max = computed(() => {
  const m =
    props.maxlength ??
    props.maxLength ??
    (attrs.maxlength as string | number | undefined) ??
    (attrs.maxLength as string | number | undefined)
  return m !== undefined && m !== '' ? Number(m) : undefined
})

const currentLength = computed(() => {
  if (modelValue.value === undefined || modelValue.value === null) return 0
  return String(modelValue.value).length
})

const isCounterVisible = computed(() => {
  if (
    props.showCount === false ||
    props.showCount === 'false' ||
    props.counter === false ||
    props.counter === 'false'
  ) {
    return false
  }
  return Boolean(
    props.showCount === true ||
      props.showCount === '' ||
      props.counter === true ||
      props.counter === '' ||
      max.value !== undefined ||
      slots.counter,
  )
})

const countText = computed(() => {
  if (max.value !== undefined) {
    return `${currentLength.value}/${max.value}`
  }
  return `${currentLength.value}`
})
</script>

<template>
  <div :class="cn('relative w-full', props.containerClass)">
    <textarea
      v-bind="attrs"
      v-model="modelValue"
      :maxlength="max"
      :class="
        cn(
          'flex min-h-20 w-full resize-none rounded-md !border border-black-200 bg-white px-3 pt-3 text-omicron font-semibold text-black-800 outline-none transition-colors duration-100 placeholder:text-black-500 hover:border-lime-600 focus:border-lime-500 focus-visible:border-lime-500 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:border-black-400 disabled:bg-black-200 disabled:text-black-600 disabled:placeholder:text-black-600 disabled:hover:border-black-400 disabled:focus:border-black-400',
          isCounterVisible ? 'pb-7' : 'pb-3',
          props.class,
        )
      "
    />
    <span
      v-if="isCounterVisible"
      :class="
        cn(
          'pointer-events-none absolute bottom-2.5 right-3 z-10 text-omega font-semibold text-black-500 select-none',
          max !== undefined && currentLength >= max && '!text-red-500',
          props.counterClass,
        )
      "
    >
      <slot name="counter" :count="currentLength" :max="max">
        {{ countText }}
      </slot>
    </span>
  </div>
</template>
