// Tetravate Portfolio - Featured Projects Data
// Strictly factual, zero fabricated metrics, comprehensive 8-step case study breakdown

export const featuredProjects = [
  {
    id: "ags-masalas-pos",
    title: "AGS Masalas POS",
    subtitle: "Mobile-First Retail Billing & Business Management System",
    category: "Business Software",
    categoryTag: "Business Software / POS",
    quickTags: ["Offline-First", "Retail POS", "WhatsApp Invoicing"],
    outcomeNarrative: "Paper ledgers → Streamlined mobile billing with zero downtime",
    summary: "A reliable point-of-sale system built for a high-turnover masala retail business, supporting fast mobile billing, instant WhatsApp invoices, customer credit tracking, and resilient offline operation.",
    overview: "AGS Masalas needed a solution that eliminated slow handwritten bills, tracked pending customer balances without messy paper registers, and could operate seamlessly even when store internet connection fluctuated.",
    highlights: [
      "Sub-second checkout workflow optimized for busy store counters",
      "Direct digital invoice delivery via WhatsApp API",
      "Pending customer balance and khata credit tracking",
      "Offline-first architecture with automatic sync when connected"
    ],
    techStack: ["React / Mobile Web", "Supabase", "IndexedDB (Offline Cache)", "WhatsApp Business API", "Tailored POS Printing Engine"],

    // 8-Point Case Study Structure
    caseStudy: {
      problem: "In traditional retail masala counters, peak shopping hours create severe bottlenecks. The store relied on paper bills and manual ledger books ('khata') to track regular customers' credit balances. During network outages, digital billing apps frequently froze, causing lost sales and frustrated customers.",
      goal: "Design a fast, dependable mobile-friendly billing tool that retail staff can operate with one hand, works with zero lag, sends receipts directly to customers' phones, and never stops working during connectivity drops.",
      challenge: "Retail environments are noisy and fast-paced. Staff members cannot navigate nested menus or complex software screens. Furthermore, wholesale and retail weight variations (grams vs kilograms) needed instant rate calculation without manual arithmetic errors.",
      approach: "Tetravate visited the shop floor to observe the billing rhythm. We mapped every keystroke and touch required for a standard transaction. We chose an offline-first architecture where every sale is written locally first to IndexedDB and synchronized with Supabase in the background once internet connectivity is confirmed.",
      solution: "A streamlined POS interface featuring quick-access product tiles, dynamic unit conversion, single-tap customer ledger search, automatic pending balance alerts, and one-click WhatsApp PDF invoice generation.",
      technicalDecisions: "We selected Supabase for real-time inventory updates and Row Level Security, paired with a custom service-worker synchronization queue. When offline, all cryptographic bill IDs are pre-generated locally to prevent reconciliation conflicts upon reconnection.",
      result: "The store replaced physical duplicate books with a unified tablet and mobile workflow. Checkout times were cut down substantially, customer ledger disputes were resolved through digital logs, and billing continued uninterrupted during internet blackouts.",
      metrics: [
        { label: "Offline Resilience", value: "100%", note: "Zero transaction loss during local network drops" },
        { label: "Checkout Steps", value: "3 taps", note: "From item selection to generated receipt" },
        { label: "Ledger Accuracy", value: "Verified", note: "Real-time digital khata balance tracking" },
        { label: "Deployment Status", value: "Active Store Use", note: "Daily in-store retail operations" }
      ],
      learned: "High-tech software fails on the counter if it requires extra steps. The most valued feature was not a fancy chart, but the ability to complete a bill without waiting for an internet spinner."
    },
    mockupType: "pos-interface"
  },
  {
    id: "drishyam",
    title: "DRISHYAM",
    subtitle: "Geospatial Crime Intelligence & Pattern Analysis System",
    category: "AI & Analytics",
    categoryTag: "AI / Analytics / Intelligence",
    quickTags: ["Geospatial", "Pattern Analytics", "PostGIS"],
    outcomeNarrative: "Fragmented spreadsheets → Unified geospatial intelligence with explainable clustering",
    summary: "An analytics platform designed to help investigative and analytical teams detect incident clusters, visualize spatial crime trends, and uncover relationship patterns without speculative predictions.",
    overview: "Law enforcement and civic analytics bodies struggle with fragmented spreadsheets and siloed incident records. DRISHYAM unifies historical incident data onto an intuitive geospatial map with relationship network graphs.",
    highlights: [
      "Spatial density and heat-cluster visualization",
      "Temporal pattern detection (time-of-day and seasonal shifts)",
      "Entity relationship graph mapping connected incidents",
      "Calm, distraction-free analytical workspace"
    ],
    techStack: ["Python", "FastAPI", "PostGIS / PostgreSQL", "Geospatial Clustering (DBSCAN)", "NetworkX Graph Engine", "Interactive Mapbox GL"],

    // 8-Point Case Study Structure
    caseStudy: {
      problem: "Incident data is frequently logged into static spreadsheets across disconnected precinct jurisdictions. Analysts spend days manually cross-referencing locations, modus operandi, and timestamps to recognize whether repeat incidents share common geographical or chronological links.",
      goal: "Create a centralized intelligence dashboard that structures multi-source crime data, highlights verifiable spatial clusters, and provides investigative analysts with transparent, interpretable pattern detection tools.",
      challenge: "Geospatial data is messy, with imprecise addresses and varying reporting formats. Moreover, AI systems in public safety must strictly avoid speculative 'predictive policing' claims or biased black-box algorithms that mislead decision-makers.",
      approach: "Tetravate focused on deterministic geospatial analytics and interpretable clustering (DBSCAN and Kernel Density Estimation) rather than opaque predictive black boxes. Every cluster surfaced by the software is accompanied by the exact verified incident coordinates and source records that formed it.",
      solution: "DRISHYAM provides analysts with dual synchronized views: a geospatial map displaying spatial density clusters, and a relationship graph showing linked associates, vehicles, or recurring modus operandi. Analysts can filter by time window, incident category, and geographic perimeter.",
      technicalDecisions: "PostgreSQL with PostGIS was chosen as the spatial database engine to execute high-performance spatial queries directly at the database layer. The web frontend was built with responsive vector rendering to smoothly display thousands of coordinate nodes without frame drops.",
      result: "Demonstrated how disparate spatial records can be synthesized into an actionable intelligence canvas. The tool provides clear visual clarity for operational planning while adhering to ethical, interpretable guidelines.",
      metrics: [
        { label: "Spatial Query Speed", value: "Sub-second", note: "Evaluated on multi-thousand incident coordinate records" },
        { label: "Algorithmic Transparency", value: "100% Explainable", note: "Every hotspot traces directly to verified incident logs" },
        { label: "Multi-Jurisdiction View", value: "Unified", note: "Combined multi-precinct spatial views in a single screen" },
        { label: "Evaluation Stage", value: "Research & Prototype", note: "Grounded analytical system without speculative claims" }
      ],
      learned: "In analytical tools for sensitive domains, explainability and restraint are paramount. Providing analysts with clean spatial filters and verifiable source evidence builds far greater trust than opaque 'AI predictions'."
    },
    mockupType: "intelligence-dashboard"
  },
  {
    id: "oivu",
    title: "Oivu",
    subtitle: "Dedicated Rest-Point Network Platform for Gig Workers",
    category: "Social Impact",
    categoryTag: "Social Impact / Digital Product",
    quickTags: ["Lightweight PWA", "Accessible UI", "Social Impact"],
    outcomeNarrative: "Disconnected street navigation → Instant low-bandwidth access to verified worker rest hubs",
    summary: "A human-centered digital platform mapping and coordinating verified rest points equipped with clean drinking water, washrooms, shade, and phone charging for delivery riders and cab operators.",
    overview: "Millions of gig delivery workers spend 10 to 14 hours a day on the road with no access to basic sanitary facilities or safe places to rest between orders. Oivu turns empty community spaces into verified rest hubs.",
    highlights: [
      "Real-time map of verified shelter hubs with amenity tags",
      "Crowdsourced status updates on water and charging availability",
      "Low-bandwidth, multi-language interface designed for on-road mobile use",
      "Partner dashboard for local businesses offering rest spaces"
    ],
    techStack: ["Progressive Web App (PWA)", "Tailored Location Engine", "Supabase Realtime", "Multi-Language Localization", "Accessible Touch UI"],

    // 8-Point Case Study Structure
    caseStudy: {
      problem: "Food delivery riders, parcel couriers, and ride-hailing drivers spend long hours in extreme weather conditions. Despite being the backbone of urban logistics, they are routinely denied access to basic restrooms, clean water, and shelter in commercial complexes where they pick up deliveries.",
      goal: "Design a lightweight, universally accessible platform that helps gig workers locate safe, welcoming rest spaces nearby, verify available amenities in advance, and report facility conditions in real time.",
      challenge: "Riders use entry-level smartphones with limited data plans and battery constraints. They cannot navigate complicated apps or read dense text while on short delivery breaks in bright sunlight.",
      approach: "We designed Oivu with high-contrast UI, ultra-large tap targets, minimal data consumption, and zero friction. We categorized facilities using intuitive icons (water, washroom, charging, shade, bike parking) so that language is never a barrier.",
      solution: "A mobile Progressive Web App (PWA) displaying nearest verified hubs with live amenity status, operating hours, and walking/riding directions. A lightweight partner portal allows cafes, community centers, and fuel stations to register their spaces as verified rest points.",
      technicalDecisions: "We architected the client as an ultra-lightweight PWA (under 400KB initial bundle) that functions in low-connectivity areas with locally cached maps of recent operational zones. Geo-queries are debounced to preserve smartphone battery.",
      result: "Created a functional, dignifying digital framework connecting urban gig workers with compassionate physical infrastructure. Positioned as a social-impact initiative showing how software can address human welfare.",
      metrics: [
        { label: "Initial App Size", value: "< 400 KB", note: "Optimized for budget smartphones and minimal data usage" },
        { label: "Essential Amenities", value: "4 Key Facilities", note: "Drinking water, clean washrooms, charging, shaded seating" },
        { label: "Access Friction", value: "Zero Login Required", note: "Immediate location search without account barriers" },
        { label: "Initiative Focus", value: "Worker Dignity", note: "Social-impact technology addressing real physical needs" }
      ],
      learned: "Social impact software must prioritize extreme simplicity and empathy. If a worker under 40-degree heat cannot find clean water in two taps, the technology has failed regardless of the code behind it."
    },
    mockupType: "rest-network"
  },
  {
    id: "mistiq",
    title: "MISTIQ",
    subtitle: "Cognitive Mistake Prediction & Personalized Learning Assistance",
    category: "Education & ML",
    categoryTag: "Machine Learning / Education",
    quickTags: ["Adaptive Learning", "Trajectory ML", "Cognitive Scaffolding"],
    outcomeNarrative: "Punitive right/wrong scoring → Supportive step-level guidance that prevents student frustration",
    summary: "An educational intelligence concept that models student problem-solving trajectories to anticipate specific cognitive pitfalls and provide timely, gentle hints before frustration sets in.",
    overview: "Traditional learning software only grades answers as right or wrong after the fact. MISTIQ analyzes intermediate problem-solving steps to understand where misconceptions originate and intervenes with personalized micro-explanations.",
    highlights: [
      "Step-by-step problem path analysis rather than just final score evaluation",
      "Misconception pattern taxonomy categorizing common student reasoning traps",
      "Adaptive hint scaffolding that encourages self-correction",
      "Calm, encouraging feedback tone avoiding robotic red error marks"
    ],
    techStack: ["Python", "Sequential Trajectory Modeling", "FastAPI", "React / Next-gen Learning UI", "Structured Cognitive Taxonomies"],

    // 8-Point Case Study Structure
    caseStudy: {
      problem: "When students struggle with complex STEM concepts, standardized homework platforms simply mark an answer wrong with a red 'X'. This triggers anxiety and discouragement without explaining the exact faulty assumption that derailed the student's reasoning.",
      goal: "Build a supportive learning tool that monitors step-by-step problem progressions, predicts the likely next misconception based on the student's current work, and provides constructive scaffolding before they abandon the problem.",
      challenge: "Different students make errors for entirely different reasons: some misapply a formula rule, while others make simple sign inversion slips. The system must distinguish conceptual misunderstandings from careless typos without overwhelming the student.",
      approach: "Tetravate designed a sequential learning engine that maps student intermediate calculations against an annotated graph of valid and invalid problem states. By identifying the exact divergence point, MISTIQ can surface a targeted micro-question that guides the student back on track.",
      solution: "An interactive learning canvas where students show their work step-by-step. Instead of waiting for submission, the interface subtly highlights ambiguous logic and presents gentle, socratic guidance tailored to the student's specific step.",
      technicalDecisions: "We combined lightweight rule-based knowledge trees with Markov decision trajectory scoring. This ensured all interventions remain deterministic, pedagogically sound, and explainable to educators.",
      result: "Proved an alternative to punitive grading systems. Evaluated how cognitive-sensitive interfaces preserve student confidence, reduce abandonment rates during difficult exercises, and help learners build genuine understanding.",
      metrics: [
        { label: "Scaffolding Paradigm", value: "Step-Level", note: "Evaluates the train of thought, not just the final number" },
        { label: "Feedback Style", value: "Socratic Guidance", note: "Encouraging prompts rather than abrupt failure marks" },
        { label: "Misconception Map", value: "Categorized", note: "Differentiates syntax slips from foundational conceptual gaps" },
        { label: "Stage", value: "Concept & Prototype", note: "Pedagogical ML research prototype" }
      ],
      learned: "Education technology should build confidence, not anxiety. When software acts like a patient human tutor rather than an automated grading machine, students become comfortable exploring difficult problems."
    },
    mockupType: "education-canvas"
  }
];

