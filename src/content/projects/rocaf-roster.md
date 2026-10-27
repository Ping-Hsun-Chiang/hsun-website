---
title: 營區站哨排班系統
subtitle: ROCAF Roster
summary: 以限制滿足（Constraint Satisfaction）演算法自動產生營區每日站哨表，保證歇哨與灰色時段規定，並依公平值分配勤務。
date: 2026-10-01
tags: [Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Constraint Satisfaction, Vercel]
github: https://github.com/Ping-Hsun-Chiang/ROCAF-roster
demo: https://rocaf-roster.vercel.app
---

## 解決什麼問題

營區哨所 24 小時運作，一天 12 班、每班需哨長與槍兵各 1 人。人工排表耗時，還要同時顧及哨長資格、歇哨至少 6 小時（跨日計算）、灰色時段不可連續三天排給同一人、勤務負擔公平等規定，很容易出錯。

## 我負責的部分

待補充。

## 技術重點

- **排哨演算法**：以限制滿足（Constraint Satisfaction）演算法處理硬性規定，並依公平值分配勤務；核心為無外部依賴的 pure function 模組，網頁與測試共用
- **人工微調**：每一格皆可修改並即時檢查規定，改過的格子自動鎖定，重新排哨不會覆蓋
- **統計具冪等性**：上班天數與站哨節數由紀錄即時計算，重複儲存不會重複計算
- **資料安全**：Supabase Auth 登入，搭配 PostgreSQL Row Level Security（RLS）

## 成果

- 以演算法取代人工排表，產生的哨表保證符合歇哨、資格與灰色時段規定
- 已部署於 Vercel 上線使用（需登入）
