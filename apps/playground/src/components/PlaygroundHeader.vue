<script setup lang="ts">
/**
 * @file PlaygroundHeader.vue
 * @description Enterprise-grade global header with obsidian glassmorphic styling,
 * spotlight command palette search bar, layout density toggles, and direct token shortcuts.
 */
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
  PackageCheck,
  BookOpen,
  SlidersHorizontal,
  Search,
  X,
  CornerDownLeft,
  Palette,
  Sparkles,
  Layers,
} from "lucide-vue-next";
import { allComponentsCatalog, type CatalogItem } from "../data/catalog";

defineProps<{
  docsUrl: string;
  compactMode: boolean;
}>();

const emit = defineEmits<{
  (e: "update:compactMode", value: boolean): void;
  (e: "navigate", id: string): void;
}>();

const searchQuery = ref("");
const isOpen = ref(false);
const selectedCategory = ref<string>("all");
const selectedIndex = ref(0);
const searchInputRef = ref<HTMLInputElement | null>(null);
const searchContainerRef = ref<HTMLElement | null>(null);

const categoryFilters = [
  { id: "all", label: "Semua" },
  { id: "forms", label: "Forms" },
  { id: "data", label: "Data" },
  { id: "feedback", label: "Feedback" },
  { id: "actions", label: "Actions" },
];

const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return allComponentsCatalog.filter((item) => {
    const matchCategory =
      selectedCategory.value === "all" || item.category === selectedCategory.value;
    if (!matchCategory) return false;
    if (!query) return selectedCategory.value !== "all"; // show category items if category is selected
    return (
      item.name.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query) ||
      item.subItems.some((sub) => sub.toLowerCase().includes(query))
    );
  });
});

function handleSelect(id: string) {
  emit("navigate", id);
  isOpen.value = false;
  searchQuery.value = "";
  selectedCategory.value = "all";
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return;

  if (filteredItems.value.length === 0) {
    if (e.key === "Escape") {
      isOpen.value = false;
      searchInputRef.value?.blur();
    }
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedIndex.value = (selectedIndex.value + 1) % filteredItems.value.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedIndex.value =
      (selectedIndex.value - 1 + filteredItems.value.length) %
      filteredItems.value.length;
  } else if (e.key === "Enter") {
    e.preventDefault();
    const item = filteredItems.value[selectedIndex.value];
    if (item) {
      handleSelect(item.id);
    }
  } else if (e.key === "Escape") {
    e.preventDefault();
    isOpen.value = false;
    searchInputRef.value?.blur();
  }
}

function handleClickOutside(event: MouseEvent) {
  if (
    searchContainerRef.value &&
    !searchContainerRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
}

function handleGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInputRef.value?.focus();
    isOpen.value = true;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
  window.addEventListener("keydown", handleGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
  window.removeEventListener("keydown", handleGlobalKeydown);
});
</script>

