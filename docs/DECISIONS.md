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

---

## ADR-011: Production Excellence, WCAG Skip Link, Anchor Navigation & Structured Data

* **Context:** The comprehensive production audit identified:
  1. A missing skip-to-content link (WCAG 2.2 AA SC 2.4.1) for keyboard and assistive navigation.
  2. Clicking service deep links (e.g. `/services#service-${s.id}`) navigated to `/services` but stripped the hash and failed to scroll/focus the target card.
  3. Case study hero action CTA linked to `/contact` without carrying contextual service pre-selection query parameters.
  4. Search engines lacked JSON-LD schemas (`Organization` and `WebSite`) and Twitter card tags.
  5. Security headers lacked `Permissions-Policy`.
  6. Mandatory form fields lacked explicit `aria-required="true"`.
* **Decision:**
  * Implement an accessible `.skip-link` pointing to `#app-router` in `index.html` with high-contrast electric-blue focus styling in `src/style.css`.
  * Upgrade `handleRoute()` in `src/main.js` to preserve `#hash`, perform smooth scrolling to `document.getElementById(hash)`, and set accessible `-1` tabindex focus.
  * Update case study hero action CTA to link to `${ctaInquiryHref}` for consistent service pre-selection.
  * Add `@graph` JSON-LD schema with `Organization` and `WebSite` metadata, and synchronize Twitter cards alongside Open Graph tags.
  * Add `Permissions-Policy: camera=(), microphone=(), geolocation=()` to `vercel.json`.
  * Add `aria-required="true"` to mandatory contact form inputs.
  * Establish a zero-dependency automated test suite in `scripts/run_audit_tests.cjs` running on `npm test`.
* **Rationale:** Maximizes accessibility compliance, improves conversion continuity, enhances organic discoverability and social previews, hardens browser permissions, and prevents future regressions without altering brand identity or introducing UI framework dependencies.

---

## ADR-012: Homepage Vertical Spacing Refinement and Eyebrow Label Simplification

* **Context:**
  1. Excessive vertical whitespace (~166px) existed between the bottom of the homepage project cards section and the "What We Build" capabilities section. This was caused by additive section padding (`4.25rem` bottom + `4.25rem` top = `136px`), plus `.section-header-flex` bottom margin (`36px`) and an eyebrow label.
  2. The homepage suffered from repetitive small blue dot eyebrow labels (e.g. `FEATURED WORK` directly above `Selected Studio Projects`, and `CAPABILITIES` directly above `What We Build`).
  3. With the eyebrow removed from "What We Build", the heading container needed clean vertical centering with the "Full Services Overview" action button on desktop, and clean stacking on mobile.
* **Decision:**
  * Added scoped classes `.home-projects-section` and `.home-services-section` to regulate section boundary spacing.
  * Reduced bottom padding on `.home-projects-section` to `2.5rem` (40px) and top padding on `.home-services-section` to `2.5rem` (40px) on desktop (`2rem` / 32px on tablet/mobile), establishing an intentional, equidistant 80px transition across the section border without negative margin hacks.
  * Removed redundant `CAPABILITIES` eyebrow label above "What We Build" and `FEATURED WORK` eyebrow label above "Selected Studio Projects", while preserving meaningful context labels (`// PHILOSOPHY` and `OUR METHODOLOGY`).
  * Updated `.section-header-flex` to `align-items: center` on desktop to keep the heading and button centered on the same baseline, and added `@media (max-width: 640px)` rules to stack them cleanly with `1rem` gap.
  * Preserved the 6 official service categories and compact homepage service card grid.
* **Rationale:** Creates a tighter, visually connected homepage flow, eliminates redundant visual noise, and ensures consistent responsive alignment across all viewports.

---

## ADR-013: Google Search Indexing & Brand Discoverability Optimization

* **Context:**
  The user requested that searching "tetravate" on Google immediately indexes and ranks the website. In a client-side SPA, crawlers that don't execute JS immediately can face delayed indexing. Furthermore, explicit brand meta directives, alternate organization names, rich structured data schemas, and up-to-date sitemaps were required to maximize brand authority on search engines.
* **Decision:**
  * Added explicit search bot directives: `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`, `<meta name="googlebot" ...>`, and `<meta name="bingbot" ...>`.
  * Added brand keywords and site name meta tags: `<meta name="keywords" ...>`, `<meta property="og:site_name" content="Tetravate" />`, `<meta name="application-name" content="Tetravate" />`.
  * Added `<meta name="google-site-verification" content="" />` placeholder for seamless Google Search Console ownership verification.
  * Enhanced JSON-LD structured data with `alternateName` variations (`Tetravate Studio`, `Tetravate Technologies`, `Tetravate Digital`), `knowsAbout`, `slogan`, and `SiteNavigationElement` for sitelinks generation.
  * Added an SEO prerendered semantic `<noscript>` shell in `<main id="app-router">` containing comprehensive studio headings, official services, case studies, and contact links for immediate first-wave indexing by raw crawlers.
  * Updated `public/robots.txt` with explicit `User-agent: Googlebot` and `User-agent: Bingbot` permissions.
  * Updated `public/sitemap.xml` with current `<lastmod>` timestamps across all 16 canonical studio routes.
