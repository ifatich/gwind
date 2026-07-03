<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-5 !m-0 !p-0', props.class)"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
