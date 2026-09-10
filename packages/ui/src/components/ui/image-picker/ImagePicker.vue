<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, onUnmounted, ref, watch } from 'vue'
import { cn } from '../../../lib/utils'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogClose } from '../dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselIndicators, CarouselPrevious, CarouselNext } from '../carousel'
import { Button } from '../button'

const props = withDefaults(
  defineProps<{
    /** Bound via v-model. Accepts a File object, a URL string, or null. If multiple is true, accepts an array. */
    modelValue?: string | File | (string | File)[] | null
    multiple?: boolean
    size?: 'small' | 'large'
    aspectRatio?: '4:3' | '1:1'
    accept?: string
    disabled?: boolean
    maxSize?: number
    error?: string
    class?: HTMLAttributes['class']
    imageClass?: HTMLAttributes['class']
    previewTitle?: string
    metadata?: { takenBy?: string; timestamp?: string }
    metadataLabels?: { takenBy?: string; timestamp?: string }
    showDownload?: boolean
    downloadLabel?: string
    showRetake?: boolean
    retakeLabel?: string
  }>(),
  {
    modelValue: null,
    multiple: false,
    size: 'large',
    aspectRatio: '4:3',
    accept: 'image/*',
    disabled: false,
    maxSize: 2 * 1024 * 1024, // 2MB default
    previewTitle: 'Preview Foto',
    metadataLabels: () => ({ takenBy: 'Diambil oleh', timestamp: 'Waktu' }),
    showDownload: false,
    downloadLabel: 'Download',
    showRetake: false,
    retakeLabel: 'Ambil Ulang Foto',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | File | (string | File)[] | null): void
  (e: 'change', value: string | File | (string | File)[] | null): void
  (e: 'remove'): void
  (e: 'error', message: string): void
  (e: 'download', file: string | File): void
  (e: 'retake'): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const objectUrl = ref<string | null>(null)
const isPreviewOpen = ref(false)
const internalError = ref<string | null>(null)

const errorMessage = computed(() => props.error || internalError.value)

const objectUrlsMap = new Map<File, string>()

const cleanupObjectUrls = () => {
  objectUrlsMap.forEach(url => URL.revokeObjectURL(url))
  objectUrlsMap.clear()
}

onUnmounted(() => {
  cleanupObjectUrls()
})

const previewUrls = computed<string[]>(() => {
  const vals = Array.isArray(props.modelValue) ? props.modelValue : (props.modelValue ? [props.modelValue] : [])
  return vals.map(v => {
    if (typeof v === 'string') return v
    if (typeof File !== 'undefined' && v instanceof File) {
      if (!objectUrlsMap.has(v)) {
        objectUrlsMap.set(v, URL.createObjectURL(v))
      }
      return objectUrlsMap.get(v)!
    }
    return ''
  }).filter(Boolean)
})

const isFilled = computed(() => previewUrls.value.length > 0)

const triggerFileInput = () => {
  if (props.disabled) return
  internalError.value = null
  fileInputRef.value?.click()
}

const handleFileSelect = (files: FileList | File[] | null) => {
  if (!files || files.length === 0) return

  internalError.value = null
  const validFiles: File[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    // Validate file type against accept prop
    if (props.accept && props.accept !== '*') {
      const acceptPatterns = props.accept.split(',').map((p) => p.trim())
      const isAccepted = acceptPatterns.some((pattern) => {
        if (pattern.startsWith('.')) {
          return file.name.toLowerCase().endsWith(pattern.toLowerCase())
        }
        const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$')
        return regex.test(file.type)
      })
      if (!isAccepted) {
        const msg = 'Tipe file tidak didukung.'
        internalError.value = msg
        emit('error', msg)
        return
      }
    }

    if (props.maxSize && file.size > props.maxSize) {
      const maxMb = (props.maxSize / (1024 * 1024)).toFixed(1)
      const msg = `Ukuran file melebihi batas maksimum ${maxMb}MB.`
      internalError.value = msg
      emit('error', msg)
      return
    }

    validFiles.push(file)
  }

  if (validFiles.length > 0) {
    if (props.multiple) {
      emit('update:modelValue', validFiles)
      emit('change', validFiles)
    } else {
      emit('update:modelValue', validFiles[0])
      emit('change', validFiles[0])
    }
  }
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  handleFileSelect(target.files)
  // Reset input value so the same file can be re-selected
  if (target) target.value = ''
}

const onDragOver = (event: DragEvent) => {
  event.preventDefault()
  if (props.disabled) return
  isDragging.value = true
}

const onDragLeave = (event: DragEvent) => {
  event.preventDefault()
  isDragging.value = false
}

const onDrop = (event: DragEvent) => {
  event.preventDefault()
  if (props.disabled) return
  isDragging.value = false
  const files = event.dataTransfer?.files || null
  handleFileSelect(files)
}

const onEmptyClick = () => {
  if (props.disabled) return
  triggerFileInput()
}

const handleImageError = () => {
  const msg = 'Gagal memuat pratinjau gambar.'
  internalError.value = msg
  emit('error', msg)
}

const handleRemove = (event: Event) => {
  event.stopPropagation()
  if (props.disabled) return
  internalError.value = null
  emit('update:modelValue', null)
  emit('change', null)
  emit('remove')
  isPreviewOpen.value = false
}

const handleDownload = () => {
  if (previewUrls.value.length === 0) return
  
  // For multiple downloads, we trigger them sequentially or handle the first one.
  const filesToDownload = Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
  
  filesToDownload.forEach((fileVal, idx) => {
    if (!fileVal) return
    if (typeof fileVal === 'string') {
      emit('download', fileVal)
      const a = document.createElement('a')
      a.href = fileVal
      a.download = `downloaded_image_${idx}`
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else if (fileVal instanceof File) {
      emit('download', fileVal)
      const a = document.createElement('a')
      a.href = URL.createObjectURL(fileVal)
      a.download = fileVal.name || `downloaded_image_${idx}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  })
}

const handleRetake = () => {
  if (props.disabled) return
  isPreviewOpen.value = false
  internalError.value = null
  emit('update:modelValue', null)
  emit('change', null)
  emit('retake')
  triggerFileInput()
}
</script>

<template>
  <div class="relative w-full">
    <div
      :class="
        cn(
          'relative font-sans transition-all',
          size === 'small' ? 'size-[80px] shrink-0' : 'h-[160px] w-full max-w-[328px]',
          disabled && 'opacity-60 cursor-not-allowed',
          props.class,
        )
      "
    >
      <!-- Hidden native file input -->
      <input
        ref="fileInputRef"
        type="file"
        :multiple="multiple"
        :accept="accept"
        :disabled="disabled"
        class="hidden"
        aria-hidden="true"
        tabindex="-1"
        @change="onFileChange"
      >

      <!-- =============== SMALL SIZE =============== -->
      <template v-if="size === 'small'">
        <!-- Small: Empty Dropzone (No dashed border, fully fills container) -->
        <button
          v-if="!isFilled"
          type="button"
          :disabled="disabled"
          :class="
            cn(
              'group relative flex size-full cursor-pointer flex-col items-center justify-center bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
              disabled && 'pointer-events-none',
            )
          "
          aria-label="Pilih gambar"
          @click="onEmptyClick"
        >
          <!-- Icon: Image Upload Bootstrap Match -->
          <svg class="size-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12.1318 6.10547C12.0385 6.47121 11.9857 6.85287 11.9756 7.24512C11.8726 7.24373 11.7687 7.24225 11.6641 7.24121L10.7334 7.23633C8.05972 7.23633 5.87299 7.3468 4.16211 7.51855C3.73293 7.56159 3.37093 7.96979 3.31934 8.51953C3.19294 9.87127 3.11525 11.5402 3.11523 13.5176C3.11523 15.4955 3.19293 17.1636 3.31934 18.5156C3.37073 19.0657 3.73285 19.4745 4.16211 19.5176C5.86074 19.6891 8.05496 19.7988 10.7334 19.7988L11.2041 19.7979C13.3758 19.7872 15.2125 19.7025 16.7139 19.5723L17.3369 19.5146C17.7646 19.4711 18.1266 19.0588 18.1777 18.5039C18.2869 17.323 18.3516 15.6838 18.3516 13.5176V13.1416C18.3506 12.8779 18.3457 12.6224 18.3428 12.375C18.7323 12.2797 19.104 12.1404 19.4531 11.9619C19.4612 12.4482 19.4668 12.9664 19.4668 13.5176L19.4658 13.9004C19.4594 15.6614 19.4088 17.0691 19.3252 18.1621L19.2871 18.6113C19.1879 19.6877 18.4299 20.5507 17.4463 20.6504C15.703 20.8273 13.4654 20.9414 10.7334 20.9414L10.2598 20.9404C8.0707 20.9297 6.21009 20.8444 4.68555 20.7129L4.05273 20.6533C3.07004 20.5548 2.30928 19.6978 2.20898 18.625C2.07918 17.2367 2 15.532 2 13.5176C2.00001 11.5038 2.07921 9.79904 2.20898 8.41113C2.30924 7.33848 3.06978 6.48057 4.05273 6.38184C5.59407 6.22709 7.50657 6.12228 9.79688 6.09961L10.7334 6.09473C11.2149 6.09473 11.681 6.09871 12.1318 6.10547ZM12.084 11.6865C12.6379 11.2572 13.4313 11.3616 13.8662 11.96L16.9629 16.2197L17.0234 16.3096C17.5463 17.1556 17.0627 18.3431 16.0703 18.4443C14.7861 18.5773 13.0154 18.6572 10.6914 18.6572L10.375 18.6562L9.60645 18.6514C7.86445 18.6308 6.47902 18.5598 5.40918 18.4541C4.34712 18.3485 3.86496 17.0169 4.54492 16.1738L6.14746 14.1904L6.22656 14.1016C6.66423 13.6487 7.34883 13.5782 7.8623 13.9561L9.03711 14.8174L9.07617 14.8389C9.12973 14.8582 9.18805 14.843 9.23438 14.792L11.9131 11.8447L11.9932 11.7627L12.084 11.6865ZM12.8994 12.5791C12.8427 12.5529 12.7792 12.5675 12.7295 12.6221L10.0508 15.5693L9.96582 15.6553C9.5265 16.0597 8.87809 16.1045 8.38867 15.7471L7.21191 14.8838L7.1709 14.8613C7.11442 14.8415 7.05326 14.8607 7.00586 14.9189L5.4043 16.9014L5.37305 16.9502C5.29743 17.1034 5.38308 17.3041 5.5166 17.3174C6.55422 17.4199 7.90976 17.4887 9.62207 17.5088L10.3779 17.5146L11.4346 17.5127C13.3592 17.4975 14.8521 17.4223 15.959 17.3076C16.0961 17.2934 16.1845 17.0615 16.0693 16.9023L12.9717 12.6416L12.9404 12.6074L12.8994 12.5791ZM6.64551 8.18848C7.87637 8.18878 8.87493 9.21176 8.875 10.4727C8.87495 11.734 7.87648 12.7565 6.64551 12.7568C5.41401 12.7566 4.41509 11.7342 4.41504 10.4727C4.41511 9.2116 5.41412 8.18869 6.64551 8.18848ZM17.1035 3C19.5138 3 21.4705 4.95602 21.4707 7.36621C21.4707 9.77659 19.5139 11.7334 17.1035 11.7334C14.6933 11.7332 12.7373 9.77646 12.7373 7.36621C12.7375 4.95616 14.6935 3.00021 17.1035 3ZM6.64551 9.33008C6.02975 9.33029 5.53034 9.84244 5.53027 10.4727C5.53033 11.1035 6.02974 11.614 6.64551 11.6143C7.26064 11.614 7.75971 11.1034 7.75977 10.4727C7.7597 9.84249 7.26064 9.33038 6.64551 9.33008ZM17.1035 5.18359C16.8635 5.18381 16.667 5.38008 16.667 5.62012V6.92969H15.3574C15.1174 6.92969 14.9211 7.12624 14.9209 7.36621C14.9209 7.60638 15.1173 7.80371 15.3574 7.80371H16.667V9.11328C16.667 9.35331 16.8635 9.54959 17.1035 9.5498C17.3437 9.5498 17.541 9.35345 17.541 9.11328V7.80371H18.8506C19.0907 7.8037 19.2871 7.60637 19.2871 7.36621C19.2869 7.12624 19.0906 6.9297 18.8506 6.92969H17.541V5.62012C17.541 5.37995 17.3437 5.18359 17.1035 5.18359Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Small: Filled Preview -->
        <div
          v-else
          class="group relative size-[80px] z-[1]"
        >
          <Dialog v-model:open="isPreviewOpen">
            <DialogTrigger as-child>
              <div class="relative h-full w-full cursor-pointer">
                <img
                  :src="previewUrls[0]"
                  alt="Preview"
                  :class="cn('h-full w-full object-cover rounded-lg', imageClass)"
                  @error="handleImageError"
                >
                <div v-if="multiple && previewUrls.length > 1" class="absolute inset-0 flex items-center justify-center rounded-lg bg-black-800/50 text-white font-bold text-sigma">
                  +{{ previewUrls.length - 1 }}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent class="flex max-h-[90dvh] w-full flex-col overflow-hidden bg-white p-0 sm:max-w-md">
              <!-- Header -->
              <DialogHeader class="border-b border-black-100 px-4 py-4 sm:px-6">
                <DialogTitle class="text-lambda font-extrabold text-black-800">{{ previewTitle }}</DialogTitle>
              </DialogHeader>

              <!-- Body Container -->
              <div class="flex flex-col gap-4 overflow-y-auto p-4 sm:p-4">
                <!-- Image & Overlay -->
                <div class="relative w-full shrink-0 overflow-hidden rounded-xl border border-black-100">
                  <template v-if="previewUrls.length > 1">
                    <Carousel :opts="{ loop: true }" class="w-full">
                      <CarouselContent>
                        <CarouselItem v-for="(url, idx) in previewUrls" :key="idx">
                          <img :src="url" class="max-h-[50vh] w-full object-cover sm:max-h-[60vh]" alt="Preview" />
                        </CarouselItem>
                      </CarouselContent>
                      <div class="absolute inset-y-0 left-2 right-2 z-10 flex items-center justify-between pointer-events-none">
                        <CarouselPrevious class="pointer-events-auto !size-6 shadow-drop-1" />
                        <CarouselNext class="pointer-events-auto !size-6 shadow-drop-1" />
                      </div>
                      <div class="absolute bottom-10 left-0 flex w-full justify-center">
                        <CarouselIndicators />
                      </div>
                    </Carousel>
                  </template>
                  <template v-else>
                    <img :src="previewUrls[0]" class="max-h-[50vh] w-full object-cover sm:max-h-[60vh]" alt="Preview" />
                  </template>
                  
                  <div v-if="metadata" class="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between rounded-b-xl bg-black-800/75 p-2 text-omega font-semibold text-white">
                    <span v-if="metadata.takenBy">{{ metadataLabels.takenBy }} : {{ metadata.takenBy }}</span>
                    <span v-if="metadata.timestamp" class="text-right">{{ metadataLabels.timestamp }} : {{ metadata.timestamp }}</span>
                  </div>
                </div>

                <!-- Actions -->
                <div v-if="showDownload || showRetake" class="mt-2 flex w-full shrink-0 flex-col gap-2">
                  <Button v-if="showDownload" variant="primary" class="w-full" @click="handleDownload">{{ downloadLabel }}</Button>
                  <Button v-if="showRetake" variant="secondary" class="w-full" @click="handleRetake">{{ retakeLabel }}</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <!-- Remove Button (Bootstrap Match: top: -8px, right: -8px, size: 24px, bg-white) -->
          <button
            type="button"
            aria-label="Hapus gambar"
            class="absolute -right-2 -top-2 z-10 flex size-6 items-center justify-center rounded-full bg-white text-black-600 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 shadow-drop-1"
            @click="handleRemove"
          >
            <!-- Icon: Cross SVG Bootstrap Match -->
            <svg class="size-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </template>

      <!-- =============== LARGE SIZE =============== -->
      <template v-else>
        <!-- Large: Empty Dropzone -->
        <button
          v-if="!isFilled"
          type="button"
          :disabled="disabled"
          :class="
            cn(
              'group relative flex size-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-black-200 bg-white p-3 transition-colors hover:border-lime-500 hover:bg-lime-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
              isDragging && 'border-lime-500',
              disabled && 'pointer-events-none',
            )
          "
          aria-label="Pilih gambar"
          @click="onEmptyClick"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @drop="onDrop"
        >
          <!-- Icon: Image Upload Bootstrap Match (Large 80x80 inside center) -->
          <svg class="size-[80px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12.1318 6.10547C12.0385 6.47121 11.9857 6.85287 11.9756 7.24512C11.8726 7.24373 11.7687 7.24225 11.6641 7.24121L10.7334 7.23633C8.05972 7.23633 5.87299 7.3468 4.16211 7.51855C3.73293 7.56159 3.37093 7.96979 3.31934 8.51953C3.19294 9.87127 3.11525 11.5402 3.11523 13.5176C3.11523 15.4955 3.19293 17.1636 3.31934 18.5156C3.37073 19.0657 3.73285 19.4745 4.16211 19.5176C5.86074 19.6891 8.05496 19.7988 10.7334 19.7988L11.2041 19.7979C13.3758 19.7872 15.2125 19.7025 16.7139 19.5723L17.3369 19.5146C17.7646 19.4711 18.1266 19.0588 18.1777 18.5039C18.2869 17.323 18.3516 15.6838 18.3516 13.5176V13.1416C18.3506 12.8779 18.3457 12.6224 18.3428 12.375C18.7323 12.2797 19.104 12.1404 19.4531 11.9619C19.4612 12.4482 19.4668 12.9664 19.4668 13.5176L19.4658 13.9004C19.4594 15.6614 19.4088 17.0691 19.3252 18.1621L19.2871 18.6113C19.1879 19.6877 18.4299 20.5507 17.4463 20.6504C15.703 20.8273 13.4654 20.9414 10.7334 20.9414L10.2598 20.9404C8.0707 20.9297 6.21009 20.8444 4.68555 20.7129L4.05273 20.6533C3.07004 20.5548 2.30928 19.6978 2.20898 18.625C2.07918 17.2367 2 15.532 2 13.5176C2.00001 11.5038 2.07921 9.79904 2.20898 8.41113C2.30924 7.33848 3.06978 6.48057 4.05273 6.38184C5.59407 6.22709 7.50657 6.12228 9.79688 6.09961L10.7334 6.09473C11.2149 6.09473 11.681 6.09871 12.1318 6.10547ZM12.084 11.6865C12.6379 11.2572 13.4313 11.3616 13.8662 11.96L16.9629 16.2197L17.0234 16.3096C17.5463 17.1556 17.0627 18.3431 16.0703 18.4443C14.7861 18.5773 13.0154 18.6572 10.6914 18.6572L10.375 18.6562L9.60645 18.6514C7.86445 18.6308 6.47902 18.5598 5.40918 18.4541C4.34712 18.3485 3.86496 17.0169 4.54492 16.1738L6.14746 14.1904L6.22656 14.1016C6.66423 13.6487 7.34883 13.5782 7.8623 13.9561L9.03711 14.8174L9.07617 14.8389C9.12973 14.8582 9.18805 14.843 9.23438 14.792L11.9131 11.8447L11.9932 11.7627L12.084 11.6865ZM12.8994 12.5791C12.8427 12.5529 12.7792 12.5675 12.7295 12.6221L10.0508 15.5693L9.96582 15.6553C9.5265 16.0597 8.87809 16.1045 8.38867 15.7471L7.21191 14.8838L7.1709 14.8613C7.11442 14.8415 7.05326 14.8607 7.00586 14.9189L5.4043 16.9014L5.37305 16.9502C5.29743 17.1034 5.38308 17.3041 5.5166 17.3174C6.55422 17.4199 7.90976 17.4887 9.62207 17.5088L10.3779 17.5146L11.4346 17.5127C13.3592 17.4975 14.8521 17.4223 15.959 17.3076C16.0961 17.2934 16.1845 17.0615 16.0693 16.9023L12.9717 12.6416L12.9404 12.6074L12.8994 12.5791ZM6.64551 8.18848C7.87637 8.18878 8.87493 9.21176 8.875 10.4727C8.87495 11.734 7.87648 12.7565 6.64551 12.7568C5.41401 12.7566 4.41509 11.7342 4.41504 10.4727C4.41511 9.2116 5.41412 8.18869 6.64551 8.18848ZM17.1035 3C19.5138 3 21.4705 4.95602 21.4707 7.36621C21.4707 9.77659 19.5139 11.7334 17.1035 11.7334C14.6933 11.7332 12.7373 9.77646 12.7373 7.36621C12.7375 4.95616 14.6935 3.00021 17.1035 3ZM6.64551 9.33008C6.02975 9.33029 5.53034 9.84244 5.53027 10.4727C5.53033 11.1035 6.02974 11.614 6.64551 11.6143C7.26064 11.614 7.75971 11.1034 7.75977 10.4727C7.7597 9.84249 7.26064 9.33038 6.64551 9.33008ZM17.1035 5.18359C16.8635 5.18381 16.667 5.38008 16.667 5.62012V6.92969H15.3574C15.1174 6.92969 14.9211 7.12624 14.9209 7.36621C14.9209 7.60638 15.1173 7.80371 15.3574 7.80371H16.667V9.11328C16.667 9.35331 16.8635 9.54959 17.1035 9.5498C17.3437 9.5498 17.541 9.35345 17.541 9.11328V7.80371H18.8506C19.0907 7.8037 19.2871 7.60637 19.2871 7.36621C19.2869 7.12624 19.0906 6.9297 18.8506 6.92969H17.541V5.62012C17.541 5.37995 17.3437 5.18359 17.1035 5.18359Z" fill="currentColor"/>
          </svg>
        </button>

        <!-- Large: Filled Preview Card -->
        <div
          v-else
          class="relative flex size-full items-center justify-center rounded-md border border-dashed border-black-200 bg-white p-3"
        >
          <div
            :class="
              cn(
                'relative flex items-center justify-center rounded-xl border border-black-200 bg-black-100 z-[1]',
                aspectRatio === '1:1' ? 'size-[120px]' : 'h-[120px] w-[180px]',
              )
            "
          >
            <Dialog v-model:open="isPreviewOpen">
              <DialogTrigger as-child>
                <div class="relative h-full w-full cursor-pointer">
                  <img
                    :src="previewUrls[0]"
                    alt="Preview"
                    :class="cn('h-full w-full rounded-xl object-cover', imageClass)"
                    @error="handleImageError"
                  />
                  <div v-if="multiple && previewUrls.length > 1" class="absolute inset-0 flex items-center justify-center rounded-xl bg-black-800/50 text-white font-bold text-lambda">
                    +{{ previewUrls.length - 1 }}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent class="flex max-h-[90dvh] w-full flex-col overflow-hidden bg-white p-0 sm:max-w-md">
                <!-- Header -->
                <DialogHeader class="border-b border-black-100 px-4 py-4 sm:px-6">
                  <DialogTitle class="text-lambda font-extrabold text-black-800">{{ previewTitle }}</DialogTitle>
                </DialogHeader>

                <!-- Body Container -->
                <div class="flex flex-col gap-4 overflow-y-auto p-4 sm:p-4">
                  <!-- Image & Overlay -->
                  <div class="relative w-full shrink-0 overflow-hidden rounded-xl border border-black-100">
                    <template v-if="previewUrls.length > 1">
                      <Carousel :opts="{ loop: true }" class="w-full">
                        <CarouselContent>
                          <CarouselItem v-for="(url, idx) in previewUrls" :key="idx">
                            <img :src="url" class="max-h-[50vh] w-full object-cover sm:max-h-[60vh]" alt="Preview" />
                          </CarouselItem>
                        </CarouselContent>
                        <div class="absolute inset-y-0 left-2 right-2 z-10 flex items-center justify-between pointer-events-none">
                          <CarouselPrevious class="pointer-events-auto !size-6 shadow-drop-1" />
                          <CarouselNext class="pointer-events-auto !size-6 shadow-drop-1" />
                        </div>
                        <div class="absolute bottom-10 left-0 flex w-full justify-center">
                          <CarouselIndicators />
                        </div>
                      </Carousel>
                    </template>
                    <template v-else>
                      <img :src="previewUrls[0]" class="max-h-[50vh] w-full object-cover sm:max-h-[60vh]" alt="Preview" />
                    </template>
                    
                    <div v-if="metadata" class="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between rounded-b-xl bg-black-800/75 p-2 text-omega font-semibold text-white">
                      <span v-if="metadata.takenBy">{{ metadataLabels.takenBy }} : {{ metadata.takenBy }}</span>
                      <span v-if="metadata.timestamp" class="text-right">{{ metadataLabels.timestamp }} : {{ metadata.timestamp }}</span>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div v-if="showDownload || showRetake" class="mt-2 flex w-full shrink-0 flex-col gap-2">
                    <Button v-if="showDownload" variant="primary" class="w-full" @click="handleDownload">{{ downloadLabel }}</Button>
                    <Button v-if="showRetake" variant="secondary" class="w-full" @click="handleRetake">{{ retakeLabel }}</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <!-- Remove Button Badge (Bootstrap Match: top: 4px, right: 4px, size: 20px, bg: red-500) -->
            <button
              type="button"
              aria-label="Hapus gambar"
              class="absolute right-1 top-1 z-10 flex size-5 items-center justify-center rounded-full bg-red-500 text-white shadow-xs transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
              @click="handleRemove"
            >
              <!-- Icon: Cross SVG Bootstrap Match -->
              <svg class="size-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </template>
    </div>

    <!-- Error Message matching InputField styling -->
    <p
      v-if="errorMessage"
      class="mt-2 min-h-5 w-full truncate text-omega font-semibold text-red-500"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
