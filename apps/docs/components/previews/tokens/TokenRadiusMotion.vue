<script setup lang="ts">
import { ref } from "vue";
import { Check, Sparkles, Sliders, Maximize2, Activity, Smartphone } from "lucide-vue-next";
import { radiusTokens, shadowTokens, breakpointTokens } from "../tokens";

const copied = ref<string | null>(null);

const copy = async (text: string) => {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      copied.value = text;
      setTimeout(() => {
        if (copied.value === text) {
          copied.value = null;
        }
      }, 1600);
    }
  } catch {
    // Clipboard not available
  }
};
</script>

<template>
  <div class="my-6 space-y-8 font-sans">
    <!-- 1. Curvature Constants (Border Radius) - DIRECT, NO TABS -->
    <div class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 space-y-4">
      <div class="flex items-center justify-between border-b border-[var(--vp-c-divider)] pb-2.5">
        <div>
          <h4 class="text-sm font-extrabold text-[var(--vp-c-text-1)] m-0 flex items-center gap-2">
            <Sliders class="h-4 w-4 text-lime-600 dark:text-lime-400" />
            Curvature Constants (Border Radius)
          </h4>
          <p class="text-xs text-[var(--vp-c-text-2)] mt-0.5 m-0">
            Standar kelengkungan sudut komponen UI Gwind dari badge compact hingga pill bulat.
          </p>
        </div>
        <span class="text-xs font-mono text-[var(--vp-c-text-3)]">4 tingkat radius</span>
      </div>

      <!-- 4 Spacious Cards in 2-4 columns (Never squashed!) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="token in radiusTokens"
          :key="token.name"
          class="group flex flex-col items-center justify-between p-4 rounded-xl border text-center cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xs"
          :class="copied === token.className ? 'border-lime-500 ring-2 ring-lime-400 bg-lime-500/10' : 'border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] hover:border-[var(--vp-c-brand-1)]'"
          :title="`Klik untuk menyalin ${token.className}`"
          @click="copy(token.className)"
        >
          <!-- Prominent Visual Shape Box -->
          <div
            :class="[
              token.className,
              'h-16 w-16 border-2 border-lime-500 bg-lime-500/15 mb-3 flex items-center justify-center font-bold text-xs text-lime-700 dark:text-lime-300 shadow-2xs',
            ]"
          >
            {{ token.value }}
          </div>

          <div class="space-y-1 w-full">
            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-black text-[var(--vp-c-text-1)]">
                {{ token.name }}
              </span>
              <code class="px-1.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] text-[var(--vp-c-text-1)]">
                {{ token.className }}
              </code>
            </div>

            <p class="text-xs text-[var(--vp-c-text-2)] m-0 line-clamp-2">
              {{ token.description }}
            </p>
          </div>

          <!-- Non-overlapping copy state -->
          <div class="min-h-[20px] mt-2 flex items-center justify-center">
            <span v-if="copied === token.className" class="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 flex items-center gap-1 animate-fade-in">
              <Check class="h-3 w-3" /> Tersalin!
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Multi-layer Drop Shadows - DIRECT, NO TABS -->
    <div class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 space-y-4">
      <div class="flex items-center justify-between border-b border-[var(--vp-c-divider)] pb-2.5">
        <div>
          <h4 class="text-sm font-extrabold text-[var(--vp-c-text-1)] m-0 flex items-center gap-2">
            <Maximize2 class="h-4 w-4 text-lime-600 dark:text-lime-400" />
            Multi-layer Drop Shadows
          </h4>
          <p class="text-xs text-[var(--vp-c-text-2)] mt-0.5 m-0">
            Dua tingkat kedalaman elevasi untuk kartu konten datar dan permukaan melayang (floating modals/popovers).
          </p>
        </div>
        <span class="text-xs font-mono text-[var(--vp-c-text-3)]">2 layer depth</span>
      </div>

      <!-- 2 Full Width Cards (Spacious, Never line breaks 'drop-1' or 'shadow-drop-1'!) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="shadow in shadowTokens"
          :key="shadow.name"
          class="flex flex-col justify-between p-5 rounded-xl border cursor-pointer transition-all hover:-translate-y-0.5"
          :class="copied === shadow.className ? 'border-lime-500 ring-2 ring-lime-400 bg-lime-500/10' : 'border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] hover:border-[var(--vp-c-brand-1)]'"
          :title="`Klik untuk menyalin ${shadow.className}`"
          @click="copy(shadow.className)"
        >
          <!-- Live Elevated Card Preview -->
          <div
            :class="[
              shadow.className,
              'p-5 rounded-lg border border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] mb-4 text-center',
            ]"
          >
            <div class="flex items-center justify-center gap-2 mb-1">
              <span class="text-base font-black text-[var(--vp-c-text-1)] whitespace-nowrap">
                {{ shadow.name }}
              </span>
              <code class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] text-[var(--vp-c-text-1)] whitespace-nowrap">
                {{ shadow.className }}
              </code>
            </div>
            <p class="text-xs text-[var(--vp-c-text-2)] m-0">
              Contoh pratinjau elevasi dengan {{ shadow.className }}
            </p>
          </div>

          <!-- Formula & Role -->
          <div class="space-y-1.5 pt-3 border-t border-[var(--vp-c-divider)]">
            <div class="flex items-center justify-between">
              <p class="text-xs text-[var(--vp-c-text-1)] font-semibold m-0">
                {{ shadow.description }}
              </p>
              <span v-if="copied === shadow.className" class="inline-flex items-center gap-1 text-xs font-mono font-bold text-lime-600 dark:text-lime-400 animate-fade-in shrink-0">
                <Check class="h-3 w-3" /> Tersalin!
              </span>
            </div>
            <p class="font-mono text-[11px] text-[var(--vp-c-text-3)] break-all m-0">
              {{ shadow.value }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Tactile Motion Physics - DIRECT, NO TABS -->
    <div class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 space-y-4">
      <div class="border-b border-[var(--vp-c-divider)] pb-2.5">
        <h4 class="text-sm font-extrabold text-[var(--vp-c-text-1)] m-0 flex items-center gap-2">
          <Activity class="h-4 w-4 text-lime-600 dark:text-lime-400" />
          Tactile Motion Physics (Active Press Feedback)
        </h4>
        <p class="text-xs text-[var(--vp-c-text-2)] mt-0.5 m-0">
          Umpan balik kompresi pegas saat elemen kontrol ditekan (`:active`). Tekan dan tahan tombol di bawah:
        </p>
      </div>

      <!-- Interactive Test Triggers -->
      <div class="flex flex-wrap items-center gap-4 p-4 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg)]">
        <button
          type="button"
          class="cursor-pointer rounded-lg px-5 py-2.5 text-sm font-black shadow-xs transition-transform active:scale-[0.98] border-0"
          style="background-color: var(--lime-500, #78a830) !important; color: #000000 !important;"
          title="active:scale-[0.98]"
        >
          Button Press Scale (0.98)
        </button>

        <button
          type="button"
          class="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-[var(--vp-c-text-1)] text-[var(--vp-c-bg)] shadow-xs transition-transform active:scale-[0.92] border-0"
          title="active:scale-[0.92]"
        >
          <Sparkles class="h-5 w-5 text-lime-400" />
        </button>

        <span class="text-xs text-[var(--vp-c-text-3)]">
          Klik dan tahan tombol untuk merasakan kompresi fisik
        </span>
      </div>

      <!-- Durations & Easing Constants -->
      <div class="grid gap-3 sm:grid-cols-2">
        <div class="p-3.5 rounded-lg border border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] space-y-2">
          <h5 class="text-xs font-bold uppercase tracking-wider text-[var(--vp-c-text-2)] m-0">
            Standar Durasi
          </h5>
          <ul class="text-xs space-y-1.5 m-0 p-0 list-none text-[var(--vp-c-text-1)]">
            <li><code class="font-mono text-lime-600 dark:text-lime-400 font-bold">80ms</code>: Instant micro toggle & checkbox</li>
            <li><code class="font-mono text-lime-600 dark:text-lime-400 font-bold">120ms</code>: Fast hover highlight & exit</li>
            <li><code class="font-mono text-lime-600 dark:text-lime-400 font-bold">160ms</code>: <strong>Standard default</strong> component transitions</li>
            <li><code class="font-mono text-lime-600 dark:text-lime-400 font-bold">200ms</code>: Moderate dropdown & accordion reveal</li>
            <li><code class="font-mono text-lime-600 dark:text-lime-400 font-bold">300ms</code>: Slow modal dialog & bottomsheet entrance</li>
          </ul>
        </div>

        <div class="p-3.5 rounded-lg border border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] space-y-2">
          <h5 class="text-xs font-bold uppercase tracking-wider text-[var(--vp-c-text-2)] m-0">
            Kurva Easing
          </h5>
          <ul class="text-xs space-y-1.5 m-0 p-0 list-none text-[var(--vp-c-text-1)]">
            <li><code class="font-mono text-[var(--vp-c-text-2)] font-bold">standard</code>: cubic-bezier(0.2, 0, 0, 1)</li>
            <li><code class="font-mono text-[var(--vp-c-text-2)] font-bold">enter</code>: cubic-bezier(0.16, 1, 0.3, 1)</li>
            <li><code class="font-mono text-[var(--vp-c-text-2)] font-bold">exit</code>: cubic-bezier(0.4, 0, 1, 1)</li>
            <li><code class="font-mono text-[var(--vp-c-text-2)] font-bold">sheet-enter</code>: cubic-bezier(0.32, 0.72, 0, 1)</li>
            <li><code class="font-mono text-[var(--vp-c-text-2)] font-bold">sheet-exit</code>: cubic-bezier(0.32, 0, 0.67, 0)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 4. Responsive Breakpoints - DIRECT, NO TABS -->
    <div class="rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 sm:p-5 space-y-4">
      <div class="border-b border-[var(--vp-c-divider)] pb-2.5">
        <h4 class="text-sm font-extrabold text-[var(--vp-c-text-1)] m-0 flex items-center gap-2">
          <Smartphone class="h-4 w-4 text-lime-600 dark:text-lime-400" />
          Responsive Breakpoints
        </h4>
        <p class="text-xs text-[var(--vp-c-text-2)] mt-0.5 m-0">
          Target lebar layar antarmuka aplikasi operasional dan portal nasabah PT Pegadaian.
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-3">
        <div
          v-for="bp in breakpointTokens"
          :key="bp.name"
          class="p-4 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg)] space-y-1.5"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-black text-[var(--vp-c-text-1)] capitalize">
              {{ bp.name }}
            </span>
            <code class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] text-lime-600 dark:text-lime-400">
              {{ bp.width }}
            </code>
          </div>
          <p class="text-xs text-[var(--vp-c-text-2)] m-0">
            {{ bp.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
