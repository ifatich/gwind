# Input Icons

InputField composition variants with left icon, right icon, and label action.

## Installation

```bash
npx gwind-system-ui add input
```

## Preview

<ShadowPreview>
  <div class="grid w-full gap-4 md:grid-cols-2">
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-left-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-right-preview" label="Title" type="text" placeholder="Placeholder">
        <template #right-icon><span class="text-omicron leading-6">O</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-icon-both-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
        <template #right-icon><span class="text-omicron leading-6">X</span></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4">
      <GwInputField id="input-action-preview" label="Title" type="text" placeholder="Placeholder">
        <template #action><button type="button">Action</button></template>
      </GwInputField>
    </div>
    <div class="rounded-md border border-black-200 bg-white p-4 md:col-span-2">
      <GwInputField id="input-icon-action-preview" label="Title" type="text" placeholder="Placeholder">
        <template #left-icon><span class="text-omicron leading-6">@</span></template>
        <template #action><button type="button">Action</button></template>
      </GwInputField>
    </div>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { InputField } from '@/components/ui/input'
import { Mail, Search, X } from 'lucide-vue-next'
</script>

<template>
  <InputField id="input-icon-both" label="Title" placeholder="Placeholder text">
    <template #left-icon><Mail class="h-6 w-6" /></template>
    <template #right-icon><X class="h-6 w-6" /></template>
  </InputField>
</template>
```

---

## Variants

### Icon Left
```vue
<InputField id="input-icon-left" label="Title" placeholder="Placeholder text">
  <template #left-icon>
    <Mail class="h-6 w-6" />
  </template>
</InputField>
```

### Icon Right
```vue
<InputField id="input-icon-right" label="Title" placeholder="Placeholder text">
  <template #right-icon>
    <Search class="h-6 w-6" />
  </template>
</InputField>
```

### Icon Left Right
```vue
<InputField id="input-icon-both" label="Title" placeholder="Placeholder text">
  <template #left-icon><Mail class="h-6 w-6" /></template>
  <template #right-icon><X class="h-6 w-6" /></template>
</InputField>
```

### Label Action
```vue
<InputField id="input-action" label="Title" placeholder="Placeholder text">
  <template #action>
    <button type="button">Action</button>
  </template>
</InputField>
```

### Icon And Label Action
```vue
<InputField id="input-icon-action" label="Title" placeholder="Placeholder text">
  <template #left-icon><Mail class="h-6 w-6" /></template>
  <template #action><button type="button">Action</button></template>
</InputField>
```

## Slots

| Name | Description |
| --- | --- |
| `left-icon` | Adds a 24px icon inside the left side of the field. |
| `right-icon` | Adds a 24px icon inside the right side of the field. |
| `action` | Adds the lime label action inside the right side of the field. |
