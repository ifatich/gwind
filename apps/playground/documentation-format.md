ROLE:
Act as a Senior Frontend Architect, Design System Architect, UX Engineer, and UI Consistency Auditor.

OBJECTIVE:
Audit and improve the entire Playground/Component Documentation UI so that every section follows one consistent, scalable, production-grade structural pattern.

The Playground must not feel like a collection of independently designed cards. It must behave as ONE coherent Design System documentation environment.

IMPORTANT:
- Do NOT modify the underlying component/data logic unless explicitly required.
- Do NOT remove existing variants, states, props, examples, or information.
- Preserve all existing functionality and technical behavior.
- You MAY restructure the visual presentation, hierarchy, grouping, ordering, spacing, and layout.
- Do NOT optimize only the first visible section. Audit EVERY section from beginning to end.
- Do NOT introduce arbitrary styling differences between categories.
- If a section has a legitimate UX reason to deviate, document the reason and ensure the deviation still follows the global design language.
- Treat the existing implementation as the source of truth for functionality.
- Treat the Playground as a professional enterprise-grade Design System documentation surface, not a generic demo page.

==================================================
1. GLOBAL INFORMATION ARCHITECTURE
==================================================

Every section MUST follow a predictable hierarchy:

PAGE / PLAYGROUND
│
├── SECTION
│   ├── SECTION HEADER
│   │   ├── Section Number / Eyebrow
│   │   ├── Section Title
│   │   ├── Section Description
│   │   └── Optional Badge / Action
│   │
│   └── SECTION CARD
│       ├── Optional Card Header
│       │   ├── Card Title
│       │   ├── Card Description
│       │   └── Optional Action
│       │
│       ├── CARD CONTENT
│       │   ├── Variant / Example
│       │   ├── Component
│       │   ├── Supporting Information
│       │   └── Technical Information
│       │
│       └── Optional Card Footer
│
└── NEXT SECTION

Do not create a different hierarchy for each category unless there is a strong functional reason.

The user should immediately understand:
1. What section they are looking at.
2. Why the section exists.
3. What component/variant is being demonstrated.
4. What state the component represents.
5. What supporting or technical information is associated with it.

==================================================
2. SECTION CONTRACT
==================================================

Every section MUST be evaluated against the following contract:

SECTION ID:
- Unique semantic identifier.

SECTION NUMBER:
- Consistent numbering pattern.

SECTION TITLE:
- Clear, concise, and consistent naming.

SECTION PURPOSE:
- Explain why this section exists.

SECTION DESCRIPTION:
- Explain what the user/developer will learn or observe.

SECTION LAYOUT:
- Container behavior.
- Width.
- Maximum width.
- Internal padding.
- Column structure.
- Gap.
- Alignment.
- Vertical rhythm.
- Responsive behavior.

SECTION CONTENT:
- Identify every card.
- Identify every variant/example.
- Identify component hierarchy.
- Identify supporting information.

SECTION RESPONSIVE CONTRACT:
- Desktop behavior.
- Tablet behavior.
- Mobile behavior.
- Stacking behavior.
- Wrapping behavior.
- Overflow behavior.

==================================================
3. CARD CONTRACT
==================================================

Treat every card as a reusable layout primitive.

Every card must be evaluated for:

VISUAL:
- Background.
- Border.
- Border thickness.
- Border color.
- Radius.
- Shadow/elevation.
- Internal divider.
- Padding.
- Minimum height where appropriate.

LAYOUT:
- Width.
- Height behavior.
- Display mode.
- Grid/flex behavior.
- Internal alignment.
- Gap.
- Content density.
- Vertical rhythm.

HEADER:
- Title.
- Description.
- Badge.
- Optional action.

CONTENT:
- Variant layout.
- Component placement.
- Supporting text.
- Technical information.

FOOTER:
- Optional helper.
- Notes.
- Actions.
- Status information.

BEHAVIOR:
- Hover.
- Focus.
- Active.
- Selected.
- Disabled.
- Expand/collapse if applicable.

Do NOT allow visually similar cards to use slightly different:
- padding,
- radius,
- border,
- title spacing,
- grid gap,
- typography,
- alignment,
unless the difference is intentional and justified.

