# Input

Displays a form input field or a component that looks like an input field.

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
