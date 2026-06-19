# Select

Displays a list of options for the user to pick from—triggered by a button.

## Installation

```bash
npx gwind-system-ui add select
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <div class="gwind-docs-preview-section">
      <div class="gwind-docs-preview-label">Simple</div>
      <GwSelect>
        <GwSelectTrigger class="w-[180px]">
          <GwSelectValue placeholder="Select a fruit" />
        </GwSelectTrigger>
        <GwSelectContent>
          <GwSelectGroup>
            <GwSelectLabel>Fruits</GwSelectLabel>
            <GwSelectItem value="apple">Apple</GwSelectItem>
            <GwSelectItem value="banana">Banana</GwSelectItem>
            <GwSelectItem value="blueberry">Blueberry</GwSelectItem>
            <GwSelectItem value="grapes">Grapes</GwSelectItem>
            <GwSelectItem value="pineapple">Pineapple</GwSelectItem>
          </GwSelectGroup>
        </GwSelectContent>
      </GwSelect>
    </div>
    <div class="gwind-docs-preview-section">
      <div class="gwind-docs-preview-label">Grouped</div>
      <GwSelect>
        <GwSelectTrigger class="w-[220px]">
          <GwSelectValue placeholder="Select a timezone" />
        </GwSelectTrigger>
        <GwSelectContent>
          <GwSelectGroup>
            <GwSelectLabel>North America</GwSelectLabel>
            <GwSelectItem value="est">Eastern Standard Time (EST)</GwSelectItem>
            <GwSelectItem value="cst">Central Standard Time (CST)</GwSelectItem>
          </GwSelectGroup>
          <GwSelectSeparator />
          <GwSelectGroup>
            <GwSelectLabel>Europe</GwSelectLabel>
            <GwSelectItem value="gmt">Greenwich Mean Time (GMT)</GwSelectItem>
            <GwSelectItem value="cet">Central European Time (CET)</GwSelectItem>
          </GwSelectGroup>
        </GwSelectContent>
      </GwSelect>
    </div>
  </div>
</ShadowPreview>

---

## Variants

- Standard select for single choice input.
- Grouped select with separators for more complex option sets.

## Usage

```vue
<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
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

---

## Structure

The Select component uses several sub-components to provide a flexible and accessible dropdown:

- `Select`: Root component that manages state.
- `SelectTrigger`: The button that opens the dropdown.
- `SelectValue`: Displays the current selection or placeholder.
- `SelectContent`: The container for the list of items.
- `SelectGroup`: Used to group related items.
- `SelectLabel`: A label for a group of items.
- `SelectItem`: An individual pickable option.
- `SelectSeparator`: A horizontal line to separate items or groups.

---

## Examples

### With Grouped Options
```vue
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```
