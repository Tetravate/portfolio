import './style.css';
import { featuredProjects, services, processSteps, teamMembers } from './data/projects.js';
import mockupPos from './assets/mockup-pos.svg';
import mockupDrishyam from './assets/mockup-drishyam.svg';
import mockupOivu from './assets/mockup-oivu.svg';
import mockupMistiq from './assets/mockup-mistiq.svg';

// Visual Mockup Map for projects
const mockupMap = {
  'ags-masalas-pos': mockupPos,
  'drishyam': mockupDrishyam,
  'oivu': mockupOivu,
  'mistiq': mockupMistiq
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderFeaturedProjects('all');
  renderServices();
  initFoundersRadialNetwork();
  initProjectFilters();
  initCaseStudyModal();
  initContactForm();
  checkInitialHash();
});

// Mobile Navigation & Scroll Spy
function initNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer upon link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// Render Featured Projects
function renderFeaturedProjects(filterCategory = 'all') {
  const container = document.getElementById('projectsList');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  container.innerHTML = filtered.map((project, idx) => {
    const isReversed = idx % 2 === 1 ? 'reversed' : '';
    const mockupSrc = mockupMap[project.id] || '/src/assets/mockup-pos.svg';

    return `
      <article class="project-card ${isReversed}" id="project-card-${project.id}">
        <div class="project-visual-side">
          <div class="project-mockup-frame">
            <img src="${mockupSrc}" alt="${project.title} Interface &amp; Architecture Overview" loading="lazy" />
          </div>
        </div>
        <div class="project-content-side">
          <span class="project-tag">${project.categoryTag}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          <p class="project-summary">${project.summary}</p>
          
          <ul class="project-highlights-list">
            ${project.highlights.map(hl => `
              <li class="project-hl-item">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
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
            <button type="button" class="btn btn-primary open-case-study" data-project-id="${project.id}">
              Read Case Study
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <a href="#contact" class="btn btn-secondary start-similar-inquiry" data-service="${project.category}">
              Build Similar
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-bind click events for case studies
  document.querySelectorAll('.open-case-study').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = e.currentTarget.getAttribute('data-project-id');
      openCaseStudy(pid);
    });
  });

  // Re-bind pre-selection on build similar
  document.querySelectorAll('.start-similar-inquiry').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serv = e.currentTarget.getAttribute('data-service');
      const select = document.getElementById('inquiryService');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes(serv.toLowerCase())) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    });
  });
}

// Project Category Filters
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderFeaturedProjects(filter);
    });
  });
}

// Render Services
function renderServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const serviceIcons = {
    'web-apps': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    'mobile-apps': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    'ai-ml': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    'automation': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    'business-software': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    'custom-products': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
  };

  container.innerHTML = services.map(service => `
    <div class="service-card" id="service-${service.id}">
      <div class="service-icon-wrap">
        ${serviceIcons[service.id] || serviceIcons['web-apps']}
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.shortDesc}</p>
      
      <ul class="service-capabilities-list">
        ${service.capabilities.map(cap => `<li class="service-cap-item">${cap}</li>`).join('')}
      </ul>

      <a href="#contact" class="service-action-link" onclick="preselectService('${service.title}')">
        Discuss this service →
      </a>
    </div>
  `).join('');
}

