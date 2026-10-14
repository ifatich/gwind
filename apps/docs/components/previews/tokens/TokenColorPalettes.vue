<script setup lang="ts">
import { ref, computed } from "vue";
import { Check, Copy } from "lucide-vue-next";
import { colorPalettes, type ColorPalette } from "../tokens";

const scaleMode = ref<"hundreds" | "tens">("hundreds");
const activeFilter = ref<string>("Semua");
const copiedToken = ref<string | null>(null);

const filterTabs = [
  "Semua",
  "Brand Primer",
  "Fintech & Gold",
  "Status & Feedback",
  "Aksen & Extended",
  "Netral",
];

const filteredPalettes = computed<ColorPalette[]>(() => {
  switch (activeFilter.value) {
    case "Brand Primer":
      return colorPalettes.filter((p) =>
        ["lime", "lime-dark", "broccoli"].includes(p.name),
      );
    case "Fintech & Gold":
      return colorPalettes.filter((p) =>
        ["gold", "yellow", "pear"].includes(p.name),
      );
    case "Status & Feedback":
      return colorPalettes.filter((p) =>
        ["red", "red-dark", "orange"].includes(p.name),
      );
    case "Aksen & Extended":
      return colorPalettes.filter((p) =>
        ["blue", "purple", "turquoise", "kiwi"].includes(p.name),
      );
    case "Netral":
      return colorPalettes.filter((p) => p.name === "black");
    default:
      return colorPalettes;
  }
});

const copyToken = async (text: string) => {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      copiedToken.value = text;
      setTimeout(() => {
        if (copiedToken.value === text) {
          copiedToken.value = null;
        }
      }, 1600);
    }
  } catch {
    // Clipboard not available
  }
};
</script>