<template>
  <header class="playground-header relative">
    <!-- Ambient subtle top glow line -->
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400/40 to-transparent pointer-events-none" />

    <div class="playground-container flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
      <!-- 1. Brand Logo & Product Badge -->
      <div class="flex min-w-0 items-center gap-2.5 sm:gap-3 shrink-0">
        <div
          class="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-lime-500 via-emerald-400 to-lime-300 text-black font-black shadow-md shadow-lime-500/20 ring-1 ring-white/25 cursor-pointer hover:scale-105 transition-transform"
          @click="emit('navigate', 'button')"
        >
          <PackageCheck class="h-4 w-4 sm:h-5 sm:w-5 text-black stroke-[2.5]" />
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span
              class="text-sigma sm:text-omicron font-black tracking-tight text-white cursor-pointer hover:text-lime-300 transition-colors"
              @click="emit('navigate', 'button')"
            >
              Gwind
            </span>
            <span class="inline-flex items-center gap-1 rounded-full bg-lime-400/15 border border-lime-400/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold text-lime-300">
              <span class="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              v1.0.0
            </span>
          </div>
          <p class="text-[11px] text-white/60 hidden xl:block leading-none mt-0.5 font-medium">
            Design System by Fatich Imam Al Arasy • Vue 3 & Tailwind v4
          </p>
        </div>
      </div>

      <!-- 2. Center: Spotlight Command Search Bar -->
      <div
        ref="searchContainerRef"
        class="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 sm:mx-4"
      >
        <div class="relative flex items-center group">
          <Search class="absolute left-3.5 h-4 w-4 text-white/40 group-focus-within:text-lime-400 pointer-events-none transition-colors z-10" />
          <input
            id="navbar-search-input"
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            placeholder="Cari 34 komponen... (⌘K)"
            class="w-full h-9 sm:h-10 pl-10 pr-9 text-xs sm:text-sigma rounded-full bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white/[0.16] text-white placeholder:text-white/40 border border-white/15 focus:border-lime-400/80 focus:ring-2 focus:ring-lime-400/20 focus:outline-none transition-all shadow-inner"
            @focus="isOpen = true"
            @input="isOpen = true; selectedIndex = 0"
            @keydown="handleKeydown"
          />
          <button
            v-if="searchQuery"
            id="btn-navbar-clear-search"
            type="button"
            class="absolute right-3 text-white/50 hover:text-white text-xs cursor-pointer p-0.5 z-10 rounded-full hover:bg-white/10 transition-colors"
            @click="searchQuery = ''; isOpen = false"
          >
            <X class="h-3.5 w-3.5" />
          </button>
          <span
            v-else
            class="absolute right-3 hidden sm:inline-flex items-center rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-white/60 pointer-events-none"
          >
            ⌘K
          </span>
        </div>

        <!-- Spotlight Command Palette Dropdown Panel -->
        <div
          v-if="isOpen && (searchQuery.trim() || selectedCategory !== 'all')"
          id="navbar-search-results"
          class="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-[#ffffff] border border-border-subtle shadow-2xl shadow-black/40 overflow-hidden text-foreground animate-in fade-in-0 zoom-in-95 duration-150 ring-1 ring-black/5"
        >
          <!-- Category Quick Filter Chips -->
          <div class="px-3 pt-2.5 pb-2 bg-background border-b border-border-subtle flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              v-for="cat in categoryFilters"
              :key="cat.id"
              type="button"
              class="px-2.5 py-1 rounded-full text-atom font-bold cursor-pointer transition-all shrink-0"
              :class="selectedCategory === cat.id ? 'bg-foreground text-background shadow-xs' : 'text-foreground-secondary hover:bg-card border border-border-subtle'"
              @click="selectedCategory = cat.id; selectedIndex = 0"
            >
              {{ cat.label }}
            </button>
          </div>

          <!-- Result Items -->
          <div class="max-h-[380px] overflow-y-auto p-1.5 space-y-1">
            <template v-if="filteredItems.length > 0">
              <div
                v-for="(item, idx) in filteredItems"
                :key="item.id"
                :id="`nav-search-result-${item.id}`"
                class="flex items-center justify-between gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all group"
                :class="selectedIndex === idx ? 'bg-lime-50 text-lime-950 border border-lime-300/80 shadow-xs' : 'hover:bg-background border border-transparent'"
                @click="handleSelect(item.id)"
                @mouseenter="selectedIndex = idx"
              >
                <div class="min-w-0 space-y-0.5">
                  <div class="flex items-center gap-2">
                    <span class="text-sigma font-extrabold text-foreground group-hover:text-foreground-green transition-colors">
                      {{ item.name }}
                    </span>
                    <span
                      class="text-[10px] font-bold px-1.5 py-0.2 rounded-full"
                      :class="
                        item.category === 'forms'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : item.category === 'feedback'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : item.category === 'data'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-background text-foreground-secondary border border-border-subtle'
                      "
                    >
                      {{ item.categoryLabel }}
                    </span>
                  </div>
                  <p class="text-omega text-foreground-secondary truncate max-w-xs sm:max-w-sm">
                    {{ item.description }}
                  </p>
                </div>
                <div class="flex items-center gap-1 shrink-0 text-atom font-bold text-foreground-green opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Buka</span>
                  <CornerDownLeft class="h-3.5 w-3.5" />
                </div>
              </div>
            </template>
            <div v-else class="p-6 text-center space-y-1.5">
              <p class="text-sigma font-bold text-foreground">
                Komponen &ldquo;{{ searchQuery }}&rdquo; tidak ditemukan
              </p>
              <p class="text-omega text-foreground-secondary max-w-xs mx-auto">
                Coba kata kunci lain (misal: rupiah, dialog, button, combobox, datepicker).
              </p>
            </div>
          </div>

          <!-- Command Palette Footer -->
          <div class="px-3.5 py-2 bg-background border-t border-border-subtle flex items-center justify-between text-[11px] text-foreground-secondary font-medium">
            <span>Ditemukan <strong>{{ filteredItems.length }}</strong> komponen UI</span>
            <div class="flex items-center gap-2">
              <span class="hidden sm:inline">Gunakan ↑↓ untuk memilih</span>
              <span class="hidden sm:inline">•</span>
              <span class="font-mono">ESC untuk tutup</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Right Action Controls -->
      <div class="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <!-- Design Tokens Quick Jump -->
        <button
          id="btn-navbar-tokens"
          type="button"
          class="flex items-center gap-1.5 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white/90 bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
          title="Buka Design Tokens Architecture"
          @click="emit('navigate', 'tokens')"
        >
          <Palette class="h-3.5 w-3.5 text-lime-400" />
          <span class="hidden md:inline">Tokens</span>
        </button>

        <!-- Compact Mode Switch -->
        <button
          id="btn-navbar-compact-toggle"
          type="button"
          class="flex items-center gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border"
          :class="
            compactMode
              ? 'bg-lime-400 text-black border-lime-400 shadow-sm shadow-lime-400/20'
              : 'bg-white/10 text-white hover:bg-white/20 border-white/15'
          "
          @click="emit('update:compactMode', !compactMode)"
        >
          <SlidersHorizontal class="h-3.5 w-3.5" :class="compactMode ? 'text-black' : 'text-white'" />
          <span class="hidden sm:inline">{{ compactMode ? 'Compact On' : 'Compact Off' }}</span>
        </button>

        <!-- Docs Link -->
        <a
          :href="docsUrl"
          id="btn-navbar-docs"
          target="_blank"
          class="flex items-center gap-1.5 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/15 hover:border-lime-400/40 transition-all cursor-pointer"
        >
          <BookOpen class="h-3.5 w-3.5 text-lime-400" />
          <span class="hidden lg:inline">Docs ↗</span>
        </a>
      </div>
    </div>
  </header>
</template>
