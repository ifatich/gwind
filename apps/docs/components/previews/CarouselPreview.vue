<script setup lang="ts">
import BannerCarousel from '../../../../packages/ui/src/components/ui/carousel/BannerCarousel.vue'
import Carousel from '../../../../packages/ui/src/components/ui/carousel/Carousel.vue'
import CarouselContent from '../../../../packages/ui/src/components/ui/carousel/CarouselContent.vue'
import CarouselItem from '../../../../packages/ui/src/components/ui/carousel/CarouselItem.vue'
import CarouselPrevious from '../../../../packages/ui/src/components/ui/carousel/CarouselPrevious.vue'
import CarouselNext from '../../../../packages/ui/src/components/ui/carousel/CarouselNext.vue'
import CarouselIndicators from '../../../../packages/ui/src/components/ui/carousel/CarouselIndicators.vue'

const sampleBannerItems = [
  {
    id: 1,
    tag: 'Inspirasi',
    title: 'Ide Hadiah untuk Ibu Tersayang',
    description:
      'Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ada salahnya berusaha membuatnya bahagia. Ada banyak cara agar Ibu bahagia, salah satunya dengan memberi hadiah. Hadiah bisa diberikan saat ulang tahun...',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
    actionLabel: 'Lihat Selengkapnya',
  },
  {
    id: 2,
    tag: 'Promo Special',
    title: 'Investasi Emas Mulai dari 10 Ribu Rupiah',
    description:
      'Wujudkan masa depan finansial yang aman dan berkilau dengan Tabungan Emas. Kemudahan bertransaksi kapan saja dan di mana saja.',
    image:
      'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1600&auto=format&fit=crop',
    actionLabel: 'Mulai Investasi',
  },
  {
    id: 3,
    tag: 'Edukasi',
    title: 'Tips Kelola Keuangan Usaha Mikro',
    description:
      'Tingkatkan kapasitas bisnis UMKM Anda dengan solusi pembiayaan usaha. Dapatkan kemudahan modal dengan agunan fleksibel.',
    image:
      'https://images.unsplash.com/photo-1556742049-0a67e0e7a2b9?q=80&w=1600&auto=format&fit=crop',
    actionLabel: 'Pelajari Selengkapnya',
  },
]
</script>

<template>
  <div class="flex flex-col gap-8 w-full">
    <!-- Banner Preset Preview -->
    <div class="w-full">
      <BannerCarousel :items="sampleBannerItems" :autoplay="true" :autoplay-interval="5000" />
    </div>

    <!-- Primitive Composition Preview -->
    <div class="w-full max-w-2xl mx-auto">
      <Carousel :loop="true" :autoplay="false">
        <CarouselContent>
          <CarouselItem v-for="i in 4" :key="i">
            <div
              class="p-8 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl shadow-lg flex flex-col items-center justify-center min-h-[220px]"
            >
              <span class="text-3xl font-extrabold mb-2">Custom Slide {{ i }}</span>
              <p class="text-sm opacity-90">
                Modular compound components (CarouselItem, CarouselPrevious, CarouselNext)
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselIndicators />
        </div>
      </Carousel>
    </div>
  </div>
</template>
