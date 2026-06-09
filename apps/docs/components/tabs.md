<script setup>
import { ref } from 'vue'
const activeTab = ref('account')
</script>

# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time.

## Preview

<ShadowPreview class="gwind-docs-preview">
  <GwTabGroup v-model="activeTab">
    <GwTabTriggerGroup>
      <GwTabTrigger value="account">Account</GwTabTrigger>
      <GwTabTrigger value="password">Password</GwTabTrigger>
      <GwTabTrigger value="notifications">Notifications</GwTabTrigger>
    </GwTabTriggerGroup>
    <GwTabContent value="account" class="mt-4">
      <GwCard class="w-100">
        <GwCardHeader>
          <GwCardTitle>Account</GwCardTitle>
          <GwCardDescription>Make changes to your account here.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <p class="text-sm">Account details content goes here.</p>
        </GwCardContent>
      </GwCard>
    </GwTabContent>
    <GwTabContent value="password" class="mt-4">
      <GwCard class="w-100">
        <GwCardHeader>
          <GwCardTitle>Password</GwCardTitle>
          <GwCardDescription>Change your password here.</GwCardDescription>
        </GwCardHeader>
      </GwCard>
    </GwTabContent>
    <GwTabContent value="notifications" class="mt-4">
      <GwCard class="w-100">
        <GwCardHeader>
          <GwCardTitle>Notifications</GwCardTitle>
          <GwCardDescription>Choose how you want to be notified.</GwCardDescription>
        </GwCardHeader>
      </GwCard>
    </GwTabContent>
  </GwTabGroup>
</ShadowPreview>

---

## Variants

- `orientation="vertical"` is supported by the root component for side-by-side layouts.
- Use the same trigger/content composition for both horizontal and vertical arrangements.

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add tabs
npx gwind-system-ui add badge
```

### 2. Manual Installation

Create a folder `src/components/ui/tabs/` and copy the source code for each file.

## Usage

```vue
<script setup>
import { 
  TabGroup, 
  TabTriggerGroup, 
  TabTrigger, 
  TabContent 
} from '@/components/ui/tabs'
import { ref } from 'vue'

const activeTab = ref('tab1')
</script>

<template>
  <TabGroup v-model="activeTab">
    <TabTriggerGroup>
      <TabTrigger value="tab1">Tab 1</TabTrigger>
      <TabTrigger value="tab2">Tab 2</TabTrigger>
    </TabTriggerGroup>
    
    <TabContent value="tab1">
      <p>Content for Tab 1</p>
    </TabContent>
    <TabContent value="tab2">
      <p>Content for Tab 2</p>
    </TabContent>
  </TabGroup>
</template>
```

## Sub-components

| Component | Description |
|-----------|-------------|
| `TabGroup` | The Root component that manages the active state |
| `TabTriggerGroup` | The container for tab triggers, includes the animated indicator |
| `TabTrigger` | A button that activates a specific tab panel |
| `TabContent` | The panel containing the content for a specific tab |

## Accessibility

- Arrow keys navigate between tabs
- `Home` / `End` jump to first/last tab
- Tab panels are properly associated with their triggers via `aria-controls`
