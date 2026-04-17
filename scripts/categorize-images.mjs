#!/usr/bin/env node
import { readdir, rename, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'static/images/attorney';
const BASE = 'static/images';

const rules = [
  { dir: 'attorney', test: f => /(mark-grover|meet-team|grover-law-team)/.test(f) },
  { dir: 'awards', test: f => /(^award|best-of-kc|naopia|badge)/.test(f) },
  { dir: 'logo', test: f => /(logo|arrow-)/.test(f) },
  { dir: 'practice-areas', test: () => true },
];

await mkdir(path.join(BASE, 'logo'), { recursive: true });
const files = await readdir(SRC);
const counts = {};

for (const f of files) {
  const matched = rules.find(r => r.test(f));
  const dir = matched.dir;
  counts[dir] = (counts[dir] || 0) + 1;
  if (dir !== 'attorney') {
    const dest = path.join(BASE, dir, f);
    await rename(path.join(SRC, f), dest);
  }
}

console.log('Categorized:', counts);
console.log('Done.');
