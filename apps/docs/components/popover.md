# Popover

Displays rich content in a portal, triggered by a button.

## Preview

<div class="gw-preview">
  <GwPopover>
    <GwPopoverTrigger as-child>
      <GwButton variant="outline">Open popover</GwButton>
    </GwPopoverTrigger>
    <GwPopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </div>
    </GwPopoverContent>
  </GwPopover>
</div>

## Usage

```vue
<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      Place content for the popover here.
    </PopoverContent>
  </Popover>
</template>
```
