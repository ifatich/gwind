<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { type HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h3',
})
</script>

<template>
  <component
    :is="as"
    :class="cn('font-semibold leading-none tracking-tight', props.class)"
  >
    <slot />
  </component>
</template>
