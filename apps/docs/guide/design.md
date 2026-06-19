# Design

Dokumen ini adalah sumber aturan desain Gwind untuk designer, engineer, dan AI assistant yang membaca project ini melalui Figma MCP atau tooling serupa. Gunakan dokumen ini sebagai konteks utama sebelum membuat screen, component, token, atau rekomendasi desain.

## Product Intent

Gwind adalah design system Vue 3 untuk produk internal Pegadaian. Sistem ini harus terasa stabil, jelas, cepat dipindai, dan cocok untuk aplikasi operasional. Prioritaskan kepadatan informasi yang rapi, state yang eksplisit, aksesibilitas, dan konsistensi antar aplikasi.

Gwind bukan landing-page kit. Hindari visual yang terlalu dekoratif, layout promosi, gradient berlebihan, dan komposisi hero marketing ketika konteksnya aplikasi kerja.

## Package Map

| Kebutuhan | Package | Penggunaan |
| --- | --- | --- |
| CLI source component | `gwind-system-ui` | `npx gwind-system-ui add button` |
| Monorepo component library | `@gwind/ui` | Dependency internal dengan `workspace:*`; package ini bersifat private |
| Monorepo component styles | `@gwind/ui/styles` | Dipakai oleh docs dan playground di workspace |
| Design tokens | `gwind-v2` | `@import "gwind-v2/base.css";` dan `@import "gwind-v2/theme.css";` |

## Design Principles

- Clarity first: users should understand hierarchy, state, and action priority without reading supporting text.
- Operational density: use compact, scannable layouts for dashboards, tables, forms, filters, and approval flows.
- Consistent primitives: prefer existing Gwind components before creating a new visual pattern.
- Token driven: use semantic tokens and utilities, not one-off hardcoded colors, shadows, spacing, or typography.
- Accessible by default: keyboard navigation, focus states, disabled states, contrast, labels, and error messages are part of the design, not implementation details.
- Source ownership: generated UI should map to source components in `packages/ui/src/components/ui`.

## Visual Language

Gwind uses a clean enterprise interface style. Surfaces should be quiet, structured, and readable.

| Area | Rule |
| --- | --- |
| Shape | Prefer radius `6px` to `8px` for cards, fields, and menus. Avoid very pill-like cards unless component-specific. |
| Border | Use subtle borders for separation before heavy shadows. |
| Shadow | Use shadows only for overlays, menus, dialogs, popovers, and raised transient surfaces. |
| Density | Forms, tables, and toolbars should fit repeated workflows. Avoid oversized empty spaces. |
| Icons | Use icons to clarify actions, not as decoration. Pair icons with labels for primary actions. |
| Illustration | Avoid decorative illustration in product workflows unless explicitly requested. |

## Color Rules

Use semantic color roles from `gwind-v2` and Tailwind theme mappings.

| Role | Intent |
| --- | --- |
| `primary` | Main action and selected emphasis. |
| `secondary` | Secondary action or supporting emphasis. |
| `background` | Page or app background. |
| `foreground` | Primary text and icon color. |
| `muted` | Low-emphasis surfaces or disabled-looking context. |
| `border` / `input` | Structural boundaries and input borders. |
| `destructive` | Error, destructive action, or critical state. |

Do not create a screen dominated by one hue. Use the Pegadaian greens as brand anchors, balanced with neutral surfaces, readable foregrounds, and limited accents.

## Typography

The default font is Nunito Sans. Use typography to create clear hierarchy, not visual noise.

| Use | Guidance |
| --- | --- |
| Page title | Short, direct, task-oriented. |
| Section title | Smaller than page title; use only when it improves scanning. |
| Form label | Always present for data entry. Do not rely only on placeholder text. |
| Helper text | Use concise text for constraints, examples, and validation guidance. |
| Table text | Keep compact and readable; avoid wrapping important identifiers unnecessarily. |

Avoid viewport-based font sizing. Text must fit its container at mobile and desktop sizes.

## Spacing And Layout

- Use consistent spacing steps. Prefer `gap-2`, `gap-3`, `gap-4`, and `gap-6` depending on density.
- Keep toolbars and filter rows compact.
- Do not nest cards inside cards. Use sections, rows, grids, or dividers instead.
- Tables need clear column alignment, empty state, loading state, and pagination when data can grow.
- Forms need clear grouping, required/error states, and predictable submit/cancel placement.

## Component Patterns

Use these components as the first choice for common UI needs.

| Need | Component |
| --- | --- |
| Primary or secondary action | `Button` |
| Status marker | `Badge` |
| Text entry | `Input`, `InputField`, `Textarea` |
| Currency entry | `InputRupiah` |
| Binary choice | `Checkbox`, `Switch` |
| Single choice list | `RadioGroup` |
| Option picker | `Select`, `Combobox` |
| Disclosure | `Accordion`, `Tabs` |
| Overlay confirmation | `Dialog` |
| Contextual action menu | `Dropdown` |
| Lightweight explanation | `Tooltip` |
| Progress indication | `Progress`, `Spinner` |
| Data grid | `Table`, `DataTable` |
| Navigation trail | `Breadcrumb` |
| Page navigation | `Pagination` |
| Feedback message | `Toast`, `Alert` |

When a requested UI can be assembled from these primitives, do that before creating a new component.

## State Requirements

Every interactive design should account for these states:

- Default
- Hover
- Focus-visible
- Active or pressed
- Disabled
- Loading
- Error or invalid, when applicable
- Empty state, for data-driven surfaces
- Success or completion state, when applicable

Do not omit focus-visible treatment in design specs intended for implementation.

## Motion

Motion should clarify state changes. Follow the motion tokens and component standards in [Motion](/guide/motion).

- Keep most transitions between `120ms` and `200ms`.
- Use movement only for disclosure, overlay entrance, feedback, and spatial orientation.
- Respect `prefers-reduced-motion`.

## Figma MCP And AI Rules

When an AI assistant creates or edits Gwind designs in Figma:

1. Search for existing components and variables before creating new ones.
2. Reuse Gwind component names and variants from this documentation.
3. Use semantic token names when describing color, spacing, radius, and typography.
4. Prefer auto layout for frames, sections, forms, toolbars, lists, cards, and table rows.
5. Name layers by role, not appearance. Example: `Button / Primary`, `Form Field / Amount`, `Table Row / Customer`.
6. Include component states when designing reusable components.
7. Keep generated screens application-first, not marketing-first.
8. Do not introduce new color palettes, shadows, radius scales, icon styles, or typography scales unless the task explicitly asks for a new foundation.
9. If a design cannot map to existing Gwind components, document the gap and propose a new component name.
10. For design-to-code, map Figma components to CLI-generated source components and local imports.

## Design-To-Code Contract

For Vue implementation, prefer local imports from components generated by the CLI:

```ts
import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
```

For source component installation, prefer:

```bash
npx gwind-system-ui add button
```

Generated component code should use:

- Vue 3 `<script setup lang="ts">`
- `HTMLAttributes['class']` for class props
- `cn(...)` from the local utils path
- Reka UI primitives for accessible behavior when available
- Semantic Tailwind utilities and `gwind-v2` tokens

## New Component Checklist

Before adding a new component to Gwind:

- The need cannot be solved by composing existing components.
- Component has clear API, variants, states, and accessibility behavior.
- Styles use semantic tokens and established motion utilities.
- Component is exported from `packages/ui/src/components/ui/<name>/index.ts`.
- Registry is regenerated with `pnpm build:registry`.
- VitePress docs include installation, usage, states, and examples.
