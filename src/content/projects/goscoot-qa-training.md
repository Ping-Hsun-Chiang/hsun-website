---
title: GoScoot QA 實戰演練
subtitle: GoScoot QA Training
summary: 以智慧共享滑板車系統為情境的 QA 工程師訓練專案，涵蓋需求分析、測試案例設計、API 測試、缺陷管理與自動化測試策略。
date: 2026-05-01
tags: [QA, Test Case Design, API Testing, Python]
github: https://github.com/Ping-Hsun-Chiang/goscoot-qa-training
---

<!-- 初版內容整理自 README，請再微調 -->

## 專案情境

GoScoot 智慧共享滑板車系統，包含三個端點：

- **使用者端（App）**：掃碼解鎖、查看附近車輛、即時電量、信用卡扣款
- **車輛端（IoT）**：每 10 秒回傳 GPS 與電量，低電量降速／鎖車邏輯
- **營運端（後台 Web）**：即時軌跡、強制解鎖／鎖定、退費處理

## 演練階段

1. 需求分析與測試案例設計
2. API 測試與異常處理
3. Bug 報告與缺陷管理
4. 自動化與效能測試策略
