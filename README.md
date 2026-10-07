# kunkunred-site

KunKunRed 的个人站：作品、随笔、关于我，中英双语。Astro 静态站，push 到 main 后由 GitHub Actions 部署到 GitHub Pages：https://kunkunred.hiwik.cn/

## 日常更新

| 想做的事 | 改哪里 |
|---|---|
| 写一篇随笔 | `src/content/posts/zh/<slug>.md`；有英文版就在 `posts/en/<slug>.md` 用同一个 slug |
| 改 App 介绍 | `src/data/apps.ts` |
| 改首页文案、导航 | `src/i18n.ts` |
| 改个人信息、社交链接、开源项目、履历 | `src/data/profile.ts` |
| 改颜色、字体 | `src/styles/global.css` 顶部的 token |

只有中文版的随笔，英文页的列表里也会出现，并标注「Chinese」。文章 frontmatter 写 `draft: true` 就只在本地预览可见。

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
```
