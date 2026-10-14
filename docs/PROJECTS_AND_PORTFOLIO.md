# Tetravate Studio — Projects & Portfolio Inventory

> **Status:** Verified from `src/data/projects.js`, public assets, router implementation, and commit records.  
> **Last Verified:** October 2026

---

## 1. Portfolio Governance & Credibility Principles
1. **No Fabricated Claims:** Do not invent clients, adoption numbers, government affiliations, funding milestones, or fake metrics.
2. **Accurate Status Representation:** Clearly distinguish between live public deployments, interactive deployed prototypes, and concept architectures.
3. **Client & Project Feedback:** Feedback is limited to substantiated sources: genuine feedback from **AGS Masalas** (Retail POS Implementation) and carefully labelled paraphrase for the **Oivu Project** (Hackathon Feedback). No unverified formal partnerships or customer testimonials may be claimed.
4. **Project Disambiguation:**
   * **Oivu** is a civic welfare rest-point PWA concept for gig workers. Do not confuse it with a dining app or refer to it as "Restora".
   * **SAKSHA / DRISHYAM** is an AI crime intelligence & geospatial analytics prototype developed under SIH26189.
   * **Hack Odyssey** is excluded from the portfolio.
   * **E-Commerce Filter:** The dedicated standalone "E-Commerce" filter tab on `/work` has been removed; the LUXORA project is correctly grouped under "Web & Digital Products".

---

## 2. Complete Project Inventory (10 Projects)

### Project 1: LUXORA — Premium E-Commerce
* **ID:** `tetravate-ecommerce` | **Slug:** `tetravate-ecommerce` (Legacy route alias: `/work/ecommerce`)
* **Category:** Web & Digital Products
* **Verified Status:** **Live deployed application** (Deployed on Vercel)
* **Live Demo URL:** `https://luxora-nine-eta.vercel.app/`
* **GitHub URL:** None (proprietary / studio codebase)
* **Problem:** Shopping fragmentation across disconnected stores; lack of a unified digital storefront connecting product discovery with role-based order management.
* **Solution:** Centralized e-commerce platform with faceted category navigation, wishlist, shopping cart, customer accounts, and administrative catalog oversight.
* **Screenshots:**
  1. `/projects/tetravate-ecommerce-hero.png` (Store Homepage & Hero Banner)
  2. `/projects/tetravate-ecommerce-catalog.png` (Category Navigation & Product Catalog)

---

### Project 2: MĀRA — Modern Indian Dining
* **ID:** `mara-dining` | **Slug:** `mara-dining`
* **Category:** Web & Digital Products
* **Verified Status:** **Live deployed demo / Portfolio project** (Deployed on Vercel)
* **Live Demo URL:** `https://mara-restaurant-28hy.vercel.app/`
* **GitHub URL:** None
* **Problem:** Clunky, static restaurant PDF menus with poor mobile usability and no cohesive digital dining presence.
* **Solution:** Brand-led digital dining experience featuring culinary storytelling, dynamic menu exploration, dietary filtering, online ordering tray, and table reservation workflows.
* **Screenshots:**
  1. `/projects/mara-restaurant-hero.jpg` (Editorial Dining Hero & Experience)
  2. `/projects/mara-restaurant-menu.jpg` (Interactive Culinary Menu & Course Navigation)

---

### Project 3: Nivara ERP — College Management System
* **ID:** `nivara-erp` | **Slug:** `nivara-erp`
* **Category:** Business Software
* **Verified Status:** **Interactive architecture preview & prototype** (Deployed on Vercel)
* **Live Demo URL:** `https://tetravate-nivara.vercel.app`
* **GitHub URL:** None
* **Problem:** Fragmented academic records, attendance logs, and administrative processes across disconnected legacy spreadsheets.
* **Solution:** Unified campus management system featuring role-governed portals for students, faculty, and administrators, with attendance tracking and academic gradebooks.
* **Screenshots:**
  1. `/projects/nivara-erp-dashboard.jpg` (Academic Dashboard & Metrics Overview)
  2. `/projects/nivara-erp-login.jpg` (Multi-Role Portal Access Interface)

---

### Project 4: MISTIQ 2.0
* **ID:** `mistiq` | **Slug:** `mistiq`
* **Category:** AI & Analytics
* **Verified Status:** **Educational learning-support & code intelligence prototype**
* **Live Demo URL:** None (local prototype / research build)
* **GitHub URL:** None
* **Problem:** Novice programmers and computer science students struggle to interpret compiler errors, code smells, and algorithm structure from raw terminal logs.
* **Solution:** Code intelligence prototype providing visual syntax structure analysis, execution traces, and structured debugging assistance.
* **Screenshots:**
  1. `/projects/mistiq-platform-analysis.png` (Code Intelligence & Syntax Analysis View)
  2. `/projects/mistiq-platform-dna.jpg` (Algorithm DNA & Structural Flow Breakdown)

---

