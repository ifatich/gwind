<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { cn } from '../../../lib/utils'
import { type HTMLAttributes } from 'vue'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectGroupOption {
  label: string
  items: SelectOption[]
}

interface Props {
  modelValue?: string
  placeholder?: string
  options?: SelectOption[]
  groups?: SelectGroupOption[]
  disabled?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option...',
  options: () => [],
  groups: () => [],
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <SelectRoot
    :model-value="props.modelValue"
    :disabled="props.disabled"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <SelectTrigger
      :class="
        cn(
          'flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-all duration-200',
          'placeholder:text-muted-foreground',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          '[&>span]:line-clamp-1',
          props.class,
        )
      "
    >
      <SelectValue :placeholder="placeholder" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="shrink-0 opacity-50"
      >
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
      </svg>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        :class="
          cn(
            'relative z-50 max-h-72 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-lg',
            'data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out',
          )
        "
        position="popper"
        :side-offset="6"
      >
        <SelectScrollUpButton
          class="flex h-6 cursor-default items-center justify-center bg-card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </SelectScrollUpButton>

        <SelectViewport
          class="h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] p-1"
        >
          <!-- Flat options -->
          <template v-if="options.length > 0">
            <SelectItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
              :class="
                cn(
                  'relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors duration-100',
                  'focus:bg-accent focus:text-accent-foreground',
                  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                )
              "
            >
              <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                <SelectItemIndicator>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </SelectItemIndicator>
              </span>
              <SelectItemText>{{ option.label }}</SelectItemText>
            </SelectItem>
          </template>

          <!-- Grouped options -->
          <template v-if="groups.length > 0">
            <SelectGroup v-for="group in groups" :key="group.label">
              <SelectLabel class="px-8 py-1.5 text-xs font-semibold text-muted-foreground">
                {{ group.label }}
              </SelectLabel>
              <SelectItem
                v-for="option in group.items"
                :key="option.value"
                :value="option.value"
                :disabled="option.disabled"
                :class="
                  cn(
                    'relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors duration-100',
                    'focus:bg-accent focus:text-accent-foreground',
                    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  )
                "
              >
                <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <SelectItemIndicator>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </SelectItemIndicator>
                </span>
                <SelectItemText>{{ option.label }}</SelectItemText>
              </SelectItem>
            </SelectGroup>
          </template>
        </SelectViewport>

        <SelectScrollDownButton
          class="flex h-6 cursor-default items-center justify-center bg-card"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
