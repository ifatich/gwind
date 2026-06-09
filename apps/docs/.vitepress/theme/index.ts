import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ShadowPreview from './ShadowPreview.vue'

/* Import Gwind components for live previews */
import * as Gwind from '../../../../packages/ui/src/components/ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShadowPreview', ShadowPreview)

    /* Register all components globally with Gw prefix */
    Object.entries(Gwind).forEach(([name, component]) => {
      // Handle the case where the export might be a function/object (Vue component)
      if (component && (typeof component === 'object' || typeof component === 'function')) {
        app.component(`Gw${name}`, component as any)
      }
    })
  },
} satisfies Theme
