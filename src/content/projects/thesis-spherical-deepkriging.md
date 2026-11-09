---
title: 碩士論文
subtitle: 'DeepKriging on the Sphere: Basis Adaptation for Spherical Data'
summary: 提出 Spherical DeepKriging 預測模型，結合球面多解析度基底函數與深度神經網路，突破傳統 Kriging 的 O(n³) 運算瓶頸，並在 NASA AQUA 衛星二十萬筆全球資料上優於泛克里金法（Universal Kriging）。
date: 2026-01-01
tags: [Python, TensorFlow, JAX, Deep Learning, Spatial Statistics, Kriging]
paper: https://hdl.handle.net/11296/w533y6
featured: true
---

## 解決什麼問題

在估計全球尺度的空間場域資料時，傳統方法往往難以勝任：將地球表面投影至平面會造成幾何失真，而傳統 Kriging 模型的運算複雜度高達 O(n³)，面對巨量資料時幾乎無法進行估計。本研究提出能直接在球面上建模、並可擴展至巨量資料的預測模型，以解決上述問題。

## 技術重點

- **Spherical Basis Function × Deep Learning**：將由球面幾何推導出的多解析度薄板樣條（TPS）基底函數整合至深度神經網路（DNN），學習並捕捉複雜且非線性的空間特徵
- **Robust Loss Function**：將損失函數由 MSE 改為 Huber Loss，降低離群值與厚尾誤差對模型訓練的影響
- **Simulation Study**：設計包含不同噪聲與極端值的模擬情境（Stationary Gaussian Process、高度非線性的 Eggholder Function），系統性驗證模型的準確度與穩健性
- **Hyperparameter Tuning**：透過驗證集調校網路架構與訓練參數，兼顧預測表現並防止過度擬合
- **Large-Scale Real-World Validation**：分析 NASA AQUA 衛星二十萬筆全球溫度、降水與風速資料

## 成果

- 在模擬資料與 NASA 真實資料上，預測準確度皆優於傳統泛克里金法（Universal Kriging）與現有空間深度學習模型
- 突破 Kriging 的 O(n³) 運算瓶頸，可直接處理傳統方法難以負荷的全球巨量資料
