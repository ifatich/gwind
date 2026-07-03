<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li :class="cn('inline-flex items-center gap-1.5 !m-0 !p-0', props.class)">
    <slot />
  </li>
</template>
