# kunkunred-site 项目规范

KunKunRed 的个人主站。Astro 静态站，中英双语（中文无前缀，英文在 `/en/`）。

## 定位
- 展示"我这个人"的个人 IP 站，不是简历、也不是工作汇报。
- 不写"最近在做什么 / 发了什么版本"这类动态；App 只介绍有什么、亮点是什么。
- 人设：后端出身（前大厂）、现在在一家 AI 平台做全栈；喜欢跟着技术往前走，有开源精神；工作之外做 App 和工具，以后可能做游戏。不要把身份局限成"独立开发者"。
- AI 只轻描淡写地带过，不贴"AI 原生 / AI Native"之类的标签。首页 eyebrow 用用户定的 "Build the world with AI"（中英文相同），其他地方不再加 AI 口号。
- 用户描述的气质（如"无限进步"）是给你理解用的，不要把口号原样写到页面上，也不要做印章式标签。
- 不写公司名。

## 内容
- 三个 App 目前都只支持 iPhone，不要写 iPad / Mac。
- App 介绍只写 App Store 官方描述、商店元数据或用户确认过的功能，不要从仓库名、代码或设计文档推测功能（曾误写萌宠日记"家人一起记录"、MoonLog"加密货币"）。
- 博客栏目叫「随笔」（英文 Writing）。
- 个人信息、社交账号、开源项目、做事原则：`src/data/profile.ts`；App：`src/data/apps.ts`；界面文案：`src/i18n.ts`。
- 社交平台在 `profile.links` 里配置，名片卡、关于我、页脚会自动显示对应图标。

## 设计
- 丰富但突出重点，宽版布局；首页要有入场动画，并尊重"减弱动态效果"。
- 颜色只用 `src/styles/global.css` 里的 token，组件里不写颜色字面量。
- 品牌正本在 `~/Indie/media/kunkunred-brand`（规范见其 README）。本仓库只保留页面用到的成品副本：`src/assets/avatar.png`、`src/assets/brand/*.svg`、`public/favicon.png`、`public/apple-touch-icon.png`；品牌素材更新时从正本复制过来，不用符号链接（CI 只检出本仓库）。
- 个人 IP 是红底 3D 熊猫头像（名片卡、关于我、导航栏）。名字用手写签名 `wordmark.svg` / `wordmark-white.svg`，按明暗模式切换。`favicon.png` 用小尺寸扁平熊猫，保持 192×192（Google 搜索结果只认边长为 48 倍数的图标）；`apple-touch-icon.png` 用 3D 头像。
- 标题字体 Bricolage Grotesque，强调色 `--seal` 与品牌红 `--kk-red` 同色相。
- UI 中不用 emoji。

## 部署
- 仓库 `RedHiwiK/kunkunred-site`，push 到 `main` 后由 GitHub Actions 部署到 GitHub Pages，自定义域名 https://kunkunred.hiwik.cn/（阿里云解析 `kunkunred` CNAME → `redhiwik.github.io`，`public/CNAME` 记录域名）
- 站内链接一律用 `src/i18n.ts` 的 `href()` / `withBase()` 生成，Markdown 里用相对路径，这样以后换回子路径部署（`base`）也不用改代码。

## 验证
- 改完运行 `pnpm build`，通过后再报告完成。
