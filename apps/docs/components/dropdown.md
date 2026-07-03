<script setup lang="ts">
import DropdownPreview from './previews/DropdownPreview.vue'
</script>

# Dropdown

Dropdown trigger composition and dropdown list surfaces for single option, icon option, selected state, and multiple checkbox options.
The default trigger now uses an input-style field so it feels like a form control when closed and turns into a compact menu when opened.

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
import { ref, computed } from "vue";
import { Landmark } from "lucide-vue-next";
import {
  Dropdown,
  DropdownList,
  DropdownListCheckboxItem,
  DropdownListItem,
} from "@/components/ui/dropdown";

// 1. Single Selection State
const selectedProvince = ref("Bali");
const provinceOpen = ref(false);

// 2. Icon & Caption Selection State
const selectedAccount = ref("1.805,0595 gram");
const accountOpen = ref(false);

// 3. Multiple Selection State
const optionA = ref(true);
const optionB = ref(false);
const multipleOpen = ref(false);

const multipleLabel = computed(() => {
  const selected = [];
  if (optionA.value) selected.push("Option A");
  if (optionB.value) selected.push("Option B");
  return selected.length > 0 ? selected.join(", ") : "";
});
</script>

<template>
  <!-- Single Option Dropdown -->
  <Dropdown v-model:open="provinceOpen" label="Provinsi" :model-label="selectedProvince" placeholder="Pilih provinsi">
    <DropdownList>
      <DropdownListItem
        :selected="selectedProvince === 'Aceh'"
        @select="selectedProvince = 'Aceh'; provinceOpen = false"
      >
        Aceh
      </DropdownListItem>
      <DropdownListItem
        :selected="selectedProvince === 'Bali'"
        @select="selectedProvince = 'Bali'; provinceOpen = false"
      >
        Bali
      </DropdownListItem>
    </DropdownList>
  </Dropdown>

  <!-- Icon & Caption Dropdown -->
  <Dropdown v-model:open="accountOpen" label="Rekening Sumber" :model-label="selectedAccount" placeholder="Pilih rekening">
    <DropdownList>
      <DropdownListItem
        label="1.805,0595 gram"
        caption="1234 5678 9101 2345"
        :selected="selectedAccount === '1.805,0595 gram'"
        @select="selectedAccount = '1.805,0595 gram'; accountOpen = false"
      >
        <template #icon>
          <Landmark class="h-6 w-6" />
        </template>
      </DropdownListItem>
    </DropdownList>
  </Dropdown>

  <!-- Multiple Checkbox Dropdown -->
  <Dropdown v-model:open="multipleOpen" label="Pilihan Paket" :model-label="multipleLabel" placeholder="Pilih opsi">
    <DropdownList variant="multiple">
      <DropdownListCheckboxItem v-model="optionA">
        Option A
      </DropdownListCheckboxItem>
      <DropdownListCheckboxItem v-model="optionB">
        Option B
      </DropdownListCheckboxItem>
    </DropdownList>
  </Dropdown>
</template>
```

## Components

- `Dropdown` renders an interactive input-style trigger button and popover content using the existing `Popover` component.
- `DropdownList` renders the dropdown value list surface.
- `DropdownListItem` renders a single selectable row, with optional icon, caption, selected check, or trailing slot.
- `DropdownListCheckboxItem` renders a multiple-selection row and reuses the Gwind `CheckboxField`.

## Dropdown Props

| Name           | Type                      | Default           | Description                               |
| -------------- | ------------------------- | ----------------- | ----------------------------------------- |
| `label`        | `string`                  | `undefined`       | Top label for the dropdown. Appears as bottomsheet header title on mobile. |
| `open`         | `boolean`                 | `undefined`       | Controlled open state.                    |
| `defaultOpen`  | `boolean`                 | `undefined`       | Initial uncontrolled open state.          |
| `disabled`     | `boolean`                 | `false`           | Disables the default trigger.             |
| `placeholder`  | `string`                  | `'Select option'` | Default trigger placeholder.              |
| `modelLabel`   | `string`                  | `undefined`       | Label shown in the default trigger.       |
| `triggerClass` | `HTMLAttributes['class']` | `undefined`       | Additional class for the default input-style trigger. |
| `contentClass` | `HTMLAttributes['class']` | `undefined`       | Additional class for the popover content. |
| `class`        | `HTMLAttributes['class']` | `undefined`       | Additional class for the content wrapper. |

## DropdownList Props

| Name                | Type                      | Default        | Description                                              |
| ------------------- | ------------------------- | -------------- | -------------------------------------------------------- |
| `variant`           | `'single' \| 'multiple'`  | `'single'`     | Controls surface padding and item spacing.               |
| `searchThreshold`   | `number`                  | `10`           | Shows search field when item count exceeds this value.   |
| `searchPlaceholder` | `string`                  | `'Cari...'`    | Placeholder for the auto search field.                   |
| `class`             | `HTMLAttributes['class']` | `undefined`    | Additional class for the dropdown list surface.          |

When the list contains more than `searchThreshold` items, a search field appears at the top using `InputField` and filters items as you type. Search is focused automatically when the dropdown opens.

## DropdownListItem Props

| Name       | Type                      | Default     | Description                                      |
| ---------- | ------------------------- | ----------- | ------------------------------------------------ |
| `selected` | `boolean`                 | `false`     | Shows selected state icon.                       |
| `disabled` | `boolean`                 | `false`     | Disables the item.                               |
| `label`      | `string`                  | `undefined` | Fallback label when no default slot is provided. |
| `caption`    | `string`                  | `undefined` | Optional secondary text.                         |
| `searchText` | `string`                  | `undefined` | Custom text used for search filtering.           |
| `class`    | `HTMLAttributes['class']` | `undefined` | Additional class for the item.                   |

## DropdownListCheckboxItem Props

| Name         | Type                      | Default     | Description                                      |
| ------------ | ------------------------- | ----------- | ------------------------------------------------ |
| `modelValue` | `boolean`                 | `false`     | Checked state for `v-model`.                     |
| `disabled`   | `boolean`                 | `false`     | Disables the item.                               |
| `label`      | `string`                  | `undefined` | Fallback label when no default slot is provided. |
| `class`      | `HTMLAttributes['class']` | `undefined` | Additional class for the checkbox item.          |
