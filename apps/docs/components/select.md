<script setup>
import { ref } from 'vue'
const framework = ref('')
</script>

# Select

Displays a list of options for the user to pick from — triggered by a button.

## Preview

### Basic Select

<div class="gw-preview">
  <div style="max-width: 280px;">
    <GwSelect v-model="framework">
      <GwSelectTrigger>
        <GwSelectValue placeholder="Select a framework..." />
      </GwSelectTrigger>
      <GwSelectContent>
        <GwSelectGroup>
          <GwSelectLabel>Frameworks</GwSelectLabel>
          <GwSelectItem value="vue">Vue.js</GwSelectItem>
          <GwSelectItem value="react">React</GwSelectItem>
          <GwSelectItem value="angular">Angular</GwSelectItem>
          <GwSelectItem value="svelte">Svelte</GwSelectItem>
        </GwSelectGroup>
      </GwSelectContent>
    </GwSelect>
  </div>
</div>

## Installation

### 1. CLI Installation

```bash
npx gwind-system-ui add select
```

### 2. Manual Installation

Create a folder `src/components/ui/select/` and copy the source code for each file.

## Usage

```vue
<script setup>
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Select v-model="value">
    <SelectTrigger>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
```

## Sub-components

| Component | Description |
|-----------|-------------|
| `Select` | The Root component that manages the open/close state |
| `SelectTrigger` | The button that opens the select menu |
| `SelectValue` | Displays the current selected value or placeholder |
| `SelectContent` | The portal-wrapped dropdown container |
| `SelectGroup` | Used to group related items |
| `SelectLabel` | A non-clickable label for a group of items |
| `SelectItem` | A clickable option in the select menu |
| `SelectSeparator` | A visual divider between items or groups |
