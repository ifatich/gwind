# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

## Preview

<ShadowPreview class="gwind-docs-preview">
    <div class="gwind-docs-preview-col">
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
    <div class="gwind-docs-preview-col">
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
    </div>
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