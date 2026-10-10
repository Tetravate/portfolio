# Tetravate Portfolio — AGENTS.md

## 1. PROJECT CONTEXT

This is the existing Tetravate portfolio website.

The project already exists and must be IMPROVED, not replaced.

Current architecture:

- Vite
- Vanilla JavaScript
- HTML
- CSS

## NON-NEGOTIABLE ARCHITECTURE RULE

DO NOT migrate this project to:

- React
- Next.js
- Vue
- Angular
- TypeScript

unless explicitly requested by the user.

Preserve the existing Vite + Vanilla JavaScript architecture.

Before modifying anything, inspect the existing codebase and understand how it currently works.

---

# 2. EXISTING PROJECT FIRST

Always work with the existing project.

DO NOT:

- Create a separate project
- Create a new unrelated portfolio
- Replace the existing project wholesale
- Delete existing assets unnecessarily
- Remove working functionality without reason
- Replace existing project information with invented information

Preserve useful existing:

- Components
- Assets
- Project data
- Logo files
- Mockups
- Animations
- Styling
- Functionality

Refactor only where necessary.

---

# 3. BRAND IDENTITY — NON-NEGOTIABLE

## TETRAVATE ORIGINAL BRAND COLORS

The Tetravate visual identity is based on the colors shown in the official Tetravate logo:

### Primary Brand Colors

Deep Navy:
#011641

Primary Electric Blue:
#0065FF

White:
#FEFEFE

These colors are the foundation of the entire website.

The visual relationship should be:

DEEP NAVY
→ Primary background / dark surfaces

ELECTRIC BLUE
→ Primary accent / CTA / highlights / interactive elements

WHITE
→ Main text / logo / contrast elements

---

## IMPORTANT

The recent green/emerald redesign is INCORRECT.

Do NOT use green or emerald as the primary brand color.

DO NOT use:

#10B981
#059669
#34D399

Do not create an emerald-themed website.

Do not introduce a different color identity.

The final website must visually match the Tetravate logo:

Deep Navy + Electric Blue + White.

---

## COLOR USAGE

### Deep Navy — #011641

Use primarily for:

- Main page backgrounds
- Hero backgrounds
- Footer
- Dark sections
- Navigation backgrounds
- Large visual surfaces

### Electric Blue — #0065FF

Use primarily for:

- Primary buttons
- CTA highlights
- Links
- Active navigation states
- Hover states
- Important accents
- Borders
- Glows
- Interactive elements
- Graphic elements

### White — #FEFEFE

Use primarily for:

- Main headings
- Body text where high contrast is needed
- Logo
- Important labels
- Cards/details on dark surfaces

---

## SUPPORTING COLORS

Supporting colors may be derived from the three official brand colors.

For example:

- Darker navy variants for depth
- Lighter blue variants for hover/focus states
- Soft white/blue-gray variants for secondary text

However:

DO NOT introduce another dominant hue.

The website should remain visually recognizable as:

NAVY + BLUE + WHITE.

---

## GRADIENTS

Gradients are allowed only when they are derived from the Tetravate palette.

Good examples:

Deep Navy → slightly lighter Navy

Electric Blue → Blue variants

Deep Navy → Electric Blue glow

Avoid:

- Green gradients
- Purple-heavy gradients
- Pink gradients
- Orange gradients
- Rainbow gradients

The brand should remain blue.

---

## GLOW EFFECTS

Use blue glows sparingly.

Preferred:

rgba(0, 101, 255, ...)

Glows should enhance the interface rather than dominate it.

Avoid excessive neon effects.

---

## CONTRAST

Maintain strong contrast between:

Deep Navy backgrounds
White typography
Electric Blue accents

The website should feel:

- Premium
- Clean
- Technical
- Confident
- Modern

Not:

- Neon cyberpunk
- Gaming UI
- Generic SaaS
- Green AI template


# 4. WEBSITE STRUCTURE

