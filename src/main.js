import './style.css';
import {
  featuredProjects,
  services,
  processSteps,
  whyTetravateReasons,
  technologyGroups,
  teamMembers,
  companyInfo,
  achievements,
  testimonials
} from './data/projects.js';

import imgEcommerceHero from './assets/projects/tetravate-ecommerce-hero.png';
import imgEcommerceCatalog from './assets/projects/tetravate-ecommerce-catalog.png';
import imgMaraHero from './assets/projects/mara-restaurant-hero.jpg';
import imgMaraMenu from './assets/projects/mara-restaurant-menu.jpg';
import imgNivaraDashboard from './assets/projects/nivara-erp-dashboard.jpg';
import imgNivaraLogin from './assets/projects/nivara-erp-login.jpg';
import imgMistiqAnalysis from './assets/projects/mistiq-platform-analysis.png';
import imgMistiqDna from './assets/projects/mistiq-platform-dna.jpg';
import imgSakshaNetwork from './assets/projects/saksha-crime-network.jpg';
import imgSakshaDashboard from './assets/projects/saksha-crime-dashboard.jpg';
import imgAgsDashboard from './assets/projects/ags-masalas-dashboard.jpg';
import imgAgsMobile from './assets/projects/ags-masalas-pos-mobile.png';
import imgPustakabhritaMobile from './assets/projects/pustakabhrita-tuition-mobile.png';
import imgAgaInterface from './assets/projects/aga-ai-assistant-interface.jpg';
import imgAgaChat from './assets/projects/aga-ai-assistant-chat.jpg';
import imgWorkspaceGithub from './assets/projects/tetravate-workspace-github.png';

// Project screenshot and gallery resolvers
const mockupMap = {
  'tetravate-ecommerce': imgEcommerceHero,
  'mara-dining': imgMaraHero,
  'nivara-erp': imgNivaraDashboard,
  'mistiq': imgMistiqAnalysis,
  'saksha': imgSakshaNetwork,
  'ags-masalas': imgAgsDashboard,
  'pustakabhrita': imgPustakabhritaMobile,
  'aga-ai-assistant': imgAgaInterface,
  'tetravate-workspace': imgWorkspaceGithub,
};

const assetMap = {
  '/projects/tetravate-ecommerce-hero.png': imgEcommerceHero,
  '/projects/tetravate-ecommerce-catalog.png': imgEcommerceCatalog,
  '/projects/mara-restaurant-hero.jpg': imgMaraHero,
  '/projects/mara-restaurant-menu.jpg': imgMaraMenu,
  '/projects/nivara-erp-dashboard.jpg': imgNivaraDashboard,
  '/projects/nivara-erp-login.jpg': imgNivaraLogin,
  '/projects/mistiq-platform-analysis.png': imgMistiqAnalysis,
  '/projects/mistiq-platform-dna.jpg': imgMistiqDna,
  '/projects/saksha-crime-network.jpg': imgSakshaNetwork,
  '/projects/saksha-crime-dashboard.jpg': imgSakshaDashboard,
  '/projects/ags-masalas-dashboard.jpg': imgAgsDashboard,
  '/projects/ags-masalas-pos-mobile.png': imgAgsMobile,
  '/projects/pustakabhrita-tuition-mobile.png': imgPustakabhritaMobile,
  '/projects/aga-ai-assistant-interface.jpg': imgAgaInterface,
  '/projects/aga-ai-assistant-chat.jpg': imgAgaChat,
  '/projects/tetravate-workspace-github.png': imgWorkspaceGithub,
};

export function resolveImageSrc(src) {
  if (!src) return '';
  return assetMap[src] || src;
}

export function getProjectScreenshots(project) {
  if (project.screenshots && project.screenshots.length > 0) {
    return project.screenshots.map((s, idx) => ({
      src: resolveImageSrc(s.src),
      alt: s.alt || `${project.title} screenshot ${idx + 1}`,
      caption: s.caption || `Screen ${idx + 1}`
    }));
  }
  if (galleryMap[project.id] && galleryMap[project.id].length > 0) {
    return galleryMap[project.id].map((g, idx) => ({
      src: resolveImageSrc(g.src),
      alt: `${project.title} — ${g.caption}`,
      caption: g.caption
    }));
  }
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery.map((g, idx) => ({
      src: resolveImageSrc(g.src),
      alt: `${project.title} — ${g.caption}`,
      caption: g.caption
    }));
  }
  const cover = resolveImageSrc(project.coverImage || project.primaryImage) || mockupMap[project.id];
  return [{
    src: cover,
    alt: `${project.title} Interface & Architecture Overview`,
    caption: 'Primary Application Interface'
  }];
}

const galleryMap = {
  'tetravate-ecommerce': [
    { src: imgEcommerceHero, caption: 'Store Homepage & Featured Products' },
    { src: imgEcommerceCatalog, caption: 'Category Navigation & Product Catalog' }
  ],
  'mara-dining': [
    { src: imgMaraHero, caption: 'Restaurant Visual Identity & Hero Section' },
    { src: imgMaraMenu, caption: 'Interactive Menu Browsing & Dish Details' }
  ],
  'nivara-erp': [
    { src: imgNivaraDashboard, caption: 'Multi-Role ERP Overview & Operations' },
    { src: imgNivaraLogin, caption: 'Institutional Authentication & Role Portal' }
  ],
  'mistiq': [
    { src: imgMistiqAnalysis, caption: 'Automated Project Analysis & Risk Findings' },
    { src: imgMistiqDna, caption: 'Project Failure DNA & Historical Risk Profiling' }
  ],
  'saksha': [
    { src: imgSakshaNetwork, caption: 'Criminal Network Graph & Entity Relationships' },
    { src: imgSakshaDashboard, caption: 'Case Investigation Dashboard & Record Index' }
  ],
  'ags-masalas': [
    { src: imgAgsDashboard, caption: 'Retail POS Dashboard & Sales Ledger' },
    { src: imgAgsMobile, caption: 'Touch-Optimized Mobile Billing Counter Screen' }
  ],
  'pustakabhrita': [
    { src: imgPustakabhritaMobile, caption: 'Offline Tuition Fee Tracker & Student Profile' }
  ],
  'aga-ai-assistant': [
    { src: imgAgaInterface, caption: 'AI Assistant Primary Interface & Prompt Workspace' },
    { src: imgAgaChat, caption: 'Context-Aware Chat & Intelligent Task Assistance' }
  ],
  'tetravate-workspace': [
    { src: imgWorkspaceGithub, caption: 'Central GitHub Organization & Team Development Workflow' }
  ]
};

// Global App State & Router
document.addEventListener('DOMContentLoaded', () => {
  initGlobalNavigation();
  initRouter();
});

// ==========================================================================
// CLIENT-SIDE ROUTER (MULTI-PAGE NAVIGATION)
// ==========================================================================
function initRouter() {
  // Intercept internal link clicks
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]') || e.target.closest('a[href^="/"]');
    if (link && link.getAttribute('target') !== '_blank') {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('http')) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  // Handle browser back and forward buttons
  window.addEventListener('popstate', () => {
    handleRoute(window.location.pathname);
  });

  // Handle initial page load
  handleRoute(window.location.pathname);
}

export function navigateTo(url) {
  if (window.location.pathname !== url) {
    window.history.pushState(null, '', url);
  }
  handleRoute(url);
}
window.navigateTo = navigateTo;