* **Rationale:** Eliminates SPA indexing latency, maximizes textual relevance for the brand name "Tetravate", and ensures Googlebot has full crawl access and structured metadata to index and rank the domain.

---

## ADR-014: Services Page Project Reference Simplification & "Project Example →" Button

* **Context:**
  On the Services page (`/services`), service cards previously featured a `"VERIFIED STUDIO DEMONSTRATION"` label and text links that occasionally combined multiple projects into one hyperlink (e.g., `"MĀRA Modern Dining & Oivu ↗"` linking to a single destination), creating user confusion regarding where the link led.
* **Decision:**
  * Completely removed the obsolete `"VERIFIED STUDIO DEMONSTRATION"` label and refrained from introducing any `"RELATED PROJECTS"` replacement label.
  * Replaced the text link with a dedicated, professional secondary button labelled `"Project Example →"`.
  * Assigned exactly one clear, representative verified project per service:
    1. Websites & Digital Experiences &rarr; **MĀRA Modern Dining** (`/work/mara-dining`)
    2. E-Commerce Solutions &rarr; **LUXORA** (`/work/tetravate-ecommerce`)
    3. Web Applications & Systems &rarr; **Nivara ERP** (`/work/nivara-erp`)
    4. AI & Data Solutions &rarr; **SAKSHA** (`/work/saksha`)
    5. Backend & Integrations &rarr; **Nivara ERP** (`/work/nivara-erp`)
    6. Deployment & Technical Support &rarr; **AGS Masalas POS** (`/work/ags-masalas`)
  * Preserved multi-project associations in the underlying data (`relatedProjectSlugs` in `src/data/projects.js`).
  * Styled `.service-example-btn` and `.service-card-actions` to ensure clean vertical stacking and alignment with the primary inquiry CTA across desktop and mobile viewports.
  * Added automated regression tests to `scripts/run_audit_tests.cjs` verifying the absence of obsolete labels and the integrity of all project example routes.
* **Rationale:** Clarifies navigation, presents a cleaner editorial UI, ensures unambiguous single-destination click paths, and maintains the integrity of the studio's verified case study portfolio.

---

## ADR-015: Services Page Streamlining & Process Panel Removal

* **Context:**
  The Services page (`/services`) contained a standalone philosophy progression panel (*"One unified capability. Zero isolated silos."*) previewing the 5-step methodology (Understand, Define, Design, Build, Deliver). This duplicated the dedicated Process page (`/process`) and introduced unnecessary vertical bulk before reaching the 6 official service offerings.
* **Decision:**
  * Removed the redundant progression panel (`.services-progression-banner`) from the Services page, allowing visitors to access the 6 core services immediately.
  * Simplified the Services page introduction:
    * Heading: `"Services Built Around Real Needs"`
    * Lead Description: `"Explore six connected capabilities that help turn ideas into useful digital products."`
  * Preserved all 6 official service cards, detailed descriptions, subservice listings, capabilities, and `"Project Example →"` buttons.
  * Reused the existing closing CTA block with concise, focused copy:
    * Heading: `"One idea. The right capabilities to build it."`
    * Lead: `"From initial planning to deployment, we bring the right skills together to deliver practical digital solutions."`
    * CTA Button: `"Start a Project →"` (navigates to `/contact`).
  * Verified that the Process page (`/process`) remains completely intact with its full 5-stage workflow (`Discover`, `Define`, `Design`, `Develop`, `Deliver`).
  * Added automated regression tests in `scripts/run_audit_tests.cjs` confirming the removal of the duplicate process banner, the updated headings, and Process page integrity.
* **Rationale:** Creates a concise, focused Services page that introduces studio capabilities without redundant methodology bloat, while preserving the dedicated Process page for comprehensive workflow details.

---

## ADR-016: Client & Project Feedback Section Refinement

* **Context:**
  The about page previously displayed the testimonial section under the eyebrow `"PARTNER PERSPECTIVES"` with the subtitle `"Verified feedback from business operators and partners."` Furthermore, the attribution for AGS Masalas used `"Retail Business Partner"`, which could imply a formal business partnership that has not been legally or formally established. Additionally, hackathon feedback for the Oivu project needed to be integrated accurately without inventing direct quotations or claiming unverified evaluator relationships.
