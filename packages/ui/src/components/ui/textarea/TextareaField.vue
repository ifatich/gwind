<script setup lang="ts">
import { computed, useAttrs, useId, useSlots, type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { Label } from '../label'
import Textarea from './Textarea.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  id?: string
  label?: string
  caption?: string
  error?: string
  disabled?: boolean
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  labelClass?: HTMLAttributes['class']
  inputClass?: HTMLAttributes['class']
  captionClass?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const attrs = useAttrs()
const slots = useSlots()
const generatedId = useId()
const fieldId = computed(() => props.id ?? generatedId)
const captionId = computed(() => `${fieldId.value}-caption`)
const hasCaption = computed(() => Boolean(props.error || props.caption || slots.caption))
</script>

<template>
  <div :class="cn('flex w-full flex-col gap-1', props.class)">
    <Label
      v-if="label || slots.label"
      :for="fieldId"
      :class="
        cn(
          'inline-flex h-5 items-center gap-1 overflow-hidden text-black-800 !leading-5',
          props.labelClass,
        )
      "
    >
      <slot name="label">{{ label }}</slot>
      <slot name="label-icon" />
    </Label>

    <div class="flex flex-col gap-2">
      <div class="relative">
        <Textarea
          v-bind="attrs"
          :id="fieldId"
          :disabled="disabled"
          :model-value="modelValue"
          :default-value="defaultValue"
          :aria-invalid="error ? 'true' : undefined"
          :aria-describedby="hasCaption ? captionId : undefined"
          :class="
            cn(
              error && '!border-red-500 hover:!border-red-600 focus:!border-red-500',
              props.inputClass,
            )
          "
          @update:model-value="emits('update:modelValue', $event)"
        />
      </div>

      <p
        v-if="hasCaption"
        :id="captionId"
        :class="
          cn(
            'min-h-5 text-omega font-semibold',
            error ? 'text-red-500' : 'text-black-600',
            props.captionClass,
          )
        "
      >
        <slot name="caption">{{ error || caption }}</slot>
      </p>
    </div>
  </div>
</template>
