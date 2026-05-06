# Card

Displays a card with header, content, and footer.

## Preview

<div class="gw-preview">
  <GwCard class="w-[350px]">
    <GwCardHeader>
      <GwCardTitle>Create project</GwCardTitle>
      <GwCardDescription>Deploy your new project in one-click.</GwCardDescription>
    </GwCardHeader>
    <GwCardContent>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <GwLabel for="name">Name</GwLabel>
          <GwInput id="name" placeholder="Name of your project" />
        </div>
      </div>
    </GwCardContent>
    <GwCardFooter class="flex justify-between">
      <GwButton variant="outline">Cancel</GwButton>
      <GwButton>Deploy</GwButton>
    </GwCardFooter>
  </GwCard>
</div>

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
