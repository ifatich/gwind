<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, useAttrs, watch } from 'vue'
import InputField from '../InputField.vue'

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

    <template v-if="(internalValue !== null && !disabled) || $slots['right-icon']" #right-icon>
      <slot name="right-icon">
        <button
          v-if="internalValue !== null && !disabled"
          type="button"
          class="pointer-events-auto flex items-center justify-center cursor-pointer focus:outline-none text-black-600 hover:text-black-800"
          @click="updateValue(null)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9.54545" stroke="currentColor" stroke-width="0.909091"/>
            <mask id="mask0_25700_6356" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
              <circle cx="12" cy="12" r="9.54545" fill="white" stroke="white" stroke-width="0.909091"/>
            </mask>
            <g mask="url(#mask0_25700_6356)">
              <rect width="24" height="24" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31876 8.18384C9.00205 7.92238 8.53245 7.93981 8.23613 8.23613C7.92129 8.55097 7.92129 9.06143 8.23613 9.37627L11.1932 12.3333L8.23613 15.2904C7.92129 15.6052 7.92129 16.1157 8.23613 16.4305C8.53245 16.7269 9.00205 16.7443 9.31876 16.4828L9.37627 16.4305L12.3333 13.4735L15.2904 16.4305L15.3479 16.4828C15.6646 16.7443 16.1342 16.7269 16.4305 16.4305C16.7454 16.1157 16.7454 15.6052 16.4305 15.2904L13.4735 12.3333L16.4305 9.37627C16.7454 9.06143 16.7454 8.55097 16.4305 8.23613C16.1342 7.93981 15.6646 7.92238 15.3479 8.18384L15.2904 8.23613L12.3333 11.1932L9.37627 8.23613L9.31876 8.18384Z" fill="currentColor"/>
              <mask id="mask1_25700_6356" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="8" y="8" width="9" height="9">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31876 8.18384C9.00205 7.92238 8.53245 7.93981 8.23613 8.23613C7.92129 8.55097 7.92129 9.06143 8.23613 9.37627L11.1932 12.3333L8.23613 15.2904C7.92129 15.6052 7.92129 16.1157 8.23613 16.4305C8.53245 16.7269 9.00205 16.7443 9.31876 16.4828L9.37627 16.4305L12.3333 13.4735L15.2904 16.4305L15.3479 16.4828C15.6646 16.7443 16.1342 16.7269 16.4305 16.4305C16.7454 16.1157 16.7454 15.6052 16.4305 15.2904L13.4735 12.3333L16.4305 9.37627C16.7454 9.06143 16.7454 8.55097 16.4305 8.23613C16.1342 7.93981 15.6646 7.92238 15.3479 8.18384L15.2904 8.23613L12.3333 11.1932L9.37627 8.23613L9.31876 8.18384Z" fill="white"/>
              </mask>
              <g mask="url(#mask1_25700_6356)">
                <rect width="16" height="16" transform="translate(4 4)" fill="white"/>
                <rect x="4" y="4" width="16" height="16" fill="white"/>
              </g>
            </g>
          </svg>
        </button>
      </slot>
    </template>

    <template v-if="$slots.action" #action>
      <slot name="action" />
    </template>

    <template v-if="$slots.caption" #caption>
      <slot name="caption" />
    </template>
  </InputField>
</template>
