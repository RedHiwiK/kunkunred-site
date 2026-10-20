import type { APIRoute } from 'astro';
import { projects } from '../../../../data/projects';
import { docPages } from '../../../../lib/docs';

// llms.txt 约定：项目简介 + 每篇文档的链接与一句话说明
export async function getStaticPaths() {
  return projects.filter((p) => p.docs).map((project) => ({ params: { slug: project.slug }, props: { project } }));
}

export const GET: APIRoute = async ({ props, site }) => {
  const { project } = props as { project: (typeof projects)[number] };
  const pages = await docPages(project, 'en');
  const url = (id: string) => new URL(`/en/projects/${project.slug}/docs/${id === project.docs!.home ? '' : `${id}/`}`, site).href;
  const lines = [`# ${project.name}`, '', `> ${project.tagline.en}`, '', project.intro.en, '', `Source: https://github.com/${project.repo}`, `Full text: ${new URL(`/en/projects/${project.slug}/llms-full.txt`, site).href}`];
  for (const g of project.docs!.groups) {
    const items = pages.filter((p) => p.entry.data.group === g.id);
    if (!items.length) continue;
    lines.push('', `## ${g.label.en}`, '');
    for (const p of items) lines.push(`- [${p.entry.data.title}](${url(p.id)}): ${p.entry.data.description}`);
  }
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
