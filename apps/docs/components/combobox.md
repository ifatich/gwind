<script setup>
import ComboboxPreview from './previews/ComboboxPreview.vue'
</script>

# Combobox

Autocomplete input and command palette with a list of suggestions.

## Preview

<ComboboxPreview />

---

## Usage

The live preview above is rendered from a separate Vue component so the source example stays clean and easy to copy.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from '@/components/ui/combobox'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const value = ref('')
</script>

<template>
  <Combobox v-model="value">
    <ComboboxAnchor as-child>
      <ComboboxTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          class="w-[200px] justify-between"
        >
          {{ value ? frameworks.find((f) => f.value === value)?.label : "Select framework..." }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 shrink-0 opacity-50">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList>
      <ComboboxInput placeholder="Search framework..." />
      <ComboboxEmpty>No framework found.</ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxItem
          v-for="framework in frameworks"
          :key="framework.value"
          :value="framework.value"
        >
          {{ framework.label }}
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
```

---

## Structure

The Combobox component is highly flexible:

- `Combobox`: The root container that manages selection state.
- `ComboboxAnchor`: Wraps the trigger and content for positioning.
- `ComboboxTrigger`: The element that opens the list.
- `ComboboxList`: The portal/content containing the searchable list.
- `ComboboxInput`: The search field.
- `ComboboxItem`: An individual item in the list.
- `ComboboxItemIndicator`: Displayed when the item is selected.
- `ComboboxEmpty`: Show when no results match the search.
- `ComboboxGroup`: Used to group items together.

---

## Advanced Usage

### Custom Filtering
By default, it filters by the item value. You can customize this or use it as a command palette.

```vue
<Combobox :filter-function="(list, search) => ...">
  ...
</Combobox>
```
