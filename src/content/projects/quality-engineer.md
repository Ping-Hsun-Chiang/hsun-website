---
title: 品質工程學習紀錄
subtitle: Quality Engineer Learning
summary: 系統整理品質工程的核心觀念與手法，並以 Python 實作 SPC 管制圖、GR&R 與 AQL 抽樣工具，搭配完整的 8D 模擬案例，把公式轉成實際的品質判斷。
date: 2026-11-01
tags: [Python, NumPy, Matplotlib, pytest, SPC, MSA, AQL, 8D, FMEA]
github: https://github.com/Ping-Hsun-Chiang/quality-engineer-learning
---

## 解決什麼問題

品質工程的知識分散在 ISO 標準、AIAG 手冊與各種教材中，名詞與縮寫繁多，只背定義很難講清楚 Cpk 與 Ppk、管制界限與規格界限的差異，也不知道遇到客訴時該如何實際處理。這個專案把觀念整理成筆記，統計方法親手寫程式算一遍，再用模擬案例把手法串起來。

## 技術重點

- **系統化筆記**：由基礎觀念、QC 七大手法、SPC、MSA、抽樣檢驗，到 8D、FMEA 與 ISO 9001／IATF 16949，共八個主題，每篇依「是什麼、何時用、怎麼做、面試怎麼問」的固定架構撰寫
- **SPC 工具**：以基準期建立 X̄-R 管制界限、套用 Nelson 8 條判異規則監控製程，並計算 Ca、Cp、Cpk、Pp、Ppk
- **GR&R 工具**：依 AIAG MSA 手冊的平均值與全距法計算 %GRR、ndc 與 %公差，並輸出四張分析圖找出變異來源
- **AQL 工具**：依 ISO 2859-1 查出抽樣計畫並處理表中的箭頭規則，以 OC 曲線比較不同計畫對供應商與客戶的風險
- **模擬案例**：以射出成型的卡扣毛邊客訴，完整寫出從圍堵、根因分析到水平展開的 8D 報告

## 成果

- 三支工具皆附範例數據與解讀，共 32 個 pytest 測試驗證計算結果
- 範例中，管制圖在量測值都還在規格內時就判定異常，比出現超規品提早 3 組發出警訊
- 透過 OC 曲線發現 C=0 抽樣不一定比較嚴格，對客戶的保護程度要看 LTPD 而不是允收數
