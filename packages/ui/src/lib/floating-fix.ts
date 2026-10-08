import { onMounted, onUnmounted, type Ref } from 'vue'

export interface FloatingPopperFixOptions {
  side?: 'bottom' | 'top' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  alignOffset?: number
  matchWidth?: boolean
}

/**
 * Ensures Reka UI popper content wrappers (Select, Popover, Tooltip)
 * are accurately positioned in microfrontend/federated environments where Reka UI internal
 * reactivity may leave the popper wrapper stuck at `transform: translate(0px, -200%)`.
 */
export function useFloatingPopperFix(
  contentRef: Ref<any>,
  options: FloatingPopperFixOptions = {},
) {
  let cleanupListeners: (() => void) | null = null
  let observer: MutationObserver | null = null

  function getElement(): HTMLElement | null {
    const val = contentRef.value
    if (!val) return null
    if (val instanceof HTMLElement) return val
    if (val.$el && val.$el instanceof HTMLElement) return val.$el
    return null
  }

  function update() {
    const el = getElement()
    if (!el) return

    // 1. Locate strictly the popper wrapper
    const wrapper = el.closest('[data-reka-popper-content-wrapper]') as HTMLElement | null
    if (!wrapper || wrapper.id?.includes('portal') || wrapper.tagName === 'BODY') return

    // 2. Locate the trigger / anchor element
    let trigger: HTMLElement | null = null

    // Check ID matching via aria-controls or aria-describedby (tooltips)
    const idElements = Array.from(wrapper.querySelectorAll('[id]'))
    if (wrapper.id) idElements.unshift(wrapper)

    for (const elWithId of idElements) {
      const id = elWithId.id
      if (!id) continue
      const matched = (document.querySelector(`[aria-controls="${id}"]`)
        || document.querySelector(`[aria-describedby="${id}"]`)) as HTMLElement | null
      if (matched) {
        trigger = matched
        break
      }
    }

    // Specific button state fallbacks
    if (!trigger) {
      trigger = (document.querySelector('button[data-state*="delayed-open"]')
        || document.querySelector('button[data-state*="instant-open"]')
        || document.querySelector('button[role="combobox"][data-state="open"]')
        || document.querySelector('button[data-state="open"][aria-haspopup]')
        || document.querySelector('button[data-state="open"]')) as HTMLElement | null
    }

    // Fallback: active or focused element
    if (!trigger) {
      trigger = (document.activeElement as HTMLElement)?.closest('button, a') as HTMLElement | null
    }

    if (!trigger) return

    const tRect = trigger.getBoundingClientRect()
    const fRect = el.getBoundingClientRect()

    if (tRect.width === 0 && tRect.height === 0) return

    const side = options.side || 'bottom'
    const align = options.align || 'start'
    const sideOffset = options.sideOffset ?? 4
    const alignOffset = options.alignOffset ?? 0

    let x = 0
    let y = 0

    if (side === 'bottom') {
      y = tRect.bottom + sideOffset
      if (align === 'start') x = tRect.left + alignOffset
      else if (align === 'center') x = tRect.left + (tRect.width - fRect.width) / 2 + alignOffset
      else if (align === 'end') x = tRect.right - fRect.width + alignOffset

      // Flip to top if overflowing bottom of viewport
      if (y + fRect.height > window.innerHeight && tRect.top - fRect.height - sideOffset > 0) {
        y = tRect.top - fRect.height - sideOffset
      }
    } else if (side === 'top') {
      y = tRect.top - fRect.height - sideOffset
      if (align === 'start') x = tRect.left + alignOffset
      else if (align === 'center') x = tRect.left + (tRect.width - fRect.width) / 2 + alignOffset
      else if (align === 'end') x = tRect.right - fRect.width + alignOffset

      // Flip to bottom if overflowing top of viewport
      if (y < 0 && tRect.bottom + fRect.height + sideOffset < window.innerHeight) {
        y = tRect.bottom + sideOffset
      }
    }

    // Clamp x within viewport
    const minX = 8
    const maxX = Math.max(minX, window.innerWidth - (fRect.width || 200) - 8)
    x = Math.max(minX, Math.min(x, maxX))

    // Position wrapper with high specificity
    wrapper.style.position = 'fixed'
    wrapper.style.left = '0px'
    wrapper.style.top = '0px'
    wrapper.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`

    if (options.matchWidth) {
      wrapper.style.minWidth = `${Math.round(tRect.width)}px`
    }
  }

  onMounted(() => {
    // Run update on next animation frame
    requestAnimationFrame(() => {
      update()
      requestAnimationFrame(update)
    })

    const onScroll = () => update()
    const onResize = () => update()

    window.addEventListener('scroll', onScroll, { capture: true, passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    // MutationObserver to watch if Reka UI overwrites wrapper style with -200%
    const el = getElement()
    const wrapper = el?.closest('[data-reka-popper-content-wrapper]') as HTMLElement | null
    if (wrapper && !wrapper.id?.includes('portal')) {
      observer = new MutationObserver(() => {
        if (wrapper.style.transform.includes('-200%')) {
          update()
        }
      })
      observer.observe(wrapper, { attributes: true, attributeFilter: ['style'] })
    }

    cleanupListeners = () => {
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onResize)
      if (observer) {
        observer.disconnect()
        observer = null
      }
    }
  })

  onUnmounted(() => {
    if (cleanupListeners) {
      cleanupListeners()
      cleanupListeners = null
    }
  })

  return { update }
}
