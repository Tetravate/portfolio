// Tetravate Portfolio - Centralized Structured Project & Studio Data
// Strict Original Brand Identity: Deep Navy (#071527, #0B1F3A) + Tetravate Blue (#2563EB) + White (#FFFFFF)

export const featuredProjects = [];

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

export const companyInfo = {
  number: "00",
  nodeLabel: "CORE NODE",
  role: "COMPANY",
  name: "Tetravate",
  nameUpper: "TETRAVATE",
  domain: "STUDIO CORE",
  tagline: "FROM THOUGHT TO THING",
  summary: "FROM THOUGHT TO THING",
  bio: "A product engineering team that transforms ideas into practical digital products through thoughtful design, software engineering, and AI-driven solutions.",
  focus: "Product Engineering, Web Applications, AI & Data Systems, Digital Product Development.",
  skills: [
    "Product Development",
    "Full-Stack Engineering",
    "Applied AI",
    "Data Systems",
    "Deployment"
  ],
  linkedin: "https://www.linkedin.com/company/tetravate/",
  github: "https://github.com/orgs/Tetravate"
};

export const teamMembers = [
  {
    number: "01",
    name: "Aadhithya Balu S",
    nameUpper: "AADHITHYA BALU S",
    role: "Founder",
    tagline: "Deployment & DevOps",
    summary: "Deployment workflows • Infrastructure & reliable delivery",
    bio: "Focuses on deployment workflows, infrastructure, and reliable delivery of production-ready applications.",
    focus: "Deployment & DevOps",
    skills: ["Deployment & DevOps", "Infrastructure", "CI/CD Pipelines", "System Reliability"],
    linkedin: "https://www.linkedin.com/in/aadhithyabalu",
    github: "https://github.com/Aadhithya-balu"
  },
  {
    number: "02",
    name: "Aswin N S",
    nameUpper: "ASWIN N S",
    role: "Founder",
    tagline: "Backend & Applied AI Pipelines",
    summary: "Backend systems & APIs • Applied AI pipelines",
    bio: "Builds robust backend systems, scalable data workflows, APIs, and applied AI pipelines across the application stack.",
    focus: "Backend & Applied AI Pipelines",
    skills: ["Backend & Applied AI", "Data Pipelines", "APIs", "Distributed Systems"],
    linkedin: "https://www.linkedin.com/in/aswin022",
    github: "https://github.com/AswinNS-dev"
  },
  {
    number: "03",
    name: "Almas M",
    nameUpper: "ALMAS M",
    role: "Founder",
    tagline: "Full-Stack & Integration",
    summary: "Full-stack integration • End-to-end product systems",
    bio: "Connects frontend experiences, backend services, and application components into cohesive, end-to-end product systems.",
    focus: "Full-Stack & Integration",
    skills: ["Full-Stack & Integration", "Product Logic", "Cloud Services", "APIs"],
    linkedin: "https://www.linkedin.com/in/almas06/",
    github: "https://github.com/Almas786881"
  },
  {
    number: "04",
    name: "Giridharan P",
    nameUpper: "GIRIDHARAN P",
    role: "Founder",
    tagline: "Frontend & UI/UX",
    summary: "Frontend & UI/UX • Usability & accessibility",
    bio: "Develops intuitive user interfaces and responsive frontend experiences with an emphasis on usability, visual consistency, and accessibility.",
    focus: "Frontend & UI/UX",
    skills: ["Frontend & UI/UX", "Interface Design", "Design Systems", "Accessibility"],
    linkedin: "https://www.linkedin.com/in/giridharan-p-223a78333/",
    github: "https://github.com/Giridharanp1"
  },
  {
    number: "05",
    name: "Ashwin S",
    nameUpper: "ASHWIN S",
    role: "Founder",
    tagline: "Testing & Quality Assurance",
    summary: "Testing & QA • Validation across workflows",
    bio: "Focuses on software testing, quality assurance, regression prevention, and validating application behavior across workflows.",
    focus: "Testing & Quality Assurance",
    skills: ["Testing & QA", "Quality Assurance", "Test Automation", "Workflow Validation"],
    linkedin: "https://www.linkedin.com/in/ashwin-s-a04850333/",
    github: "https://github.com/Ashwin-2008"
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
