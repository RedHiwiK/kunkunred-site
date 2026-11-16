import type { ImageMetadata } from 'astro';
import vitaeIcon from '../assets/apps/vitae.png';
import cutepetIcon from '../assets/apps/cutepet.png';
import moonlogIcon from '../assets/apps/moonlog.png';
import waystubIcon from '../assets/apps/waystub.png';

export type AppSlug = 'vitae' | 'cutepet' | 'moonlog' | 'waystub';

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
      zh: '财务、健康、待办、物品、日子与自知，一个 App 记下生活。',
      en: 'Money, health, to-dos, belongings, important dates and reflections, all in one place.',
    },
    intro: {
      zh: '平生把财务、健康、待办、物品、日子和自知放在一起。用支付截图记账，用文字、语音或照片记录饮食；训练时预填上次成绩，物柜记下物品价格、位置和使用情况。在自知的「此刻」看本周变化，在「回顾」回看一周或一个月，也可以请 AI 写一封来信。',
      en: 'Vitae brings money, health, to-dos, belongings, important dates and reflections together. Log spending from payment screenshots and meals with text, voice or photos. Workouts start with your previous results, while your cabinet keeps track of prices, locations and usage. See this week’s changes in Now, look back in Reviews, or request an AI letter for another perspective.',
    },
    highlights: {
      zh: ['截图记账与资产管理', '文字、语音记饮食与训练记录', '物品价格、位置与使用成本', '自知此刻、周 / 月回顾与 AI 来信'],
      en: ['Screenshot bookkeeping and asset tracking', 'Text and voice meal logging, workout tracking', 'Belongings, locations and cost per use', 'Now, weekly and monthly reviews, and AI letters'],
    },
    icon: vitaeIcon,
    appStoreId: '6763250273',
    website: 'https://apps.hiwik.cn/vitae/',
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
    website: 'https://apps.hiwik.cn/cutepet/',
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
    website: 'https://apps.hiwik.cn/moonlog/',
    platforms: 'iPhone',
    since: '2026-02',
  },
  {
    slug: 'waystub',
    name: { zh: '一票一程', en: 'Waystub' },
    tagline: {
      zh: '一张旧票，找回那几天的照片。',
      en: 'One old ticket brings back the photos from those days.',
    },
    intro: {
      zh: '一票一程把火车票、机票、汽车票收成一张张好看的票根，再按票上的日期和城市，从相册里找出那几天拍的照片，把每一段旅程完整地留下来。去过的城市和走过的路会画成足迹地图，每年还有一份旅行年度报告。',
      en: 'Waystub turns your train, flight and bus tickets into beautiful stubs, then uses the dates and cities on each ticket to gather the photos you took on that trip, so every journey is kept whole. The cities you visit and the routes you travel become a footprint map, with a year report for every year.',
    },
    highlights: {
      zh: ['截图、发票、登机牌导入车票机票', '按日期找回旅途照片', '足迹地图与年度报告', '多种票根分享图'],
      en: ['Import tickets from screenshots, invoices and boarding passes', 'Trip photos found by date', 'Footprint map and year report', 'Share cards in many ticket styles'],
    },
    icon: waystubIcon,
    appStoreId: '6820545030',
    website: 'https://apps.hiwik.cn/waystub/',
    platforms: 'iPhone',
    since: '2026-11',
  },
];

export const appBySlug = (slug: string) => apps.find((a) => a.slug === slug);
export const appStoreUrl = (app: App) => `https://apps.apple.com/app/id${app.appStoreId}`;
