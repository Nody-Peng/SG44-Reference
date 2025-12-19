import { ConferenceInfo, NewsItem, TimelineEvent, Topic } from "./types";

// 1. 基本資訊 (可以直接作為 Default，直到你建立 Payload Global)
export const CONFERENCE_INFO: ConferenceInfo = {
  title: "第四十四屆測量及空間資訊研討會",
  subtitle: "SG44 Conference on Surveying and Geomatics",
  theme: "智測國土 X 韌啟未來",
  themeEn: "Smart Surveying of National Land, Resilient Future",
  date: "115年 8月 20日 (四) - 21日 (五)",
  location: "國立政治大學 法學院",
  organizer: "國立政治大學 地政學系",
};

// 2. 最新消息 (這部分之後會從 Payload 的 News Collection 抓取)
export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: "114-12-15",
    category: "重要公告",
    title: "第四十四屆測量與空間資訊研討會 ─ 第一次籌備會通知",
    content: `第四十四屆測量與空間資訊研討會
第一次籌備會通知... (內容略)`,
  },
];

// 3. 重要時程
export const TIMELINE_DATA: TimelineEvent[] = [
  { date: "114/12/30", title: "第一次籌備會議", isPast: false },
  { date: "115/04/01", title: "公告及開放早鳥報名", isPast: false },
  { date: "115/06/30", title: "文章投稿截止", isPast: false },
  { date: "115/07/18", title: "論文審查結果公告", isPast: false },
  { date: "115/08/20", title: "SG44 研討會開幕", isPast: false },
];

// 4. 徵稿主題
export const TOPICS_DATA: Topic[] = [
  {
    id: "t1",
    title: "大地測量與導航技術",
    description: "衛星定位、重力測量、導航演算法與應用。",
    iconName: "Map",
  },
  {
    id: "t2",
    title: "車載測繪與室內定位",
    description: "行動測繪系統(MMS)、室內圖資建置與定位技術。",
    iconName: "Zap",
  },
  {
    id: "t3",
    title: "無人載具與災害調查",
    description: "UAV 應用於地形監測、災情判別與風險管理。",
    iconName: "Shield",
  },
  {
    id: "t4",
    title: "攝影測量與測繪管理",
    description: "數位攝影測量、影像匹配與測繪法規標準管理。",
    iconName: "Database",
  },
  {
    id: "t5",
    title: "智慧科技與跨域應用",
    description: "空間資訊與智慧城市、物聯網及交通之整合應用。",
    iconName: "Cpu",
  },
  {
    id: "t6",
    title: "數位城市與資訊服務",
    description: "3D 城市建模、數位孿生與空間數據服務平台。",
    iconName: "Globe",
  },
  {
    id: "t7",
    title: "環境永續與韌性防災",
    description: "空間資訊技術在氣候變遷與永續發展之應用。",
    iconName: "Shield",
  },
  {
    id: "t8",
    title: "衛星遙測與海洋測繪",
    description: "多光譜衛星影像分析、水下地形與海岸變遷。",
    iconName: "Database",
  },
  {
    id: "t9",
    title: "國土政策與規劃治理",
    description: "空間資訊支援國土計畫、城鄉發展與土地管理。",
    iconName: "Map",
  },
  {
    id: "t10",
    title: "International Session",
    description: "Cross-Cutting International Research and Case Studies.",
    iconName: "Globe",
  },
];

// AI 提示詞
export const AI_SYSTEM_INSTRUCTION = `
你是一位專業的 SG44 研討會助理。你的任務是回答關於「第四十四屆測量及空間資訊研討會」的問題... (略)
`;