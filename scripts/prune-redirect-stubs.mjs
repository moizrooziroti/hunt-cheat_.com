import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
/** Astro static redirect stubs — routing handled by serve.mjs + redirects.mjs */
const STUB_DIRS = ['blog', 'cheats', 'contact'];

for (const dir of STUB_DIRS) {
  const target = path.join(dist, dir);
  if (!fs.existsSync(target)) continue;
  fs.rmSync(target, { recursive: true, force: true });
  console.log(`Pruned redirect stub: dist/${dir}/`);
}
