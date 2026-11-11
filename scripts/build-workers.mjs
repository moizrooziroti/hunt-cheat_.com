import { spawnSync } from 'node:child_process';

const WORKERS_ORIGIN = 'https://hunt-cheat.com';

process.env.PUBLIC_CANONICAL_ORIGIN = WORKERS_ORIGIN;

const result = spawnSync('npm run build', {
  shell: true,
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_CANONICAL_ORIGIN: WORKERS_ORIGIN },
});

process.exit(result.status ?? 1);
