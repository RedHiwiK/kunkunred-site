export type Lang = 'zh' | 'en';

export const ui = {
  zh: {
    siteTitle: 'KunKunRed',
    siteDescription: 'KunKunRed，后端出身的全栈工程师。跟着技术往前走，把想法做成作品。',
    nav: { apps: '作品', writing: '随笔', about: '关于我' },
    langSwitch: 'EN',
    langSwitchLabel: 'Switch to English',
    themeLabel: '切换外观',
    eyebrow: 'Build the world with AI',
    statement: '跟着技术往前走，\n把想法做成作品。',
    bio: '你好，我是 KunKunRed。后端出身，在大厂写过服务端，现在在一家 AI 平台做全栈。我喜欢跟着技术往前走，有新东西就上手试试，这几年 AI 也自然成了日常工具。工作之外，我喜欢把想法做成东西：现在是 App 和工具，以后也许是游戏。做出来的工具，我会尽量开源，和大家一起用。',
    ctaApps: '看看我的作品',
    ctaAbout: '关于我',
    card: { role: '全栈工程师', exp: ['前大厂后端', '现 AI 平台全栈', '独立开发 3 款 iPhone App'] },
    appsTitle: '作品',
    appsLead: '工作之外做的东西。目前是三款上架 App Store 的 iPhone App，不用注册账号，数据只在你自己的设备和 iCloud 里。',
    openTitle: '开源',
    openLead: '用了社区那么多开源项目，也想还一点回去。这些是做东西时顺手沉淀下来的工具。',
    aboutTitle: '关于我',
    aboutLead: '后端出身的全栈，喜欢追新，一直在往前走。',
    aboutMore: '更多关于我',
    principles: '我做事的方式',
    stack: '常用工具',
    writingTitle: '随笔',
    writingLead: '关于技术、AI，以及把想法做出来的那些事。',
    writingMore: '全部随笔',
    appStore: 'App Store',
    appStoreLong: '在 App Store 下载',
    learnMore: '了解更多',
    website: '官网',
    since: '上架于',
    platforms: '平台',
    price: '免费下载',
    highlights: '亮点',
    noPosts: '还没有随笔，第一篇在路上。',
    readingTime: (m: number) => `${m} 分钟读完`,
    translation: 'Read in English',
    zhOnly: '中文',
    backToWriting: '全部随笔',
    rss: 'RSS 订阅',
    footerTitle: '保持联系',
    footerBody: '有想法、合作或者只是想打个招呼，都欢迎来找我。',
    colophon: '用 Astro 搭建，托管在 GitHub Pages。',
    otherApps: '其他作品',
  },
  en: {
    siteTitle: 'KunKunRed',
    siteDescription: 'KunKunRed: a backend engineer turned full-stack, moving with the technology and turning ideas into things.',
    nav: { apps: 'Apps', writing: 'Writing', about: 'About' },
    langSwitch: '中',
    langSwitchLabel: '切换到中文',
    themeLabel: 'Toggle appearance',
    eyebrow: 'Build the world with AI',
    statement: 'Moving with the technology,\nturning ideas into things.',
    bio: "Hi, I'm KunKunRed. I started out as a backend engineer at a big tech company and now work full-stack at an AI platform. I like moving with the technology: when something new shows up, I try it, and these days AI is simply part of my everyday toolkit. Outside work I like turning ideas into real things: apps and tools today, maybe games next. The tools I build, I try to open-source so others can use them too.",
    ctaApps: 'See my apps',
    ctaAbout: 'About me',
    card: { role: 'Full-stack engineer', exp: ['Ex big-tech backend engineer', 'Full-stack at an AI platform', 'Indie dev, 3 iPhone apps'] },
    appsTitle: 'Apps',
    appsLead: 'Things I make outside work. Right now that means three iPhone apps on the App Store: no account needed, and your data stays on your own devices and iCloud.',
    openTitle: 'Open source',
    openLead: "I've built on a lot of open source, so I like giving some back. These are tools that came out of making things.",
    aboutTitle: 'About me',
    aboutLead: 'A backend engineer turned full-stack who likes the new and keeps moving forward.',
    aboutMore: 'More about me',
    principles: 'How I work',
    stack: 'Tools I use',
    writingTitle: 'Writing',
    writingLead: 'On tech, AI, and the craft of turning ideas into things.',
    writingMore: 'All writing',
    appStore: 'App Store',
    appStoreLong: 'Download on the App Store',
    learnMore: 'Learn more',
    website: 'Website',
    since: 'Since',
    platforms: 'Platforms',
    price: 'Free',
    highlights: 'Highlights',
    noPosts: 'Nothing here yet. The first piece is on its way.',
    readingTime: (m: number) => `${m} min read`,
    translation: '阅读中文版',
    zhOnly: 'Chinese',
    backToWriting: 'All writing',
    rss: 'RSS',
    footerTitle: 'Keep in touch',
    footerBody: 'Ideas, collaborations, or just saying hi: my door is open.',
    colophon: 'Built with Astro, hosted on GitHub Pages.',
    otherApps: 'More apps',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

// 站点部署的子路径（astro.config 里的 base），站内链接都要带上
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 给站内绝对路径加上部署子路径 */
export function withBase(path: string) {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** 给站内路径加语言前缀：zh 无前缀，en 加 /en */
export function href(lang: Lang, path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  return withBase(lang === 'zh' ? p : `/en${p === '/' ? '/' : p}`);
}

/** 当前路径在另一种语言下的地址 */
export function altHref(lang: Lang, pathname: string) {
  const p = pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  if (lang === 'en') return withBase(p.replace(/^\/en(\/|$)/, '/') || '/');
  return withBase(`/en${p}`);
}

export function formatDate(date: Date, lang: Lang, style: 'short' | 'long' = 'long') {
  if (style === 'short') {
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    return `${date.getUTCFullYear()}.${m}.${d}`;
  }
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function readingMinutes(body = '') {
  const cjk = (body.match(/[一-鿿]/g) ?? []).length;
  const words = body.replace(/[一-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}
