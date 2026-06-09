# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <div class="gwind-docs-preview-section">
      <div class="gwind-docs-preview-label">Horizontal</div>
      <GwRadioGroup default-value="option-one" class="grid gap-2">
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
    <div class="gwind-docs-preview-section">
      <div class="gwind-docs-preview-label">Vertical</div>
      <GwRadioGroup default-value="email" orientation="vertical" class="grid gap-2">
        <div class="flex items-center space-x-2">
          <GwRadioGroupItem id="preview-email" value="email" />
          <GwLabel for="preview-email">Email</GwLabel>
        </div>
        <div class="flex items-center space-x-2">
          <GwRadioGroupItem id="preview-phone" value="phone" />
          <GwLabel for="preview-phone">Phone</GwLabel>
        </div>
      </GwRadioGroup>
    </div>
    <div class="gwind-docs-preview-section">
      <div class="gwind-docs-preview-label">Disabled</div>
      <GwRadioGroup default-value="option-a" disabled class="grid gap-2">
        <div class="flex items-center space-x-2">
          <GwRadioGroupItem id="preview-disabled-a" value="option-a" />
          <GwLabel for="preview-disabled-a">Disabled A</GwLabel>
        </div>
        <div class="flex items-center space-x-2">
          <GwRadioGroupItem id="preview-disabled-b" value="option-b" />
          <GwLabel for="preview-disabled-b">Disabled B</GwLabel>
        </div>
      </GwRadioGroup>
    </div>
  </div>
</ShadowPreview>

---

## Variants

- `default-value` sets the initial selection.
- `orientation="vertical"` stacks the options vertically.
- `disabled` makes the group non-interactive.

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
