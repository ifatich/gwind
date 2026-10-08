import { computed, inject, type InjectionKey, type Ref } from 'vue'

export type GwindPortalTarget = string | HTMLElement
export type GwindPortalTargetRef = Ref<GwindPortalTarget | undefined>

export const GWIND_PORTAL_TARGET_KEY: InjectionKey<GwindPortalTargetRef> = Symbol('gwindPortalTarget')

export function useGwindPortalTarget() {
  const portalTarget = inject(GWIND_PORTAL_TARGET_KEY, undefined)

  return computed(() => {
    if (portalTarget?.value) return portalTarget.value
    if (typeof document !== 'undefined') {
      const el = document.querySelector('[id*="portal"]')
      if (el) return el as HTMLElement
    }
    return 'body'
  })
}
