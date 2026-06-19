<script setup lang="ts">
import { Label, type LabelProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        '!text-omicron !font-[800] peer-disabled:cursor-not-allowed peer-disabled:text-black-80/50',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
