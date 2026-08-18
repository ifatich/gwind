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
            <GwPopoverContent side="top" title="Top aligned" class="w-60">
                <p class="text-sm text-black-500">Popover content appears above the trigger.</p>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Bottom</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="bottom" title="Bottom aligned" class="w-60">
                <p class="text-sm text-black-500">Useful for menus, filters, and quick settings.</p>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Left</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="left" title="Left aligned" class="w-60">
                <p class="text-sm text-black-500">Works well in dense toolbars.</p>
            </GwPopoverContent>
        </GwPopover>
        <GwPopover>
            <GwPopoverTrigger as-child>
                <GwButton variant="secondary">Right</GwButton>
            </GwPopoverTrigger>
            <GwPopoverContent side="right" title="Right aligned" class="w-60">
                <p class="text-sm text-black-500">Keeps content close to the trigger when space allows.</p>
            </GwPopoverContent>
        </GwPopover>
    </div>
</ShadowPreview>

---

## Real Case Example

A practical example of using a Popover for a quick settings or filter menu.

<ShadowPreview class="gwind-docs-preview">
    <GwPopover>
        <GwPopoverTrigger as-child>
            <GwButton variant="outline">Filter Data</GwButton>
        </GwPopoverTrigger>
        <GwPopoverContent title="Filter Options" class="w-80">
            <div class="flex flex-col gap-4">
                <p class="text-sm text-black-600">Adjust the filters below to refine the list.</p>
                <div class="flex items-center space-x-2">
                    <GwCheckbox id="active-only" />
                    <GwLabel for="active-only">Show active items only</GwLabel>
                </div>
                <div class="flex items-center space-x-2">
                    <GwCheckbox id="archived" />
                    <GwLabel for="archived">Include archived</GwLabel>
                </div>
            </div>
        </GwPopoverContent>
    </GwPopover>
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
        <PopoverContent title="Popover Title">
            Place content for the popover here.
        </PopoverContent>
    </Popover>
</template>
```
