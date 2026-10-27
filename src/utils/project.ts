import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

// 置頂專案優先，其餘依日期由新到舊
export function sortProjects(projects: Project[]) {
  return [...projects].sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.getTime() - a.data.date.getTime(),
  );
}

// 2026-04-01 → 2026.04
export function formatMonth(date: Date) {
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
}

// 專案內文必須依序包含這四個 ## 標題
export const PROJECT_SECTIONS = ['解決什麼問題', '我負責的部分', '技術重點', '成果'];

// 格式不符時讓 build 失敗，避免格式不一致的專案被部署上線
export function assertProjectSections(id: string, headings: { depth: number; text: string }[]) {
  const actual = headings.filter((h) => h.depth === 2).map((h) => h.text.trim());
  if (actual.join('|') !== PROJECT_SECTIONS.join('|')) {
    throw new Error(
      `專案「${id}」格式不符：內文的 ## 標題必須依序為「${PROJECT_SECTIONS.join('、')}」，` +
        `目前是「${actual.join('、') || '（無）'}」。請參考 src/content/projects/_template.md`,
    );
  }
}
