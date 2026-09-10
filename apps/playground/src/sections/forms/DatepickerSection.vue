<script setup lang="ts">
/**
 * @file DatepickerSection.vue
 * @description Enterprise-grade documentation for the Datepicker calendar component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Datepicker, Label } from "@gwind/ui";
import { Calendar, Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const tanggalJatuhTempo = ref("2026-09-15");
const tanggalLahir = ref("1995-08-17");
const tanggalBooking = ref("");
const tanggalTerkunci = ref("2026-01-01");

const datepickerProps: PropRow[] = [
  {
    name: "modelValue",
    type: "string",
    default: "undefined",
    description: "String tanggal ISO 8601 (YYYY-MM-DD) yang terikat dua arah via v-model.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "'Pilih Tanggal'",
    description: "Teks placeholder yang muncul saat belum ada tanggal yang dipilih.",
  },
  {
    name: "disablePastDates",
    type: "boolean",
    default: "false",
    description: "Jika true, seluruh tanggal sebelum hari ini otomatis dinonaktifkan (disabled).",
  },
  {
    name: "disableFutureDates",
    type: "boolean",
    default: "false",
    description: "Jika true, seluruh tanggal setelah hari ini otomatis dinonaktifkan (disabled).",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi pemicu kalender secara keseluruhan.",
  },
];
</script>

<template>
  <section id="datepicker" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Datepicker
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Komponen kalender interaktif berbasis Reka UI untuk seleksi tanggal diskrit dengan dukungan batasan masa lampau/masa depan (<code>disablePastDates</code> / <code>disableFutureDates</code>), navigasi dekade, serta emisi format ISO 8601 (<code>YYYY-MM-DD</code>).
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Calendar Primitive</Badge>
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
            Penetapan Tanggal Jatuh Tempo Gadai & Tanggal Lahir
          </h3>
        </div>
        <div class="flex items-center gap-gw-8">
          <span class="text-omega font-semibold text-foreground-secondary">ISO Format:</span>
          <code class="rounded-md bg-black-900 px-2.5 py-1 font-mono text-atom font-bold text-lime-400">
            {{ tanggalJatuhTempo || 'null' }}
          </code>
        </div>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Pengaturan tanggal jatuh tempo pinjaman dengan pencegahan pemilihan tanggal lampau serta tanggal lahir nasabah dengan pencegahan tanggal masa depan.
        </p>
        <div class="grid gap-gw-16 md:grid-cols-2">
          <!-- Due Date (Disable Past) -->
          <div class="space-y-gw-8">
            <Label for="datepicker-case-tempo">Jatuh Tempo Pinjaman (Masa Datang Saja)</Label>
            <Datepicker
              id="datepicker-case-tempo"
              v-model="tanggalJatuhTempo"
              placeholder="Pilih tanggal jatuh tempo"
              disable-past-dates
              class="w-full"
            />
            <p class="text-omega text-foreground-secondary">Otomatis mengunci tanggal kemarin dan sebelumnya.</p>
          </div>

          <!-- Birth Date (Disable Future) -->
          <div class="space-y-gw-8">
            <Label for="datepicker-case-lahir">Tanggal Lahir Nasabah (Masa Lampau Saja)</Label>
            <Datepicker
              id="datepicker-case-lahir"
              v-model="tanggalLahir"
              placeholder="Pilih tanggal lahir"
              disable-future-dates
              class="w-full"
            />
            <p class="text-omega text-foreground-secondary">Memastikan tanggal lahir tidak mendahului hari ini.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Date Constraints & States -->
    <DocCard
      title="Interactive Date Constraints & States"
      description="Ragam konfigurasi Datepicker dari keadaan nilai kosong, pembatasan rentang hari khusus, hingga kontrol terkunci (disabled)."
      badge="Date Constraints"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Empty Placeholder -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="datepicker-state-empty">Jadwal Penaksiran Agunan</Label>
            <Datepicker
              id="datepicker-state-empty"
              v-model="tanggalBooking"
              placeholder="Pilih tanggal kedatangan..."
              class="w-full"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Empty State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">v-model="" (placeholder)</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Tampilan awal sebelum kalender dipilih
            </p>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <Label for="datepicker-state-disabled" class="text-foreground-tertiary">Tanggal Pembukuan Akad (Terkunci)</Label>
            <Datepicker
              id="datepicker-state-disabled"
              disabled
              :model-value="tanggalTerkunci"
              class="w-full"
            />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled State</span>
              <code class="text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Pop-up kalender tidak dapat dibuka
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Standar Waktu ISO:</strong> Seluruh output nilai model menggunakan format standar internasional <code>YYYY-MM-DD</code> sehingga kompatibel langsung dengan REST API backend.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Datepicker."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="datepickerProps" />
    </DocCard>
  </section>
</template>
