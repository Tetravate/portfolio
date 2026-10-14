/**
 * Tetravate Studio — Production & Architecture Validation Test Suite
 * Zero external dependencies: runs with standard Node.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('====================================================');
console.log('TETRAVATE — COMPREHENSIVE PRODUCTION AUDIT TEST SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    console.error(`  ✗ FAIL: ${testName} ${details ? '(' + details + ')' : ''}`);
    process.exitCode = 1;
  }
}

// 1. PRODUCTION BUILD
console.log('[1/8] Verifying Production Build (Vite)...');
try {
  const buildOutput = execSync('npm run build', { encoding: 'utf8' });
  assert(buildOutput.includes('built in') || buildOutput.includes('dist/'), 'Vite production build succeeds cleanly');
  assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
  assert(fs.existsSync('dist/assets'), 'dist/assets directory exists');
} catch (err) {
  assert(false, 'Vite production build succeeds cleanly', err.message);
}

// 2. ROOT HTML & METADATA AUDIT
console.log('\n[2/8] Validating index.html & Head Metadata...');
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('<link rel="canonical" href="https://tetravate.vercel.app/" id="canonical-link" />'), 'Canonical link set to preferred HTTPS domain');
assert(indexHtml.includes('meta property="og:title"'), 'Open Graph title tag present');
assert(indexHtml.includes('meta name="twitter:card"'), 'Twitter card meta tag present');
assert(indexHtml.includes('meta name="twitter:title"'), 'Twitter title meta tag present');
assert(indexHtml.includes('application/ld+json'), 'JSON-LD structured data script present');
assert(indexHtml.includes('"@type": "Organization"') && indexHtml.includes('"@type": "WebSite"'), 'Organization and WebSite schemas present in JSON-LD');
assert(indexHtml.includes('class="skip-link"'), 'WCAG 2.2 AA SC 2.4.1 Skip-to-content link present');

// 3. OFFICIAL SIX SERVICES AUDIT
console.log('\n[3/8] Validating Official Six Services Taxonomy...');
const { services, featuredProjects, technologyGroups, testimonials } = require('../src/data/projects.js');
assert(services.length === 6, 'Exactly 6 official top-level service categories exist');

const expectedServices = [
  'Websites & Digital Experiences',
  'E-Commerce Solutions',
  'Web Applications & Systems',
  'AI & Data Solutions',
  'Backend & Integrations',
  'Deployment & Technical Support'
];

const actualServiceTitles = services.map(s => s.title);
expectedServices.forEach(expected => {
  assert(actualServiceTitles.includes(expected), `Official service present: ${expected}`);
});

// Homepage Service Cards verification
const mainJsContent = fs.readFileSync('src/main.js', 'utf8');
assert(mainJsContent.includes('class="home-services-grid"'), 'Homepage uses .home-services-grid');
assert(mainJsContent.includes('class="home-service-card"'), 'Homepage cards use .home-service-card');
assert(mainJsContent.includes('href="/services/#service-${s.id}"'), 'Homepage cards dynamically link to /services/#service-${s.id}');
assert(mainJsContent.includes('id="service-${s.id}"'), 'Services page cards dynamically match id="service-${s.id}"');
assert(!mainJsContent.includes('service-action-link'), 'Homepage cards do not have inner learn more text links');

assert(!mainJsContent.includes('Verified Studio Demonstration'), 'Obsolete "VERIFIED STUDIO DEMONSTRATION" label removed');
assert(!mainJsContent.includes('RELATED PROJECTS'), '"RELATED PROJECTS" label not introduced');
assert(mainJsContent.includes('Project Example →'), '"Project Example →" button present on Services page');

const servicesPageRegex = /function renderServicesPage\([^)]*\)\s*\{([\s\S]*?)\nfunction renderProcessPage/;
const servicesPageMatch = mainJsContent.match(servicesPageRegex);
assert(servicesPageMatch, 'renderServicesPage function exists');
const servicesPageCode = servicesPageMatch[1];

assert(!servicesPageCode.includes('services-progression-banner'), 'Redundant process banner removed from Services page');
assert(!servicesPageCode.includes('One unified capability. Zero isolated silos.'), 'Philosophy headline removed from Services page');
assert(servicesPageCode.includes('Services Built Around Real Needs'), 'Services page uses "Services Built Around Real Needs" headline');
assert(servicesPageCode.includes('Explore six connected capabilities that help turn ideas into useful digital products.'), 'Services page uses simplified lead description');
assert(servicesPageCode.includes('One idea. The right capabilities to build it.'), 'Services page closing CTA has requested headline');
assert(servicesPageCode.includes('Start a Project →'), 'Services page closing CTA button has "Start a Project →" text');

// Verify Process page remains fully functional and intact
const processPageRegex = /function renderProcessPage\([^)]*\)\s*\{([\s\S]*?)\nfunction renderAboutPage/;
const processPageMatch = mainJsContent.match(processPageRegex);
assert(processPageMatch, 'renderProcessPage function exists');
const processPageCode = processPageMatch[1];
assert(processPageCode.includes('From Idea to Product'), 'Process page preserves "From Idea to Product" title');
assert(processPageCode.includes('process-detailed-card'), 'Process page preserves detailed process cards');

const validProjectSlugs = featuredProjects.map(p => p.slug);
services.forEach(s => {
  assert(Boolean(s.detail && s.detail.length > 20), `Service ${s.title} retains complete detailed description on Services page`);
  assert(Boolean(s.subServices && s.subServices.length >= 3), `Service ${s.title} retains nested capabilities on Services page`);
  if (s.portfolioProof) {
    assert(validProjectSlugs.includes(s.portfolioProof.slug), `Service ${s.title} links to valid project slug: ${s.portfolioProof.slug}`);
    assert(!s.portfolioProof.title.includes('&'), `Service ${s.title} does not combine multiple project names in proof title: ${s.portfolioProof.title}`);
  }
});

// Core Principles Audit
console.log('\nValidating Our Core Principles Section...');
assert(mainJsContent.includes('Our Core Principles'), 'Section title "Our Core Principles" preserved');
assert(mainJsContent.includes('The values that guide how we work, build, and earn trust.'), 'Core principles subtitle updated');
assert(mainJsContent.includes('<h4 class="value-card-title">Trust</h4>'), 'Value 01: Trust present');
assert(mainJsContent.includes('<h4 class="value-card-title">Quality</h4>'), 'Value 02: Quality present');
assert(mainJsContent.includes('<h4 class="value-card-title">Integrity</h4>'), 'Value 03: Integrity present');
assert(mainJsContent.includes('<h4 class="value-card-title">Innovation</h4>'), 'Value 04: Innovation present');
assert(mainJsContent.includes('<h4 class="value-card-title">Accountability</h4>'), 'Value 05: Accountability present');
assert(!mainJsContent.includes('<h4 class="value-card-title">Thoughts</h4>'), 'Obsolete value "Thoughts" removed');
assert(!mainJsContent.includes('<h4 class="value-card-title">Kindness</h4>'), 'Obsolete value "Kindness" removed');
assert(!mainJsContent.includes('<h4 class="value-card-title">Humanity</h4>'), 'Obsolete value "Humanity" removed');

// Feedback & Recognition Audit
console.log('\nValidating Feedback & Recognition Section...');
assert(mainJsContent.includes('FEEDBACK & RECOGNITION'), 'Eyebrow updated to "FEEDBACK & RECOGNITION"');
assert(mainJsContent.includes('Feedback & Recognition'), 'Section heading updated to "Feedback & Recognition"');
assert(!mainJsContent.includes('PARTNER PERSPECTIVES'), 'Obsolete "PARTNER PERSPECTIVES" heading removed');
assert(mainJsContent.includes('Experiences, feedback, and milestones from our work.'), 'Subtitle updated to "Experiences, feedback, and milestones from our work."');
assert(!mainJsContent.includes('Verified feedback from business operators and partners.'), 'Obsolete subtitle removed');
assert(!mainJsContent.includes('Retail Business Partner'), '"Retail Business Partner" label removed from main.js');

assert(testimonials.length === 2, 'Exactly 2 feedback/recognition review items present');
const agsFeedback = testimonials.find(t => t.author === 'AGS Masalas');
assert(agsFeedback, 'AGS Masalas feedback item present');
assert(agsFeedback && agsFeedback.heading === 'AGS MASALAS', 'AGS Masalas tag is "AGS MASALAS"');
assert(agsFeedback && agsFeedback.title.includes('Counter Observation'), 'AGS Masalas title is accurate');
assert(agsFeedback && agsFeedback.role === 'Retail POS Implementation', 'AGS Masalas attributed to "Retail POS Implementation"');
assert(agsFeedback && agsFeedback.quote.includes('Tetravate observed our billing counter directly'), 'AGS Masalas quote preserved');

const oivuFeedback = testimonials.find(t => t.author === 'Oivu Project');
assert(oivuFeedback, 'Oivu Project feedback item present');
assert(oivuFeedback && oivuFeedback.heading === 'OIVU', 'Oivu tag is "OIVU"');
assert(oivuFeedback && oivuFeedback.title === 'Understanding the Problem. Building the Solution.', 'Oivu title is accurate');
assert(oivuFeedback && oivuFeedback.role === 'Hackathon Experience', 'Oivu Project attributed to "Hackathon Experience"');
assert(oivuFeedback && oivuFeedback.quote.includes('understanding of the problem and our implementation'), 'Oivu feedback narrative accurate');
assert(mainJsContent.includes('achievement-card-tag'), 'Tag element rendered in main.js');
assert(mainJsContent.includes('achievement-card-title'), 'Title element rendered in main.js');

// 4. TECHNOLOGY SHOWCASE AUDIT
console.log('\n[4/8] Validating Technology Showcase...');
assert(technologyGroups.length === 5, 'Exactly 5 client-friendly technology showcase categories');
const expectedTechCats = [
  'Web & User Interfaces',
  'Backend & APIs',
  'Databases & Data',
  'AI & Intelligent Systems',
  'Development & Deployment'
];
const actualTechCats = technologyGroups.map(t => t.category);
expectedTechCats.forEach(expected => {
  assert(actualTechCats.includes(expected), `Technology showcase category present: ${expected}`);
});

// Check that unverified hype keywords are not in the technology items
const allTechItems = technologyGroups.flatMap(t => t.items);
assert(!allTechItems.includes('Redis'), 'No unverified technology: Redis excluded');
assert(!allTechItems.includes('Docker'), 'No unverified technology: Docker excluded');
assert(!allTechItems.includes('AWS'), 'No unverified technology: AWS excluded');
assert(allTechItems.includes('JavaScript'), 'Clean terminology: JavaScript used');

// 5. PORTFOLIO CREDIBILITY & DEPLOYMENT STATUS AUDIT
console.log('\n[5/8] Validating Portfolio Credibility & Live Demos...');
assert(featuredProjects.length === 10, 'Exactly 10 verified projects in portfolio');

const liveDemoProjects = featuredProjects.filter(p => p.liveDemo);
assert(liveDemoProjects.length === 3, 'Exactly 3 public projects expose liveDemo URLs (LUXORA, MĀRA, Nivara ERP)');
const liveSlugs = liveDemoProjects.map(p => p.slug);
assert(liveSlugs.includes('tetravate-ecommerce'), 'LUXORA has liveDemo');
assert(liveSlugs.includes('mara-dining'), 'MĀRA has liveDemo');
assert(liveSlugs.includes('nivara-erp'), 'Nivara ERP has liveDemo');

const aga = featuredProjects.find(p => p.slug === 'aga-ai-assistant');
assert(aga && !aga.liveDemo, 'AGA AI Assistant has NO public liveDemo button (accurately preserved as prototype)');

const oivu = featuredProjects.find(p => p.slug === 'oivu');
assert(oivu && oivu.title.includes('Oivu'), 'Oivu title is accurate');
assert(oivu && !oivu.title.includes('Restora'), 'Oivu is NOT labeled Restora');

const hackOdyssey = featuredProjects.find(p => p.slug.includes('hack-odyssey') || p.title.includes('Hack Odyssey'));
assert(!hackOdyssey, 'Hack Odyssey remains strictly excluded');

// 6. TECHNICAL SEO, SITEMAP & ROBOTS AUDIT
console.log('\n[6/8] Validating Technical SEO, Sitemap & Robots...');
const robotsTxt = fs.readFileSync('public/robots.txt', 'utf8');
assert(robotsTxt.includes('User-agent: *'), 'robots.txt allows user-agents');
assert(robotsTxt.includes('Sitemap: https://tetravate.vercel.app/sitemap.xml'), 'robots.txt points to correct sitemap.xml');

const sitemapXml = fs.readFileSync('public/sitemap.xml', 'utf8');
assert(sitemapXml.includes('https://tetravate.vercel.app/'), 'sitemap includes home');
assert(sitemapXml.includes('https://tetravate.vercel.app/work'), 'sitemap includes /work');
assert(sitemapXml.includes('https://tetravate.vercel.app/services'), 'sitemap includes /services');
assert(sitemapXml.includes('https://tetravate.vercel.app/process'), 'sitemap includes /process');
assert(sitemapXml.includes('https://tetravate.vercel.app/about'), 'sitemap includes /about');
assert(sitemapXml.includes('https://tetravate.vercel.app/contact'), 'sitemap includes /contact');
featuredProjects.forEach(p => {
  assert(sitemapXml.includes(`https://tetravate.vercel.app/work/${p.slug}`), `sitemap includes canonical project /work/${p.slug}`);
});
assert(!sitemapXml.includes('/work/drishyam'), 'sitemap excludes legacy alias /work/drishyam');
assert(!sitemapXml.includes('/work/ecommerce'), 'sitemap excludes legacy alias /work/ecommerce');

// 7. CONTACT PIPELINE & WHATSAPP AUDIT
console.log('\n[7/8] Validating Contact Pipeline & WhatsApp...');
const mainJs = fs.readFileSync('src/main.js', 'utf8');
assert(mainJs.includes('https://script.google.com/macros/s/'), 'Google Apps Script endpoint preserved');
assert(mainJs.includes('tetravate@gmail.com'), 'Inbox targeted to tetravate@gmail.com');
assert(mainJs.includes('+91 63810 77598'), 'Primary WhatsApp number +91 63810 77598 preserved');
assert(mainJs.includes('+91 98941 65334'), 'Secondary WhatsApp number +91 98941 65334 preserved');
assert(mainJs.includes('inquiryWebsite'), 'Anti-spam honeypot preserved in form');
assert(mainJs.includes('aria-required="true"'), 'aria-required attributes present on required inputs');

// 8. SECURITY HEADERS AUDIT
console.log('\n[8/8] Validating Security Headers (vercel.json)...');
const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const allHeaders = vercelJson.headers.flatMap(h => h.headers.map(item => item.key));
assert(allHeaders.includes('X-Content-Type-Options'), 'X-Content-Type-Options header present');
assert(allHeaders.includes('X-Frame-Options'), 'X-Frame-Options header present');
assert(allHeaders.includes('Referrer-Policy'), 'Referrer-Policy header present');
assert(allHeaders.includes('Permissions-Policy'), 'Permissions-Policy header present');

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('RESULT: 100% SUITE PASS. PRODUCTION READY.\n');
  process.exit(0);
} else {
  console.error(`RESULT: ${totalTests - passedTests} TESTS FAILED.\n`);
  process.exit(1);
}
