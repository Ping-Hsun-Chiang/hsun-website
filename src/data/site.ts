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

// 聯絡方式：留空的項目不會顯示
export const contact = {
  phone: '0934-343-515',
  email: 'andrewchiang228@gmail.com',
  location: 'Tainan City, Taiwan',
  github: 'https://github.com/Ping-Hsun-Chiang',
  linkedin: 'https://www.linkedin.com/in/andrew-chiang-a99a94321/',
};

// 技能：可自由新增分類或項目
export const skills: { category: string; items: string[] }[] = [
  { category: '程式語言', items: ['Python', 'R', 'JavaScript', 'HTML / CSS', 'Bash'] },
  { category: 'AI / 機器學習框架', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'JAX', 'XGBoost'] },
  { category: '資料處理與分析', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL'] },
  { category: '統計與建模', items: ['空間統計', '克利金模型', '非線性迴歸', '貝氏推論', '時間序列'] },
  { category: '工程與開發工具', items: ['Git', 'Linux / WSL', 'Docker', 'Google Apps Script', 'REST API'] },
  { category: '雲端 / 部署', items: ['GitHub Pages', 'Google Sheets API', 'Meta Graph API'] },
];

// 經歷：由新到舊排列
export const experience: {
  period: string;
  org: string;
  title: string;
  desc: string;
}[] = [
  {
    period: '2026.03 — 2026.06',
    org: '奕福穎科技股份有限公司',
    title: 'AI 實習工程師',
    desc: '參與公司 AI 相關專案開發，負責模型實作與測試驗證工作。',
  },
  {
    period: '2025.10 — 2026.01',
    org: '經濟部 AI 新秀計畫',
    title: '培訓人員',
    desc: '系統性學習生成式 AI、LLM 應用及 AI 工具鏈，完成多項實作任務與專案提案。',
  },
  {
    period: '2025.06 — 2025.07',
    org: '韓國首爾大學統計學系',
    title: '國際交換研究生',
    desc: '與首爾大學空間統計研究室進行學術交流，探討大規模球面空間預測方法。',
  },
  {
    period: '2025.05',
    org: '印尼 UNY 數學系',
    title: '統計程式課程助教',
    desc: '協助指導教授對當地學生進行 R 語言統計程式教學，具備技術知識轉移與跨文化溝通能力。',
  },
  {
    period: '2023.07 — 2026.01',
    org: '東華空間統計研究室',
    title: '研究助理',
    desc: '主導 Spherical DeepKriging 模型設計與實驗，負責大規模氣象數據收集、前處理、基底函數建構及模型比較驗證，產出碩士論文並通過口試。',
  },
  {
    period: '2023.07 — 2026.01',
    org: '東部運輸中心',
    title: '計畫負責人',
    desc: '蒐集花東地區公共運輸資料，運用 R 語言進行統計分析與視覺化，產出報告並提供主管機關優化建議。',
  },
];

// 學歷：由新到舊排列。level、degree 可省略
export const education: {
  period: string;
  school: string;
  level?: string;
  degree?: string;
}[] = [
  {
    period: '2023.07 — 2026.01',
    school: '國立東華大學',
    level: '碩士',
    degree: '應用數學系 統計碩士班',
  },
  {
    period: '2019.09 — 2023.06',
    school: '國立東華大學',
    level: '學士',
    degree: '應用數學系 統計科學組',
  },
  {
    period: '2016.09 — 2019.06',
    school: '國立北門高級中學',
  },
  {
    period: '2013.09 — 2016.06',
    school: '私立黎明高級中學',
  },
];
