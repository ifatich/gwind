# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

## Installation

```bash
npx gwind-system-ui add breadcrumb
```

## Preview

<ShadowPreview class="gwind-docs-preview">
    <GwBreadcrumb>
        <GwBreadcrumbList>
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">Root</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">Lv1</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">Lv2</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">lv3</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbPage>lv4</GwBreadcrumbPage>
            </GwBreadcrumbItem>
        </GwBreadcrumbList>
    </GwBreadcrumb>
</ShadowPreview>

## With Ellipsis

<ShadowPreview class="gwind-docs-preview">
    <GwBreadcrumb>
        <GwBreadcrumbList>
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">Dashboard</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbLink href="#">Projects</GwBreadcrumbLink>
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbEllipsis />
            </GwBreadcrumbItem>
            <GwBreadcrumbSeparator />
            <GwBreadcrumbItem>
                <GwBreadcrumbPage>Design System</GwBreadcrumbPage>
            </GwBreadcrumbItem>
        </GwBreadcrumbList>
    </GwBreadcrumb>
</ShadowPreview>

---

## Variants

- Standard breadcrumb path.
- Collapsed breadcrumb with `BreadcrumbEllipsis` for long hierarchies.

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
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
    </Breadcrumb>
</template>
```
