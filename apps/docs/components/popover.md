# Popover

Displays rich content in a portal, triggered by a button.

## Installation

```bash
npx gwind-system-ui add popover
```

## Preview

<ShadowPreview class="gwind-docs-preview">
    <div class="grid gap-4 md:grid-cols-2">
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Top</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="top" class="w-60">
                <div class="grid gap-2">
                    <h4 class="font-medium leading-none">Top aligned</h4>
                    <p class="text-sm text-muted-foreground">Popover content appears above the trigger.</p>
                </div>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Bottom</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="bottom" class="w-60">
                <div class="grid gap-2">
                    <h4 class="font-medium leading-none">Bottom aligned</h4>
                    <p class="text-sm text-muted-foreground">Useful for menus, filters, and quick settings.</p>
                </div>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Left</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="left" class="w-60">
                <div class="grid gap-2">
                    <h4 class="font-medium leading-none">Left aligned</h4>
                    <p class="text-sm text-muted-foreground">Works well in dense toolbars.</p>
                </div>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Right</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="right" class="w-60">
                <div class="grid gap-2">
                    <h4 class="font-medium leading-none">Right aligned</h4>
                    <p class="text-sm text-muted-foreground">Keeps content close to the trigger when space allows.</p>
                </div>
            </GwPopoverContent>
        </GwPopover>
    </div>
</ShadowPreview>

---

## Variants

- `side="top"` for top placement.
- `side="bottom"` for bottom placement.
- `side="left"` and `side="right"` for lateral placement.

## Usage

```vue
<script setup lang="ts">
    import {
        Popover,
        PopoverContent,
        PopoverTrigger,
    } from '@/components/ui/popover'
    import {
        Button
    } from '@/components/ui/button'
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
