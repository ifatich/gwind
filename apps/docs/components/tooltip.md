# Tooltip

A small pop-up box that appears when a user hovers over an element.

## Preview

<div class="gw-preview">
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
</div>

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