* **Decision:**
  * Updated the section heading and copy:
    * Eyebrow: `"CLIENT & PROJECT FEEDBACK"` (replaced `"PARTNER PERSPECTIVES"`).
    * Subtitle: `"Feedback from people who have experienced our work."` (replaced `"Verified feedback from business operators and partners."`).
  * Refined AGS Masalas feedback:
    * Retained genuine quote: *"Tetravate observed our billing counter directly and built exactly what we needed: quick billing that never stops working when the Wi-Fi cuts out."*
    * Attribution cleanly set to:
      * **AGS Masalas**
      * Retail POS Implementation
    * Removed `"Retail Business Partner"` label across all codebase references.
  * Added Oivu Hackathon Feedback:
    * Added transparently labelled paraphrase: *"The feedback highlighted our understanding of the problem and our implementation of the proposed solution."*
    * Attribution: **Oivu Project** (Hackathon Feedback).
    * Ensured no fabricated quotes, fake ratings, or unverified evaluator titles were used.
  * Layout & Visual Polish:
    * Clean two-card balanced grid on desktop (`repeat(2, 1fr)`) with flex column height-matching and responsive single-column vertical stack on mobile (`1fr`).
    * Removed bulky serif quotation mark icon (`“`) for a cleaner modern aesthetic.
    * Maintained Tetravate design system (Deep Navy `#011641`, Electric Blue `#0065FF`, clean typography, WCAG AAA contrast).
  * Automated regression tests added to verify heading copy, attribution accuracy, and absence of outdated claims.
* **Rationale:** Protects studio credibility by presenting authentic feedback with precise, honest attributions, avoiding exaggerated claims of corporate partnerships.

---

## ADR-017: Feedback & Recognition Content Presentation Redesign

* **Context:**
  While AGS Masalas is a genuine deployed retail client providing a direct testimonial quote, Oivu is a civic welfare project evaluated during a hackathon. To ensure seamless aesthetic balance and equal editorial weight, both feedback entries required a unified card architecture rather than visually asymmetric layouts.
* **Decision:**
  * Updated section heading to `"Feedback & Recognition"` with supporting text: `"Experiences, feedback, and milestones from our work."`
  * Implemented a unified, structured card design across both entries:
    1. **Card 1: AGS Masalas**
       * Tag: `"AGS MASALAS"`
       * Headline: `"Direct Counter Observation. Resilient Offline Billing."`
       * Content: *"“Tetravate observed our billing counter directly and built exactly what we needed: quick billing that never stops working when the Wi-Fi cuts out.”"*
       * Attribution: **AGS Masalas** / Retail POS Implementation.
    2. **Card 2: Oivu Project**
       * Tag: `"OIVU"`
       * Headline: `"Understanding the Problem. Building the Solution."`
       * Content: *"Oivu was developed around the challenges faced by gig workers seeking accessible rest points. Our hackathon feedback recognised our understanding of the problem and our implementation of the proposed solution."*
       * Attribution: **Oivu Project** / Hackathon Experience.
  * Visual & Layout Balance:
    * Both cards share the same outer card container styles (Deep Navy `#011641`, border `#E2E8F0`, Electric Blue hover `#0065FF`, balanced desktop flex height, vertical mobile stack).
    * Restored Oivu's preferred milestone narrative without quotation marks while mirroring the same tag, headline, and attribution format on the AGS Masalas card.
    * No unverified judges, organizers, awards, rankings, or formal partnership labels were introduced.
* **Rationale:** Clearly differentiates client testimonials from project hackathon recognition while achieving complete visual symmetry and design cohesion across the section.

---

## ADR-018: Our Core Principles Section Refinement

* **Context:**
  The "Our Core Principles" section on `/about` previously listed exploratory values (*Thoughts*, *Kindness*, *Humanity*) that were less actionable and did not represent the studio's professional business principles (*Integrity*, *Innovation*, *Accountability*).
* **Decision:**
  * Retained the section title: `"Our Core Principles"`.
  * Updated the subtitle to: `"The values that guide how we work, build, and earn trust."`
  * Standardized the five official core principles:
    1. **01 Trust:** Honest communication, transparent decisions, realistic commitments, and relationships built on trust.
    2. **02 Quality:** Thoughtfully engineered solutions with attention to reliability, usability, accessibility, and lasting value.
    3. **03 Integrity:** Doing what is right, communicating honestly, and being transparent about our capabilities, decisions, and limitations.
    4. **04 Innovation:** Turning thoughtful ideas into practical solutions through purposeful technology, experimentation, and continuous learning.
    5. **05 Accountability:** Taking ownership of our work, addressing challenges, and standing behind the commitments we make.
  * Preserved the 3-on-row-1 / 2-centered-on-row-2 desktop grid (`repeat(6, 1fr)`), centered 5th card on tablet, and single vertical stack on mobile.
  * Updated `docs/COMPANY_CONTEXT.md` to establish these five values as the studio's official principles.
* **Rationale:** Communicates Tetravate's professional standards with clarity and precision, aligning with client expectations while maintaining visual balance.
