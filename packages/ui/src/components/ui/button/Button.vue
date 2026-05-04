<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type ButtonVariants, buttonVariants } from '.'

// Local ripple directive for portability
const vRipple = {
  mounted(el: HTMLElement) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    el.addEventListener('pointerdown', function (e: PointerEvent) {
      if (el.classList.contains('combobox')) return

      const rect = el.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.position = 'absolute'
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.background = 'rgba(0,0,0,0.15)'
      ripple.style.borderRadius = '50%'
      ripple.style.pointerEvents = 'none'
      ripple.style.transform = 'scale(0)'
      ripple.style.transition = 'transform 0.4s, opacity 0.6s'
      ripple.style.zIndex = '1'
      el.appendChild(ripple)

      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)'
        ripple.style.opacity = '0'
      })

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  },
}

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  disabled: false,
})
</script>

<template>
  <Primitive
    v-ripple
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
          state: props.disabled ? 'disabled' : undefined,
        }),
        props.class,
      )
    "
    :disabled="disabled"
  >
    <slot />
  </Primitive>
</template>
