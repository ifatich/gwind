# Label

Label adalah komponen untuk memberi teks penjelas pada field input/form.

## Basic Usage

<div class="gw-preview">
  <div class="gw-preview-col">
    <GwLabel for="email">Email</GwLabel>
    <GwInput id="email" placeholder="name@example.com" />
  </div>
</div>

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

<div class="gw-preview">
  <div class="gw-preview-col">
    <GwLabel for="username">Username</GwLabel>
    <GwInput id="username" disabled value="disabled-input" />
  </div>
</div>

## API

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `class` | `string` | Custom class tambahan |

Komponen ini juga mendukung semua props bawaan `Label` dari `reka-ui`.
