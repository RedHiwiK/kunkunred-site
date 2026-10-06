import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://redhiwik.github.io',
  // 部署在 GitHub Pages 的项目路径下；以后绑定自定义域名时删掉这一行
  base: '/kunkunred-site',
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
