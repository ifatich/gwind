<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    id?: string
    modelValue?: boolean
    defaultValue?: boolean
    disabled?: boolean
    class?: HTMLAttributes['class']
    thumbClass?: HTMLAttributes['class']
  }>(),
  {
    defaultValue: false,
  },
)

const emits = defineEmits<{
  (event: 'update:modelValue', payload: boolean): void
}>()

const internalValue = ref(props.modelValue ?? props.defaultValue)
const isChecked = computed(() => props.modelValue ?? internalValue.value)

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) internalValue.value = value
  },
)

function toggle() {
  if (props.disabled) return

  const nextValue = !isChecked.value
  internalValue.value = nextValue
  emits('update:modelValue', nextValue)
}
</script>

<template>
  <button
    :id="id"
    type="button"
    role="switch"
    :aria-checked="isChecked"
    :disabled="disabled"
    :class="
      cn(
        'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-black-300 p-0.5 transition-[background-color,box-shadow,transform] duration-150 ease-out active:scale-[var(--gwind-motion-scale-icon-press)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100',
        isChecked && 'bg-lime-500',
        props.class,
      )
    "
    @click="toggle"
  >
    <span
      :class="
        cn(
          'block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-100',
          isChecked && 'translate-x-5',
          thumbClass,
        )
      "
    />
  </button>
</template>
