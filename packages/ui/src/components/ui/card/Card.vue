<script setup lang="ts">
import { cn } from '../../../lib/utils'
import { type HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border border-[var(--gw-border)] bg-[var(--gw-card)] text-[var(--gw-card-foreground)] shadow-sm transition-shadow duration-200 hover:shadow-md',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
