---
title: 六興堂寺廟官方網站
subtitle: Temple Website
summary: 推廣地方宮廟的官方網站，介紹沿革、神明與活動，並延伸提供線上捐款、祈福與擲筊，以及廟務小幫手與 AI 祈福回應。
date: 2026-04-01
tags: [HTML, CSS, JavaScript, RWD, Google Apps Script, Gemini API, GitHub Pages]
github: https://github.com/Ping-Hsun-Chiang/temple-website
demo: https://ping-hsun-chiang.github.io/temple-website/
---

## 解決什麼問題

地方宮廟的資訊多半散落在看板與社群貼文中，外地信眾與年輕一代不易認識。這個網站以推廣宮廟文化為主，同時把原本只能到現場辦理的服務搬到線上。

## 技術重點

- **AI 祈福回應**：串接 Gemini 針對信眾的祈願內容生成回應，並以 system prompt 規範宗教場景下的語氣與界線
- **金鑰保護**：以 Google Apps Script 作為代理，讓純靜態網站也能安全呼叫 LLM，API 金鑰不會暴露在前端
- **免付費 API 的廟務小幫手**：在瀏覽器端以模糊比對回答常見問題，廟方可自行維護問答內容
- **零月費架構**：部署於 GitHub Pages，後端僅使用 Apps Script 免費額度

## 成果

- 網站上線，完整呈現宮廟沿革、神明、活動與相片
- 提供隨喜捐款、線上祈福、線上擲筊三項線上服務，外地信眾也能參與
- 零月費運作，符合宮廟預算
