---
title: 2X ETF 波段訊號監控
subtitle: 2X ETF Monitor
summary: 台股 2x 槓桿 ETF 的波段訊號監控工具，以 MA5 / MA20 / MA60 判斷進出場，搭配資本池分批投入與多策略回測，每個交易日由 GitHub Actions 自動更新。
date: 2026-07-01
tags: [Python, GitHub Actions, FinMind API, Backtesting, GitHub Pages]
github: https://github.com/Ping-Hsun-Chiang/2X-ETF-monitor
demo: https://ping-hsun-chiang.github.io/2X-ETF-monitor/
---

## 解決什麼問題

以規則明確、可回測的訊號取代「憑感覺進出場」，監控 00631L / 00663L / 00675L / 00685L 四檔台股 2x 槓桿 ETF 的波段進出場時機。純顯示用途，不自動下單。

## 我負責的部分

個人專案，從資料管線、策略設計、回測到前端網頁皆獨立完成。

## 技術重點

- **全自動資料管線**：GitHub Actions 於每個交易日收盤後呼叫 FinMind API 抓取收盤價、處理股票分割還原、計算訊號並產出 JSON
- **零維運成本架構**：前端純 HTML / CSS / JS，資料來自 Actions 產出的 JSON，部署於 GitHub Pages，無後端與資料庫
- **可擴充的多標的設計**：所有標的共用同一套策略引擎與前端模板，`targets.json` 為唯一設定來源
- **策略回測框架**：五種波段策略年度報酬對照、資本池動態分批模型，並與 0050 大盤及 buy-and-hold DCA 比較

## 成果

- 每個交易日自動更新，全程零人工介入
- 新增一檔 ETF 只需執行一支 script，不需改動既有程式碼
