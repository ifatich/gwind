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
import { Badge } from "@gwind/ui";
import { allComponentsCatalog } from "../data/catalog";

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

function getCategoryCount(catId: string) {
  if (catId === "all") return allComponentsCatalog.length;
  return allComponentsCatalog.filter((item) => item.category === catId).length;
}

function getCategoryIcon(cat: string) {
  switch (cat) {
    case "forms":
      return SlidersHorizontal;
    case "data":
      return Layers;
    case "feedback":
      return Sparkles;
    case "actions":
    default:
      return PackageCheck;
  }
}

/**
 * Maps a catalog category to its corresponding Badge variant.
 * Uses the gwind-ui Badge component variants: green, brocoli, orange, blue, red, outline.
 */
function getCategoryBadgeVariant(category: string): 'green' | 'brocoli' | 'orange' | 'blue' | 'red' | 'outline' {
  switch (category) {
    case "forms":
      return "blue";
    case "feedback":
      return "orange";
    case "data":
      return "brocoli";
    case "actions":
    default:
      return "green";
  }
}

const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return allComponentsCatalog.filter((item) => {
    const matchCategory =
      selectedCategory.value === "all" || item.category === selectedCategory.value;
    if (!matchCategory) return false;
    if (!query) return true;
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
  if (!isOpen.value) {
    if (e.key === "ArrowDown" || e.key === "Enter") {
      isOpen.value = true;
    }
    return;
  }

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
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent pointer-events-none" />

    <!-- Backdrop Dimming Overlay when Search Palette is Open -->
    <Transition
      enter-active-class="transition-opacity duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/45 backdrop-blur-xs"
        @click="isOpen = false"
      />
    </Transition>

    <div class="playground-container flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4 relative z-40">
      <!-- 1. Brand Logo & Product Badge -->
      <div class="flex min-w-0 items-center gap-2.5 sm:gap-3 shrink-0">
        <div
          class="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-broccoli-600 text-white font-black shadow-md shadow-lime-500/25 ring-1 ring-white/20 cursor-pointer hover:scale-105 transition-transform"
          @click="emit('navigate', 'button')"
        >
          <PackageCheck class="h-4 w-4 sm:h-5 sm:w-5 text-white stroke-[2.5]" />
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span
              class="text-sm sm:text-base font-black tracking-tight text-white cursor-pointer hover:text-lime-300 transition-colors"
              @click="emit('navigate', 'button')"
            >
              Gwind
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-lime-400/15 border border-lime-400/30 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-lime-300 shadow-xs">
              <span class="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse shadow-[0_0_6px_#8FD534]" />
              v1.0.0
            </span>
          </div>
          <p class="text-[11px] text-black-400 hidden xl:block leading-none mt-0.5 font-medium">
            Vue 3 & Tailwind v4 Design System
          </p>
        </div>
      </div>

      <!-- 2. Center: Spotlight Command Search Bar -->
      <div
        ref="searchContainerRef"
        class="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 sm:mx-4 z-50"
      >
        <div class="relative flex items-center group">
          <Search class="absolute left-3.5 h-4 w-4 text-white/40 group-focus-within:text-lime-400 pointer-events-none transition-colors z-10" />
          <input
            id="navbar-search-input"
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            placeholder="Cari 34 komponen... (⌘K)"
            class="w-full h-9 sm:h-10 pl-10 pr-9 text-xs sm:text-sm rounded-xl bg-white/[0.07] hover:bg-white/[0.10] focus:bg-white/[0.14] text-white placeholder:text-white/40 border border-white/15 focus:border-lime-400/80 focus:ring-2 focus:ring-lime-400/20 focus:outline-none transition-all shadow-inner"
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
        <Transition
          enter-active-class="transition-all duration-150 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-1"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-100 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-1"
        >
          <div
            v-if="isOpen"
            id="navbar-search-results"
            class="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 z-50 w-[94vw] sm:w-[580px] md:w-[640px] max-w-2xl rounded-2xl bg-popover text-popover-foreground border border-border-subtle shadow-2xl overflow-hidden ring-1 ring-foreground/10"
          >
            <!-- Category Quick Filter Chips -->
            <div class="px-3.5 pt-3 pb-2.5 bg-background border-b border-muted flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mr-1">Filter:</span>
              <button
                v-for="cat in categoryFilters"
                :key="cat.id"
                type="button"
                class="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-all shrink-0 flex items-center gap-1.5"
                :class="
                  selectedCategory === cat.id
                    ? 'bg-foreground text-primary-foreground shadow-xs'
                    : 'text-foreground-secondary hover:text-foreground hover:bg-muted bg-popover border border-border-subtle'
                "
                @click="selectedCategory = cat.id; selectedIndex = 0"
              >
                <span>{{ cat.label }}</span>
                <span
                  class="text-[10px] px-1.5 py-0.2 rounded-full font-bold"
                  :class="selectedCategory === cat.id ? 'bg-white/20 text-primary-foreground' : 'bg-muted text-foreground-secondary'"
                >
                  {{ getCategoryCount(cat.id) }}
                </span>
              </button>
            </div>

            <!-- Result Items -->
            <div class="max-h-[380px] overflow-y-auto p-2 space-y-1">
              <template v-if="filteredItems.length > 0">
                <div
                  v-for="(item, idx) in filteredItems"
                  :key="item.id"
                  :id="`nav-search-result-${item.id}`"
                  class="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all group"
                  :class="
                    selectedIndex === idx
                      ? 'bg-lime-100 border-l border-l-primary border-y border-r border-lime-200 shadow-xs'
                      : 'hover:bg-background border-l border-y border-r border-transparent'
                  "
                  @click="handleSelect(item.id)"
                  @mouseenter="selectedIndex = idx"
                >
                  <div class="flex items-center gap-3 min-w-0 flex-1">
                    <!-- Category Icon Badge -->
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors"
                      :class="
                        selectedIndex === idx
                          ? 'bg-primary text-primary-foreground shadow-xs'
                          : 'bg-muted text-foreground-secondary group-hover:bg-lime-100 group-hover:text-primary'
                      "
                    >
                      <component :is="getCategoryIcon(item.category)" class="h-4 w-4" />
                    </div>

                    <div class="min-w-0 flex-1 space-y-0.5">
                      <div class="flex items-center gap-2">
                        <span
                          class="text-sm font-bold transition-colors"
                          :class="selectedIndex === idx ? 'text-foreground' : 'text-foreground-primary group-hover:text-primary'"
                        >
                          {{ item.name }}
                        </span>
                        <Badge
                          :variant="getCategoryBadgeVariant(item.category)"
                          class="!text-[10px] !py-0.5 !px-2"
                        >
                          {{ item.categoryLabel }}
                        </Badge>
                      </div>
                      <p
                        class="text-xs truncate max-w-sm sm:max-w-md font-normal"
                        :class="selectedIndex === idx ? 'text-foreground-primary' : 'text-muted-foreground'"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </div>

                  <!-- Right Action Keycap Hint -->
                  <div class="flex items-center gap-1.5 shrink-0">
                    <span
                      v-if="selectedIndex === idx"
                      class="inline-flex items-center gap-1 rounded-md bg-popover border border-lime-400 px-2 py-0.5 text-[11px] font-mono font-bold text-primary shadow-2xs animate-in fade-in-0 duration-150"
                    >
                      <span>Buka</span>
                      <CornerDownLeft class="h-3 w-3" />
                    </span>
                    <CornerDownLeft
                      v-else
                      class="h-3.5 w-3.5 text-border opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </template>
              <div v-else class="p-8 text-center space-y-2">
                <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-border">
                  <Search class="h-5 w-5" />
                </div>
                <p class="text-sm font-bold text-foreground-primary">
                  Komponen &ldquo;{{ searchQuery }}&rdquo; tidak ditemukan
                </p>
                <p class="text-xs text-foreground-secondary max-w-xs mx-auto">
                  Coba kata kunci lain (misal: rupiah, dialog, button, combobox, datepicker, dropdown).
                </p>
              </div>
            </div>

            <!-- Command Palette Footer -->
            <div class="px-4 py-2.5 bg-background border-t border-muted flex items-center justify-between text-xs text-foreground-secondary font-medium">
              <span class="flex items-center gap-1.5">
                <span class="h-2 w-2 rounded-full bg-success" />
                <span>Ditemukan <strong class="text-foreground-primary">{{ filteredItems.length }}</strong> komponen</span>
              </span>
              <div class="flex items-center gap-3 text-[11px] text-muted-foreground">
                <span class="hidden sm:inline-flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 rounded bg-popover border border-border-subtle text-foreground-primary font-mono text-[10px]">↑</kbd>
                  <kbd class="px-1.5 py-0.5 rounded bg-popover border border-border-subtle text-foreground-primary font-mono text-[10px]">↓</kbd>
                  navigasi
                </span>
                <span class="hidden sm:inline-flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 rounded bg-popover border border-border-subtle text-foreground-primary font-mono text-[10px]">↵</kbd>
                  pilih
                </span>
                <span class="inline-flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 rounded bg-popover border border-border-subtle text-foreground-primary font-mono text-[10px]">esc</kbd>
                  tutup
                </span>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- 3. Right Action Controls -->
      <div class="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <!-- Design Tokens Quick Jump -->
        <button
          id="btn-navbar-tokens"
          type="button"
          class="flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white/90 bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer shadow-xs active:scale-95"
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
          class="flex items-center gap-2 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer border active:scale-95 shadow-xs"
          :class="
            compactMode
              ? 'bg-lime-400/20 text-lime-300 border-lime-400/50 shadow-lime-500/15'
              : 'bg-white/[0.08] text-white/80 hover:bg-white/[0.14] border-white/10'
          "
          @click="emit('update:compactMode', !compactMode)"
        >
          <SlidersHorizontal class="h-3.5 w-3.5" :class="compactMode ? 'text-lime-400' : 'text-white'" />
          <span class="hidden sm:inline">{{ compactMode ? 'Compact On' : 'Compact Off' }}</span>
        </button>

        <!-- Docs Link -->
        <a
          :href="docsUrl"
          id="btn-navbar-docs"
          target="_blank"
          class="flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-bold bg-white/[0.08] text-white hover:bg-white/[0.14] border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <BookOpen class="h-3.5 w-3.5 text-lime-400" />
          <span class="hidden lg:inline">Docs ↗</span>
        </a>
      </div>
    </div>
  </header>
</template>
