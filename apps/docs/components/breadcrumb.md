# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

## Preview

<div class="gw-preview">
  <GwBreadcrumb>
    <GwBreadcrumbList>
      <GwBreadcrumbItem>
        <GwBreadcrumbLink href="#">Home</GwBreadcrumbLink>
      </GwBreadcrumbItem>
      <GwBreadcrumbSeparator />
      <GwBreadcrumbItem>
        <GwBreadcrumbLink href="#">Components</GwBreadcrumbLink>
      </GwBreadcrumbItem>
      <GwBreadcrumbSeparator />
      <GwBreadcrumbItem>
        <GwBreadcrumbPage>Breadcrumb</GwBreadcrumbPage>
      </GwBreadcrumbItem>
    </GwBreadcrumbList>
  </GwBreadcrumb>
</div>

---

## Usage

```vue
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <GwBreadcrumbItem>
        <GwBreadcrumbLink href="/">Home</GwBreadcrumbLink>
      </GwBreadcrumbItem>
      <GwBreadcrumbSeparator />
      <GwBreadcrumbItem>
        <GwBreadcrumbLink href="/components">Components</GwBreadcrumbLink>
      </GwBreadcrumbItem>
      <GwBreadcrumbSeparator />
      <GwBreadcrumbItem>
        <GwBreadcrumbPage>Breadcrumb</GwBreadcrumbPage>
      </GwBreadcrumbItem>
    </GwBreadcrumbList>
  </Breadcrumb>
</template>
```