==================================================
4. VARIANT CONTRACT
==================================================

Every component example/variant inside a card must have an explicit structure.

For EACH variant determine:

VARIANT NAME:
Example:
- Default State
- Pre-filled Valid
- Disabled State
- Error State

PURPOSE:
Explain why this variant exists.

COMPONENT LABEL:
Explain what the component represents.

COMPONENT:
The actual interactive/rendered component.

STATE:
Explicitly identify the state being demonstrated.

VALUE:
Identify the displayed value where applicable.

RAW VALUE:
If applicable, expose the underlying/raw value separately from formatted UI value.

PROPS:
Identify the meaningful props being demonstrated.

VALIDATION:
- Valid.
- Invalid.
- Pending.
- Not applicable.

INTERACTION:
Explain what the user can do.

HELPER TEXT:
Explain what supporting instruction is shown.

ERROR MESSAGE:
Explain the error state where applicable.

TECHNICAL INFORMATION:
Only show technical information when useful for developers.
Do not allow technical metadata to visually overpower the actual component.

==================================================
5. COMPONENT ANATOMY
==================================================

For each component, identify all meaningful visual parts.

For example, an input component may contain:

COMPONENT
├── Label
├── Required Indicator
├── Input Container
│   ├── Leading Icon
│   ├── Input Text
│   └── Trailing Action
├── Helper Text
├── Error Message
└── Supporting Information

Each element must have consistent:
- spacing,
- alignment,
- typography,
- sizing,
- state behavior.

Do not manually style each component instance differently.

==================================================
6. STATE MATRIX
==================================================

For every interactive component, determine which states are applicable.

At minimum evaluate:

- Default
- Hover
- Focus
- Filled
- Empty
- Invalid / Error
- Disabled
- Read-only
- Loading
- Success
- Warning
- Maximum / Boundary
- Partial / Incomplete
- Selected
- Active

Do NOT blindly add states that are unsupported by the component.

For each applicable state define:

STATE:
Visual appearance:
Interaction:
Validation:
Value:
Helper/error:
Accessibility:
Transition:

If a state is not applicable, do not invent it.

==================================================
7. DATA CONTRACT
==================================================

Separate visual representation from underlying data.

For components involving formatting, masking, transformation, or validation:

DISPLAY VALUE:
What the user sees.

RAW VALUE:
What the application stores.

TRANSFORMATION:
How raw data becomes display data.

VALIDATION:
What constitutes valid data.

BOUNDARY:
Minimum/maximum length or value.

Example:

Raw:
3171021405920001

Display:
3171 0214 0592 0001

Do not accidentally change the data model while improving presentation.

==================================================
8. INTERACTION CONTRACT
==================================================

For every interactive example, define expected behavior.

Evaluate:

- Click.
- Focus.
- Keyboard input.
- Typing.
- Formatting.
- Validation.
- Clear/reset.
- Selection.
- Hover.
- Blur.
- Submit.
- Loading.
- Error recovery.

State transitions should be predictable.

Example:

Default
→ Focus
→ User Input
→ Filled
→ Validation
→ Success / Error

Do not create visual states that have no behavioral meaning.

==================================================
9. RESPONSIVE CONTRACT
==================================================

This is MANDATORY.

Audit every section and every card across:

1. Large Desktop
2. Desktop
3. Tablet
4. Mobile
5. Narrow Mobile

Do not merely state "responsive".

Explicitly define:

DESKTOP:
- Number of columns.
- Maximum content width.
- Gap.
- Card padding.
- Component sizing.

TABLET:
- Column behavior.
- Gap changes.
- Content wrapping.

MOBILE:
- Column collapse.
- Card padding.
- Component width.
- Button behavior.
- Text wrapping.
- Label wrapping.

NARROW MOBILE:
- Extreme width handling.
- Long text.
- Long values.
- Icons.
- Buttons.
- Error messages.

MANDATORY OVERFLOW RULES:

