<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { useVModel } from '@vueuse/core'

export interface AddAmountProps {
  modelValue?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  readonly?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<AddAmountProps>(), {
  min: 1,
  max: Infinity,
  step: 1,
  disabled: false,
  readonly: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emit, {
  passive: true,
  defaultValue: props.defaultValue ?? 1,
})

const isAtMin = computed(
  () => props.disabled || (modelValue.value ?? 1) <= props.min,
)
const isAtMax = computed(
  () => props.disabled || (modelValue.value ?? 1) >= props.max,
)

function handleDecrement() {
  if (isAtMin.value || props.readonly) return
  const currentVal = modelValue.value ?? 1
  const nextVal = Math.max(props.min, currentVal - props.step)
  modelValue.value = nextVal
  emit('change', nextVal)
}

function handleIncrement() {
  if (isAtMax.value || props.readonly) return
  const currentVal = modelValue.value ?? 1
  const nextVal = Math.min(props.max, currentVal + props.step)
  modelValue.value = nextVal
  emit('change', nextVal)
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  let val = parseInt(target.value, 10)
  if (isNaN(val)) {
    val = props.min
  }
  if (val < props.min) val = props.min
  if (val > props.max) val = props.max
  modelValue.value = val
  target.value = String(val)
  emit('change', val)
}
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex h-10 items-center justify-between overflow-hidden rounded-md border border-black-200 bg-white shadow-xs transition-colors',
        disabled && 'opacity-70 cursor-not-allowed bg-black-100',
        props.class,
      )
    "
    data-slot="add-amount"
  >
    <!-- Decrement Button -->
    <button
      type="button"
      :disabled="isAtMin || readonly"
      :aria-disabled="isAtMin || readonly ? 'true' : undefined"
      aria-label="Kurangi jumlah"
      :class="
        cn(
          'flex h-full w-10 shrink-0 items-center justify-center bg-black-100 border-r border-black-200 transition-colors',
          isAtMin || readonly
            ? 'cursor-not-allowed text-black-500'
            : 'cursor-pointer text-lime-500 hover:bg-black-200 active:bg-black-300',
        )
      "
      @click="handleDecrement"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="10"
          cy="10"
          r="8"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M6.5 10H13.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <!-- Value Display / Input -->
    <input
      type="text"
      inputmode="numeric"
      :value="modelValue"
      :disabled="disabled || readonly"
      :readonly="readonly"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="modelValue"
      class="w-full flex-1 px-2 text-center text-omicron font-semibold text-black-800 bg-transparent outline-none disabled:cursor-not-allowed border-none focus:ring-0 focus:outline-none"
      @change="handleInput"
    />

    <!-- Increment Button -->
    <button
      type="button"
      :disabled="isAtMax || readonly"
      :aria-disabled="isAtMax || readonly ? 'true' : undefined"
      aria-label="Tambah jumlah"
      :class="
        cn(
          'flex h-full w-10 shrink-0 items-center justify-center bg-black-100 border-l border-black-200 transition-colors',
          isAtMax || readonly
            ? 'cursor-not-allowed text-black-500'
            : 'cursor-pointer text-lime-500 hover:bg-black-200 active:bg-black-300',
        )
      "
      @click="handleIncrement"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="10"
          cy="10"
          r="8"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path
          d="M10 6.5V13.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M6.5 10H13.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</template>
