<script setup>
import { ref } from 'vue'
const isDialogOpen1 = ref(false)
const isDialogOpen2 = ref(false)
const isDialogOpen3 = ref(false)
</script>

# Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Examples

### Default Dialog

<ShadowPreview class="gwind-docs-preview">
  <GwDialog v-model:open="isDialogOpen1">
    <GwDialogTrigger as-child>
      <GwButton>Default Dialog</GwButton>
    </GwDialogTrigger>
    <GwDialogContent>
      <GwDialogHeader>
        <GwDialogTitle>Review component style</GwDialogTitle>
        <GwDialogDescription>
          Dialog surfaces should be visually independent from the page behind it.
        </GwDialogDescription>
      </GwDialogHeader>
      <GwDialogBody>
        Ini adalah contoh konten utama dialog. Struktur styling dialog identik dengan Card, sehingga padding diserahkan kepada child komponen.
      </GwDialogBody>
      <GwDialogFooter>
        <GwButton variant="outline" @click="isDialogOpen1 = false">Cancel</GwButton>
        <GwButton @click="isDialogOpen1 = false">Save</GwButton>
      </GwDialogFooter>
    </GwDialogContent>
  </GwDialog>
</ShadowPreview>

### Dialog with Image

<ShadowPreview class="gwind-docs-preview">
  <GwDialog v-model:open="isDialogOpen2">
    <GwDialogTrigger as-child>
      <GwButton variant="secondary">Dialog with Image</GwButton>
    </GwDialogTrigger>
    <GwDialogContent>
      <GwDialogHeader>
        <GwDialogTitle>Delete Confirmation</GwDialogTitle>
      </GwDialogHeader>
      <GwDialogBody>
        <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
          <img src="https://picsum.photos/400/200" alt="Warning Image" class="h-full w-full object-cover" />
        </div>
        <p class="text-sigma font-bold text-black-800">Are you sure?</p>
        <p class="mt-1 text-sigma text-black-500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </p>
      </GwDialogBody>
      <GwDialogFooter>
        <GwButton variant="outline" @click="isDialogOpen2 = false">Cancel</GwButton>
        <GwButton variant="destructive" @click="isDialogOpen2 = false">Delete Account</GwButton>
      </GwDialogFooter>
    </GwDialogContent>
  </GwDialog>
</ShadowPreview>

### Minimal Dialog

<ShadowPreview class="gwind-docs-preview">
  <GwDialog v-model:open="isDialogOpen3">
    <GwDialogTrigger as-child>
      <GwButton variant="tertiary">Minimal Dialog</GwButton>
    </GwDialogTrigger>
    <GwDialogContent>
      <GwDialogHeader>
        <GwDialogTitle>Information</GwDialogTitle>
        <GwDialogDescription>Just a simple informational dialog without footer actions.</GwDialogDescription>
      </GwDialogHeader>
      <GwDialogBody class="text-sigma text-black-800">
        You can click the close button at the top right to dismiss this dialog.
      </GwDialogBody>
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
  DialogBody,
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
      
      <DialogBody class="text-sigma text-black-800">
        <p>Additional body content goes here.</p>
      </DialogBody>

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
| `DialogBody` | Body area for content |
| `DialogTitle` | Semi-bold title text |
| `DialogDescription` | Muted description text |
| `DialogFooter` | Footer area for action buttons |
| `DialogClose` | A component to close the dialog from within the content |

## Accessibility

- Focus is trapped within the dialog when open
- `Escape` key closes the dialog
- Overlay click closes the dialog
- Screen readers announce the title and description