- No component may exceed its parent card.
- No content may cause unintended horizontal scrolling.
- No icon may overlap text.
- No button may escape the card boundary.
- No input may exceed available width.
- Long labels must wrap gracefully.
- Long helper/error messages must wrap.
- Long values must use an intentional truncation/wrapping strategy.
- Grid columns must collapse before content becomes cramped.
- Flex children must be allowed to shrink correctly.
- Fixed widths must be avoided unless technically required.
- `min-width: 0` behavior must be considered for flex/grid children.
- Card content must remain visually contained at every breakpoint.

==================================================
10. DESIGN SYSTEM CONSISTENCY
==================================================

Do not create one-off values unnecessarily.

Identify reusable tokens for:

SPACING:
- Section spacing.
- Card spacing.
- Component spacing.
- Label spacing.
- Helper spacing.

TYPOGRAPHY:
- Section title.
- Card title.
- Variant title.
- Body.
- Caption.
- Helper.
- Technical metadata.

COLOR:
- Primary.
- Text.
- Muted.
- Surface.
- Border.
- Success.
- Warning.
- Error.
- Disabled.

GEOMETRY:
- Card radius.
- Component radius.
- Button radius.
- Border thickness.

ELEVATION:
- Card shadow.
- Interactive elevation where applicable.

All sections should consume the same visual language.

Avoid:
- arbitrary margins,
- arbitrary font sizes,
- arbitrary border radii,
- random shadows,
- inconsistent green shades,
- inconsistent spacing,
- inconsistent alignment.

==================================================
11. VISUAL HIERARCHY
==================================================

Prioritize information in this order:

1. Section context
2. Component/variant identity
3. Actual component
4. User-facing supporting information
5. Technical/developer information

The actual component being demonstrated must remain the visual focal point.

Technical metadata must NOT dominate the UI.

Do not allow:
- excessive text density,
- unnecessary borders,
- redundant headings,
- competing badges,
- excessive visual noise.

==================================================
12. ACCESSIBILITY CONTRACT
==================================================

Evaluate:

- Semantic HTML.
- Proper label association.
- Keyboard navigation.
- Visible focus.
- Focus order.
- Accessible names.
- Icon-only button labels.
- Required state.
- Disabled state.
- Error state.
- Status announcements where necessary.
- Color contrast.
- Error indication must not depend only on color.
- Responsive text readability.

Do not sacrifice accessibility for visual consistency.

==================================================
13. EDGE CASE CONTRACT
==================================================

For every component, consider:

- Empty value.
- Very long value.
- Invalid value.
- Maximum value.
- Missing data.
- Loading.
- Error.
- Success.
- Disabled.
- Read-only.
- Very narrow viewport.
- Long label.
- Long helper text.
- Long error message.
- Multiple actions.
- Missing optional content.

The layout must remain structurally stable.

==================================================
14. SECTION-TO-SECTION CONSISTENCY AUDIT
==================================================

After auditing individual sections, perform a GLOBAL comparison.

Compare every section against every other section for:

- Section header structure.
- Section title typography.
- Description spacing.
- Badge placement.
- Card width.
- Card padding.
- Card radius.
- Card border.
- Card shadow.
- Grid structure.
- Column gap.
- Variant spacing.
- Component label typography.
- Helper text.
- Technical metadata.
- Vertical rhythm.
- Responsive behavior.
- Mobile stacking.
- Overflow handling.

If two sections perform the same structural role, they MUST look and behave consistently.

==================================================
15. DO NOT OVER-DESIGN
==================================================

The objective is NOT to make every card visually impressive.

The objective is:

CONSISTENCY
+
CLARITY
+
HIERARCHY
+
RESPONSIVENESS
+
ACCESSIBILITY
+
SCALABILITY

Prefer:
- clean,
- restrained,
- professional,
- predictable,
- information-dense but readable,
- enterprise Design System quality.

Avoid:
- decorative elements without purpose,
- excessive shadows,
- excessive colors,
- unnecessary cards inside cards,
- excessive badges,
- inconsistent visual treatments,
- visual noise.

==================================================
16. IMPLEMENTATION RULES
==================================================

Before modifying code:

