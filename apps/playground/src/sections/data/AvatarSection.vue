<script setup lang="ts">
/**
 * @file AvatarSection.vue
 * @description Enterprise-grade documentation for the Avatar identity component.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import { Avatar, Badge } from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const avatarProps: PropRow[] = [
  {
    name: "src",
    type: "string",
    default: "undefined",
    description: "URL sumber gambar foto profil pengguna resolusi tinggi.",
  },
  {
    name: "alt",
    type: "string",
    default: "undefined",
    description: "Teks alternatif aksesibilitas screen reader dan sumber ekstraksi inisial otomatis.",
  },
  {
    name: "fallback",
    type: "string",
    default: "undefined",
    description: "Teks inisial eksplisit (maksimal 2 karakter) yang dirender jika gambar belum tersedia atau gagal dimuat.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Skala dimensi avatar: 'sm' (32px), 'md' (40px), atau 'lg' (48px).",
  },
  {
    name: "class",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind kustom pada elemen kontainer luar avatar.",
  },
  {
    name: "imageClass",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk kustomisasi elemen <img>.",
  },
  {
    name: "fallbackClass",
    type: "HTMLAttributes['class']",
    default: "undefined",
    description: "Kelas utilitas Tailwind tambahan untuk tipografi teks inisial fallback.",
  },
];
</script>

<template>
  <section id="avatar" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">User Profiles & Identifiers</p>
      <h2 class="text-xl font-bold text-foreground">Avatar</h2>
      <p class="text-sigma text-foreground-secondary">
        Representasi identitas visual profil akun nasabah, agen kemitraan, serta penaksir resmi dengan dukungan gambar resolusi tinggi dan fallback inisial teks otomatis.
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
          <h3 class="text-sigma font-extrabold text-foreground">Profil Nasabah & Petugas Penaksir Resmi</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">User Profiles & Verification Avatars</span>
      </div>
      <div class="playground-case-body">
        <div class="grid gap-gw-16 md:grid-cols-2">
          <!-- Nasabah Prioritas -->
          <div class="flex items-center gap-gw-16">
            <Avatar
              id="avatar-real-nasabah"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
              alt="Budi Santoso"
              size="lg"
            />
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="text-sigma font-bold text-foreground">Budi Santoso</h4>
                <Badge variant="brocoli">KYC Sukses</Badge>
              </div>
              <p class="text-omega text-foreground-secondary">Nasabah Prioritas • Rek: 1029-8821-4402</p>
            </div>
          </div>

          <!-- Petugas Penaksir -->
          <div class="flex items-center gap-gw-16">
            <Avatar
              id="avatar-real-appraiser"
              fallback="AG"
              alt="Ahmad Ghozali"
              size="lg"
            />
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="text-sigma font-bold text-foreground">Ahmad Ghozali</h4>
                <Badge variant="blue">Appraiser</Badge>
              </div>
              <p class="text-omega text-foreground-secondary">Penaksir Emas Khazanah Cab. Salemba</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik Skala Ukuran & Inisial Fallback"
      description="Eksplorasi variasi ukuran Small (32px), Medium (40px), Large (48px), serta perilaku otomatis inisial teks saat foto profil belum tersedia."
      badge="Sizes & Fallbacks"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gw-24 py-gw-8 items-stretch">
        <!-- Varian 1: Skala Ukuran Gambar -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Skala Dimensi Foto</span>
            <div class="flex items-center gap-gw-16 pt-gw-8">
              <Avatar
                id="avatar-scale-sm"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
                alt="Profile Small"
                size="sm"
              />
              <Avatar
                id="avatar-scale-md"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
                alt="Profile Medium"
                size="md"
              />
              <Avatar
                id="avatar-scale-lg"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
                alt="Profile Large"
                size="lg"
              />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Hierarchy Scale</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">size="sm | md | lg"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Ukuran 32px untuk tabel/list padat, 40px untuk header navigasi, dan 48px untuk kartu profil utama.
            </p>
          </div>
        </div>

        <!-- Varian 2: Inisial Fallback Eksplisit -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Inisial Fallback</span>
            <div class="flex items-center gap-gw-16 pt-gw-8">
              <Avatar id="avatar-fallback-pg" fallback="PG" size="sm" />
              <Avatar id="avatar-fallback-ui" fallback="UI" size="md" />
              <Avatar id="avatar-fallback-ds" fallback="DS" size="lg" />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Explicit Fallback</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">fallback="PG"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Menampilkan 2 huruf inisial kapital secara otomatis jika URL sumber gambar tidak disertakan.
            </p>
          </div>
        </div>

        <!-- Varian 3: Ekstraksi Alt Otomatis -->
        <div class="flex flex-col justify-between gap-gw-16">
          <div class="space-y-gw-8">
            <span class="text-sigma font-bold text-foreground block">Otomasi Alt Fallback</span>
            <div class="flex items-center gap-gw-16 pt-gw-8">
              <Avatar id="avatar-alt-auto-1" alt="Dewi Sartika" size="sm" />
              <Avatar id="avatar-alt-auto-2" alt="Rizky Febian" size="md" />
              <Avatar id="avatar-alt-auto-3" alt="Siti Rahma" size="lg" />
            </div>
          </div>
          <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
            <div class="flex items-center justify-between">
              <span class="text-sigma font-bold text-foreground">Auto Initials from Alt</span>
              <code class="text-atom font-mono text-foreground-green font-semibold">alt="Dewi Sartika"</code>
            </div>
            <p class="text-omega text-foreground-secondary leading-normal">
              Ekstraksi inisial nama 'DS', 'RF', 'SR' diambil dari kata pertama dan kedua nilai atribut <code>alt</code>.
            </p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Graceful Degradation:</strong> Jika link gambar mengalami error koneksi (404/network fail), Avatar secara instan beralih ke state inisial fallback tanpa memicu layout shift.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Avatar."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="avatarProps" />
    </DocCard>
  </section>
</template>
