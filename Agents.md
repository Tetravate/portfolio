# Tetravate Portfolio — AGENTS.md

> **CRITICAL INSTRUCTION FOR ALL AI CODING AGENTS & HUMAN DEVELOPERS:**  
> Before modifying any code, reading or modifying styles, or changing routes in this repository, you **MUST** read the relevant documentation in `docs/`.  
> Follow the established architecture, preserve the approved visual brand identity, and verify all changes before completing your task.

---

## 1. MANDATORY FIRST STEP: READ THE CONTEXT SYSTEM

Do not make assumptions about Tetravate. The repository includes an evidence-based documentation system in `docs/`:

1. [`docs/COMPANY_CONTEXT.md`](file:///c:/TETRAVATE/Portfolio/docs/COMPANY_CONTEXT.md) — Studio mission, 5 founders, values, contact channels.
2. [`docs/BRAND_AND_DESIGN_SYSTEM.md`](file:///c:/TETRAVATE/Portfolio/docs/BRAND_AND_DESIGN_SYSTEM.md) — Approved palette (Deep Navy `#011641`, Electric Blue `#0065FF`, White `#FFFFFF`), tokens, typography, blueprint grid.
3. [`docs/SERVICES.md`](file:///c:/TETRAVATE/Portfolio/docs/SERVICES.md) — Official 6 service categories and nested capabilities.
4. [`docs/PROJECTS_AND_PORTFOLIO.md`](file:///c:/TETRAVATE/Portfolio/docs/PROJECTS_AND_PORTFOLIO.md) — Complete 10-project inventory, statuses, verified AGS Masalas testimonial, route aliases.
5. [`docs/TECHNICAL_ARCHITECTURE.md`](file:///c:/TETRAVATE/Portfolio/docs/TECHNICAL_ARCHITECTURE.md) — Vite + Vanilla JS SPA router, state, components, build setup.
6. [`docs/INTEGRATIONS.md`](file:///c:/TETRAVATE/Portfolio/docs/INTEGRATIONS.md) — Google Apps Script form endpoint, WhatsApp endpoints, floating button rules.
7. [`docs/QUALITY_BASELINE.md`](file:///c:/TETRAVATE/Portfolio/docs/QUALITY_BASELINE.md) — Measured performance, accessibility, SEO, and reliability baselines.
8. [`docs/DECISIONS.md`](file:///c:/TETRAVATE/Portfolio/docs/DECISIONS.md) — Architectural Decision Records (ADR-001 through ADR-007).

---

## 2. NON-NEGOTIABLE ARCHITECTURAL BOUNDARIES

1. **Stack Preservation:**
   * **Vite + Vanilla JavaScript + Semantic HTML5 + Custom Vanilla CSS.**
   * **DO NOT** migrate this project to React, Next.js, Vue, Angular, Svelte, or TypeScript unless explicitly requested by the studio leadership.
2. **Existing Project First:**
   * Improve the existing codebase; do not create a parallel project or rewrite components from scratch without reason.
   * Preserve working components, assets, project data, and router functionality.
3. **No Arbitrary Redesigns:**
   * Do not make arbitrary visual changes merely to make the site look different or "more modern".
   * Make a visual change only when an identified usability, contrast, or responsiveness problem provides a clear reason for it.

---

## 3. BRAND & IDENTITY RULES

1. **Brand Palette:**
   * **Deep Navy (`#011641`)** → Headings, brand authority, dark showcase containers, footer.
   * **Electric Blue (`#0065FF`)** → Primary actions, CTA buttons, active states, focus indicators.
   * **White (`#FFFFFF`)** → Page canvas, cards, high-contrast typography.
2. **Strict Hue Prohibitions:**
   * **DO NOT** use emerald or green (`#10B981`, `#059669`, `#34D399`). The previous emerald redesign was rejected.
   * **DO NOT** use purple, pink, or orange gradient themes.
   * Keep the brand recognizably blue, navy, and white.
3. **Studio Aesthetic:**
   * The aesthetic is **"Light Blueprint Studio"**—architectural, precise, technical, calm, and high-end.
   * Not a student portfolio. Not a resume. Not a gaming UI. Not a neon cyberpunk template.

---

## 4. INTEGRITY & CREDIBILITY (ZERO TOLERANCE FOR FABRICATION)

1. **No Invented Facts:**
   * Never invent clients, partners, user counts, revenue metrics, or government affiliations.
   * Never create fake testimonials. Authorized feedback items are the genuine **AGS Masalas** (Retail POS Implementation) feedback and the paraphrased **Oivu Project** (Hackathon Feedback). Never claim unverified business partnerships or customer reviews.
2. **Project Naming & Truth:**
   * **Oivu** is a civic rest-point PWA concept for gig workers. Do not confuse it with a dining app or label it "Restora".
   * **SAKSHA / DRISHYAM** is an AI crime intelligence prototype (SIH26189 concept).
   * **LUXORA** is an e-commerce platform prototype. Keep it categorized under "Web & Digital Products". Do not restore a standalone "E-Commerce" filter button.
   * **Hack Odyssey** must remain excluded.
3. **Preserve Integrations:**
   * The contact form endpoint is powered by Google Apps Script (`google-apps-script/Code.gs`). Protect the endpoint, loading states, honeypot, and error fallbacks. Do not replace with `mailto:`.
   * Preserve both WhatsApp numbers (`+91 63810 77598` and `+91 98941 65334`) and the prefilled message.
   * Preserve the floating inquiry button to `/contact`; do not restore a floating WhatsApp button.

---

## 5. AGENT EXECUTION PROTOCOL

Whenever an AI coding agent works on this codebase, it must follow this 6-step discipline:

```
1. Understand First    → Read relevant docs/ files and inspect current code.
2. Formulate Change    → Define targeted, minimal changes addressing the specific need.
3. Preserve Decisions  → Respect established ADRs and brand rules.
4. Test & Measure      → Test in browser, verify build (`npm run build`), check console for 0 errors.
5. Document Updates    → Update relevant docs/ files if architecture, data, or decisions change.
6. Verify & Report     → Report what was changed, what was tested, and evidence of success.
```