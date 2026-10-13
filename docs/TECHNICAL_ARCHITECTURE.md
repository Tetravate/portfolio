# Tetravate Studio — Technical Architecture

> **Status:** Verified by inspecting `package.json`, `index.html`, `src/main.js`, `src/style.css`, `vite.config.js`, and `vercel.json`.  
> **Last Verified:** October 2026

---

## 1. Technology Stack

* **Build Tool:** Vite (`^6.2.0`)
* **Core Language:** Vanilla JavaScript (ES Modules, zero UI framework overhead)
* **Styling:** Custom Vanilla CSS (`src/style.css`, 5,400+ lines of custom design tokens and utility styles)
* **Markup:** Semantic HTML5 (`index.html`)
* **Package Management:** `npm` (`package.json`)
* **Production Deployments:** Vercel (`vercel.json`) and GitHub Pages (`.github/workflows/deploy.yml`)

### Non-Negotiable Architecture Constraints
* **DO NOT** rewrite or migrate this repository to React, Next.js, Vue, Svelte, or TypeScript without explicit instruction.
* Keep client bundles lean and maintainable using native Web APIs (`History API`, `fetch`, CSS custom properties).

---

## 2. Application Structure

```
c:\TETRAVATE\Portfolio\
├── .github/
│   └── workflows/deploy.yml       # Automated GitHub Pages CI/CD pipeline
├── google-apps-script/
│   └── Code.gs                    # Serverless email dispatch webhook for contact form
├── public/
│   ├── favicon.png                # Studio browser favicon
│   ├── logo-emblem.png            # Studio high-resolution emblem mark
│   └── projects/                  # Deployed static project screenshot assets (19 files)
├── src/
│   ├── assets/                    # Bundled SVGs, vector mockups, and backup project images
│   ├── data/
│   │   └── projects.js            # Centralized structured data (projects, services, team, etc.)
│   ├── main.js                    # SPA router, view renderers, form logic, interactions
│   └── style.css                  # Comprehensive design system, typography, animations
├── index.html                     # Root HTML shell, persistent navbar, footer, router root
├── package.json                   # Project metadata and build scripts
├── vercel.json                    # Single-Page Application rewrites and security headers
└── vite.config.js                 # Dev and preview server configuration
```

---

## 3. Client-Side Routing Architecture

The application uses an ES Module client-side router (`initRouter()` in `src/main.js`):

1. **Interception:** Captures click events on all internal anchors (`a[data-link]` and relative `a[href^="/"]`).
2. **History Management:** Uses `window.history.pushState(null, '', url)` to update URLs without page reloads.
3. **Popstate Listener:** Listens to `window.addEventListener('popstate', ...)` for seamless browser Back/Forward navigation.
4. **Target Container:** Injects page views dynamically into `<main id="app-router">`.
5. **Route Clean-Up:** Restores scroll position to `(0, 0)`, dismisses mobile drawer navigation, closes active image lightboxes, and re-attaches spotlight/scroll listeners.

### Primary Supported Routes
* `/` → `renderHomePage(container)`
* `/work` → `renderWorkPage(container)`
* `/work/:slug` → `renderProjectDetailPage(container, slug)`
* `/services` → `renderServicesPage(container)`
* `/process` → `renderProcessPage(container)`
* `/about` → `renderAboutPage(container)`
* `/contact` → `renderContactPage(container)`
* Wildcard / Unmatched → `renderNotFoundPage(container)`

### Server-Side Route Rewrites
* **Vercel (`vercel.json`):**
  ```json
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
  ```
  Allows users to directly refresh or load `/work/ags-masalas` or `/services` without 404 errors.
* **GitHub Pages (`.nojekyll`):** Prevents Jekyll processing of underscore folders or Vite build artifacts.

---

## 4. Centralized Data Architecture

All content is managed through `src/data/projects.js`:
* `featuredProjects`: Array of 10 complete project records (titles, slugs, statuses, case studies, metrics, screenshots, live links).
* `services`: Array of 6 official service categories with subServices, capabilities, idealFor, and portfolio proof references.
* `processSteps`: 5-step delivery methodology (`01 Discover`, `02 Define`, `03 Design`, `04 Develop`, `05 Deliver`).
* `whyTetravateReasons`: Value propositions (Practical Problem-Solving, Engineering-First, Transparent Communication, Budget Awareness).
* `technologyGroups`: Verified technology stack groupings organized into five client-friendly categories:
  1. *Web & User Interfaces* (React, JavaScript, TypeScript, HTML & CSS, Responsive Design)
  2. *Backend & APIs* (Node.js, Python, FastAPI, REST APIs, Authentication)
  3. *Databases & Data* (PostgreSQL, Supabase, SQLite, Data Modelling, Offline Data Storage)
  4. *AI & Intelligent Systems* (AI Integrations, Chatbots & Assistants, Machine Learning, Data Analysis, Data Visualisation)
  5. *Development & Deployment* (Git & GitHub, Vite, Application Deployment, Cross-Device Testing, Progressive Web Apps)
* `companyInfo`: Tagline, mission, contact emails, social links.
* `teamMembers`: 5 founders with bios, roles, and expertise.
* `achievements`: Studio milestones.
* `testimonials`: Approved client testimonial(s).

---

## 5. Build & Asset Optimization Baseline

* **Vite Production Build:** Run via `npm run build`.
* **Output:** Bundled into `dist/`.
* **Verified Bundle Sizes:**
  * CSS: `dist/assets/index-[hash].css` (~84.4 kB, gzip: ~14.1 kB)
  * JS: `dist/assets/index-[hash].js` (~199.2 kB, gzip: ~49.7 kB)
* **Static Assets:** 19 project screenshots located in `public/projects/` and `src/assets/projects/`.
