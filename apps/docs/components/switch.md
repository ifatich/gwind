<script setup lang="ts">
import { ref } from 'vue'

const enabled = ref(true)
</script>

# Switch

On/off control with disabled state.

## Installation

```bash
npx gwind-system-ui add switch
```

## Preview

<ShadowPreview>
  <div class="flex items-center gap-4">
    <GwSwitch v-model="enabled" />
    <GwSwitch />
    <GwSwitch disabled />
    <span class="text-sigma font-semibold text-black-600">Value: {{ enabled }}</span>
  </div>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/components/ui/switch'

const enabled = ref(false)
</script>

<template>
  <Switch v-model="enabled" />
</template>
```
