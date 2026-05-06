# Input

Displays a form input field or a component that looks like an input field.

## Preview

<div class="gw-preview">
  <div class="gw-preview-col w-full max-w-sm">
    <GwInput type="email" placeholder="Email" />
    <GwInput disabled type="password" placeholder="Password (Disabled)" />
    <GwInput class="border-destructive focus-visible:ring-destructive" type="email" value="invalid-email" />
    <GwInput class="border-lime-500 focus-visible:ring-lime-500" type="text" value="Valid input state" />
    <div class="grid w-full items-center gap-1.5">
      <GwLabel for="email-preview">Email Address</GwLabel>
      <GwInput id="email-preview" type="email" placeholder="Email" />
      <p class="text-xs text-muted-foreground">We'll never share your email.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <GwLabel for="file-preview">File Upload</GwLabel>
      <GwInput id="file-preview" type="file" />
    </div>
  </div>
</div>

---

## States

- Default input for general form fields.
- Disabled input for non-interactive forms.
- Error and success styles can be applied with utility classes.
- File input demonstrates browser-native file picking.

## Usage

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input type="email" placeholder="Email" />
</template>
```

---

## States

### Disabled
```vue
<Input disabled type="email" placeholder="Email" />
```

### With Label
```vue
<div class="grid w-full max-w-sm items-center gap-1.5">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>
```

### With Helper Text
```vue
<div class="grid w-full max-w-sm items-center gap-1.5">
  <Label for="email-2">Email</Label>
  <Input id="email-2" type="email" placeholder="Email" />
  <p class="text-sm text-muted-foreground">Enter your email address.</p>
</div>
```

---

## Examples

### File Input
```vue
<div class="grid w-full max-w-sm items-center gap-1.5">
  <Label for="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `string | number` | `undefined` | The default value. |
| `modelValue` | `string | number` | `undefined` | The value of the input. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
