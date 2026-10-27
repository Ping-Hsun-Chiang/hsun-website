---
title: 碩士論文
subtitle: 'DeepKriging on the Sphere: Basis Adaptation for Spherical Data'
summary: 獨立開發「球面深度克里金（Spherical DeepKriging）」預測架構，結合球面多解析度基底函數與深度神經網路，突破傳統 Kriging O(n³) 運算瓶頸，於 NASA AQUA 衛星全球大數據上全面優於泛克里金法。
date: 2026-01-01
tags: [Python, TensorFlow, JAX, Deep Learning, Spatial Statistics, Kriging]
paper: https://hdl.handle.net/11296/w533y6
featured: true
---

## 解決什麼問題

傳統空間模型在處理全球尺度巨量資料時，面臨投影造成的幾何失真；而傳統 Kriging 模型的運算複雜度高達 O(n³)，難以擴展到巨量資料。

## 我負責的部分

獨立開發「球面深度克里金（Spherical DeepKriging）」預測架構，涵蓋模型設計、實驗、大規模氣象數據收集與前處理、模型比較驗證，並完成碩士論文、通過口試。

## 技術重點

- **球面基底函數 × 深度學習**：將由球面幾何推導出的多解析度薄板樣條（TPS）基底函數整合至深度神經網路（DNN），學習並捕捉複雜且非線性的空間特徵
- **魯棒性最佳化**：針對真實數據中常見的離群值與厚尾誤差，於神經網路中導入 Huber 損失函數進行 Robust Optimization
- **壓力測試**：以包含不同噪聲與極端值的模擬情境（平穩高斯過程、高度非線性的 Eggholder 函數）驗證模型
- **真實大數據驗證**：分析 NASA AQUA 衛星數十萬筆全球溫度、降水與風速資料，並透過驗證集進行超參數調校以防止過度擬合

## 成果

- 在預測準確度與巨量資料擴展性上，全面且顯著優於傳統泛克里金法（Universal Kriging）與現有空間學習模型
- 完成碩士論文並通過口試
