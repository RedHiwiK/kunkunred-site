import type { ImageMetadata } from 'astro';
import vitaeIcon from '../assets/apps/vitae.png';
import cutepetIcon from '../assets/apps/cutepet.png';
import moonlogIcon from '../assets/apps/moonlog.png';

export type AppSlug = 'vitae' | 'cutepet' | 'moonlog';

type Localized = { zh: string; en: string };

export interface App {
  slug: AppSlug;
  name: Localized;
  tagline: Localized;
  intro: Localized;
  highlights: { zh: string[]; en: string[] };
  icon: ImageMetadata;
  appStoreId: string;
  website?: string;
  platforms: string;
  since: string;
}

export const apps: App[] = [
  {
    slug: 'vitae',
    name: { zh: '平生 Vitae', en: 'Vitae' },
    tagline: {
      zh: '账单、资产、健康、健身、待办、日子，一个 App 记下生活。',
      en: 'Bills, assets, health, workouts, todos and the days that matter, all in one place.',
    },
    intro: {
      zh: '平生把记账、资产、健康、饮食、健身、待办和日子放在一起。付款截图丢进来，AI 帮你变成一笔账；拍一张餐盘，AI 识别食物和营养；重要的日子会倒数提醒；每周、每月还会帮你做一次跨维度的复盘。不用注册账号，数据默认存在本地，也可以开启 iCloud 同步。',
      en: 'Vitae brings bookkeeping, assets, health, diet, workouts, todos and important days together. Drop in a payment screenshot and AI turns it into a ledger entry; snap your plate and it recognises the food and nutrition; important days get countdown reminders; and every week and month it reviews patterns across all of it. No account needed: data stays on your device by default, with optional iCloud sync.',
    },
    highlights: {
      zh: ['AI 截图记账，快捷指令一键录入', '食物识别与饮食记录', '健身计划与动作库', '自知周 / 月复盘'],
      en: ['Screenshot-to-ledger with AI, one tap from Shortcuts', 'Meal recognition and diet log', 'Workout plans and exercise library', 'Weekly and monthly reviews'],
    },
    icon: vitaeIcon,
    appStoreId: '6763250273',
    website: 'https://vitae.hiwik.cn',
    platforms: 'iPhone',
    since: '2026-05',
  },
  {
    slug: 'cutepet',
    name: { zh: '萌宠日记', en: 'Cute Pet Diary' },
    tagline: {
      zh: '给猫猫狗狗的成长本，日常、健康、花费都记下。',
      en: 'A growth journal for your cats and dogs: daily moments, health and spending.',
    },
    intro: {
      zh: '萌宠日记是给铲屎官的私密成长记录。照片、视频、Live Photo 留住每个瞬间；体重曲线、疫苗驱虫记录和周期提醒帮你管好健康；还有花费账本和精美的分享卡片。不用注册账号，数据只在你的手机和你自己的 iCloud 里。',
      en: "Cute Pet Diary is a private growth journal for pet parents. Photos, videos and Live Photos keep every moment; weight charts, vaccine and deworming records and recurring reminders look after health; there's also a spending ledger and beautiful share cards. No account needed, and your data stays on your phone and in your own iCloud.",
    },
    highlights: {
      zh: ['图文、视频、Live Photo 日记', '体重曲线与疫苗驱虫提醒', '花费账本与月度统计', '高光时刻与分享卡片'],
      en: ['Diary with photos, videos and Live Photos', 'Weight charts, vaccine and deworming reminders', 'Spending ledger with monthly stats', 'Milestones and share cards'],
    },
    icon: cutepetIcon,
    appStoreId: '6759037476',
    website: 'https://cutepet.hiwik.cn',
    platforms: 'iPhone',
    since: '2026-03',
  },
  {
    slug: 'moonlog',
    name: { zh: 'MoonLog', en: 'MoonLog' },
    tagline: {
      zh: 'AI 交易复盘日志。不荐股，只帮你守纪律。',
      en: "An AI trading journal. It won't pick stocks; it keeps you disciplined.",
    },
    intro: {
      zh: 'MoonLog 是交易者的纪律教练。不连接券商，也不推荐股票：你记录计划和每一笔交易，AI 从收益、策略、纪律、心理四个维度复盘，用月相纪律评分告诉你执行得怎么样。',
      en: "MoonLog is a discipline coach for traders. No broker connection, no stock tips: you log plans and trades, and AI reviews them across returns, strategy, discipline and psychology, scoring your execution with a moon-phase rating.",
    },
    highlights: {
      zh: ['AI 四维交易复盘', '月相纪律评分与 7 大指标', '股票与 CME 期货', '自定义持仓周期'],
      en: ['Four-angle AI trade reviews', 'Moon-phase discipline score, 7 core metrics', 'Stocks and CME futures', 'Custom holding periods'],
    },
    icon: moonlogIcon,
    appStoreId: '6758563196',
    website: 'https://redhiwik.github.io/moonlog-site/',
    platforms: 'iPhone',
    since: '2026-02',
  },
];

export const appBySlug = (slug: string) => apps.find((a) => a.slug === slug);
export const appStoreUrl = (app: App) => `https://apps.apple.com/app/id${app.appStoreId}`;
