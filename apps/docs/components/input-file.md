# Input File

Native file input with Gwind field styling.

## Installation

```bash
npx gwind-system-ui add input
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel for="file-preview">File Upload</GwLabel>
        <GwInput id="file-preview" type="file" />
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel for="file-disabled-preview">File Upload</GwLabel>
        <GwInput id="file-disabled-preview" type="file" disabled />
      </div>
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <Label for="picture">Picture</Label>
    <Input id="picture" type="file" />
  </div>
</template>
```

## Notes

- File input keeps the same 48px input shell.
- Use native browser file value handling.
- Create a dedicated file upload component only when the flow needs drag and drop, file list preview, progress, or validation messaging.
