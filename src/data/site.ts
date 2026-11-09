// ==============================================
// 網站主要內容：直接修改這個檔案即可更新網站
// 專案請到 src/content/projects/ 新增 .md 檔
// ==============================================

export const profile = {
  name: 'Ping-Hsun Chiang',
  title: '資料分析｜統計建模｜機器學習',
  // Hero 區塊的一句話介紹
  tagline: '喜歡把重複的工作交給程式，把時間留給真正需要思考的問題。',
  // 關於我：字串是一段文字；陣列是條列清單（每項有粗體標題 title 與說明 desc）
  about: [
    '國立東華大學統計碩士，具備扎實的機率統計基礎，以及資料分析與機器學習的實作經驗。做事習慣從問題本身出發：先釐清需求、提出解決方向，再以數據與程式驗證，最終將成果落地。',
    '熟悉以 Python、R 與 SQL 進行資料分析與統計建模，涵蓋機率模型、空間統計與蒙地卡羅模擬；並具備深度學習（TensorFlow、JAX）、網頁系統開發（Next.js、Supabase）與自動化部署（GitHub Actions）的實作經驗。',
    [
      { title: '資料分析', desc: '從資料清洗到視覺化，產出能支援決策的分析報告' },
      { title: '模型開發', desc: '建立預測模型，並以統計方法驗證其可靠性' },
      { title: '品質驗證', desc: '設計測試情境與自動化驗證流程，確保系統結果正確' },
      { title: '自動化與落地', desc: '建立資料管線，將分析成果做成實際使用的系統' },
    ],
    '期望投入資料分析、資料科學、機器學習或品質驗證相關職務，以統計的嚴謹，搭配 AI 工具帶來的學習與開發效率，為團隊創造價值。',
  ] as (string | { title: string; desc: string }[])[],
  // 大頭照：把圖片放到 public/ 底下（例如 public/avatar.jpg），再填 '/avatar.jpg'；留空則顯示姓名縮寫
  avatar: '',
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
  { category: '程式語言', items: ['Python', 'R', 'TypeScript', 'JavaScript', 'HTML / CSS', 'SQL'] },
  { category: 'AI / 深度學習', items: ['TensorFlow', 'Keras', 'JAX'] },
  { category: '統計與建模', items: ['空間統計', '克利金模型', '機率模型', '蒙地卡羅模擬', '限制滿足演算法', '策略回測'] },
  { category: '資料處理', items: ['Pandas', 'NumPy', 'Matplotlib', '敘述統計', '資料視覺化'] },
  { category: '網站開發', items: ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google Apps Script', 'RWD'] },
  { category: '自動化與部署', items: ['Git', 'GitHub Actions', 'GitHub Pages', 'Vercel', 'Linux / WSL', 'REST API'] },
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
    desc: '參與公司 AI 相關專案，負責系統功能測試與驗證，並撰寫技術與測試報告。',
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
    desc: '與首爾大學空間統計研究室進行學術交流，探討深度學習技術、模型參數調整方式，以及大規模球面空間預測方法。',
  },
  {
    period: '2025.05',
    org: '印尼 UNY 數學系',
    title: '統計程式課程助教',
    desc: '協助指導教授為當地學生進行基礎 Python 統計程式教學，具備技術知識轉移與跨文化溝通能力。',
  },
  {
    period: '2023.07 — 2026.01',
    org: '東華空間統計研究室',
    title: '研究助理',
    desc: '參與 Spherical DeepKriging 研究，從大規模氣象數據收集與前處理、模型設計與球面基底函數建構、理論推導驗證，到模擬實驗與真實資料分析，完整執行研究流程。',
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
