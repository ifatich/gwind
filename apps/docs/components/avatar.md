# Avatar

Image avatar with initials fallback.

## Installation

```bash
npx gwind-system-ui add avatar
```

## Preview

<ShadowPreview>
  <div class="flex items-center gap-4">
    <GwAvatar src="https://i.pravatar.cc/96?img=12" alt="Gwind User" />
    <GwAvatar alt="Pegadaian Design" />
    <GwAvatar fallback="UI" size="lg" />
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Avatar } from '@/components/ui/avatar'
</script>

<template>
  <Avatar src="/avatar.png" alt="Pegadaian Design" />
</template>
```