<template>
  <div class="my-6 space-y-5 font-sans">
    <!-- Top Control Bar: Proper Segmented Tab for Scale Mode -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)]">
      <div>
        <span class="block text-xs font-black uppercase tracking-wider text-[var(--vp-c-text-2)] mb-2">
          Pilihan Skala Alias:
        </span>
        <!-- Unmistakable Segmented Tab with Guaranteed High Contrast -->
        <div class="inline-flex items-center gap-1.5 p-1 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-alt)]">
          <button
            type="button"
            class="cursor-pointer px-4 py-2 text-xs font-black rounded-lg transition-all shadow-xs"
            :style="scaleMode === 'hundreds'
              ? 'background-color: var(--lime-500, #78a830) !important; color: #000000 !important;'
              : 'color: var(--vp-c-text-1) !important; background: transparent;'"
            @click="scaleMode = 'hundreds'"
          >
            Hundreds Scale (100–900)
          </button>
          <button
            type="button"
            class="cursor-pointer px-4 py-2 text-xs font-black rounded-lg transition-all shadow-xs"
            :style="scaleMode === 'tens'
              ? 'background-color: var(--lime-500, #78a830) !important; color: #000000 !important;'
              : 'color: var(--vp-c-text-1) !important; background: transparent;'"
            @click="scaleMode = 'tens'"
          >
            Tens Scale (10–90)
          </button>
        </div>
      </div>

      <!-- Copy Status Feedback in Toolbar -->
      <div class="flex items-center gap-2 self-start sm:self-center">
        <span
          v-if="copiedToken"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold animate-fade-in"
          style="background-color: rgba(120, 168, 48, 0.2); color: var(--vp-c-brand-1, #78a830); border: 1px solid rgba(120, 168, 48, 0.4);"
        >
          <Check class="h-4 w-4" /> Tersalin: {{ copiedToken }}
        </span>
        <span v-else class="text-xs text-[var(--vp-c-text-2)] font-mono">
          Klik sembarang swatch untuk menyalin CSS var
        </span>
      </div>
    </div>

    <!-- Category Filter Tabs with Guaranteed High Contrast -->
    <div class="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)]">
      <button
        v-for="tab in filterTabs"
        :key="tab"
        type="button"
        class="cursor-pointer px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap"
        :style="activeFilter === tab
          ? 'background-color: var(--lime-500, #78a830) !important; color: #000000 !important; font-weight: 800;'
          : 'color: var(--vp-c-text-1) !important; background-color: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-border);'"
        @click="activeFilter = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Palettes List -->
    <div class="space-y-6">
      <div
        v-for="palette in filteredPalettes"
        :key="palette.name"
        class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 transition-colors hover:border-[var(--vp-c-brand-1)]"
      >
        <!-- Palette Header -->
        <div class="mb-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--vp-c-divider)] pb-2.5">
          <div class="flex items-center gap-2.5">
            <h4 class="text-base font-bold text-[var(--vp-c-text-1)] m-0">
              {{ palette.label || palette.name }}
            </h4>
            <span
              v-if="palette.name === 'lime'"
              class="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wide bg-lime-500/20 text-lime-700 dark:text-lime-300 border border-lime-500/30"
            >
              Brand Primer
            </span>
            <span
              v-if="palette.name.includes('-dark')"
              class="px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wide bg-[var(--vp-c-bg-alt)] text-[var(--vp-c-text-1)] border border-[var(--vp-c-border)]"
            >
              Dark Mode Accent
            </span>
            <span
              v-if="palette.description"
              class="hidden sm:inline text-xs text-[var(--vp-c-text-2)]"
            >
              — {{ palette.description }}
            </span>
          </div>

          <span class="text-xs text-[var(--vp-c-text-3)] font-mono">
            {{ palette.steps.length }} steps
          </span>
        </div>

        <!-- Prominent Color Swatches Grid (Responsive: 2 cols on mobile, 4 cols on tablet, up to 7 on desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          <button
            v-for="step in palette.steps"
            :key="`${palette.name}-${step[scaleMode]}`"
            type="button"
            class="group relative flex flex-col cursor-pointer overflow-hidden rounded-lg border text-left transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--vp-c-brand-1)]"
            :class="copiedToken === `var(--${palette.name}-${step[scaleMode]})` ? 'border-lime-500 ring-2 ring-lime-400 bg-lime-500/10' : 'border-[var(--vp-c-border)] bg-[var(--vp-c-bg)]'"
            :title="`Klik untuk menyalin var(--${palette.name}-${step[scaleMode]})`"
            @click="copyToken(`var(--${palette.name}-${step[scaleMode]})`)"
          >
            <!-- Large Prominent Color Block (60px height) -->
            <div
              class="h-16 w-full transition-transform group-hover:scale-105"
              :style="{
                backgroundColor: `var(--${palette.name}-${step[scaleMode]})`,
              }"
            />

            <!-- Info Bar below swatch (Conditional rendering: NEVER overlapping!) -->
            <div class="p-2 bg-[var(--vp-c-bg)] border-t border-[var(--vp-c-border)] min-h-[48px] flex flex-col justify-center">
              <!-- When copied: show ONLY clean Tersalin message! -->
              <div
                v-if="copiedToken === `var(--${palette.name}-${step[scaleMode]})`"
                class="flex items-center justify-center gap-1 text-xs font-mono font-bold text-lime-600 dark:text-lime-400 animate-fade-in"
              >
                <Check class="h-3.5 w-3.5 shrink-0" /> Tersalin!
              </div>

              <!-- When not copied: show step and token name -->
              <template v-else>
                <div class="flex items-center justify-between">
                  <span class="text-xs font-black text-[var(--vp-c-text-1)]">
                    {{ step[scaleMode] }}
                  </span>
                  <Copy class="h-3 w-3 text-[var(--vp-c-text-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p class="truncate text-[10px] font-mono text-[var(--vp-c-text-3)] group-hover:text-[var(--vp-c-text-1)] mt-0.5 m-0">
                  {{ palette.name }}-{{ step[scaleMode] }}
                </p>
              </template>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
