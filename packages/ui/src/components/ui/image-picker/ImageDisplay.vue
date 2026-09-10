<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch } from 'vue'
import { cn } from '../../../lib/utils'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    size?: 'small' | 'large-4:3' | 'large-1:1'
    status?: 'filled' | 'filled-more' | 'empty' | 'broken'
    count?: number
    class?: HTMLAttributes['class']
    imageClass?: HTMLAttributes['class']
  }>(),
  {
    size: 'small',
    count: 1,
  },
)

const emit = defineEmits<{
  (e: 'error', event: Event): void
}>()

const isImageError = ref(false)

watch(
  () => props.src,
  () => {
    isImageError.value = false
  },
)

const currentStatus = computed(() => {
  if (props.status) return props.status
  if (isImageError.value) return 'broken'
  if (!props.src) return 'empty'
  return 'filled'
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'large-4:3':
      return 'h-[120px] w-[180px] rounded-xl'
    case 'large-1:1':
      return 'size-[120px] rounded-xl'
    case 'small':
    default:
      return 'size-[80px] rounded-lg'
  }
})

const handleImageError = (e: Event) => {
  isImageError.value = true
  emit('error', e)
}
</script>

<template>
  <div
    :class="
      cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-black-200 bg-white align-middle font-sans transition-all',
        sizeClasses,
        props.class,
      )
    "
  >
    <!-- FILLED STATE -->
    <template v-if="currentStatus === 'filled' && src">
      <img
        :src="src"
        :alt="alt ?? ''"
        :class="cn('h-full w-full object-cover', imageClass)"
        @error="handleImageError"
      >
    </template>

    <!-- FILLED MORE STATE -->
    <template v-else-if="currentStatus === 'filled-more' && src">
      <img
        :src="src"
        :alt="alt ?? ''"
        :class="cn('h-full w-full object-cover', imageClass)"
        @error="handleImageError"
      >
      <!-- Dark overlay with +1 / +count badge -->
      <div
        class="absolute inset-0 flex items-center justify-center bg-black-800/50 backdrop-blur-[0.5px]"
      >
        <span class="font-extrabold text-sigma text-white tracking-wide">
          {{ count }}+
        </span>
      </div>
    </template>

    <!-- EMPTY STATE ILLUSTRATION -->
    <template v-else-if="currentStatus === 'empty'">
      <div class="flex size-full flex-col items-center justify-center bg-white p-2 text-black-400">
        <svg class="size-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 10H8C6.89543 10 6 10.8954 6 12V28C6 29.1046 6.89543 30 8 30H32C33.1046 30 34 29.1046 34 28V12C34 10.8954 33.1046 10 32 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="14" cy="16" r="3" stroke="currentColor" stroke-width="2" />
          <path
            d="M34 25L26 18L12 30"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </template>

    <!-- BROKEN STATE ILLUSTRATION -->
    <template v-else-if="currentStatus === 'broken'">
      <div class="flex size-full flex-col items-center justify-center bg-white p-2 text-black-400">
        <svg class="size-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 10H8C6.89543 10 6 10.8954 6 12V28C6 29.1046 6.89543 30 8 30H32C33.1046 30 34 29.1046 34 28V12C34 10.8954 33.1046 10 32 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 28L18 20L22 24L26 18L34 28"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Broken / Slash overlay line -->
          <line
            x1="8"
            y1="32"
            x2="32"
            y2="8"
            class="stroke-red-500"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </template>
  </div>
</template>
