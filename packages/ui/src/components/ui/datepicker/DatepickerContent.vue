<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { DatePickerContent, type DatePickerContentEmits, type DatePickerContentProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DatePickerContentProps & { class?: HTMLAttributes['class'] }>(), {
  align: 'start',
  sideOffset: 4,
})
const emits = defineEmits<DatePickerContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DatePickerContent
    v-bind="{ ...forwarded, ...$attrs }"
    :class="
      cn(
        'gwind-datepicker-content z-50 w-[360px] overflow-hidden rounded-xl bg-white p-0 text-black-800 outline-none',
        'shadow-drop-1',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-sm:data-[state=open]:slide-in-from-bottom-4 max-sm:data-[state=closed]:slide-out-to-bottom-4',
        props.class,
      )
    "
  >
    <slot />
  </DatePickerContent>
</template>

<style>
@media (max-width: 640px) {
  [data-reka-popper-content-wrapper]:has(.gwind-datepicker-content) {
    position: fixed !important;
    inset: 0 !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: center !important;
    width: 100vw !important;
    min-width: 100vw !important;
    max-width: 100vw !important;
    height: 100dvh !important;
    min-height: 100dvh !important;
    transform: none !important;
    background: color-mix(in srgb, var(--black-800) 48%, transparent) !important;
    z-index: 50 !important;
  }

  .gwind-datepicker-content {
    width: 100vw !important;
    max-width: 100vw !important;
    border-bottom-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;
    box-shadow: 0 -8px 24px color-mix(in srgb, var(--black-800) 18%, transparent) !important;
  }

  .gwind-datepicker-content[data-state="open"] {
    animation: gwind-datepicker-sheet-in 220ms cubic-bezier(0.22, 1, 0.36, 1) !important;
  }

  .gwind-datepicker-content[data-state="closed"] {
    animation: gwind-datepicker-sheet-out 180ms cubic-bezier(0.4, 0, 1, 1) !important;
  }
}

@keyframes gwind-datepicker-sheet-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes gwind-datepicker-sheet-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}
</style>
