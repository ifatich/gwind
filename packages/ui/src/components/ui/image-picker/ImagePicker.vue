<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, onUnmounted, ref, watch } from 'vue'
import { cn } from '../../../lib/utils'
import { Dialog, DialogContent, DialogTrigger } from '../dialog'

const props = withDefaults(
  defineProps<{
    /** Bound via v-model. Accepts a File object, a URL string, or null. */
    modelValue?: string | File | null
    size?: 'small' | 'large'
    aspectRatio?: '4:3' | '1:1'
    accept?: string
    disabled?: boolean
    maxSize?: number
    error?: string
    class?: HTMLAttributes['class']
    imageClass?: HTMLAttributes['class']
  }>(),
  {
    modelValue: null,
    size: 'large',
    aspectRatio: '4:3',
    accept: 'image/*',
    disabled: false,
    maxSize: 2 * 1024 * 1024, // 2MB default
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | File | null): void
  (e: 'change', value: File | string | null): void
  (e: 'remove'): void
  (e: 'error', message: string): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const objectUrl = ref<string | null>(null)
const isPreviewOpen = ref(false)
const internalError = ref<string | null>(null)

const errorMessage = computed(() => props.error || internalError.value)

/**
 * Revokes a previously created object URL to prevent memory leaks.
 */
const cleanupObjectUrl = () => {
  if (objectUrl.value) {
    URL.revokeObjectURL(objectUrl.value)
    objectUrl.value = null
  }
}

watch(
  () => props.modelValue,
  (newVal) => {
    internalError.value = null
    cleanupObjectUrl()
    if (newVal instanceof File) {
      objectUrl.value = URL.createObjectURL(newVal)
    }
  },
  { immediate: true },
)

onUnmounted(() => {
  cleanupObjectUrl()
})

const previewUrl = computed(() => {
  if (typeof props.modelValue === 'string' && props.modelValue.length > 0) {
    return props.modelValue
  }
  if (props.modelValue instanceof File) {
    return objectUrl.value
  }
  return null
})

const isFilled = computed(() => !!previewUrl.value)

const triggerFileInput = () => {
  if (props.disabled) return
  internalError.value = null
  fileInputRef.value?.click()
}

const handleFileSelect = (file: File | null) => {
  if (!file) return

  internalError.value = null

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

  emit('update:modelValue', file)
  emit('change', file)
}

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0] || null
  handleFileSelect(file)
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
  const file = event.dataTransfer?.files?.[0] || null
  handleFileSelect(file)
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
</script>

<template>
  <div class="relative w-max">
    <div
      :class="
        cn(
          'relative font-sans transition-all',
          size === 'small' ? 'size-[80px]' : 'h-[160px] w-[328px]',
          disabled && 'opacity-60 cursor-not-allowed',
          props.class,
        )
      "
    >
      <!-- Hidden native file input -->
      <input
        ref="fileInputRef"
        type="file"
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
              <img
                :src="previewUrl!"
                alt="Preview"
                :class="cn('h-full w-full object-cover rounded-[8px] cursor-pointer', imageClass)"
                @error="handleImageError"
              >
            </DialogTrigger>
            <DialogContent class="max-w-3xl border-0 bg-transparent p-0 shadow-none">
              <img :src="previewUrl!" class="max-h-[85vh] w-full object-contain rounded-md" alt="Preview">
            </DialogContent>
          </Dialog>

          <!-- Remove Button (Bootstrap Match: top: -8px, right: -8px, size: 24px, bg-white) -->
          <button
            type="button"
            aria-label="Hapus gambar"
            class="absolute -right-2 -top-2 z-10 flex size-6 items-center justify-center rounded-full bg-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 shadow-sm"
            @click="handleRemove"
          >
            <!-- Icon: Cross SVG Bootstrap Match -->
            <svg class="size-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z" fill="#58585B"/>
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
              'group relative flex size-full cursor-pointer flex-col items-center justify-center rounded-[6px] border border-dashed border-black-300 bg-white p-3 transition-colors hover:border-lime-500 hover:bg-lime-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
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
          class="relative flex size-full items-center justify-center rounded-[6px] border border-dashed border-black-200 bg-white p-3"
        >
          <div
            :class="
              cn(
                'relative flex items-center justify-center rounded-[12px] border border-black-200 bg-black-100 z-[1]',
                aspectRatio === '1:1' ? 'size-[120px]' : 'h-[120px] w-[180px]',
              )
            "
          >
            <Dialog v-model:open="isPreviewOpen">
              <DialogTrigger as-child>
                <img
                  :src="previewUrl!"
                  alt="Preview"
                  :class="cn('h-full w-full rounded-[12px] object-cover cursor-pointer', imageClass)"
                  @error="handleImageError"
                />
              </DialogTrigger>
              <DialogContent class="max-w-3xl border-0 bg-transparent p-0 shadow-none">
                <img :src="previewUrl!" class="max-h-[85vh] w-full object-contain rounded-md" alt="Preview" />
              </DialogContent>
            </Dialog>

            <!-- Remove Button Badge (Bootstrap Match: top: 4px, right: 4px, size: 20px, bg: #ae1e22) -->
            <button
              type="button"
              aria-label="Hapus gambar"
              class="absolute right-1 top-1 z-10 flex size-5 items-center justify-center rounded-full bg-[#ae1e22] shadow-xs transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
              @click="handleRemove"
            >
              <!-- Icon: Cross SVG Bootstrap Match -->
              <svg class="size-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z" fill="#58585B"/>
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
