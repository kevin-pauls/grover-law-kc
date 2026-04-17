#!/usr/bin/env node
import { load } from 'cheerio';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://groverlawkc.com';
const OUT_ROOT = path.resolve('static/images');

const PAGES = [
  '/',
  '/practice-areas',
  '/contact',
  '/blog',
  '/car-accidents',
  '/truck-accidents',
  '/motorcycle-accidents',
  '/slip-and-fall',
  '/medical-malpractice',
  '/wrongful-death',
  '/personal-injury',
  '/premises-liability',
  '/brain-injury',
  '/catastrophic-injury'
];

const categorize = (url) => {
  const lower = url.toLowerCase();
  if (/(grover|mark-grover|attorney|headshot|lawyer-photo|mgrover)/.test(lower)) return 'attorney';
  if (/(award|best|voted|top-lawyer|2022|2023|2024|2025|badge)/.test(lower)) return 'awards';
  if (/(review|client|testimonial)/.test(lower)) return 'testimonials';
  if (/(blog|article|post)/.test(lower) && /\/\d{4}\/\d{2}\//.test(lower)) return 'blog';
  const paKeywords = ['car', 'truck', 'motorcycle', 'bike', 'bicycle', 'pedestrian', 'slip', 'fall',
    'medical', 'malpractice', 'wrongful', 'death', 'brain', 'spinal', 'injury', 'premises',
    'burn', 'broken', 'paralysis', 'nursing', 'dog-bite', 'boat', 'scooter', 'rideshare',
    'bus', 'train', 'drunk', 'hit-and-run', 'construction', 'workplace', 'disability',
    'catastrophic', 'winter', 'negligent', 'product'];
  if (paKeywords.some(k => lower.includes(k))) return 'practice-areas';
  return 'misc';
};

const sanitize = (name) => name.toLowerCase()
  .replace(/[^a-z0-9.-]+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');

const seen = new Set();
const downloads = [];
const counts = { attorney: 0, awards: 0, 'practice-areas': 0, testimonials: 0, blog: 0, misc: 0 };

const extractFromSrcset = (srcset) => {
  if (!srcset) return [];
  return srcset.split(',').map(s => s.trim().split(/\s+/)[0]).filter(Boolean);
};

const fetchPage = async (pathname) => {
  try {
    const res = await fetch(BASE + pathname);
    if (!res.ok) { console.log(`  [skip ${res.status}] ${pathname}`); return; }
    const html = await res.text();
    const $ = load(html);

    const urls = new Set();
    $('img').each((_, el) => {
      const src = $(el).attr('src');
      const dataSrc = $(el).attr('data-src');
      const srcset = $(el).attr('srcset');
      const dataSrcset = $(el).attr('data-srcset');
      if (src) urls.add(src);
      if (dataSrc) urls.add(dataSrc);
      extractFromSrcset(srcset).forEach(u => urls.add(u));
      extractFromSrcset(dataSrcset).forEach(u => urls.add(u));
    });

    // Background images in inline styles and style tags
    const styleAttrs = [];
    $('[style]').each((_, el) => styleAttrs.push($(el).attr('style')));
    $('style').each((_, el) => styleAttrs.push($(el).text()));
    styleAttrs.forEach(css => {
      const matches = css?.matchAll(/url\(['"]?(https?:[^'")\s]+)['"]?\)/g);
      if (matches) for (const m of matches) urls.add(m[1]);
    });

    const filtered = [...urls]
      .map(u => u.startsWith('//') ? 'https:' + u : u)
      .map(u => u.startsWith('http') ? u : new URL(u, BASE).href)
      .filter(u => u.includes('groverlawkc.com/wp-content/uploads/') || u.includes('wp-content/uploads/'));

    console.log(`  [${filtered.length} images] ${pathname}`);
    filtered.forEach(u => { if (!seen.has(u)) { seen.add(u); downloads.push(u); } });
  } catch (err) {
    console.log(`  [error] ${pathname}: ${err.message}`);
  }
};

const downloadOne = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const urlPath = new URL(url).pathname;
    const basename = sanitize(path.basename(urlPath));
    // Strip WordPress size suffixes like -150x150, -300x200, -1024x768, -scaled
    const ext = path.extname(basename);
    const nameNoExt = basename.replace(ext, '')
      .replace(/-\d+x\d+$/, '')
      .replace(/-scaled$/, '');
    const cleanName = nameNoExt + ext;
    const category = categorize(url);
    const dir = path.join(OUT_ROOT, category);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, cleanName), buf);
    counts[category]++;
    return { url, category, filename: cleanName, size: buf.length };
  } catch (err) {
    console.log(`  [fail] ${url}: ${err.message}`);
    return null;
  }
};

console.log('Scraping pages...');
for (const p of PAGES) {
  await fetchPage(p);
}

console.log(`\nDiscovered ${downloads.length} unique images. Downloading...`);
const results = [];
// Dedupe by clean filename within each category
const downloadedNames = new Map();
for (const url of downloads) {
  const urlPath = new URL(url).pathname;
  const basename = sanitize(path.basename(urlPath));
  const ext = path.extname(basename);
  const nameNoExt = basename.replace(ext, '').replace(/-\d+x\d+$/, '').replace(/-scaled$/, '');
  const cleanName = nameNoExt + ext;
  const category = categorize(url);
  const key = `${category}/${cleanName}`;
  // Prefer larger versions — pick the one WITHOUT size suffix if available
  const hasSize = /-\d+x\d+\./.test(basename);
  const existing = downloadedNames.get(key);
  if (existing && !hasSize) {
    // replace with non-sized version
    downloadedNames.set(key, url);
  } else if (!existing) {
    downloadedNames.set(key, url);
  }
}

for (const url of downloadedNames.values()) {
  const r = await downloadOne(url);
  if (r) results.push(r);
}

console.log('\n=== Summary ===');
console.log(counts);
console.log(`Total downloaded: ${results.length}`);
console.log(`Total bytes: ${(results.reduce((s, r) => s + r.size, 0) / 1024 / 1024).toFixed(2)} MB`);

// Write a manifest
const manifest = {};
for (const r of results) {
  if (!manifest[r.category]) manifest[r.category] = [];
  manifest[r.category].push({ filename: r.filename, sizeBytes: r.size, sourceUrl: r.url });
}
await writeFile(path.resolve('scripts/image-manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Manifest written to scripts/image-manifest.json');
