<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { cn } from '../../../lib/utils'

interface Props {
  open?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
}>()
</script>

<template>
  <DialogRoot :open="props.open" @update:open="(val) => emit('update:open', val)">
    <!-- Trigger slot -->
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <!-- Overlay -->
      <DialogOverlay
        :class="
          cn(
            'fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm',
            'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
          )
        "
      />

      <!-- Content -->
      <DialogContent
        :class="
          cn(
            'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-card p-6 shadow-lg duration-200',
            'data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out',
            props.class,
          )
        "
      >
        <!-- Header -->
        <div class="flex flex-col gap-1.5 text-center sm:text-left">
          <DialogTitle class="text-lg font-semibold leading-none tracking-tight">
            <slot name="title" />
          </DialogTitle>
          <DialogDescription class="text-sm text-muted-foreground">
            <slot name="description" />
          </DialogDescription>
        </div>

        <!-- Body -->
        <slot />

        <!-- Footer -->
        <div
          v-if="$slots.footer"
          class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
        >
          <slot name="footer" />
        </div>

        <!-- Close button -->
        <DialogClose
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-2 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
