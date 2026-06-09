# Card

Displays a card with header, content, and footer.

## Preview

<ShadowPreview class="gwind-docs-preview">
  <div class="gwind-docs-preview-col">
    <GwCard class="w-[350px]">
      <GwCardHeader>
        <GwCardTitle class="!mt-0">Create project</GwCardTitle>
        <GwCardDescription class="!mt-0">Deploy your new project in one-click.</GwCardDescription>
      </GwCardHeader>
      <GwCardContent>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <GwLabel for="name">Name</GwLabel>
            <GwInput id="name" placeholder="Name of your project" />
          </div>
        </div>
      </GwCardContent>
      <GwCardFooter class="flex justify-between p-0 pt-4">
        <GwButton variant="outline">Cancel</GwButton>
        <GwButton>Deploy</GwButton>
      </GwCardFooter>
    </GwCard>
    <GwCard class="w-[350px] border-none bg-muted/30 shadow-none">
      <GwCardHeader>
        <GwCardTitle>Minimal card</GwCardTitle>
        <GwCardDescription>A lighter layout for supporting content or summaries.</GwCardDescription>
      </GwCardHeader>
      <GwCardContent>
        <p class="text-sm text-muted-foreground">
          Use this pattern when the card should feel like a content surface rather than a framed container.
        </p>
      </GwCardContent>
    </GwCard>
  </div>
</ShadowPreview>

---

## Variants

- Standard framed card with header, content, and footer.
- Minimal card without border and shadow for softer surfaces.

## Usage

```vue
<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- Content goes here -->
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>
```

---

## Structure

The Card component is composed of several sub-components that you can use to build your custom layout:

- `Card`: The main container.
- `CardHeader`: The header section, usually containing title and description.
- `CardTitle`: The main title of the card.
- `CardDescription`: A supporting description.
- `CardContent`: The main body of the card.
- `CardFooter`: The bottom section for actions or metadata.

---

## Examples

### Account Settings
```vue
<Card>
  <CardHeader>
    <CardTitle>Account</CardTitle>
    <CardDescription>
      Make changes to your account here. Click save when you're done.
    </CardDescription>
  </CardHeader>
  <CardContent class="space-y-2">
    <!-- Form Inputs would go here -->
  </CardContent>
  <CardFooter>
    <Button>Save changes</Button>
  </CardFooter>
</Card>
```