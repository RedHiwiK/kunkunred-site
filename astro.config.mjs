import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kunkunred.hiwik.cn',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/brand/') })],
  markdown: {
    // 代码块不做语法着色：配色只来自站点 token，明暗模式自动跟随
    syntaxHighlight: false,
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