### Project 5: SAKSHA / DRISHYAM
* **ID:** `saksha` | **Slug:** `saksha` (Legacy route alias: `/work/drishyam`)
* **Category:** AI & Analytics
* **Verified Status:** **Crime intelligence & geospatial analytics prototype** (SIH26189 Concept)
* **Live Demo URL:** None (research prototype)
* **GitHub URL:** None
* **Problem:** Law enforcement agencies face disparate incident reports across jurisdictions, making serial crime patterns and geographic hotspots difficult to detect in time.
* **Solution:** Geospatial analytics and link-analysis prototype aggregating incident reports to visualize crime cluster heatmaps and connection networks.
* **Screenshots:**
  1. `/projects/saksha-crime-network.jpg` (Incident Network & Link-Analysis Graph)
  2. `/projects/saksha-crime-dashboard.jpg` (Geospatial Hotspots & Incident Matrix)

---

### Project 6: AGS MASALAS
* **ID:** `ags-masalas` | **Slug:** `ags-masalas`
* **Category:** Business Software
* **Verified Status:** **In-store retail deployment with Android and browser support**
* **Live Demo URL:** None (in-store private enterprise billing counter)
* **GitHub URL:** None
* **Problem:** Heavy retail foot traffic during evening rush hours caused billing bottlenecks; frequent local network drops crashed cloud-only billing software.
* **Solution:** Resilient, offline-first Point of Sale (POS) application with barcode scanning, local SQLite storage, background cloud sync, thermal receipt printing, and Android tablet support.
* **Verified Feedback:**
  > *"Tetravate observed our billing counter directly and built exactly what we needed: quick billing that never stops working when the Wi-Fi cuts out."*  
  > — **AGS Masalas**, Retail POS Implementation
* **Screenshots:**
  1. `/projects/ags-masalas-dashboard.jpg` (Retail Sales Analytics & Stock Oversight)
  2. `/projects/ags-masalas-pos-mobile.png` (High-Speed In-Store Billing Interface)

---

### Project 7: Pustakabhrita
* **ID:** `pustakabhrita` | **Slug:** `pustakabhrita`
* **Category:** Business Software
* **Verified Status:** **Offline-first application project / prototype**
* **Live Demo URL:** None
* **GitHub URL:** None
* **Problem:** Local tuition centers and independent tutors struggle with manual paper registers for fee records, student attendance, and parent notifications.
* **Solution:** Lightweight mobile and web tuition management app with offline attendance recording, student progress cards, and fee receipt generation.
* **Screenshots:**
  1. `/projects/pustakabhrita-tuition-mobile.png` (Tuition Management & Student Records Mobile Interface)

---

### Project 8: AGA AI Assistant
* **ID:** `aga-ai-assistant` | **Slug:** `aga-ai-assistant` (Legacy route alias: `/work/ai-product`)
* **Category:** AI & Analytics
* **Verified Status:** **Conversational task assistant prototype (Research & development build)**
* **Live Demo URL:** None (research & development prototype)
* **GitHub URL:** None
* **Problem:** Navigating open-source GitHub repositories to understand repo structure, recent commits, and pull requests requires extensive manual clicking.
* **Solution:** Context-aware GitHub repository assistant integrating structured repo queries, commit diff summaries, and technical explanation workflows.
* **Screenshots:**
  1. `/projects/aga-ai-assistant-interface.jpg` (Repository Intelligence Console)
  2. `/projects/aga-ai-assistant-chat.jpg` (Contextual Code Assistance & Query Thread)

---

### Project 9: Tetravate Workspace
* **ID:** `tetravate-workspace` | **Slug:** `tetravate-workspace`
* **Category:** Web & Digital Products
* **Verified Status:** **Active development workspace** (Shared GitHub development environment)
* **Live Demo URL:** None (internal tool)
* **GitHub URL:** None
* **Problem:** Distributed engineering teams experience configuration drift and setup overhead across development environments.
* **Solution:** Standardized internal workspace architecture providing unified dev scripts, linting configs, asset catalogs, and shared project scaffolding.
* **Screenshots:**
  1. `/projects/tetravate-workspace-github.png` (Standardized Repository Scaffolding & CI Pipeline)

---

### Project 10: Oivu — Rest Point Network
* **ID:** `oivu` | **Slug:** `oivu` (Legacy route alias: `/work/restora`)
* **Category:** Mobile & Social Impact
* **Verified Status:** **Civic welfare prototype & PWA concept architecture**
* **Live Demo URL:** None (prototype architecture)
* **GitHub URL:** None
* **Problem:** Gig delivery drivers and on-demand couriers work 10–14 hour shifts without reliable access to clean water, restrooms, or phone charging.
* **Solution:** Ultra-lightweight Progressive Web App (PWA target <400KB) mapping verified civic rest points with zero-login access and offline caching.
* **Asset Notice:** Uses screenshot assets `/projects/restora-1.jpeg` and `/projects/restora-2.jpeg` from early project drafting, but must **never** be labeled "Restora" in user-facing copy.
* **Screenshots:**
  1. `/projects/restora-1.jpeg` (Rest Point Discovery & Worker Navigation Interface)
  2. `/projects/restora-2.jpeg` (Live GPS Location, Corridor Search & Verified Amenities Map)

---

## 3. Route Aliases in Client-Side Router

To prevent broken links from external references or previous marketing collateral, `renderProjectDetailPage()` supports the following automatic aliases:
* `/work/drishyam` → resolves to `saksha`
* `/work/ecommerce` → resolves to `tetravate-ecommerce`
* `/work/ai-product` → resolves to `aga-ai-assistant`
* `/work/restora` → resolves to `oivu`
