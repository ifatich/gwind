# Image Picker

A file input specialized for images with drag-and-drop, full-screen preview dialog, customizable display ratios, metadata (timestamp), and multiple images support (carousel).

## Installation

```bash
npx gwind-system-ui add image-picker
```

## Preview

<script setup>
import { ref } from 'vue'
const image1 = ref(null)
const image2 = ref(null)
const imageMultiple = ref([
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop'
])
const imageMetadata = ref('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop')
</script>

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <!-- Basic Single Image -->
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Single Image (Large 4:3)</GwLabel>
        <GwImagePicker v-model="image1" size="large" aspectRatio="4:3" />
      </div>
    </div>
    
    <!-- Multiple Images (Carousel) -->
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Multiple Images (Carousel Slider)</GwLabel>
        <GwImagePicker v-model="imageMultiple" multiple size="large" />
      </div>
    </div>

    <!-- 2 Buttons & Metadata -->
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Metadata & 2 Buttons (CTA)</GwLabel>
        <GwImagePicker 
          v-model="imageMetadata" 
          size="large" 
          showDownload 
          showRetake 
          :metadata="{ takenBy: 'P12345', timestamp: '20 Jan 2025, 12.00' }"
        />
      </div>
    </div>

    <!-- Small Variant -->
    <div class="rounded-md border border-black-200 bg-white p-4">
      <div class="grid w-full items-center gap-1">
        <GwLabel class="mb-2 block">Single Image (Small)</GwLabel>
        <GwImagePicker v-model="image2" size="small" />
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

const images = ref<File[]>([])
</script>

<template>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <Label>Photo Profile</Label>
    <ImagePicker 
      v-model="images" 
      multiple
      size="large" 
      aspectRatio="4:3" 
      showDownload
      showRetake
      :metadata="{ takenBy: 'System', timestamp: 'Now' }"
    />
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `File \| string \| (File \| string)[] \| null` | `null` | The bound value (v-model). Can be a File object, URL string, or an array if `multiple` is true. |
| `multiple` | `boolean` | `false` | Allow selecting multiple files. Uses a carousel for the preview modal. |
| `size` | `'small' \| 'large'` | `'large'` | Determines the component size and visual layout. |
| `aspectRatio` | `'4:3' \| '1:1'` | `'4:3'` | Ratio of the image preview when in large mode. |
| `accept` | `string` | `'image/*'` | Accepts only image formats. Invalid formats show an error message. |
| `disabled` | `boolean` | `false` | Disables the upload area. |
| `maxSize` | `number` | `2097152` | Max file size in bytes (defaults to 2MB). |
| `error` | `string` | `undefined` | Custom error message. |
| `showDownload` | `boolean` | `false` | Shows a download button in the preview modal. |
| `showRetake` | `boolean` | `false` | Shows a retake button in the preview modal. |
| `metadata` | `{ takenBy?: string, timestamp?: string }` | `undefined` | Shows timestamp/metadata overlay on the image. |

### Events

- `@update:modelValue`: Emitted when the file selection changes.
- `@change`: Emitted with the raw `File`, `string` or `Array` on change.
- `@remove`: Emitted when the user removes the selected file via the close button.
- `@error`: Emitted with an error string when a validation failure occurs.
- `@download`: Emitted when the download button is clicked.
- `@retake`: Emitted when the retake button is clicked.
