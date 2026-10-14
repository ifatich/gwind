<script setup lang="ts">
import { ref } from "vue";
import { Check, Copy } from "lucide-vue-next";

interface TypographyItem {
  name: string;
  className: string;
  size: string;
  lineHeight: string;
  role: string;
  specimen: string;
  fontSizeRem: string;
}

const typographyItems: TypographyItem[] = [
  {
    name: "alpha",
    className: "text-alpha",
    size: "72px (4.5rem)",
    lineHeight: "108px (1.5)",
    role: "Display Hero Large",
    specimen: "Hero Display 72px",
    fontSizeRem: "4.5rem",
  },
  {
    name: "beta",
    className: "text-beta",
    size: "60px (3.75rem)",
    lineHeight: "90px (1.5)",
    role: "Display Hero Medium",
    specimen: "Billboard Title 60px",
    fontSizeRem: "3.75rem",
  },
  {
    name: "gamma",
    className: "text-gamma",
    size: "48px (3rem)",
    lineHeight: "72px (1.5)",
    role: "Display Hero Small",
    specimen: "Tabungan Emas 48px",
    fontSizeRem: "3rem",
  },
  {
    name: "delta",
    className: "text-delta",
    size: "36px (2.25rem)",
    lineHeight: "54px (1.5)",
    role: "Page Headline H1",
    specimen: "Page Headline H1 36px",
    fontSizeRem: "2.25rem",
  },
  {
    name: "epsilon",
    className: "text-epsilon",
    size: "30px (1.875rem)",
    lineHeight: "45px (1.5)",
    role: "Section Header H2",
    specimen: "Section Title H2 30px",
    fontSizeRem: "1.875rem",
  },
  {
    name: "zeta",
    className: "text-zeta",
    size: "24px (1.5rem)",
    lineHeight: "36px (1.5)",
    role: "Subsection Header H3",
    specimen: "Subsection Title H3 24px",
    fontSizeRem: "1.5rem",
  },
  {
    name: "kappa",
    className: "text-kappa",
    size: "20px (1.25rem)",
    lineHeight: "30px (1.5)",
    role: "Card Title H4",
    specimen: "Card Title & Dialog Header H4 20px",
    fontSizeRem: "1.25rem",
  },
  {
    name: "lambda",
    className: "text-lambda",
    size: "18px (1.125rem)",
    lineHeight: "27px (1.5)",
    role: "Dialog & Sheet Title",
    specimen: "Sheet Subtitle & List Item Title 18px",
    fontSizeRem: "1.125rem",
  },
  {
    name: "omicron",
    className: "text-omicron",
    size: "16px (1rem)",
    lineHeight: "24px (1.5)",
    role: "Body Default & Form Inputs",
    specimen: "Body Text Default — Kelola seluruh portofolio investasi dan pembiayaan emas secara aman (16px).",
    fontSizeRem: "1rem",
  },
  {
    name: "sigma",
    className: "text-sigma",
    size: "14px (0.875rem)",
    lineHeight: "20px (1.428)",
    role: "Body Small & Controls",
    specimen: "Body Small — Data tabel transaksi nasabah, kontrol formulir, dan label sekunder (14px).",
    fontSizeRem: "0.875rem",
  },
  {
    name: "omega",
    className: "text-omega",
    size: "12px (0.75rem)",
    lineHeight: "18px (1.5)",
    role: "Captions, Metadata & Badges",
    specimen: "Caption — Helper text formulir input, metadata transaksi, dan label status compact (12px).",
    fontSizeRem: "0.75rem",
  },
  {
    name: "atom",
    className: "text-atom",
    size: "10px (0.625rem)",
    lineHeight: "14px (1.4)",
    role: "Micro Hints, Badges & Tags",
    specimen: "Micro Hint — Tag notifikasi kecil, dot counter status, dan teks metadata mikro (10px).",
    fontSizeRem: "0.625rem",
  },
];

const copiedClass = ref<string | null>(null);

const copyClass = async (className: string) => {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(className);
      copiedClass.value = className;
      setTimeout(() => {
        if (copiedClass.value === className) {
          copiedClass.value = null;
        }
      }, 1500);
    }
  } catch {
    // Clipboard not available
  }
};
</script>

<template>
  <div class="my-6 rounded-xl border border-[var(--vp-c-border)] bg-[var(--vp-c-bg-soft)] overflow-hidden font-sans">
    <div class="divide-y divide-[var(--vp-c-divider)]">
      <div
        v-for="item in typographyItems"
        :key="item.name"
        class="group p-4 transition-colors hover:bg-[var(--vp-c-bg-alt)] cursor-pointer"
        :title="`Klik untuk menyalin class ${item.className}`"
        @click="copyClass(item.className)"
      >
        <!-- Top Meta Row -->
        <div class="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex items-center gap-2">
            <span class="font-extrabold capitalize text-[var(--vp-c-text-1)]">
              {{ item.name }}
            </span>
            <code class="whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-[11px] font-bold bg-[var(--vp-c-bg)] text-[var(--vp-c-text-1)] border border-[var(--vp-c-border)]">
              {{ item.className }}
            </code>
            <span class="hidden sm:inline text-[var(--vp-c-text-2)]">
              — {{ item.role }}
            </span>
          </div>

          <div class="flex items-center gap-3">
            <span class="font-mono text-[var(--vp-c-text-2)]">
              {{ item.size }} &bull; Line height {{ item.lineHeight }}
            </span>
            <span
              v-if="copiedClass === item.className"
              class="inline-flex items-center gap-1 font-mono font-bold text-lime-600 dark:text-lime-400"
            >
              <Check class="h-3.5 w-3.5" /> Tersalin!
            </span>
            <span
              v-else
              class="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs text-[var(--vp-c-brand-1)] flex items-center gap-1 font-semibold"
            >
              <Copy class="h-3 w-3" /> Salin
            </span>
          </div>
        </div>

        <!-- Specimen Display -->
        <div class="overflow-x-auto py-1">
          <p
            :class="[item.className, 'font-bold text-[var(--vp-c-text-1)] tracking-tight m-0 whitespace-nowrap']"
            :style="{ fontSize: item.fontSizeRem }"
          >
            {{ item.specimen }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
