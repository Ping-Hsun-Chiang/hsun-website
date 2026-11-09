---
title: 三一集團臺灣授權經銷商網站
subtitle: I-Cheong Website
summary: 為 SANY 三一起重機臺灣授權經銷商打造的形象與產品型錄網站，買家可用手機查規格、一鍵聯絡業務，活動照片則從 Google Drive 每日自動同步。
date: 2026-05-01
tags: [HTML, Tailwind CSS, JavaScript, Google Drive API, GitHub Actions, GitHub Pages]
github: https://github.com/Ping-Hsun-Chiang/i-cheong-website
demo: https://ping-hsun-chiang.github.io/i-cheong-website/
---

## 解決什麼問題

起重機買家多在工地用手機查資料，需要能快速比較車型規格、直接聯絡業務；而業主不會寫程式，卻需要經常更新展覽與交車照片。

## 技術重點

- **照片自動同步**：GitHub Actions 每日透過 Google Drive API 抓取照片清單，業主只要把照片丟進雲端資料夾，網站就會自動更新
- **內容與版面分離**：車型與二手車資料抽成獨立資料檔，新增車型只需多加一筆資料，不必修改 HTML
- **零建置架構**：單一 HTML 檔搭配 CDN 載入資源，push 後即由 GitHub Pages 發布，維護成本極低

## 成果

- 網站上線，涵蓋 11 款車型的規格、介紹與原廠規格書下載
- 手機上可一鍵撥號、加 LINE 聯絡業務，降低詢價門檻
- 業主可自行更新活動照片，無需工程師介入
