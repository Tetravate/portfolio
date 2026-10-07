// Tetravate Portfolio - Centralized Structured Project & Studio Data
// Strict Original Brand Identity: Deep Navy (#071527, #0B1F3A) + Tetravate Blue (#2563EB) + White (#FFFFFF)

export const featuredProjects = [
  {
    id: "ags-masalas",
    slug: "ags-masalas",
    title: "AGS Masalas POS",
    subtitle: "Mobile-First Retail Billing & Business Management System",
    category: "Business Software",
    categoryTag: "Business Software / POS",
    quickTags: ["Offline-First", "Retail POS", "WhatsApp Invoicing", "Supabase"],
    outcomeNarrative: "Paper registers & manual tallying → Sub-second mobile counter billing with 100% offline continuity",
    summary: "A reliable point-of-sale system built for a high-turnover retail business, supporting fast mobile billing, instant WhatsApp invoices, customer credit tracking, and resilient offline operation.",
    overview: "AGS Masalas needed a solution that eliminated slow handwritten bills, tracked pending customer balances without messy paper registers, and could operate seamlessly even when store internet connection fluctuated.",
    highlights: [
      "Sub-second checkout workflow optimized for busy store counters",
      "Direct digital invoice delivery via WhatsApp API",
      "Pending customer balance and khata credit tracking",
      "Offline-first architecture with automatic sync when connected",
      "Dynamic unit conversion across wholesale and retail weights"
    ],
    features: [
      { num: "01", title: "Smart Counter Billing", desc: "Rapid touch item selection with dynamic unit conversions and instant discount calculations." },
      { num: "02", title: "Offline-First Engine", desc: "Local IndexedDB caching ensures transactions never stall during shop network drops." },
      { num: "03", title: "Customer Credit Ledger", desc: "Digital khata tracks pending balances with verified timestamps and payment history." },
      { num: "04", title: "WhatsApp PDF Invoices", desc: "Automated digital receipts sent directly to customer phones via WhatsApp API." },
      { num: "05", title: "Real-Time Stock Alerts", desc: "Low-inventory warnings prevent unexpected stockouts during peak retail hours." },
      { num: "06", title: "Cloud Synchronization", desc: "Conflict-free background replication to Supabase when connectivity restores." }
    ],
    techStack: ["React", "TypeScript", "Supabase", "IndexedDB", "WhatsApp API", "Tailored POS Print Engine"],
    techGrouped: {
      frontend: "React · TypeScript · Mobile Web",
      backend: "Supabase · PostgreSQL · Edge Functions",
      database: "IndexedDB Local Cache · Service Worker Queue",
      integrations: "WhatsApp Business API · Thermal Receipt Engine"
    },
    caseStudy: {
      problem: "In traditional retail masala counters, peak shopping hours create severe bottlenecks. The store relied on paper bills and manual ledger books ('khata') to track regular customers' credit balances. During network outages, digital billing apps frequently froze, causing lost sales and frustrated customers.",
      goal: "Design a fast, dependable mobile-friendly billing tool that retail staff can operate with one hand, works with zero lag, sends receipts directly to customers' phones, and never stops working during connectivity drops.",
      challenge: "Retail environments are noisy and fast-paced. Staff members cannot navigate nested menus or complex software screens. Furthermore, wholesale and retail weight variations (grams vs kilograms) needed instant rate calculation without manual arithmetic errors.",
      approach: "Tetravate visited the shop floor to observe the billing rhythm. We mapped every keystroke and touch required for a standard transaction. We chose an offline-first architecture where every sale is written locally first to IndexedDB and synchronized with Supabase in the background once internet connectivity is confirmed.",
      solution: "A streamlined POS interface featuring quick-access product tiles, dynamic unit conversion, single-tap customer ledger search, automatic pending balance alerts, and one-click WhatsApp PDF invoice generation.",
      technicalDecisions: "We selected Supabase for real-time inventory updates and Row Level Security, paired with a custom service-worker synchronization queue. When offline, all cryptographic bill IDs are pre-generated locally to prevent reconciliation conflicts upon reconnection.",
      result: "Delivered a functional workflow covering billing, inventory, and customer credit management. Replaced physical duplicate books with a unified tablet and mobile workflow with zero transaction loss during local network drops.",
      learned: "High-tech software fails on the counter if it requires extra steps. The most valued feature was not a fancy chart, but the ability to complete a bill without waiting for an internet spinner.",
      metrics: [
        { label: "Offline Resilience", value: "100%", note: "Zero transaction loss during local network drops" },
        { label: "Checkout Steps", value: "3 taps", note: "From item selection to generated receipt" },
        { label: "Ledger Accuracy", value: "Verified", note: "Real-time digital khata balance tracking" },
        { label: "Deployment Status", value: "Active Store Use", note: "Daily in-store retail operations" }
      ],
      narrative: {
        challenge: "Paper registers, slow arithmetic calculation during rush hours, and frequent network blackouts that broke standard cloud software.",
        approach: "Shop-floor observation, touch-optimized ergonomics, local-first IndexedDB architecture with deterministic conflict-free replication.",
        outcome: "Delivered an active retail billing engine with zero cloud latency during checkout and automatic background sync."
      }
    },
    mockupType: "pos-interface",
    liveDemo: "https://pos.tetravate.io",
    demoLabel: "Active In-Store Production System",
    github: null
  },
  {
    id: "drishyam",
    slug: "drishyam",
    title: "DRISHYAM",
    subtitle: "Geospatial Crime Intelligence & Pattern Analysis Platform",
    category: "AI & Analytics",
    categoryTag: "AI / Analytics / Intelligence",
    quickTags: ["Geospatial", "PostGIS", "DBSCAN", "Network Analysis"],
    outcomeNarrative: "Fragmented spreadsheets → Unified geospatial intelligence with explainable clustering",
    summary: "An AI-powered intelligence platform for analyzing crime data, identifying patterns, and visualizing high-risk areas with deterministic clustering and explainable evidence.",
    overview: "Law enforcement and civic analytics bodies struggle with fragmented spreadsheets and siloed incident records. DRISHYAM unifies historical incident data onto an intuitive geospatial map with relationship network graphs.",
    highlights: [
      "Spatial density and heat-cluster visualization",
      "Temporal pattern detection (time-of-day and seasonal shifts)",
      "Entity relationship graph mapping connected incidents",
      "Explainable clustering without speculative black-box predictions",
      "Multi-precinct spatial query filtering"
    ],
    features: [
      { num: "01", title: "Interactive Spatial Maps", desc: "Dynamic vector tile rendering showing verified incident hotspots across districts." },
      { num: "02", title: "DBSCAN Hotspot Detection", desc: "Density-based spatial clustering that separates genuine clusters from ambient noise." },
      { num: "03", title: "Network Relationship Graph", desc: "Entity link graphs surfacing repeat associates, vehicles, and operational methods." },
      { num: "04", title: "Temporal Trend Windows", desc: "Time-of-day and cyclical day-of-week shift analysis to guide resource allocation." },
      { num: "05", title: "Multi-Precinct Unification", desc: "Consolidated spatial canvas across disparate precinct boundaries and jurisdictions." },
      { num: "06", title: "Explainable Risk Scoring", desc: "Deterministic scoring with every cluster traceable to verifiable incident logs." }
    ],
    techStack: ["Python", "FastAPI", "PostGIS / PostgreSQL", "DBSCAN", "NetworkX", "Mapbox GL"],
    techGrouped: {
      frontend: "Mapbox GL · Vector Canvas · Responsive Dashboard",
      backend: "Python · FastAPI · Asynchronous REST API",
      database: "PostgreSQL · PostGIS Spatial Engine",
      ai_analytics: "DBSCAN Clustering · Kernel Density Estimation · NetworkX"
    },
    caseStudy: {
      problem: "Incident data is frequently logged into static spreadsheets across disconnected precinct jurisdictions. Analysts spend days manually cross-referencing locations, modus operandi, and timestamps to recognize whether repeat incidents share common geographical or chronological links.",
      goal: "Create a centralized intelligence dashboard that structures multi-source crime data, highlights verifiable spatial clusters, and provides investigative analysts with transparent, interpretable pattern detection tools.",
      challenge: "Geospatial data is messy, with imprecise addresses and varying reporting formats. Moreover, AI systems in public safety must strictly avoid speculative 'predictive policing' claims or biased black-box algorithms that mislead decision-makers.",
      approach: "Tetravate focused on deterministic geospatial analytics and interpretable clustering (DBSCAN and Kernel Density Estimation) rather than opaque predictive black boxes. Every cluster surfaced by the software is accompanied by the exact verified incident coordinates and source records that formed it.",
      solution: "DRISHYAM provides analysts with dual synchronized views: a geospatial map displaying spatial density clusters, and a relationship graph showing linked associates, vehicles, or recurring modus operandi. Analysts can filter by time window, incident category, and geographic perimeter.",
      technicalDecisions: "PostgreSQL with PostGIS was chosen as the spatial database engine to execute high-performance spatial queries directly at the database layer. The web frontend was built with responsive vector rendering to smoothly display thousands of coordinate nodes without frame drops.",
      result: "Demonstrated how disparate spatial records can be synthesized into an actionable intelligence canvas. The tool provides clear visual clarity for operational planning while adhering to ethical, interpretable guidelines.",
      learned: "In analytical tools for sensitive domains, explainability and restraint are paramount. Providing analysts with clean spatial filters and verifiable source evidence builds far greater trust than opaque 'AI predictions'.",
      metrics: [
        { label: "Spatial Query Speed", value: "Sub-second", note: "Evaluated on multi-thousand incident coordinate records" },
        { label: "Algorithmic Transparency", value: "100% Explainable", note: "Every hotspot traces directly to verified incident logs" },
        { label: "Multi-Jurisdiction View", value: "Unified", note: "Combined multi-precinct spatial views in a single screen" },
        { label: "Evaluation Stage", value: "Research & Prototype", note: "Grounded analytical system without speculative claims" }
      ],
      narrative: {
        challenge: "Fragmented municipal logs, lack of spatial coordination across precincts, and risks of misleading predictive algorithms.",
        approach: "Deterministic PostGIS clustering, dual geospatial/graph view, explainable metric tracking.",
        outcome: "A functional intelligence canvas unifying multi-source incident records with sub-second response times."
      }
    },
    mockupType: "intelligence-dashboard",
    liveDemo: "https://drishyam.tetravate.io",
    demoLabel: "Research & Prototype Platform",
    github: null
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "Modern E-Commerce",
    subtitle: "High-Performance Commerce Experience & Digital Storefront",
    category: "E-Commerce",
    categoryTag: "E-Commerce / Digital Storefront",
    quickTags: ["Fast Checkout", "Dynamic Filtering", "Payment Gateway", "Cart State"],
    outcomeNarrative: "Clunky multi-page store navigation → Sub-100ms product discovery and fluid frictionless conversion",
    summary: "A modern commerce experience focused on product discovery, shopping, and conversion with instant faceted filtering, persistent micro-cart, and optimized single-screen checkout.",
    overview: "Traditional online storefronts suffer from heavy bloated plugins, sluggish product filters, and high abandonment rates during checkout. We engineered a streamlined, lightning-fast digital storefront with instant category faceted search, persistent micro-cart, and direct checkout pipeline.",
    highlights: [
      "Instant faceted search & category filtering without page reloads",
      "Optimistic cart updates with persistent storage synchronization",
      "Responsive product gallery with clean editorial aesthetics",
      "Streamlined checkout modal minimizing form abandonment",
      "Mobile-first navigation designed for one-thumb shopping"
    ],
    features: [
      { num: "01", title: "Faceted Product Discovery", desc: "Instant client-side filter engine with multi-attribute search and zero loading flickers." },
      { num: "02", title: "Persistent Micro-Cart", desc: "Fly-out slide drawer cart with optimistic updates and local storage fallback." },
      { num: "03", title: "Editorial Visual Gallery", desc: "High-resolution product presentations with aspect-ratio preservation and zoom inspection." },
      { num: "04", title: "Single-Screen Checkout", desc: "Streamlined single-page checkout minimizing form drop-offs with auto-fill addresses." },
      { num: "05", title: "Secure Payment Pipeline", desc: "Direct integration with Stripe and secure card tokens without redirect delays." },
      { num: "06", title: "Stock & Inventory Guard", desc: "Real-time stock validation preventing cart placement for sold-out SKU variations." }
    ],
    techStack: ["JavaScript", "Modern CSS", "Node.js", "Stripe API", "PostgreSQL", "Cloudflare"],
    techGrouped: {
      frontend: "Modern Vanilla JS · Modular CSS · Micro-Cart Engine",
      backend: "Node.js · Express API · Webhook Listeners",
      database: "PostgreSQL · Redis Session Cache",
      integrations: "Stripe Payment Intents · Automated Order Notifications"
    },
    caseStudy: {
      problem: "Online stores often lose potential customers at two critical drop-off points: slow filter rendering when browsing catalogs, and convoluted multi-step checkout processes with unnecessary account creation requirements.",
      goal: "Build a fast, visually refined commerce interface that prioritizes swift product discovery, frictionless cart manipulation, and single-page checkout.",
      challenge: "Balancing rich editorial product imagery with strict performance budgets, while maintaining real-time inventory validation so customers never attempt to buy out-of-stock variations.",
      approach: "We architected an optimistic client-side state store for all cart modifications, paired with debounced server-side inventory verification and CDN-cached catalog queries.",
      solution: "A high-conversion storefront featuring category pills, instant live search, full-bleed product previews, sticky mobile checkout tray, and integrated secure payment gateways.",
      technicalDecisions: "Avoided bloated third-party plugin suites in favor of bespoke lightweight checkout endpoints. Leveraged edge caching to deliver sub-100ms catalog responses globally.",
      result: "Delivered a complete commerce experience with smooth navigation, rapid loading, and verified cart-to-checkout flows.",
      learned: "In modern commerce, speed directly dictates conversion. Removing a single unnecessary checkout step creates far more value than complex recommendation widgets.",
      metrics: [
        { label: "Catalog Response", value: "< 120ms", note: "Edge-cached product query latency" },
        { label: "Checkout Steps", value: "Single Screen", note: "Streamlined single-page conversion flow" },
        { label: "Bundle Weight", value: "Ultra-Light", note: "Zero unnecessary heavy third-party framework overhead" },
        { label: "Implementation Stage", value: "Production Ready", note: "Fully tested cart and checkout architecture" }
      ],
      narrative: {
        challenge: "High cart abandonment, bloated e-commerce templates, and sluggish category filtering.",
        approach: "Lightweight bespoke architecture, sub-second product search, single-step checkout flow.",
        outcome: "A functional, responsive commerce storefront ready for high-conversion merchant operations."
      }
    },
    mockupType: "ecommerce-store",
    liveDemo: "https://store.tetravate.io",
    demoLabel: "Production Storefront Architecture",
    github: null
  },
  {
    id: "mistiq",
    slug: "mistiq",
    title: "MISTIQ",
    subtitle: "SaaS Learning Intelligence & Cognitive Error Scaffolding",
    category: "SaaS & AI",
    categoryTag: "SaaS / Product / Education ML",
    quickTags: ["Adaptive Learning", "Trajectory ML", "Cognitive Scaffolding", "SaaS Dashboard"],
    outcomeNarrative: "Punitive right/wrong scoring → Supportive step-level guidance that prevents student frustration",
    summary: "An educational SaaS intelligence platform that models student problem-solving trajectories to anticipate specific cognitive pitfalls and provide timely, gentle hints before frustration sets in.",
    overview: "Traditional learning software only grades answers as right or wrong after the fact. MISTIQ analyzes intermediate problem-solving steps to understand where misconceptions originate and intervenes with personalized micro-explanations.",
    highlights: [
      "Step-by-step problem path analysis rather than just final score evaluation",
      "Misconception pattern taxonomy categorizing common student reasoning traps",
      "Adaptive hint scaffolding that encourages self-correction",
      "Calm, encouraging feedback tone avoiding robotic red error marks",
      "Educator analytics identifying systemic curriculum friction"
    ],
    features: [
      { num: "01", title: "Step-Level Trajectory Modeling", desc: "Tracks intermediate mathematical and reasoning steps rather than just final answers." },
      { num: "02", title: "Misconception Taxonomy", desc: "Categorizes reasoning traps into specific foundational, sign, or rule misunderstandings." },
      { num: "03", title: "Socratic Scaffolding Engine", desc: "Generates encouraging leading questions that prompt students to discover errors themselves." },
      { num: "04", title: "Calm Studio Learning Canvas", desc: "Distraction-free dark canvas avoiding harsh red failure badges that induce anxiety." },
      { num: "05", title: "Educator Diagnostic Insights", desc: "Aggregates classroom-wide confusion nodes to help teachers adapt upcoming lectures." },
      { num: "06", title: "Deterministic Safety Rules", desc: "Guarantees AI guidance strictly adheres to certified pedagogical curriculum bounds." }
    ],
    techStack: ["Python", "Trajectory Modeling", "FastAPI", "React / Learning UI", "Structured Cognitive Taxonomies"],
    techGrouped: {
      frontend: "React · Interactive Math Canvas · Step Visualizer",
      backend: "Python · FastAPI · REST & Streaming API",
      ai_models: "Sequential Trajectory ML · Markov State Decision Engine",
      curriculum: "Structured Cognitive Misconception Taxonomy"
    },
    caseStudy: {
      problem: "When students struggle with complex STEM concepts, standardized homework platforms simply mark an answer wrong with a red 'X'. This triggers anxiety and discouragement without explaining the exact faulty assumption that derailed the student's reasoning.",
      goal: "Build a supportive learning tool that monitors step-by-step problem progressions, predicts the likely next misconception based on the student's current work, and provides constructive scaffolding before they abandon the problem.",
      challenge: "Different students make errors for entirely different reasons: some misapply a formula rule, while others make simple sign inversion slips. The system must distinguish conceptual misunderstandings from careless typos without overwhelming the student.",
      approach: "Tetravate designed a sequential learning engine that maps student intermediate calculations against an annotated graph of valid and invalid problem states. By identifying the exact divergence point, MISTIQ can surface a targeted micro-question that guides the student back on track.",
      solution: "An interactive learning canvas where students show their work step-by-step. Instead of waiting for submission, the interface subtly highlights ambiguous logic and presents gentle, socratic guidance tailored to the student's specific step.",
      technicalDecisions: "We combined lightweight rule-based knowledge trees with Markov decision trajectory scoring. This ensured all interventions remain deterministic, pedagogically sound, and explainable to educators.",
      result: "Proved an alternative to punitive grading systems. Evaluated how cognitive-sensitive interfaces preserve student confidence, reduce abandonment rates during difficult exercises, and help learners build genuine understanding.",
      learned: "Education technology should build confidence, not anxiety. When software acts like a patient human tutor rather than an automated grading machine, students become comfortable exploring difficult problems.",
      metrics: [
        { label: "Scaffolding Paradigm", value: "Step-Level", note: "Evaluates the train of thought, not just the final number" },
        { label: "Feedback Style", value: "Socratic Guidance", note: "Encouraging prompts rather than abrupt failure marks" },
        { label: "Misconception Map", value: "Categorized", note: "Differentiates syntax slips from foundational conceptual gaps" },
        { label: "Stage", value: "Concept & Prototype", note: "Pedagogical ML research prototype" }
      ],
      narrative: {
        challenge: "Punitive automatic grading creates anxiety without addressing root conceptual confusion.",
        approach: "Step-by-step reasoning analysis, structured cognitive taxonomy, patient conversational hints.",
        outcome: "A functional pedagogical AI prototype fostering student confidence and deeper conceptual mastery."
      }
    },
    mockupType: "education-canvas",
    liveDemo: "https://mistiq.tetravate.io",
    demoLabel: "SaaS Pedagogical Prototype",
    github: null
  },
  {
    id: "oivu",
    slug: "oivu",
    title: "Oivu",
    subtitle: "Dedicated Rest-Point Network Platform for Gig Workers",
    category: "Mobile & Social Impact",
    categoryTag: "Mobile / Social Impact",
    quickTags: ["Lightweight PWA", "Accessible UI", "Zero Login", "Offline Map"],
    outcomeNarrative: "Disconnected street navigation → Instant low-bandwidth access to verified worker rest hubs",
    summary: "A human-centered digital platform mapping and coordinating verified rest points equipped with clean drinking water, washrooms, shade, and phone charging for delivery riders and cab operators.",
    overview: "Millions of gig delivery workers spend 10 to 14 hours a day on the road with no access to basic sanitary facilities or safe places to rest between orders. Oivu turns empty community spaces into verified rest hubs.",
    highlights: [
      "Real-time map of verified shelter hubs with amenity tags",
      "Crowdsourced status updates on water and charging availability",
      "Low-bandwidth, multi-language interface designed for on-road mobile use",
      "Partner dashboard for local businesses offering rest spaces",
      "Zero account barriers for immediate on-demand discovery"
    ],
    features: [
      { num: "01", title: "Verified Amenity Map", desc: "Real-time location finder indexing clean water, charging, shade, and restrooms." },
      { num: "02", title: "Zero Login Friction", desc: "Instant location access without mandatory sign-up or profile barriers." },
      { num: "03", title: "Ultra-Lightweight PWA", desc: "Engineered under 400KB to load smoothly on budget phones and weak 2G/3G signals." },
      { num: "04", title: "Crowdsourced Facility Reports", desc: "One-tap status confirmations ensuring amenity info stays current throughout the day." },
      { num: "05", title: "Partner Space Portal", desc: "Merchant registration tool allowing cafes and fuel pumps to offer shelter." },
      { num: "06", title: "Offline Zone Caching", desc: "Recent operational district maps cached locally to work through mobile dead zones." }
    ],
    techStack: ["Progressive Web App (PWA)", "Tailored Location Engine", "Supabase Realtime", "Multi-Language UI", "Accessible Touch System"],
    techGrouped: {
      frontend: "Progressive Web App (PWA) · Touch-First High Contrast UI",
      backend: "Supabase Realtime · Edge Functions",
      database: "PostgreSQL · Local Browser Geo Cache",
      localization: "Lightweight Multi-Language Translation Engine"
    },
    caseStudy: {
      problem: "Food delivery riders, parcel couriers, and ride-hailing drivers spend long hours in extreme weather conditions. Despite being the backbone of urban logistics, they are routinely denied access to basic restrooms, clean water, and shelter in commercial complexes where they pick up deliveries.",
      goal: "Design a lightweight, universally accessible platform that helps gig workers locate safe, welcoming rest spaces nearby, verify available amenities in advance, and report facility conditions in real time.",
      challenge: "Riders use entry-level smartphones with limited data plans and battery constraints. They cannot navigate complicated apps or read dense text while on short delivery breaks in bright sunlight.",
      approach: "We designed Oivu with high-contrast UI, ultra-large tap targets, minimal data consumption, and zero friction. We categorized facilities using intuitive icons (water, washroom, charging, shade, bike parking) so that language is never a barrier.",
      solution: "A mobile Progressive Web App (PWA) displaying nearest verified hubs with live amenity status, operating hours, and walking/riding directions. A lightweight partner portal allows cafes, community centers, and fuel stations to register their spaces as verified rest points.",
      technicalDecisions: "We architected the client as an ultra-lightweight PWA (under 400KB initial bundle) that functions in low-connectivity areas with locally cached maps of recent operational zones. Geo-queries are debounced to preserve smartphone battery.",
      result: "Created a functional, dignifying digital framework connecting urban gig workers with compassionate physical infrastructure. Positioned as a social-impact initiative showing how software can address human welfare.",
      learned: "Social impact software must prioritize extreme simplicity and empathy. If a worker under 40-degree heat cannot find clean water in two taps, the technology has failed regardless of the code behind it.",
      metrics: [
        { label: "Initial App Size", value: "< 400 KB", note: "Optimized for budget smartphones and minimal data usage" },
        { label: "Essential Amenities", value: "4 Key Facilities", note: "Drinking water, clean washrooms, charging, shaded seating" },
        { label: "Access Friction", value: "Zero Login Required", note: "Immediate location search without account barriers" },
        { label: "Initiative Focus", value: "Worker Dignity", note: "Social-impact technology addressing real physical needs" }
      ],
      narrative: {
        challenge: "Gig delivery workers lack basic access to clean water, rest, and charging during 12-hour shifts.",
        approach: "Ultra-lightweight PWA, zero login barriers, high-contrast outdoor UI, verified hub pins.",
        outcome: "A functional civic platform connecting workers with dignified resting infrastructure."
      }
    },
    mockupType: "rest-network",
    liveDemo: "https://oivu.tetravate.io",
    demoLabel: "Social Impact PWA Prototype",
    github: null
  },
  {
    id: "ai-product",
    slug: "ai-product",
    title: "Pulse SaaS & AI Platform",
    subtitle: "Cloud Telemetry, Automation & Applied Intelligence Control Plane",
    category: "AI & SaaS",
    categoryTag: "AI / GenAI / Cloud Systems",
    quickTags: ["Real-Time Telemetry", "AI Workflows", "Audit Logging", "Automation"],
    outcomeNarrative: "Siloed operations logs → Unified multi-tenant operational dashboard with real-time stream analysis",
    summary: "A modern SaaS interface designed around unified operational dashboards, automated anomaly detection, user management, and seamless administrative workflows.",
    overview: "Growing engineering and product teams struggle to monitor service health, team seats, and API billing across disparate tooling. Pulse SaaS consolidates activity feeds, permission controls, and usage metrics into a cohesive control plane.",
    highlights: [
      "Real-time metrics charts with customizable aggregation windows",
      "Role-based access control (RBAC) with granular team permissions",
      "Audit log timeline tracking organizational configuration changes",
      "Dark studio interface built for long operational monitoring sessions",
      "Webhooks and automated anomaly alert rules"
    ],
    features: [
      { num: "01", title: "Real-Time Telemetry Charts", desc: "Live streaming metric visualizations tracking requests, latency, and error budgets." },
      { num: "02", title: "Role-Based Access Control", desc: "Granular multi-tenant permission layers for Admins, SREs, and Analysts." },
      { num: "03", title: "Security & Audit Event Log", desc: "Cryptographically traceable timeline of credential updates and role changes." },
      { num: "04", title: "Team Seat & Tier Manager", desc: "Flexible subscription and quota management with automated seat licensing." },
      { num: "05", title: "Webhook Alert Channels", desc: "Instant threshold alerting dispatched to Slack, PagerDuty, and email channels." },
      { num: "06", title: "Dark Studio Ergonomics", desc: "Carefully calibrated dark contrast avoiding eye strain during long on-call shifts." }
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Modern CSS", "Docker", "TimescaleDB"],
    techGrouped: {
      frontend: "React · Modern CSS Design System · Vector Charting",
      backend: "FastAPI · Python · Async Event Streams",
      database: "PostgreSQL · TimescaleDB Telemetry Metrics",
      infrastructure: "Docker Containers · Redis Cache · Structured Logging"
    },
    caseStudy: {
      problem: "Operational visibility is often fragmented between server terminals, logging services, and billing portals, making it difficult for technical leads to spot anomalies before users are impacted.",
      goal: "Develop a cohesive SaaS dashboard that consolidates system health metrics, user role permissions, and billing tier usage into a calm, intuitive interface.",
      challenge: "Rendering high-frequency telemetry streams without causing browser UI thread stuttering or excessive memory usage during extended browser sessions.",
      approach: "We implemented time-bucketed metric decimation on the backend before streaming data to the client, combined with canvas/SVG rendering for smooth frame rates.",
      solution: "A unified control plane featuring modular metric widgets, searchable user audit tables, team seat management, and notification preference centers.",
      technicalDecisions: "FastAPI was chosen for its asynchronous WebSocket throughput, backed by TimescaleDB for continuous aggregation of operational metrics.",
      result: "Delivered a clean, functional multi-tenant SaaS foundation with resilient authentication and responsive dashboard navigation.",
      learned: "Dashboards should not overwhelm operators with visual noise. A calm, dark studio palette with intentional contrast prevents eye fatigue and highlights critical system warnings immediately.",
      metrics: [
        { label: "Stream Latency", value: "< 50ms", note: "WebSocket telemetry delivery" },
        { label: "Chart Performance", value: "60 FPS", note: "Optimized SVG/Canvas rendering" },
        { label: "Security", value: "RBAC Enforced", note: "Strict role-based permission boundaries" },
        { label: "Deployment Stage", value: "Functional Platform", note: "Complete administrative workflow" }
      ],
      narrative: {
        challenge: "Scattered infrastructure logs, noisy dashboards, and disjointed team seat management.",
        approach: "Calm dark studio design system, decimation data pipelines, unified security auditing.",
        outcome: "A high-performance SaaS control plane built for mission-critical monitoring."
      }
    },
    mockupType: "saas-dashboard",
    liveDemo: "https://pulse.tetravate.io",
    demoLabel: "Studio Prototype Platform",
    github: null
  }
];

export const services = [
  {
    id: "web-apps",
    categoryKey: "Web Experiences",
    title: "Web Experiences",
    shortDesc: "Websites, landing pages and digital experiences engineered for speed and conversion.",
    detail: "From high-impact studio landing pages to interactive web portals, we build web experiences with modern typography, smooth micro-interactions, responsive ergonomics, and sub-second load times.",
    capabilities: [
      "Brand-first studio websites",
      "Interactive landing experiences",
      "Progressive Web Apps (PWAs)",
      "High-performance design systems"
    ],
    idealFor: "Businesses, startups, and innovators looking to establish a world-class digital presence."
  },
  {
    id: "ecommerce",
    categoryKey: "E-Commerce",
    title: "E-Commerce",
    shortDesc: "Online stores and digital commerce experiences focused on conversion.",
    detail: "Bespoke digital storefronts with fluid product discovery, persistent micro-carts, and friction-free checkout flows that drive sales without plugin bloat.",
    capabilities: [
      "Custom storefront architecture",
      "Fast faceted product search",
      "Secure payment gateway integrations",
      "Inventory & order sync pipelines"
    ],
    idealFor: "Retailers and brands who want a lightning-fast shopping experience that outperforms off-the-shelf templates."
  },
  {
    id: "business-systems",
    categoryKey: "Business Systems",
    title: "Business Systems",
    shortDesc: "Billing, inventory, CRM and internal platforms tailored to real operations.",
    detail: "Custom software engineered around how your business actually operates. Point-of-sale systems, customer ledgers, and operational tools your team can master on day one.",
    capabilities: [
      "Point of Sale (POS) & billing",
      "Inventory tracking & auto-alerts",
      "Customer credit (Khata) ledgers",
      "Offline-first operational tools"
    ],
    idealFor: "Retailers, distributors, and businesses replacing chaotic paper ledgers and fragmented spreadsheets."
  },
  {
    id: "saas-products",
    categoryKey: "SaaS Products",
    title: "SaaS Products",
    shortDesc: "Dashboards, platforms and subscription products built for scalability.",
    detail: "Full-cycle SaaS architecture from authentication and role-based permissions to real-time analytics dashboards and billing tier management.",
    capabilities: [
      "Multi-tenant application architecture",
      "Real-time analytics & telemetry",
      "Role-Based Access Control (RBAC)",
      "Subscription billing & audit logs"
    ],
    idealFor: "Founders and enterprises building software products designed to scale to thousands of users."
  },
  {
    id: "mobile-apps",
    categoryKey: "Mobile Applications",
    title: "Mobile Applications",
    shortDesc: "Cross-platform mobile experiences designed for touch and real-world utility.",
    detail: "Mobile applications that focus on clear tasks, smooth navigation, and dependable offline capabilities. We design apps that respect battery life, storage constraints, and human attention.",
    capabilities: [
      "Cross-platform iOS and Android builds",
      "Offline-first mobile workflows",
      "Field & workforce utility apps",
      "Tactile, accessible touch interfaces"
    ],
    idealFor: "Teams with on-the-move staff, field operations, or consumer mobile services."
  },
  {
    id: "ai-ml",
    categoryKey: "AI & ML",
    title: "AI & ML",
    shortDesc: "AI-powered applications, intelligent automation and predictive analytics.",
    detail: "We do not bolt on AI for marketing hype. We implement machine learning and GenAI where they create concrete value: spatial clustering, document intelligence, intelligent assistants, and automation.",
    capabilities: [
      "Applied ML & spatial clustering",
      "GenAI & intelligent workflow agents",
      "Explainable classification systems",
      "Automated data extraction & cleanup"
    ],
    idealFor: "Organizations with rich data seeking verified patterns, automation, and decision-making clarity."
  }
];

export const processSteps = [
  {
    step: "01",
    phase: "Discover",
    title: "Discover",
    summary: "Understand the problem, users and business context.",
    detail: "We do not rush into code blindly. We talk to real operators, map where time is lost, inspect real pain points, and define what genuine success looks like before writing a single line of architecture."
  },
  {
    step: "02",
    phase: "Define",
    title: "Define",
    summary: "Translate requirements into a clear product direction.",
    detail: "We clarify the scope, outline the core data structures, select dependable databases and frameworks, and eliminate bloated features that add cost without tangible user value."
  },
  {
    step: "03",
    phase: "Design",
    title: "Design",
    summary: "Create the user experience and visual system.",
    detail: "We design clean interfaces following our age 8 to 80 rule: large click targets, legible typography, zero confusing jargon, and effortless user journeys."
  },
  {
    step: "04",
    phase: "Develop",
    title: "Develop",
    summary: "Build the frontend, backend and integrations.",
    detail: "We write clean, modular software with resilient offline handling, fast query execution, robust security boundaries, and reliable third-party integrations."
  },
  {
    step: "05",
    phase: "Deliver",
    title: "Deliver",
    summary: "Test, deploy and continuously improve.",
    detail: "We place prototypes in front of real users, refine friction points, handle deployment pipelines, onboard your team, and ensure smooth daily operations."
  }
];

export const whyTetravateReasons = [
  {
    num: "01",
    title: "Business-first thinking",
    description: "We understand the real operational problem before writing the software solution. Every line of code serves a business purpose."
  },
  {
    num: "02",
    title: "Product-focused design",
    description: "We design around how everyday people actually use products — simple, fast, accessible, and free of confusing clutter."
  },
  {
    num: "03",
    title: "Modern engineering",
    description: "We build with maintainability, offline resilience, and scalability in mind using battle-tested frameworks and clean architectures."
  },
  {
    num: "04",
    title: "AI-ready",
    description: "We integrate machine learning and AI where it genuinely creates measurable value, with explainability rather than marketing hype."
  },
  {
    num: "05",
    title: "Built to ship",
    description: "Our goal is always a reliable, production-ready product in the hands of real users — not just an abandoned prototype."
  }
];

export const technologyGroups = [
  {
    category: "Frontend",
    tagline: "High-performance user interfaces & design systems",
    items: ["React", "Next.js", "React Native", "Vanilla JS", "Modern CSS", "Mapbox GL"]
  },
  {
    category: "Backend",
    tagline: "Resilient APIs, streaming services & business logic",
    items: ["Node.js", "FastAPI", "Python", "Go", "REST & WebSockets", "Express"]
  },
  {
    category: "Data & Storage",
    tagline: "Relational, spatial & offline-first data engines",
    items: ["PostgreSQL", "PostGIS", "Supabase", "IndexedDB", "Redis", "TimescaleDB"]
  },
  {
    category: "AI & Analytics",
    tagline: "Deterministic clustering, NLP & applied intelligence",
    items: ["Python", "Scikit-learn", "DBSCAN", "NetworkX", "LLM Integration", "Computer Vision"]
  },
  {
    category: "Tools & Cloud",
    tagline: "Modern deployment, containerization & CI/CD",
    items: ["Git & GitHub", "Docker", "Cloudflare", "AWS", "Vite", "PWA Architecture"]
  }
];

export const teamMembers = [
  {
    number: "01",
    name: "Aadhithya Balu S",
    nameUpper: "AADHITHYA BALU S",
    role: "Founder",
    tagline: "Frontend & UI Systems",
    summary: "Designs intuitive interfaces • Obsessed with performance",
    bio: "Focuses on clean interface architecture, high-performance UI systems, and responsive user experiences while building cross-functionally across the full product stack.",
    focus: "Frontend & UI Systems",
    skills: ["Frontend & UI Systems", "Architecture", "Full-Stack", "Web Performance"],
    uplink: "LEAF NODE 01 • DIRECT TETRAVATE UPLINK (0.0°)",
    linkedin: "https://www.linkedin.com/company/tetravate/",
    github: "https://github.com/orgs/Tetravate"
  },
  {
    number: "02",
    name: "Aswin N S",
    nameUpper: "ASWIN N S",
    role: "Founder",
    tagline: "Backend & Applied AI Pipelines",
    summary: "Architects robust pipelines • Scalable data systems",
    bio: "Focuses on robust backend systems, data workflows, and applied AI pipelines while engineering scalable features across all layers of the stack.",
    focus: "Backend & Applied AI Pipelines",
    skills: ["Backend & Applied AI", "Data Pipelines", "APIs", "Distributed Systems"],
    uplink: "LEAF NODE 02 • DIRECT TETRAVATE UPLINK (36.0°)",
    linkedin: "https://www.linkedin.com/company/tetravate/",
    github: "https://github.com/orgs/Tetravate"
  },
  {
    number: "03",
    name: "Almas M",
    nameUpper: "ALMAS M",
    role: "Founder",
    tagline: "Full-Stack & Integration",
    summary: "Builds across the stack • Adapts per project",
    bio: "Focuses on end-to-end full-stack integration, service coordination, and resilient system engineering across web and mobile products.",
    focus: "Full-Stack & Integration",
    skills: ["Full-Stack & Integration", "Product Logic", "Cloud Services", "APIs"],
    uplink: "LEAF NODE 03 • DIRECT TETRAVATE UPLINK (72.0°)",
    linkedin: "https://www.linkedin.com/company/tetravate/",
    github: "https://github.com/orgs/Tetravate"
  },
  {
    number: "04",
    name: "Giridharan P",
    nameUpper: "GIRIDHARAN P",
    role: "Founder",
    tagline: "Product Logic & Deployment",
    summary: "Streamlines deployment • Dependable product logic",
    bio: "Focuses on product engineering, workflow optimization, and dependable deployment pipelines while contributing across the full software lifecycle.",
    focus: "Product Logic & Deployment",
    skills: ["Product Logic & Deployment", "System Architecture", "DevOps", "Reliability"],
    uplink: "LEAF NODE 04 • DIRECT TETRAVATE UPLINK (144.0°)",
    linkedin: "https://www.linkedin.com/company/tetravate/",
    github: "https://github.com/orgs/Tetravate"
  },
  {
    number: "05",
    name: "Ashwin S",
    nameUpper: "ASHWIN S",
    role: "Founder",
    tagline: "Technology & Product Development",
    summary: "Drives product vision • End-to-end engineering",
    bio: "Focuses on technology strategy, core product engineering, and modern application workflows while contributing across the technology stack.",
    focus: "Technology & Product Development",
    skills: ["Technology & Product", "Full-Stack", "Backend Services", "Software Delivery"],
    uplink: "LEAF NODE 05 • DIRECT TETRAVATE UPLINK (288.0°)",
    linkedin: "https://www.linkedin.com/company/tetravate/",
    github: "https://github.com/orgs/Tetravate"
  }
];

export const achievements = [
  {
    badge: "COMPETITIVE EXCELLENCE",
    title: "2nd Prize — Hack Odyssey 4.0",
    description: "Awarded 2nd Prize in Hack Odyssey 4.0 for engineering a high-impact technical solution under strict hackathon evaluation criteria.",
    type: "Award"
  },
  {
    badge: "COMMERCIAL DEPLOYMENT",
    title: "Active Retail Billing System",
    description: "Deployed AGS Masalas POS into daily retail store operations, replacing manual paper registers with sub-second offline billing.",
    type: "Production"
  },
  {
    badge: "RESEARCH & ANALYTICS",
    title: "Geospatial Intelligence Platform",
    description: "Built DRISHYAM spatial clustering and network analysis framework on PostGIS, processing multi-thousand incident coordinate records in sub-second queries.",
    type: "Architecture"
  },
  {
    badge: "SOCIAL PURPOSE",
    title: "Civic Welfare Technology",
    description: "Designed Oivu to provide zero-barrier rest point discovery for urban gig workers, engineered under 400KB for budget mobile hardware.",
    type: "Civic"
  }
];

export const testimonials = [
  {
    quote: "Tetravate observed our billing counter directly and built exactly what we needed: quick billing that never stops working when the Wi-Fi cuts out.",
    author: "Retail Business Partner",
    role: "AGS Masalas",
    context: "In-Store POS Deployment"
  },
  {
    quote: "Transparent, fact-based engineering. They understand the difference between practical AI that works and hype that wastes time.",
    author: "Technical Mentor & Reviewer",
    role: "Hack Odyssey 4.0 Evaluation",
    context: "Engineering Review"
  }
];
