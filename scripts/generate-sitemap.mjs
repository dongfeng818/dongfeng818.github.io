// 手动生成 sitemap.xml（Astro 内置清理步骤会被安全删除保护拦截，
// 导致 astro:build:done hook 不触发，此脚本在构建后执行补齐 sitemap）
import { writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://96fbc7ae58f24a9a92df0ed7aee753fd.app.workbuddy.link';
const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function walk(dir, base = '') {
  const entries = readdirSync(dir, { withFileTypes: true });
  const urls = [];
  for (const e of entries) {
    if (e.name.startsWith('_') || e.name === 'favicon.svg') continue;
    const full = join(dir, e.name);
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      urls.push(...walk(full, rel));
    } else if (e.name === 'index.html') {
      urls.push(`  <url><loc>${SITE}/${rel.replace(/\\/g, '/')}</loc></url>`);
    }
  }
  return urls;
}

const urls = walk(dist);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
writeFileSync(join(dist, 'sitemap.xml'), xml);
console.log(`[sitemap] ${urls.length} URLs written.`);
