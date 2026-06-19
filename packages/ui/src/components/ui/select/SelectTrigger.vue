<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  useForwardProps,
} from 'reka-ui'
import { type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<
    SelectTriggerProps & { class?: HTMLAttributes['class']; showIcon?: boolean }
  >(),
  {
    showIcon: true,
  },
)

const forwardedProps = useForwardProps(props)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'group flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-[border-color,box-shadow,transform] duration-150 ease-out active:scale-[var(--gwind-motion-scale-press)] data-[placeholder]:text-muted-foreground data-[state=open]:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 [&>span]:truncate text-start',
        props.class,
        { 'justify-between': props.showIcon, 'justify-center': !props.showIcon },
      )
    "
  >
    <slot />
    <SelectIcon v-if="props.showIcon" as-child>
      <ChevronDown class="w-4 h-4 opacity-50 shrink-0 transition-transform duration-150 group-data-[state=open]:rotate-180" />
    </SelectIcon>
  </SelectTrigger>
</template>
