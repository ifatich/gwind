<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption :class="cn('mt-3 text-left !text-sigma font-semibold leading-5 text-black-500', props.class)">
    <slot />
  </caption>
</template>