export const services = [
  {
    id: "web-apps",
    title: "Web Applications",
    shortDesc: "We build useful web-based products for businesses, organizations, and communities.",
    detail: "From internal operations dashboards to customer-facing portals, we build web apps that load quickly, work reliably on all screen sizes, and are simple for everyday people to use.",
    capabilities: [
      "Customer & client portals",
      "Operational management systems",
      "Progressive Web Apps (PWAs)",
      "Database & backend integrations"
    ],
    idealFor: "Businesses replacing manual spreadsheets, or organizations launching a reliable digital hub."
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    shortDesc: "We design and build mobile experiences that solve specific user problems.",
    detail: "Mobile applications that focus on clear tasks, smooth navigation, and dependable offline capabilities. We design apps that respect battery life, storage constraints, and human attention.",
    capabilities: [
      "iOS and Android compatible builds",
      "Offline-first mobile workflows",
      "Field & workforce utility apps",
      "Clean, tactile touch interfaces"
    ],
    idealFor: "Teams with on-the-move staff, field workers, or mobile-first consumer services."
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "We create practical AI/ML solutions where they genuinely add value.",
    detail: "We do not bolt on AI for marketing hype. We implement machine learning where it solves concrete problems: pattern detection, document analysis, spatial clustering, and intelligent classification.",
    capabilities: [
      "Predictive modeling & pattern analysis",
      "Geospatial and temporal analytics",
      "Explainable classification systems",
      "Automated data extraction & cleanup"
    ],
    idealFor: "Organizations with rich data seeking verified patterns and decision-making clarity."
  },
  {
    id: "automation",
    title: "Automation",
    shortDesc: "We automate repetitive workflows to save time and reduce manual work.",
    detail: "Eliminate hours spent copying data between spreadsheets, generating repetitive invoices, or manually sending status notifications. We build quiet, reliable automations that work in the background.",
    capabilities: [
      "Multi-system data synchronization",
      "Automated invoicing & WhatsApp alerts",
      "Scheduled reporting pipelines",
      "Error-free routine operations"
    ],
    idealFor: "Busy teams losing valuable hours to repetitive clerical and operational tasks."
  },
  {
    id: "business-software",
    title: "Business Software",
    shortDesc: "We build software that helps businesses manage their everyday operations.",
    detail: "Custom software tailored to how your business actually runs. We build inventory managers, point-of-sale systems, ledger trackers, and booking tools that your staff can learn in minutes.",
    capabilities: [
      "Point of Sale (POS) and billing",
      "Inventory tracking & alerts",
      "Customer ledger (Khata) & credit management",
      "Staff scheduling & order tracking"
    ],
    idealFor: "Retail stores, service providers, and growing businesses outgrowing paper or generic tools."
  },
  {
    id: "custom-products",
    title: "Custom Digital Products",
    shortDesc: "We turn specific ideas into tailored digital solutions.",
    detail: "Have an original concept or a unique community problem? We partner with you from initial idea framing to complete architecture, user experience design, software engineering, and rollout.",
    capabilities: [
      "Idea validation & scoping",
      "UX wireframing & interactive prototypes",
      "Full-stack product engineering",
      "Deployment, hosting & maintenance"
    ],
    idealFor: "Founders, community innovators, and organizations with a distinct problem needing custom craft."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    summary: "We listen to the idea, the problem, and the real people involved.",
    detail: "We do not rush into code. We sit down to understand what is actually broken, who will use the software, and what success truly looks like for them."
  },
  {
    step: "02",
    title: "Plan",
    summary: "We define what needs to be built and how.",
    detail: "We clarify the scope, outline the core architecture, select the most dependable technology stack, and eliminate unnecessary complexity."
  },
  {
    step: "03",
    title: "Design",
    summary: "We turn the idea into a clear user experience.",
    detail: "We design clean interfaces that an 8-year-old or an 80-year-old could navigate without getting confused. Simple typography, clear buttons, and zero friction."
  },
  {
    step: "04",
    title: "Build",
    summary: "We develop the product and test it along the way.",
    detail: "We write clean, resilient code with robust error handling, fast performance, and real-world edge case resilience."
  },
  {
    step: "05",
    title: "Improve",
    summary: "We learn from feedback and make it better.",
    detail: "We place prototypes in front of real users, observe where they hesitate, and refine the interface until it feels effortless."
  },
  {
    step: "06",
    title: "Deliver",
    summary: "We launch a usable product and provide support where needed.",
    detail: "We handle deployment, ensure smooth onboarding for your team, and stay on hand to keep the system running smoothly."
  }
];

