<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, useId, watch } from 'vue'
import { cn } from '../../../lib/utils'
import Checkbox from './Checkbox.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    caption?: string
    error?: string
    modelValue?: boolean
    defaultValue?: boolean
    disabled?: boolean
    styleMode?: 'website' | 'mobile-apps'
    class?: HTMLAttributes['class']
    checkboxClass?: HTMLAttributes['class']
    labelClass?: HTMLAttributes['class']
    captionClass?: HTMLAttributes['class']
  }>(),
  {
    defaultValue: false,
    styleMode: 'website',
  },
)

const emits = defineEmits<{
  (event: 'update:modelValue', payload: boolean): void
}>()

const generatedId = useId()
const checkboxId = computed(() => props.id ?? generatedId)
const captionId = computed(() => `${checkboxId.value}-caption`)
const internalValue = ref(props.modelValue ?? props.defaultValue)
const isChecked = computed(() => props.modelValue ?? internalValue.value)
const slots = defineSlots<{
  default?: () => unknown
  caption?: () => unknown
}>()
const hasCaption = computed(() => Boolean(props.caption || props.error || slots.caption))
const isWebsite = computed(() => props.styleMode === 'website')

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) internalValue.value = value
  },
)

function updateValue(value: boolean | 'indeterminate') {
  const nextValue = value === 'indeterminate' ? false : value

  internalValue.value = nextValue
  emits('update:modelValue', nextValue)
}

function toggleFromField(event: MouseEvent) {
  if (props.disabled) return
  if ((event.target as HTMLElement).closest('[data-slot="checkbox"]')) return

  updateValue(!isChecked.value)
}

function toggleFromKeyboard(event: KeyboardEvent) {
  if (props.disabled) return
  if (event.key !== ' ' && event.key !== 'Enter') return

  event.preventDefault()
  updateValue(!isChecked.value)
}
</script>

<template>
  <div
    v-bind="$attrs"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="disabled"
    :tabindex="disabled ? undefined : 0"
    :class="
      cn(
        'group/checkbox-field flex w-full gap-2 transition-[background-color,border-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
        hasCaption ? 'items-start' : 'items-center',
        isWebsite
          ? 'max-w-[328px] cursor-pointer rounded-md border border-black-200 p-3 hover:border-lime-600'
          : 'cursor-pointer bg-white',
        isWebsite && isChecked && 'border-lime-400 bg-lime-100',
        disabled && 'cursor-not-allowed hover:border-black-200',
        props.class,
      )
    "
    @click="toggleFromField"
    @keydown="toggleFromKeyboard"
  >
    <Checkbox
      :id="checkboxId"
      data-slot="checkbox"
      :model-value="isChecked"
      :disabled="disabled"
      :aria-describedby="hasCaption ? captionId : undefined"
      :class="checkboxClass"
      @update:model-value="updateValue"
    />

    <div :class="cn('min-w-0 flex-1', hasCaption && 'grid gap-0.5')">
      <div
        :class="
          cn(
            'h-6 truncate text-omicron font-semibold leading-6 text-black-800 transition-colors duration-150 group-hover/checkbox-field:text-lime-600',
            disabled && 'text-black-600 group-hover/checkbox-field:text-black-600',
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
  </div>
</template>
