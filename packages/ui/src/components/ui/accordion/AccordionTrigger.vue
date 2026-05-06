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
          'flex flex-1 items-center justify-between p-3 !text-omicron text-muted-foreground font-bold transition-all cursor-pointer data-[state=open]:text-primary [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-6 w-6 shrink-0 transition-transform duration-200 text-muted-foreground"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
