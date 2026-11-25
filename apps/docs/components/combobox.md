<script setup>
import ComboboxPreview from './previews/ComboboxPreview.vue'
</script>

# Combobox

Autocomplete input and command palette with a list of suggestions.

## Installation

```bash
npx gwind-ui add combobox
```

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

## Floating List Position

`ComboboxList` renders its content in a portal so surrounding containers do not clip the popup. It follows the trigger and accepts the Reka UI placement props `side`, `align`, and `side-offset`.

```vue
<ComboboxList side="top" align="end" :side-offset="8">
  <!-- input and options -->
</ComboboxList>
```

## Advanced Usage

### Custom Filtering
By default, it filters by the item value. To customize matching (or use it as a command palette), set `ignore-filter` on `Combobox`, bind `v-model` on `ComboboxInput`, and render the filtered list yourself.

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const items = ['Cabang Bandung', 'Cabang Depok', 'Cabang Jakarta']
const selected = ref('')
const term = ref('')
const filtered = computed(() => {
  const query = term.value.trim().toLowerCase()
  return items.filter((item) => item.toLowerCase().startsWith(query))
})
</script>

<template>
  <Combobox v-model="selected" ignore-filter>
    <ComboboxAnchor>
      <ComboboxTrigger>Pilih cabang</ComboboxTrigger>
    </ComboboxAnchor>
    <ComboboxList>
      <ComboboxInput v-model="term" placeholder="Cari cabang..." />
      <ComboboxEmpty>Tidak ada cabang yang cocok.</ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxItem v-for="item in filtered" :key="item" :value="item">
          {{ item }}
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
```

`ComboboxInput` forwards its value and input events, so `v-model` keeps the custom query in sync. `ignore-filter` disables the built-in matching; the example above filters by prefix instead.
