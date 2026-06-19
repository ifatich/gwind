<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead :class="cn('[&_tr:first-child_th:first-child]:rounded-tl-md [&_tr:first-child_th:last-child]:rounded-tr-md', props.class)">
    <slot />
  </thead>
</template>
