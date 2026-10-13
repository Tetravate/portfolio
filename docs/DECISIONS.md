# Tetravate Studio — Architecture & Product Decision Records (ADRs)

> **Status:** Active Reference  
> **Last Verified:** October 2026

---

## ADR-001: Preservation of Vite + Vanilla JS + Custom CSS Architecture

* **Context:** The website was built using Vite, Vanilla JavaScript (ES Modules), HTML5, and custom Vanilla CSS.
* **Decision:** Retain this stack strictly. Do not migrate to React, Next.js, Vue, Svelte, or TypeScript unless explicitly requested by the studio leadership.
* **Rationale:** A framework-less SPA eliminates excessive abstraction layers, minimizes bundle size (~49 kB gzip JS), avoids framework lock-in, and maintains rapid page generation speed.

---

## ADR-002: Preservation of the "Light Blueprint Studio" Visual Theme

* **Context:** Previous revisions experimented with dark emerald/green hues and neon styling, which conflicted with the official Tetravate emblem logo.
* **Decision:** The approved theme is strictly **Deep Navy (`#011641`)**, **Electric Blue (`#0065FF`)**, and **White (`#FFFFFF`)** with architectural blueprint grid accents (`rgba(0, 101, 255, 0.04)`).
* **Rationale:** Aligns precisely with the official Tetravate brand emblem, establishes an engineering and architectural tone, and maintains high-contrast legibility.

---

## ADR-003: Multi-Page Client-Side Routing via HTML5 History API

* **Context:** A digital product studio requires dedicated URLs for sharing individual case studies and services, rather than a single long scrolling page or modal popups.
* **Decision:** Implement dedicated routes (`/`, `/work`, `/work/:slug`, `/services`, `/process`, `/about`, `/contact`) using `history.pushState` and `popstate`, paired with Vercel rewrites to `index.html`.
* **Rationale:** Ensures clean browser history, bookmarkable URLs, direct page refreshes, and distinct document titles without requiring server-rendered frameworks.

---

## ADR-004: Removal of Dedicated "E-Commerce" Filter Tab on `/work`

* **Context:** The portfolio grid previously included an isolated "E-Commerce" filter button that only contained one project (LUXORA), creating an unbalanced filter experience.
* **Decision:** Remove the standalone "E-Commerce" filter button while preserving the LUXORA project under the "Web & Digital Products" category.
* **Rationale:** Maintains a balanced 4-category taxonomy ("Business Software", "AI & Analytics", "Web & Digital Products", "Mobile & Social Impact") while preserving the full e-commerce case study.

---

## ADR-005: Project Disambiguation and Route Aliases

* **Context:** Historical project drafts used working titles (e.g. "Restora" for the gig-worker rest point app; "Drishyam" alongside "Saksha"; "AI Product" for AGA).
* **Decision:**
  * The gig-worker rest network is officially titled **Oivu** (never Restora).
  * The SIH26189 crime analytics project is officially titled **SAKSHA / DRISHYAM**.
  * The GitHub intelligence assistant is officially titled **AGA AI Assistant**.
  * Router aliases (`/work/drishyam`, `/work/ecommerce`, `/work/ai-product`, `/work/restora`) are permanently preserved to prevent 404 errors from legacy links.
* **Rationale:** Maintains absolute factual integrity while ensuring zero broken links for prospective clients.

---

## ADR-006: Serverless Contact Form via Google Apps Script Web App

* **Context:** The studio requires incoming inquiries to reach `tetravate@gmail.com` with sender Reply-To, without managing a complex backend server or paying monthly SaaS fees.
* **Decision:** Maintain a serverless Google Apps Script Web App (`Code.gs`) that accepts POST requests formatted as `text/plain` and dispatches via `MailApp.sendEmail`.
* **Rationale:** Zero infrastructure maintenance, 100% serverless, zero external database attack surface, completely free of charge, with built-in honeypot spam protection.

---

## ADR-007: Dual Direct WhatsApp Options with Floating Contact Form Shortcut

* **Context:** Clients frequently prefer direct chat via WhatsApp for initial conversations, while other clients prefer structured project inquiry forms.
* **Decision:**
  * Preserve both founder WhatsApp numbers (`+91 63810 77598` and `+91 98941 65334`) with prefilled introductory text on the Contact page and footer.
  * Preserve the floating action button exclusively as an inquiry form shortcut to `/contact`.
  * Do not display a floating WhatsApp overlay icon to keep mobile viewports clean.
* **Rationale:** Provides rapid WhatsApp access where contextually expected without cluttering the screen or obstructing reading flows.

---

## ADR-008: Non-Destructive WebP Optimization, Focus Management, and Canonical Deduplication