function handleRoute(pathname) {
  // Normalize path (strip trailing slash if not root)
  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const app = document.getElementById('app-router');
  if (!app) return;

  // Close any active lightbox and restore body scroll
  const activeLb = document.getElementById('tetravate-lightbox-modal');
  if (activeLb) {
    activeLb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (window._activeLightboxKeyHandler) {
    window.removeEventListener('keydown', window._activeLightboxKeyHandler);
    window._activeLightboxKeyHandler = null;
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // Close mobile drawer if open
  const drawer = document.getElementById('mobileNavDrawer');
  const menuBtn = document.getElementById('mobileMenuBtn');
  if (drawer && drawer.classList.contains('open')) {
    drawer.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }

  // Update navigation active states
  updateNavActiveState(cleanPath);

  // Route matching
  if (cleanPath === '/' || cleanPath === '') {
    renderHomePage(app);
  } else if (cleanPath === '/work') {
    renderWorkPage(app);
  } else if (cleanPath.startsWith('/work/')) {
    const slug = cleanPath.replace('/work/', '');
    renderProjectDetailPage(app, slug);
  } else if (cleanPath === '/services') {
    renderServicesPage(app);
  } else if (cleanPath === '/process') {
    renderProcessPage(app);
  } else if (cleanPath === '/about') {
    renderAboutPage(app);
  } else if (cleanPath === '/contact') {
    renderContactPage(app);
  } else {
    renderNotFoundPage(app);
  }

  // Re-run micro-interactions on the newly rendered DOM
  initSpotlightCards();
  initScrollReveal();
}

function updateNavActiveState(currentPath) {
  const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const normalized = (!currentPath || currentPath === '/') ? '/' : currentPath;
  links.forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === '/' 
      ? normalized === '/' 
      : normalized.startsWith(href);
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ==========================================================================
// GLOBAL NAVBAR CONTROLLER
// ==========================================================================
function initGlobalNavigation() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

// ==========================================================================
// VIEW: HOME PAGE (CONCISE 30-SECOND STUDIO INTRODUCTION)
// ==========================================================================
function renderHomePage(container) {
  document.title = 'Tetravate — Product Design & Engineering Studio | From Thought to Thing';

  container.innerHTML = `
    <div class="page-view">
      <!-- HERO SECTION -->
      <section class="hero-section" id="home">
        <div class="hero-ambient-glow" aria-hidden="true"></div>
        <div class="hero-grid-mesh" aria-hidden="true"></div>

        <div class="container hero-grid">
          <div class="hero-text-side">
            <div class="hero-badge-group">
              <div class="hero-badge">
                <span class="hero-badge-dot"></span>
                TETRAVATE 2.0 &bull; PRODUCT STUDIO
              </div>
            </div>

            <h1 class="hero-title">
              FROM THOUGHT<br/><span>TO THING.</span>
            </h1>
            <p class="hero-lead">
              We turn ideas and real-world problems into useful digital products. Technology is the tool — people, ideas, and real problems are the reason.
            </p>
            <div class="hero-ctas">
              <a href="/work" class="btn btn-primary btn-lg" data-link>
                See What We Build →
              </a>
              <a href="/contact" class="btn btn-secondary btn-lg" data-link>
                Start a Conversation
              </a>
            </div>

            <div class="hero-trust-bar">
              <div class="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>Real Problems Solved</span>
              </div>
              <div class="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>Fact-Based Quality</span>
              </div>
              <div class="trust-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
                <span>Human-Centered</span>
              </div>
            </div>
          </div>

          <!-- Hero Interactive Pipeline Card -->
          <div class="hero-visual-side">
            <div class="hero-visual-card" id="heroPathCard">
              <div class="hero-manifesto-title">
                <div class="manifesto-title-group">
                  <span class="manifesto-title-main">THE TETRAVATE TRANSFORMATION</span>
                </div>
                <span class="manifesto-pill-live" id="manifestoPhaseChip">02 // UNDERSTAND</span>
              </div>

              <div class="manifesto-progress-track">
                <div class="manifesto-progress-fill" id="manifestoProgressFill"></div>
              </div>

              <div class="hero-manifesto-steps" id="manifestoStepsContainer">
                <div class="manifesto-step is-active" data-step="1">
                  <div class="manifesto-step-left">
                    <span class="manifesto-step-num">01</span>
                    <div>
                      <div class="manifesto-step-label">Idea &amp; Need</div>
                      <div class="manifesto-step-sub">Listening to real operational friction</div>
                    </div>
                  </div>
                  <span class="manifesto-tag-status">Problem</span>
                </div>

                <div class="manifesto-step" data-step="2">
                  <div class="manifesto-step-left">
                    <span class="manifesto-step-num">02</span>
                    <div>
                      <div class="manifesto-step-label">Understanding</div>
                      <div class="manifesto-step-sub">User journeys &amp; technical scoping</div>
                    </div>
                  </div>
                  <span class="manifesto-tag-status">Strategy</span>
                </div>

                <div class="manifesto-step" data-step="3">
                  <div class="manifesto-step-left">
                    <span class="manifesto-step-num">03</span>
                    <div>
                      <div class="manifesto-step-label">Clean Design</div>
                      <div class="manifesto-step-sub">Zero-friction, accessible UI</div>
                    </div>
                  </div>
                  <span class="manifesto-tag-status">Prototype</span>
                </div>

                <div class="manifesto-step" data-step="4">
                  <div class="manifesto-step-left">
                    <span class="manifesto-step-num">04</span>
                    <div>
                      <div class="manifesto-step-label">Technology</div>
                      <div class="manifesto-step-sub">Resilient databases &amp; modern APIs</div>
                    </div>
                  </div>
                  <span class="manifesto-tag-status">Engineering</span>
                </div>

                <div class="manifesto-step is-outcome" data-step="5">
                  <div class="manifesto-step-left">
                    <span class="manifesto-step-num">05</span>
                    <div>
                      <div class="manifesto-step-label">Useful Product</div>
                      <div class="manifesto-step-sub">Dependable, production-ready artifact</div>
                    </div>
                  </div>
                  <span class="manifesto-tag-status highlight">Shipped Thing</span>
                </div>
              </div>

              <div class="manifesto-footer-note">
                <span class="manifesto-footer-dot"></span>
                <span>"Technology is the tool. People and their everyday problems are the reason."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SHORT TETRAVATE INTRODUCTION & CAPABILITIES OVERVIEW -->
      <section class="section section-secondary">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center;">
            <div>
              <div class="eyebrow">// PHILOSOPHY</div>
              <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--color-navy); margin-bottom: 1rem; line-height: 1.2;">
                Turning complex problems into clean, usable software.
              </h2>
              <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-body); margin-bottom: 1.5rem;">
                Ideas can stay in conversations, notes, sketches, and plans. Tetravate is built to cross the bridge from thought to thing — engineering dependable digital products for founders, operations, and communities.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="/about" class="btn btn-secondary btn-sm" data-link>Learn About the Studio →</a>
                <a href="/services" class="btn btn-secondary btn-sm" data-link>Explore Our Capabilities →</a>
              </div>
            </div>

            <div class="white-contrast-card" style="border-radius: var(--radius-md); padding: 2.25rem;">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-blue); font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.1em;">
                STUDIO PILLARS
              </div>
              <div style="display: flex; flex-direction: column; gap: 1.15rem;">
                <div style="display: flex; gap: 0.75rem;">
                  <span style="color: var(--color-blue); font-weight: 800; font-family: var(--font-mono);">01</span>
                  <div>
                    <strong style="color: var(--color-navy);">Business-First Architecture:</strong>
                    <span style="color: var(--text-dark-muted); font-size: 0.875rem;"> We understand operational workflows before writing code.</span>
                  </div>
                </div>
                <div style="display: flex; gap: 0.75rem;">
                  <span style="color: var(--color-blue); font-weight: 800; font-family: var(--font-mono);">02</span>
                  <div>
                    <strong style="color: var(--color-navy);">Offline &amp; Spatial Resilience:</strong>
                    <span style="color: var(--text-dark-muted); font-size: 0.875rem;"> Systems built to withstand network drops and high concurrency.</span>
                  </div>
                </div>
                <div style="display: flex; gap: 0.75rem;">
                  <span style="color: var(--color-blue); font-weight: 800; font-family: var(--font-mono);">03</span>
                  <div>
                    <strong style="color: var(--color-navy);">Grounded AI &amp; Analytics:</strong>
                    <span style="color: var(--text-dark-muted); font-size: 0.875rem;"> Explainable machine learning that delivers tangible utility without buzzword hype.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SELECTED WORK PREVIEW (TOP 3 PROJECTS LEADING TO /work) -->
      <section class="section">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
            <div>
              <div class="eyebrow">FEATURED WORK</div>
              <h2 class="section-title" style="margin-bottom: 0;">Selected Studio Projects</h2>
            </div>
            <a href="/work" class="btn btn-primary" data-link>
              ${featuredProjects.length > 0 ? `View All ${featuredProjects.length} Featured Projects →` : `Explore Selected Work →`}
            </a>
          </div>

          ${featuredProjects.length > 0 ? `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem;">
              ${featuredProjects.slice(0, 3).map(p => `
                <div class="service-card" style="padding: 1.75rem; display: flex; flex-direction: column;">
                  <div style="background: #F4F8FF; border: 1px solid #D9E2EF; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 1.25rem; height: 180px; display: flex; align-items: center; justify-content: center; padding: 0.65rem; box-sizing: border-box;">
                    <img src="${resolveImageSrc(p.coverImage || p.primaryImage) || mockupMap[p.id]}" alt="${p.title}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; object-position: center; border-radius: 4px;" />
                  </div>
                  <div class="project-tag" style="margin-bottom: 0.4rem; align-self: flex-start;">${p.categoryTag}</div>
                  <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.5rem;">${p.title}</h3>
                  <p style="font-size: 0.875rem; color: var(--text-body); line-height: 1.5; margin-bottom: 1.25rem; flex: 1;">
                    ${p.summary}
                  </p>
                  <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-top: auto;">
                    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${p.techStack.slice(0, 2).join(' · ')}</span>
                    <a href="/work/${p.slug}" class="service-action-link" data-link>Case Study →</a>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="empty-projects-state">
              <div class="empty-projects-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 class="empty-projects-title">New projects are coming soon.</h3>
              <p class="empty-projects-desc">Our updated project portfolio is currently in preparation. Check back shortly to explore our latest case studies and shipped products.</p>
            </div>
          `}
        </div>
      </section>

      <!-- WHAT WE BUILD PREVIEW (LEADING TO /services) -->
      <section class="section section-secondary">
        <div class="container">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; flex-wrap: wrap; gap: 1.5rem;">
            <div>
              <div class="eyebrow">CAPABILITIES</div>
              <h2 class="section-title" style="margin-bottom: 0;">What We Build</h2>
            </div>
            <a href="/services" class="btn btn-secondary" data-link>
              Full Services Overview →
            </a>
          </div>

          <div class="services-grid">
            ${services.map(s => `
              <div class="service-card">
                <div class="service-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 class="service-title">${s.title}</h3>
                <p class="service-desc">${s.shortDesc}</p>
                <ul class="service-capabilities-list">
                  ${s.capabilities.slice(0, 2).map(c => `<li class="service-cap-item">${c}</li>`).join('')}
                </ul>
                <a href="/services" class="service-action-link" data-link>Learn more →</a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 5-STEP PROCESS PREVIEW (LEADING TO /process) -->
      <section class="section">
        <div class="container">
          <div style="text-align: center; max-width: 700px; margin: 0 auto 3.5rem auto;">
            <div class="eyebrow">OUR METHODOLOGY</div>
            <h2 class="section-title">From Idea to Product</h2>
            <p class="section-subtitle">
              A disciplined 5-step engineering process turning ambiguous ideas into dependable digital products.
            </p>
          </div>

          <div class="process-steps-grid">
            ${processSteps.map(step => `
              <div class="process-card">
                <div class="process-num">${step.step}</div>
                <div class="process-phase-badge">${step.phase}</div>
                <h3 class="process-card-title">${step.title}</h3>
                <p class="process-card-summary">${step.summary}</p>
              </div>
            `).join('')}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="/process" class="btn btn-secondary" data-link>
              View Full Process Workflow →
            </a>
          </div>
        </div>
      </section>

      <!-- WHY TETRAVATE PREVIEW -->
      <section class="section section-secondary">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">WHY TETRAVATE</div>
            <h2 class="section-title">Built for substance, not hype.</h2>
            <p class="section-subtitle">
              Five reasons founders and businesses partner with Tetravate to design and engineer their digital products.
            </p>
          </div>

          <div class="why-grid">
            ${whyTetravateReasons.map(r => `
              <div class="why-card">
                <div class="why-card-num">${r.num}</div>
                <h3 class="why-card-title">${r.title}</h3>
                <p class="why-card-desc">${r.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FINAL CLOSING CTA -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <div class="eyebrow" style="margin-bottom: 1rem;">TURN THOUGHTS INTO THINGS</div>
            <h2 class="closing-cta-title">Have an idea? Let's turn it into something real.</h2>
            <p class="closing-cta-lead">
              From web applications and SaaS platforms to offline business software and AI systems — let's build your next digital product.
            </p>
            <div class="closing-cta-buttons">
              <a href="/contact" class="btn btn-primary btn-lg" data-link>
                Start a Project
              </a>
              <a href="/work" class="btn btn-secondary btn-lg" data-link>
                Explore All Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  initHeroPathPipeline();
}

// ==========================================================================
// VIEW: DEDICATED WORK PAGE (/work) — SHOWS ALL 6 PROJECTS
// ==========================================================================
function renderWorkPage(container) {
  document.title = 'Selected Work — Tetravate Studio Portfolio';

  container.innerHTML = `
    <div class="page-view">
      <div class="page-hero">
        <div class="container">
          <div class="eyebrow">PORTFOLIO &bull; SELECTED WORK</div>
          <h1 class="page-hero-title">Selected Work</h1>
          <p class="page-hero-subtitle">
            A selection of products, platforms and experiences we've designed and built. Every project represents real workflows, verified engineering decisions, and honest outcomes.
          </p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <!-- Filter bar -->
          <div class="work-filter-bar" id="workFilterBar">
            <button type="button" class="filter-btn active" data-filter="all">All Projects (${featuredProjects.length})</button>
            <button type="button" class="filter-btn" data-filter="AI">AI &amp; Analytics</button>
            <button type="button" class="filter-btn" data-filter="Business Software">Business Software</button>
            <button type="button" class="filter-btn" data-filter="E-Commerce">E-Commerce</button>
            <button type="button" class="filter-btn" data-filter="Web Development">Web Development</button>
            <button type="button" class="filter-btn" data-filter="Developer Tools">Developer Tools</button>
          </div>

          <div class="projects-list" id="projectsList">
            <!-- Project Cards Rendered Below -->
          </div>
        </div>
      </section>

      <!-- Closing CTA Banner -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <h2 class="closing-cta-title">Need a similar product built?</h2>
            <p class="closing-cta-lead">
              We turn difficult operational challenges into dependable software.
            </p>
            <a href="/contact" class="btn btn-primary btn-lg" data-link>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  `;

  renderWorkProjectCards('all');
  initWorkFilterButtons();
}

function renderWorkProjectCards(filterCategory = 'all') {
  const container = document.getElementById('projectsList');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => {
        const cat = (p.category || '').toLowerCase();
        const tag = (p.categoryTag || '').toLowerCase();
        const query = filterCategory.toLowerCase();
        return cat.includes(query) || tag.includes(query);
      });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-projects-state">
        <div class="empty-projects-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <h3 class="empty-projects-title">New projects are coming soon.</h3>
        <p class="empty-projects-desc">Our updated project portfolio is currently in preparation. Check back shortly to explore our latest case studies and shipped products.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((project, idx) => {
    const isReversed = idx % 2 === 1 ? 'reversed' : '';
    const mockupSrc = resolveImageSrc(project.coverImage || project.primaryImage) || mockupMap[project.id];
    const isMobile = project.id === 'pustakabhrita' || (mockupSrc && mockupSrc.toLowerCase().includes('mobile'));
    const address = project.liveDemo ? project.liveDemo.replace('https://', '').replace(/\/$/, '') : `${project.slug}.tetravate.studio`;

    return `
      <article class="project-card ${isReversed}" id="project-card-${project.slug}">
        <div class="project-visual-side">
          ${isMobile ? `
            <div class="mockup-mobile-window" style="max-height: 350px;">
              <img src="${mockupSrc}" alt="${project.title} Interface &amp; Architecture Overview" loading="lazy" />
            </div>
          ` : `
            <div class="project-mockup-frame">
              <div class="mockup-window-header">
                <div class="mockup-window-dots">
                  <span class="mockup-dot mockup-dot-red"></span>
                  <span class="mockup-dot mockup-dot-yellow"></span>
                  <span class="mockup-dot mockup-dot-green"></span>
                </div>
                <div class="mockup-window-address-bar">${address}</div>
              </div>
              <div class="mockup-window-content">
                <img src="${mockupSrc}" alt="${project.title} Interface &amp; Architecture Overview" loading="lazy" />
              </div>
            </div>
          `}
        </div>
        <div class="project-content-side">
          <div class="project-meta-row">
            <span class="project-tag">${project.categoryTag}</span>
            ${project.demoLabel ? `<span class="project-pill-tag project-status-pill">${project.demoLabel}</span>` : ''}
            ${project.quickTags ? project.quickTags.map(t => `<span class="project-pill-tag">${t}</span>`).join('') : ''}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          
          ${project.outcomeNarrative ? `
            <div class="project-outcome-frame">
              <span class="project-outcome-label">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Core Workflow Impact
              </span>
              <div class="project-outcome-text">${project.outcomeNarrative}</div>
            </div>
          ` : ''}

          <p class="project-summary">${project.summary}</p>
          
          <ul class="project-highlights-list">
            ${project.highlights.slice(0, 4).map(hl => `
              <li class="project-hl-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>${hl}</span>
              </li>
            `).join('')}
          </ul>

          <div class="project-tech-chips">
            ${project.techStack.map(t => `<span class="tech-chip">${t}</span>`).join('')}
          </div>

          <div class="project-card-actions">
            <a href="/work/${project.slug}" class="btn btn-primary" data-link>
              View Full Case Study →
            </a>
            ${project.liveDemo ? `
              <a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-secondary">
                Live Demo ↗
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  initSpotlightCards();
}

function initWorkFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderWorkProjectCards(filter);
    });
  });
}

// ==========================================================================
// VIEW: DEDICATED PROJECT DETAIL PAGE (/work/:slug) — PROPER ROUTE, NO MODAL!
// ==========================================================================
function renderProjectDetailPage(container, slug) {
  const projectIndex = featuredProjects.findIndex(p => p.slug === slug || p.id === slug);
  if (projectIndex === -1) {
    renderNotFoundPage(container);
    return;
  }

  const project = featuredProjects[projectIndex];
  document.title = `${project.title} — Case Study | Tetravate Studio`;

  const prevProject = projectIndex > 0 ? featuredProjects[projectIndex - 1] : featuredProjects[featuredProjects.length - 1];
  const nextProject = projectIndex < featuredProjects.length - 1 ? featuredProjects[projectIndex + 1] : featuredProjects[0];
  const screenshots = getProjectScreenshots(project);
  const activeScreenshot = screenshots[0];

  container.innerHTML = `
    <div class="page-view">
      <!-- Project Hero Header -->
      <section class="project-detail-hero">
        <div class="container">
          <a href="/work" class="project-back-link" data-link>
            ← Back to Selected Work
          </a>
          <div class="project-meta-row" style="margin-bottom: 0.75rem;">
            <span class="project-tag">${project.categoryTag}</span>
            ${project.demoLabel ? `<span class="project-pill-tag project-status-pill">${project.demoLabel}</span>` : ''}
            ${project.quickTags ? project.quickTags.map(t => `<span class="project-pill-tag">${t}</span>`).join('') : ''}
          </div>
          <h1 class="project-detail-title">${project.title}</h1>
          <p class="project-detail-subtitle">${project.subtitle}</p>

          <div class="project-detail-header-actions">
            ${project.liveDemo ? `
              <a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-primary">
                Live Demo ↗
              </a>
            ` : ''}
            <a href="/contact" class="btn btn-secondary" data-link>
              Discuss a Similar Project
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <!-- Development / Deployment Status Box -->
          <div class="project-status-box">
            <span class="project-status-dot"></span>
            <span class="project-status-text">
              <strong>Development &amp; Deployment Status:</strong> ${project.statusText || 'Portfolio Project'}
            </span>
          </div>

          <!-- Project Overview & Purpose -->
          <div style="background: #FFFFFF; border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 2.25rem; margin-bottom: 3.5rem; box-shadow: var(--shadow-sm);">
            <div class="eyebrow">PROJECT PURPOSE &amp; OVERVIEW</div>
            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.75rem;">What is ${project.title}?</h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin: 0;">${project.overview}</p>
          </div>

          <!-- Verified Technical Benchmarks -->
          <div class="cs-meta-grid">
            ${project.caseStudy.metrics.map(m => `
              <div class="cs-meta-box">
                <div class="cs-meta-label">${m.label}</div>
                <div class="cs-meta-value">${m.value}</div>
                <div class="cs-meta-note">${m.note}</div>
              </div>
            `).join('')}
          </div>

          <!-- Interactive Screenshot Showcase Gallery -->
          <div class="project-showcase-gallery" id="project-showcase-gallery">
            <div class="gallery-header-bar">
              <div class="gallery-header-title-group">
                <span class="gallery-pill-badge">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                  </svg>
                  Interface &amp; System Showcase
                </span>
                <span style="font-size: 0.875rem; color: var(--text-muted); font-weight: 600;">
                  ${screenshots.length > 1 ? `${screenshots.length} Genuine System Views Available` : 'Primary Application Interface'}
                </span>
              </div>
              <button type="button" class="gallery-fullscreen-trigger-btn" id="gallery-expand-btn" aria-label="Open fullscreen screenshot viewer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                Fullscreen Viewer
              </button>
            </div>

            <div class="gallery-main-frame">
              <div class="gallery-viewport-stage" id="gallery-viewport" title="Click to view enlarged screenshot">
                <div class="gallery-badge-counter" id="gallery-counter-badge">1 / ${screenshots.length}</div>
                <div class="gallery-zoom-hint-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  Click to enlarge
                </div>

                ${screenshots.length > 1 ? `
                  <button type="button" class="gallery-nav-btn prev" id="gallery-prev-btn" aria-label="Previous screenshot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button type="button" class="gallery-nav-btn next" id="gallery-next-btn" aria-label="Next screenshot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                ` : ''}

                <div class="mockup-frame-container" id="gallery-frame-container"></div>
              </div>

              <div class="gallery-caption-bar">
                <div class="gallery-caption-text" id="gallery-caption-text">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  <span id="gallery-caption-content">${activeScreenshot.caption}</span>
                </div>
                <button type="button" class="gallery-click-zoom-link" id="gallery-caption-zoom-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  Expand High-Res
                </button>
              </div>
            </div>

            ${screenshots.length > 1 ? `
              <div class="gallery-thumbnails-section">
                <div class="gallery-thumbnails-track" role="tablist" aria-label="Screenshot thumbnails">
                  ${screenshots.map((s, idx) => `
                    <button type="button" 
                            role="tab" 
                            class="gallery-thumb-card ${idx === 0 ? 'active' : ''}" 
                            data-index="${idx}" 
                            aria-selected="${idx === 0 ? 'true' : 'false'}" 
                            aria-label="View screenshot ${idx + 1}: ${s.caption}">
                      <div class="gallery-thumb-preview">
                        <img src="${s.src}" alt="${s.alt}" loading="lazy" />
                      </div>
                      <div class="gallery-thumb-info">
                        <span class="gallery-thumb-index">0${idx + 1}</span>
                        <span class="gallery-thumb-label" title="${s.caption}">${s.caption}</span>
                      </div>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- The Problem & The Solution -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-bottom: 3.5rem;">
            <div style="background: #FFFFFF; border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 2.25rem; box-shadow: var(--shadow-sm);">
              <div class="cs-stage-number" style="color: var(--color-blue); font-weight: 800;">THE PROBLEM</div>
              <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.75rem;">What needed to be solved?</h3>
              <p style="font-size: 1rem; line-height: 1.65; color: var(--text-body);">${project.caseStudy.problem}</p>
            </div>

            <div class="white-contrast-card" style="border-radius: var(--radius-md); padding: 2.25rem;">
              <div class="cs-stage-number" style="color: var(--color-blue); font-weight: 800;">THE SOLUTION</div>
              <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.75rem;">What Tetravate built</h3>
              <p style="font-size: 1rem; line-height: 1.65; color: var(--text-dark-muted); font-weight: 500;">${project.caseStudy.solution}</p>
            </div>
          </div>

          <!-- Key Features Section -->
          <div style="margin-bottom: 3.5rem;">
            <div class="eyebrow">SYSTEM CAPABILITIES</div>
            <h2 class="section-title">Key Architectural Features</h2>
            <div class="project-features-grid">
              ${project.features.map(f => `
                <div class="project-feature-card">
                  <div class="project-feature-num">${f.num}</div>
                  <h3 class="project-feature-title">${f.title}</h3>
                  <p class="project-feature-desc">${f.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Screenshots & Interface Evidence Grid -->
          ${screenshots.length > 1 ? `
            <div style="margin-bottom: 3.5rem;">
              <div class="eyebrow">INTERFACE EVIDENCE &amp; SCREENSHOTS</div>
              <h2 class="section-title">Application Screens &amp; Workflows</h2>
              <div class="project-gallery-grid">
                ${screenshots.map((img, idx) => `
                  <div class="project-gallery-item" data-gallery-index="${idx}" style="cursor: pointer;" title="Click to inspect this screen in full resolution">
                    <div class="project-gallery-img-wrap">
                      <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                    </div>
                    <div class="project-gallery-caption">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--color-blue)">
                        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                      </svg>
                      <span>${img.caption}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Technology Section -->
          <div style="background: #FFFFFF; border: 1px solid var(--border-medium); border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 3.5rem; box-shadow: var(--shadow-sm);">
            <div class="eyebrow">ENGINEERING STACK</div>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-heading); margin-bottom: 1.5rem;">
              Technologies Used in this Architecture
            </h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
              ${Object.entries(project.techGrouped).map(([key, val]) => `
                <div style="background: #F8FAFC; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem;">
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-blue); text-transform: uppercase; margin-bottom: 0.35rem; font-weight: 700; letter-spacing: 0.06em;">
                    ${key.replace('_', ' ')}
                  </div>
                  <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-navy);">
                    ${val}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Contributions Section -->
          ${project.contributions ? `
            <div class="project-contributions-card">
              <div class="cs-stage-number" style="color: var(--color-blue); font-weight: 800; margin-bottom: 0.4rem;">ENGINEERING CONTRIBUTIONS</div>
              <h3 class="project-contributions-title">Implementation &amp; Technical Scope</h3>
              <p class="project-contributions-text">${project.contributions}</p>
            </div>
          ` : ''}

          <!-- Short Narrative Case Study (Challenge, Approach, Outcome) -->
          <div style="margin-bottom: 3.5rem;">
            <div class="eyebrow">CASE STUDY NARRATIVE</div>
            <h2 class="section-title">Challenge, Approach &amp; Outcome</h2>
            <div class="cs-stages-list">
              <div class="cs-stage-block">
                <div class="cs-stage-number">CHALLENGE</div>
                <h3 class="cs-stage-title">The Operational Hurdle</h3>
                <p class="cs-stage-text">${project.caseStudy.narrative.challenge}</p>
              </div>

              <div class="cs-stage-block">
                <div class="cs-stage-number">APPROACH</div>
                <h3 class="cs-stage-title">How Tetravate Approached the Problem</h3>
                <p class="cs-stage-text">${project.caseStudy.narrative.approach}</p>
              </div>

              <div class="cs-stage-block">
                <div class="cs-stage-number">OUTCOME</div>
                <h3 class="cs-stage-title">Verified Delivery &amp; Results</h3>
                <p class="cs-stage-text">${project.caseStudy.narrative.outcome}</p>
              </div>
            </div>
          </div>

          <!-- Previous / Next Project Navigation -->
          <div class="project-pagination-bar">
            <div class="pagination-item">
              <span class="pagination-label">← Previous Project</span>
              <a href="/work/${prevProject.slug}" class="pagination-title" data-link>
                ${prevProject.title}
              </a>
            </div>

            <a href="/work" class="btn btn-secondary btn-sm" data-link>
              All Projects
            </a>

            <div class="pagination-item" style="text-align: right;">
              <span class="pagination-label">Next Project →</span>
              <a href="/work/${nextProject.slug}" class="pagination-title" data-link>
                ${nextProject.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Closing CTA -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <h2 class="closing-cta-title">Ready to build your digital product?</h2>
            <p class="closing-cta-lead">
              Let's talk through your requirements and engineer a practical solution.
            </p>
            <a href="/contact" class="btn btn-primary btn-lg" data-link>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  `;

  // Initialize interactive gallery and fullscreen lightbox viewer
  initProjectGalleryAndLightbox(project, screenshots);
}

// ==========================================================================
// INTERACTIVE SCREENSHOT GALLERY & FULLSCREEN LIGHTBOX CONTROLLER
// ==========================================================================
function initProjectGalleryAndLightbox(project, screenshots) {
  if (!screenshots || screenshots.length === 0) return;

  let currentIndex = 0;
  const total = screenshots.length;

  const frameContainer = document.getElementById('gallery-frame-container');
  const counterBadge = document.getElementById('gallery-counter-badge');
  const captionContent = document.getElementById('gallery-caption-content');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const viewport = document.getElementById('gallery-viewport');
  const expandBtn = document.getElementById('gallery-expand-btn');
  const captionZoomLink = document.getElementById('gallery-caption-zoom-link');
  const thumbCards = document.querySelectorAll('.gallery-thumb-card');
  const lowerItems = document.querySelectorAll('.project-gallery-item[data-gallery-index]');

  function updateGallery(newIndex, syncModal = true) {
    currentIndex = (newIndex + total) % total;
    const current = screenshots[currentIndex];
    const isMobile = project.id === 'pustakabhrita' || 
                     (current.src && current.src.toLowerCase().includes('mobile')) ||
                     (current.caption && current.caption.toLowerCase().includes('mobile'));

    const displayUrl = project.liveDemo
      ? project.liveDemo.replace(/^https?:\/\//i, '').replace(/\/$/, '')
      : `${project.slug || project.id}.tetravate.studio`;

    if (frameContainer) {
      if (isMobile) {
        frameContainer.innerHTML = `
          <div class="mockup-mobile-window">
            <img id="gallery-main-img" class="gallery-main-image" src="${current.src}" alt="${current.alt || current.caption}" />
          </div>
        `;
      } else {
        frameContainer.innerHTML = `
          <div class="mockup-presentation-window">
            <div class="mockup-window-header">
              <div class="mockup-window-dots">
                <span class="mockup-dot mockup-dot-red"></span>
                <span class="mockup-dot mockup-dot-yellow"></span>
                <span class="mockup-dot mockup-dot-green"></span>
              </div>
              <div class="mockup-window-address-bar" id="mockup-window-url" title="${displayUrl}">
                ${displayUrl}
              </div>
            </div>
            <div class="mockup-window-content">
              <img id="gallery-main-img" class="gallery-main-image" src="${current.src}" alt="${current.alt || current.caption}" />
            </div>
          </div>
        `;
      }
    }

    if (counterBadge) {
      counterBadge.textContent = `${currentIndex + 1} / ${total}`;
    }

    if (captionContent) {
      captionContent.textContent = current.caption;
    }

    thumbCards.forEach((card, idx) => {
      if (idx === currentIndex) {
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
      }
    });

    if (syncModal) {
      syncLightboxContent();
    }
  }

  // Populate initial mockup frame immediately
  updateGallery(0, false);

  thumbCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        updateGallery(idx);
      }
    });
  });

  lowerItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-gallery-index'), 10);
      if (!isNaN(idx)) {
        updateGallery(idx);
        openLightbox(idx);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateGallery(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateGallery(currentIndex + 1);
    });
  }

  if (viewport) {
    viewport.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-nav-btn')) return;
      openLightbox(currentIndex);
    });
  }

  if (expandBtn) {
    expandBtn.addEventListener('click', () => openLightbox(currentIndex));
  }

  if (captionZoomLink) {
    captionZoomLink.addEventListener('click', () => openLightbox(currentIndex));
  }

  // Ensure Lightbox Modal in DOM without stale event listeners
  let lightboxModal = document.getElementById('tetravate-lightbox-modal');
  if (lightboxModal) {
    lightboxModal.remove();
  }

  lightboxModal = document.createElement('div');
  lightboxModal.id = 'tetravate-lightbox-modal';
  lightboxModal.className = 'lightbox-modal';
  lightboxModal.setAttribute('role', 'dialog');
  lightboxModal.setAttribute('aria-modal', 'true');
  lightboxModal.setAttribute('aria-label', 'Fullscreen Screenshot Viewer');
    lightboxModal.innerHTML = `
      <div class="lightbox-backdrop" id="lightbox-backdrop" title="Click outside to close"></div>
      <div class="lightbox-shell">
        <div class="lightbox-topbar">
          <div class="lightbox-meta-left">
            <span class="lightbox-counter-tag" id="lb-counter">1 / 1</span>
            <span class="lightbox-title-text" id="lb-title">${project.title}</span>
          </div>
          <div class="lightbox-controls-right">
            <button type="button" class="lightbox-close-btn" id="lb-close-btn" aria-label="Close fullscreen viewer (Escape)" title="Close (Escape)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="lightbox-stage" id="lb-stage">
          <button type="button" class="lightbox-stage-arrow prev" id="lb-prev-btn" aria-label="Previous screenshot (Left arrow)" title="Previous (Left Arrow)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-img-wrap" id="lb-img-wrap">
            <img id="lb-img" class="lightbox-large-img" src="" alt="" />
          </div>

          <button type="button" class="lightbox-stage-arrow next" id="lb-next-btn" aria-label="Next screenshot (Right arrow)" title="Next (Right Arrow)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div class="lightbox-bottombar">
          <div class="lightbox-caption-detail" id="lb-caption"></div>
          <div class="lightbox-keyboard-hint">
            <kbd>←</kbd> <kbd>→</kbd> Navigate &nbsp;•&nbsp; <kbd>ESC</kbd> Close
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(lightboxModal);

  const lbCounter = document.getElementById('lb-counter');
  const lbTitle = document.getElementById('lb-title');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbCloseBtn = document.getElementById('lb-close-btn');
  const lbBackdrop = document.getElementById('lightbox-backdrop');
  const lbPrevBtn = document.getElementById('lb-prev-btn');
  const lbNextBtn = document.getElementById('lb-next-btn');
  const lbStage = document.getElementById('lb-stage');

  function syncLightboxContent() {
    if (!lightboxModal.classList.contains('is-open')) return;
    const current = screenshots[currentIndex];
    if (lbCounter) lbCounter.textContent = `${currentIndex + 1} / ${total}`;
    if (lbTitle) lbTitle.textContent = `${project.title}`;
    if (lbCaption) lbCaption.textContent = current.caption;
    if (lbImg) {
      lbImg.classList.add('fade-out');
      setTimeout(() => {
        lbImg.src = current.src;
        lbImg.alt = current.alt;
        lbImg.classList.remove('fade-out');
      }, 100);
    }

    if (total <= 1) {
      if (lbPrevBtn) lbPrevBtn.style.display = 'none';
      if (lbNextBtn) lbNextBtn.style.display = 'none';
    } else {
      if (lbPrevBtn) lbPrevBtn.style.display = 'flex';
      if (lbNextBtn) lbNextBtn.style.display = 'flex';
    }
  }

  function openLightbox(index) {
    currentIndex = (index + total) % total;
    lightboxModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    syncLightboxContent();
    if (lbCloseBtn) lbCloseBtn.focus();

    if (window._activeLightboxKeyHandler) {
      window.removeEventListener('keydown', window._activeLightboxKeyHandler);
    }

    window._activeLightboxKeyHandler = (e) => {
      if (!lightboxModal.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && total > 1) {
        e.preventDefault();
        updateGallery(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && total > 1) {
        e.preventDefault();
        updateGallery(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', window._activeLightboxKeyHandler);
  }

  function closeLightbox() {
    lightboxModal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (window._activeLightboxKeyHandler) {
      window.removeEventListener('keydown', window._activeLightboxKeyHandler);
      window._activeLightboxKeyHandler = null;
    }
  }

  if (lbCloseBtn) lbCloseBtn.onclick = closeLightbox;
  if (lbBackdrop) lbBackdrop.onclick = closeLightbox;
  if (lbPrevBtn) {
    lbPrevBtn.onclick = (e) => {
      e.stopPropagation();
      updateGallery(currentIndex - 1);
    };
  }
  if (lbNextBtn) {
    lbNextBtn.onclick = (e) => {
      e.stopPropagation();
      updateGallery(currentIndex + 1);
    };
  }

  // Mobile Touch Swipe
  if (lbStage) {
    let touchStartX = 0;
    let touchEndX = 0;
    lbStage.ontouchstart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    lbStage.ontouchend = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50 && total > 1) {
        updateGallery(currentIndex + 1);
      } else if (touchEndX - touchStartX > 50 && total > 1) {
        updateGallery(currentIndex - 1);
      }
    };
  }
}

// ==========================================================================
// VIEW: SERVICES PAGE (/services)
// ==========================================================================
function renderServicesPage(container) {
  document.title = 'What We Build — Tetravate Studio Services';

  container.innerHTML = `
    <div class="page-view">
      <div class="page-hero">
        <div class="container">
          <div class="eyebrow">WHAT WE BUILD</div>
          <h1 class="page-hero-title">Services &amp; Capabilities</h1>
          <p class="page-hero-subtitle">
            Websites, e-commerce platforms, SaaS products, business systems, mobile applications and AI-powered products.
          </p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="services-grid" style="grid-template-columns: repeat(2, 1fr); gap: 2rem;">
            ${services.map(s => `
              <div class="service-card" style="padding: 2.5rem;">
                <div class="service-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 class="service-title" style="font-size: 1.6rem;">${s.title}</h3>
                <p class="service-desc" style="font-size: 1rem; margin-bottom: 1.5rem;">${s.detail}</p>
                
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-blue); font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem; letter-spacing: 0.08em;">
                  Core Capabilities
                </div>
                <ul class="service-capabilities-list" style="margin-bottom: 1.5rem;">
                  ${s.capabilities.map(c => `<li class="service-cap-item" style="font-size: 0.9rem; color: var(--text-body);">${c}</li>`).join('')}
                </ul>

                <div class="service-ideal-box">
                  <span class="service-ideal-label">Ideal For:</span>
                  <p class="service-ideal-text">${s.idealFor}</p>
                </div>

                <a href="/contact" class="btn btn-primary" style="width: 100%; justify-content: center;" data-link>
                  Discuss ${s.title} →
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Technical Capabilities Breakdown -->
      <section class="section section-secondary">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">ENGINEERING TOOLKIT</div>
            <h2 class="section-title">Technical Stacks We Build With</h2>
            <p class="section-subtitle">
              We select modern, maintainable stacks suited to the technical demands of each product.
            </p>
          </div>

          <div class="tech-groups-grid">
            ${technologyGroups.map(group => `
              <div class="tech-group-card">
                <div class="tech-group-category">${group.category}</div>
                <p class="tech-group-tagline">${group.tagline}</p>
                <ul class="tech-group-list">
                  ${group.items.map(item => `<li class="tech-group-item">${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <h2 class="closing-cta-title">Ready to begin?</h2>
            <p class="closing-cta-lead">
              Tell us what you want to build and let's scope a clear path forward.
            </p>
            <a href="/contact" class="btn btn-primary btn-lg" data-link>
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

// ==========================================================================
// VIEW: PROCESS PAGE (/process) — 5-STEP METHODOLOGY
// ==========================================================================
function renderProcessPage(container) {
  document.title = 'From Idea to Product — Our Process | Tetravate';

  container.innerHTML = `
    <div class="page-view">
      <div class="page-hero">
        <div class="container">
          <div class="eyebrow">STUDIO METHODOLOGY</div>
          <h1 class="page-hero-title">From Idea to Product</h1>
          <p class="page-hero-subtitle">
            Good products do not begin with code. They begin with understanding. Here is our disciplined 5-step process turning thoughts into real things.
          </p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div style="display: flex; flex-direction: column; gap: 2.5rem; max-width: 900px; margin: 0 auto;">
            ${processSteps.map((step, idx) => `
              <div style="display: flex; gap: 2rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 2.5rem; transition: all var(--transition-normal);" class="process-detailed-card">
                <div style="font-family: var(--font-mono); font-size: 2.75rem; font-weight: 800; color: var(--color-blue-light); line-height: 1; flex-shrink: 0;">
                  ${step.step}
                </div>
                <div>
                  <div class="eyebrow" style="margin-bottom: 0.35rem;">PHASE ${step.step} &bull; ${step.phase.toUpperCase()}</div>
                  <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.75rem;">
                    ${step.title}
                  </h3>
                  <p style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.5;">
                    ${step.summary}
                  </p>
                  <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.65;">
                    ${step.detail}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="process-callout-quote" style="max-width: 900px; margin: 3.5rem auto 0 auto;">
            <div>
              <div class="process-quote-text">"Good products do not begin with code. They begin with understanding."</div>
              <div class="process-quote-sub">The Tetravate Product &amp; Engineering Principle</div>
            </div>
            <a href="/contact" class="btn btn-primary" data-link>
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <h2 class="closing-cta-title">Have an idea? Let's turn it into something real.</h2>
            <p class="closing-cta-lead">
              Our 5-step sprint workflow will take your project from scope to production.
            </p>
            <a href="/contact" class="btn btn-primary btn-lg" data-link>
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

// ==========================================================================
// VIEW: ABOUT PAGE (/about) — FOUNDERS RADIAL NETWORK & ACHIEVEMENTS
// ==========================================================================
function renderAboutPage(container) {
  document.title = 'About Tetravate — Founders & Philosophy';

  container.innerHTML = `
    <div class="page-view">
      <div class="page-hero">
        <div class="container">
          <div class="eyebrow">ABOUT TETRAVATE</div>
          <h1 class="page-hero-title">The Founders &amp; Philosophy</h1>
          <p class="page-hero-subtitle">
            Five builders. One core. Everyone builds across the stack, with responsibilities adapting to each project.
          </p>
        </div>
      </div>

      <!-- Story & Philosophy -->
      <section class="section section-secondary">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center;">
            <div>
              <div class="eyebrow">OUR STORY</div>
              <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--text-heading); margin-bottom: 1.25rem; line-height: 1.2;">
                We started Tetravate to build things that matter.
              </h2>
              <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-body); margin-bottom: 1rem;">
                Too much software is created for marketing hype rather than real operational utility. We wanted to build a product studio grounded in first principles: listening to users on the shop counter, observing where workers lose time, and engineering software that works with zero lag.
              </p>
              <p style="font-size: 1.05rem; line-height: 1.65; color: var(--text-body);">
                From our roots in hackathons to in-store business deployments, our focus has always been the same: turn ideas and real-world problems into useful digital products.
              </p>
            </div>

            <div class="white-contrast-card" style="border-radius: var(--radius-lg); padding: 2.25rem;">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-blue); font-weight: 800; text-transform: uppercase; margin-bottom: 1rem; letter-spacing: 0.1em;">
                STUDIO MANIFESTO
              </div>
              <blockquote style="font-size: 1.25rem; font-style: italic; color: var(--color-navy); font-weight: 800; line-height: 1.5; margin-bottom: 1.5rem;">
                "Technology is the tool. People and their everyday problems are the reason."
              </blockquote>
              <div style="font-size: 0.9rem; color: var(--text-dark-muted); font-weight: 500; line-height: 1.6;">
                &bull; Zero fabricated statistics<br/>
                &bull; Offline resilience over cloud fragility<br/>
                &bull; Built to ship into real everyday use
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5 Founders Section: Radial Network & Interactive Inspection Showcase -->
      <section class="section founders-section">
        <div class="container">
          <div class="section-header text-center" style="max-width: 760px; margin: 0 auto 3.5rem auto;">
            <div class="eyebrow">THE FOUNDING TEAM</div>
            <h2 class="section-title">Five Builders &bull; One Core</h2>
            <p class="section-subtitle">
              Every founder actively engineers product systems across the stack — combining deep domain specialization with collaborative, end-to-end execution.
            </p>
          </div>

          <!-- Dual Layout: Radial Network (Left) + Interactive Inspection Showcase Card (Right) -->
          <div class="founders-dual-layout">
            <!-- Left: Radial Topology Network -->
            <div class="founders-network-wrapper">
              <svg class="founders-svg-canvas" viewBox="0 0 580 500" aria-hidden="true">
                <!-- Concentric Orbit Rings -->
                <circle class="network-orbit-ring" cx="290" cy="250" r="125" />
                <circle class="network-orbit-ring" cx="290" cy="250" r="215" />

                <!-- Connecting Lines to 5 Nodes -->
                <!-- Node 01: Top (290, 68) -->
                <line class="network-connector-line" x1="290" y1="250" x2="290" y2="68" />
                <!-- Node 02: East / Right (485, 205) -->
                <line class="network-connector-line" x1="290" y1="250" x2="485" y2="205" />
                <!-- Node 03: South-East / Bottom Right (412, 415) -->
                <line class="network-connector-line" x1="290" y1="250" x2="412" y2="415" />
                <!-- Node 04: South-West / Bottom Left (168, 415) -->
                <line class="network-connector-line" x1="290" y1="250" x2="168" y2="415" />
                <!-- Node 05: West / Left (95, 205) -->
                <line class="network-connector-line" x1="290" y1="250" x2="95" y2="205" />
              </svg>

              <!-- Central Core Node -->
              <div class="central-core-node is-active" role="button" tabindex="0" aria-label="Tetravate Company Overview">
                <img src="/src/assets/logo-emblem.png" alt="Tetravate Core Emblem" class="central-core-logo-img" />
                <span class="central-core-title">TETRAVATE</span>
                <span class="central-core-pill">
                  <span class="core-dot"></span>CORE
                </span>
              </div>

              <!-- Satellite Founder Nodes (01 to 05) -->
              <!-- 01: Aadhithya Balu S (Top) -->
              <div class="founder-satellite-node node-pos-1" data-index="0" role="button" tabindex="0" aria-label="Founder 01: Aadhithya Balu S — Deployment &amp; DevOps" style="left: 50%; top: 13.6%;">
                <div class="satellite-card">
                  <div class="satellite-top-row">
                    <span class="satellite-num-badge">01</span>
                    <span class="satellite-founder-label">Founder</span>
                  </div>
                  <div class="satellite-name">AADHITHYA BALU S</div>
                  <div class="satellite-divider"></div>
                  <div class="satellite-tagline">Deployment &amp; DevOps</div>
                </div>
              </div>

              <!-- 02: Aswin N S (Right) -->
              <div class="founder-satellite-node node-pos-2" data-index="1" role="button" tabindex="0" aria-label="Founder 02: Aswin N S — Backend &amp; Applied AI Pipelines" style="left: 83.6%; top: 41%;">
                <div class="satellite-card">
                  <div class="satellite-top-row">
                    <span class="satellite-num-badge">02</span>
                    <span class="satellite-founder-label">Founder</span>
                  </div>
                  <div class="satellite-name">ASWIN N S</div>
                  <div class="satellite-divider"></div>
                  <div class="satellite-tagline">Backend &amp; Applied AI Pipelines</div>
                </div>
              </div>

              <!-- 03: Almas M (Bottom Right) -->
              <div class="founder-satellite-node node-pos-3" data-index="2" role="button" tabindex="0" aria-label="Founder 03: Almas M — Full-Stack &amp; Integration" style="left: 71%; top: 83%;">
                <div class="satellite-card">
                  <div class="satellite-top-row">
                    <span class="satellite-num-badge">03</span>
                    <span class="satellite-founder-label">Founder</span>
                  </div>
                  <div class="satellite-name">ALMAS M</div>
                  <div class="satellite-divider"></div>
                  <div class="satellite-tagline">Full-Stack &amp; Integration</div>
                </div>
              </div>

              <!-- 04: Giridharan P (Bottom Left) -->
              <div class="founder-satellite-node node-pos-4" data-index="3" role="button" tabindex="0" aria-label="Founder 04: Giridharan P — Frontend &amp; UI/UX" style="left: 29%; top: 83%;">
                <div class="satellite-card">
                  <div class="satellite-top-row">
                    <span class="satellite-num-badge">04</span>
                    <span class="satellite-founder-label">Founder</span>
                  </div>
                  <div class="satellite-name">GIRIDHARAN P</div>
                  <div class="satellite-divider"></div>
                  <div class="satellite-tagline">Frontend &amp; UI/UX</div>
                </div>
              </div>

              <!-- 05: Ashwin S (Left) -->
              <div class="founder-satellite-node node-pos-5" data-index="4" role="button" tabindex="0" aria-label="Founder 05: Ashwin S — Testing &amp; Quality Assurance" style="left: 16.4%; top: 41%;">
                <div class="satellite-card">
                  <div class="satellite-top-row">
                    <span class="satellite-num-badge">05</span>
                    <span class="satellite-founder-label">Founder</span>
                  </div>
                  <div class="satellite-name">ASHWIN S</div>
                  <div class="satellite-divider"></div>
                  <div class="satellite-tagline">Testing &amp; Quality Assurance</div>
                </div>
              </div>
            </div>

            <!-- Right: Inspection Showcase Card -->
            <div class="founders-showcase-panel">
              <div class="founders-showcase-card" id="founder-showcase-card">
                <div class="showcase-header-row">
                  <div class="showcase-pills-wrap">
                    <span class="showcase-pill" id="showcase-role-pill">COMPANY</span>
                  </div>
                </div>

                <div class="showcase-domain" id="showcase-domain">STUDIO CORE</div>
                <h3 class="showcase-name" id="showcase-name">TETRAVATE</h3>
                <div class="showcase-tagline" id="showcase-tagline">FROM THOUGHT TO THING</div>

                <hr class="showcase-rule" />

                <div class="showcase-section-label">FOCUS &amp; SYSTEMS SCOPE</div>
                <p class="showcase-bio" id="showcase-bio">
                  A product engineering team that transforms ideas into practical digital products through thoughtful design, software engineering, and AI-driven solutions.
                </p>

                <div class="showcase-section-label">ARCHITECTURE &amp; CAPABILITIES</div>
                <div class="showcase-skills-wrap" id="showcase-skills-wrap">
                  <span class="showcase-skill-chip">Product Development</span>
                  <span class="showcase-skill-chip">Full-Stack Engineering</span>
                  <span class="showcase-skill-chip">Applied AI</span>
                  <span class="showcase-skill-chip">Data Systems</span>
                  <span class="showcase-skill-chip">Deployment</span>
                </div>

                <div class="showcase-footer-row">
                  <div class="showcase-social-links" id="showcase-social-links">
                    <a href="https://www.linkedin.com/company/tetravate/" target="_blank" rel="noopener noreferrer" class="showcase-social-btn" id="showcase-link-li" title="LinkedIn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a href="https://github.com/orgs/Tetravate" target="_blank" rel="noopener noreferrer" class="showcase-social-btn" id="showcase-link-gh" title="GitHub">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Core Brand Principles Grid (3 on 1st line, 2 centered on 2nd line) -->
          <div class="founders-values-wrapper">
            <div class="founders-values-header">
              <div class="eyebrow">FOUNDATIONAL ETHOS</div>
              <h3 class="section-title">Our Core Principles</h3>
              <p class="section-subtitle" style="margin: 0 auto;">
                The engineering values, architectural honesty, and human standards that guide every line of code we ship.
              </p>
            </div>
            <div class="values-grid">
              <div class="value-card">
                <div class="value-card-num">01</div>
                <h4 class="value-card-title">Trust</h4>
                <p class="value-card-desc">No exaggerated claims or speculative promises. Reliable timelines, transparent architecture, and honest status updates throughout delivery.</p>
              </div>
              <div class="value-card">
                <div class="value-card-num">02</div>
                <h4 class="value-card-title">Quality</h4>
                <p class="value-card-desc">Resilient code, accessible ergonomics, sub-second query speeds, and software built to endure in production without frequent rewrites.</p>
              </div>
              <div class="value-card">
                <div class="value-card-num">03</div>
                <h4 class="value-card-title">Thoughts</h4>
                <p class="value-card-desc">Deliberate thinking before coding. Clear problem framing, observing actual operational friction, and listening to users before writing software.</p>
              </div>
              <div class="value-card">
                <div class="value-card-num">04</div>
                <h4 class="value-card-title">Kindness</h4>
                <p class="value-card-desc">Respectful communication, patience with complex business requirements, and deep empathy for every person who interacts with our digital products.</p>
              </div>
              <div class="value-card">
                <div class="value-card-num">05</div>
                <h4 class="value-card-title">Humanity</h4>
                <p class="value-card-desc">Technology exists to serve people and human dignity, never the reverse. We build dependable, useful tools for real people solving real problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Verified Achievements & Proof -->
      <section class="section section-secondary">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">VERIFIABLE EVIDENCE</div>
            <h2 class="section-title">Achievements &amp; Proof</h2>
            <p class="section-subtitle">
              We never manufacture marketing statistics. Genuine hackathon achievements, verified store deployments, and research-backed systems.
            </p>
          </div>

          <div class="achievements-grid">
            ${achievements.map(a => `
              <div class="achievement-card">
                <div class="achievement-badge">${a.badge}</div>
                <h3 class="achievement-title">${a.title}</h3>
                <p class="achievement-desc">${a.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="section">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">PARTNER PERSPECTIVES</div>
            <h2 class="section-title">What People Say</h2>
            <p class="section-subtitle">
              Verified feedback from business operators and technical mentors.
            </p>
          </div>

          <div class="testimonials-grid">
            ${testimonials.map(t => `
              <div class="testimonial-card">
                <div class="testimonial-quote-mark">“</div>
                <p class="testimonial-quote-text">${t.quote}</p>
                <div class="testimonial-author-row">
                  <span class="testimonial-author-name">${t.author}</span>
                  <span class="testimonial-author-meta">${t.role} &bull; ${t.context}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="closing-cta-section">
        <div class="container">
          <div class="closing-cta-card">
            <h2 class="closing-cta-title">Work with our founding engineering team.</h2>
            <p class="closing-cta-lead">
              Direct founder collaboration from first concept through to launch.
            </p>
            <a href="/contact" class="btn btn-primary btn-lg" data-link>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  `;

  // Initialize interactive radial network showcase
  initFoundersNetworkShowcase(container);
}

function initFoundersNetworkShowcase(container) {
  const networkWrapper = container.querySelector('.founders-network-wrapper');
  const centralCoreNode = container.querySelector('.central-core-node');
  const nodes = container.querySelectorAll('.founder-satellite-node');
  const showcaseCard = container.querySelector('#founder-showcase-card');
  const lines = container.querySelectorAll('.network-connector-line');
  if (!networkWrapper || !nodes.length || !showcaseCard) return;

  const rolePill = showcaseCard.querySelector('#showcase-role-pill');
  const domainEl = showcaseCard.querySelector('#showcase-domain');
  const nameEl = showcaseCard.querySelector('#showcase-name');
  const taglineEl = showcaseCard.querySelector('#showcase-tagline');
  const bioEl = showcaseCard.querySelector('#showcase-bio');
  const skillsWrap = showcaseCard.querySelector('#showcase-skills-wrap');
  const linkLi = showcaseCard.querySelector('#showcase-link-li');
  const linkGh = showcaseCard.querySelector('#showcase-link-gh');

  let currentActiveIndex = undefined;

  function setActiveFounder(idx) {
    if (currentActiveIndex === idx) return;
    currentActiveIndex = idx;

    if (idx !== null && idx !== undefined && teamMembers[idx]) {
      const founder = teamMembers[idx];

      // Update active satellite node styling & accessible attributes
      nodes.forEach((n, i) => {
        const isActive = i === idx;
        n.classList.toggle('is-active', isActive);
        n.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      // Update active SVG connector line
      lines.forEach((line, i) => {
        line.classList.toggle('is-active', i === idx);
      });

      // Central node idle
      if (centralCoreNode) {
        centralCoreNode.classList.remove('is-active');
        centralCoreNode.setAttribute('aria-pressed', 'false');
      }

      // Update showcase card content to Founder
      if (rolePill) rolePill.textContent = (founder.role || 'FOUNDER').toUpperCase();
      if (domainEl) domainEl.textContent = (founder.focus || founder.tagline).toUpperCase();
      if (nameEl) nameEl.textContent = founder.nameUpper || founder.name.toUpperCase();
      if (taglineEl) taglineEl.textContent = founder.summary || founder.tagline;
      if (bioEl) bioEl.textContent = founder.bio;
      if (skillsWrap) {
        skillsWrap.innerHTML = founder.skills.map(s => `<span class="showcase-skill-chip">${s}</span>`).join('');
      }
      if (linkLi && founder.linkedin) linkLi.href = founder.linkedin;
      if (linkGh && founder.github) linkGh.href = founder.github;
    } else {
      // Default / Core: Tetravate Company Info
      nodes.forEach((n) => {
        n.classList.remove('is-active');
        n.setAttribute('aria-pressed', 'false');
      });

      lines.forEach((line) => {
        line.classList.remove('is-active');
      });

      if (centralCoreNode) {
        centralCoreNode.classList.add('is-active');
        centralCoreNode.setAttribute('aria-pressed', 'true');
      }

      // Update showcase card content to Tetravate
      if (rolePill) rolePill.textContent = companyInfo.role || 'COMPANY';
      if (domainEl) domainEl.textContent = companyInfo.domain || 'STUDIO CORE';
      if (nameEl) nameEl.textContent = companyInfo.nameUpper || 'TETRAVATE';
      if (taglineEl) taglineEl.textContent = companyInfo.tagline || 'FROM THOUGHT TO THING';
      if (bioEl) bioEl.textContent = companyInfo.bio;
      if (skillsWrap) {
        skillsWrap.innerHTML = companyInfo.skills.map(s => `<span class="showcase-skill-chip">${s}</span>`).join('');
      }
      if (linkLi && companyInfo.linkedin) linkLi.href = companyInfo.linkedin;
      if (linkGh && companyInfo.github) linkGh.href = companyInfo.github;
    }
  }

  // Pointer movement resolver: returns founder index if cursor is over a founder node, or null
  function resolveTargetIndex(target) {
    if (!target || !target.closest) return null;
    const founderNode = target.closest('.founder-satellite-node');
    if (founderNode && networkWrapper.contains(founderNode)) {
      const idx = parseInt(founderNode.getAttribute('data-index'), 10);
      return isNaN(idx) ? null : idx;
    }
    return null;
  }

  function handlePointerMove(e) {
    const idx = resolveTargetIndex(e.target);
    setActiveFounder(idx);
  }

  // Hover tracking over the entire radial network area
  networkWrapper.addEventListener('mouseover', handlePointerMove);
  networkWrapper.addEventListener('mousemove', handlePointerMove);
  networkWrapper.addEventListener('mouseleave', () => setActiveFounder(null));

  // Central node explicit interaction (hover, click, keyboard)
  if (centralCoreNode) {
    centralCoreNode.addEventListener('mouseenter', () => setActiveFounder(null));
    centralCoreNode.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveFounder(null);
    });
    centralCoreNode.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveFounder(null);
      }
    });
  }

  // Satellite node interactions (tap / click & keyboard)
  nodes.forEach((node) => {
    const idx = parseInt(node.getAttribute('data-index'), 10);
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveFounder(idx);
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveFounder(idx);
      }
    });
  });

  // Empty space click on network wrapper resets to company info (mobile touch friendly)
  networkWrapper.addEventListener('click', (e) => {
    const idx = resolveTargetIndex(e.target);
    setActiveFounder(idx);
  });

  // Default state: Tetravate Company Info
  setActiveFounder(null);
}

// ==========================================================================
// VIEW: CONTACT PAGE (/contact) — FORM & DIRECT CHANNELS
// ==========================================================================
function renderContactPage(container) {
  document.title = 'Start a Project — Contact Tetravate';

  container.innerHTML = `
    <div class="page-view">
      <div class="page-hero">
        <div class="container">
          <div class="eyebrow">START A PROJECT</div>
          <h1 class="page-hero-title">Have an idea? Let's build it.</h1>
          <p class="page-hero-subtitle">
            Whether you have a complete technical specification or an idea on a napkin, let's discuss how we can turn it into a working product.
          </p>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="contact-layout">
            <!-- Official Channels Hub -->
            <div class="contact-info-panel">
              <div class="contact-social-hub-title">OFFICIAL STUDIO CHANNELS</div>

              <div class="contact-social-grid">
                <a href="mailto:tetravate@gmail.com" class="contact-social-card">
                  <div class="contact-social-left">
                    <div class="contact-social-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div class="contact-social-name-row">
                        <span class="contact-social-name">Direct Email</span>
                        <span class="contact-social-tag">Inbox</span>
                      </div>
                      <span class="contact-social-handle">tetravate@gmail.com</span>
                    </div>
                  </div>
                  <span class="contact-social-arrow">&nearr;</span>
                </a>

                <a href="https://www.linkedin.com/company/tetravate/" target="_blank" rel="noopener" class="contact-social-card">
                  <div class="contact-social-left">
                    <div class="contact-social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div class="contact-social-name-row">
                        <span class="contact-social-name">LinkedIn</span>
                        <span class="contact-social-tag">Network</span>
                      </div>
                      <span class="contact-social-handle">linkedin.com/company/tetravate</span>
                    </div>
                  </div>
                  <span class="contact-social-arrow">&nearr;</span>
                </a>

                <a href="https://github.com/orgs/Tetravate" target="_blank" rel="noopener" class="contact-social-card">
                  <div class="contact-social-left">
                    <div class="contact-social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div class="contact-social-name-row">
                        <span class="contact-social-name">GitHub</span>
                        <span class="contact-social-tag">Open Source</span>
                      </div>
                      <span class="contact-social-handle">github.com/orgs/Tetravate</span>
                    </div>
                  </div>
                  <span class="contact-social-arrow">&nearr;</span>
                </a>

                <a href="https://www.instagram.com/tetra.vate?utm_source=ig_web_button_share_sheet&amp;stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener" class="contact-social-card">
                  <div class="contact-social-left">
                    <div class="contact-social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <div class="contact-social-name-row">
                        <span class="contact-social-name">Instagram</span>
                        <span class="contact-social-tag">Builds</span>
                      </div>
                      <span class="contact-social-handle">@tetra.vate</span>
                    </div>
                  </div>
                  <span class="contact-social-arrow">&nearr;</span>
                </a>
              </div>

              <div class="white-contrast-card" style="border-radius: var(--radius-sm); padding: 1.5rem;">
                <div style="font-size: 0.9375rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.35rem;">
                  Direct Founder Communication
                </div>
                <p style="font-size: 0.84rem; color: var(--text-dark-muted); margin: 0; line-height: 1.55; font-weight: 500;">
                  You will speak directly with the engineering and design founders who build the software — never a commissioned sales representative.
                </p>
              </div>
            </div>

            <!-- Project Inquiry Form -->
            <div class="contact-form-card">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.5rem;">
                Project Inquiry Form
              </h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.75rem;">
                Fill in the details below. We will analyze your requirements and reply within 24 hours.
              </p>

              <form id="inquiryForm" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label for="inquiryName" class="form-label">Your Name *</label>
                    <input type="text" id="inquiryName" class="form-input" placeholder="e.g. Ramesh or Sarah" required />
                    <div class="form-error-msg">Please enter your name.</div>
                  </div>

                  <div class="form-group">
                    <label for="inquiryEmail" class="form-label">Email Address *</label>
                    <input type="email" id="inquiryEmail" class="form-input" placeholder="name@company.com" required />
                    <div class="form-error-msg">Please enter a valid email address.</div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="inquiryCompany" class="form-label">Company / Organization <span class="optional">(Optional)</span></label>
                    <input type="text" id="inquiryCompany" class="form-input" placeholder="e.g. Acme Studio / Independent" />
                  </div>

                  <div class="form-group">
                    <label for="inquiryService" class="form-label">What do you need? *</label>
                    <select id="inquiryService" class="form-select">
                      <option value="Web Experiences">Web Experience / Studio Website</option>
                      <option value="E-Commerce">E-Commerce Storefront</option>
                      <option value="Business Systems">Business Software &amp; POS</option>
                      <option value="SaaS Products">SaaS Platform / Dashboard</option>
                      <option value="Mobile Applications">Mobile Application</option>
                      <option value="AI &amp; ML">AI &amp; Machine Learning Solution</option>
                      <option value="General Consultation">Not sure yet / General consultation</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="inquiryMessage" class="form-label">Tell us about your project or problem *</label>
                  <textarea id="inquiryMessage" class="form-textarea"
                    placeholder="What problem are you trying to solve? Who is going to use it? What are the key features you need?"
                    required></textarea>
                  <div class="form-error-msg">Please describe your project in at least 10 characters.</div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="inquiryBudget" class="form-label">Budget Range <span class="optional">(Optional)</span></label>
                    <input type="text" id="inquiryBudget" class="form-input" placeholder="e.g. Flexible / Staged / Milestone" />
                  </div>

                  <div class="form-group">
                    <label for="inquiryTimeline" class="form-label">Desired Timeline <span class="optional">(Optional)</span></label>
                    <input type="text" id="inquiryTimeline" class="form-input" placeholder="e.g. 1–2 months / ASAP" />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  Send Project Inquiry
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>

              <!-- Success State Banner -->
              <div class="form-success-banner" id="inquirySuccessBanner">
                <div class="form-success-title">✓ Thank you for reaching out!</div>
                <p class="form-success-desc">
                  Your project brief has been recorded. You can also send this inquiry directly via your default email client or WhatsApp below:
                </p>
                <div class="form-success-actions">
                  <a href="#" class="btn btn-primary btn-sm" id="openEmailClientBtn" target="_blank" rel="noopener">
                    Send via Email Client
                  </a>
                  <a href="#" class="btn btn-secondary btn-sm" id="openWhatsAppBtn" target="_blank" rel="noopener">
                    Send via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  initContactForm();
}

// ==========================================================================
// VIEW: 404 NOT FOUND PAGE
// ==========================================================================
function renderNotFoundPage(container) {
  document.title = 'Page Not Found — Tetravate';

  container.innerHTML = `
    <div class="page-view not-found-view">
      <div class="container">
        <div class="not-found-code">404</div>
        <h1 class="not-found-title">Page Not Found</h1>
        <p class="not-found-desc">
          The page or case study you requested does not exist or has been moved.
        </p>
        <a href="/" class="btn btn-primary btn-lg" data-link>
          Return to Studio Home
        </a>
      </div>
    </div>
  `;
}

// ==========================================================================
// INTERACTIVE COMPONENT HANDLERS
// ==========================================================================

// Hero Pipeline Stepper
function initHeroPathPipeline() {
  const container = document.getElementById('manifestoStepsContainer');
  const progressFill = document.getElementById('manifestoProgressFill');
  const phaseChip = document.getElementById('manifestoPhaseChip');
  const pathCard = document.getElementById('heroPathCard');

  if (!container || !progressFill) return;

  const steps = container.querySelectorAll('.manifesto-step');
  const phaseTexts = {
    1: 'Phase 01 • Operational Problem Scope',
    2: 'Phase 02 • Architecture & Logic',
    3: 'Phase 03 • Zero-Friction UI',
    4: 'Phase 04 • Resilient Stack',
    5: 'Phase 05 • Shipped Digital Thing'
  };

  let currentStep = 1;
  let isHovered = false;

  function activateStep(stepNum) {
    currentStep = stepNum;
    steps.forEach(s => {
      const num = parseInt(s.getAttribute('data-step'), 10);
      if (num === stepNum) {
        s.classList.add('is-active');
      } else {
        s.classList.remove('is-active');
      }
    });

    const percent = stepNum * 20;
    progressFill.style.width = `${percent}%`;

    if (phaseChip && phaseTexts[stepNum]) {
      phaseChip.textContent = phaseTexts[stepNum];
    }
  }

  steps.forEach(s => {
    const num = parseInt(s.getAttribute('data-step'), 10);
    s.addEventListener('mouseenter', () => {
      isHovered = true;
      activateStep(num);
    });
    s.addEventListener('click', () => {
      activateStep(num);
    });
  });

  if (pathCard) {
    pathCard.addEventListener('mouseenter', () => { isHovered = true; });
    pathCard.addEventListener('mouseleave', () => { isHovered = false; });
  }

  setInterval(() => {
    if (!isHovered && document.getElementById('manifestoStepsContainer')) {
      let next = currentStep + 1;
      if (next > 5) next = 1;
      activateStep(next);
    }
  }, 3800);
}



// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const successBanner = document.getElementById('inquirySuccessBanner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('inquiryName');
    const emailInput = document.getElementById('inquiryEmail');
    const companyInput = document.getElementById('inquiryCompany');
    const serviceInput = document.getElementById('inquiryService');
    const messageInput = document.getElementById('inquiryMessage');
    const budgetInput = document.getElementById('inquiryBudget');
    const timelineInput = document.getElementById('inquiryTimeline');

    let isValid = true;

    // Reset error states
    document.querySelectorAll('.form-input, .form-textarea').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.form-error-msg').forEach(el => el.style.display = 'none');

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please tell us your name.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid email address.');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please describe your project in at least 10 characters.');
      isValid = false;
    }

    if (!isValid) return;

    const companyStr = companyInput.value.trim() ? ` (${companyInput.value.trim()})` : '';
    const mailSubject = encodeURIComponent(`Tetravate Project Inquiry: ${serviceInput.value} from ${nameInput.value.trim()}${companyStr}`);
    const mailBody = encodeURIComponent(
      `Hello Tetravate Team,\n\n` +
      `Name: ${nameInput.value.trim()}\n` +
      `Email: ${emailInput.value.trim()}\n` +
      `Company: ${companyInput.value.trim() || 'Independent'}\n` +
      `Service Needed: ${serviceInput.value}\n` +
      `Budget: ${budgetInput.value.trim() || 'Flexible / To be discussed'}\n` +
      `Timeline: ${timelineInput.value.trim() || 'Flexible'}\n\n` +
      `Project Brief:\n${messageInput.value.trim()}\n\n` +
      `Looking forward to discussing next steps.`
    );

    const whatsappText = encodeURIComponent(
      `Hello Tetravate! My name is ${nameInput.value.trim()}${companyStr}. I'm reaching out regarding a ${serviceInput.value} project. Brief: ${messageInput.value.trim()}`
    );

    const emailBtn = document.getElementById('openEmailClientBtn');
    const whatsappBtn = document.getElementById('openWhatsAppBtn');

    if (emailBtn) {
      emailBtn.href = `mailto:tetravate@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }
    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/?text=${whatsappText}`;
    }

    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    form.reset();
  });

  function showError(inputEl, message) {
    inputEl.classList.add('input-error');
    const errorEl = inputEl.parentElement.querySelector('.form-error-msg');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }
}

// Spotlight Cursor Follower
function initSpotlightCards() {
  const cards = document.querySelectorAll(
    '.service-card, .project-card, .process-card, .why-card, .achievement-card, .tech-group-card, .project-feature-card, .hero-visual-card'
  );

  cards.forEach(card => {
    if (card._hasSpotlightListener) return;
    card._hasSpotlightListener = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Scroll Reveal Observer
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.section-header, .service-card, .project-card, .process-card, .why-card, .achievement-card, .tech-group-card, .closing-cta-card, .process-detailed-card'
  );

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el, idx) => {
    el.classList.add('reveal-on-scroll');
    const delay = (idx % 3) * 0.07;
    if (delay > 0) {
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });
}
