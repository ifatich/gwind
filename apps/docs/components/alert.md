# Alert

Displays a callout for user attention.

## Installation

```bash
npx gwind-system-ui add alert
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <GwAlert>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      <GwAlertTitle>Heads up!</GwAlertTitle>
      <GwAlertDescription>
        You can add components to your app using the cli.
      </GwAlertDescription>
    </GwAlert>
    <GwAlert variant="destructive">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4m0 4h.01"/></svg>
      <GwAlertTitle>Error</GwAlertTitle>
      <GwAlertDescription>
        Your session has expired. Please log in again.
      </GwAlertDescription>
    </GwAlert>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal } from 'lucide-vue-next'
</script>

<template>
  <Alert>
    <Terminal class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>
```

---

## Variants

### Default
```vue
<Alert variant="default">...</Alert>
```

### Destructive
Used for errors or critical warnings.
```vue
<Alert variant="destructive">
  <AlertTriangle class="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired.</AlertDescription>
</Alert>
```
