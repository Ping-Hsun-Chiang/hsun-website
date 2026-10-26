---
title: 碩士論文
subtitle: 'DeepKriging on the Sphere: Basis Adaptation for Spherical Data'
summary: 獨立開發「球面深度克里金（Spherical DeepKriging）」預測架構，結合球面多解析度基底函數與深度神經網路，突破傳統 Kriging O(n³) 運算瓶頸，於 NASA AQUA 衛星全球大數據上全面優於泛克里金法。
date: 2026-01-01
tags: [TensorFlow, JAX, Python, Spatial Statistics, Deep Learning, Kriging]
paper: https://hdl.handle.net/11296/w533y6
featured: true
---

在碩士階段，我為解決傳統空間模型在處理全球尺度巨量資料時面臨的投影幾何失真與傳統 Kriging 模型高達 O(n³) 的運算瓶頸，獨立開發了「球面深度克里金（Spherical DeepKriging）」預測架構。

此專案結合了機率統計理論與 AI 深度學習技術，將由球面幾何推導出的多解析度薄板樣條（TPS）基底函數，整合至深度神經網路（DNN）中，藉此學習並捕捉複雜且非線性的空間特徵；同時，針對真實數據中常見的離群值與厚尾誤差，我在神經網路中導入 Huber 損失函數進行模型的魯棒性最佳化（Robust Optimization）。

在模型驗證與測試工程方面，我建構了嚴謹的效能評估流程，不僅利用包含不同噪聲與極端值的模擬情境（如平穩高斯過程與高度非線性的 Eggholder 函數）進行壓力測試，更實際分析 NASA AQUA 衛星高達數十萬筆的全球溫度、降水與風速大數據，並透過驗證集進行超參數調校以防止模型過度擬合。

嚴格的量化測試結果證實，本架構在預測準確度指標與應對巨量資料的擴展性上，均全面且顯著地優於傳統的泛克里金法（Universal Kriging）與現有的空間學習模型，充分展現了我從機率演算法開發、巨量數據分析到嚴謹測試驗證的跨領域工程實戰能力。
