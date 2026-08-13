<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    /** Bound via v-model. Accepts a File object or null. */
    modelValue?: File | null
    title?: string
    /** Allowed file extensions or types, e.g. '.pdf,.csv'. Note: 'image/*' is blocked by default. */
    accept?: string
    disabled?: boolean
    /** Maximum file size in bytes */
    maxSize?: number
    error?: string
    rightAction?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    modelValue: null,
    title: 'Title',
    accept: '',
    disabled: false,
    maxSize: 5 * 1024 * 1024, // 5MB default
    rightAction: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: File | null): void
  (e: 'change', value: File | null): void
  (e: 'remove'): void
  (e: 'error', message: string): void
  (e: 'action-click'): void
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const internalError = ref<string | null>(null)

const errorMessage = computed(() => props.error || internalError.value)
const isFilled = computed(() => !!props.modelValue)

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const triggerFileInput = () => {
  if (props.disabled) return
  internalError.value = null
  fileInputRef.value?.click()
}

const handleFileSelect = (file: File | null) => {
  if (!file) return

  internalError.value = null

  // Restrict images based on user request (cannot input image)
  if (file.type.startsWith('image/')) {
    const msg = 'File gambar tidak diperbolehkan.'
    internalError.value = msg
    emit('error', msg)
    return
  }

  // Validate file type against accept prop if provided
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

const handleRemove = (event: Event) => {
  event.stopPropagation()
  if (props.disabled) return
  internalError.value = null
  emit('update:modelValue', null)
  emit('change', null)
  emit('remove')
}
</script>

<template>
  <div :class="cn('relative w-full max-w-[603px] font-sans flex flex-col gap-1', props.class)">
    <div v-if="title || rightAction" class="flex items-center justify-between w-full">
      <p v-if="title" class="text-[14px] font-extrabold text-[#252528] leading-[20px]">
        {{ title }}
      </p>
      <button 
        v-if="rightAction && !isFilled"
        type="button"
        class="text-[12px] font-extrabold text-[#00ab4e] bg-white px-[10px] py-[3px] rounded-[4px] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
        @click="emit('action-click')"
      >
        Action
      </button>
    </div>

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

    <!-- Empty State -->
    <button
      v-if="!isFilled"
      type="button"
      :disabled="disabled"
      :class="
        cn(
          'group relative flex w-full cursor-pointer items-center justify-center rounded-[6px] border border-dashed border-[#bbbdc0] bg-white py-[38px] px-4 transition-colors hover:border-[#00ab4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2',
          isDragging && 'border-[#00ab4e] bg-[#e6f6ea]',
          disabled && 'pointer-events-none opacity-60',
        )
      "
      aria-label="Pilih file"
      @click="triggerFileInput"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
    >
      <div class="flex items-center gap-2">
        <svg class="size-5 shrink-0 text-[#252528]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0007 2.49967V14.1663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.83398 6.66634L10.0007 2.49967L14.1673 6.66634" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33398 17.5H16.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="text-[14px] font-semibold text-[#252528] text-center leading-[20px]">
          Tarik file ke sini atau <span class="font-extrabold text-[#00ab4e]">pilih dari perangkat</span>
        </p>
      </div>
    </button>

    <!-- Filled State -->
    <div
      v-else
      class="flex w-full items-center justify-between rounded-[6px] border border-solid border-[#00ab4e] bg-[#e6f6ea] px-[16px] py-[10px] transition-all"
    >
      <p class="text-[14px] font-extrabold text-[#252528] truncate mr-4 leading-[20px]">
        {{ modelValue?.name }} - {{ formatFileSize(modelValue?.size || 0) }}
      </p>
      <button
        type="button"
        aria-label="Hapus file"
        class="shrink-0 flex size-5 items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 text-[#58585B]"
        @click="handleRemove"
      >
        <svg class="size-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935ZM6.86279 6.86279C7.10973 6.61586 7.50106 6.60133 7.76498 6.81921L7.81291 6.86279L10.2771 9.32701L12.7413 6.86279L12.7893 6.81921C13.0532 6.60133 13.4445 6.61586 13.6915 6.86279C13.9538 7.12516 13.9538 7.55054 13.6915 7.81291L11.2272 10.2771L13.6915 12.7413C13.9538 13.0037 13.9538 13.4291 13.6915 13.6915C13.4445 13.9384 13.0532 13.9529 12.7893 13.735L12.7413 13.6915L10.2771 11.2272L7.8129 13.6915L7.76498 13.735C7.50105 13.9529 7.10972 13.9384 6.86278 13.6915C6.60042 13.4291 6.60042 13.0037 6.86278 12.7413L9.32701 10.2771L6.86279 7.81291C6.60042 7.55054 6.60042 7.12516 6.86279 6.86279Z" fill="currentColor"/>
        </svg>
      </button>
    </div>

    <!-- Hint / Error Text -->
    <p
      v-if="errorMessage"
      class="min-h-[18px] w-full truncate text-[12px] leading-[18px] font-semibold text-red-500"
    >
      {{ errorMessage }}
    </p>
    <p
      v-else-if="!isFilled"
      class="min-h-[18px] w-full text-[12px] leading-[18px] font-semibold text-[#939597]"
    >
      Ukuran file maksimal {{ maxSize ? (maxSize / (1024 * 1024)).toFixed(0) : 5 }} MB
    </p>
  </div>
</template>
