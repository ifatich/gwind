<script setup lang="ts">
/**
 * @file SwitchSection.vue
 * @description Enterprise-grade documentation for the Switch toggle component.
 * Strictly consumes Gwind Design Tokens for surfaces, borders, typography, spacing, and radius.
 */
import { ref } from "vue";
import { Badge, Switch } from "@gwind/ui";
import { Info, Sparkles } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const notifWhatsapp = ref(true);
const autodebetTabungan = ref(false);
const switchStateOff = ref(false);
const switchStateOn = ref(true);
const switchDisabledOff = ref(false);
const switchDisabledOn = ref(true);

const switchProps: PropRow[] = [
  {
    name: "modelValue",
    type: "boolean",
    default: "false",
    description: "Nilai boolean sakelar (true untuk menyala / false untuk mati) via v-model.",
  },
  {
    name: "defaultValue",
    type: "boolean",
    default: "false",
    description: "Nilai awal sakelar saat komponen pertama kali di-mount tanpa binding v-model aktif.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi klik dan menerapkan opasitas muted 50%.",
  },
  {
    name: "id",
    type: "string",
    default: "undefined",
    description: "Identifier unik elemen DOM tombol sakelar.",
  },
];
</script>

<template>
  <section id="switch" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">03 • Form & Data Entry</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">
          Switch Toggle
        </h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Kontrol sakelar boolean instan untuk preferensi akun, fitur otomatisasi, dan parameter aplikasi dengan transisi visual geser mikro (thumb animation) serta atribut aksesibilitas semantik <code>role="switch"</code>.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Toggle Primitive</Badge>
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
            Pengaturan Notifikasi Nasabah & Autodebet Tabungan Emas
          </h3>
        </div>
        <span class="text-omega font-semibold text-foreground-secondary">
          Instant State Toggles
        </span>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Konfigurasi otomatisasi layanan rekening nasabah yang langsung berlaku seketika saat sakelar digeser.
        </p>
        <div class="grid gap-gw-16 md:grid-cols-2">
          <!-- WhatsApp Notification -->
          <div class="flex items-center justify-between gap-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Pengingat WhatsApp Otomatis</h4>
              <p class="text-omega text-foreground-secondary">Kirim pesan reminder 3 hari sebelum masa gadai jatuh tempo.</p>
            </div>
            <Switch id="switch-case-wa" v-model="notifWhatsapp" />
          </div>

          <!-- Autodebet -->
          <div class="flex items-center justify-between gap-gw-16">
            <div>
              <h4 class="text-sigma font-bold text-foreground">Autodebet Tabungan Emas</h4>
              <p class="text-omega text-foreground-secondary">Debet otomatis saldo tabungan setiap tanggal 1 awal bulan kalender.</p>
            </div>
            <Switch id="switch-case-autodebet" v-model="autodebetTabungan" />
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Interactive Lifecycle States -->
    <DocCard
      title="Interactive Lifecycle States"
      description="Perilaku visual Switch dalam status aktif (on), nonaktif (off), dan kondisi kontrol terkunci (disabled)."
      badge="Toggle States"
      badge-variant="outline"
    >
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-gw-24 py-gw-8">
        <!-- Inactive (Off) -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Switch id="switch-state-off" v-model="switchStateOff" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Inactive (Off)</span>
            <code class="block text-atom font-mono text-foreground-secondary font-semibold">:modelValue="false"</code>
            <span class="block text-omega text-foreground-secondary">Thumb berada di posisi kiri</span>
          </div>
        </div>

        <!-- Active (On) -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Switch id="switch-state-on" v-model="switchStateOn" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Active (On)</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">:modelValue="true"</code>
            <span class="block text-omega text-foreground-secondary">Latar hijau dengan thumb di kanan</span>
          </div>
        </div>

        <!-- Disabled Off -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Switch id="switch-state-dis-off" disabled :model-value="switchDisabledOff" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Disabled (Off)</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            <span class="block text-omega text-foreground-secondary">Terkunci dalam posisi mati</span>
          </div>
        </div>

        <!-- Disabled On -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <div class="py-gw-8 flex items-center justify-center min-h-[44px]">
            <Switch id="switch-state-dis-on" disabled :model-value="switchDisabledOn" />
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle w-full">
            <span class="block text-sigma font-bold text-foreground">Disabled (On)</span>
            <code class="block text-atom font-mono text-foreground-tertiary font-semibold">:disabled="true"</code>
            <span class="block text-omega text-foreground-secondary">Terkunci dalam posisi aktif</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Desain Interaksi:</strong> Switch ideal digunakan untuk aksi langsung (instant action) yang tidak memerlukan penekanan tombol "Simpan/Submit" tambahan.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Switch."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="switchProps" />
    </DocCard>
  </section>
</template>
