# Card

Displays a card with header, content, and footer.

## Installation

```bash
npx gwind-system-ui add card
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <GwCard class="w-[350px]">
      <GwCardHeader>
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-y-1">
            <GwCardTitle class="!mt-0">Create project</GwCardTitle>
            <GwCardDescription class="!mt-0">Deploy your new project in one-click.</GwCardDescription>
          </div>
        </div>
      </GwCardHeader>
      <GwCardContent>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <GwLabel for="name">Name</GwLabel>
            <GwInput id="name" placeholder="Name of your project" />
          </div>
        </div>
      </GwCardContent>
      <GwCardFooter>
        <GwButton class="w-full">Deploy</GwButton>
        <GwButton variant="outline" class="w-full">Cancel</GwButton>
      </GwCardFooter>
    </GwCard>
    <GwCard class="w-[350px]">
      <GwCardHeader>
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-y-1">
            <GwCardTitle class="!mt-0">Create project</GwCardTitle>
            <GwCardDescription class="!mt-0">Deploy your new project in one-click.</GwCardDescription>
          </div>
        </div>
      </GwCardHeader>
      <GwCardContent>
        <div class="mb-4 h-32 w-full overflow-hidden rounded-lg bg-black-200">
          <img src="https://picsum.photos/400/200" alt="Card Image" class="h-full w-full object-cover" />
        </div>
        <p class="text-sigma font-bold text-black-800">Headline</p>
        <p class="mt-1 text-sigma text-black-500">
          Supporting text or description related to the image above.
        </p>
      </GwCardContent>
      <GwCardFooter>
        <GwButton class="w-full">Deploy</GwButton>
        <GwButton variant="outline" class="w-full">Cancel</GwButton>
      </GwCardFooter>
    </GwCard>
    <GwCard class="w-[350px]">
      <GwCardHeader>
        <GwCardTitle>Minimal card</GwCardTitle>
      </GwCardHeader>
      <GwCardContent>
        <p class="text-sigma text-black-500">
          Use this pattern when the card should feel like a content surface.
        </p>
      </GwCardContent>
    </GwCard>
  </div>
</ShadowPreview>

---

## Variants

- **Standard Card**: Framed card with header, content, and footer.
- **Card with Image**: Includes a media object within the content block.
- **Minimal Card**: Stripped-down version with just the essential content.

## Usage

```vue
<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- Content goes here -->
    </CardContent>
    <CardFooter>
      <Button class="w-full">Deploy</Button>
      <Button variant="outline" class="w-full">Cancel</Button>
    </CardFooter>
  </Card>
</template>
```

---

## Structure

The Card component is composed of several sub-components that you can use to build your custom layout:

- `Card`: The main container.
- `CardHeader`: The header section, usually containing title and description.
- `CardTitle`: The main title of the card.
- `CardDescription`: A supporting description.
- `CardContent`: The main body of the card.
- `CardFooter`: The bottom section for actions or metadata.

---

## Examples

### Opsi A: Kartu Interaktif Lengkap (Formulir/Aksi)
```vue
<Card>
  <CardHeader>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-y-1">
        <CardTitle>Ubah Data</CardTitle>
        <CardDescription>Perbarui informasi Anda</CardDescription>
      </div>
      <X class="h-5 w-5 text-black-500" /> 
    </div>
  </CardHeader>

  <CardContent>
    <!-- Komponen Input -->
    <Input placeholder="Nama Lengkap" />
  </CardContent>

  <CardFooter>
    <Button class="w-full">Simpan</Button>
    <Button variant="outline" class="w-full">Batal</Button>
  </CardFooter>
</Card>
```

### Opsi B: Kartu Media / Artikel
```vue
<Card>
  <CardContent class="pt-4"> 
    <img src="/promo.jpg" class="mb-4 h-32 w-full rounded-lg object-cover" />
    <p class="text-omicron font-bold text-black-800">Promo Akhir Tahun</p>
    <p class="text-sigma text-black-500">Dapatkan diskon hingga 50%</p>
  </CardContent>
</Card>
```

### Opsi C: Kartu Polos / Minimalis
```vue
<Card>
  <CardContent class="pt-4">
    <p class="text-sigma font-bold text-black-800">Total Saldo</p>
    <p class="text-2xl font-bold text-black-800">Rp 15.000.000</p>
  </CardContent>
</Card>
```
