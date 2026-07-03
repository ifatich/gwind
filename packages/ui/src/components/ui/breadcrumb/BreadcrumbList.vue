<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="
      cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sigma text-lime-500 !list-none !m-0 !p-0',
        props.class,
      )
    "
  >
    <slot />
  </ol>
</template>
