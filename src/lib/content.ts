import { getCollection, type CollectionEntry } from 'astro:content';
import { href, type Lang } from '../i18n';

export type Post = CollectionEntry<'posts'> & { slug: string; lang: Lang };

export async function allPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.map((e) => {
    const [lang, ...rest] = e.id.split('/');
    return Object.assign(e, { lang: lang as Lang, slug: rest.join('/') });
  });
}

/** 某语言下列出的随笔：英文页会补上只有中文版的篇目 */
export async function postsFor(lang: Lang) {
  const posts = await allPosts();
  const own = posts.filter((p) => p.lang === lang);
  const extra = lang === 'en' ? posts.filter((p) => p.lang === 'zh' && !own.some((o) => o.slug === p.slug)) : [];
  return [...own, ...extra].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postHref(post: Post) {
  return href(post.lang, `/writing/${post.slug}/`);
}
