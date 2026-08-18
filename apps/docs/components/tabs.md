<script setup>
import { ref } from 'vue'
const activeTab = ref('account')
const activeTabDark = ref('profile')
</script>

# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time with a smooth sliding active indicator.

## Installation

```bash
npx gwind-system-ui add tabs
```

## Preview

### Default (Light Background)

<ShadowPreview class="gwind-docs-preview">
  <GwTabGroup v-model="activeTab">
    <GwTabTriggerGroup>
      <GwTabTrigger value="account">Account</GwTabTrigger>
      <GwTabTrigger value="password">Password</GwTabTrigger>
      <GwTabTrigger value="notifications">Notifications</GwTabTrigger>
      <GwTabTrigger value="disabled" disabled>Disabled</GwTabTrigger>
    </GwTabTriggerGroup>
    <GwTabContent value="account">
      <GwCard class="mt-4">
        <GwCardHeader>
          <GwCardTitle>Account</GwCardTitle>
          <GwCardDescription>Manage your account settings and preferences.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <p class="text-omicron text-black-600">Account details and profile information are configured here.</p>
        </GwCardContent>
      </GwCard>
    </GwTabContent>
    <GwTabContent value="password">
      <GwCard class="mt-4">
        <GwCardHeader>
          <GwCardTitle>Password</GwCardTitle>
          <GwCardDescription>Update your password and security credentials.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <p class="text-omicron text-black-600">Ensure your password is at least 8 characters long.</p>
        </GwCardContent>
      </GwCard>
    </GwTabContent>
    <GwTabContent value="notifications">
      <GwCard class="mt-4">
        <GwCardHeader>
          <GwCardTitle>Notifications</GwCardTitle>
          <GwCardDescription>Choose how you want to receive alerts and notifications.</GwCardDescription>
        </GwCardHeader>
        <GwCardContent>
          <p class="text-omicron text-black-600">Configure email, SMS, and push notification channels.</p>
        </GwCardContent>
      </GwCard>
    </GwTabContent>
  </GwTabGroup>
</ShadowPreview>

### Non-White / Dark Background

Demonstrating the seamless adaptive border radius (rounded top-left on the first tab and top-right on the last tab) without intermediate notches on colored backgrounds.

<ShadowPreview class="gwind-docs-preview bg-black-900 p-6 rounded-lg">
  <GwTabGroup v-model="activeTabDark">
    <GwTabTriggerGroup>
      <GwTabTrigger value="profile">Profile</GwTabTrigger>
      <GwTabTrigger value="security">Security</GwTabTrigger>
      <GwTabTrigger value="billing">Billing</GwTabTrigger>
    </GwTabTriggerGroup>
    <GwTabContent value="profile">
      <div class="mt-4 p-4 rounded-md bg-white text-black-800">
        <p class="font-bold text-omicron">Profile Panel</p>
        <p class="text-sigma text-black-600">Adaptive tabs integrate smoothly with dark/brand headers.</p>
      </div>
    </GwTabContent>
    <GwTabContent value="security">
      <div class="mt-4 p-4 rounded-md bg-white text-black-800">
        <p class="font-bold text-omicron">Security Panel</p>
        <p class="text-sigma text-black-600">Two-factor authentication and active sessions.</p>
      </div>
    </GwTabContent>
    <GwTabContent value="billing">
      <div class="mt-4 p-4 rounded-md bg-white text-black-800">
        <p class="font-bold text-omicron">Billing Panel</p>
        <p class="text-sigma text-black-600">Invoices and payment method management.</p>
      </div>
    </GwTabContent>
  </GwTabGroup>
</ShadowPreview>

---

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { 
  TabGroup, 
  TabTriggerGroup, 
  TabTrigger, 
  TabContent 
} from '@/components/ui/tabs'

const activeTab = ref('account')
</script>

<template>
  <TabGroup v-model="activeTab">
    <TabTriggerGroup>
      <TabTrigger value="account">Account</TabTrigger>
      <TabTrigger value="password">Password</TabTrigger>
      <TabTrigger value="notifications">Notifications</TabTrigger>
    </TabTriggerGroup>
    
    <TabContent value="account">
      <p>Account content goes here.</p>
    </TabContent>
    <TabContent value="password">
      <p>Password content goes here.</p>
    </TabContent>
    <TabContent value="notifications">
      <p>Notifications content goes here.</p>
    </TabContent>
  </TabGroup>
</template>
```

---

## Sub-components

| Component | Responsibility |
| :--- | :--- |
| `TabGroup` | The root component managing active state via `v-model` / `defaultValue`. |
| `TabTriggerGroup` | Container for triggers, includes the animated sliding `<TabsIndicator>`. |
| `TabTrigger` | Individual interactive button that activates a specific tab panel. |
| `TabContent` | Container for the content associated with a specific tab `value`. |

---

## API Reference

### TabGroup

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `modelValue` | `string \| number` | `undefined` | Active tab value (supports `v-model`). |
| `defaultValue` | `string \| number` | `'tab1'` | Initial active tab when uncontrolled. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation of the tab list. |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction for keyboard navigation. |

### TabTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string \| number` | **Required** | Unique identifier matching corresponding `TabContent`. |
| `disabled` | `boolean` | `false` | Whether the tab trigger is disabled. |
| `class` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes. |

### TabContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string \| number` | **Required** | Matches the `value` of the activating `TabTrigger`. |
| `class` | `string \| HTMLAttributes['class']` | `undefined` | Additional CSS classes. |
