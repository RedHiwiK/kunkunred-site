import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kunkunred.hiwik.cn',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/brand/') })],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
