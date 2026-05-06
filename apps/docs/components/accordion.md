# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Preview

<div class="gw-preview">
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