1. Inspect the entire Playground.
2. Identify every section.
3. Identify every card.
4. Identify every variant.
5. Identify every component state.
6. Identify current responsive behavior.
7. Identify repeated patterns.
8. Identify inconsistencies.
9. Identify duplicated styling.
10. Identify structural problems.

Do NOT start by modifying the first section and then copying assumptions to the rest.

First build a GLOBAL DESIGN/STRUCTURAL MODEL.

Then apply it consistently.

If reusable layout primitives are appropriate, prefer them over duplicated markup.

Examples:

SectionContainer
DocumentationSection
DocumentationCard
VariantGrid
VariantItem
ComponentPreview
TechnicalMeta
StateBadge
ResponsiveGrid

Only introduce abstractions when they genuinely improve consistency and maintainability.

==================================================
17. REQUIRED AUDIT OUTPUT
==================================================

Before implementation, produce an audit in this structure:

A. GLOBAL STRUCTURE
- Current structure.
- Problems.
- Recommended structure.

B. SECTION INVENTORY
For every section:
- Section name.
- Purpose.
- Current structure.
- Problems.
- Recommended structure.

C. CARD INVENTORY
For every card:
- Card type.
- Content.
- Current layout.
- Problems.
- Recommended layout.

D. VARIANT INVENTORY
For every variant:
- Name.
- State.
- Purpose.
- Component.
- Supporting information.
- Missing information.

E. CONSISTENCY ISSUES
List all inconsistencies across sections.

F. RESPONSIVE ISSUES
List all potential overflow, wrapping, sizing, stacking, and breakpoint issues.

G. ACCESSIBILITY ISSUES
List all relevant issues.

H. DESIGN TOKEN ISSUES
Identify duplicated or inconsistent visual values.

I. PRIORITY
Classify issues:

P0 = Functional / broken / overflow
P1 = Major UX / structural inconsistency
P2 = Visual inconsistency
P3 = Minor polish

==================================================
18. REQUIRED IMPLEMENTATION OUTPUT
==================================================

After the audit, provide:

1. GLOBAL STRUCTURE
2. COMPONENT HIERARCHY
3. DESIGN TOKEN STRATEGY
4. SECTION CONTRACT
5. CARD CONTRACT
6. VARIANT CONTRACT
7. STATE MATRIX
8. RESPONSIVE CONTRACT
9. ACCESSIBILITY CONTRACT
10. EDGE CASE STRATEGY
11. IMPLEMENTATION PLAN
12. ACTUAL CODE CHANGES

==================================================
19. QUALITY GATE
==================================================

Before considering the task complete, verify:

[ ] Every section follows the same information hierarchy.
[ ] Every card follows the same structural pattern.
[ ] Every variant has a clear purpose.
[ ] Component state is explicit.
[ ] Data and display values are not accidentally mixed.
[ ] Desktop layout is consistent.
[ ] Tablet layout is consistent.
[ ] Mobile layout is consistent.
[ ] Narrow mobile does not break.
[ ] No component escapes its card.
[ ] No horizontal overflow exists unintentionally.
[ ] Long content behaves correctly.
[ ] Buttons remain inside their containers.
[ ] Icons do not overlap content.
[ ] Typography hierarchy is consistent.
[ ] Spacing follows a predictable scale.
[ ] Borders/radius/shadows are consistent.
[ ] Accessibility requirements are addressed.
[ ] Existing functionality remains intact.
[ ] Existing data remains intact.
[ ] No existing variant is accidentally removed.
[ ] No arbitrary one-off styling was introduced.
[ ] All sections from beginning to end have been audited.
[ ] The Playground feels like ONE Design System, not separate pages/cards.

==================================================
FINAL PRINCIPLE
==================================================

Do not think:

"How should I style this card?"

Think:

"How should this entire Playground communicate a consistent Design System language?"

Every section, card, variant, component, state, spacing rule, typography rule, and responsive behavior must belong to the same underlying system.

The final result must be:
- visually consistent,
- structurally predictable,
- responsive,
- accessible,
- maintainable,
- scalable,
- production-grade,
- and suitable as an enterprise-level component/design-system Playground.

Do not make superficial styling changes.

Perform a full structural and visual consistency audit first, then implement the improvements systematically across ALL sections.