---
title: ETF 波段監控工具
summary: 以 MA5 / MA20 / MA60 均線判斷波段訊號，搭配資本池分批投入與多策略回測，每日自動更新並發布到 GitHub Pages。
date: 2026-06-01
tags: [Python, Pandas, GitHub Actions, 回測]
github: https://github.com/Ping-Hsun-Chiang/2X-ETF-monitor
demo: https://ping-hsun-chiang.github.io/2X-ETF-monitor/
order: 1
---

## 解決什麼問題

手動看盤判斷進出場既耗時又容易受情緒影響。我希望有一套**規則明確、可回測、每天自動跑**的工具，幫我追蹤槓桿 ETF 的波段訊號。

## 我負責的部分

獨立開發，從資料抓取、策略設計、回測到前端顯示全部自己完成。

## 技術重點

- **訊號邏輯**：MA5 / MA20 / MA60 交叉與排列判斷多空
- **資金管理**：資本池分批投入，降低單次進場風險
- **回測比較**：多種策略與定期定額（DCA）並排比較報酬與最大回撤
- **自動化**：GitHub Actions 每日排程抓資料、計算並產生報表
- **顯示**：結果輸出為靜態頁面，透過 GitHub Pages 發布

## 成果

- 每日自動更新，零維護成本運行
- 架構可複製到其他標的物，新增一檔只需幾分鐘
