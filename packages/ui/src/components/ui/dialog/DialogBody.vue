<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="dialog-body"
    :class="cn('p-4 text-omicron text-black-800', props.class)"
  >
    <slot />
  </div>
</template>
