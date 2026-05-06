# Badge

Displays a small label or status indicator.

## Preview

### Variants

<div class="gw-preview">
  <div class="gw-preview-row">
    <GwBadge variant="default">Default</GwBadge>
    <GwBadge variant="secondary">Secondary</GwBadge>
    <GwBadge variant="outline">Outline</GwBadge>
    <GwBadge variant="destructive">Destructive</GwBadge>
    <GwBadge variant="success">Success</GwBadge>
    <GwBadge variant="warning">Warning</GwBadge>
  </div>
</div>

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
