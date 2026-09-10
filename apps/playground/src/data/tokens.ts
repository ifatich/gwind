export interface ColorStep {
  hundreds: string;
  tens: string;
}

export interface ColorPalette {
  name: string;
  label?: string;
  description?: string;
  steps: ColorStep[];
}

export interface GreyElevation {
  level: string;
  name: string;
  token: string;
  role: string;
  hex: string;
}

export interface SemanticToken {
  token: string;
  label: string;
  role: string;
}

export interface SemanticCategory {
  name: string;
  description: string;
  tokens: SemanticToken[];
}

export interface TypographyToken {
  name: string;
  className: string;
  size: string;
  lineHeight: string;
  role: string;
}

export interface SpacingToken {
  name: string;
  value: string;
  width: string;
}

export interface RadiusToken {
  name: string;
  className: string;
  value: string;
  description: string;
}

export interface ShadowToken {
  name: string;
  className: string;
  value: string;
  description: string;
}

export interface MotionToken {
  name: string;
  varName: string;
  value: string;
  description: string;
}

export interface BreakpointToken {
  name: string;
  width: string;
  description: string;
}

export const colorPalettes: ColorPalette[] = [
  {
    name: "broccoli",
    label: "Broccoli",
    description: "Deep secondary green brand tone",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "lime",
    label: "Lime",
    description: "Primary brand green anchor",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "lime-dark",
    label: "Lime Dark",
    description: "High-contrast dark mode green (New in 0.3.0)",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "pear",
    label: "Pear",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "kiwi",
    label: "Kiwi",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "red",
    label: "Red",
    description: "Standard light mode destructive",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "red-dark",
    label: "Red Dark",
    description: "Desaturated dark mode destructive (New in 0.3.0)",
    steps: [
      { hundreds: "500", tens: "50" },
    ],
  },
  {
    name: "orange",
    label: "Orange",
    description: "Warning and gold status accent",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "yellow",
    label: "Yellow",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "gold",
    label: "Gold",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "turquoise",
    label: "Turquoise",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "blue",
    label: "Blue",
    description: "Informational actions & states",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "purple",
    label: "Purple",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
      { hundreds: "900", tens: "90" },
    ],
  },
  {
    name: "black",
    label: "Black",
    description: "6-step neutral surface & text scale (100–800)",
    steps: [
      { hundreds: "100", tens: "10" },
      { hundreds: "200", tens: "20" },
      { hundreds: "400", tens: "40" },
      { hundreds: "500", tens: "50" },
      { hundreds: "600", tens: "60" },
      { hundreds: "800", tens: "80" },
    ],
  },
];

export const greyDarkElevation: GreyElevation[] = [
  { level: "Level 0", name: "darkest", token: "grey-darkest", role: "Base Canvas & Root Background", hex: "#242429" },
  { level: "Level 1", name: "darker", token: "grey-darker", role: "Cards, Panels & Surface Bases", hex: "#2E2E34" },
  { level: "Level 2", name: "dark", token: "grey-dark", role: "Popovers, Modals & Floating Menus", hex: "#37373F" },
  { level: "Level 3", name: "lighter", token: "grey-lighter", role: "Elevated Surfaces, Active Tabs & Borders", hex: "#42424B" },
  { level: "Level 4", name: "light", token: "grey-light", role: "Interactive Hover & Muted Layers", hex: "#55555E" },
];

export const semanticColorCategories: SemanticCategory[] = [
  {
    name: "Surfaces & Layout",
    description: "App canvas, panels, and floating popovers",
    tokens: [
      { token: "background", label: "Background", role: "Root canvas background" },
      { token: "card", label: "Card", role: "Card background surface" },
      { token: "card-foreground", label: "Card Foreground", role: "Card primary text" },
      { token: "popover", label: "Popover", role: "Floating menu/popover background" },
      { token: "popover-foreground", label: "Popover Foreground", role: "Floating menu text" },
    ],
  },
  {
    name: "Content & Typography",
    description: "Text hierarchy and readable content colors",
    tokens: [
      { token: "foreground", label: "Foreground", role: "Default body text" },
      { token: "foreground-primary", label: "Foreground Primary", role: "Primary bold headlines" },
      { token: "foreground-secondary", label: "Foreground Secondary", role: "Subdued captions & labels" },
      { token: "foreground-tertiary", label: "Foreground Tertiary", role: "Subtle hints & disabled-style text" },
      { token: "foreground-green", label: "Foreground Green", role: "Brand green typography highlight" },
    ],
  },
  {
    name: "Brand & Primary Actions",
    description: "Core CTA, secondary triggers, and interaction accents",
    tokens: [
      { token: "primary", label: "Primary", role: "Core action button background" },
      { token: "primary-foreground", label: "Primary Foreground", role: "Text on primary action button" },
      { token: "primary-on-text", label: "Primary On Text", role: "Interactive brand text link" },
      { token: "secondary", label: "Secondary", role: "Secondary action background" },
      { token: "secondary-foreground", label: "Secondary Foreground", role: "Text on secondary action" },
      { token: "accent", label: "Accent", role: "Subtle interactive accent tint" },
      { token: "accent-foreground", label: "Accent Foreground", role: "Text on accent surfaces" },
      { token: "muted", label: "Muted", role: "Muted non-clickable fill" },
      { token: "muted-foreground", label: "Muted Foreground", role: "Muted metadata text" },
    ],
  },
  {
    name: "Feedback & Semantic States",
    description: "Status indications, alerts, and critical errors",
    tokens: [
      { token: "success", label: "Success", role: "Positive status & confirmation" },
      { token: "success-foreground", label: "Success Foreground", role: "Text on success surface" },
      { token: "warning", label: "Warning", role: "Alert & caution notifications" },
      { token: "warning-foreground", label: "Warning Foreground", role: "Text on warning surface" },
      { token: "destructive", label: "Destructive", role: "Error, danger, & delete actions" },
      { token: "destructive-foreground", label: "Destructive Foreground", role: "Text on destructive button" },
      { token: "destructive-on-text", label: "Destructive On Text", role: "Destructive text link color" },
      { token: "info", label: "Info", role: "Informational messages & banners" },
      { token: "info-foreground", label: "Info Foreground", role: "Text on info surface" },
    ],
  },
  {
    name: "Borders, Focus & Controls",
    description: "Input frames, dividers, and accessibility focus rings",
    tokens: [
      { token: "border", label: "Border", role: "Standard container border" },
      { token: "border-subtle", label: "Border Subtle", role: "Dividers and subtle borders" },
      { token: "input", label: "Input", role: "Form control outline border" },
      { token: "input-focus", label: "Input Focus", role: "Active field focus ring" },
      { token: "ring", label: "Ring", role: "Accessibility keyboard focus indicator" },
    ],
  },
];

