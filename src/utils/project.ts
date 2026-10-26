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
