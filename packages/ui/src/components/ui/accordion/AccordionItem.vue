<script setup lang="ts">
import { cn } from "../../../lib/utils"
import { AccordionItem, type AccordionItemProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="cn('rounded-md bg-background border border-input flex flex-col', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
