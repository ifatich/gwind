# Label

Label adalah komponen untuk memberi teks penjelas pada field input/form.

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <GwLabel for="email">Email</GwLabel>
    <GwInput id="email" placeholder="name@example.com" />
    <div class="grid w-full items-center gap-1.5">
      <GwLabel for="company">Company</GwLabel>
      <GwInput id="company" placeholder="Acme Inc." />
      <p class="text-xs text-muted-foreground">Used to identify the account owner.</p>
    </div>
  </div>
</ShadowPreview>

## Usage

```vue
<script setup lang="ts">
import { Label } from '@gwind/ui'
import { Input } from '@gwind/ui'
</script>

<template>
  <Label for="email">Email</Label>
  <Input id="email" placeholder="name@example.com" />
</template>
```

## Disabled Peer State

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <GwLabel for="username">Username</GwLabel>
    <GwInput id="username" disabled value="disabled-input" />
  </div>
</ShadowPreview>

## Notes

- `Label` should always point to a matching form field via `for`.
- Combine it with helper text to create clearer form instructions.

## API

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `class` | `string` | Custom class tambahan |

Komponen ini juga mendukung semua props bawaan `Label` dari `reka-ui`.
