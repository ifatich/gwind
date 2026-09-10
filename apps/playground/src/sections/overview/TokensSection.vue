<script setup lang="ts">
import { ref, computed } from "vue";
import { Badge } from "@gwind/ui";
import { Sparkles, Check, Palette, Copy } from "lucide-vue-next";
import {
  colorPalettes,
  greyDarkElevation,
  semanticColorCategories,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens,
  motionTokens,
  breakpointTokens,
} from "../../data/tokens";

const tokenScaleMode = ref<"hundreds" | "tens">("hundreds");
const copiedToken = ref<string | null>(null);

const copyTokenToClipboard = async (tokenText: string) => {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(tokenText);
      copiedToken.value = tokenText;
      setTimeout(() => {
        if (copiedToken.value === tokenText) {
          copiedToken.value = null;
        }
      }, 1600);
    }
  } catch {
    // Clipboard permission not granted
  }
};

const activeSemanticCategory = ref<string>("All");

const semanticCategoryNames = computed(() => [
  "All",
  ...semanticColorCategories.map((c) => c.name),
]);

const filteredSemanticCategories = computed(() => {
  if (activeSemanticCategory.value === "All") {
    return semanticColorCategories;
  }
  return semanticColorCategories.filter(
    (c) => c.name === activeSemanticCategory.value,
  );
});

const totalSwatchesCount = computed(() =>
  colorPalettes.reduce((sum, p) => sum + p.steps.length, 0),
);

const totalTokenCount = computed(() => {
  let count = 0;
  for (const pal of colorPalettes) {
    count += pal.steps.length * 2; // dual-scale alias (hundreds + tens)
  }
  count += greyDarkElevation.length;
  count += 1; // white
  for (const cat of semanticColorCategories) {
    count += cat.tokens.length;
  }
  count += typographyTokens.length;
  count += spacingTokens.length;
  count += radiusTokens.length;
  count += shadowTokens.length;
  count += motionTokens.length;
  count += breakpointTokens.length;
  return count;
});
</script>

