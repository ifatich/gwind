# Checkbox

A control that allows the user to toggle between checked and not checked.

## Preview

<div class="gw-preview">
  <div class="gw-preview-col">
    <div class="flex items-center gap-2">
      <GwCheckbox id="checkbox-unchecked" />
      <GwLabel for="checkbox-unchecked">Unchecked</GwLabel>
    </div>
    <div class="flex items-center gap-2">
      <GwCheckbox id="checkbox-checked" :model-value="true" />
      <GwLabel for="checkbox-checked">Checked</GwLabel>
    </div>
    <div class="flex items-center gap-2">
      <GwCheckbox id="checkbox-indeterminate" :model-value="'indeterminate'" />
      <GwLabel for="checkbox-indeterminate">Indeterminate</GwLabel>
    </div>
    <div class="flex items-center gap-2">
      <GwCheckbox id="checkbox-disabled" disabled :model-value="true" />
      <GwLabel for="checkbox-disabled" class="opacity-50">Disabled</GwLabel>
    </div>
  </div>
</div>

---

## States

- `Unchecked` shows the default idle state.
- `Checked` demonstrates the selected state.
- `Indeterminate` shows the mixed state supported by the component.
- `Disabled` demonstrates the non-interactive state.

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
