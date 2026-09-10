<script setup lang="ts">
/**
 * @file PlaygroundFooter.vue
 * @description Enterprise-grade global footer for Gwind Design System Playground.
 * Features an obsidian visual hierarchy, direct component category index, CLI scaffolding copy,
 * production readiness badges, and smooth back-to-top interaction.
 */
import { ref } from "vue";
import {
  PackageCheck,
  Copy,
  Check,
  ArrowUp,
  ExternalLink,
  ShieldCheck,
  Code2,
  Terminal,
} from "lucide-vue-next";

const copiedCli = ref(false);

function copyCli() {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText("npx gwind-system-ui add");
    copiedCli.value = true;
    setTimeout(() => {
      copiedCli.value = false;
    }, 2000);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <footer class="playground-footer-revamped bg-[#090d16] text-white border-t border-white/10 relative overflow-hidden mt-16 sm:mt-24">
    <!-- Subtle Ambient Glow -->
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-lime-500/[0.08] blur-[120px] pointer-events-none" />

    <div class="playground-container py-12 sm:py-16 relative">
      <!-- TOP ROW: Brand Hero & Quick Scaffolding -->
      <div class="grid gap-8 lg:grid-cols-12 lg:items-center pb-12 border-b border-white/10">
        <!-- Brand & Description -->
        <div class="space-y-4 lg:col-span-7">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-lime-500 via-emerald-400 to-lime-300 text-black font-black shadow-lg shadow-lime-500/20 ring-1 ring-white/25">
              <PackageCheck class="h-5 w-5 text-black stroke-[2.5]" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-omicron font-black tracking-tight text-white">
                  Gwind Design System
                </span>
                <span class="rounded-full bg-lime-400/20 border border-lime-400/40 px-2 py-0.5 text-[10px] font-bold text-lime-300">
                  Enterprise
                </span>
              </div>
              <p class="text-xs text-white/50 font-medium">
                Design Token & UI Framework by Fatich Imam Al Arasy
              </p>
            </div>
          </div>

          <p class="text-sigma text-white/70 max-w-xl leading-relaxed">
            Sistem desain enterprise berbasis Vue 3.5+, headless primitives Reka UI, dan utility-first Tailwind CSS v4. Dibangun khusus untuk kebutuhan skalabilitas tinggi aplikasi modern dan ekosistem fintech.
          </p>

          <!-- Production Status Badge -->
          <div class="flex flex-wrap items-center gap-2.5 pt-1">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              34 Komponen Terverifikasi Produksi
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold">
              <ShieldCheck class="h-3.5 w-3.5 text-lime-400" />
              100% Gwind Design Tokens
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold">
              <Code2 class="h-3.5 w-3.5 text-lime-400" />
              Strict TypeScript
            </span>
          </div>
        </div>

        <!-- Quick Scaffolding Card -->
        <div class="lg:col-span-5">
          <div class="rounded-2xl border border-white/15 bg-white/[0.04] p-5 space-y-3.5 backdrop-blur-sm shadow-xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <Terminal class="h-4 w-4 text-lime-400" />
                <span class="text-xs font-extrabold uppercase tracking-wider text-white/80">
                  CLI Quick Scaffolding
                </span>
              </div>
              <span class="text-[10px] font-mono text-lime-300 bg-lime-500/20 px-2 py-0.5 rounded font-bold border border-lime-400/30">
                npm / pnpm / bun
              </span>
            </div>

            <div class="flex items-center justify-between gap-3 bg-black/60 rounded-xl px-3.5 py-2.5 border border-white/10 font-mono text-xs text-lime-300">
              <span class="truncate select-all">npx gwind-system-ui add [komponen]</span>
              <button
                id="btn-footer-copy-cli"
                type="button"
                class="flex items-center gap-1 text-[11px] font-sans font-bold text-white bg-white/15 hover:bg-white/25 px-2.5 py-1 rounded-lg transition-all cursor-pointer shrink-0"
                @click="copyCli"
              >
                <component :is="copiedCli ? Check : Copy" class="h-3 w-3" :class="copiedCli ? 'text-lime-400' : 'text-white'" />
                <span>{{ copiedCli ? 'Tersalin!' : 'Copy' }}</span>
              </button>
            </div>

            <p class="text-omega text-white/50 leading-normal">
              Pasang komponen secara modular langsung ke dalam struktur folder aplikasi tanpa dependensi monolitik.
            </p>
          </div>
        </div>
      </div>

      <!-- MIDDLE ROW: 4-Column Structured Directory -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12 border-b border-white/10 text-sigma">
        <!-- Col 1: Form & Data Entry (15 Komponen) -->
        <div class="space-y-3.5">
          <div class="flex items-center justify-between">
            <h5 class="text-omega font-black uppercase tracking-wider text-lime-400">
              Form & Data Entry
            </h5>
            <span class="text-[10px] font-mono text-white/40">15</span>
          </div>
          <ul class="space-y-1.5 text-white/70 text-xs">
            <li><a href="#input" class="hover:text-lime-300 transition-colors">Input & InputField</a></li>
            <li><a href="#input-rupiah" class="hover:text-lime-300 transition-colors">Input Rupiah (Fintech)</a></li>
            <li><a href="#input-persentase" class="hover:text-lime-300 transition-colors">Input Persentase</a></li>
            <li><a href="#add-amount" class="hover:text-lime-300 transition-colors">Add Amount (Quick Chip)</a></li>
            <li><a href="#textarea" class="hover:text-lime-300 transition-colors">Textarea & Character Count</a></li>
            <li><a href="#label" class="hover:text-lime-300 transition-colors">Label & Mandatory Indicator</a></li>
            <li><a href="#checkbox" class="hover:text-lime-300 transition-colors">Checkbox & Agreement</a></li>
            <li><a href="#radio-group" class="hover:text-lime-300 transition-colors">Radio Group & Cards</a></li>
            <li><a href="#select" class="hover:text-lime-300 transition-colors">Select (Dropdown Native)</a></li>
            <li><a href="#combobox" class="hover:text-lime-300 transition-colors">Combobox & Autocomplete</a></li>
            <li><a href="#dropdown" class="hover:text-lime-300 transition-colors">Dropdown Menu Action</a></li>
            <li><a href="#datepicker" class="hover:text-lime-300 transition-colors">Datepicker & Range</a></li>
            <li><a href="#switch" class="hover:text-lime-300 transition-colors">Switch (Toggle Setting)</a></li>
            <li><a href="#file-picker" class="hover:text-lime-300 transition-colors">File Picker & Dokumen</a></li>
            <li><a href="#image-picker" class="hover:text-lime-300 transition-colors">Image Picker & OCR KTP</a></li>
          </ul>
        </div>

        <!-- Col 2: Data Display & Layout (10 Komponen) -->
        <div class="space-y-3.5">
          <div class="flex items-center justify-between">
            <h5 class="text-omega font-black uppercase tracking-wider text-lime-400">
              Data & Layout
            </h5>
            <span class="text-[10px] font-mono text-white/40">10</span>
          </div>
          <ul class="space-y-1.5 text-white/70 text-xs">
            <li><a href="#avatar" class="hover:text-lime-300 transition-colors">Avatar & Nasabah Initials</a></li>
            <li><a href="#badge" class="hover:text-lime-300 transition-colors">Badge (Fintech Status)</a></li>
            <li><a href="#card" class="hover:text-lime-300 transition-colors">Card & Portofolio Emas</a></li>
            <li><a href="#table" class="hover:text-lime-300 transition-colors">Table (Data Grid Finansial)</a></li>
            <li><a href="#accordion" class="hover:text-lime-300 transition-colors">Accordion (FAQ & Klausul)</a></li>
            <li><a href="#carousel" class="hover:text-lime-300 transition-colors">Carousel (Promo Banner)</a></li>
            <li><a href="#divider" class="hover:text-lime-300 transition-colors">Divider & Sub-header</a></li>
            <li><a href="#breadcrumb" class="hover:text-lime-300 transition-colors">Breadcrumb Navigation</a></li>
            <li><a href="#pagination" class="hover:text-lime-300 transition-colors">Pagination Controller</a></li>
            <li><a href="#tabs" class="hover:text-lime-300 transition-colors">Tabs (Segmented View)</a></li>
          </ul>
        </div>

        <!-- Col 3: Feedback & Floating Surfaces (7 Komponen) -->
        <div class="space-y-3.5">
          <div class="flex items-center justify-between">
            <h5 class="text-omega font-black uppercase tracking-wider text-lime-400">
              Feedback & Overlays
            </h5>
            <span class="text-[10px] font-mono text-white/40">7</span>
          </div>
          <ul class="space-y-1.5 text-white/70 text-xs">
            <li><a href="#alert" class="hover:text-lime-300 transition-colors">Alert (Notifikasi Sistem)</a></li>
            <li><a href="#progress" class="hover:text-lime-300 transition-colors">Progress (Step Indicator)</a></li>
            <li><a href="#spinner" class="hover:text-lime-300 transition-colors">Spinner (Loading State)</a></li>
            <li><a href="#toast" class="hover:text-lime-300 transition-colors">Toast (Feedback Transaksi)</a></li>
            <li><a href="#dialog" class="hover:text-lime-300 transition-colors">Dialog (Konfirmasi Pelunasan)</a></li>
            <li><a href="#popover" class="hover:text-lime-300 transition-colors">Popover (Taksiran Pasar)</a></li>
            <li><a href="#tooltip" class="hover:text-lime-300 transition-colors">Tooltip (Micro Hints)</a></li>
            <li class="pt-2 border-t border-white/10 font-bold text-white/90">
              <a href="#button" class="hover:text-lime-300 transition-colors">Button & Link (Actions)</a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Architecture & Resources -->
        <div class="space-y-3.5">
          <div class="flex items-center justify-between">
            <h5 class="text-omega font-black uppercase tracking-wider text-lime-400">
              Arsitektur & Spesifikasi
            </h5>
            <span class="text-[10px] font-mono text-white/40">v2</span>
          </div>
          <ul class="space-y-1.5 text-white/70 text-xs">
            <li><a href="#tokens" class="hover:text-lime-300 transition-colors font-bold text-lime-400">Design Tokens Reference</a></li>
            <li><a href="#tokens" class="hover:text-lime-300 transition-colors">Skala Warna (100–900 & 10–90)</a></li>
            <li><a href="#tokens" class="hover:text-lime-300 transition-colors">Hierarki Tipografi 12 Level</a></li>
            <li><a href="#tokens" class="hover:text-lime-300 transition-colors">Radius & Bayangan Drop-1/2/3</a></li>
            <li><a href="#tokens" class="hover:text-lime-300 transition-colors">Sistem Spasi (gw-2 hingga gw-64)</a></li>
            <li class="pt-2 border-t border-white/10">
              <a href="https://ifatich.github.io/gwind/" target="_blank" class="hover:text-lime-300 transition-colors flex items-center gap-1">
                <span>Dokumentasi Resmi VitePress</span>
                <ExternalLink class="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-lime-300 transition-colors flex items-center gap-1">
                <span>Figma Enterprise UI Kit</span>
                <ExternalLink class="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- BOTTOM ROW: Copyright, Stack Badges, Back to Top -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div class="space-y-1 text-center sm:text-left">
          <p>Copyright &copy; 2025–2026 Fatich Imam Al Arasy. All rights reserved.</p>
          <p class="text-[11px] text-white/40">
            Dibuat dengan presisi tinggi untuk standar arsitektur sistem desain enterprise.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button
            id="btn-footer-back-to-top"
            type="button"
            class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all cursor-pointer hover:-translate-y-0.5"
            @click="scrollToTop"
          >
            <ArrowUp class="h-3.5 w-3.5 text-lime-400" />
            <span>Kembali ke Atas</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
