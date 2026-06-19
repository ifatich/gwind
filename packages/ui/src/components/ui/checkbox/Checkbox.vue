<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { CheckboxIndicator, CheckboxRoot, type CheckboxRootEmits, type CheckboxRootProps, useForwardPropsEmits } from 'reka-ui'
import { type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'group peer inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[4px] ring-offset-background transition-[box-shadow,transform] duration-150 ease-out active:scale-[var(--gwind-motion-scale-icon-press)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:active:scale-100',
        props.class,
      )
    "
  >
    <span
      class="flex h-5 w-5 items-center justify-center rounded-[4px] border-2 border-black-500 bg-white text-white transition-[background-color,border-color,transform] duration-150 ease-out group-hover:border-lime-600 group-disabled:border-black-400 group-data-[state=checked]:border-lime-500 group-data-[state=checked]:bg-lime-500 group-data-[state=indeterminate]:border-lime-500 group-data-[state=indeterminate]:bg-lime-500 group-data-[state=checked]:group-disabled:border-black-500 group-data-[state=checked]:group-disabled:bg-black-500 group-data-[state=indeterminate]:group-disabled:border-black-500 group-data-[state=indeterminate]:group-disabled:bg-black-500"
    >
      <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current data-[state=checked]:animate-in data-[state=checked]:fade-in-0 data-[state=checked]:zoom-in-75 data-[state=indeterminate]:animate-in data-[state=indeterminate]:fade-in-0 data-[state=indeterminate]:zoom-in-75">
        <slot>
          <span
            aria-hidden="true"
            class="hidden h-0.5 w-3 rounded-full bg-current group-data-[state=indeterminate]:block"
          />
          <svg
            aria-hidden="true"
            class="h-4 w-4 group-data-[state=indeterminate]:hidden"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 8.2 7 11l5-6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </slot>
      </CheckboxIndicator>
    </span>
  </CheckboxRoot>
</template>
