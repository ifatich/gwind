<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
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
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-20 w-full resize-none rounded-md !border border-black-200 bg-white px-3 py-3 text-omicron font-semibold text-black-800 outline-none transition-colors duration-100 placeholder:text-black-500 hover:border-lime-600 focus:border-lime-500 focus-visible:border-lime-500 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:border-black-400 disabled:bg-black-200 disabled:text-black-600 disabled:placeholder:text-black-600 disabled:hover:border-black-400 disabled:focus:border-black-400',
        props.class,
      )
    "
  />
</template>
