<script setup lang="ts">
import { ref } from 'vue'

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
  <ShadowPreview>
    <div class="gwind-docs-preview-col w-full max-w-sm">
    <GwCombobox v-model="value">
      <GwComboboxAnchor as-child>
        <GwComboboxTrigger as-child>
          <GwButton
            variant="outline"
            role="combobox"
            class="w-full justify-between"
          >
            Select framework...
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4 shrink-0 opacity-50">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </GwButton>
        </GwComboboxTrigger>
      </GwComboboxAnchor>

      <GwComboboxList>
        <GwComboboxInput placeholder="Search framework..." />
        <GwComboboxEmpty>No framework found.</GwComboboxEmpty>
        <GwComboboxGroup>
          <GwComboboxItem value="next.js">Next.js</GwComboboxItem>
          <GwComboboxItem value="sveltekit">SvelteKit</GwComboboxItem>
          <GwComboboxItem value="nuxt">Nuxt.js</GwComboboxItem>
          <GwComboboxItem value="remix">Remix</GwComboboxItem>
          <GwComboboxItem value="astro">Astro</GwComboboxItem>
        </GwComboboxGroup>
      </GwComboboxList>
    </GwCombobox>

    <p class="text-xs text-muted-foreground">
      Selected value: {{ value || 'none' }}
    </p>
    </div>
  </ShadowPreview>
</template>
