# Link

Inline link styles.

## Installation

```bash
npx gwind-system-ui add link
```

## Preview

<ShadowPreview>
  <div class="flex items-center gap-4">
    <GwLink href="#">Default link</GwLink>
    <GwLink href="#" disabled>Disabled link</GwLink>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Link } from '@/components/ui/link'
</script>

<template>
  <Link href="/guide/getting-started">Getting Started</Link>
</template>
```
