<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

# Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Preview

<div class="gw-preview">
  <GwDialog v-model:open="isOpen">
    <template #trigger>
      <GwButton>Open Dialog</GwButton>
    </template>
    <template #title>Are you sure?</template>
    <template #description>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</template>
    <template #footer>
      <GwButton variant="outline" @click="isOpen = false">Cancel</GwButton>
      <GwButton variant="destructive" @click="isOpen = false">Delete Account</GwButton>
    </template>
  </GwDialog>
</div>

## Installation

### 1. CLI Installation

```bash
npx @ifatich/gwind-ui add dialog
```

### 2. Manual Installation

Copy the following code into your `src/components/ui/dialog/Dialog.vue` file:

```vue
<script setup lang="ts">
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
import { cn } from '@/lib/utils'

interface Props {
  open?: boolean
  class?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <DialogRoot :open="open" @update:open="(val) => emit('update:open', val)">
    <!-- Trigger slot -->
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <!-- Overlay -->
      <DialogOverlay
        :class="
          cn(
            'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
            'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
          )
        "
      />

      <!-- Content -->
      <DialogContent
        :class="
          cn(
            'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-[var(--gw-border)] bg-[var(--gw-card)] p-6 shadow-lg duration-200',
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
          <DialogDescription class="text-sm text-[var(--gw-muted-foreground)]">
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
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-2 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--gw-ring)] focus:ring-offset-2 cursor-pointer"
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
```

## Usage

```vue
<script setup>
import { Dialog, Button } from '@/components/ui'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Dialog v-model:open="isOpen">
    <template #trigger>
      <Button>Open Dialog</Button>
    </template>
    <template #title>Confirm Action</template>
    <template #description>Are you sure you want to proceed?</template>

    <!-- Body content -->
    <p>Additional content goes here.</p>

    <template #footer>
      <Button variant="outline" @click="isOpen = false">Cancel</Button>
      <Button @click="isOpen = false">Confirm</Button>
    </template>
  </Dialog>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls dialog visibility (v-model:open) |
| `class` | `string` | — | Additional CSS classes for the content panel |

## Slots

| Slot | Description |
|------|-------------|
| `trigger` | The element that opens the dialog |
| `title` | Dialog title text |
| `description` | Description below the title |
| `default` | Main body content |
| `footer` | Action buttons at the bottom |

## Accessibility

- Focus is trapped within the dialog when open
- `Escape` key closes the dialog
- Overlay click closes the dialog
- Screen readers announce the title and description
