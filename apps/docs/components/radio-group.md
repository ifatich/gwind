# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.

## Preview

<div class="gw-preview">
  <GwRadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <GwRadioGroupItem id="preview-option-one" value="option-one" />
      <GwLabel for="preview-option-one">Option One</GwLabel>
    </div>
    <div class="flex items-center space-x-2">
      <GwRadioGroupItem id="preview-option-two" value="option-two" />
      <GwLabel for="preview-option-two">Option Two</GwLabel>
    </div>
  </GwRadioGroup>
</div>

---

## Usage

```vue
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```
