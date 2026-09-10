<script setup lang="ts">
/**
 * @file PlaygroundHero.vue
 * @description Hero introduction banner and key metrics for the Gwind Design System Playground.
 * Consumes 100% Gwind Design Tokens with responsive grid layout and interactive CLI copy.
 */
import { ref } from "vue";
import { Button } from "@gwind/ui";
import { Copy, Sparkles } from "lucide-vue-next";

const emit = defineEmits<{
  (e: "navigate", id: string): void;
}>();

const copiedCli = ref(false);

function copyCliCommand() {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText("npx gwind-system-ui add");
    copiedCli.value = true;
    setTimeout(() => {
      copiedCli.value = false;
    }, 2000);
  }
}
</script>

<template>
  <div class="playground-hero-card space-y-6 sm:space-y-8">
    <div class="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
      <div class="space-y-4 lg:col-span-7">
        <div class="inline-flex items-center gap-2 rounded-full bg-lime-100 border border-lime-300/80 px-3.5 py-1 text-xs font-extrabold text-lime-800 tracking-wide uppercase">
          <Sparkles class="h-3.5 w-3.5 text-lime-700" />
          Enterprise Design System & UI Kit
        </div>
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Think bigger. Build faster with Gwind.
        </h1>
        <p class="text-sigma sm:text-omicron text-foreground-secondary font-normal leading-relaxed max-w-xl">
          Koleksi 34 komponen UI Vue 3 berstandar enterprise yang menggabungkan headless primitives Reka UI, styling modular Tailwind CSS v4, serta 100% skenario interaktif dunia nyata untuk ekosistem fintech dan perbankan modern.
        </p>
        <div class="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-2">
          <Button id="btn-hero-explore" size="lg" class="w-full sm:w-auto" @click="emit('navigate', 'button')">
            Jelajahi 34 Komponen
          </Button>
          <Button id="btn-hero-tokens" variant="outline" size="lg" class="w-full sm:w-auto" @click="emit('navigate', 'tokens')">
            Design Tokens →
          </Button>
        </div>
      </div>

      <!-- Quick CLI Terminal Box & Feature Highlights -->
      <div class="space-y-4 lg:col-span-5">
        <div class="rounded-xl border border-border-subtle bg-background p-4 sm:p-5 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-foreground tracking-wider uppercase">CLI Quick Scaffolding</span>
            <span class="text-[11px] font-mono text-foreground-green bg-lime-100 px-2 py-0.5 rounded font-bold">npm package</span>
          </div>
          <div class="playground-cli-terminal">
            <span class="truncate text-lime-300 font-mono text-xs select-all">npx gwind-system-ui add [komponen]</span>
            <button
              id="btn-hero-copy-cli"
              type="button"
              class="flex items-center gap-1 text-xs text-white bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-full transition-all cursor-pointer font-sans shrink-0"
              @click="copyCliCommand"
            >
              <Copy class="h-3 w-3" />
              {{ copiedCli ? 'Tersalin!' : 'Copy' }}
            </button>
          </div>
          <p class="text-xs text-foreground-secondary">
            Install komponen mandiri langsung ke codebase aplikasi tanpa bloatware package eksternal.
          </p>
        </div>
      </div>
    </div>

    <!-- Key Metric Stat Grid -->
    <div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 pt-4 border-t border-border-subtle">
      <div class="playground-stat-box">
        <span class="text-2xl sm:text-3xl font-black text-foreground tracking-tight">34</span>
        <span class="text-sigma font-bold text-foreground mt-1">Komponen UI</span>
        <span class="text-xs text-foreground-secondary mt-0.5">Vue 3 + Reka UI Headless</span>
      </div>
      <div class="playground-stat-box">
        <span class="text-2xl sm:text-3xl font-black text-foreground-green tracking-tight">100%</span>
        <span class="text-sigma font-bold text-foreground mt-1">Real-World Cases</span>
        <span class="text-xs text-foreground-secondary mt-0.5">Fintech, Gadai, KYC & SBG</span>
      </div>
      <div class="playground-stat-box">
        <span class="text-2xl sm:text-3xl font-black text-foreground tracking-tight">v4</span>
        <span class="text-sigma font-bold text-foreground mt-1">Tailwind CSS</span>
        <span class="text-xs text-foreground-secondary mt-0.5">@theme & Design Tokens</span>
      </div>
      <div class="playground-stat-box">
        <span class="text-2xl sm:text-3xl font-black text-foreground tracking-tight">0</span>
        <span class="text-sigma font-bold text-foreground mt-1">External Icon Deps</span>
        <span class="text-xs text-foreground-secondary mt-0.5">Custom Inline Lucide SVG</span>
      </div>
    </div>
  </div>
</template>