export const teamMembers = [
  {
    number: "01",
    name: "Aadhithya Balu S",
    nameUpper: "AADHITHYA BALU S",
    role: "Founder",
    tagline: "Frontend & UI Systems",
    bio: "Focuses on clean interface architecture, high-performance UI systems, and responsive user experiences while building cross-functionally across the full stack.",
    focus: "Frontend & UI Systems",
    skills: ["Frontend & UI Systems", "Architecture", "Full-Stack", "Web Performance"]
  },
  {
    number: "02",
    name: "Aswin N S",
    nameUpper: "ASWIN N S",
    role: "Founder",
    tagline: "Backend & Applied AI Pipelines",
    bio: "Focuses on robust backend systems, data workflows, and applied AI pipelines while engineering scalable features across all layers of the stack.",
    focus: "Backend & Applied AI Pipelines",
    skills: ["Backend & Applied AI", "Data Pipelines", "APIs", "Distributed Systems"]
  },
  {
    number: "03",
    name: "Almas M",
    nameUpper: "ALMAS M",
    role: "Founder",
    tagline: "Full-Stack & Integration",
    bio: "Focuses on end-to-end full-stack integration, service coordination, and resilient system engineering across web and mobile products.",
    focus: "Full-Stack & Integration",
    skills: ["Full-Stack & Integration", "Product Logic", "Cloud Services", "APIs"]
  },
  {
    number: "04",
    name: "Giridharan P",
    nameUpper: "GIRIDHARAN P",
    role: "Founder",
    tagline: "Product Logic & Deployment",
    bio: "Focuses on product engineering, workflow optimization, and dependable deployment pipelines while contributing across the full software lifecycle.",
    focus: "Product Logic & Deployment",
    skills: ["Product Logic & Deployment", "System Architecture", "DevOps", "Reliability"]
  },
  {
    number: "05",
    name: "Ashwin S",
    nameUpper: "ASHWIN S",
    role: "Founder",
    tagline: "Technology & Product Development",
    bio: "Focuses on technology strategy, core product engineering, and modern application workflows while contributing across the technology stack.",
    focus: "Technology & Product Development",
    skills: ["Technology & Product", "Full-Stack", "Backend Services", "Software Delivery"]
  }
];
