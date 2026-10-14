<script setup lang="ts">
import { ref } from "vue";
import { Check, Copy } from "lucide-vue-next";
import { spacingTokens } from "../tokens";

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
      }, 1500);
    }
  } catch {
    // Clipboard not available
  }
};
</script>

<template>
  <div class="my-6 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] p-4 font-sans">
    <div class="space-y-2">
      <div
        v-for="token in spacingTokens"
        :key="token.name"
        class="group grid grid-cols-[80px_1fr_110px] items-center gap-3 p-1.5 rounded-md hover:bg-[var(--vp-c-bg-alt)] transition-colors cursor-pointer"
        :title="`Klik untuk menyalin p-${token.name}`"
        @click="copy(`p-${token.name}`)"
      >
        <span class="font-mono text-xs font-bold text-[var(--vp-c-text-1)]">
          {{ token.name }}
        </span>

        <div class="h-3 rounded-full bg-[var(--vp-c-bg-alt)] border border-[var(--vp-c-border)] overflow-hidden">
          <div
            :class="[token.width, 'h-full bg-lime-500 rounded-full transition-all']"
          />
        </div>

        <div class="flex items-center justify-end gap-1.5 font-mono text-xs text-[var(--vp-c-text-2)]">
          <span v-if="copied === `p-${token.name}`" class="text-lime-600 dark:text-lime-400 font-bold flex items-center gap-1">
            <Check class="h-3 w-3" /> OK
          </span>
          <template v-else>
            <span>{{ token.value.split(' ')[0] }}</span>
            <span class="text-[10px] text-[var(--vp-c-text-3)]">({{ token.value.split(' ')[1] }})</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
