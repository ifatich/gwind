<script setup lang="ts">
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { cn } from '../../../lib/utils'
import { type HTMLAttributes } from 'vue'

interface TabItem {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  modelValue?: string
  defaultValue?: string
  tabs: TabItem[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <TabsRoot
    :model-value="props.modelValue"
    :default-value="props.defaultValue || props.tabs[0]?.value"
    :class="cn('w-full', props.class)"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <!-- Tab list -->
    <TabsList
      :class="
        cn(
          'relative inline-flex h-9 w-full items-center justify-start gap-1 rounded-lg bg-[var(--gw-muted)] p-1 text-[var(--gw-muted-foreground)]',
        )
      "
    >
      <TabsIndicator
        class="absolute left-0 h-[calc(100%-8px)] rounded-md bg-[var(--gw-card)] shadow-sm transition-[width,transform] duration-200"
      />

      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.disabled"
        :class="
          cn(
            'relative z-10 inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all duration-200 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-ring)] focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            'data-[state=active]:text-[var(--gw-foreground)]',
          )
        "
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>

    <!-- Tab panels -->
    <div class="mt-3">
      <TabsContent
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :class="
          cn(
            'rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gw-ring)] focus-visible:ring-offset-2',
            'data-[state=active]:animate-fade-in',
          )
        "
      >
        <slot :name="tab.value" />
      </TabsContent>
    </div>
  </TabsRoot>
</template>
