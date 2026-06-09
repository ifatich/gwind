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
        'flex h-12 w-full rounded-md !border border-[#eeeeef] bg-white px-3 py-3 text-omicron font-semibold leading-6 text-black-800 outline-none transition-colors duration-100 file:border-0 file:bg-transparent file:text-omicron file:font-semibold file:text-black-800 placeholder:text-black-500 hover:border-lime-600 focus:border-lime-500 focus-visible:border-lime-500 focus-visible:outline-none focus-visible:ring-0',
        'disabled:cursor-not-allowed disabled:border-[#eeeeef] disabled:bg-[#eeeeef] disabled:text-black-600 disabled:placeholder:text-black-600 disabled:hover:border-[#eeeeef] disabled:focus:border-[#eeeeef]',
        props.class,
      )
    "
  />
</template>
