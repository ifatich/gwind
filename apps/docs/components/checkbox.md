# Checkbox

A control that allows the user to toggle between checked and not checked.

## Preview

<div class="gw-preview">
  <div class="flex items-center space-x-2">
    <GwCheckbox id="preview-terms" />
    <GwLabel for="preview-terms">Accept terms and conditions</GwLabel>
  </div>
</div>

---

## Usage

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>
```
