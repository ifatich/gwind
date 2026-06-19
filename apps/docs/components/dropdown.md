<script setup lang="ts">
import DropdownPreview from './previews/DropdownPreview.vue'
</script>

# Dropdown

Dropdown trigger composition and dropdown list surfaces for single option, icon option, selected state, and multiple checkbox options.

## Installation

```bash
npx gwind-system-ui add dropdown
```

## Preview

<DropdownPreview />

---

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import {
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
} from "@/components/ui/dropdown";

const selected = ref(true);
</script>

<template>
  <Dropdown model-label="Bali">
    <DropdownList>
      <DropdownListItem>Aceh</DropdownListItem>
      <DropdownListItem selected>Bali</DropdownListItem>
    </DropdownList>
  </Dropdown>

  <DropdownList variant="multiple">
    <DropdownListCheckboxItem v-model="selected">
      This is an option
    </DropdownListCheckboxItem>
  </DropdownList>
</template>
```

## Components

- `Dropdown` renders an interactive trigger and popover content using the existing `Popover` and `Button` components.
- `DropdownList` renders the dropdown value list surface.
- `DropdownListItem` renders a single selectable row, with optional icon, caption, selected check, or trailing slot.
- `DropdownListCheckboxItem` renders a multiple-selection row and reuses the Gwind `CheckboxField`.

## Dropdown Props

| Name           | Type                      | Default           | Description                               |
| -------------- | ------------------------- | ----------------- | ----------------------------------------- |
| `open`         | `boolean`                 | `undefined`       | Controlled open state.                    |
| `defaultOpen`  | `boolean`                 | `undefined`       | Initial uncontrolled open state.          |
| `disabled`     | `boolean`                 | `false`           | Disables the default trigger.             |
| `placeholder`  | `string`                  | `'Select option'` | Default trigger placeholder.              |
| `modelLabel`   | `string`                  | `undefined`       | Label shown in the default trigger.       |
| `triggerClass` | `HTMLAttributes['class']` | `undefined`       | Additional class for the default trigger. |
| `contentClass` | `HTMLAttributes['class']` | `undefined`       | Additional class for the popover content. |
| `class`        | `HTMLAttributes['class']` | `undefined`       | Additional class for the content wrapper. |

## DropdownList Props

| Name      | Type                      | Default     | Description                                     |
| --------- | ------------------------- | ----------- | ----------------------------------------------- |
| `variant` | `'single' \| 'multiple'`  | `'single'`  | Controls surface padding and item spacing.      |
| `class`   | `HTMLAttributes['class']` | `undefined` | Additional class for the dropdown list surface. |

## DropdownListItem Props

| Name       | Type                      | Default     | Description                                      |
| ---------- | ------------------------- | ----------- | ------------------------------------------------ |
| `selected` | `boolean`                 | `false`     | Shows selected state icon.                       |
| `disabled` | `boolean`                 | `false`     | Disables the item.                               |
| `label`    | `string`                  | `undefined` | Fallback label when no default slot is provided. |
| `caption`  | `string`                  | `undefined` | Optional secondary text.                         |
| `class`    | `HTMLAttributes['class']` | `undefined` | Additional class for the item.                   |

## DropdownListCheckboxItem Props

| Name         | Type                      | Default     | Description                                      |
| ------------ | ------------------------- | ----------- | ------------------------------------------------ |
| `modelValue` | `boolean`                 | `false`     | Checked state for `v-model`.                     |
| `disabled`   | `boolean`                 | `false`     | Disables the item.                               |
| `label`      | `string`                  | `undefined` | Fallback label when no default slot is provided. |
| `class`      | `HTMLAttributes['class']` | `undefined` | Additional class for the checkbox item.          |
