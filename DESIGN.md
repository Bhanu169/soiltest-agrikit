# Design Brief

## Direction

Botanical Trust — A light, warm agricultural services platform with organic sage greens and earthy undertones for soil testing and AgriKit services.

## Tone

Organic, natural, and deeply trustworthy. Warm cream and sage green palette rejects corporate tech blue in favor of agricultural heritage and sustainable farming values.

## Differentiation

Earthy, botanical color story with warm serif typography creates a distinctive, memorable palette for the agricultural sector that feels grounded, approachable, and expert.

## Color Palette

| Token      | OKLCH         | Role                           |
| ---------- | ------------- | ------------------------------ |
| background | 0.96 0.015 75 | Warm cream light base          |
| foreground | 0.2 0.03 50   | Dark brown text                |
| card       | 0.98 0.01 75  | Soft off-white card surfaces   |
| primary    | 0.5 0.12 160  | Sage green buttons and accents |
| accent     | 0.55 0.15 40  | Warm terracotta highlights     |
| muted      | 0.92 0.02 75  | Light beige backgrounds        |

## Typography

- Display: Lora — serif warmth for agricultural heritage, used in hero headings and section titles
- Body: DM Sans — clean modern sans-serif, accessible body text and form labels
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl`, label `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Soft shadow hierarchy with warm tones. `shadow-subtle` (0.06 opacity) for cards, `shadow-elevated` (0.08 opacity) for modals. No harsh contrast — depth through lightness and soft elevation only.

## Structural Zones

| Zone    | Background      | Border                | Notes                    |
| ------- | --------------- | --------------------- | ------------------------ |
| Header  | `bg-card`       | `border-b border-border` | Clean separation, logo left |
| Content | `bg-background` | —                     | Primary viewing area     |
| Section | `bg-muted/30`   | —                     | Alternate sections for rhythm |
| Footer  | `bg-muted/40`   | `border-t border-border` | Warm footer with subtle accent |

## Spacing & Rhythm

Spacious density throughout (48-64px gaps between sections, 16-24px card padding). Generous whitespace reinforces calm. Forms use 16px label-to-input spacing, 8px field-to-field gaps.

## Component Patterns

- Buttons: sage green primary `bg-primary text-primary-foreground` with smooth hover (opacity 0.9), terracotta secondary `bg-accent text-accent-foreground`
- Cards: 12px border-radius, `bg-card shadow-subtle`, 24px padding
- Badges: 6px radius, muted backgrounds with teal text for defaults, destructive red for warnings
- Forms: label above input, soft borders (`border-input`), focus ring in sage green

## Motion

- Entrance: 0.5s fade-in on page load, staggered 0.1s for section blocks
- Hover: 0.3s smooth opacity and scale (1.02) on buttons, color shift on interactive elements
- Decorative: subtle background pattern (diagonal grid at 3% opacity) for agricultural texture

## Constraints

- No sharp corners (minimum 8px radius, 12px preferred for cards)
- No harsh shadows or glows — all shadows use warm warm-dark tones at low opacity
- No purple or blue accents — sage green and terracotta only
- Form fields always have soft focus states with sage ring

## Signature Detail

Warm serif typography paired with sage green creates agricultural authenticity — instantly recognizable as farming-sector specific without cliché icons or farming clipart.
