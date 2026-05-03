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
  'update:modelValue': [value: string | number]
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
        'flex h-9 w-full rounded-md border border-[var(--gw-input)] bg-transparent px-3 py-1 text-sm shadow-xs transition-colors duration-200',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--gw-foreground)]',
        'placeholder:text-[var(--gw-muted-foreground)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-ring)] focus-visible:ring-offset-1',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  />
</template>
