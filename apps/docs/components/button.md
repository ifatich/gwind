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
<Button variant="primary">Primary Button</Button>
```

### Secondary
Used for secondary actions.
```vue
<Button variant="secondary">Secondary Button</Button>
```

### Tertiary
Used for less prominent actions without borders.
```vue
<Button variant="tertiary">Tertiary Button</Button>
```

### Neutral
A neutral button with a grey border.
```vue
<Button variant="neutral">Neutral Button</Button>
```

### Outline
A button with a primary border, used for secondary actions.
```vue
<Button variant="outline">Outline Button</Button>
```

### Destructive
Used for destructive actions like delete or remove.
```vue
<Button variant="destructive">Destructive Button</Button>
```

### Ghost & Ghost FAB
A button with no background until hovered.
```vue
<Button variant="ghost">Ghost Button</Button>
<Button variant="ghost-fab">Ghost FAB Button</Button>
```

### Link
A button that looks like a standard hyperlink.
```vue
<Button variant="link">Link Button</Button>
```

### Social Buttons
Buttons specifically styled for social logins.
```vue
<Button variant="google">
  <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
  Google
</Button>

<Button variant="apple">
  <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.56.65-1.05 1.71-.92 2.73 1 .08 2.01-.5 2.61-1.22z"/>
  </svg>
  Apple
</Button>

<Button variant="facebook">
  <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
  Facebook
</Button>
```

### Custom Backgrounds
You can easily override the background and hover colors using Tailwind classes for specific semantic meanings like Warning or Success.
```vue
<!-- Warning -->
<Button class="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-800">
  Warning
</Button>

<!-- Success -->
<Button class="bg-broccoli-500 text-white hover:bg-broccoli-600 active:bg-broccoli-800">
  Success
</Button>
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
