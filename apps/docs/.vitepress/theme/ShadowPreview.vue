<script setup lang="ts">
import { computed, onMounted, provide, shallowRef, useAttrs } from 'vue'
import { GWIND_PORTAL_TARGET_KEY } from '../../../../packages/ui/src/lib/portal'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const portalRootRef = shallowRef<HTMLElement>()
const portalTarget = shallowRef<HTMLElement>()

provide(GWIND_PORTAL_TARGET_KEY, portalTarget)

const previewAttrs = computed(() => {
  const { class: className, ...rest } = attrs

  return {
    ...rest,
    class: ['gwind-docs-preview', className],
  }
})

onMounted(() => {
  portalTarget.value = portalRootRef.value
})
</script>

<template>
  <div v-bind="previewAttrs">
    <slot />
    <div ref="portalRootRef" class="gwind-docs-preview-portal" />
  </div>
</template>
