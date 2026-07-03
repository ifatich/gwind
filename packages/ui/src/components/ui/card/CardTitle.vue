<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3 :class="cn('text-omicron font-bold leading-none tracking-tight text-black-800', props.class)">
    <slot />
  </h3>
</template>
