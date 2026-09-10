<script setup lang="ts">
/**
 * @file LabelSection.vue
 * @description Enterprise-grade documentation for the Label typography and form control component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { Badge, Input, Label } from "@gwind/ui";
import { CircleHelp, Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const labelProps: PropRow[] = [
  {
    name: "for",
    type: "string",
    default: "undefined",
    description: "ID elemen masukan kontrol yang dihubungkan secara semantik dengan label ini.",
  },
  {
    name: "as",
    type: "string | Component",
    default: "'label'",
    description: "Elemen tag HTML yang digunakan untuk me-render label (default: <label>).",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Mendelegasikan rendering ke elemen anak pertama (Reka UI headless slot pattern).",
  },
  {
    name: "class",
    type: "string",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi warna atau tata letak.",
  },
];
</script>

<template>
  <section id="label" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Label
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen judul bidang formulir semantik berbasis Reka UI yang mengikat kontrol masukan dengan standar aksesibilitas WCAG 2.1 AA, indikator kolom wajib (mandatory asterisk), serta integrasi status dinonaktifkan.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Typography Primitive</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario Showcase -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">
            Formulir Akad Gadai & Keterangan Label Wajib
          </h3>
        </div>
        <span class="text-omega font-semibold text-foreground-secondary">
          Mandatory Asterisk (*) & Accessible Associations
        </span>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Penggunaan label semantik dengan pengikatan atribut <code>for</code> ke identifier elemen input terkait.
        </p>
        <div class="grid gap-gw-16 md:grid-cols-3">
          <!-- Required Field -->
          <div class="space-y-gw-8">
            <div class="flex items-center gap-1">
              <Label for="label-case-ktp">Nomor KTP / Paspor</Label>
              <span class="text-destructive font-bold" aria-hidden="true">*</span>
            </div>
            <Input id="label-case-ktp" placeholder="3171..." />
            <p class="text-omega text-foreground-secondary">Kolom wajib diisi untuk verifikasi identitas nasabah.</p>
          </div>

          <!-- Optional Field -->
          <div class="space-y-gw-8">
            <div class="flex items-center justify-between">
              <Label for="label-case-npwp">NPWP Pribadi</Label>
              <span class="text-atom text-foreground-tertiary">(Opsional)</span>
            </div>
            <Input id="label-case-npwp" placeholder="00.000.000..." />
            <p class="text-omega text-foreground-secondary">Dibutuhkan khusus untuk pinjaman di atas Rp 50.000.000.</p>
          </div>

          <!-- Disabled Field -->
          <div class="space-y-gw-8">
            <div class="flex items-center gap-1">
              <Label for="label-case-ref" class="text-foreground-tertiary">Kode Referal Agen</Label>
              <span class="text-atom text-foreground-tertiary font-semibold">(Terkunci)</span>
            </div>
            <Input id="label-case-ref" disabled model-value="REF-CABANG-09" />
            <p class="text-omega text-foreground-tertiary">Field dinonaktifkan sesuai data pendaftaran cabang.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Label Primitives & Variations -->
    <DocCard
      title="Label Primitives & Variations"
      description="Ragam konfigurasi label dasar dari teks standar, penanda wajib (required), integrasi icon tooltip bantuan, hingga status disabled."
      badge="Visual Variations"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gw-24 py-gw-8">
        <!-- Standard Label -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Label for="sample-input-1">Standard Label</Label>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Standard</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">&lt;Label for="..."&gt;</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Label teks reguler bobot 800
            </p>
          </div>
        </div>

        <!-- Required Field -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px] gap-1">
            <Label for="sample-input-2">Required Field</Label>
            <span class="text-destructive font-bold text-omicron" aria-hidden="true">*</span>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Mandatory Field</span>
              <code class="text-atom font-mono text-destructive font-semibold">with Asterisk (*)</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Indikasi input wajib diisi
            </p>
          </div>
        </div>

        <!-- With Tooltip Icon -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px] gap-1.5">
            <Label for="sample-input-3">With Helper Icon</Label>
            <CircleHelp class="h-4 w-4 text-foreground-tertiary" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Adorned Label</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">with Helper Icon</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Dilengkapi icon bantuan tooltip
            </p>
          </div>
        </div>

        <!-- Disabled Label -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Label for="sample-input-4" class="text-foreground-tertiary">Disabled Field</Label>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">class="text-foreground-tertiary"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menyesuaikan input nonaktif
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Aksesibilitas (WCAG 2.1):</strong> Selalu pasangkan properti <code>for</code> pada <code>&lt;Label&gt;</code> dengan atribut <code>id</code> pada elemen input terkait agar fokus input aktif saat label diklik.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Label."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="labelProps" />
    </DocCard>
  </section>
</template>
