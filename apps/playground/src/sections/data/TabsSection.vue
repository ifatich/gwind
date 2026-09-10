<script setup lang="ts">
/**
 * @file TabsSection.vue
 * @description Enterprise-grade documentation for the Tabs segmented switcher component family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  TabContent,
  TabGroup,
  TabTrigger,
  TabTriggerGroup,
  Badge,
} from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const tabsProps: PropRow[] = [
  {
    name: "defaultValue (TabGroup)",
    type: "string",
    default: "'tab1'",
    description: "Nilai tab aktif default saat komponen pertama kali dimuat.",
  },
  {
    name: "modelValue (TabGroup)",
    type: "string",
    default: "undefined",
    description: "Nilai tab aktif yang dikontrol secara reaktif (mendukung v-model).",
  },
  {
    name: "orientation (TabGroup)",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "Arah orientasi susunan deretan tab pemicu.",
  },
  {
    name: "value (TabTrigger)",
    type: "string | number",
    required: true,
    description: "Nilai unik pengenal tombol pemicu tab yang berkorespondensi dengan TabContent.",
  },
  {
    name: "disabled (TabTrigger)",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi klik dan fokus pada tombol pemicu tab tertentu.",
  },
  {
    name: "value (TabContent)",
    type: "string | number",
    required: true,
    description: "Nilai unik pencocok panel konten yang akan ditampilkan saat tab dengan value sama aktif.",
  },
];
</script>

<template>
  <section id="tabs" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Segmented View Switchers</p>
      <h2 class="text-xl font-bold text-foreground">Tabs</h2>
      <p class="text-sigma text-foreground-secondary">
        Pengalih tampilan bersegmen untuk memilah rincian ringkasan portofolio, riwayat mutasi transaksi, dan klausul dokumen akad pinjaman.
      </p>
    </div>

    <!-- CARD 1: Real-World Case -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-2.5">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground">Dashboard Portofolio & Transaksi Nasabah</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Segmented Panel Views</span>
      </div>
      <div class="playground-case-body">
        <TabGroup id="tab-group-real" default-value="ringkasan">
          <TabTriggerGroup id="tab-triggers-real" class="border-b border-border-subtle">
            <TabTrigger id="tab-trig-ringkasan" value="ringkasan">Ringkasan Portofolio</TabTrigger>
            <TabTrigger id="tab-trig-riwayat" value="riwayat">Riwayat Transaksi</TabTrigger>
            <TabTrigger id="tab-trig-dokumen" value="dokumen">Dokumen & Akad</TabTrigger>
          </TabTriggerGroup>
          <TabContent id="tab-content-ringkasan" value="ringkasan" class="pt-4 text-sigma text-foreground-secondary leading-relaxed">
            Total portofolio tabungan emas aktif: <strong class="text-foreground">12.5400 gram</strong> dengan estimasi nilai pasar Rp 18.183.000.
          </TabContent>
          <TabContent id="tab-content-riwayat" value="riwayat" class="pt-4 text-sigma text-foreground-secondary leading-relaxed">
            Menampilkan 10 transaksi terakhir: Top-up saldo tabungan emas, perpanjangan gadai, dan cicilan emas.
          </TabContent>
          <TabContent id="tab-content-dokumen" value="dokumen" class="pt-4 text-sigma text-foreground-secondary leading-relaxed">
            Dokumen Surat Bukti Gadai (SBG) dan sertifikat kepemilikan emas digital resmi tersimpan aman.
          </TabContent>
        </TabGroup>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Variasi Navigasi Tab"
      description="Eksplorasi susunan tab dengan lencana status notifikasi, serta penanganan status tab terkunci (disabled)."
      badge="Segmented Modes"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Tab Berbadge Notifikasi -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Tab dengan Notifikasi Badge</span>
            <TabGroup id="tab-group-var-badge" default-value="inbox">
              <TabTriggerGroup class="border-b border-border-subtle">
                <TabTrigger id="tab-var-inbox" value="inbox" class="flex items-center gap-2">
                  <span>Pesan</span>
                  <Badge variant="orange">3</Badge>
                </TabTrigger>
                <TabTrigger id="tab-var-promo" value="promo" class="flex items-center gap-2">
                  <span>Promo</span>
                  <Badge variant="brocoli">Baru</Badge>
                </TabTrigger>
              </TabTriggerGroup>
              <TabContent value="inbox" class="pt-4 text-omega text-foreground-secondary">
                Terdapat 3 pesan penting mengenai konfirmasi pembayaran sewa modal gadai Anda.
              </TabContent>
              <TabContent value="promo" class="pt-4 text-omega text-foreground-secondary">
                Dapatkan voucher cashback emas hingga 500 ribu khusus pengajuan via aplikasi.
              </TabContent>
            </TabGroup>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Notification Badges</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">&lt;Badge&gt; Inside Trigger</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Memudahkan pemantauan jumlah pesan atau penawaran baru tanpa harus beralih tab.
            </p>
          </div>
        </div>

        <!-- Varian 2: Disabled Tab -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Tab Terkunci (Disabled)</span>
            <TabGroup id="tab-group-var-dis" default-value="aktif">
              <TabTriggerGroup class="border-b border-border-subtle">
                <TabTrigger id="tab-var-dis-1" value="aktif">Layanan Aktif</TabTrigger>
                <TabTrigger id="tab-var-dis-2" value="locked" disabled>Fitur Eksklusif</TabTrigger>
              </TabTriggerGroup>
              <TabContent value="aktif" class="pt-4 text-omega text-foreground-secondary">
                Akses ke fitur standar tabungan emas dan simulasi perhitungan gadai terbuka.
              </TabContent>
              <TabContent value="locked" class="pt-4 text-omega text-foreground-secondary">
                Konten terkunci hanya untuk nasabah tingkat Platinum.
              </TabContent>
            </TabGroup>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Disabled Tab State</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">:disabled="true"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Mencegah pengguna mengklik tab fitur yang belum tersedia atau memerlukan otorisasi khusus.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Keyboard Friendly:</strong> Tab mendukung navigasi panah kiri/kanan untuk berpindah antar tab secara cepat sesuai spesifikasi WAI-ARIA Tabs Design Pattern.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Tabs."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="tabsProps" />
    </DocCard>
  </section>
</template>
