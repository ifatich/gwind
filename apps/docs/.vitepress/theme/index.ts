import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

/* Import Gwind components for live previews */
import * as Gwind from '../../../../packages/ui/src/components/ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    /* Register all components globally with Gw prefix */
    Object.entries(Gwind).forEach(([name, component]) => {
      app.component(`Gw${name}`, component)
    })
  },
} satisfies Theme