export const typographyTokens: TypographyToken[] = [
  { name: "alpha", className: "text-alpha", size: "72px (4.5rem)", lineHeight: "108px (6.75rem)", role: "Display Hero Large" },
  { name: "beta", className: "text-beta", size: "60px (3.75rem)", lineHeight: "90px (5.625rem)", role: "Display Hero Medium" },
  { name: "gamma", className: "text-gamma", size: "48px (3rem)", lineHeight: "72px (4.5rem)", role: "Display Hero Small" },
  { name: "delta", className: "text-delta", size: "36px (2.25rem)", lineHeight: "54px (3.375rem)", role: "Page Headline H1" },
  { name: "epsilon", className: "text-epsilon", size: "30px (1.875rem)", lineHeight: "45px (2.8125rem)", role: "Section Header H2" },
  { name: "zeta", className: "text-zeta", size: "24px (1.5rem)", lineHeight: "36px (2.25rem)", role: "Subsection Header H3" },
  { name: "kappa", className: "text-kappa", size: "20px (1.25rem)", lineHeight: "30px (1.875rem)", role: "Card Title H4" },
  { name: "lambda", className: "text-lambda", size: "18px (1.125rem)", lineHeight: "27px (1.6875rem)", role: "Dialog & Sheet Title" },
  { name: "omicron", className: "text-omicron", size: "16px (1rem)", lineHeight: "24px (1.5rem)", role: "Body Default & Form Inputs" },
  { name: "sigma", className: "text-sigma", size: "14px (0.875rem)", lineHeight: "20px (1.25rem)", role: "Body Small & Controls" },
  { name: "omega", className: "text-omega", size: "12px (0.75rem)", lineHeight: "18px (1.125rem)", role: "Captions, Metadata & Badges" },
  { name: "atom", className: "text-atom", size: "10px (0.625rem)", lineHeight: "14px (0.875rem)", role: "Micro Hints, Badges & Tags" },
];

export const spacingTokens: SpacingToken[] = [
  { name: "gw-2", value: "2px (0.125rem)", width: "w-gw-2" },
  { name: "gw-4", value: "4px (0.25rem)", width: "w-gw-4" },
  { name: "gw-8", value: "8px (0.5rem)", width: "w-gw-8" },
  { name: "gw-16", value: "16px (1rem)", width: "w-gw-16" },
  { name: "gw-24", value: "24px (1.5rem)", width: "w-gw-24" },
  { name: "gw-32", value: "32px (2rem)", width: "w-gw-32" },
  { name: "gw-40", value: "40px (2.5rem)", width: "w-gw-40" },
  { name: "gw-48", value: "48px (3rem)", width: "w-gw-48" },
  { name: "gw-64", value: "64px (4rem)", width: "w-gw-64" },
  { name: "gw-80", value: "80px (5rem)", width: "w-gw-80" },
  { name: "gw-120", value: "120px (7.5rem)", width: "w-gw-120" },
];

export const radiusTokens: RadiusToken[] = [
  { name: "sm", className: "rounded-sm", value: "4px", description: "Small badges, chips & inputs" },
  { name: "md", className: "rounded-md", value: "6px", description: "Default buttons, cards & menus" },
  { name: "lg", className: "rounded-lg", value: "8px", description: "Modals, large banners & dialogs" },
  { name: "full", className: "rounded-full", value: "9999px", description: "Pills, avatars & circle icon buttons" },
];

export const shadowTokens: ShadowToken[] = [
  { name: "drop-1", className: "shadow-drop-1", value: "0px 0px 2px rgba(0,0,0,0.08), 0px 2px 6px rgba(0,0,0,0.14)", description: "Subtle elevation for cards, buttons & list items" },
  { name: "drop-2", className: "shadow-drop-2", value: "0px 0px 4px rgba(0,0,0,0.10), 0px 6px 14px rgba(0,0,0,0.16)", description: "Raised floating popovers, tooltips & modals" },
];

export const motionTokens: MotionToken[] = [
  { name: "Button Press Scale", varName: "--gwind-motion-scale-press", value: "0.98", description: "Subtle physical compression when standard buttons are pressed" },
  { name: "Icon Press Scale", varName: "--gwind-motion-scale-icon-press", value: "0.92", description: "Deeper physical feedback for smaller circular/icon action triggers" },
];

export const breakpointTokens: BreakpointToken[] = [
  { name: "mobile", width: "360px (22.5rem)", description: "Mobile devices and compact views" },
  { name: "tablet", width: "640px (40rem)", description: "Tablets and medium width viewports" },
  { name: "desktop", width: "1028px (64.25rem)", description: "Desktops and wide displays" },
];
