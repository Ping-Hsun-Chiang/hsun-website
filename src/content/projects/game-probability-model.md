---
title: 老虎機機率模型
subtitle: Game Probability Model
summary: 設計 RTP = 95%、高波動性（σ ≈ 7.77）的老虎機數學模型，並以 10,000 位玩家的蒙地卡羅模擬驗證理論 RTP，誤差小於 0.01%。
date: 2026-04-01
tags: [Python, NumPy, Matplotlib, Monte Carlo, Probability Model]
github: https://github.com/Ping-Hsun-Chiang/game-probability-model
---

## 解決什麼問題

設計一套兼顧玩家體驗與公司風控的老虎機遊戲數學模型，目標為 RTP = 95%、高波動性（σ ≈ 7.77）。

## 我負責的部分

完整的數學模型設計、理論推導與模擬驗證。

## 技術重點

- **數學建模**：從賠付表設計出發，推導 Variance 與 Hit Frequency
- **蒙地卡羅模擬**：以 Python 對 10,000 位玩家進行模擬，驗證理論值
- **視覺化分析**：玩家體驗曲線、公司 P&L、RTP 收斂分析

## 成果

- 理論 RTP 與模擬結果誤差小於 0.01%
- 產出五張視覺化圖表，完整呈現遊戲數學設計與風控邏輯
