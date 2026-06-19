# Toast

Temporary notification surface for snackbar and banner-like messages.

## Installation

```bash
npx gwind-system-ui add toast
```

## Preview

<ShadowPreview>
  <div class="grid gap-4">
    <GwToast title="Saved" description="Your changes have been saved." variant="success" />
    <GwToast title="Warning" description="Please review the form before continuing." variant="warning" />
    <GwToast title="Error" description="The request could not be completed." variant="error" />
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Toast } from '@/components/ui/toast'
</script>

<template>
  <Toast title="Saved" description="Your changes have been saved." variant="success" />
</template>
```
