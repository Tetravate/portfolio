# Tetravate Studio — Brand & Design System

> **Status:** Verified from `src/style.css`, `index.html`, and studio logo assets.  
> **Last Verified:** October 2026

---

## 1. Brand Philosophy & Aesthetic

Tetravate’s visual identity follows a **"Light Blueprint Studio"** aesthetic:
* **Tone:** Technical, confident, architectural, calm, and high-end.
* **Core Motif:** The architectural engineering blueprint grid—subtle, precise, and orderly.
* **Strict Principle:** Avoid flashy, noisy cyberpunk neon aesthetics, gaming interfaces, or generic emerald/green SaaS templates.

---

## 2. Brand Color Palette (Non-Negotiable)

The visual identity is derived directly from the official Tetravate logo:

| Color Role | CSS Token | Hex / Value | Usage & Meaning |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `--color-navy` | `#011641` | Primary brand authority, headings, dark showcase containers, navbar branding, footer |
| **Deep Navy Dark** | `--color-navy-dark` | `#000E2B` | Deep contrast surfaces, extreme dark accents |
| **Navy Surface** | `--color-navy-surface` | `#072152` | Inner cards within dark showcase containers |
| **Navy Elevated** | `--color-navy-elevated` | `#0B2B68` | Elevated dark components |
| **Electric Blue** | `--color-blue` | `#0065FF` | Primary action color, CTA buttons, active links, glow accents, focus states |
| **Blue Hover** | `--color-blue-hover` | `#0052D4` | Hover state for interactive primary actions |
| **Blue Active** | `--color-blue-active` | `#003FAD` | Active/pressed state for primary actions |
| **Blue Light** | `--color-blue-light` | `#4D94FF` | Subtle highlights and tags on dark containers |
| **Blue Subtle** | `--color-blue-subtle` | `#EFF6FF` | Soft tinted badge backgrounds on light surfaces |
| **Pure White** | `--color-white` | `#FFFFFF` | Page canvas, white card surfaces, contrast typography on navy |

### Prohibited Hues
* **NEVER** use green or emerald (`#10B981`, `#059669`, `#34D399`) as brand colors. The previous emerald redesign was explicitly rejected.
* **NEVER** use purple, pink, or orange gradient themes.
* Any secondary tint must be directly derived from the Navy, Electric Blue, or Slate neutral spectrum.

---

## 3. Surface & Canvas Tokens

```css
--bg-page: #FFFFFF;
--bg-page-subtle: #F8FAFC;
--bg-surface: #FFFFFF;
--bg-card: #FFFFFF;
--bg-card-hover: #F8FAFC;

/* Dark Feature Containers (Hero Showcase card & Footer) */
--bg-dark-container: #011641;
--bg-dark-surface: #072152;
--bg-dark-border: #1E3A5F;

/* Architectural Borders */
--border-subtle: #E2E8F0;
--border-medium: #CBD5E1;
--border-strong: #94A3B8;
--border-accent: #0065FF;
--border-accent-subtle: rgba(0, 101, 255, 0.25);
```

### Studio Blueprint Grid Pattern
Applied via a subtle fixed overlay on `body::before`:
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(0, 101, 255, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 101, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
}
```

---

## 4. Typography Hierarchy

* **Primary Sans-Serif:** `'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  * Weights: `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold), `800` (Extra-Bold)
* **Monospace Token:** `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
  * Used for step numbers (`01`, `02`), tech tags, status badges, and code-like metadata labels.

### Text Contrast Palette
* Headings: `#011641` (`--text-heading`)
* Primary Content: `#0F172A` (`--text-primary`)
* Body Neutral: `#475569` (`--text-body`)
* Muted Meta: `#64748B` (`--text-muted`)
* Subtitle / Muted Secondary: `#94A3B8` (`--text-subtle`)
* Dark Container Text: `#FFFFFF` / `#CBD5E1` (`--text-white`, `--text-white-muted`)

---

## 5. Components & Interactive States

### Buttons
* **Primary Button (`.btn-primary`):** Electric blue background (`#0065FF`), white text, subtle radius, smooth transform hover.
* **Secondary / Outline (`.btn-secondary`):** White or transparent background with subtle border, dark text, clean border highlight on hover.
* **Small / Compact (`.btn-sm`):** Navbar and inline card actions.

### Focus & Accessibility
```css
:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 3px;
}
```
All interactive buttons, links, inputs, and tab triggers must remain visibly accessible to keyboard navigation.

### Animations & Transitions
* Transition timing tokens: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration curve).
* Respect for user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 6. Information Requiring Future Verification

* [ ] Dark mode toggle: Currently the site is intentionally engineered as a light blueprint theme with dark navy contrast sections. Evaluate whether a client-controlled dark mode theme is desired in future releases.
