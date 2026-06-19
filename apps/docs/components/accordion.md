# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Installation

```bash
npx gwind-system-ui add accordion
```

## Preview

<ShadowPreview class="gwind-docs-preview">
    <div class="gwind-docs-preview-col">
        <div class="gwind-docs-preview-section">
            <div class="gwind-docs-preview-label">Single / collapsible</div>
            <GwAccordion type="single" collapsible class="w-full">
                <GwAccordionItem value="item-1">
                    <GwAccordionTrigger>Is it accessible?</GwAccordionTrigger>
                    <GwAccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </GwAccordionContent>
                </GwAccordionItem>
                <GwAccordionItem value="item-2">
                    <GwAccordionTrigger>Is it styled?</GwAccordionTrigger>
                    <GwAccordionContent>
                        Yes. It comes with default styles that matches the other components' aesthetic.
                    </GwAccordionContent>
                </GwAccordionItem>
                <GwAccordionItem value="item-3">
                    <GwAccordionTrigger>Is it animated?</GwAccordionTrigger>
                    <GwAccordionContent>
                        Yes. Animated by default, but you can disable it if you prefer.
                    </GwAccordionContent>
                </GwAccordionItem>
            </GwAccordion>
        </div>
    </div>
    <div class="gwind-docs-preview-col">
        <div class="gwind-docs-preview-section">
            <div class="gwind-docs-preview-label">Multiple</div>
            <GwAccordion type="multiple" :default-value="['item-1', 'item-2']" class="w-full">
                <GwAccordionItem value="item-1">
                    <GwAccordionTrigger>Content strategy</GwAccordionTrigger>
                    <GwAccordionContent>
                        Show multiple sections open when users need faster comparison.
                    </GwAccordionContent>
                </GwAccordionItem>
                <GwAccordionItem value="item-2">
                    <GwAccordionTrigger>Spacing system</GwAccordionTrigger>
                    <GwAccordionContent>
                        Keep content blocks short so the component remains scannable.
                    </GwAccordionContent>
                </GwAccordionItem>
            </GwAccordion>
        </div>
    </div>
</ShadowPreview>

---

## Variants

- `type="single"` for one open panel at a time.
- `type="multiple"` for multiple open panels.
- `collapsible` allows the currently open item to be closed again.

---

## Usage

```vue
<script setup lang="ts">
    import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    } from '@/components/ui/accordion'
</script>

<template>
    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
</template>
```
