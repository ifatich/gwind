<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { useGwindPortalTarget } from '../../../lib/portal'
import { cn } from '../../../lib/utils'
import DialogOverlay from './DialogOverlay.vue'

const props = defineProps<
  DialogContentProps & { class?: HTMLAttributes['class'] }
>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const portalTarget = useGwindPortalTarget()
</script>

<template>
  <DialogPortal :to="portalTarget">
    <DialogOverlay />
    <DialogContent
      data-slot="dialog-content"
      v-bind="forwarded"
      :class="
        cn(
          // Base
          'fixed z-50 bg-white text-black-800 shadow-drop-1 overflow-hidden duration-200',
          // Mobile (Bottom Sheet)
          'left-0 bottom-0 w-full rounded-t-2xl rounded-b-none',
          // Desktop (Dialog)
          'sm:left-[50%] sm:top-[50%] sm:bottom-auto sm:max-w-lg sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-2xl sm:border sm:border-black-100',
          // Animations (Base)
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          // Animations (Mobile)
          'data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full',
          // Animations (Desktop)
          'sm:data-[state=closed]:slide-out-to-bottom-0 sm:data-[state=open]:slide-in-from-bottom-0',
          'sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95',
          props.class,
        )
      "
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
