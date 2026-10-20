import { getCollection, type CollectionEntry } from 'astro:content';
import { href, type Lang } from '../i18n';
import type { Project } from '../data/projects';

export interface DocPage {
  /** 相对语言目录的路径，不含扩展名，如 guides/workflow */
  id: string;
  entry: CollectionEntry<'docs'>;
  /** 当前语言没有译文，显示的是英文原文 */
  fallback: boolean;
}

function parse(entry: CollectionEntry<'docs'>) {
  const rel = (entry.filePath ?? '').replace(/^.*src\/content\/projects\//, '').replace(/\.md$/, '');
  const [project, lang, ...rest] = rel.split('/');
  return { project, lang: lang as Lang, id: rest.join('/') };
}

/** 某项目某语言的文档页，按分组顺序和 order 排好；英文是正本，缺译文时回落英文 */
export async function docPages(project: Project, lang: Lang): Promise<DocPage[]> {
  if (!project.docs) return [];
  const entries = (await getCollection('docs')).map((e) => ({ e, ...parse(e) })).filter((x) => x.project === project.slug);
  const en = entries.filter((x) => x.lang === 'en');
  const groupIndex = (g: string) => {
    const i = project.docs!.groups.findIndex((x) => x.id === g);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  return en
    .map((x) => {
      const own = lang === 'en' ? x : entries.find((y) => y.lang === lang && y.id === x.id);
      return { id: x.id, entry: (own ?? x).e, fallback: !own };
    })
    .sort((a, b) => groupIndex(a.entry.data.group) - groupIndex(b.entry.data.group) || a.entry.data.order - b.entry.data.order);
}

export function docHref(project: Project, lang: Lang, id: string) {
  const page = id === project.docs?.home ? '' : `${id}/`;
  return href(lang, `/projects/${project.slug}/docs/${page}`);
}

export function editHref(project: Project, page: DocPage) {
  const lang = page.fallback ? 'en' : parse(page.entry).lang;
  return `https://github.com/${project.repo}/edit/main/docs/${lang}/${page.id}.md`;
}
