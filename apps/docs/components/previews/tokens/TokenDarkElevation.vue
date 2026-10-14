<script setup lang="ts">
import { ref } from "vue";
import { Check, Copy } from "lucide-vue-next";
import { greyDarkElevation } from "../tokens";

const copiedToken = ref<string | null>(null);

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
  <div class="my-6 font-sans">
    <!-- Spacious Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop (Never forced into 1 crammed row!) -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in greyDarkElevation"
        :key="item.token"
        class="group relative overflow-hidden rounded-xl border p-4 text-white transition-all hover:shadow-lg cursor-pointer"
        :class="copiedToken === `var(--${item.token})` ? 'border-lime-400 ring-2 ring-lime-400/80 shadow-md' : 'border-white/20 hover:border-lime-400/80'"
        :style="{ backgroundColor: item.hex }"
        @click="copyToken(`var(--${item.token})`)"
      >
        <!-- Top bar with Level Badge and Hex -->
        <div class="flex items-center justify-between gap-3 mb-3">
          <span class="rounded bg-black/50 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white border border-white/15">
            {{ item.level }}
          </span>
          <span class="font-mono text-xs font-bold text-white/80 bg-black/30 px-2 py-0.5 rounded">
            {{ item.hex }}
          </span>
        </div>

        <!-- Token Name and Copy State (Conditional: NEVER overlapping!) -->
        <div class="space-y-1 mb-2">
          <h4 class="text-base font-extrabold text-white group-hover:text-lime-300 transition-colors m-0">
            {{ item.name }}
          </h4>

          <div class="font-mono text-xs flex items-center justify-between gap-2 min-h-[22px]">
            <span
              v-if="copiedToken === `var(--${item.token})`"
              class="text-lime-400 font-bold flex items-center gap-1.5 animate-fade-in"
            >
              <Check class="h-3.5 w-3.5" /> Tersalin var(--{{ item.token }})!
            </span>
            <template v-else>
              <span class="whitespace-nowrap font-bold text-white/75">var(--{{ item.token }})</span>
              <span class="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-lime-300">
                <Copy class="h-3 w-3" /> Salin
              </span>
            </template>
          </div>
        </div>

        <!-- Architectural Role Description (Ample room, never squashed) -->
        <p class="text-xs text-white/80 pt-2 border-t border-white/10 leading-relaxed m-0">
          {{ item.role }}
        </p>
      </div>
    </div>
  </div>
</template>
