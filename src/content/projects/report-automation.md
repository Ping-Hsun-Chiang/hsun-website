---
title: 報表自動化系統
summary: 將每月需人工整理的營運報表改為自動產生並寄送，每月節省約 40 小時人力。
date: 2023-08-15
tags: [Python, FastAPI, PostgreSQL, Docker]
order: 3
---

## 解決什麼問題

原本每月需由專人從多個系統匯出資料，再用 Excel 手動彙整，流程冗長且容易出錯。

## 我負責的部分

需求訪談、系統設計與後端開發。

## 技術重點

- 以 FastAPI 建立排程與查詢 API
- 從多個資料來源整合至 PostgreSQL
- 自動產生 Excel / PDF 報表並寄送給相關人員
- 以 Docker 容器化部署

## 成果

- 每月節省約 40 小時人工作業
- 報表錯誤率大幅下降
