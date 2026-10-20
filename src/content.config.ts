import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 文章：src/content/posts/{zh|en}/<slug>.md，同一 slug 的中英文互为翻译
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// 开源项目文档：src/content/projects/<project>/{en|zh}/<group>/<page>.md，由 scripts/fetch-docs.mjs 从项目仓库拉取
const docs = defineCollection({
  loader: glob({ pattern: '*/{en,zh}/**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.string(),
    order: z.number(),
  }),
});

export const collections = { posts, docs };
