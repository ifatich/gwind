<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

# Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Preview

<ShadowPreview class="gwind-docs-preview">
  <GwDialog v-model:open="isOpen">
    <GwDialogTrigger as-child>
      <GwButton>Open Dialog</GwButton>
    </GwDialogTrigger>
    <GwDialogContent>
      <GwDialogHeader>
        <GwDialogTitle>Are you sure?</GwDialogTitle>
        <GwDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </GwDialogDescription>
      </GwDialogHeader>
      <GwDialogFooter>
        <GwButton variant="outline" @click="isOpen = false">Cancel</GwButton>
        <GwButton variant="destructive" @click="isOpen = false">Delete Account</GwButton>
      </GwDialogFooter>
    </GwDialogContent>
  </GwDialog>
</ShadowPreview>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add dialog
```

### 2. Manual Installation

Create a folder `src/components/ui/dialog/` and copy the source code for each file.

## Usage

```vue
<script setup>
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>Are you sure you want to proceed?</DialogDescription>
      </DialogHeader>
      
      <p>Additional body content goes here.</p>

      <DialogFooter>
        <Button variant="outline" @click="isOpen = false">Cancel</Button>
        <Button @click="isOpen = false">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

## Sub-components

| Component | Description |
|-----------|-------------|
| `Dialog` | The Root component that manages the open/close state |
| `DialogTrigger` | The element that opens the dialog |
| `DialogContent` | The portal-wrapped content container with overlay and close button |
| `DialogHeader` | Header area for title and description |
| `DialogTitle` | Semi-bold title text |
| `DialogDescription` | Muted description text |
| `DialogFooter` | Footer area for action buttons |
| `DialogClose` | A component to close the dialog from within the content |

## Accessibility

- Focus is trapped within the dialog when open
- `Escape` key closes the dialog
- Overlay click closes the dialog
- Screen readers announce the title and description
