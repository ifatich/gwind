<script setup lang="ts">
/**
 * @file InventorySection.vue
 * @description Interactive component catalog and directory for the Gwind Design System.
 * Consumes 100% Gwind Design Tokens with responsive grid layout and search filtering.
 */
import { ref, computed } from "vue";
import { Input, Badge, Button } from "@gwind/ui";
import { Search, X } from "lucide-vue-next";
import { allComponentsCatalog, categoryOptions } from "../../data/catalog";

const emit = defineEmits<{
  (e: "navigate", id: string): void;
}>();

const searchQuery = ref("");
const selectedCategory = ref("all");

const filteredCatalog = computed(() => {
  return allComponentsCatalog.filter((item) => {
    const matchCategory =
      selectedCategory.value === "all" ||
      item.category === selectedCategory.value;
    const query = searchQuery.value.trim().toLowerCase();
    const matchQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.subItems.some((sub) => sub.toLowerCase().includes(query));
    return matchCategory && matchQuery;
  });
});
</script>

<template>
  <section
    id="inventory"
    class="playground-section playground-panel space-y-6"
  >
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <p class="playground-eyebrow">Interactive Catalog & Directory</p>
          <Badge variant="brocoli">{{ filteredCatalog.length }} dari {{ allComponentsCatalog.length }} Komponen</Badge>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
          Direktori Komponen UI Gwind
        </h2>
        <p class="text-sigma text-foreground-secondary mt-1">
          Cari dan filter seluruh 34 komponen produksi berdasarkan kategori domain atau kata kunci. Klik kartu komponen untuk langsung menuju demo interaktif.
        </p>
      </div>
    </div>

    <!-- Search Bar & Category Filter Pills -->
    <div class="space-y-4 pt-2">
      <!-- Search Input Bar -->
      <div class="relative max-w-xl">
        <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-secondary pointer-events-none z-10" />
        <Input
          id="input-inventory-search"
          v-model="searchQuery"
          placeholder="Cari komponen UI (misal: rupiah, dialog, button, select, avatar, kyc)..."
          class="h-11 pl-10 pr-10 rounded-full border-border-subtle bg-background focus:bg-background text-sigma"
        />
        <button
          v-if="searchQuery"
          id="btn-inventory-clear-search"
          type="button"
          class="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground-secondary hover:text-foreground text-xs font-bold z-10 cursor-pointer"
          @click="searchQuery = ''"
        >
          <X class="h-4 w-4" />
        </button>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center gap-2">
        <button
          v-for="cat in categoryOptions"
          :id="`btn-cat-${cat.id}`"
          :key="cat.id"
          type="button"
          class="playground-category-pill cursor-pointer"
          :class="selectedCategory === cat.id ? 'active' : ''"
          @click="selectedCategory = cat.id"
        >
          <span>{{ cat.label }}</span>
          <span
            class="px-1.5 py-0.2 rounded-full text-[11px] font-bold"
            :class="selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-background text-foreground-secondary'"
          >
            {{ cat.count }}
          </span>
        </button>
      </div>
    </div>

    <!-- Filtered Component Grid -->
    <div
      v-if="filteredCatalog.length > 0"
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2"
    >
      <div
        v-for="comp in filteredCatalog"
        :id="`card-inventory-${comp.id}`"
        :key="comp.id"
        class="playground-inventory-card group"
        @click="emit('navigate', comp.id)"
      >
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-foreground-secondary">
              {{ comp.categoryLabel }}
            </span>
            <span
              class="text-[11px] font-bold px-2 py-0.5 rounded-full"
              :class="
                comp.badge === 'Fintech'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-background text-foreground-secondary border border-border-subtle'
              "
            >
              {{ comp.badge }}
            </span>
          </div>
          <h3 class="text-omicron font-extrabold text-foreground group-hover:text-foreground-green transition-colors">
            {{ comp.name }}
          </h3>
          <p class="text-omega text-foreground-secondary line-clamp-2 leading-relaxed">
            {{ comp.description }}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs">
          <span class="text-foreground-secondary font-medium">
            {{ comp.subItems.length }} sub-komponen
          </span>
          <span class="font-bold text-foreground-green group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Lihat Demo →
          </span>
        </div>
      </div>
    </div>

    <!-- Empty Search State -->
    <div
      v-else
      class="rounded-xl border border-dashed border-border-subtle bg-background p-8 text-center space-y-3"
    >
      <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground-secondary">
        <Search class="h-6 w-6" />
      </div>
      <h4 class="text-sigma font-bold text-foreground">
        Komponen &ldquo;{{ searchQuery }}&rdquo; tidak ditemukan
      </h4>
      <p class="text-omega text-foreground-secondary max-w-sm mx-auto">
        Coba kata kunci lain atau reset filter kategori untuk melihat seluruh 34 komponen UI.
      </p>
      <Button id="btn-inventory-reset" size="sm" variant="outline" @click="searchQuery = ''; selectedCategory = 'all'">
        Reset Pencarian & Filter
      </Button>
    </div>
  </section>
</template>
