# Badge

Displays a small label or status indicator.

## Preview

### Variants

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-row">
    <GwBadge variant="green">Default</GwBadge>
    <GwBadge variant="brocoli">Secondary</GwBadge>
    <GwBadge variant="orange">Outline</GwBadge>
    <GwBadge variant="blue">Destructive</GwBadge>
    <GwBadge variant="red">Success</GwBadge>
    <GwBadge variant="outline">Warning</GwBadge>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge>New</Badge>
</template>
```

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `default | secondary | destructive | outline | success | warning` | `default` | The visual style of the badge. |
| `class` | `string | HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
