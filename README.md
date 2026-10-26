# 個人履歷網站

使用 [Astro](https://astro.build) 建置，部署於 GitHub Pages。

## 本機預覽

```bash
npm install
npm run dev      # 開啟 http://localhost:4321
```

## 如何修改內容

| 想改什麼 | 修改哪裡 |
|---|---|
| 姓名、簡介、聯絡方式、技能、經歷 | `src/data/site.ts` |
| 新增 / 修改專案 | `src/content/projects/*.md`（一個專案一個檔案） |
| 專案封面圖 | 放到 `public/projects/`，在 md 檔填 `cover: /projects/xxx.png` |
| PDF 履歷 | 放到 `public/resume.pdf`，在 `site.ts` 填 `resumeUrl: '/resume.pdf'` |
| 顏色、字型 | `src/styles/global.css` 最上方的變數 |

### 新增專案範本

在 `src/content/projects/` 新增 `my-project.md`：

```md
---
title: 專案名稱
subtitle: English Title               # 選填，英文副標
summary: 一句話說明這個專案（顯示在卡片上）
date: 2026-01-01                      # 顯示為 2026.01，依日期由新到舊排序
tags: [Python, React]
github: https://github.com/xxx/xxx    # 選填
demo: https://xxx.com                 # 選填
paper: https://xxx                    # 選填，論文或文件連結
cover: /projects/my-project.png       # 選填，沒填就不顯示圖片
featured: true                        # 選填，置頂並以大卡片顯示
private: true                         # 選填，標示為私人專案（原始碼未公開）
---

## 解決什麼問題
## 我負責的部分
## 技術重點
## 成果
```

## 部署

網址：https://ping-hsun-chiang.github.io/hsun-website/

推送到 `main` 分支後，GitHub Actions 會自動建置並部署，約 1–2 分鐘生效。

> 若日後改用其他 repo 名稱，需同步修改 `astro.config.mjs` 的 `base`。

## Commit 規範

格式：

```
<type>: <English summary>

<中文補充說明（選填）>
```

- **標題**：英文、祈使句、小寫開頭、不加句號、50 字元內
- **內文**：中文補充做了什麼、為什麼，與標題空一行

| type | 用途 | 範例 |
|---|---|---|
| `feat` | 新功能、新區塊、新頁面 | `feat: add dark mode toggle` |
| `fix` | 修正錯誤 | `fix: correct project link on mobile` |
| `content` | 更新履歷內容 | `content: add report automation project` |
| `style` | 外觀、排版、顏色 | `style: increase card spacing` |
| `refactor` | 重構，不影響外觀與功能 | `refactor: extract timeline component` |
| `docs` | 文件 | `docs: update README` |
| `chore` | 設定、套件、雜項 | `chore: upgrade astro to v6` |
| `ci` | 部署流程 | `ci: cache npm dependencies` |

本 repo 已設定 commit 範本（`.gitmessage`）。若重新 clone，執行以下指令啟用：

```bash
git config commit.template .gitmessage
```
