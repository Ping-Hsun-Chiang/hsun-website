import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 專案的欄位定義：每個 src/content/projects/*.md 開頭的 --- 區塊都要符合這個格式
const projects = defineCollection({
  // 底線開頭的檔案（例如 _template.md）不會被載入
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // 英文副標（選填），顯示在標題下方
    subtitle: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // 封面圖：放在 public/projects/ 底下，填 '/projects/xxx.png'；不填就不顯示圖片
    cover: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    // 論文或其他文件連結
    paper: z.string().url().optional(),
    // 置頂：排在最前面並以大卡片顯示
    featured: z.boolean().default(false),
    // 私人專案：原始碼未公開
    private: z.boolean().default(false),
  }),
});

export const collections = { projects };
