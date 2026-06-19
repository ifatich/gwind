<script setup>
import ButtonPreview from './previews/ButtonPreview.vue'
</script>

# Button

Displays a button or a component that looks like a button.

## Installation

```bash
npx gwind-system-ui add button
```

## Preview

<ButtonPreview />

---

## Usage

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

## Variants

### Primary (Default)
The main call-to-action button.
```vue
<Button variant="default">Primary Button</Button>
```

### Secondary
Used for secondary actions.
```vue
<Button variant="secondary">Secondary Button</Button>
```

### Outline
A button with a border, used for less prominent actions.
```vue
<Button variant="outline">Outline Button</Button>
```

### Loading
Uses the Gwind `Spinner` internally and disables interaction while work is pending.
```vue
<Button loading loading-label="Saving">
  Saving
</Button>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `default | primary | secondary | tertiary | neutral | icon | outline | combobox | destructive | ghost | ghost-fab | link | google | apple | facebook` | `default` | The visual style of the button. |
| `size` | `sm | md | lg | xl | icon | fab` | `lg` | The size of the button. |
| `as` | `string` | `button` | The element to render the button as. |
| `asChild` | `boolean` | `false` | Whether to render the button as its child component. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `loading` | `boolean` | `false` | Shows spinner and disables interaction. |
| `loadingLabel` | `string` | `'Loading'` | Accessible label for the loading spinner. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
