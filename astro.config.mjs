import { defineConfig } from 'astro/config';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// 站点域名：当前部署在 GitHub Pages 免费托管
const SITE = 'https://dongfeng818.github.io';

// 轻量 sitemap 集成：构建完成时扫描所有页面生成 sitemap.xml
function simpleSitemap() {
  return {
    name: 'simple-sitemap',
    hooks: {
      'astro:build:done': ({ pages, dir }) => {
        const urls = pages
          .map((p) => p.pathname)
          .filter((p) => p.endsWith('/'))
          .map((p) => `  <url><loc>${SITE}${p.slice(1).replace(/\/$/, '')}/index.html</loc></url>`);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
        writeFileSync(join(fileURLToPath(dir), 'sitemap.xml'), xml);
        console.log(`[simple-sitemap] ${urls.length} URLs written.`);
      },
    },
  };
}

// i18n: 英文为默认语言（无前缀），es/fr/zh 带路径前缀 /es /fr /zh
export default defineConfig({
  site: SITE,
  integrations: [simpleSitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
