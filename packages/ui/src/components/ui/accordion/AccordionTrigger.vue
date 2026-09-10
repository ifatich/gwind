<script setup lang="ts">
import { cn } from "../../../lib/utils"
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between p-4 text-omicron text-left text-black-800 font-extrabold transition-all cursor-pointer hover:text-lime-600 data-[state=open]:text-lime-600 disabled:cursor-not-allowed disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-lime-600',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-5 w-5 shrink-0 transition-transform duration-200 text-black-500"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
