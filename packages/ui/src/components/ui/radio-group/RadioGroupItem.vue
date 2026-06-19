<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemEmits, type RadioGroupItemProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../lib/utils'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<RadioGroupItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <RadioGroupItem
    v-bind="forwarded"
    :class="
      cn(
        'group peer inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full ring-offset-background transition-[box-shadow,transform] duration-150 ease-out active:scale-[var(--gwind-motion-scale-icon-press)] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:active:scale-100',
        props.class,
      )
    "
  >
    <span
      class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-black-500 bg-white text-lime-500 transition-[background-color,border-color,transform] duration-150 ease-out group-hover:border-lime-600 group-disabled:border-black-400 group-disabled:text-black-500 group-data-[state=checked]:border-lime-500 group-data-[state=checked]:bg-white group-data-[state=checked]:group-disabled:border-black-500 group-data-[state=checked]:group-disabled:text-black-500"
    >
      <RadioGroupIndicator class="flex items-center justify-center text-current data-[state=checked]:animate-in data-[state=checked]:fade-in-0 data-[state=checked]:zoom-in-75">
        <span aria-hidden="true" class="h-2 w-2 rounded-full bg-current" />
      </RadioGroupIndicator>
    </span>
  </RadioGroupItem>
</template>
