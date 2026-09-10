<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

export interface DatePickerScrollItem {
  value: string
  label: string
  helper?: string
}

const props = withDefaults(defineProps<{
  items: DatePickerScrollItem[]
  modelValue?: string
  class?: HTMLAttributes['class']
  showDays?: boolean
  variant?: 'with-days' | 'without-days' | 'month-only'
}>(), {
  variant: 'with-days',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function selectItem(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    :class="
      cn(
        'flex w-[360px] flex-col overflow-hidden rounded-xl bg-white px-4 py-4 shadow-drop-1',
        variant === 'month-only' ? 'h-[324px]' : 'h-[349px]',
        props.class,
      )
    "
  >
    <div class="flex flex-1 snap-y snap-mandatory flex-col overflow-y-auto py-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        :class="
          cn(
            'flex h-12 shrink-0 snap-center items-center justify-center rounded-lg px-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
            modelValue === item.value
              ? 'bg-lime-500 !text-lambda font-semibold text-white'
              : 'bg-white !text-lambda font-semibold text-black-800 hover:bg-black-200',
          )
        "
        @click="selectItem(item.value)"
      >
        <span>{{ item.label }}</span>
        <span v-if="showDays && item.helper" class="ml-2 !text-sigma leading-5 opacity-80">
          {{ item.helper }}
        </span>
      </button>
    </div>
  </div>
</template>
