<script setup lang="ts">
/**
 * @file ButtonSection.vue
 * @description Enterprise-grade interactive documentation for the Button component.
 * Strictly consumes Gwind Design Tokens for colors, typography, spacing, radius, and shadows.
 */
import { ref } from "vue";
import { Badge, Button } from "@gwind/ui";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Info,
  Mail,
  Search,
  Settings,
  ShieldAlert,
  Sparkles,
} from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const isSubmitting = ref(false);
function triggerSubmit() {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
  }, 1800);
}

const buttonProps: PropRow[] = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'tertiary' | 'neutral' | 'destructive' | 'outline' | 'ghost' | 'icon' | 'google' | 'apple' | 'facebook'",
    default: "'primary'",
    description: "Varian visual dan hierarki penekanan aksi tombol.",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'fab'",
    default: "'lg'",
    description: "Skala dimensi ketinggian tombol (24px, 32px, 40px, 48px).",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Menampilkan spinner asinkron, mengaktifkan aria-busy, dan mematikan klik.",
  },
  {
    name: "loadingLabel",
    type: "string",
    default: "'Loading'",
    description: "Label aksesibilitas yang dibaca screen reader saat status loading.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Menonaktifkan interaksi klik dan menerapkan pointer-events-none.",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "Delegasi render DOM ke komponen anak melalui Reka UI Headless Primitive.",
  },
];
</script>

