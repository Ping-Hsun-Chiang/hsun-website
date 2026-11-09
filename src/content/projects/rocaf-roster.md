---
title: 營區站哨排班系統
subtitle: ROCAF Roster
summary: 以限制滿足演算法自動產生營區每日站哨表，保證符合歇哨與灰色時段規定，並以統計檢定驗證勤務分配的公平性。
date: 2026-10-01
tags: [Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Constraint Satisfaction, Python, Statistical Testing, Vercel]
github: https://github.com/Ping-Hsun-Chiang/ROCAF-roster
demo: https://rocaf-roster.vercel.app
---

## 解決什麼問題

營區哨所 24 小時運作，每天 24 個班次。人工排表耗時，還要同時顧及哨長資格、跨日歇哨、灰色時段不可連排等規定，並讓每個人的勤務負擔公平，很容易出錯。

## 技術重點

- **排哨演算法**：以 Backtracking 搭配 MRV heuristic 處理硬性規定，依公平值分配勤務；排不滿時改以多輪隨機 greedy 找出空缺最少的結果，並標示原因
- **以統計驗證公平性**：設計 12 種情境模擬，並與「只守規定、隨機排人」的對照組比較，以 Mann-Whitney U 與卡方檢定確認公平是演算法的功勞
- **可重現的實驗紀錄**：每次調整都留下實驗報告與 notebook，並以 Python 獨立重算 TypeScript 的結果，藉此找出並修正統計函式的 bug
- **持續驗證**：GitHub Actions 在每次 push 時執行測試與模擬門檻檢查，避免修改程式時公平性不知不覺變差

## 成果

- 產生的哨表保證符合所有硬性規定，並可人工微調、即時檢查
- 勤務分配偏差約為隨機排班的 1/10 到 1/20（p < 0.001）
- 已部署於 Vercel 上線使用（需登入）