The final website must be MULTI-PAGE.

Do NOT keep the final experience as one giant scrolling page.

Required primary routes:

/
 /work
 /services
 /process
 /about
 /contact

Project routes:

/work/ags-masalas
/work/drishyam
/work/mistiq
/work/ecommerce
/work/oivu
/work/ai-product

Use actual project names/data from the repository where appropriate.

If the repository contains different finalized project names, use the existing accurate names rather than inventing replacements.

---

# 5. ROUTING REQUIREMENTS

Routing must properly support:

- URL changes
- Internal navigation
- Browser back
- Browser forward
- Direct navigation
- Refreshing routes
- Active navigation states
- 404 page

Do not simulate multiple pages using only scroll anchors.

Project detail pages must have actual unique routes.

Deployment configuration should be considered so direct route refreshes can work in production.

---

# 6. HOMEPAGE PURPOSE

The homepage has one primary goal:

A stranger should understand Tetravate within approximately 30 seconds.

The visitor should quickly understand:

1. What Tetravate is
2. What Tetravate builds
3. What Tetravate has built
4. Why the work is credible
5. How to start a project

Homepage structure:

Hero
→ Tetravate introduction
→ Selected Work
→ What We Build
→ Process preview
→ Why Tetravate
→ Final CTA

Do not overload the homepage.

---

# 7. HERO

Primary concept:

"From Thought to Thing."

The hero must clearly communicate that Tetravate is a product design and engineering studio.

Primary CTA:

VIEW OUR WORK

→ /work

Secondary CTA:

START A PROJECT

→ /contact

Use:

- Strong typography
- Blue/white branding
- Dark background
- Subtle blue glow
- Subtle grid/background detail
- Premium entrance animation

Avoid excessive particles or visual noise.

---

# 8. NAVIGATION

Global navigation:

TETRAVATE

- Work
- Services
- Process
- About
- Contact

Primary CTA:

Start a Project

→ /contact

Navigation must work on desktop and mobile.

Desktop:

- Sticky navbar
- Subtle scroll transformation
- Active page state

Mobile:

- Hamburger menu
- Smooth menu animation
- Proper touch targets
- Close menu after navigation

---

# 9. WORK PAGE

`/work`

Show six featured projects.

Each project card should include:

- Project visual
- Project name
- Category
- Short description
- Technologies
- View Case Study

Where available:

- Live Demo
- GitHub

Project cards should feel editorial and premium rather than generic SaaS cards.

Use varied layouts where appropriate.

---

# 10. SIX PROJECTS

The portfolio should showcase six polished projects.

Intended structure:

1. AGS Masalas
   Business Software / POS

2. DRISHYAM
   AI / ML / Analytics

3. MISTIQ
   SaaS / Product

4. E-Commerce
   E-Commerce Platform

5. Oivu
   Mobile / Social Impact

6. AI Product
   AI / GenAI

IMPORTANT:

Inspect the existing repository before writing project content.

Never invent project functionality.

Use actual assets and implementation details whenever available.

---

# 11. EVERY PROJECT MUST BE A CASE STUDY

A project is NOT considered complete if it only contains a title and screenshot.

Every project detail page should contain:

## Problem

What problem was being solved?

## Solution

What did Tetravate build?

## Screenshots

Show actual project visuals.

## Key Features

Approximately 4–8 meaningful features.

## Technology

Show only technologies actually used.

## Case Study

Include:

- Challenge
- Approach
- Outcome

## Links

Show:

- Live Demo when available
- GitHub when available

Never create fake links.

---

# 12. PROJECT DETAIL PAGES

Each project must have a dedicated page.

Example:

/work/ags-masalas

Structure:

Project Hero
→ Problem
→ Solution
→ Screenshots
→ Key Features
→ Technology
→ Case Study
→ Live Demo/GitHub
→ Previous Project
→ Next Project

Do NOT use modal-only project pages.

---

