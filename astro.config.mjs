// @ts-check
import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時：
// - 若 repo 名稱是「帳號.github.io」，site 填 https://帳號.github.io，不需要 base
// - 若 repo 是其他名稱（例如 resume），需加上 base: '/resume/'（結尾要有斜線）
export default defineConfig({
  site: 'https://ping-hsun-chiang.github.io',
  base: '/hsun-website/',
});