// Interactive Radial Network: The Founders (High-End Studio System)
function initFoundersRadialNetwork() {
  const foundersLayer = document.getElementById('radialFoundersLayer');
  const linesGroup = document.getElementById('radialLinesGroup');
  const activeTitle = document.getElementById('activeFounderTitle');
  const activeDesc = document.getElementById('activeFounderDesc');
  const activeTags = document.getElementById('activeFounderTags');
  const activeBadge = document.getElementById('activeFounderBadge');
  const centralCoreCard = document.getElementById('centralCoreCard');

  if (!foundersLayer || !linesGroup) return;

  const centerX = 400;
  const centerY = 400;
  const radius = 265;

  // 4 Founders positioned in perfect 90° symmetry: TOP, RIGHT, BOTTOM, LEFT
  const nodeCoordinates = teamMembers.map((member, idx) => {
    const angleDeg = -90 + idx * 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    // Flyout placement based on node orientation to ensure zero viewport clipping
    let flyoutClass = 'flyout-bottom';
    if (idx === 0) flyoutClass = 'flyout-bottom';
    else if (idx === 1) flyoutClass = 'flyout-left';
    else if (idx === 2) flyoutClass = 'flyout-top';
    else if (idx === 3) flyoutClass = 'flyout-right';

    return {
      idx,
      member,
      angleDeg,
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
      xPercent: Number(((x / 800) * 100).toFixed(2)),
      yPercent: Number(((y / 800) * 100).toFixed(2)),
      flyoutClass
    };
  });

  // Render SVG connecting lines with animated particle flows traveling toward Tetravate center
  linesGroup.innerHTML = nodeCoordinates.map(n => `
    <g class="radial-connection-group" id="connectionGroup-${n.idx}">
      <!-- Direct vector connection from founder to central core -->
      <path
        id="radialPath-${n.idx}"
        class="radial-connector-path"
        d="M 400 400 L ${n.x} ${n.y}"
      />
      <!-- Active glowing overlay path -->
      <path
        id="radialActiveGlow-${n.idx}"
        class="radial-glow-overlay-path"
        d="M 400 400 L ${n.x} ${n.y}"
      />
      <!-- Terminal node anchor dot -->
      <circle
        id="radialDot-${n.idx}"
        class="radial-path-dot"
        cx="${n.x}"
        cy="${n.y}"
        r="3"
      />
      <!-- Particle 1 flowing continuously from Founder toward Tetravate Center -->
      <circle r="2.25" class="radial-flow-particle particle-lead" fill="#10B981" opacity="0.8">
        <animateMotion
          dur="3.2s"
          repeatCount="indefinite"
          path="M ${n.x} ${n.y} L 400 400"
          keyPoints="0;1"
          keyTimes="0;1"
        />
      </circle>
      <!-- Particle 2 secondary staggered wave -->
      <circle r="1.5" class="radial-flow-particle particle-trail" fill="#059669" opacity="0.6">
        <animateMotion
          dur="3.2s"
          begin="1.6s"
          repeatCount="indefinite"
          path="M ${n.x} ${n.y} L 400 400"
          keyPoints="0;1"
          keyTimes="0;1"
        />
      </circle>
    </g>
  `).join('');

  // Render HTML Founder Leaf Nodes
  foundersLayer.innerHTML = nodeCoordinates.map(n => `
    <div
      class="founder-leaf-node"
      id="founderLeafNode-${n.idx}"
      data-idx="${n.idx}"
      style="left: ${n.xPercent}%; top: ${n.yPercent}%;"
      tabindex="0"
      role="button"
      aria-label="${n.member.nameUpper}, FOUNDER. ${n.member.tagline}"
    >
      <div class="founder-leaf-capsule">
        <div class="founder-leaf-header">
          <span class="founder-leaf-number">${n.member.number}</span>
          <span class="founder-leaf-role">
            <span class="founder-live-dot"></span>
            ${n.member.role}
          </span>
        </div>
        <div class="founder-leaf-name">${n.member.nameUpper}</div>
        <div class="founder-leaf-sub">${n.member.tagline}</div>
      </div>

      <!-- Attached Micro Information Flyout (Reveals on Hover / Focus) -->
      <div class="founder-flyout-panel ${n.flyoutClass}" aria-hidden="true">
        <div class="flyout-heading-row">
          <span class="flyout-name">${n.member.nameUpper}</span>
          <span class="flyout-badge">FOUNDER</span>
        </div>
        <div class="flyout-versatile-label">${n.member.tagline}</div>
        <p class="flyout-bio-text">${n.member.bio}</p>
        <div class="flyout-skills-wrap">
          ${n.member.skills.map(s => `<span class="flyout-chip">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Interactive System Handlers
  const founderNodes = foundersLayer.querySelectorAll('.founder-leaf-node');
  const connectionGroups = linesGroup.querySelectorAll('.radial-connection-group');

  const defaultTagsHTML = `
    <span class="active-tag-chip">Frontend &amp; UI Systems</span>
    <span class="active-tag-chip">Backend &amp; Applied AI</span>
    <span class="active-tag-chip">Full-Stack &amp; Integration</span>
    <span class="active-tag-chip">Product Logic &amp; Deployment</span>
  `;

  function setActiveFounder(activeIdx) {
    founderNodes.forEach((node, idx) => {
      if (idx === activeIdx) {
        node.classList.add('is-active');
        node.classList.remove('is-dimmed');
      } else {
        node.classList.remove('is-active');
        node.classList.add('is-dimmed');
      }
    });

    connectionGroups.forEach((group, idx) => {
      if (idx === activeIdx) {
        group.classList.add('is-active');
        group.classList.remove('is-dimmed');
      } else {
        group.classList.remove('is-active');
        group.classList.add('is-dimmed');
      }
    });

    // Central core node reacts with a pulse
    if (centralCoreCard) {
      centralCoreCard.classList.add('core-pulse-active');
    }

    if (activeTitle && activeDesc && activeTags && activeBadge) {
      const activeMember = teamMembers[activeIdx];
      activeTitle.textContent = `${activeMember.nameUpper} — FOUNDER`;
      activeDesc.textContent = `${activeMember.bio} • Cross-functional contributor across the full software lifecycle.`;
      activeTags.innerHTML = activeMember.skills.map(s => `<span class="active-tag-chip is-highlighted">${s}</span>`).join('');
      activeBadge.textContent = 'CONNECTED NODE';
    }
  }

  function resetActiveFounder() {
    founderNodes.forEach(node => {
      node.classList.remove('is-active');
      node.classList.remove('is-dimmed');
    });

    connectionGroups.forEach(group => {
      group.classList.remove('is-active');
      group.classList.remove('is-dimmed');
    });

    if (centralCoreCard) {
      centralCoreCard.classList.remove('core-pulse-active');
    }

    if (activeTitle && activeDesc && activeTags && activeBadge) {
      activeTitle.textContent = 'Four Builders • Unified Core';
      activeDesc.textContent = 'Four builders, one team — everyone builds across the stack, with responsibilities adapting to each project.';
      activeTags.innerHTML = defaultTagsHTML;
      activeBadge.textContent = 'VERSATILE CORE';
    }
  }

  founderNodes.forEach(node => {
    const idx = parseInt(node.getAttribute('data-idx'), 10);

    node.addEventListener('mouseenter', () => setActiveFounder(idx));
    node.addEventListener('focus', () => setActiveFounder(idx));

    node.addEventListener('mouseleave', resetActiveFounder);
    node.addEventListener('blur', resetActiveFounder);

    node.addEventListener('click', (e) => {
      // Toggle or set on mobile touch
      if (node.classList.contains('is-active')) {
        resetActiveFounder();
      } else {
        setActiveFounder(idx);
      }
    });
  });
}

// Case Study Modal System
function initCaseStudyModal() {
  const backdrop = document.getElementById('caseStudyModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!backdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudy);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeCaseStudy();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeCaseStudy();
    }
  });
}

