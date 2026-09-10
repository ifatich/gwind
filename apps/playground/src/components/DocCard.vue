<script setup lang="ts">
/**
 * @file DocCard.vue
 * @description Standardized documentation card layout primitive.
 * Strictly consumes Gwind Design Tokens:
 * - Surface: bg-card, bg-background
 * - Borders: border-border, border-border-subtle
 * - Typography: text-omicron (H3 title), text-sigma (description), text-omega (footer), text-atom (badge)
 * - Ink: text-foreground-primary, text-foreground-secondary
 * - Spacing: p-gw-24, px-gw-24, py-gw-16, gap-gw-8
 * - Radius: rounded-lg
 * - Elevation: shadow-drop-1
 */
import { Badge, type BadgeVariants } from "@gwind/ui";

defineProps<{
  title: string;
  description?: string;
  badge?: string;
  badgeVariant?: BadgeVariants["variant"];
}>();
</script>

<template>
  <div class="rounded-lg border border-black-200 bg-card text-card-foreground overflow-hidden transition-colors">
    <!-- Card Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-gw-8 border-b border-border-subtle bg-background px-gw-24 py-gw-16"
    >
      <div class="space-y-1 min-w-0">
        <div class="flex flex-wrap items-center gap-gw-8">
          <h3 class="text-omicron font-extrabold text-foreground-primary tracking-tight">
            {{ title }}
          </h3>
          <Badge
            v-if="badge"
            :variant="badgeVariant || 'outline'"
            class="text-atom py-0 px-2 font-bold uppercase tracking-wider"
          >
            {{ badge }}
          </Badge>
        </div>
        <p v-if="description" class="text-sigma text-foreground-secondary leading-relaxed">
          {{ description }}
        </p>
      </div>
      <div v-if="$slots['header-action']" class="shrink-0 flex items-center gap-gw-8">
        <slot name="header-action" />
      </div>
    </div>

    <!-- Card Content / Canvas -->
    <div class="p-gw-24 bg-card">
      <slot />
    </div>

    <!-- Card Footer -->
    <div
      v-if="$slots.footer"
      class="border-t border-border-subtle bg-background px-gw-24 py-gw-16 text-omega text-foreground-secondary flex items-center gap-gw-8"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
