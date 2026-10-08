<script setup lang="ts">
import { ComboboxRoot, type ComboboxRootEmits, type ComboboxRootProps, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<ComboboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ComboboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxRoot v-bind="forwarded" :class="cn('relative w-full', props.class)">
    <slot />
  </ComboboxRoot>
</template>
