<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('rounded-2xl border border-black-100 bg-white text-black-800 shadow-drop-1 overflow-hidden', props.class)"
  >
    <slot />
  </div>
</template>