# 13. PROJECT CONTENT ACCURACY

NEVER fabricate:

- Clients
- Testimonials
- Statistics
- Revenue
- User counts
- Performance percentages
- Awards
- Results
- Technologies
- Features
- Live demo URLs

If information is missing:

- Hide the section
OR
- Leave an intentional placeholder for later editing

Never fake credibility.

---

# 14. SERVICES PAGE

`/services`

Services:

- Web Experiences
- E-Commerce
- Business Systems
- SaaS Products
- Mobile Applications
- AI & ML

Each service should have:

- Short explanation
- Visual treatment
- Hover interaction
- Consistent blue/white branding

---

# 15. PROCESS PAGE

`/process`

Process:

01 — Discover
02 — Define
03 — Design
04 — Develop
05 — Deliver

Create a visually engaging process/timeline.

Keep explanations concise.

---

# 16. ABOUT PAGE

`/about`

Include:

- Tetravate story
- Philosophy
- Five founders
- Achievements
- Technology capabilities

Do not invent founder information.

Use existing repository information where available.

---

# 17. FOUNDERS

There are FIVE founders.

If a radial founder visualization already exists, preserve and improve it.

Desktop:

- Tetravate in center
- Five founders around it
- Connection lines
- Subtle interactions

Mobile:

DO NOT squeeze the radial layout into a tiny viewport.

Instead use an intentional mobile layout:

Tetravate
↓
Founder cards
↓
Founder cards

The mobile version must remain visually polished.

---

# 18. CONTACT PAGE

`/contact`

Primary message:

HAVE AN IDEA?
LET'S BUILD IT.

Include:

- Name
- Email
- Company / Organization
- Project Type
- Budget
- Message

Include available:

- Email
- LinkedIn
- GitHub
- Other official links

Form requirements:

- Validation
- Loading state
- Success state
- Error state
- Accessible labels
- Mobile-friendly inputs

Do not pretend the form sends emails if no backend is configured.

---

# 19. MOBILE RESPONSIVENESS — NON-NEGOTIABLE

The entire website MUST be fully responsive.

Required:

- Desktop
- Laptop
- Tablet
- Mobile

Test approximately:

320px
375px
390px
414px
768px
1024px
1440px+

DO NOT simply shrink the desktop layout.

Create intentional responsive layouts.

There must be:

- No horizontal scrolling
- No clipped text
- No overflowing images
- No broken grids
- No broken buttons
- No cramped sections
- No unusable navigation

Mobile project pages must remain easy to read.

Mobile screenshots must fit properly.

Forms must be touch-friendly.

Buttons must have appropriate touch targets.

---

# 20. ANIMATION RULES

Animations should feel:

- Premium
- Smooth
- Fast
- Calm
- Technical

Use:

- Page transitions
- Text reveals
- Scroll reveals
- Hover interactions
- Button micro-interactions
- Image transitions
- Founder interactions
- Subtle background motion

Do NOT animate everything.

Do NOT use excessive bouncing.

Do NOT use slow or distracting animations.

Respect:

`prefers-reduced-motion`

---

# 21. VISUAL DIRECTION

The website should feel:

- Premium
- Technical
- Modern
- Minimal
- Confident
- Calm
- High-end

It must NOT feel like:

- Student portfolio
- Resume
- Generic SaaS template
- Green SaaS website
- Gaming website
- Cyberpunk website
- Over-animated template

Tetravate should feel like a real digital product studio.

---

# 22. DO NOT MAKE IT A RESUME

Avoid:

- Skill percentage bars
- Huge programming-language lists
- Certificate walls
- "Hello, I'm a developer"
- Resume-style sections
- Excessive badges
- Fake metrics
- Buzzword-heavy copy

The website represents Tetravate as a studio.

---

# 23. CODE ARCHITECTURE

Keep:

Vite + Vanilla JavaScript + HTML + CSS

Use reusable structures/functions for:

