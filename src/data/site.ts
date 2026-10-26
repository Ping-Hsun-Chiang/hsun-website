// ==============================================
// 網站主要內容：直接修改這個檔案即可更新網站
// 專案請到 src/content/projects/ 新增 .md 檔
// ==============================================

export const profile = {
  name: 'Ping-Hsun Chiang',
  title: '軟體工程師｜資料自動化',
  // Hero 區塊的一句話介紹
  tagline: '喜歡把重複的工作交給程式，把時間留給真正需要思考的問題。',
  // 關於我：每個字串是一段
  about: [
    '國立東華大學數學統計碩士，專注於 AI 模型設計與落地實作。碩士期間提出 Spherical DeepKriging 空間預測架構，結合深度神經網路與球面基底函數，在全球尺度大數據場景下預測效能顯著超越傳統克利金模型。',
    '具備深厚的機率統計底蘊與完整的 AI 軟體工程實作能力。在演算法開發上，能將多解析度基底函數等複雜統計理論整合至深度神經網路中，開發出突破傳統 O(n3) 運算瓶頸的模型預測架構。在驗證與測試工程方面，擅長處理巨量資料與離群值，能透過導入 Huber 損失函數進行魯棒性最佳化，並設計包含極端值的模擬情境進行壓力測試與超參數調校，確保模型防範過度擬合。除了演算法深耕，我更具備將技術落地的系統整合能力。能以 TensorFlow/Keras 獨立建置多標籤分類模型並實施滾動式回測；在自動化領域，熟練運用 Python 整合 Meta Graph API，開發橫跨 Facebook、Instagram、Threads 的自動發文與回覆機器人。同時具備輕量化全端開發經驗，能獨立完成前端網頁建置，並串接 Google Apps Script 無伺服器後端實現資料收集與 Email 通知，完成從理論研發到端到端系統建置的完整實務經驗。',
    '熟悉從 資料清理 → 模型訓練 → 驗證評估 → 自動化部署 的完整開發流程，習慣在 Linux (WSL) 環境下進行工程開發。擅長將統計嚴謹度帶入機器學習實作，追求可解釋、可驗證的模型結果。',
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
