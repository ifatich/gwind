<script setup lang="ts">
/**
 * @file PropsTable.vue
 * @description Enterprise-grade unified API reference table for components in Gwind Playground.
 * Consumes 100% Gwind Design Tokens for surfaces, typography, borders, and spacing.
 */
export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
  isSlot?: boolean;
  isEvent?: boolean;
  required?: boolean;
  isRequired?: boolean;
}

defineProps<{
  items: PropRow[];
}>();
</script>

<template>
  <div class="overflow-x-auto w-full">
    <table class="w-full text-left text-omega border-collapse">
      <thead>
        <tr class="border-b border-border-subtle bg-background">
          <th class="py-gw-8 px-gw-16 font-bold text-foreground-primary">Prop / Slot</th>
          <th class="py-gw-8 px-gw-16 font-bold text-foreground-primary">Tipe</th>
          <th class="py-gw-8 px-gw-16 font-bold text-foreground-primary">Default</th>
          <th class="py-gw-8 px-gw-16 font-bold text-foreground-primary">Deskripsi</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border-subtle text-foreground-secondary">
        <tr
          v-for="item in items"
          :key="item.name"
          class="hover:bg-background/60 transition-colors"
        >
          <td class="py-gw-8 px-gw-16 align-top">
            <div class="flex items-center gap-1.5 flex-wrap">
              <code class="font-mono text-atom text-foreground-primary font-bold">{{ item.name }}</code>
              <span
                v-if="item.isSlot"
                class="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-lime-100 text-lime-800"
              >
                slot
              </span>
              <span
                v-else-if="item.isEvent"
                class="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-black-100 text-black-700"
              >
                event
              </span>
              <span
                v-if="item.required || item.isRequired"
                class="text-destructive font-bold text-atom"
                title="Wajib (Required)"
              >
                *
              </span>
            </div>
          </td>
          <td class="py-gw-8 px-gw-16 align-top font-mono text-atom text-foreground-tertiary">
            {{ item.type }}
          </td>
          <td class="py-gw-8 px-gw-16 align-top font-mono text-atom text-foreground-secondary">
            {{ item.default ?? '-' }}
          </td>
          <td class="py-gw-8 px-gw-16 align-top text-omega text-foreground-secondary leading-relaxed">
            {{ item.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