- Navbar
- Project cards
- Project pages
- Screenshot galleries
- Features
- Services
- Process
- Founders
- CTA
- Contact
- Footer

Keep project information centralized where practical.

The architecture should make adding Project #7 easy.

---

# 24. PROJECT DATA

Use structured project data containing fields conceptually like:

- title
- slug
- category
- description
- heroImage
- problem
- solution
- screenshots
- features
- technologies
- caseStudy
- liveDemo
- github

Adapt this to the existing codebase instead of blindly restructuring everything.

---

# 25. PERFORMANCE

Optimize the existing site.

Use:

- Optimized images
- Lazy loading
- Efficient JavaScript
- Minimal unnecessary dependencies
- GPU-friendly animations
- No huge background videos
- Minimal layout shift

Do not add libraries unless they provide meaningful value.

---

# 26. ACCESSIBILITY

Use:

- Semantic HTML
- Correct heading hierarchy
- Alt text
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible forms
- Good contrast
- Reduced-motion support

---

# 27. SEO

Implement:

- Page titles
- Meta descriptions
- Open Graph metadata
- Favicon
- Semantic headings
- Clean URLs
- Project-specific metadata where practical

---

# 28. FOOTER

Footer should include:

TETRAVATE

"From Thought to Thing."

Links:

- Work
- Services
- Process
- About
- Contact

Social links:

- LinkedIn
- GitHub
- Email

Use the current year dynamically if practical.

Keep the footer minimal.

---

# 29. EXISTING ASSETS

Reuse existing assets whenever appropriate.

Known asset areas may include:

- Logo files
- Project mockups
- Project screenshots
- Process graphics
- Existing illustrations

Do not replace real assets with generic stock images.

Do not use random stock photography unless explicitly requested.

---

# 30. RESPONSIBLE REFACTORING

Before deleting or replacing anything:

Ask:

"Is this existing implementation useful?"

If yes:

Preserve or improve it.

Do not rewrite large sections unnecessarily.

Do not remove working functionality simply to make implementation easier.

---

# 31. FINAL TESTING

Before considering the project complete:

## Navigation

Test every route.

## Projects

Verify all six projects.

## Case Studies

Verify every project contains:

- Problem
- Solution
- Screenshots
- Features
- Technologies
- Case study
- Available links

## Visual

Verify:

- Original blue/white theme
- No emerald redesign
- Consistent typography
- Consistent spacing
- No broken sections

## Responsive

Test:

320
375
390
414
768
1024
1440+

## Technical

Verify:

- No console errors
- No broken imports
- No broken images
- No undefined content
- Build succeeds
- Routes work
- Refresh works
- Navigation works

---

# 32. PRIORITY ORDER

When making decisions, prioritize in this order:

1. Original Tetravate blue + white identity
2. Existing project preservation
3. Multi-page architecture
4. 30-second homepage clarity
5. Six complete project case studies
6. Real project screenshots/assets
7. Mobile/tablet/desktop responsiveness
8. Services / Process / About / Contact
9. Animation and micro-interactions
10. SEO / Accessibility / Performance

Do not prioritize fancy animation over incomplete project content.

---

# 33. FINAL DEFINITION OF DONE

The project is only considered complete when:

- Existing project has been upgraded rather than replaced
- Original blue + white Tetravate branding is restored
- Website is multi-page
- All required routes work
- Six projects are properly presented
- Six project detail pages exist
- Case studies are complete
- Real assets are used
- Mobile responsiveness is polished
- Desktop design is polished
- Tablet design is polished
- Navigation works
- Forms work correctly or clearly indicate unavailable backend functionality
- No fake information exists
- No console errors exist
- Build succeeds
- No broken images exist
- No horizontal overflow exists

The final result should feel like a serious digital product studio website.

NOT a student portfolio.

NOT a resume.

NOT a generic template.

NOT a green SaaS website.

It must feel unmistakably like TETRAVATE.