import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 專案的欄位定義：每個 src/content/projects/*.md 開頭的 --- 區塊都要符合這個格式
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // 封面圖：放在 public/projects/ 底下，填 '/projects/xxx.png'；不填會用色塊代替
    cover: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    // 數字越小越前面；相同則依日期新到舊
    order: z.number().default(100),
  }),
});

export const collections = { projects };
