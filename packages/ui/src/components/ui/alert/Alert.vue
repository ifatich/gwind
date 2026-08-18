<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { type AlertVariants, alertVariants } from '.'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class']
  variant?: AlertVariants['variant']
  showClose?: boolean
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <button
      v-if="showClose"
      class="absolute right-4 top-4 text-black-400 hover:text-black-800 focus:outline-none transition-colors"
      aria-label="Close"
      @click="emit('close')"
    >
      <X class="h-4.5 w-4.5 cursor-pointer" />
    </button>
    <slot />
  </div>
</template>
