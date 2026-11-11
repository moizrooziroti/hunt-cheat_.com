import fs from 'node:fs';
import path from 'node:path';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

function walkHtml(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkHtml(full, out);
    else if (name === 'index.html' || name.endsWith('.html')) out.push(full);
  }
  return out;
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const SKIP_FILES = new Set(['404.html']);

function auditPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (SKIP_FILES.has(rel)) return { rel, title: '', desc: '', h1s: [], issues: [] };
  const issues = [];

  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? '';
  const desc =
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]?.trim() ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]));

  if (!title) issues.push('missing <title>');
  if (title.length > 70) issues.push(`title long (${title.length} chars)`);
  if (!desc) issues.push('missing meta description');
  if (desc.length > 165) issues.push(`meta description long (${desc.length} chars)`);
  if (h1s.length === 0) issues.push('no H1');
  if (h1s.length > 1) issues.push(`${h1s.length} H1 tags`);

  if (!/<meta\s+name=["']viewport["']/i.test(html)) {
    issues.push('missing viewport meta (mobile)');
  }

  const canonical =
    html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1]?.trim() ?? '';
  if (!canonical.startsWith('https://hunt-cheat.com/')) {
    issues.push(`canonical must be https://hunt-cheat.com (got ${canonical || 'none'})`);
  }

  const bodyText = stripTags(html);
  if (/\blorem ipsum\b/i.test(bodyText)) issues.push('placeholder: lorem ipsum');
  if (/will render here when published/i.test(bodyText)) issues.push('placeholder: unfinished reviews UI');

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  for (const tag of imgs) {
    const hasAlt = /\balt\s*=/i.test(tag);
    const alt = tag.match(/\balt\s*=\s*["']([^"']*)["']/i)?.[1];
    if (!hasAlt) issues.push('img missing alt attribute');
    else if (alt === '' && !/\baria-hidden\s*=\s*["']true["']/i.test(tag)) {
      issues.push('img empty alt (non-decorative)');
    }
  }

  const goLinks = [...html.matchAll(/href=["'](\/go\/[^"']+)["']/gi)].map((m) => m[1]);
  for (const goPath of goLinks) {
  if (!CHECKOUT_PATH_REDIRECTS.has(goPath) && !CHECKOUT_PATH_REDIRECTS.has(`${goPath.replace(/\/$/, '')}/`)) {
      issues.push(`unknown checkout path: ${goPath}`);
    }
  }

  const zadeyo = [...html.matchAll(/https:\/\/zadeyo\.com\/go\/[^"'\s<]+/gi)].map((m) => m[0]);
  const allowed = new Set([...CHECKOUT_PATH_REDIRECTS.values()]);
  for (const url of zadeyo) {
    if (!allowed.has(url)) issues.push(`unexpected affiliate URL: ${url}`);
  }

  return { rel, title, desc, h1s, issues };
}

function sitemapUrls() {
  const sm = path.join(DIST, 'sitemap.xml');
  if (!fs.existsSync(sm)) return [];
  const xml = fs.readFileSync(sm, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    try {
      return new URL(m[1]).pathname;
    } catch {
      return m[1];
    }
  });
}

function pagePathFromFile(file) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return null;
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

const htmlFiles = walkHtml(DIST);
const reports = htmlFiles.map(auditPage);
const failures = reports.filter((r) => r.issues.length > 0);

const pagePaths = new Set(
  htmlFiles.map(pagePathFromFile).filter(Boolean),
);
const smPaths = new Set(sitemapUrls());
for (const p of pagePaths) {
  if (p === '/' || p.endsWith('/index.html')) {
    // normalized below
  }
  if (relFromPath(p) === '404.html') continue;
  const normalized = p === '/' ? '/' : p.endsWith('/') ? p : `${p}/`;
  if (!smPaths.has(normalized) && !smPaths.has(p)) {
    failures.push({ rel: normalized, issues: ['not in sitemap.xml'] });
  }
}

function relFromPath(pagePath) {
  if (pagePath === '/') return 'index.html';
  return `${pagePath.replace(/^\//, '').replace(/\/$/, '')}/index.html`;
}
for (const p of smPaths) {
  const file = p === '/' ? path.join(DIST, 'index.html') : path.join(DIST, p.slice(1), 'index.html');
  if (!fs.existsSync(file)) {
    failures.push({ rel: p, issues: ['sitemap entry missing HTML file'] });
  }
}

const robotsDist = path.join(DIST, 'robots.txt');
const robotsIssues = [];
if (!fs.existsSync(robotsDist)) robotsIssues.push('dist/robots.txt missing');
else {
  const robots = fs.readFileSync(robotsDist, 'utf8');
  if (!/Sitemap:\s*https:\/\/hunt-cheat\.com\/sitemap\.xml/i.test(robots)) {
    robotsIssues.push('robots.txt missing sitemap line');
  }
}

console.log(`QA audit: ${reports.length} HTML files, ${smPaths.size} sitemap URLs`);

if (robotsIssues.length) {
  console.error('\nrobots.txt:');
  for (const i of robotsIssues) console.error(`  - ${i}`);
}

if (failures.length) {
  console.error(`\n${failures.length} page(s) with issues:\n`);
  for (const f of failures) {
    console.error(`  ${f.rel}`);
    for (const i of f.issues) console.error(`    · ${i}`);
  }
  process.exit(1);
}

console.log('QA audit PASSED (title, description, H1, images, sitemap parity, robots).');
