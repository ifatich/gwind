<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, useAttrs, watch } from 'vue'
import InputField from '../input/InputField.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    id?: string
    label?: string
    caption?: string
    error?: string
    disabled?: boolean
    defaultValue?: number | null
    modelValue?: number | null
    placeholder?: string
    class?: HTMLAttributes['class']
    labelClass?: HTMLAttributes['class']
    inputClass?: HTMLAttributes['class']
    captionClass?: HTMLAttributes['class']
    prefixClass?: HTMLAttributes['class']
  }>(),
  {
    placeholder: 'Placeholder',
  },
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: number | null): void
}>()

const attrs = useAttrs()

function parseRupiah(value: string | number | null | undefined) {
  const digits = String(value ?? '').replace(/\D/g, '')

  return digits ? Number.parseInt(digits, 10) : null
}

function formatRupiah(value: number | null | undefined) {
  if (value === null || value === undefined || Number.isNaN(value)) return ''

  return new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(Math.trunc(value))
}

const internalValue = ref<number | null>(parseRupiah(props.modelValue ?? props.defaultValue))
const displayValue = computed(() => formatRupiah(internalValue.value))

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) internalValue.value = parseRupiah(value)
  },
)

function updateValue(value: string | number | null | undefined) {
  const parsedValue = parseRupiah(value)

  internalValue.value = parsedValue
  emits('update:modelValue', parsedValue)
}

function handleKeydown(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey) return

  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Enter',
    'Escape',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
  ]

  if (allowedKeys.includes(event.key)) return
  if (!/^\d$/.test(event.key)) event.preventDefault()
}

function handleBeforeInput(event: InputEvent) {
  if (
    event.inputType.startsWith('delete')
    || event.inputType === 'historyUndo'
    || event.inputType === 'historyRedo'
  ) {
    return
  }

  if (event.data && /\D/.test(event.data)) event.preventDefault()
}

function handlePaste(event: ClipboardEvent) {
  const pastedValue = event.clipboardData?.getData('text') ?? ''

  event.preventDefault()
  updateValue(pastedValue)
}
</script>

<template>
  <InputField
    v-bind="attrs"
    :id="id"
    :model-value="displayValue"
    :label="label"
    :caption="caption"
    :error="error"
    :disabled="disabled"
    :placeholder="placeholder"
    prefix="Rupiah"
    type="text"
    inputmode="numeric"
    :class="props.class"
    :label-class="labelClass"
    :input-class="inputClass"
    :caption-class="captionClass"
    :prefix-class="prefixClass"
    @update:model-value="updateValue"
    @keydown="handleKeydown"
    @beforeinput="handleBeforeInput"
    @paste="handlePaste"
    @drop.prevent
  >
    <template v-if="$slots.label" #label>
      <slot name="label" />
    </template>

    <template v-if="$slots['label-icon']" #label-icon>
      <slot name="label-icon" />
    </template>

    <template v-if="$slots['left-icon']" #left-icon>
      <slot name="left-icon" />
    </template>

    <template v-if="$slots['right-icon']" #right-icon>
      <slot name="right-icon" />
    </template>

    <template v-if="$slots.action" #action>
      <slot name="action" />
    </template>

    <template v-if="$slots.caption" #caption>
      <slot name="caption" />
    </template>
  </InputField>
</template>
