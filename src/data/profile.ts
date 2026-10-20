import avatar from '../assets/avatar.png';

export type Platform = 'github' | 'xiaohongshu' | 'douyin' | 'bilibili' | 'x' | 'youtube' | 'zhihu' | 'wechat' | 'email';
export interface SocialLink {
  platform: Platform;
  label: string;
  url: string;
}

// 个人信息集中在这里维护：首页名片、关于页、页脚都从这里读

export const profile = {
  name: 'KunKunRed',
  handle: 'RedHiwiK',
  // 其他平台上用的名字，写进结构化数据供搜索引擎关联
  aliases: ['RedHiwiK', '困困红'],
  avatar,
  // 社交账号：名片卡和页脚都会显示，取消注释并填上主页地址即可
  // platform 可选：github | xiaohongshu | douyin | bilibili | x | youtube | zhihu | wechat | email
  links: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/RedHiwiK' },
    { platform: 'x', label: 'X', url: 'https://x.com/RedHiwiK' },
    { platform: 'xiaohongshu', label: '小红书', url: 'https://www.xiaohongshu.com/user/profile/5bc825cab321db000191823b' },
    // { platform: 'douyin', label: '抖音', url: 'https://www.douyin.com/user/你的ID' },
    // { platform: 'bilibili', label: 'B站', url: 'https://space.bilibili.com/你的UID' },
    // { platform: 'email', label: 'Email', url: 'mailto:you@example.com' },
  ] as SocialLink[],
  // 公安联网备案：页脚每页显示，链接到全国互联网安全管理服务平台的查询页
  beian: {
    text: '闽公网安备35020502001161号',
    url: 'https://beian.mps.gov.cn/#/query/webSearch?code=35020502001161',
  },
};

export const principles = {
  zh: [
    { title: '拥抱变化', body: '技术一直在变，我也跟着变。新东西先上手试，好用就留下来，AI 就是这样走进我日常工作的。' },
    { title: '全栈视角', body: '后端出身，现在从服务端一路写到界面。一个想法，我希望能自己从头做到尾。' },
    { title: '好奇心驱动', body: '做 App、写工具，以后也想做游戏。不给自己设边界，觉得有意思就动手。' },
    { title: '开源分享', body: '用了社区那么多开源项目，也想还一点回去。做出来的工具、踩过的坑，能开源的就开源。' },
  ],
  en: [
    { title: 'Embrace change', body: 'Technology keeps changing, so I change with it. I try new things early and keep what works; that is how AI became part of my everyday work.' },
    { title: 'Full-stack view', body: 'I started in the backend and now work all the way up to the interface. I like being able to take an idea from start to finish myself.' },
    { title: 'Curiosity first', body: "Apps and tools today, games maybe next. I don't draw lines around what I build; if it's interesting, I start." },
    { title: 'Open by default', body: "I've built on so much open source that I want to give some back. Tools I make and lessons I learn the hard way get shared whenever they can." },
  ],
};

export const stack = ['Java', 'Go', 'Swift', 'SwiftUI', 'TypeScript', 'Astro', 'SQLite', 'Claude Code', 'Codex'];
