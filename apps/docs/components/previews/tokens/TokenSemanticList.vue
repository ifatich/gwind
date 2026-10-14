<script setup lang="ts">
import { ref, computed } from "vue";
import { Check, Copy, Layers } from "lucide-vue-next";
import { semanticColorCategories, type SemanticCategory } from "../tokens";

// Default to "Semua" so users see all categories immediately, with tabs to filter
const activeCategoryName = ref<string>("Semua");
const copiedToken = ref<string | null>(null);

const totalSemanticTokensCount = computed(() =>
  semanticColorCategories.reduce((sum, c) => sum + c.tokens.length, 0),
);

const categoryTabNames = computed(() => [
  { name: "Semua", count: totalSemanticTokensCount.value },
  ...semanticColorCategories.map((c) => ({
    name: c.name,
    count: c.tokens.length,
  })),
]);

const displayedCategories = computed<SemanticCategory[]>(() => {
  if (activeCategoryName.value === "Semua") {
    return semanticColorCategories;
  }
  return semanticColorCategories.filter((c) => c.name === activeCategoryName.value);
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
    <!-- Category Tabs Navigation (Distinct, Unmistakable Tab Affordance with High Contrast) -->
    <div class="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)]">
      <button
        v-for="tab in categoryTabNames"
        :key="tab.name"
        type="button"
        class="cursor-pointer rounded-lg px-3.5 py-2 text-xs transition-all whitespace-nowrap font-bold"
        :style="activeCategoryName === tab.name
          ? 'background-color: var(--lime-500, #78a830) !important; color: #000000 !important; font-weight: 800; box-shadow: 0 1px 2px rgba(0,0,0,0.1);'
          : 'color: var(--vp-c-text-1) !important; background-color: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-border);'"
        @click="activeCategoryName = tab.name"
      >
        {{ tab.name }} ({{ tab.count }})
      </button>
    </div>

    <!-- Feedback Bar -->
    <div class="flex items-center justify-between px-1 text-xs">
      <span class="text-[var(--vp-c-text-2)]">
        Menampilkan <strong>{{ displayedCategories.reduce((s, c) => s + c.tokens.length, 0) }}</strong> dari {{ totalSemanticTokensCount }} semantic token.
      </span>
      <span
        v-if="copiedToken"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime-500/20 text-lime-700 dark:text-lime-300 font-mono font-bold animate-fade-in"
      >
        <Check class="h-3.5 w-3.5 text-lime-600 dark:text-lime-400" /> Tersalin: {{ copiedToken }}
      </span>
    </div>

    <!-- Categories List -->
    <div class="space-y-6">
      <div
        v-for="cat in displayedCategories"
        :key="cat.name"
        class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 space-y-4"
      >
        <!-- Category Header -->
        <div class="flex items-center justify-between border-b border-[var(--vp-c-divider)] pb-2.5">
          <div>
            <h4 class="text-base font-extrabold text-[var(--vp-c-text-1)] m-0 flex items-center gap-2">
              <Layers class="h-4 w-4 text-lime-600 dark:text-lime-400" />
              {{ cat.name }}
            </h4>
            <p class="text-xs text-[var(--vp-c-text-2)] mt-0.5 m-0">
              {{ cat.description }}
            </p>
          </div>
          <span class="text-xs font-mono text-[var(--vp-c-text-3)]">
            {{ cat.tokens.length }} token
          </span>
        </div>

        <!-- Spacious Token Cards Grid (2-3 columns, NEVER forced into 1 row!) -->
        <div class="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="token in cat.tokens"
            :key="token.token"
            type="button"
            class="group relative flex flex-col overflow-hidden rounded-lg border text-left transition-all hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--vp-c-brand-1)]"
            :class="copiedToken === `var(--${token.token})` ? 'border-lime-500 ring-2 ring-lime-400 bg-lime-500/10' : 'border-[var(--vp-c-border)] bg-[var(--vp-c-bg)]'"
            :title="`Klik untuk menyalin var(--${token.token})`"
            @click="copyToken(`var(--${token.token})`)"
          >
            <!-- Large Prominent Swatch Preview Area (56px height) -->
            <div
              class="h-14 w-full border-b border-[var(--vp-c-border)] flex items-center justify-center font-bold transition-transform group-hover:scale-102"
              :style="{
                backgroundColor: `var(--${token.token})`,
                color: token.token.includes('foreground') || token.token.includes('on-text') ? `var(--${token.token})` : 'transparent',
              }"
            >
              <span
                v-if="token.token.includes('foreground') || token.token.includes('on-text')"
                class="text-xl font-black bg-[var(--vp-c-bg)]/85 px-3 py-0.5 rounded shadow-2xs border border-[var(--vp-c-border)]"
              >
                Aa Text
              </span>
            </div>

            <!-- Card Details (Conditional Rendering: NEVER overlapping!) -->
            <div class="p-3 space-y-1.5 flex-1 flex flex-col justify-between min-h-[76px]">
              <div>
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-black text-[var(--vp-c-text-1)]">
                    {{ token.label }}
                  </span>
                  <Copy class="h-3 w-3 text-[var(--vp-c-text-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div class="min-h-[20px] mt-0.5">
                  <p
                    v-if="copiedToken === `var(--${token.token})`"
                    class="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 flex items-center gap-1 m-0 animate-fade-in"
                  >
                    <Check class="h-3.5 w-3.5 shrink-0" /> Tersalin var(--{{ token.token }})!
                  </p>
                  <p v-else class="font-mono text-[11px] font-bold text-[var(--vp-c-text-2)] m-0">
                    var(--{{ token.token }})
                  </p>
                </div>
              </div>

              <p class="text-xs text-[var(--vp-c-text-3)] leading-relaxed m-0 pt-1.5 border-t border-[var(--vp-c-divider)]">
                {{ token.role }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