<template>
  <section id="button" class="playground-section playground-panel space-y-gw-24">
    <!-- Section Header (Global Section Contract with Design Tokens) -->
    <div class="flex flex-wrap items-center justify-between gap-gw-16">
      <div>
        <p class="playground-eyebrow">02 • General & Actions</p>
        <h2 class="text-zeta sm:text-delta font-extrabold text-foreground-primary tracking-tight">Button</h2>
        <p class="text-sigma text-foreground-secondary max-w-3xl mt-1 leading-relaxed">
          Katalog komponen tombol aksi utama enterprise dengan monochrome branding, hierarki visual semantik, otentikasi sosial, kompresi mikro active press (ripple & scale), serta kepatuhan aksesibilitas WCAG 2.1 AA.
        </p>
      </div>
      <Badge variant="brocoli" class="shrink-0">Core Action Primitive</Badge>
    </div>

    <!-- CARD 1: Real-World Scenario Showcase -->
    <div class="playground-case-card">
      <div class="playground-case-header">
        <div class="flex items-center gap-gw-8">
          <span class="playground-case-badge">
            <Sparkles class="h-3 w-3 text-lime-700" />
            Real-World Scenario
          </span>
          <h3 class="text-sigma font-extrabold text-foreground-primary">Multi-Step Transaction Action Bar</h3>
        </div>
        <Button variant="outline" size="sm" @click="triggerSubmit">
          Simulasi Loading
        </Button>
      </div>
      <div class="playground-case-body">
        <p class="text-omega text-foreground-secondary mb-gw-16">
          Aksi navigasi formulir pengajuan pinjaman gadai dengan proteksi double-submit dan indikator loading asinkron.
        </p>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-gw-16 pt-gw-16 border-t border-border-subtle">
          <Button variant="ghost" class="order-2 sm:order-1">
            Batal
          </Button>
          <div class="flex items-center gap-gw-8 sm:gap-gw-16 order-1 sm:order-2">
            <Button variant="outline">
              Simpan Draft
            </Button>
            <Button
              :loading="isSubmitting"
              loading-label="Memproses..."
              @click="triggerSubmit"
            >
              Lanjut Pembayaran <ArrowRight class="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD 2: Core Semantic Variants & Hierarchy -->
    <DocCard
      title="Core Visual Variants & Action Hierarchy"
      description="Hierarki penekanan visual tombol dari aksi primer brand paling dominan hingga aksi netral berbobot rendah."
      badge="Visual Hierarchy"
      badge-variant="brocoli"
    >
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-gw-24 py-gw-8">
        <!-- Primary Variant -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="primary">Primary Action</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Primary</span>
            <code class="block text-atom font-mono text-foreground-green font-semibold">variant="primary"</code>
            <span class="block text-omega text-foreground-secondary">CTA utama halaman</span>
          </div>
        </div>

        <!-- Secondary Variant -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="secondary">Secondary Action</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Secondary</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="secondary"</code>
            <span class="block text-omega text-foreground-secondary">Aksi pendukung</span>
          </div>
        </div>

        <!-- Tertiary Variant -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="tertiary">Tertiary Action</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Tertiary</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="tertiary"</code>
            <span class="block text-omega text-foreground-secondary">Aksi tanpa border</span>
          </div>
        </div>

        <!-- Neutral Variant -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="neutral">Neutral Action</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Neutral</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="neutral"</code>
            <span class="block text-omega text-foreground-secondary">Toolbar utilitas</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Rekomendasi UX:</strong> Batasi penggunaan tombol <em>Primary</em> maksimal 1 (satu) per container/dialog agar alur tindakan nasabah terarah.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Destructive & Warning Actions -->
    <DocCard
      title="Destructive & Safety Guardrail Actions"
      description="Tombol aksi berbahaya yang memicu perubahan permanen seperti pembatalan akad, penolakan, atau penghapusan berkas."
      badge="Safety Guardrail"
      badge-variant="red"
    >
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Solid Destructive -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="destructive">
            <ShieldAlert class="h-4 w-4 mr-1" /> Hapus Berkas
          </Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Solid Destructive</span>
            <code class="block text-atom font-mono text-destructive font-semibold">variant="destructive"</code>
            <span class="block text-omega text-foreground-secondary">Hapus data permanen</span>
          </div>
        </div>

        <!-- Outline Destructive -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="outline" class="!border-red-500 !text-red-600 hover:!bg-red-100/50">
            Batalkan Pengajuan
          </Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Outline Destructive</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="outline"</code>
            <span class="block text-omega text-foreground-secondary">Pembatalan sekunder</span>
          </div>
        </div>

        <!-- Ghost Action -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="ghost">Batal / Tutup</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Ghost / Cancel</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="ghost"</code>
            <span class="block text-omega text-foreground-secondary">Tutup tanpa efek samping</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <AlertCircle class="h-3.5 w-3.5 text-destructive shrink-0" />
          <span><strong>Guardrail Aksesibilitas:</strong> Tombol destruktif selalu menyertakan teks eksplisit (bukan hanya ikon) untuk mencegah eksekusi tidak disengaja.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 4: Brand & Social Authentication -->
    <DocCard
      title="Brand & Social Authentication"
      description="Tombol masuk atau pendaftaran akun pihak ketiga yang mematuhi pedoman identitas resmi masing-masing penyedia OAuth."
      badge="OAuth 2.0"
      badge-variant="blue"
    >
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-gw-24 py-gw-8">
        <!-- Google -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="google" class="w-full max-w-[240px] gap-gw-8">
            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Google ID</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="google"</code>
          </div>
        </div>

        <!-- Apple -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="apple" class="w-full max-w-[240px] gap-gw-8">
            <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.56.65-1.05 1.71-.92 2.73 1 .08 2.01-.5 2.61-1.22z"/>
            </svg>
            Continue with Apple
          </Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Apple ID</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="apple"</code>
          </div>
        </div>

        <!-- Facebook -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button variant="facebook" class="w-full max-w-[240px] gap-gw-8">
            <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Facebook</span>
            <code class="block text-atom font-mono text-foreground-tertiary">variant="facebook"</code>
          </div>
        </div>
      </div>
    </DocCard>

    <!-- CARD 5: Interactive Lifecycle & State Matrix -->
    <DocCard
      title="Interactive States & Lifecycle Matrix"
      description="Matriks status interaktif: default, hover kursor, active press (ripple + scale 0.98), focus-visible keyboard, loading spinner, dan disabled."
      badge="State Machine"
      badge-variant="outline"
    >
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-gw-16 py-gw-8">
        <!-- Default State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md">Normal</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Default</span>
            <span class="block text-atom text-foreground-tertiary">Siap interaksi</span>
          </div>
        </div>

        <!-- Hover State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md" class="bg-lime-600">Hover</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Hover</span>
            <code class="block text-atom font-mono text-foreground-tertiary">bg-lime-600</code>
          </div>
        </div>

        <!-- Active Press State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md" class="scale-95 bg-lime-800">Pressed</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Active Press</span>
            <span class="block text-atom text-foreground-tertiary">Scale 0.98 + Ripple</span>
          </div>
        </div>

        <!-- Focus Visible State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md" class="ring-2 ring-lime-600 ring-offset-2">Focused</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Focus Ring</span>
            <span class="block text-atom text-foreground-tertiary">Keyboard nav</span>
          </div>
        </div>

        <!-- Loading State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md" loading loading-label="Memproses...">Proses</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Loading</span>
            <span class="block text-atom text-foreground-tertiary">aria-busy="true"</span>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="flex flex-col items-center justify-center gap-gw-8 text-center">
          <Button size="md" disabled>Disabled</Button>
          <div class="space-y-0.5">
            <span class="block text-sigma font-bold text-foreground">Disabled</span>
            <span class="block text-atom text-foreground-tertiary">pointer-events-none</span>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Check class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Physical Motion:</strong> Button mengkonsumsi token <code>--gwind-motion-scale-press: 0.98</code> saat ditekan untuk memberikan umpan balik taktil mikro.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 6: Sizing Scale & Icon Integration -->
    <DocCard
      title="Sizing Scale & Icon Integration"
      description="Empat ukuran standar tombol (24px s.d. 48px) dan fleksibilitas penempatan ikon semantik (leading, trailing, dan icon-only)."
      badge="4 Sizes + Icons"
      badge-variant="outline"
    >
      <div class="space-y-gw-32 py-gw-8">
        <!-- Sub-section 1: Dimension Scale Shelf -->
        <div>
          <h4 class="text-sigma font-bold text-foreground-secondary uppercase tracking-wider mb-gw-16">Skala Ukuran (Dimension Scale)</h4>
          <div class="flex flex-wrap items-end justify-between gap-gw-24">
            <!-- sm -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="sm">Small (24px)</Button>
              <div class="text-center">
                <span class="block text-sigma font-bold text-foreground">Small</span>
                <code class="text-atom font-mono text-foreground-tertiary">size="sm" • 24px</code>
              </div>
            </div>

            <!-- md -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="md">Medium (32px)</Button>
              <div class="text-center">
                <span class="block text-sigma font-bold text-foreground">Medium</span>
                <code class="text-atom font-mono text-foreground-tertiary">size="md" • 32px</code>
              </div>
            </div>

            <!-- lg (default) -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="lg">Large (40px) [Default]</Button>
              <div class="text-center">
                <span class="block text-sigma font-bold text-foreground">Large</span>
                <code class="text-atom font-mono text-foreground-green font-bold">size="lg" • 40px</code>
              </div>
            </div>

            <!-- xl -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="xl">Extra Large (48px)</Button>
              <div class="text-center">
                <span class="block text-sigma font-bold text-foreground">Extra Large</span>
                <code class="text-atom font-mono text-foreground-tertiary">size="xl" • 48px</code>
              </div>
            </div>
          </div>
        </div>

        <!-- Sub-section 2: Icon Placement & Accessible Icon-Only -->
        <div class="border-t border-border-subtle pt-gw-24">
          <h4 class="text-sigma font-bold text-foreground-secondary uppercase tracking-wider mb-gw-16">Integrasi Ikon & Aksesibilitas</h4>
          <div class="flex flex-wrap items-center justify-between gap-gw-24">
            <!-- Leading Icon -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="lg">
                <Mail class="h-4 w-4" /> Icon Left
              </Button>
              <span class="text-omega text-foreground-secondary">Leading Icon</span>
            </div>

            <!-- Trailing Icon -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="lg">
                Icon Right <ArrowRight class="h-4 w-4" />
              </Button>
              <span class="text-omega text-foreground-secondary">Trailing Icon</span>
            </div>

            <!-- Accessible Icon-Only Button with aria-label -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button
                variant="icon"
                size="icon"
                aria-label="Pencarian dokumen atau nasabah"
                title="Pencarian dokumen atau nasabah"
              >
                <Search class="h-5 w-5" />
              </Button>
              <span class="text-omega text-foreground-secondary font-mono">aria-label</span>
            </div>

            <!-- XL Button with Settings Icon -->
            <div class="flex flex-col items-center gap-gw-8">
              <Button size="xl">
                Pengaturan <Settings class="h-5 w-5 ml-1" />
              </Button>
              <span class="text-omega text-foreground-secondary">XL with Icon</span>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>WCAG 2.1 AA Note:</strong> Tombol icon-only tanpa teks visual wajib menyertakan atribut <code>aria-label</code> agar dikenali oleh screen reader.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 7: Container Width & Responsive Layouts -->
    <DocCard
      title="Container Width & Responsive Layouts"
      description="Perilaku tombol pada kontainer formulir: lebar otomatis (inline-flex) versus lebar penuh (block/w-full)."
      badge="Layout Primitives"
      badge-variant="outline"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gw-24 py-gw-8">
        <!-- Large Full Width -->
        <div class="space-y-gw-8">
          <Button class="w-full">Konfirmasi Transaksi (40px Full)</Button>
          <div class="text-center">
            <code class="text-atom font-mono text-foreground-tertiary">class="w-full" (Large 40px)</code>
          </div>
        </div>

        <!-- Extra Large Full Width -->
        <div class="space-y-gw-8">
          <Button size="xl" class="w-full">Ajukan Pinjaman Gadai (48px Full)</Button>
          <div class="text-center">
            <code class="text-atom font-mono text-foreground-tertiary">size="xl" class="w-full" (Extra Large 48px)</code>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Check class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Mobile First:</strong> Tombol formulir aksi primer pada layar mobile (&lt;640px) disarankan menggunakan <code>w-full</code> untuk kenyamanan jangkauan jempol.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 8: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk Button."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="buttonProps" />
    </DocCard>
  </section>
</template>
