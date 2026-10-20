import type { ImageMetadata } from 'astro';
import jotIcon from '../assets/projects/jot.png';
import hiwikinsightIcon from '../assets/projects/hiwikinsight.svg';

type Localized = { zh: string; en: string };

export interface DocGroup {
  id: string;
  label: Localized;
}

export interface Project {
  slug: string;
  repo: string;
  name: string;
  tagline: Localized;
  intro: Localized;
  highlights: { zh: string[]; en: string[] };
  /** 没有图标的项目显示首字母方块 */
  icon?: ImageMetadata;
  kind: Localized;
  stack: string;
  license?: string;
  /** 有 GitHub Release 时显示下载按钮 */
  releases?: boolean;
  install?: string;
  /** 文档正本在项目仓库的 docs/<lang>/，构建时由 scripts/fetch-docs.mjs 拉到 src/content/projects/<slug>/ */
  docs?: { home: string; groups: DocGroup[] };
  fallbackStars: number;
}

export const projects: Project[] = [
  {
    slug: 'jot',
    repo: 'RedHiwiK/jot',
    name: 'Jot',
    tagline: {
      zh: '给自己和 AI agent 用的本地需求看板。',
      en: 'A local requirements board for you and your AI agents.',
    },
    intro: {
      zh: '工作中冒出来的需求、想法和待办，在终端或和 coding agent 对话时一句话就能记下，自动归到当前 Git 项目；之后在原生 macOS 看板上从 Inbox 推到 Done。CLI、Mac App 和 agent skill 共用一份本地数据：元数据在 SQLite，每条需求的正文是一个 Markdown 文件。不需要账号、服务器或同步服务。',
      en: 'The requirements, ideas and to-dos that come up while you work take one line to capture, from the terminal or a chat with your coding agent, and are filed under the current Git project. Then you move them from Inbox to Done on a native macOS board. The CLI, the Mac app and the agent skill share one local store: SQLite for metadata and a Markdown file per requirement. No account, server or sync service.',
    },
    highlights: {
      zh: ['一行命令记录，自动识别所在 Git 项目', '原生 SwiftUI 看板：拖拽、搜索、快捷键、主题', '每条命令都有 JSON 输出，自带 Claude Code / Codex skill', '纯本地：一个 SQLite 文件加 Markdown 正文'],
      en: ['One-line capture, filed under the current Git project', 'Native SwiftUI board with drag and drop, search, shortcuts and themes', 'JSON output on every command, plus a Claude Code / Codex skill', 'Local only: one SQLite file and Markdown bodies'],
    },
    icon: jotIcon,
    kind: { zh: 'macOS App + CLI', en: 'macOS app + CLI' },
    stack: 'Go · SwiftUI',
    license: 'MIT',
    releases: true,
    install: 'go install github.com/RedHiwiK/jot/cmd/jot@latest',
    docs: {
      home: 'getting-started/introduction',
      groups: [
        { id: 'getting-started', label: { zh: '入门', en: 'Getting started' } },
        { id: 'guides', label: { zh: '指南', en: 'Guides' } },
        { id: 'reference', label: { zh: '参考', en: 'Reference' } },
        { id: 'help', label: { zh: '帮助', en: 'Help' } },
      ],
    },
    fallbackStars: 0,
  },
  {
    slug: 'hiwikinsight',
    repo: 'RedHiwiK/HiwiKInsight',
    name: 'HiwiKInsight',
    tagline: {
      zh: '给独立 iOS 开发者的自托管数据分析与 App Store 收入看板。',
      en: 'Self-hosted product analytics and App Store revenue for indie iOS developers.',
    },
    intro: {
      zh: '一个 Go 程序加内嵌 SQLite：接收 Swift SDK 上报的匿名事件，实时校验 App Store 服务器通知并把每笔购买关联到触发它的付费墙，同步 App Store Connect 销售与分析报表，提供网页看板、邮件日报和告警，以及一层只读查询接口，Claude、Cursor 等 MCP 客户端可以直接查数据。用户数据不经过任何第三方分析服务。',
      en: 'One Go binary with an embedded SQLite database. It receives anonymous events from its Swift SDK, verifies App Store Server Notifications in real time and links each purchase to the paywall that drove it, syncs App Store Connect sales and analytics reports, and serves a web dashboard, email reports, alerts and a read-only query layer that Claude, Cursor or any MCP client can use directly. No third-party analytics service ever sees your users’ data.',
    },
    highlights: {
      zh: ['匿名事件分析与 15 个内置指标', '实时收入与付费墙购买归因', 'App Store Connect 报表同步', 'CLI、MCP 与 Claude Code skill 查询数据'],
      en: ['Anonymous event analytics with 15 built-in metrics', 'Real-time revenue and paywall purchase attribution', 'App Store Connect report sync', 'Query your data through a CLI, MCP or a Claude Code skill'],
    },
    icon: hiwikinsightIcon,
    kind: { zh: '自托管服务 + iOS SDK', en: 'Self-hosted server + iOS SDK' },
    stack: 'Go · SQLite · React',
    license: 'MIT',
    releases: true,
    install: 'docker compose -f docker-compose.demo.yml up --build',
    fallbackStars: 0,
  },
  {
    slug: 'apple-app-store-release',
    repo: 'RedHiwiK/apple-app-store-release',
    name: 'apple-app-store-release',
    tagline: {
      zh: '让 AI 带你走完 App Store 上架全流程的 skill。',
      en: 'An agent skill that walks you through an entire App Store release.',
    },
    intro: {
      zh: '一个自包含的上架 skill，覆盖从准备文案到提交审核的完整流程：元信息、隐私清单、内购与订阅、加密合规、Xcode 打包与签名诊断、TestFlight 上传、提审前自检、审核状态追踪，以及营销预览图的引导式制作。不可逆的 Submit for Review 留给你在 App Store Connect 亲手点。Codex 与 Claude Code 通用。',
      en: 'A self-contained release skill covering everything from store copy to review: metadata, privacy manifest, in-app purchases and subscriptions, encryption compliance, Xcode archiving with signing diagnostics, TestFlight upload, pre-submission checklists, review tracking and guided marketing screenshots. The irreversible Submit for Review stays with you in App Store Connect. Works with Codex and Claude Code.',
    },
    highlights: {
      zh: ['元信息、隐私清单与加密合规', '打包签名诊断与 TestFlight 上传', '提审前自检清单', '营销预览图引导式制作'],
      en: ['Metadata, privacy manifest and encryption compliance', 'Signing diagnostics and TestFlight upload', 'Pre-submission checklists', 'Guided marketing screenshots'],
    },
    kind: { zh: 'Agent skill', en: 'Agent skill' },
    stack: 'Codex · Claude Code',
    fallbackStars: 27,
  },
  {
    slug: 'telemetrydeck-ios-skill',
    repo: 'RedHiwiK/telemetrydeck-ios-skill',
    name: 'telemetrydeck-ios-skill',
    tagline: {
      zh: '给 iOS / macOS App 接入 TelemetryDeck 匿名统计的标准流程。',
      en: 'A step-by-step skill for adding TelemetryDeck analytics to iOS and macOS apps.',
    },
    intro: {
      zh: '把一次真实接入中踩过的坑整理成可复用的 Claude Code skill：SPM 安装、统一埋点封装层、埋点策略与隐私红线、PrivacyInfo.xcprivacy、编译验证，以及用 TQL 逐卡配置看板。',
      en: 'Every pitfall from a real integration, turned into a reusable Claude Code skill: SPM setup, a single analytics wrapper, event strategy and privacy boundaries, PrivacyInfo.xcprivacy, build verification and dashboard cards configured with TQL.',
    },
    highlights: {
      zh: ['SPM 安装与常见链接问题', '复制即用的埋点封装层', '隐私清单审计', 'TQL 看板配置'],
      en: ['SPM setup and common linking issues', 'A drop-in analytics wrapper', 'Privacy manifest audit', 'Dashboard cards with TQL'],
    },
    kind: { zh: 'Agent skill', en: 'Agent skill' },
    stack: 'Claude Code · Swift',
    fallbackStars: 0,
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

/** 构建时取 GitHub star 数，取不到就用兜底值 */
export async function withStars() {
  return Promise.all(
    projects.map(async (p) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${p.repo}`, {
          headers: { Accept: 'application/vnd.github+json' },
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { stargazers_count: number };
        return { ...p, stars: data.stargazers_count };
      } catch {
        return { ...p, stars: p.fallbackStars };
      }
    }),
  );
}
