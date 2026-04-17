#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIRS = ['static/images/attorney', 'static/images/awards', 'static/images/practice-areas'];
let totalBefore = 0, totalAfter = 0, converted = 0;

for (const dir of DIRS) {
  const files = await readdir(dir);
  for (const f of files) {
    const fp = path.join(dir, f);
    const ext = path.extname(f).toLowerCase();
    const s = await stat(fp);
    totalBefore += s.size;

    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const outName = f.replace(/\.[^.]+$/, '.webp');
      const outPath = path.join(dir, outName);
      const img = sharp(fp);
      const meta = await img.metadata();
      let pipeline = img;
      if (meta.width > 1600) pipeline = pipeline.resize(1600);
      await pipeline.webp({ quality: 85 }).toFile(outPath);
      const outStat = await stat(outPath);
      totalAfter += outStat.size;
      converted++;
      console.log(`  ${f} → ${outName} (${(s.size/1024).toFixed(0)}KB → ${(outStat.size/1024).toFixed(0)}KB)`);
    } else {
      totalAfter += s.size;
    }
  }
}

console.log(`\nConverted: ${converted} files`);
console.log(`Before: ${(totalBefore/1024/1024).toFixed(2)} MB`);
console.log(`After: ${(totalAfter/1024/1024).toFixed(2)} MB`);
console.log(`Saved: ${((totalBefore-totalAfter)/1024/1024).toFixed(2)} MB`);
