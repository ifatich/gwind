# Image Picker

A file input specialized for images with drag-and-drop, full-screen preview dialog, and customizable display ratios.

## Installation

```bash
npx gwind-system-ui add image-picker
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Upload Image (Large 4:3)</GwLabel>
        <GwImagePicker size="large" aspectRatio="4:3" />
      </div>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Upload Image (Small)</GwLabel>
        <GwImagePicker size="small" />
      </div>
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { ImagePicker } from '@/components/ui/image-picker'
import { Label } from '@/components/ui/label'

const image = ref<File | string | null>(null)
</script>

<template>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <Label>Photo Profile</Label>
    <ImagePicker v-model="image" size="large" aspectRatio="1:1" />
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `File \| string \| null` | `null` | The bound value (v-model). Can be a File object or an image URL. |
| `size` | `'small' \| 'large'` | `'large'` | Determines the component size and visual layout. Small applies an 80x80 layout, large applies a 328x160 area. |
| `aspectRatio` | `'4:3' \| '1:1'` | `'4:3'` | Ratio of the image preview when in large mode. |
| `accept` | `string` | `'image/*'` | Accepts only image formats. Invalid formats show an error message. |
| `disabled` | `boolean` | `false` | Disables the upload area. |
| `maxSize` | `number` | `2097152` | Max file size in bytes (defaults to 2MB). If exceeded, displays a built-in error message. |
| `error` | `string` | `undefined` | Custom error message. Will override the internal default validation errors. |

### Events

- `@update:modelValue`: Emitted when the file selection changes.
- `@change`: Emitted with the raw `File` object or image `string` on change.
- `@remove`: Emitted when the user removes the selected file via the close button.
- `@error`: Emitted with an error string when a validation failure occurs (e.g. max size exceeded).

## Validation & Errors

The `ImagePicker` provides built-in visual error tracking:

1. **Format Validation:** If a non-image is selected, an error is displayed (`Tipe file tidak didukung.`).
2. **Size Validation:** Regulated by `maxSize` (defaults to 2MB). Triggers (`Ukuran file melebihi batas maksimum...`).
3. **Custom Validation:** Supply an `error` prop externally (such as from VeeValidate or Zod forms) to render standard form-field error texts. 
