---
title: 鞋槓青年球鞋電商網站
subtitle: Slashie Store
summary: 為球鞋代購小店打造的商品型錄網站與後台管理系統，前台展示預購與現貨並導向 LINE 詢問，後台整合入庫、上架、銷售到利潤計算。
date: 2026-07-01
tags: [Next.js, TypeScript, Tailwind CSS, Supabase, Vercel]
github: https://github.com/Ping-Hsun-Chiang/slashie-store
demo: https://slashie-store.vercel.app
---

## 解決什麼問題

小型球鞋代購店的庫存與帳務多半散落在 Excel 與聊天紀錄中，且二手鞋每雙鞋況不同、交易又在 LINE 上完成，一般電商平台難以套用。店主需要一個能展示商品、管理每一雙鞋，並算出實際利潤的工具。

## 技術重點

- **資料模型設計**：以「型號 × 品項」區分展示與庫存單位，並以資料庫約束確保二手鞋與預購名額不會被誤合併、同一雙鞋不會被賣兩次
- **資料安全**：以 Supabase Row Level Security 控管權限，訪客只能讀取上架商品，成本與買家資料僅限管理員存取
- **完整的後台流程**：入庫、上架、成交與利潤計算串成一套流程，刪除銷售紀錄即可完整還原
- **隨營運演進的 Schema**：以 migration 記錄資料庫變更，依店主實際使用情況新增或移除功能

## 成果

- 網站上線，提供預購代購、現貨（全新／二手）與配件的展示，並可一鍵帶入商品資訊到 LINE 詢問
- 店主可在後台自行管理分類、庫存與銷售，每筆成交自動算出利潤