<template>
  <section
    id="tokens"
    class="playground-section playground-color-block block-navy"
  >
    <!-- Section Header -->
    <div
      class="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
    >
      <div>
        <div class="flex items-center gap-2 mb-1">
          <p class="playground-eyebrow mb-0">Developer Mode & Architecture</p>
          <span class="inline-flex items-center rounded-full bg-lime-500/20 px-2.5 py-0.5 text-atom font-extrabold text-lime-300 border border-lime-400/30">
            v0.3.1
          </span>
        </div>
        <h2 class="playground-display text-white">
          Design Tokens
        </h2>
        <p class="playground-desc text-white/80 max-w-2xl">
          Comprehensive design token architecture powered by <code class="rounded bg-black/40 px-1 py-0.5 text-omega font-mono font-bold text-lime-300 border border-white/10">gwind-v2</code>. Supporting dual-scale aliases (100–900 & 10–90), dark mode elevation surfaces, full 12-level typography hierarchy, spacing scale, radius, drop shadows, and motion physics.
        </p>
      </div>

      <!-- Right Side Actions & Scale Mode Switcher -->
      <div class="flex flex-wrap items-center gap-3 shrink-0">
        <div class="flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/40 p-1">
          <span class="px-2 text-atom font-extrabold uppercase tracking-wider text-white/60">Scale Mode</span>
          <button
            type="button"
            class="cursor-pointer rounded-md px-3 py-1.5 text-omega font-bold transition-all"
            :class="tokenScaleMode === 'hundreds' ? 'bg-white text-black-800 shadow-xs border border-white/40' : 'text-white/70 hover:text-white'"
            @click="tokenScaleMode = 'hundreds'"
          >
            Hundreds (100–900)
          </button>
          <button
            type="button"
            class="cursor-pointer rounded-md px-3 py-1.5 text-omega font-bold transition-all"
            :class="tokenScaleMode === 'tens' ? 'bg-white text-black-800 shadow-xs border border-white/40' : 'text-white/70 hover:text-white'"
            @click="tokenScaleMode = 'tens'"
          >
            Tens (10–90)
          </button>
        </div>

        <Badge variant="brocoli" class="text-omega font-bold px-3 py-1">
          {{ totalTokenCount }} Tokens
        </Badge>
      </div>
    </div>

    <!-- Active Scale Callout Banner -->
    <div class="mb-6 rounded-lg border border-lime-500/40 bg-lime-950/60 p-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-white shadow-xs">
          <Sparkles class="h-4 w-4" />
        </div>
        <div>
          <p class="text-sigma font-bold text-white">
            Active Scale: <span class="capitalize text-lime-400 font-extrabold">{{ tokenScaleMode }} Scale</span>
          </p>
          <p class="text-omega text-lime-100/90">
            {{ tokenScaleMode === 'hundreds' ? 'Displaying standard scale (e.g., bg-lime-500, --lime-500). Dual-scale alias enables 100% interoperability with Tailwind convention.' : 'Displaying tens scale (e.g., bg-lime-50, --lime-50). Compact alias format optimized for legacy compatibility.' }} Click any token to copy its CSS variable.
          </p>
        </div>
      </div>
      <span v-if="copiedToken" class="inline-flex items-center gap-1.5 rounded-md bg-lime-400 text-black-800 px-2.5 py-1 text-atom font-mono font-bold shrink-0 animate-fade-in">
        <Check class="h-3.5 w-3.5 text-black-800" />
        Copied {{ copiedToken }}!
      </span>
    </div>

    <div class="space-y-8">
      <!-- 1. Primitive Palettes -->
      <div class="rounded-xl border border-black-200 bg-white p-5 sm:p-6 text-black-800 shadow-xs">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black-100 pb-4">
          <div>
            <h3 class="text-omicron font-bold text-black-800 flex items-center gap-2">
              <Palette class="h-4 w-4 text-lime-600" />
              Primitive Color Palettes
            </h3>
            <p class="text-omega text-black-500 mt-0.5">
              14 curated hue ramps with {{ totalSwatchesCount }} color stops, fully mirrored across hundreds and tens scale.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="rounded-md bg-black-100 px-2.5 py-1 text-atom font-bold text-black-700">
              {{ colorPalettes.length }} Hue Families
            </span>
            <span class="rounded-md bg-lime-100 px-2.5 py-1 text-atom font-bold text-lime-800">
              {{ totalSwatchesCount * 2 }} Alias Entries
            </span>
          </div>
        </div>

        <div class="space-y-5">
          <div
            v-for="palette in colorPalettes"
            :key="palette.name"
            class="rounded-lg border border-black-100 bg-black-50/40 p-3 sm:p-4 transition-all hover:border-black-200"
          >
            <div class="mb-2.5 flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <h4 class="text-sigma font-bold text-black-800">
                  {{ palette.label || palette.name }}
                </h4>
                <span
                  v-if="palette.name.includes('-dark')"
                  class="rounded-sm bg-black-800 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider"
                >
                  Dark Mode Accent
                </span>
                <span
                  v-if="palette.name === 'lime'"
                  class="rounded-sm bg-lime-500 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider"
                >
                  Primary Brand
                </span>
                <span
                  v-if="palette.description"
                  class="hidden md:inline-block text-omega text-black-500"
                >
                  — {{ palette.description }}
                </span>
              </div>
              <span class="text-omega font-medium text-black-500">
                {{ palette.steps.length }} steps
              </span>
            </div>

            <div class="overflow-x-auto no-scrollbar pb-1">
              <div
                class="grid gap-2 min-w-[520px] sm:min-w-0"
                :style="{
                  gridTemplateColumns: `repeat(${palette.steps.length}, minmax(0, 1fr))`,
                }"
              >
                <button
                  v-for="step in palette.steps"
                  :key="`${palette.name}-${step[tokenScaleMode]}`"
                  type="button"
                  class="group relative min-w-0 cursor-pointer overflow-hidden rounded-md border border-black-200/80 bg-white text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black-800"
                  @click="copyTokenToClipboard(`var(--${palette.name}-${step[tokenScaleMode]})`)"
                >
                  <div
                    class="h-12 w-full transition-transform group-hover:scale-105"
                    :style="{
                      backgroundColor: `var(--${palette.name}-${step[tokenScaleMode]})`,
                    }"
                  />
                  <div class="p-1.5 text-center bg-white">
                    <p class="truncate text-omega font-bold text-black-800">
                      {{ step[tokenScaleMode] }}
                    </p>
                    <p class="truncate text-[10px] font-mono text-black-500 group-hover:text-black-800">
                      {{ palette.name }}-{{ step[tokenScaleMode] }}
                    </p>
                  </div>
                  <div
                    v-if="copiedToken === `var(--${palette.name}-${step[tokenScaleMode]})`"
                    class="absolute inset-0 flex items-center justify-center bg-black-800/90 text-white text-atom font-bold"
                  >
                    <Check class="h-3.5 w-3.5 mr-0.5 text-lime-400" /> Copied
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Dark Mode Elevation Surfaces (grey-*) -->
      <div class="rounded-xl border border-black-800 bg-[#1e1e23] p-5 sm:p-6 text-white shadow-md">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-omicron font-bold text-white flex items-center gap-2">
                <span class="flex h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
                Dark Mode Elevation Surfaces (<code class="text-omega text-lime-300 font-mono">grey-*</code>)
              </h3>
              <span class="rounded-sm bg-lime-400/20 px-2 py-0.5 text-atom font-extrabold text-lime-300 border border-lime-400/30">
                New in 0.3.0
              </span>
            </div>
            <p class="text-omega text-white/60 mt-0.5">
              Tonal elevation scale designed for dark mode surfaces, modals, popovers, and hairline borders without hue shifting.
            </p>
          </div>
          <span class="rounded-md bg-white/10 px-2.5 py-1 text-atom font-bold text-white/80">
            5 Elevation Levels
          </span>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="item in greyDarkElevation"
            :key="item.token"
            class="group relative overflow-hidden rounded-lg border border-white/15 p-3.5 transition-all hover:border-lime-400/60 hover:shadow-lg"
            :style="{ backgroundColor: item.hex }"
          >
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="rounded bg-black/40 px-2 py-0.5 text-atom font-extrabold tracking-wide uppercase text-white/90 border border-white/10">
                {{ item.level }}
              </span>
              <span class="font-mono text-atom text-white/70">
                {{ item.hex }}
              </span>
            </div>

            <div class="space-y-1">
              <p class="text-sigma font-bold text-white group-hover:text-lime-300 transition-colors">
                {{ item.name }}
              </p>
              <button
                type="button"
                class="cursor-pointer font-mono text-atom text-white/60 hover:text-white flex items-center gap-1 focus:outline-none"
                @click="copyTokenToClipboard(`var(--${item.token})`)"
              >
                <span>var(--{{ item.token }})</span>
                <Copy class="h-3 w-3 opacity-60" />
              </button>
              <p class="text-omega text-white/75 pt-1 line-clamp-2 leading-tight">
                {{ item.role }}
              </p>
            </div>

            <div
              v-if="copiedToken === `var(--${item.token})`"
              class="absolute inset-0 flex items-center justify-center bg-black/85 text-white text-atom font-bold"
            >
              <Check class="h-3.5 w-3.5 mr-1 text-lime-400" /> Copied!
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Categorized Semantic Design Tokens -->
      <div class="rounded-xl border border-black-200 bg-white p-5 sm:p-6 text-black-800 shadow-xs">
        <div class="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-black-100 pb-4">
          <div>
            <h3 class="text-omicron font-bold text-black-800">
              Semantic Design Tokens
            </h3>
            <p class="text-omega text-black-500 mt-0.5">
              Contextual tokens mapped to light and dark theme semantics.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              v-for="catName in semanticCategoryNames"
              :key="catName"
              type="button"
              class="cursor-pointer rounded-md px-2.5 py-1 text-omega font-bold transition-all whitespace-nowrap"
              :class="activeSemanticCategory === catName ? 'bg-black-800 text-white' : 'bg-black-100 text-black-700 hover:bg-black-200 hover:text-black-800'"
              @click="activeSemanticCategory = catName"
            >
              {{ catName }}
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div
            v-for="cat in filteredSemanticCategories"
            :key="cat.name"
            class="space-y-3"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <h4 class="text-sigma font-bold text-black-800">
                  {{ cat.name }}
                </h4>
                <p class="text-omega text-black-500">
                  {{ cat.description }}
                </p>
              </div>
              <span class="text-atom font-bold text-black-500 uppercase tracking-wider">
                {{ cat.tokens.length }} tokens
              </span>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <button
                v-for="token in cat.tokens"
                :key="token.token"
                type="button"
                class="group relative overflow-hidden rounded-lg border border-black-200 bg-white p-3 text-left transition-all hover:border-black-400 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-black-800"
                @click="copyTokenToClipboard(`var(--${token.token})`)"
              >
                <div class="mb-2.5 flex items-center justify-between gap-2">
                  <!-- Swatch display: handles background and foreground/text tokens -->
                  <div class="flex items-center gap-2">
                    <div
                      class="h-6 w-6 rounded-md border border-black-200 shadow-2xs shrink-0 flex items-center justify-center font-bold text-atom"
                      :style="{
                        backgroundColor: `var(--${token.token})`,
                        color: token.token.includes('foreground') || token.token.includes('on-text') ? `var(--${token.token})` : 'transparent',
                      }"
                    >
                      <span v-if="token.token.includes('foreground') || token.token.includes('on-text')" class="text-[10px]">Aa</span>
                    </div>
                    <span class="truncate text-sigma font-bold text-black-800 group-hover:text-black">
                      {{ token.label }}
                    </span>
                  </div>
                  <Copy class="h-3.5 w-3.5 text-black-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div class="space-y-0.5">
                  <p class="font-mono text-atom text-black-500 truncate">
                    var(--{{ token.token }})
                  </p>
                  <p class="text-omega text-black-600 line-clamp-2 leading-tight">
                    {{ token.role }}
                  </p>
                </div>

                <div
                  v-if="copiedToken === `var(--${token.token})`"
                  class="absolute inset-0 flex items-center justify-center bg-black-800/90 text-white text-atom font-bold"
                >
                  <Check class="h-3.5 w-3.5 mr-1 text-lime-400" /> Copied!
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. 12-Level Typography Hierarchy Scale -->
      <div class="rounded-xl border border-black-200 bg-white p-5 sm:p-6 text-black-800 shadow-xs">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-black-100 pb-4">
          <div>
            <h3 class="text-omicron font-bold text-black-800">
              12-Level Typography Hierarchy Scale
            </h3>
            <p class="text-omega text-black-500 mt-0.5">
              Proportional type scale from Display Hero (<code class="text-omega font-mono font-bold text-black-800">alpha</code>) to Micro Caption (<code class="text-omega font-mono font-bold text-black-800">atom</code>) using Nunito Sans.
            </p>
          </div>
          <span class="rounded-md bg-black-100 px-2.5 py-1 text-atom font-bold text-black-700">
            12 Type Scales
          </span>
        </div>

        <div class="divide-y divide-black-100 overflow-hidden rounded-lg border border-black-200">
          <div
            v-for="token in typographyTokens"
            :key="token.name"
            class="grid grid-cols-1 md:grid-cols-[140px_1fr_200px] items-center gap-3 p-3.5 transition-colors hover:bg-black-50/60"
          >
            <div>
              <div class="flex items-center gap-1.5">
                <span class="font-mono text-sigma font-bold text-black-800">
                  {{ token.name }}
                </span>
                <code class="rounded bg-black-100 px-1 py-0.5 text-atom font-mono text-black-600">
                  {{ token.className }}
                </code>
              </div>
              <p class="text-atom text-black-500 mt-0.5">
                {{ token.role }}
              </p>
            </div>

            <div class="min-w-0 overflow-hidden">
              <p
                :class="[token.className, 'font-bold text-black-800 truncate tracking-tight']"
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>

            <div class="text-left md:text-right font-mono text-omega text-black-500">
              <span>{{ token.size }}</span>
              <span class="hidden md:inline text-black-300 mx-1">/</span>
              <span class="block md:inline text-atom text-black-500">{{ token.lineHeight }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Spacing, Radius, Drop Shadows & Motion Dynamics -->
      <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <!-- Spacing Scale -->
        <div class="rounded-xl border border-black-200 bg-white p-5 text-black-800 shadow-xs xl:col-span-2">
          <div class="mb-4 flex items-center justify-between gap-3 border-b border-black-100 pb-3">
            <div>
              <h4 class="text-sigma font-bold text-black-800">
                Gwind Spacing Scale
              </h4>
              <p class="text-atom text-black-500">
                11 discrete steps (<code class="font-mono text-black-700">gw-2</code> to <code class="font-mono text-black-700">gw-120</code>)
              </p>
            </div>
            <span class="rounded bg-black-100 px-2 py-0.5 text-atom font-bold text-black-600">
              {{ spacingTokens.length }} Steps
            </span>
          </div>

          <div class="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
            <div
              v-for="token in spacingTokens"
              :key="token.name"
              class="grid grid-cols-[80px_1fr_90px] items-center gap-3 rounded-md p-1.5 hover:bg-black-50 transition-colors"
            >
              <span class="font-mono text-sigma font-bold text-black-800">
                {{ token.name }}
              </span>
              <div class="h-4 rounded-sm bg-black-100 overflow-hidden">
                <div
                  :class="[token.width, 'h-4 rounded-sm bg-lime-500 transition-all']"
                />
              </div>
              <span class="text-right font-mono text-atom text-black-500">
                {{ token.value }}
              </span>
            </div>
          </div>
        </div>

        <!-- Border Radius Scale -->
        <div class="rounded-xl border border-black-200 bg-white p-5 text-black-800 shadow-xs">
          <div class="mb-4 border-b border-black-100 pb-3">
            <h4 class="text-sigma font-bold text-black-800">
              Border Radius
            </h4>
            <p class="text-atom text-black-500">
              System curvature constants
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="token in radiusTokens"
              :key="token.name"
              class="flex flex-col items-center justify-center rounded-lg border border-black-100 bg-black-50/40 p-3 text-center"
            >
              <div
                :class="[
                  token.className,
                  'h-14 w-14 border-2 border-lime-500 bg-lime-100 shadow-2xs mb-2',
                ]"
              />
              <span class="font-mono text-sigma font-bold text-black-800">
                {{ token.name }}
              </span>
              <span class="font-mono text-atom text-black-500">
                {{ token.value }}
              </span>
              <span class="text-[11px] text-black-500 mt-1 line-clamp-1">
                {{ token.description }}
              </span>
            </div>
          </div>
        </div>

        <!-- Drop Shadows, Motion & Breakpoints -->
        <div class="rounded-xl border border-black-200 bg-white p-5 text-black-800 shadow-xs space-y-4">
          <div>
            <div class="mb-3 border-b border-black-100 pb-2">
              <h4 class="text-sigma font-bold text-black-800">
                Multi-layer Drop Shadows
              </h4>
              <p class="text-atom text-black-500">
                2-layer depth elevations
              </p>
            </div>
            <div class="space-y-3">
              <div
                v-for="shadow in shadowTokens"
                :key="shadow.name"
                :class="[shadow.className, 'rounded-lg border border-black-100 bg-white p-3']"
              >
                <div class="flex items-center justify-between">
                  <span class="font-mono text-sigma font-bold text-black-800">
                    {{ shadow.name }}
                  </span>
                  <code class="text-[10px] font-mono text-black-500">{{ shadow.className }}</code>
                </div>
                <p class="text-[11px] text-black-500 mt-1">
                  {{ shadow.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="pt-2 border-t border-black-100">
            <h4 class="text-sigma font-bold text-black-800 mb-2">
              Tactile Motion Physics
            </h4>
            <p class="text-atom text-black-500 mb-3">
              Spring compression feedback on active press
            </p>
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="cursor-pointer rounded-md bg-lime-500 px-3.5 py-1.5 text-omega font-bold text-white shadow-sm transition-transform active:scale-[0.98]"
                title="Button scale press: 0.98"
              >
                Button Press (0.98)
              </button>
              <button
                type="button"
                class="cursor-pointer flex h-9 w-9 items-center justify-center rounded-full bg-black-800 text-white shadow-sm transition-transform active:scale-[0.92]"
                title="Icon scale press: 0.92"
              >
                <Sparkles class="h-4 w-4 text-lime-400" />
              </button>
            </div>
          </div>

          <div class="pt-2 border-t border-black-100">
            <h4 class="text-sigma font-bold text-black-800 mb-1.5">
              Responsive Breakpoints
            </h4>
            <div class="space-y-1">
              <div
                v-for="bp in breakpointTokens"
                :key="bp.name"
                class="flex items-center justify-between text-atom font-mono"
              >
                <span class="font-bold text-black-800 capitalize">{{ bp.name }}</span>
                <span class="text-black-500">{{ bp.width }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
