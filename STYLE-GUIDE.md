# SpanForge Design System — Style Guide

> **This is the canonical style guide for all SpanForge apps.**  
> Every app in the SpanForge ecosystem must follow these conventions so the suite feels unified.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Tokens](#2-color-tokens)
3. [Typography](#3-typography)
4. [Spacing Scale](#4-spacing-scale)
5. [Layout & Container](#5-layout--container)
6. [Buttons](#6-buttons)
7. [Cards](#7-cards)
8. [Badges & Labels](#8-badges--labels)
9. [Navigation](#9-navigation)
10. [Hero Sections](#10-hero-sections)
11. [Section Patterns](#11-section-patterns)
12. [Breadcrumbs](#12-breadcrumbs)
13. [Footer](#13-footer)
14. [Animations](#14-animations)
15. [Terminal / Code Blocks](#15-terminal--code-blocks)
16. [Accessibility](#16-accessibility)
17. [CSS Architecture Rules](#17-css-architecture-rules)
18. [Naming Conventions](#18-naming-conventions)
19. [Next.js / Font Setup](#19-nextjs--font-setup)
20. [Page Templates](#20-page-templates)
21. [Data Structures](#21-data-structures)

---

## 1. Brand Identity

| Element | Value |
|---|---|
| Product family | **Ainternals** |
| Wordmark structure | `Ai` (deep navy) + `Internals` (blue) |
| Display font | Nunito (CSS var `--font-playfair`) |
| UI font | Inter (CSS var `--font-dm-sans`) |
| Mono / code font | JetBrains Mono (CSS var `--font-dm-mono`) |
| Tagline | *"Close the gap. Ship the tool."* |
| Sub-tagline | *"The production utility layer for SpanForge teams.""* |
| Five lifecycle phases | Discover · Design · Build · Govern · Scale |

The wordmark renders as two adjacent spans with no space — `<span>Span</span><span style="color:var(--red)">Forge</span>` — using `font-family: var(--font-playfair)`, `font-weight: 700`.

> **Note on font variable names:** The CSS variable names (`--font-playfair`, `--font-dm-sans`, `--font-dm-mono`) are intentionally preserved for backward compatibility with all component references, even though the underlying typefaces are now Nunito, Inter, and JetBrains Mono respectively.

A small monospace sub-label (e.g., `"The AI Lifecycle Platform"`) can optionally sit beneath the logo at `font-size: 0.58–0.6rem`, `color: var(--mid)`, `letter-spacing: 0.08em`.

---

## 2. Color Tokens

> **SpanForge uses a light theme.** The site background is white; surfaces are soft blue-grey tints. The primary brand accent is ocean blue, referenced via the `--red` token for backward CSS-variable compatibility.

Paste the entire `:root` block into `styles/globals.css` for every SpanForge app.

```css
:root {
  /* ── Brand palette — ocean blue ── */
  --red:       #1A6FDB;   /* primary action, active indicators, accents */
  --red-light: #4589E8;   /* hover state for blue elements */
  --red-dim:   #E0EEFF;   /* pastel blue tint backgrounds */

  /* ── Backgrounds ── */
  --dark:      #FFFFFF;   /* page background (white) */
  --charcoal:  #F0F6FF;   /* light-section / alternating background */
  --surface:   #F4F8FF;   /* card / panel background */
  --surface-2: #E7EFFC;   /* elevated card, hover state */

  /* ── Text & borders ── */
  --rule:      #C3D5EF;   /* dividers, borders */
  --mid:       #5A7AA8;   /* secondary labels, icon strokes */
  --muted:     #2E4A6E;   /* body copy, descriptions */
  --light:     #1A2D4A;   /* primary body text */
  --white:     #0A1826;   /* deepest headings, high-emphasis text */

  /* ── Phase accent colours ── */
  --discover: #1660CC;    /* blue   */
  --design:   #0E8A5A;    /* teal   */
  --build:    #C96A0A;    /* amber  */
  --govern:   #7A28BF;    /* purple */
  --scale:    #C62828;    /* red    */
}
```

### How to use colors

| Use case | Token |
|---|---|
| Page background | `--dark` (white) |
| Card / panel | `--surface` |
| Elevated panel / hover state | `--surface-2` |
| Alternating section background | `--charcoal` |
| Dividers / borders | `--rule` |
| Body text | `--muted` |
| Primary body text | `--light` |
| High-emphasis headings | `--white` |
| Secondary labels | `--mid` |
| Eyebrows, primary accents | `--red` (ocean blue) |
| Hover on primary | `--red-light` |

**Never hard-code hex values** in component files. Always reference a token.

### Phase accent usage

Phase accent tokens are used as inline `style` props that set a local `--phase-color` var:

```jsx
<div style={{ '--phase-color': 'var(--discover)' }}>…</div>
```

| Phase | Token | Value | Use |
|---|---|---|---|
| Discover | `--discover` | `#1660CC` | Phase labels, numbered headers |
| Design | `--design` | `#0E8A5A` | Phase labels |
| Build | `--build` | `#C96A0A` | Phase labels |
| Govern | `--govern` | `#7A28BF` | Phase labels |
| Scale | `--scale` | `#C62828` | Phase labels |

---

## 3. Typography

### Font faces

```js
// Next.js layout.js — import all three
import { Nunito, Inter, JetBrains_Mono } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',   // CSS var name preserved for back-compat
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',    // CSS var name preserved for back-compat
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',    // CSS var name preserved for back-compat
  display: 'swap',
})
```

Apply all three variables to the `<html>` tag via `className`.

### Type roles

| Role | Font variable | Weight | Size | Notes |
|---|---|---|---|---|
| Page H1 (hero) | `--font-playfair` (Nunito) | 800 | `clamp(2.5rem, 5vw, 4rem)` | line-height 1.1 |
| Section H1 | `--font-playfair` (Nunito) | 800 | `clamp(2rem, 4vw, 3rem)` | line-height 1.1 |
| Section H2 | `--font-playfair` (Nunito) | 700 | `clamp(1.6rem, 3vw, 2.2rem)` | |
| Phase label | `--font-dm-mono` (JetBrains Mono) | 500 | `clamp(1.6rem, 3.5vw, 2.6rem)` | letter-spacing 0.06em |
| Card title | `--font-dm-mono` (JetBrains Mono) | 600 | `0.95rem` | |
| Blog post title | `--font-playfair` (Nunito) | 700 | `1.2rem` | line-height 1.35 |
| Body copy | `--font-dm-sans` (Inter) | 400 | `0.875–1.05rem` | line-height 1.6–1.75 |
| Base body | `--font-dm-sans` (Inter) | 400 | `17px` | global default, `line-height: 1.65` |
| Secondary copy | `--font-dm-sans` (Inter) | 400 | `0.8–0.82rem` | color `--muted` |
| Eyebrow | `--font-dm-mono` (JetBrains Mono) | 400 | `0.72rem` | uppercase, letter-spacing 0.18em, color `--red` |
| Nav link | `--font-dm-sans` (Inter) | 500 | `0.88rem` | color `--muted`, active `--white` |
| Footer column head | `--font-dm-mono` (JetBrains Mono) | 400 | `0.7rem` | uppercase, letter-spacing 0.15em, color `--red` |
| Meta / mono labels | `--font-dm-mono` (JetBrains Mono) | 400 | `0.68–0.78rem` | |

### Type patterns

**Eyebrow** — appears above section headings to label the content topic:
```css
.eyebrow {
  display: block;
  font-family: var(--font-dm-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--red);
  margin-bottom: 0.75rem;
}
```

**Italic emphasis in headlines** — use `<em>` or a `<span class="italic">` inside a Nunito `font-weight: 400` for contrast:
```css
.heroItalic { font-style: italic; font-weight: 400; }
.heroBlue   { color: var(--red); }
```

---

## 4. Spacing Scale

All spacing uses a **4px base unit**. Reference these tokens instead of arbitrary `px`/`rem` values.

```css
--s-1:   4px;   /* tight internal spacing */
--s-2:   8px;
--s-3:  12px;
--s-4:  16px;
--s-5:  24px;
--s-6:  32px;
--s-8:  48px;
--s-10: 64px;
--s-14: 112px;
--s-20: 160px;
```

**Section vertical padding:** `80px 0` (dark sections) or `80px 0` (charcoal sections).  
**Hero vertical padding:** `140px 0 100px` (home), `56–60px 0 80px` (inner pages).

---

## 5. Layout & Container

```css
:root {
  --max-width:    1200px;
  --side-padding: 2rem;   /* 1.25rem on mobile ≤600px */
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--side-padding);
}
```

### Common grid patterns

| Pattern | CSS |
|---|---|
| Two-col hero | `grid-template-columns: 1fr 400px; gap: 5rem` |
| Footer columns | `grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 3rem` |
| Phase row | `grid-template-columns: 280px 1fr 28px; gap: 2rem` |

Always collapse to a single column at `≤700px` or `≤768px` breakpoints.

---

## 6. Buttons

### Primary button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 1.5rem;
  background: var(--red);
  color: #FFFFFF;           /* always literal white on coloured bg */
  font-family: var(--font-dm-sans, 'Inter', sans-serif);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 4px;
  border: none;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}
.btn-primary:hover    { background: var(--red-light); transform: translateY(-1px); }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
```

### Ghost button

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 1.5rem;
  background: transparent;
  color: var(--light);
  font-family: var(--font-dm-sans, 'Inter', sans-serif);
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid var(--rule);
  border-radius: 4px;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}
.btn-ghost:hover    { background: var(--surface); border-color: var(--mid); transform: translateY(-1px); }
.btn-ghost:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
```

**Rules:**
- Button height: `44px` (use `height`, not `min-height` — consistent with globals.css)
- `border-radius: 4px` on all buttons
- Always pair primary + ghost in CTA groups with `display: flex; gap: 1rem; flex-wrap: wrap`
- Never use a blue ghost button — ghost is always neutral (`var(--rule)` border)
- Icon-alongside-text buttons: add `gap: 0.5rem` on the button

---

## 7. Cards

All cards share a common base:

```css
/* Base card */
background: var(--surface);
border: 1px solid var(--rule);
border-radius: 4px;          /* ToolCard — tight UI */
/* or */
border-radius: 6px;          /* BlogCard, PhaseRow, AgentOBS feature cards */
/* or */
border-radius: 8px;          /* TrustCard / softer layouts */
padding: 1.5rem;
transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
```

### Red top-bar hover effect (tool & blog cards)

```css
.card { position: relative; }
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--red);
  opacity: 0;                        /* ToolCard — fade in */
  /* or: transform: scaleX(0);       BlogCard — slide in */
  border-radius: 4px 4px 0 0;
  transition: opacity 0.2s;
}
.card:hover::before { opacity: 1; /* or: transform: scaleX(1); */ }
```

### BlogCard

```jsx
<Link href={`/blog/${slug}`} className={styles.card}>
  <div className={styles.meta}>
    <span className={styles.tag}>    {/* phase-colored badge */}
    <span className={styles.date}>
    <span className={styles.readingTime}>
  </div>
  <h3 className={styles.title}>     {/* Nunito 700 1.2rem, line-height 1.35 */}
  <p className={styles.excerpt}>    {/* 3-line clamp */}
  <span className={styles.readMore}>
</Link>
```

Phase badge colors used in BlogCard (hard-coded RGBA, light-theme appropriate):

```js
const PHASE_COLORS = {
  discover: { bg: 'rgba(26,82,118,0.25)',  text: '#5DADE2' },
  design:   { bg: 'rgba(20,90,50,0.25)',   text: '#58D68D' },
  build:    { bg: 'rgba(120,66,18,0.25)',  text: '#F0A500' },
  govern:   { bg: 'rgba(74,35,90,0.25)',   text: '#AF7AC5' },
  scale:    { bg: 'rgba(123,34,24,0.25)',  text: '#EC7063' },
  general:  { bg: 'rgba(42,49,69,0.5)',    text: '#94A3B8' },
}
```

### ResourceCard

Displays a downloadable resource (whitepaper, guide, spec, etc.).

```jsx
<div className={styles.card}>
  <div className={styles.typeBadge}>   {/* colored per resource type */}
  <h3 className={styles.title}>
  <p className={styles.excerpt}>
  <div className={styles.meta}>        {/* author, page count */}
  <div className={styles.actions}>     {/* "Read online" link + optional PDF download */}
</div>
```

Resource type badge metadata (hard-coded in `ResourceCard.jsx` — do not tokenize):

```js
const TYPE_META = {
  whitepaper:       { label: 'Whitepaper',     color: '#1565C0', bg: 'rgba(21,101,192,0.1)'  },
  'research-paper': { label: 'Research Paper', color: '#6A1B9A', bg: 'rgba(106,27,154,0.1)' },
  'mini-book':      { label: 'Mini Book',      color: '#1B5E20', bg: 'rgba(27,94,32,0.1)'   },
  guide:            { label: 'Guide',          color: '#E65100', bg: 'rgba(230,81,0,0.1)'   },
  spec:             { label: 'Spec',           color: '#B71C1C', bg: 'rgba(183,28,28,0.1)'  },
  report:           { label: 'Report',         color: '#37474F', bg: 'rgba(55,71,79,0.1)'   },
}
```

### ToolCard

```jsx
<div className={`${styles.card} ${locked ? styles.locked : ''}`}>
  <div className={styles.badgeRow}>  {/* type badge + phase badge */}
  <h3 className={styles.name}>      {/* JetBrains Mono 0.95rem 600 */}
  <p className={styles.desc}>       {/* 0.82rem muted */}
  {locked && <span className={styles.lockedLabel}>Coming soon</span>}
</div>
```

### Phase row (interactive list item)

```css
.row {
  display: grid;
  grid-template-columns: 280px 1fr 28px;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 2rem;
  border: 1px solid var(--rule);
  border-radius: 6px;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;
}
.row:hover {
  transform: translateX(4px);
  border-color: var(--red);
  background: var(--surface-2);
}
```

Collapse to `grid-template-columns: 1fr 24px` at `≤700px`.

### TrustCard (T.R.U.S.T. Framework)

Displays the five T.R.U.S.T. dimensions. Each dimension has a 36×36px letter badge:

```css
.badge {
  width: 36px;
  height: 36px;
  background: var(--red);
  color: #FFFFFF;
  font-family: var(--font-dm-mono);
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  flex-shrink: 0;
}
```

### Locked / disabled card state

```css
.locked {
  opacity: 0.35;
  cursor: not-allowed;
  user-select: none;
  pointer-events: none;
}
/* No hover lift, no accent bar — locked cards are inert */
```

---

## 8. Badges & Labels

### Tool type badges

Used on ToolCards to identify what kind of artifact a tool is. Defined as global utility classes in `globals.css`:

```css
.badge {
  display: inline-block;
  font-family: var(--font-dm-mono, 'JetBrains Mono', monospace);
  font-size: 0.65rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
}

/* Tool type variants */
.badge-webapp   { background: #DBEAFE; color: #1D4ED8; }   /* Web Application */
.badge-rust     { background: #FEF3C7; color: #92400E; }   /* Rust / Systems */
.badge-doc      { background: #EDE9FE; color: #6D28D9; }   /* Documentation */
.badge-fw       { background: #D1FAE5; color: #065F46; }   /* Framework */
.badge-product  { background: #FFE4E6; color: #9F1239; }   /* Product */
```

### Phase badges (BlogCard)

Phase tags on blog cards use dynamic inline styles from `PHASE_COLORS` in `BlogCard.jsx` — they are not CSS Module classes. See §7 BlogCard for the color map.

### Assessment dimension badge

For assessment pages, dimension badges use the phase color palette as base RGBA:

```css
.badge-strategy   { background: rgba(26,82,118,0.35);    color: #5DADE2; }
.badge-data       { background: rgba(20,90,50,0.35);     color: #58D68D; }
.badge-infra      { background: rgba(120,66,18,0.35);    color: #F0A500; }
.badge-talent     { background: rgba(74,35,90,0.35);     color: #AF7AC5; }
.badge-governance { background: rgba(123,34,24,0.35);    color: #EC7063; }
.badge-culture    { background: rgba(100,116,139,0.2);   color: #94A3B8; }
```

### Verdict color states

Verdict labels in results pages use these utility classes:

```css
.verdict-ready      { color: #58D68D; }   /* ≥ 120 / 150 */
.verdict-developing { color: #F0A500; }   /* 90–119 */
.verdict-emerging   { color: #F39C12; }   /* 75–89 */
.verdict-not-ready  { color: var(--red-light); }  /* < 75 */
```

Apply directly on the verdict label element — they are global utilities defined in `globals.css`.

### Footer section headers / column labels

```css
font-family: var(--font-dm-mono);
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.15em;
color: var(--red);
```

---

## 9. Navigation

- **Height:** `64px`, `position: fixed`, `z-index: 100`
- **Default state:** transparent background, no border
- **Scrolled state (>80px):** `background: rgba(255,255,255,0.95)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--rule)`
- **Nav links:** Inter 500, `0.88rem`, color `--muted`; hover + active → `--white`
- **Active indicator:** `2px` bottom border using `--red`, `position: absolute; bottom: 0`
- **Logo:** `font-family: var(--font-playfair)`, `font-size: 1.35rem`, `font-weight: 700`
  - `Span` → `--white` (deep navy), `Forge` → `--red` (ocean blue)
  - Optional sub-label hidden below `900px`
- **Mobile breakpoint:** collapse links below `900px`, show hamburger menu
- **Body scroll lock** when mobile menu is open; Escape key closes menus

---

## 10. Hero Sections

### Home page hero

```css
.hero {
  padding: 140px 0 100px;
  background: var(--dark);
  background-image:
    radial-gradient(ellipse 800px 600px at 60% 40%, rgba(26,111,219,0.06) 0%, transparent 70%);
}
```

- H1: `clamp(2.5rem, 5vw, 4rem)`, Playfair 900, `--white`, line-height 1.1
- Sub-copy: `1.05rem`, DM Sans, `--muted`, line-height 1.7
- A live-pulse red dot (`8px`, border-radius `50%`, `animation: pulseRed`) can precede the eyebrow

### Inner page / product hero

```css
.hero {
  padding: 56px 0 80px;
  background: var(--dark);
  background-image:
    radial-gradient(ellipse 700px 400px at 75% 40%, rgba(26,111,219,0.06) 0%, transparent 70%);
}
```

- Label: DM Mono, `0.75rem`, uppercase, letter-spacing `0.14em`, `--red`
- H1: `clamp(2rem, 4vw, 3rem)`, Playfair 900, `--white`, max-width `700px`
- Sub: `1.05rem`, `--muted`, line-height 1.75, max-width `600px`

### Phase hero (numbered)

```css
.phaseNum {
  font-family: var(--font-playfair);
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  color: var(--phase-color);   /* set via inline style */
}
.phaseLabel {
  font-family: var(--font-dm-mono);
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  font-weight: 500;
  letter-spacing: 0.06em;
}
```

---

## 11. Section Patterns

### Dark section (alternating)

```css
.sectionDark {
  padding: 80px 0;
  background: var(--dark);
  border-top: 1px solid var(--rule);
}
```

### Charcoal section (alternating)

```css
.sectionCharcoal {
  padding: 80px 0;
  background: var(--charcoal);
  border-top: 1px solid var(--rule);
}
```

**Alternate** `--dark` and `--charcoal` for visual rhythm. Never use two identical backgrounds in a row unless separated by a strong rule or image.

### Section head pattern

```html
<span class="eyebrow">Section Label</span>
<h2>Section Headline</h2>
<p>Supporting copy…</p>
```

---

## 12. Breadcrumbs

```css
.breadcrumb {
  padding: 1.25rem 0 0;
  background: var(--dark);
}
.breadcrumbLink {
  font-family: var(--font-dm-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--mid);
  text-decoration: none;
  transition: color 0.15s;
}
.breadcrumbLink:hover { color: var(--light); }
.breadcrumbSep { color: var(--rule); margin: 0 0.5rem; }
.breadcrumbCurrent {
  font-family: var(--font-dm-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--muted);
}
```

---

## 13. Footer

Structure: `--charcoal` background, `border-top: 1px solid var(--rule)`.

```
[Brand column 1.6fr] [Nav col 1fr] [Nav col 1fr] [Nav col 1fr]
─────────────────────────────────────────────────────────────
Copyright                                          LinkedIn icon
```

- Column headers: DM Mono, `0.7rem`, uppercase, `--red`
- Column links: DM Sans, `0.82rem`, `--mid` → hover `--light`
- Brand tagline: DM Sans, `0.82rem`, `--mid`
- URL / sub info: DM Mono, `0.75rem`, `--mid`
- Collapse to single column on mobile (`≤768px`)

---

## 14. Animations

Import `styles/animations.css` into every app's global stylesheet.

### Keyframes

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Named "pulseRed" but uses brand blue --red token */
@keyframes pulseRed {
  0%, 100% { box-shadow: 0 0 0 0 rgba(26, 111, 219, 0.5); }
  50%       { box-shadow: 0 0 0 6px rgba(26, 111, 219, 0); }
}
```

### Utility classes

```css
.fade-up   { animation: fadeUp 0.7s ease forwards; opacity: 0; }
.fade-up-1 { animation: fadeUp 0.7s ease 0.1s forwards; opacity: 0; }
.fade-up-2 { animation: fadeUp 0.7s ease 0.2s forwards; opacity: 0; }
.fade-up-3 { animation: fadeUp 0.7s ease 0.3s forwards; opacity: 0; }
.fade-up-4 { animation: fadeUp 0.7s ease 0.4s forwards; opacity: 0; }

.pulse-red { animation: pulseRed 2s infinite; }

/* Scroll reveal — toggled by IntersectionObserver */
.reveal            { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```

### Reduced motion

**Always** include this:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    transform: none !important;
  }
}
```

### Transition conventions

| Element | Duration | Easing |
|---|---|---|
| Color, background, border | `0.2s` | `ease` |
| Transform (lift, slide) | `0.2s` | `ease` |
| Scroll reveal | `0.5s` | `ease` |
| Intro fade-up | `0.7s` | `ease` |
| Nav background on scroll | `0.3s` | (default) |

---

## 15. Terminal / Code Blocks

Use the `TerminalMock` component for all code demonstrations. It supports a multi-scenario tab system (e.g., `consent`, `drift`, `confidence` tabs on the AgentOBS page).

```
┌─ Tab bar (--charcoal bg, JetBrains Mono 0.72rem, --muted text) ─┐
├─ Chrome bar (--surface-2, three colored dots) ───────────────────┤
└─ Body (--surface, padding 1.5rem, JetBrains Mono 0.78rem) ───────┘
```

- Outer: `background: var(--surface)`, `border: 1px solid var(--rule)`, `border-radius: 6px`
- Tab bar: `background: var(--charcoal)`, `border-bottom: 1px solid var(--rule)`
- Active tab: `background: var(--surface)`, bottom border merges with body to create tab-merge effect; text `--white`
- Inactive tab: `font-size: 0.72rem`, color `--muted`
- Code lines: `font-size: 0.78rem`, `line-height: 1.7`, `white-space: pre`
- Comments / dim text: `color: var(--muted)`, `opacity: 0.45`, `font-size: 0.75rem`
- Divider lines within code: `height: 1px; background: var(--rule)`
- Colored dots: close `#FF5F57`, minimize `#FEBC2E`, expand `#28C840`

**Terminal output label colors** (hard-coded in `TerminalMock.jsx`):

| Semantic | Hex | Use |
|---|---|---|
| Info / trace | `#5DADE2` | Source labels, trace IDs |
| OK / success | `#58D68D` | Passed checks, positive scores |
| Warning | `#F0A500` | Soft warnings, drift alerts |
| Error / alert | `#EC7063` | Hard failures, PII detections |

### Sticky terminal layout (AgentOBS page)

When a terminal sits beside explanatory copy, use a sticky right panel:

```css
.terminalInner {
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 4rem;
  align-items: start;
}
.terminalRight {
  position: sticky;
  top: 88px;   /* 64px nav + 24px breathing room */
}
```

Collapse to single column at `≤1024px`.

---

## 16. Accessibility

### Focus styles

```css
:focus-visible {
  outline: 2px solid var(--red);
  outline-offset: 2px;
}
```

### Skip link

```css
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--red);
  color: #FFFFFF;
  font-weight: 600;
  border-radius: 4px;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-to-content:focus { top: 1rem; }
```

- Place `<a href="#main-content" className="skip-to-content">Skip to content</a>` as the **first child** of `<body>` in `layout.js`
- All interactive elements must be reachable by keyboard
- Icon-only buttons must have `aria-label`
- Min contrast ratio: 4.5:1 for body text, 3:1 for large text

---

## 17. CSS Architecture Rules

1. **Design tokens** live in `styles/globals.css` `:root`. Never repeat them in component files.
2. **Component styles** use **CSS Modules** (`.module.css`). No styled-components, no inline styles except data-driven values (e.g., `style={{ '--phase-color': 'var(--discover)' }}`).
3. **Global utility classes** (`btn-primary`, `btn-ghost`, `container`, `eyebrow`, `badge`, `badge-webapp`, `badge-rust`, `badge-doc`, `badge-fw`, `badge-product`, `fade-up`, `reveal`, `verdict-*`, `spinner`, `skip-to-content`) are defined in `globals.css` and `animations.css` only. Global classes use **kebab-case**; CSS Module classes use **camelCase**.
4. **No magic numbers.** Use spacing tokens, or document the exception with a comment.
5. Breakpoints:
   - **Mobile base**: `≤600px` — adjust `--side-padding` to `1.25rem`
   - **Layout collapse**: `≤700px` — collapse multi-col grids; PhaseRow goes `1fr 24px`
   - **Medium layouts**: `≤768px` — Footer grid → 2 columns then 1 column
   - **Nav collapse**: `<900px` — hide desktop links, show hamburger
   - **Tablet**: `≤1024px` — 3-column card grids reduce to 2 columns; sticky terminal collapses

### App-shell layout pattern

The actual `layout.js` wraps content inside `<AuthSessionProvider>` without explicit app-shell class names. Nav and Footer are placed as siblings of `<main>`:

```jsx
<body>
  <AuthSessionProvider>
    <Nav />
    <main id="main-content">{children}</main>
    <Footer />
  </AuthSessionProvider>
  <Analytics />
  <SpeedInsights />
</body>
```

`<main id="main-content">` receives `padding-top: 64px` via page-level module styles (not a global class) to offset the fixed nav.

### Spinner (loading state)

```css
.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--rule);
  border-top-color: var(--red);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

Use the `.spinner` global class inline when an async action is pending. Never build per-component spinners.

---

## 18. Naming Conventions

### CSS Module class names

Use **camelCase** for all CSS Module selectors:

| Pattern | Example |
|---|---|
| Element wrapper | `.card`, `.row`, `.hero`, `.section` |
| Modifier state | `.cardHover`, `.locked`, `.scrolled`, `.active` |
| Sub-element | `.cardTitle`, `.heroH1`, `.navLink` |
| Variant suffix | `.sectionDark`, `.sectionCharcoal` |

### CSS variable names

All custom properties use `--kebab-case`. Group by category prefix:
- Colors: `--red`, `--surface`, `--dark`, `--muted`
- Spacing: `--s-4`, `--s-8`
- Fonts: `--font-playfair`, `--font-dm-sans`, `--font-dm-mono`
- Layout: `--max-width`, `--side-padding`
- Phase colors: `--discover`, `--design`, `--build`, `--govern`, `--scale`

### Component files

```
components/
  ComponentName.jsx         — the component
  ComponentName.module.css  — scoped styles for that component
```

### Page-level styles

```
app/
  pageName/
    page.js
    page.module.css         — layout and section styles for that route
```

---

## 19. Next.js / Font Setup

Reference `app/layout.js`:

```js
import { Nunito, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AuthSessionProvider from '@/components/AuthSessionProvider'
import '../styles/globals.css'
import '../styles/animations.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',   // CSS var name preserved
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',    // CSS var name preserved
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',    // CSS var name preserved
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AuthSessionProvider>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </AuthSessionProvider>

        {/* Plausible Analytics — privacy-first, no cookies */}
        <Script
          defer
          data-domain="getspanforge.com"
          src="https://plausible.io/js/script.js"
          strategy="lazyOnload"
        />

        {/* Vercel Analytics + Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### SEO / metadata

Define per-route metadata by exporting `metadata` from each `page.js`:

```js
export const metadata = {
  title: 'Page Title',       // appended with " — SpanForge" via template
  description: '…',
}
```

The root `layout.js` sets `metadataBase`, `openGraph`, `twitter`, and `robots` defaults.

### Shared files to copy into every new SpanForge app

```
styles/
  globals.css       ← full token + utility class file
  animations.css    ← keyframes + utility animation classes
components/
  Nav.jsx + Nav.module.css
  Footer.jsx + Footer.module.css
```

Customize Nav links and Footer columns per-app; keep all tokens and class names identical.

---

## 20. Page Templates

### Blog listing page (`app/blog/page.js`)

1. Hero section — eyebrow + H1 + short copy
2. Post grid — `repeat(3, 1fr)` → `repeat(2, 1fr)` at `≤1024px` → `1fr` at `≤640px`
3. Fallback message when no posts exist

### Blog post page (`app/blog/[slug]/page.js`)

- Breadcrumb: Home → Blog → Post title
- H1: Nunito 700, `clamp(2rem, 4vw, 3rem)`
- Phase badge + date metadata row
- Prose content: `max-width: 720px`, `line-height: 1.75`, `--light` color
- Code blocks: JetBrains Mono `0.85rem`, `background: var(--surface)`, `border-left: 3px solid var(--red)`

### Resources page (`app/resources/page.js`)

1. Hero
2. Filter button bar (type-based; active filter gets `background: var(--red); color: #FFF`)
3. ResourceCard grid — `repeat(3, 1fr)` → `repeat(2, 1fr)` → `1fr`

### Tools page (`app/tools/page.js`)

1. Hero
2. Phase breakdown — 5-column stats grid (one per phase)
3. Tool type breakdown — counts row
4. Locked tool grids (using `.locked` card state)

### Platform page (`app/platform/page.js`)

1. Hero — "Five phases. One platform."
2. Phase cards grid (3 columns, 5 cards, each colored with phase accent)
3. T.R.U.S.T. Framework card (2-column layout: label column + dimensions)

### AgentOBS page (`app/agentobs/page.js`)

1. Hero — "You can't govern what you can't see"
2. Terminal demo grid (`1fr 500px`, sticky right panel)
3. Features grid (`repeat(3, 1fr)` → `repeat(2, 1fr)`)
4. How it works — 4-step process

### Phase detail pages (`app/platform/[phase]/page.js`)

Use `PhasePageLayout` component:
- Breadcrumb → Hero (large phase number + label) → Summary paragraphs → Children → Exit gate → Prev/Next nav

---

## 21. Data Structures

These files in `lib/` power the dynamic pages. Reference these shapes when building new pages or components.

### `lib/phases-data.js`

```js
export const phases = [
  {
    num:      '01',
    id:       'discover',        // maps to --discover CSS token
    label:    'Discover',
    colorVar: '--discover',
    tag:      'Phase 01',
    tagline:  '…',
    summary:  ['paragraph 1', 'paragraph 2'],
    gate:     'Gate description',
  },
  // …× 5 (discover, design, build, govern, scale)
]

export const trustDimensions = [
  { letter: 'T', word: 'Traceability',    desc: '…' },
  { letter: 'R', word: 'Responsibility',  desc: '…' },
  { letter: 'U', word: 'User Rights',     desc: '…' },
  { letter: 'S', word: 'Safety Guardrails', desc: '…' },
  { letter: 'T', word: 'Transparency',   desc: '…' },
]

export const pipelineStages = [
  { label: 'SECURITY', tools: ['…'], note: '…' },
  // …× 6 stages through DEPLOY
]
```

### `lib/tools-data.js`

```js
export const showcaseTools = [
  {
    id:          'tool-slug',
    type:        'webapp',     // 'webapp' | 'rust' | 'doc' | 'fw' | 'product'
    phase:       'discover',   // 'discover' | 'design' | 'build' | 'govern' | 'scale'
    name:        'Tool Name',
    description: '…',
    locked:      false,        // true renders .locked card state
    href:        '/tools/…',   // omitted if locked
  },
]

export const phaseSummary = {
  discover: { label: 'Discover', total: 4, types: { webapp: 2, doc: 1, fw: 1 } },
  // …one entry per phase
}
```

### `lib/blog.js`

Post markdown files live in `content/blog/`. Frontmatter fields:

```yaml
---
title: "Post Title"
date: "2026-01-15"
excerpt: "One-sentence summary."
phase: discover         # matches phase id, or 'general'
readingTime: "5 min"    # optional
---
```

Functions: `getAllPosts()`, `getPostBySlug(slug)`, `getAllSlugs()`.

### `lib/resources.js`

Resource markdown files live in `content/resources/`. Frontmatter fields:

```yaml
---
title: "Resource Title"
date: "2026-01-15"
excerpt: "Summary."
type: whitepaper        # whitepaper | research-paper | mini-book | guide | spec | report
author: "Author Name"
pageCount: 24           # optional
downloadUrl: "…"        # optional PDF link
---
```

Functions: `getAllResources()`, `getResourceBySlug(slug)`, `getAllResourceSlugs()`.

---

## Quick Reference Card

```
Theme        LIGHT — white page bg, blue-grey surfaces

Backgrounds  dark(page)=#FFF · charcoal(alt section)=#F0F6FF · surface=#F4F8FF · surface-2=#E7EFFC
Accents      --red(blue)=#1A6FDB · --red-light=#4589E8
Text         --white=#0A1826 · --light=#1A2D4A · --muted=#2E4A6E · --mid=#5A7AA8
Borders      --rule=#C3D5EF

Phase colors  discover=#1660CC · design=#0E8A5A · build=#C96A0A · govern=#7A28BF · scale=#C62828

Fonts        var(--font-playfair) = Nunito (headlines)
             var(--font-dm-sans)  = Inter (body)
             var(--font-dm-mono)  = JetBrains Mono (code, labels, eyebrows)

Buttons      height=44px · border-radius 4px · primary=--red · ghost=transparent+rule border
Cards        surface bg · rule border · radius 4px(tool) 6px(blog/phase) 8px(trust) · blue top-bar on hover
Eyebrow      dm-mono 0.72rem · uppercase · letter-spacing 0.18em · color --red
Sections     80px vertical padding · alt dark/charcoal · border-top rule

Hero glow    radial-gradient(ellipse at 60–75%, rgba(26,111,219,0.06), transparent 70%)
Transition   0.2s ease (most) · 0.5s ease (reveals) · 0.7s ease (intros)

Tool badges  webapp=#1D4ED8(blue) · rust=#92400E(amber) · doc=#6D28D9(purple) · fw=#065F46(green) · product=#9F1239(rose)
Verdicts     ready=#58D68D · developing=#F0A500 · emerging=#F39C12 · not-ready=--red-light
Dimension badges  strategy=#5DADE2 · data=#58D68D · infra=#F0A500 · talent=#AF7AC5 · governance=#EC7063 · culture=#94A3B8

Breakpoints  ≤600px mobile base · ≤700px grid collapse · ≤768px footer · <900px nav · ≤1024px tablet
Layout       AuthSessionProvider > Nav + main#main-content + Footer (no app-shell wrapper)
Analytics    Plausible (script tag) + Vercel Analytics + SpeedInsights
```
