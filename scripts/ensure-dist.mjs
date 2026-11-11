import fs from 'node:fs';
import path from 'node:path';

const index = path.join(process.cwd(), 'dist', 'index.html');

if (!fs.existsSync(index)) {
  console.error('');
  console.error('dist/ is missing or out of date.');
  console.error('Run:  npm run build');
  console.error('Or:   npm run local   (build + start in one step)');
  console.error('');
  process.exit(1);
}
