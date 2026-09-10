<script setup lang="ts">
/**
 * @file CarouselSection.vue
 * @description Enterprise-grade documentation for the Carousel & BannerCarousel family.
 * Consumes 100% Gwind Design Tokens with isolated variants and PropsTable integration.
 */
import {
  BannerCarousel,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  Badge,
} from "@gwind/ui";
import { Sparkles, Info } from "lucide-vue-next";
import DocCard from "../../components/DocCard.vue";
import PropsTable, { type PropRow } from "../../components/PropsTable.vue";

const carouselBannerSlides = [
  {
    id: 1,
    tag: "Inspirasi",
    title: "Ide Hadiah untuk Ibu Tersayang",
    description:
      "Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ada salahnya berusaha membuatnya bahagia dengan investasi masa depan berkilau.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    actionLabel: "Lihat Selengkapnya",
  },
  {
    id: 2,
    tag: "Promo Spesial",
    title: "Investasi Emas Mulai dari 10 Ribu Rupiah",
    description:
      "Wujudkan masa depan finansial yang aman dan berkilau dengan Tabungan Emas. Kemudahan bertransaksi kapan saja dan di mana saja melalui aplikasi resmi.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1600&auto=format&fit=crop",
    actionLabel: "Mulai Investasi",
  },
];

const carouselProps: PropRow[] = [
  {
    name: "items (BannerCarousel)",
    type: "BannerSlide[]",
    required: true,
    description: "Array data banner slide mencakup tag, title, description, image URL, dan actionLabel.",
  },
  {
    name: "autoplay",
    type: "boolean",
    default: "true (Banner) / false (Base)",
    description: "Mengaktifkan rotasi pergantian slide secara otomatis.",
  },
  {
    name: "autoplayInterval",
    type: "number",
    default: "5000",
    description: "Durasi jeda waktu antar perpindahan slide otomatis (dalam milidetik).",
  },
  {
    name: "loop",
    type: "boolean",
    default: "true",
    description: "Memungkinkan rotasi slide berputar terus menerus (infinite loop).",
  },
  {
    name: "orientation (Carousel)",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "Arah orientasi pergeseran slide carousel.",
  },
  {
    name: "clickAction (BannerCarousel)",
    type: "(slide: BannerSlide, index: number) => void",
    isEvent: true,
    description: "Event emisi saat tombol aksi pada banner slide diklik.",
  },
  {
    name: "select",
    type: "(index: number) => void",
    isEvent: true,
    description: "Event emisi saat slide aktif berganti nomor indeks.",
  },
];
</script>

<template>
  <section id="carousel" class="playground-section playground-panel space-y-5">
    <!-- Header Section -->
    <div>
      <p class="playground-eyebrow">Sliders & Hero Banners</p>
      <h2 class="text-xl font-bold text-foreground">Carousel & Banner Slider</h2>
      <p class="text-sigma text-foreground-secondary">
        Slider konten hero banner touch-friendly dengan transisi swipe gestur halus, indikator titik dinamis, dan kontrol navigasi prev/next.
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
          <h3 class="text-sigma font-extrabold text-foreground">Banner Promo Cashback & Informasi Literasi Emas</h3>
        </div>
        <span class="text-omega text-foreground-secondary font-medium">Hero Marketing Banner Carousel</span>
      </div>
      <div class="playground-case-body">
        <BannerCarousel
          id="carousel-real-banner"
          :items="carouselBannerSlides"
          :autoplay="true"
          :autoplay-interval="6000"
          class="w-full"
        />
      </div>
    </div>

    <!-- CARD 2: Variasi & Karakteristik -->
    <DocCard
      title="Karakteristik & Kontrol Primitif Carousel"
      description="Eksplorasi susunan atomik primitif Carousel: CarouselContent, CarouselItem, tombol kontrol navigasi Previous/Next, serta indikator titik posisi."
      badge="Atomic Controls"
      badge-variant="outline"
    >
      <div class="space-y-gw-16 py-gw-8">
        <div class="relative w-full overflow-hidden rounded-xl border border-border-subtle bg-card p-gw-16">
          <Carousel id="carousel-var-primitive" :loop="true" class="w-full">
            <CarouselContent>
              <CarouselItem
                v-for="item in [1, 2, 3]"
                :key="item"
                class="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div class="p-gw-16 rounded-xl border border-border-subtle bg-background space-y-2 text-center h-36 flex flex-col justify-center items-center">
                  <Badge variant="brocoli">Layanan {{ item }}</Badge>
                  <h4 class="text-sigma font-bold text-foreground">Fitur Unggulan #{{ item }}</h4>
                  <p class="text-omega text-foreground-secondary">Pencairan langsung ke rekening bank nasabah.</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div class="flex items-center justify-between pt-gw-16">
              <CarouselPrevious id="btn-carousel-prev" />
              <CarouselIndicators id="carousel-indicators" />
              <CarouselNext id="btn-carousel-next" />
            </div>
          </Carousel>
        </div>

        <div class="space-y-0.5 pt-gw-8 border-t border-border-subtle">
          <div class="flex items-center justify-between">
            <span class="text-sigma font-bold text-foreground">Atomic Carousel Primitive</span>
            <code class="text-atom font-mono text-foreground-green font-semibold">Carousel + Content + Item + Nav</code>
          </div>
          <p class="text-omega text-foreground-secondary leading-normal">
            Memungkinkan pembuatan multi-card carousel horizontal responsif untuk display produk atau daftar kantor cabang.
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center gap-gw-8 text-foreground-secondary">
          <Info class="h-3.5 w-3.5 text-foreground-green shrink-0" />
          <span><strong>Gestur Sentuh:</strong> Carousel mendukung swipe sentuh mobile via library <code>@vueuse/core</code> dan jeda autoplay otomatis saat kursor mouse melakukan hover.</span>
        </div>
      </template>
    </DocCard>

    <!-- CARD 3: Technical Specification & Props Matrix -->
    <DocCard
      title="Technical Specification & Props Matrix"
      description="Referensi lengkap spesifikasi antarmuka API, tipe data, nilai default, dan fungsi slot untuk keluarga komponen Carousel & BannerCarousel."
      badge="API Reference"
      badge-variant="brocoli"
    >
      <PropsTable :items="carouselProps" />
    </DocCard>
  </section>
</template>
