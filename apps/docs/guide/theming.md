# Theming

Gwind uses **Tailwind CSS v4's** CSS-first configuration to define all design tokens. This means you can customize your entire design system by editing a single CSS file — no JavaScript config needed.

## Design Tokens

All tokens are defined using the `@theme` directive:

```css
@theme {
  /* Brand Colors */
  --color-brand-50: #f5f3ff;
  --color-brand-100: #ede9fe;
  --color-brand-200: #ddd6fe;
  --color-brand-300: #c4b5fd;
  --color-brand-400: #a78bfa;
  --color-brand-500: #8b5cf6;
  --color-brand-600: #7c3aed;
  --color-brand-700: #6d28d9;
  --color-brand-800: #5b21b6;
  --color-brand-900: #4c1d95;
  --color-brand-950: #2e1065;

  /* Neutral Colors */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  /* ... full scale from 50-950 */

  /* Semantic Colors */
  --color-success-500: #22c55e;
  --color-warning-500: #f59e0b;
  --color-destructive-500: #ef4444;
  --color-info-500: #3b82f6;
}
```

## Runtime Theming

Components reference CSS custom properties (prefixed with `--gw-`) for runtime theming:

```css
:root {
  --gw-primary: var(--color-brand-600);
  --gw-primary-foreground: #ffffff;
  --gw-background: var(--color-neutral-50);
  --gw-foreground: var(--color-neutral-950);
  /* ... */
}
```

## Dark Mode

Dark mode is supported via `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --gw-background: var(--color-neutral-950);
    --gw-foreground: var(--color-neutral-50);
    --gw-primary: var(--color-brand-500);
    /* ... */
  }
}
```

## Customizing

To change the brand color, simply update the `--color-brand-*` scale:

```css
@theme {
  --color-brand-500: #0ea5e9; /* Sky blue */
  --color-brand-600: #0284c7;
  /* ... */
}
```

All components will automatically pick up the new colors through the CSS custom property chain.
