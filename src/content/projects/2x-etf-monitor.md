---
title: 2X ETF 波段訊號監控
subtitle: 2X ETF Monitor
summary: 台股 2 倍槓桿 ETF 的波段訊號監控工具，每個交易日自動計算進出場訊號，並以回測誠實比較策略與定期定額的長期表現。
date: 2026-07-01
tags: [Python, Pandas, FinMind API, Backtesting, GitHub Actions, GitHub Pages]
github: https://github.com/Ping-Hsun-Chiang/2X-ETF-monitor
demo: https://ping-hsun-chiang.github.io/2X-ETF-monitor/
---

## 解決什麼問題

操作槓桿 ETF 時容易憑感覺進出場、需要每天盯盤，也不知道策略是否真的有效。這個工具把進出場規則寫成程式，每天自動算好訊號，並用歷史資料驗證策略。純顯示用途，不自動下單。

## 技術重點

- **全自動資料管線**：GitHub Actions 每個交易日收盤後抓取資料、計算訊號與回測，前端為部署於 GitHub Pages 的靜態網頁，零維運成本
- **股票分割還原**：還原分割前的歷史價格，避免均線與跌幅在分割日產生假訊號
- **回測與基準比較**：以資本池分批投入模型回測五種策略，並與 0050 及標的本身的定期定額並排比較
- **可擴充設計**：所有標的共用同一套策略引擎與前端模板，新增 ETF 只需執行一支 script

## 成果

- 監控四檔 2 倍槓桿 ETF，每個交易日自動更新，全程零人工介入
- 回測發現在 2021～2026 的多頭行情中，波段策略的長期報酬不如單純定期定額，如實呈現策略的侷限
