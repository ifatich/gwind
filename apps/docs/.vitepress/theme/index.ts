import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

/* Import all Gwind components for live previews in docs */
import Button from '../../../../packages/ui/src/components/ui/button/Button.vue'
import Input from '../../../../packages/ui/src/components/ui/input/Input.vue'
import Badge from '../../../../packages/ui/src/components/ui/badge/Badge.vue'
import Card from '../../../../packages/ui/src/components/ui/card/Card.vue'
import CardHeader from '../../../../packages/ui/src/components/ui/card/CardHeader.vue'
import CardTitle from '../../../../packages/ui/src/components/ui/card/CardTitle.vue'
import CardDescription from '../../../../packages/ui/src/components/ui/card/CardDescription.vue'
import CardContent from '../../../../packages/ui/src/components/ui/card/CardContent.vue'
import CardFooter from '../../../../packages/ui/src/components/ui/card/CardFooter.vue'
import Dialog from '../../../../packages/ui/src/components/ui/dialog/Dialog.vue'
import Select from '../../../../packages/ui/src/components/ui/select/Select.vue'
import Tabs from '../../../../packages/ui/src/components/ui/tabs/Tabs.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    /* Register components globally so they can be used in .md files */
    app.component('GwButton', Button)
    app.component('GwInput', Input)
    app.component('GwBadge', Badge)
    app.component('GwCard', Card)
    app.component('GwCardHeader', CardHeader)
    app.component('GwCardTitle', CardTitle)
    app.component('GwCardDescription', CardDescription)
    app.component('GwCardContent', CardContent)
    app.component('GwCardFooter', CardFooter)
    app.component('GwDialog', Dialog)
    app.component('GwSelect', Select)
    app.component('GwTabs', Tabs)
  },
} satisfies Theme
