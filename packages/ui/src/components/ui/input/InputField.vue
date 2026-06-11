<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, useAttrs, useId, useSlots } from 'vue'
import { cn } from '../../../lib/utils'
import { Label } from '../label'
import Input from './Input.vue'

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
  type?: string
  fieldSize?: 'short' | 'long'
  prefix?: string
  suffix?: string
  class?: HTMLAttributes['class']
  labelClass?: HTMLAttributes['class']
  inputClass?: HTMLAttributes['class']
  captionClass?: HTMLAttributes['class']
  prefixClass?: HTMLAttributes['class']
  suffixClass?: HTMLAttributes['class']
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
const isLong = computed(() => props.fieldSize === 'long')
const isGrouped = computed(() => Boolean(props.prefix || props.suffix || slots.prefix || slots.suffix))
const inputValue = computed(() => props.modelValue ?? props.defaultValue ?? (attrs.value as string | number | undefined) ?? '')
const controlPaddingClass = computed(() =>
  cn(
    slots['left-icon'] && 'pl-11',
    slots['right-icon'] && !slots.action && 'pr-11',
    slots.action && 'pr-20',
  ),
)

function handleTextareaInput(event: Event) {
  emits('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <div :class="cn('flex w-full flex-col gap-1', props.class)">
    <Label
      v-if="label || slots.label"
      :for="fieldId"
      :class="
        cn(
          'inline-flex h-5 items-center gap-1 overflow-hidden text-black-800 !leading-5',
          disabled && 'text-black-600',
          props.labelClass,
        )
      "
    >
      <slot name="label">{{ label }}</slot>
      <slot name="label-icon" />
    </Label>

    <div class="flex flex-col gap-2">
      <div class="relative">
        <div
          v-if="slots['left-icon'] && !isGrouped"
          class="pointer-events-none absolute left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black-600"
        >
          <slot name="left-icon" />
        </div>

        <textarea
          v-if="isLong"
          v-bind="attrs"
          :id="fieldId"
          :disabled="disabled"
          :value="inputValue"
          :aria-invalid="error ? 'true' : undefined"
          :aria-describedby="hasCaption ? captionId : undefined"
          :class="
            cn(
              'flex min-h-20 w-full resize-none rounded-md !border border-[#eeeeef] bg-white px-3 py-3 text-omicron font-semibold leading-6 text-black-800 outline-none transition-colors duration-100 placeholder:text-black-500 hover:border-lime-600 focus:border-lime-500 focus-visible:border-lime-500 focus-visible:outline-none focus-visible:ring-0',
              'disabled:cursor-not-allowed disabled:border-[#eeeeef] disabled:bg-[#eeeeef] disabled:text-black-600 disabled:placeholder:text-black-600 disabled:hover:border-[#eeeeef] disabled:focus:border-[#eeeeef]',
              controlPaddingClass,
              props.inputClass,
            )
          "
          @input="handleTextareaInput"
        />

        <div
          v-else-if="isGrouped"
          :class="
            cn(
              'flex h-12 w-full overflow-hidden rounded-md border border-[#eeeeef] bg-white transition-colors duration-100 hover:border-lime-600 focus-within:border-lime-500',
              disabled && 'border-[#eeeeef] bg-[#eeeeef] hover:border-[#eeeeef] focus-within:border-[#eeeeef]',
            )
          "
        >
          <div
            v-if="prefix || slots.prefix"
            :class="
              cn(
                'flex h-full shrink-0 items-center justify-center border-r border-[#eeeeef] bg-black-100 px-5 text-omicron font-semibold leading-6 text-black-600',
                disabled && 'bg-[#eeeeef]',
                props.prefixClass,
              )
            "
          >
            <slot name="prefix">{{ prefix }}</slot>
          </div>

          <div class="relative flex min-w-0 flex-1 items-center">
            <div
              v-if="slots['left-icon']"
              class="pointer-events-none absolute left-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black-600"
            >
              <slot name="left-icon" />
            </div>

            <Input
              v-bind="attrs"
              :id="fieldId"
              :type="type"
              :disabled="disabled"
              :model-value="modelValue"
              :default-value="defaultValue"
              :aria-invalid="error ? 'true' : undefined"
              :aria-describedby="hasCaption ? captionId : undefined"
              :class="
                cn(
                  'h-full min-w-0 rounded-none !border-0 bg-transparent focus:border-transparent focus-visible:border-transparent disabled:bg-transparent',
                  controlPaddingClass,
                  props.inputClass,
                )
              "
              @update:model-value="emits('update:modelValue', $event)"
            />

            <div
              v-if="slots['right-icon']"
              class="pointer-events-none absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black-600"
            >
              <slot name="right-icon" />
            </div>

            <div
              v-if="slots.action"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-omicron font-extrabold leading-6 text-lime-500"
            >
              <slot name="action" />
            </div>
          </div>

          <div
            v-if="suffix || slots.suffix"
            :class="
              cn(
                'flex h-full w-[98px] shrink-0 items-center justify-center border-l border-[#eeeeef] bg-black-100 text-omicron font-semibold leading-6 text-black-600',
                disabled && 'bg-[#eeeeef]',
                props.suffixClass,
              )
            "
          >
            <slot name="suffix">{{ suffix }}</slot>
          </div>
        </div>

        <Input
          v-else
          v-bind="attrs"
          :id="fieldId"
          :type="type"
          :disabled="disabled"
          :model-value="modelValue"
          :default-value="defaultValue"
          :aria-invalid="error ? 'true' : undefined"
          :aria-describedby="hasCaption ? captionId : undefined"
          :class="
            cn(
              controlPaddingClass,
              props.inputClass,
            )
          "
          @update:model-value="emits('update:modelValue', $event)"
        />

        <div
          v-if="slots['right-icon'] && !isGrouped"
          class="pointer-events-none absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-black-600"
        >
          <slot name="right-icon" />
        </div>

        <div
          v-if="slots.action && !isGrouped"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-omicron font-extrabold leading-6 text-lime-500"
        >
          <slot name="action" />
        </div>
      </div>

      <p
        v-if="hasCaption"
        :id="captionId"
        :class="
          cn(
            'h-[18px] truncate !text-omega font-semibold !leading-[18px]',
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
