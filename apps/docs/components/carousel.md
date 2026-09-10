<script setup>
import CarouselPreview from './previews/CarouselPreview.vue'
</script>

# Carousel / Banner

Solusi banner slide dan komposer carousel responsif dengan dukungan sentuhan/swipe, navigasi keyboard, indikator baris (pill indicators), serta kontrol tombol melingkar sesuai standar Figma Gwind UI Kit (`24643-22126`).

## Installation

```bash
npx gwind-system-ui add carousel
```

---

## Preview

<ShadowPreview>
  <CarouselPreview />
</ShadowPreview>

---

## Usage

### 1. Banner Carousel (Figma Preset)

```vue
<script setup lang="ts">
import { BannerCarousel } from '@gwind/ui'

const bannerSlides = [
  {
    id: 1,
    tag: 'Inspirasi',
    title: 'Ide Hadiah untuk Ibu Tersayang',
    description: 'Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ada salahnya berusaha membuatnya bahagia...',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
    actionLabel: 'Lihat Selengkapnya'
  }
]
</script>

<template>
  <BannerCarousel :items="bannerSlides" :autoplay="true" />
</template>
```

### 2. Primitive Compound Components

```vue
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators
} from '@gwind/ui'
</script>

<template>
  <Carousel :autoplay="true" :loop="true">
    <CarouselContent>
      <CarouselItem>Slide 1</CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    <CarouselIndicators />
  </Carousel>
</template>
```

---

## Props

### BannerCarousel Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BannerSlide[]` | `required` | Array objek data slide banner. |
| `autoplay` | `boolean` | `true` | Otomatis berganti slide. |
| `autoplayInterval` | `number` | `5000` | Durasi interval berganti slide dalam ms. |
| `loop` | `boolean` | `true` | Kembali ke slide pertama dari slide terakhir. |
| `class` | `string` | `undefined` | Kelas CSS kustom untuk pembungkus banner. |

### Carousel Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Arah orientasi pergerakan slide. |
| `loop` | `boolean` | `true` | Izinkan perputaran slide tanpa batas. |
| `autoplay` | `boolean` | `false` | Pengoperasian slide otomatis. |
| `autoplayInterval` | `number` | `5000` | Durasi ganti slide (ms). |
