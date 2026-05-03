<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { type InputHTMLAttributes, computed, useAttrs } from 'vue'

interface Props {
  modelValue?: string | number
  defaultValue?: string | number
  class?: InputHTMLAttributes['class']
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const attrs = useAttrs()

const modelValue = computed({
  get: () => props.modelValue ?? props.defaultValue ?? '',
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <input
    v-model="modelValue"
    v-bind="attrs"
    :type="props.type"
    :class="
      cn(
        'flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-all duration-200',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>
