# Button

Displays a button or a component that looks like a button.

## Preview

### Variants

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton>Default</GwButton>
    <GwButton variant="secondary">Secondary</GwButton>
    <GwButton variant="outline">Outline</GwButton>
    <GwButton variant="ghost">Ghost</GwButton>
    <GwButton variant="destructive">Destructive</GwButton>
    <GwButton variant="link">Link</GwButton>
  </div>
</div>

### Social Media

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton variant="google">Login with Google</GwButton>
    <GwButton variant="apple">Login with Apple</GwButton>
    <GwButton variant="facebook">Login with Facebook</GwButton>
  </div>
</div>

### Sizes

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton size="sm">Small</GwButton>
    <GwButton size="md">Medium</GwButton>
    <GwButton size="lg">Large</GwButton>
    <GwButton size="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    </GwButton>
  </div>
</div>

### States

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwButton disabled>Disabled</GwButton>
    <GwButton variant="outline" disabled>Disabled Outline</GwButton>
    <GwButton size="icon" variant="ghost" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
    </GwButton>
  </div>
</div>

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

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `default | destructive | outline | secondary | ghost | link | combobox | google | apple | facebook` | `default` | The visual style of the button. |
| `size` | `default | sm | md | lg | icon` | `lg` | The size of the button. |
| `as` | `string` | `button` | The element to render the button as. |
| `asChild` | `boolean` | `false` | Whether to render the button as its child component. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
