<script setup>
import { ref } from 'vue'
const activeTab = ref('account')
</script>

# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time.

## Preview

<div class="gw-preview">
  <GwTabs
    v-model="activeTab"
    :tabs="[
      { value: 'account', label: 'Account' },
      { value: 'password', label: 'Password' },
      { value: 'notifications', label: 'Notifications' },
    ]"
  >
    <template #account>
      <GwCard>
        <GwCardHeader>
          <GwCardTitle>Account</GwCardTitle>
          <GwCardDescription>Make changes to your account here. Click save when you're done.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <div class="flex flex-col gap-4">
            <div>
              <label class="text-sm font-medium mb-1.5 block">Name</label>
              <GwInput default-value="Pedro Duarte" />
            </div>
            <div>
              <label class="text-sm font-medium mb-1.5 block">Username</label>
              <GwInput default-value="@peduarte" />
            </div>
          </div>
        </GwCardContent>
        <GwCardFooter>
          <GwButton>Save changes</GwButton>
        </GwCardFooter>
      </GwCard>
    </template>

    <template #password>
      <GwCard>
        <GwCardHeader>
          <GwCardTitle>Password</GwCardTitle>
          <GwCardDescription>Change your password here. After saving, you'll be logged out.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <div class="flex flex-col gap-4">
            <div>
              <label class="text-sm font-medium mb-1.5 block">Current password</label>
              <GwInput type="password" />
            </div>
            <div>
              <label class="text-sm font-medium mb-1.5 block">New password</label>
              <GwInput type="password" />
            </div>
          </div>
        </GwCardContent>
        <GwCardFooter>
          <GwButton>Update password</GwButton>
        </GwCardFooter>
      </GwCard>
    </template>

    <template #notifications>
      <GwCard>
        <GwCardHeader>
          <GwCardTitle>Notifications</GwCardTitle>
          <GwCardDescription>Configure how you receive notifications.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <span class="text-sm">Email notifications</span>
              <GwBadge variant="success">Enabled</GwBadge>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Push notifications</span>
              <GwBadge variant="outline">Disabled</GwBadge>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">SMS notifications</span>
              <GwBadge variant="outline">Disabled</GwBadge>
            </div>
          </div>
        </GwCardContent>
      </GwCard>
    </template>
  </GwTabs>
</div>

## Usage

```vue
<script setup>
import { Tabs, Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import { ref } from 'vue'

const activeTab = ref('tab1')
</script>

<template>
  <Tabs
    v-model="activeTab"
    :tabs="[
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
    ]"
  >
    <template #tab1>
      <p>Content for Tab 1</p>
    </template>
    <template #tab2>
      <p>Content for Tab 2</p>
    </template>
  </Tabs>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | — | Active tab value (v-model) |
| `defaultValue` | `string` | First tab's value | Initially active tab |
| `tabs` | `{ value: string, label: string, disabled?: boolean }[]` | — | Tab definitions |
| `class` | `string` | — | Additional CSS classes |

## Accessibility

- Arrow keys navigate between tabs
- `Home` / `End` jump to first/last tab
- Tab panels are properly associated with their triggers via `aria-controls`
