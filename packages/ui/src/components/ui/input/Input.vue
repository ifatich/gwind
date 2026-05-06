<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :class="
      cn(
        'flex w-full rounded-md !border border-input bg-background px-3 py-[11px] text-omicron ring-offset-background file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-50 placeholder:text-black-50 focus-visible:outline-none focus-visible:border-lime-50 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500',
        'disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent',
        props.class,
      )
    "
  />
</template>
