// ==============================================
// 網站主要內容：直接修改這個檔案即可更新網站
// 專案請到 src/content/projects/ 新增 .md 檔
// ==============================================

export const profile = {
  name: 'Andrew',
  title: '軟體工程師｜資料自動化',
  // Hero 區塊的一句話介紹
  tagline: '喜歡把重複的工作交給程式，把時間留給真正需要思考的問題。',
  // 關於我：每個字串是一段
  about: [
    '我是一名專注於後端與資料處理的工程師，熟悉 Python 與 JavaScript 生態系，擅長把零散的流程整理成穩定、可維護的自動化系統。',
    '工作之餘喜歡研究投資策略與資料視覺化，曾自行開發 ETF 監控與回測工具，並透過 GitHub Actions 每日自動更新。',
    '目前正在尋找後端或資料工程相關的職位，期待在重視工程品質的團隊中持續成長。',
  ],
  location: '台灣・台北',
  // PDF 履歷：把檔案放到 public/resume.pdf，再填 '/resume.pdf'；留空則不顯示按鈕
  resumeUrl: '',
};

export const contact = {
  email: 'you@example.com',
  github: 'https://github.com/Ping-Hsun-Chiang',
  linkedin: 'https://www.linkedin.com/in/your-username',
};

// 技能：可自由新增分類或項目
export const skills: { category: string; items: string[] }[] = [
  { category: '程式語言', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { category: '框架與函式庫', items: ['FastAPI', 'Pandas', 'Astro', 'React'] },
  { category: '工具與平台', items: ['Git / GitHub', 'GitHub Actions', 'Docker', 'Linux'] },
  { category: '資料庫', items: ['PostgreSQL', 'SQLite', 'Redis'] },
];

// 經歷：由新到舊排列。type 可填 'work'（工作）或 'education'（學歷）
export const experience: {
  type: 'work' | 'education';
  period: string;
  title: string;
  org: string;
  points: string[];
}[] = [
  {
    type: 'work',
    period: '2024 – 至今',
    title: '後端工程師',
    org: '某某科技股份有限公司',
    points: [
      '負責內部資料平台 API 設計與開發，服務 5 個以上部門',
      '導入 CI/CD 流程，部署時間由 30 分鐘縮短至 5 分鐘',
    ],
  },
  {
    type: 'work',
    period: '2022 – 2024',
    title: '軟體工程師',
    org: '某某資訊有限公司',
    points: [
      '開發報表自動化工具，每月節省約 40 小時人工作業',
      '維護既有系統並撰寫單元測試，測試覆蓋率提升至 80%',
    ],
  },
  {
    type: 'education',
    period: '2018 – 2022',
    title: '資訊工程學系 學士',
    org: '某某大學',
    points: ['專題：以機器學習預測股價波動'],
  },
];
