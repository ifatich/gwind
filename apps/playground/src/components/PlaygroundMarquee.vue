<script setup lang="ts">
import { Sparkles } from "lucide-vue-next";
</script>

<template>
  <div class="border-b border-white/10 bg-black text-white py-2.5 overflow-hidden">
    <div class="playground-container flex items-center justify-between gap-6 text-omega tracking-wider font-semibold uppercase opacity-85">
      <div class="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
        <span class="flex items-center gap-1.5 text-lime-400 font-bold"><Sparkles class="h-3.5 w-3.5" /> Digital Ecosystem</span>
        <span>•</span>
        <span>Zero External Icon Dependencies (Inline Lucide SVGs)</span>
        <span>•</span>
        <span>100% Real-World Fintech & KYC Scenarios</span>
        <span>•</span>
        <span>Layered CSS Token Architecture</span>
        <span>•</span>
        <span>Strict TypeScript Contract & No Any Types</span>
        <span>•</span>
        <span>CLI Scaffolding via npx gwind-system-ui add</span>
      </div>
      <span class="hidden lg:inline-flex items-center gap-1.5 text-lime-400 font-mono text-xs">
        ✨ Interactive Playground
      </span>
    </div>
  </div>
</template>
