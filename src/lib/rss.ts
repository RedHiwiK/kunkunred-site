import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { t, withBase, type Lang } from '../i18n';
import { postsFor, postHref } from './content';

export async function feed(lang: Lang, context: APIContext) {
  const s = t(lang);
  const posts = await postsFor(lang);
  return rss({
    title: s.siteTitle,
    description: s.siteDescription,
    site: new URL(withBase(lang === 'zh' ? '/' : '/en/'), context.site).href,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postHref(p),
    })),
    customData: `<language>${lang === 'zh' ? 'zh-cn' : 'en'}</language>`,
  });
}
