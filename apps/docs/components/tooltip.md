# Tooltip

A small pop-up box that appears when a user hovers over an element.

## Installation

```bash
npx gwind-system-ui add tooltip
```

## Preview

<ShadowPreview class="gwind-docs-preview">
  <GwTooltipProvider>
    <GwTooltip>
      <GwTooltipTrigger as-child>
        <GwButton variant="outline">Hover</GwButton>
      </GwTooltipTrigger>
      <GwTooltipContent>
        <p>Add to library</p>
      </GwTooltipContent>
    </GwTooltip>
  </GwTooltipProvider>
</ShadowPreview>

---

## Variants

- `side="top"` places the tooltip above the trigger.
- `side="bottom"` places it below the trigger.
- `side="left"` and `side="right"` place it laterally.

## Advanced Notes

- Use `TooltipProvider` to tune delay and hover behavior globally.
- Customize `TooltipContent` with `side`, `align`, and `sideOffset` props when positioning matters.

## Usage

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```
