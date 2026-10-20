import type { APIRoute } from 'astro';
import { projects } from '../../../../data/projects';
import { docPages } from '../../../../lib/docs';

// 全部英文文档拼成一个文件，agent 一次读完；站内相对链接按各页地址解析成绝对地址
export async function getStaticPaths() {
  return projects.filter((p) => p.docs).map((project) => ({ params: { slug: project.slug }, props: { project } }));
}

export const GET: APIRoute = async ({ props, site }) => {
  const { project } = props as { project: (typeof projects)[number] };
  const pages = await docPages(project, 'en');
  const pageUrl = (id: string) => new URL(`/en/projects/${project.slug}/docs/${id === project.docs!.home ? '' : `${id}/`}`, site);
  // 图片路径相对 Markdown 文件（docs/en/<group>/<page>.md），指向仓库里的原图
  const fileUrl = (id: string) => new URL(`https://raw.githubusercontent.com/${project.repo}/main/docs/en/${id}.md`);

  const parts = [`# ${project.name} documentation`, '', `> ${project.tagline.en}`, '', `Source: https://github.com/${project.repo}`];
  for (const p of pages) {
    const url = pageUrl(p.id);
    const body = (p.entry.body ?? '')
      .replace(/(!?)\[([^\]]*)\]\((?!\w+:|\/|#)([^)\s]+)\)/g, (_, bang, text, target) => `${bang}[${text}](${new URL(target, bang ? fileUrl(p.id) : url).href})`)
      .replace(/^(#{1,5}) /gm, '#$1 ');
    parts.push('', '---', '', `# ${p.entry.data.title}`, '', p.entry.data.description, '', `URL: ${url.href}`, '', body.trim());
  }
  return new Response(parts.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