* **Context:** The studio website contained large PNG assets (~4.2 MB total) impacting mobile page weights, lacked programmatic keyboard focus updates on client-side route transitions, and lacked route-specific canonical/social metadata.
* **Decision:**
  * Compress heavy image assets to WebP while preserving all original files on disk for archival safety, updating the Vite bundle entry and fallback asset map.
  * Implement accessible programmatic heading focus (`requestAnimationFrame` with `tabindex="-1"`) and `aria-current="page"` updates on navigation.
  * Serve static `robots.txt` and `sitemap.xml` for `https://tetravate.vercel.app`, and synchronize canonical tags, meta descriptions, and Open Graph tags across client routes.
  * Legacy route aliases (`/work/drishyam`, `/work/ecommerce`, `/work/ai-product`, `/work/restora`) dynamically point their canonical URLs to their respective primary project slugs.
  * Add a contextual inquiry CTA ("Interested in building something similar?") at the end of case studies that passes service pre-selection parameters into the contact form.
* **Rationale:** Reduces production bundled image size by 67% (saving 2.83 MB), improves screen-reader accessibility to WCAG standards, prevents duplicate SEO penalties from legacy URLs, and streamlines project inquiry conversion without altering brand styling or backend dependencies.

---

## ADR-009: Official Six-Service Taxonomy & Product Deployment Link Policy

* **Context:**
  1. The studio previously presented eight service categories. Management established an official source-of-truth service taxonomy comprising exactly six parent categories:
     - 1. Websites & Digital Experiences
     - 2. E-Commerce Solutions
     - 3. Web Applications & Systems
     - 4. AI & Data Solutions
     - 5. Backend & Integrations
     - 6. Deployment & Technical Support
  2. In the portfolio, only three products are genuinely deployed as public products: LUXORA (`tetravate-ecommerce`), MĀRA Dining (`mara-dining`), and Nivara ERP (`nivara-erp`). Other projects are either in-store internal deployments (AGS Masalas), development prototypes (AGA AI Assistant, MISTIQ 2.0, SAKSHA/DRISHYAM, Oivu, Pustakabhrita), or internal studio environments.
* **Decision:**
  * Adopt the exact six official parent service category names across all surfaces: homepage capabilities grid, dedicated `/services` page, contact form service inquiry `<select>` dropdown, case study contextual CTA pre-selection, and URL query-parameter handlers.
  * Consolidate previous service capabilities under the six parent categories without deleting technical depth (e.g. UI/UX design is nested under Websites & Digital Experiences; Data Analytics is nested under AI & Data Solutions; Third-Party Integrations is nested under Backend & Integrations).
  * Maintain backward-compatible URL pre-selection mapping in `initContactForm()` so legacy service links (e.g., `?service=Website%20Development`) map cleanly to official parent categories.
  * Restrict `liveDemo` buttons and links strictly to the three deployed products: LUXORA, MĀRA Dining, and Nivara ERP. Remove `liveDemo` link from AGA AI Assistant, updating its badge to "AI Prototype" and status to "Conversational task assistant prototype (Research & development build)".
* **Rationale:** Ensures complete clarity for clients, aligns with official studio positioning, establishes strict credibility regarding live product status, and prevents dead links or misrepresentation.

---

## ADR-010: Technology Showcase Refinement & Jargon Simplification

* **Context:** The technology showcase on `/services` previously contained specialist terminology and unverified items (e.g., "Vanilla JS", "DBSCAN", "NetworkX", "TimescaleDB", "Redis", "Next.js", "Docker", "AWS", "Mapbox GL") that overwhelmed prospective clients and did not reflect genuinely verified studio capabilities.
* **Decision:**
  * Adopt five simplified, client-friendly categories for the showcase (separate from the six official service categories):
    1. **Web & User Interfaces** (React, JavaScript, TypeScript, HTML & CSS, Responsive Design)
    2. **Backend & APIs** (Node.js, Python, FastAPI, REST APIs, Authentication)
    3. **Databases & Data** (PostgreSQL, Supabase, SQLite, Data Modelling, Offline Data Storage)
    4. **AI & Intelligent Systems** (AI Integrations, Chatbots & Assistants, Machine Learning, Data Analysis, Data Visualisation)
    5. **Development & Deployment** (Git & GitHub, Vite, Application Deployment, Cross-Device Testing, Progressive Web Apps)
  * Remove all unverified technologies that have no codebase or case study evidence in Tetravate's projects (Go, Next.js, React Native, TimescaleDB, Redis, PostGIS, Docker, AWS, Cloudflare).
  * Translate internal jargon into familiar client terms ("Vanilla JS" &rarr; "JavaScript", "IndexedDB" &rarr; "Offline Data Storage", "LLM Integration" &rarr; "AI Integrations").
  * Retain the existing 6-column / 5-card grid layout, typography, colors, and responsive behaviour without any visual disruption.
* **Rationale:** Communicates authentic studio engineering capabilities clearly to potential clients and decision-makers while maintaining strict credibility and preserving the established UI/UX design.