export function openCaseStudy(projectId) {
  const project = featuredProjects.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('caseStudyModalBackdrop');
  const modalBody = document.getElementById('caseStudyModalBody');
  const modalTag = document.getElementById('modalProjectTag');
  const modalTitle = document.getElementById('modalProjectTitle');

  if (!backdrop || !modalBody) return;

  modalTag.textContent = project.categoryTag;
  modalTitle.textContent = project.title;

  const mockupSrc = mockupMap[project.id] || '/src/assets/mockup-pos.svg';

  modalBody.innerHTML = `
    <!-- Top Visual Diagram -->
    <div class="cs-visual-container">
      <img src="${mockupSrc}" alt="${project.title} Architecture &amp; User Interface" style="max-height: 400px; width: auto; margin: 0 auto;" />
    </div>

    <!-- Overview & Problem Context -->
    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem;">Project Context</h4>
      <p style="font-size: 1rem; line-height: 1.6; color: var(--text-body);">${project.overview}</p>
    </div>

    <!-- Verified Metrics Grid -->
    <div class="cs-meta-grid">
      ${project.caseStudy.metrics.map(m => `
        <div class="cs-meta-box">
          <div class="cs-meta-label">${m.label}</div>
          <div class="cs-meta-value">${m.value}</div>
          <div class="cs-meta-note">${m.note}</div>
        </div>
      `).join('')}
    </div>

    <!-- Full 8-Stage Case Study Experience -->
    <div class="cs-stages-list">
      <div class="cs-stage-block">
        <div class="cs-stage-number">01 — The Problem</div>
        <h4 class="cs-stage-title">What problem existed?</h4>
        <p class="cs-stage-text">${project.caseStudy.problem}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">02 — The Goal</div>
        <h4 class="cs-stage-title">What did the user need?</h4>
        <p class="cs-stage-text">${project.caseStudy.goal}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">03 — The Challenge</div>
        <h4 class="cs-stage-title">What made this problem difficult?</h4>
        <p class="cs-stage-text">${project.caseStudy.challenge}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">04 — Our Approach</div>
        <h4 class="cs-stage-title">How Tetravate thought through it</h4>
        <p class="cs-stage-text">${project.caseStudy.approach}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">05 — The Solution</div>
        <h4 class="cs-stage-title">What was actually built</h4>
        <p class="cs-stage-text">${project.caseStudy.solution}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">06 — Technical Decisions</div>
        <h4 class="cs-stage-title">Why these specific tools were chosen</h4>
        <p class="cs-stage-text">${project.caseStudy.technicalDecisions}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">07 — The Result</div>
        <h4 class="cs-stage-title">What changed after delivery?</h4>
        <p class="cs-stage-text">${project.caseStudy.result}</p>
      </div>

      <div class="cs-stage-block">
        <div class="cs-stage-number">08 — What We Learned</div>
        <h4 class="cs-stage-title">Key takeaway from this project</h4>
        <p class="cs-stage-text">${project.caseStudy.learned}</p>
      </div>
    </div>

    <!-- Tech Stack Summary -->
    <div style="background-color: var(--color-soft-slate); border: 1px solid var(--color-slate-200); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2.5rem;">
      <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-blue); margin-bottom: 0.5rem; letter-spacing: 0.08em;">Technologies Used</div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${project.techStack.map(t => `<span class="tech-chip" style="background: white; border: 1px solid var(--color-slate-300);">${t}</span>`).join('')}
      </div>
    </div>

    <!-- Bottom Case Study CTA -->
    <div class="cs-modal-cta-box">
      <div>
        <div class="cs-modal-cta-title">Have a similar problem or idea?</div>
        <div class="cs-modal-cta-text">Let's talk through your requirements and find a practical solution.</div>
      </div>
      <a href="#contact" class="btn btn-primary" onclick="window.closeCaseStudy(); preselectService('${project.category}');">
        Start a Conversation
      </a>
    </div>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  window.history.pushState(null, '', `#case-study-${project.id}`);
}

