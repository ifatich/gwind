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
      class="absolute right-4 top-4 text-muted-foreground hover:text-foreground focus:outline-none"
      aria-label="Close"
      @click="emit('close')"
    >
      <X class="h-[18px] w-[18px] cursor-pointer" />
    </button>
    <slot />
  </div>
</template>
