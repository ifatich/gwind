import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

/* Import all Gwind components for live previews in docs */
import Button from '../../../../packages/ui/src/components/ui/button/Button.vue'
import Input from '../../../../packages/ui/src/components/ui/input/Input.vue'
import Label from '../../../../packages/ui/src/components/ui/label/Label.vue'
import Badge from '../../../../packages/ui/src/components/ui/badge/Badge.vue'
import Card from '../../../../packages/ui/src/components/ui/card/Card.vue'
import CardHeader from '../../../../packages/ui/src/components/ui/card/CardHeader.vue'
import CardTitle from '../../../../packages/ui/src/components/ui/card/CardTitle.vue'
import CardDescription from '../../../../packages/ui/src/components/ui/card/CardDescription.vue'
import CardContent from '../../../../packages/ui/src/components/ui/card/CardContent.vue'
import CardFooter from '../../../../packages/ui/src/components/ui/card/CardFooter.vue'
/* Dialog modular components */
import Dialog from '../../../../packages/ui/src/components/ui/dialog/Dialog.vue'
import DialogContent from '../../../../packages/ui/src/components/ui/dialog/DialogContent.vue'
import DialogHeader from '../../../../packages/ui/src/components/ui/dialog/DialogHeader.vue'
import DialogTitle from '../../../../packages/ui/src/components/ui/dialog/DialogTitle.vue'
import DialogDescription from '../../../../packages/ui/src/components/ui/dialog/DialogDescription.vue'
import DialogFooter from '../../../../packages/ui/src/components/ui/dialog/DialogFooter.vue'
import DialogTrigger from '../../../../packages/ui/src/components/ui/dialog/DialogTrigger.vue'

/* Select modular components */
import Select from '../../../../packages/ui/src/components/ui/select/Select.vue'
import SelectTrigger from '../../../../packages/ui/src/components/ui/select/SelectTrigger.vue'
import SelectValue from '../../../../packages/ui/src/components/ui/select/SelectValue.vue'
import SelectContent from '../../../../packages/ui/src/components/ui/select/SelectContent.vue'
import SelectGroup from '../../../../packages/ui/src/components/ui/select/SelectGroup.vue'
import SelectItem from '../../../../packages/ui/src/components/ui/select/SelectItem.vue'
import SelectLabel from '../../../../packages/ui/src/components/ui/select/SelectLabel.vue'

/* Tabs modular components */
import TabGroup from '../../../../packages/ui/src/components/ui/tabs/TabGroup.vue'
import TabTriggerGroup from '../../../../packages/ui/src/components/ui/tabs/TabTriggerGroup.vue'
import TabTrigger from '../../../../packages/ui/src/components/ui/tabs/TabTrigger.vue'
import TabContent from '../../../../packages/ui/src/components/ui/tabs/TabContent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    /* Register components globally so they can be used in .md files */
    app.component('GwButton', Button)
    app.component('GwInput', Input)
    app.component('GwLabel', Label)
    app.component('GwBadge', Badge)
    app.component('GwCard', Card)
    app.component('GwCardHeader', CardHeader)
    app.component('GwCardTitle', CardTitle)
    app.component('GwCardDescription', CardDescription)
    app.component('GwCardContent', CardContent)
    app.component('GwCardFooter', CardFooter)
    app.component('GwDialog', Dialog)
    app.component('GwDialogContent', DialogContent)
    app.component('GwDialogHeader', DialogHeader)
    app.component('GwDialogTitle', DialogTitle)
    app.component('GwDialogDescription', DialogDescription)
    app.component('GwDialogFooter', DialogFooter)
    app.component('GwDialogTrigger', DialogTrigger)

    app.component('GwSelect', Select)
    app.component('GwSelectTrigger', SelectTrigger)
    app.component('GwSelectValue', SelectValue)
    app.component('GwSelectContent', SelectContent)
    app.component('GwSelectGroup', SelectGroup)
    app.component('GwSelectItem', SelectItem)
    app.component('GwSelectLabel', SelectLabel)

    app.component('GwTabGroup', TabGroup)
    app.component('GwTabTriggerGroup', TabTriggerGroup)
    app.component('GwTabTrigger', TabTrigger)
    app.component('GwTabContent', TabContent)
  },
} satisfies Theme
