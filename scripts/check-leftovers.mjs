import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src', 'data', 'public', 'scripts', 'dist'];
const TEXT_EXT = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.css', '.html', '.xml', '.txt', '.md']);

const BANNED = [
  /dotacheats\.com/i,
  /\bdota\s*2\b/i,
  /\bdotacheats\b/i,
  /\bHANIA\b/,
  /overwatch\s*2/i,
  /apex-hacks\.org/i,
  /cod-cheats\.org/i,
  /mw4-hacks\.org/i,
  /r6-cheats\.com/i,
  /valorant-cheats\.org/i,
  /zadeyo\.com\/go\/(?!MOIZ)/i,
];

const ALLOWED = [
  /check-leftovers\.mjs$/,
  /hunt-rebrand/,
  /gen-hunt/,
  /\.seo-baseline/,
  /images\/blog\/dota-2-/i,
  /images\/gameplay\/dota-2-/i,
  /illustrative gameplay still/i,
  /scripts[/\\]redirects\.mjs$/,
];

const MOIZ_URLS = new Set([
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhunt-showdown',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fugc',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fskin-changer',
  'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
]);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.relative(ROOT, full);
    if (name === 'node_modules' || name === '.git') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (TEXT_EXT.has(path.extname(name).toLowerCase())) files.push(rel);
  }
  return files;
}

const hits = [];

const rogueIndex = path.join(ROOT, 'index.html');
if (fs.existsSync(rogueIndex)) {
  hits.push({
    file: 'index.html',
    rule: 'remove repo-root index.html (Astro output lives in dist/ only)',
  });
}

const PLACEHOLDER_RX = [
  /\blorem ipsum\b/i,
  /\bTODO:\s*write\b/i,
  /\bplaceholder copy\b/i,
  /will render here when published/i,
];

for (const dir of SCAN_DIRS) {
  for (const file of walk(path.join(ROOT, dir))) {
    if (ALLOWED.some((rx) => rx.test(file))) continue;
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const topDir = file.split(/[/\\]/)[0];
    if (topDir === 'src' || topDir === 'data') {
      for (const rx of PLACEHOLDER_RX) {
        if (rx.test(content)) {
          hits.push({ file, rule: `placeholder: ${rx.source}` });
          break;
        }
      }
    }
    for (const rx of BANNED) {
      if (rx.test(content)) {
        hits.push({ file, rule: rx.source });
        break;
      }
    }
    const allowed = [...MOIZ_URLS];
    for (const match of content.matchAll(/https:\/\/zadeyo\.com\/go\/MOIZ\?to=%2Fproducts%2F[a-z0-9-]+/g)) {
      const url = match[0];
      if (!allowed.includes(url)) {
        hits.push({ file, rule: `bad affiliate url: ${url}` });
      }
    }
  }
}

if (hits.length) {
  console.error('Leftover validation FAILED:\n');
  for (const h of hits) console.error(`- ${h.file} (${h.rule})`);
  process.exit(1);
}

console.log('Leftover validation passed.');
process.exit(0);
