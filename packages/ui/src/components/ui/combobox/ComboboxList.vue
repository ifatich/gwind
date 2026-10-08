<script setup lang="ts">
import { ComboboxContent, type ComboboxContentEmits, type ComboboxContentProps, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxContent
    v-bind="forwarded"
    :class="
      cn(
        'absolute left-0 top-[calc(100%+4px)] z-50 w-full min-w-full overflow-hidden rounded-md border border-black-200 bg-white text-black-800 shadow-drop-1 transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.class,
      )
    "
  >
    <slot />
  </ComboboxContent>
</template>