export function closeCaseStudy() {
  const backdrop = document.getElementById('caseStudyModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  // Clear hash without jump
  window.history.pushState(null, '', window.location.pathname);
}

// Check initial hash on page load (deep-linking to case study)
function checkInitialHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#case-study-')) {
    const pid = hash.replace('#case-study-', '');
    openCaseStudy(pid);
  }
}

// Pre-select service in inquiry form
window.preselectService = function(serviceName) {
  const select = document.getElementById('inquiryService');
  if (!select) return;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
      select.selectedIndex = i;
      break;
    }
  }
};

window.closeCaseStudy = closeCaseStudy;

// Interactive Contact Form
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const successBanner = document.getElementById('inquirySuccessBanner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('inquiryName');
    const emailInput = document.getElementById('inquiryEmail');
    const serviceInput = document.getElementById('inquiryService');
    const messageInput = document.getElementById('inquiryMessage');
    const budgetInput = document.getElementById('inquiryBudget');
    const timelineInput = document.getElementById('inquiryTimeline');

    let isValid = true;

    // Reset error states
    document.querySelectorAll('.form-input, .form-textarea').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.form-error-msg').forEach(el => el.style.display = 'none');

    // Name Validation
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please tell us your name.');
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid email address so we can reply.');
      isValid = false;
    }

    // Message Validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please describe your idea or problem in a few words (at least 10 characters).');
      isValid = false;
    }

    if (!isValid) return;

    // Create inquiry mailto & WhatsApp links
    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const service = encodeURIComponent(serviceInput.value);
    const message = encodeURIComponent(messageInput.value.trim());
    const budget = encodeURIComponent(budgetInput.value.trim() || 'Flexible / To be discussed');
    const timeline = encodeURIComponent(timelineInput.value.trim() || 'Flexible');

    const mailSubject = encodeURIComponent(`Tetravate Inquiry: ${serviceInput.value} from ${nameInput.value.trim()}`);
    const mailBody = encodeURIComponent(
      `Hello Tetravate Team,\n\n` +
      `Name: ${nameInput.value.trim()}\n` +
      `Email: ${emailInput.value.trim()}\n` +
      `Need: ${serviceInput.value}\n` +
      `Budget: ${budgetInput.value.trim() || 'Flexible'}\n` +
      `Timeline: ${timelineInput.value.trim() || 'Flexible'}\n\n` +
      `Project Details:\n${messageInput.value.trim()}\n\n` +
      `Looking forward to hearing from you.`
    );

    const whatsappText = encodeURIComponent(
      `Hello Tetravate! My name is ${nameInput.value.trim()}. I'm reaching out about a ${serviceInput.value} project. Idea: ${messageInput.value.trim()}`
    );

    const emailBtn = document.getElementById('openEmailClientBtn');
    const whatsappBtn = document.getElementById('openWhatsAppBtn');

    if (emailBtn) {
      emailBtn.href = `mailto:tetravate@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }
    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/?text=${whatsappText}`;
    }

    // Show confirmation
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
