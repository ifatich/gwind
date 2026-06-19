# Motion

Gwind motion exists to clarify state changes, not to decorate the interface.

## Source

Untuk consumer CLI, motion utilities dibuat oleh `gwind-system-ui init` di file `gwind.css` dan diimpor otomatis oleh CSS global:

```css
@import "./gwind.css";
```

Consumer tidak perlu mengimpor `packages/ui/dist/gwind-ui.css`. Di dalam monorepo, sumber kanonik stylesheet tetap berada di `packages/ui/src/styles/main.css` dan disalin ke registry saat `pnpm build:registry` dijalankan.

## Principles

- Use motion only for interaction feedback, state change, disclosure, or spatial orientation.
- Keep component micro-interactions short: `120ms` to `200ms` for most transitions.
- Use entrance motion that decelerates into place and exit motion that leaves quickly.
- Avoid parallax, large travel distance, blur-heavy motion, and looping motion in UI components.
- Respect `prefers-reduced-motion`.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--gwind-motion-duration-instant` | `80ms` | Tiny color or icon feedback. |
| `--gwind-motion-duration-fast` | `120ms` | Exit and quick state changes. |
| `--gwind-motion-duration-base` | `160ms` | Default enter and component feedback. |
| `--gwind-motion-duration-moderate` | `200ms` | Disclosure, accordion, short layout reveal. |
| `--gwind-motion-duration-slow` | `300ms` | Reserved for larger surfaces. |
| `--gwind-motion-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | General transitions. |
| `--gwind-motion-ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering or expanding content. |
| `--gwind-motion-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Closing or leaving content. |
| `--gwind-motion-scale-press` | `0.98` | Button-like press feedback. |
| `--gwind-motion-scale-icon-press` | `0.95` | Small controls like checkbox, radio, switch. |

## Utility Classes

| Utility | Purpose |
| --- | --- |
| `animate-in` | Standard enter animation. |
| `animate-out` | Standard exit animation. |
| `fade-in-0` / `fade-out-0` | Fade from or to transparent. |
| `zoom-in-95` / `zoom-out-95` | Subtle surface scale. |
| `zoom-in-75` / `zoom-out-75` | Indicator scale, such as checkbox or radio mark. |
| `slide-in-from-top-2` | Snackbar or top-origin content. |
| `slide-in-from-bottom-2` | Tab content or bottom-origin content. |
| `slide-in-from-left-2` / `slide-in-from-right-2` | Directional popover/tooltip content. |
| `animate-accordion-down` / `animate-accordion-up` | Disclosure height animation. |

## Component Standard

| Component type | Motion |
| --- | --- |
| Button and button-like controls | Color/border transition plus `active:scale-[0.98]`. |
| Checkbox, radio, switch | Press scale plus indicator enter animation. |
| Select, combobox, popover, tooltip | Fade + subtle zoom + side-aware slide. |
| Dialog | Overlay fade, content fade + zoom. |
| Accordion | Height animation using measured content height. |
| Tabs | Indicator transition and active content fade/slide. |
| Toast | Fade + short slide from top. |
| Avatar | Image/fallback fade + subtle zoom. |

## Accessibility

Gwind disables or collapses non-essential animation under `prefers-reduced-motion: reduce`. This follows the CSS reduced motion media feature and aligns with WCAG guidance for interaction-triggered animation.

References:
- [WCAG 2.1 Understanding SC 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- [Material Design 3 Motion](https://m3.material.io/styles/motion/overview/how-it-works)
