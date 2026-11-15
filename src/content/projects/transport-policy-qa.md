---
title: 台灣運輸法規問答系統
subtitle: Taiwan Transport Policy QA
summary: 完全在本機執行的 RAG 問答系統，以自然語言詢問公路與運輸法規，答案只根據真實條文生成，並附上法規名稱、條號與官方連結。
date: 2026-11-01
tags: [Python, LangChain, RAG, Ollama, ChromaDB, Hugging Face, LLM]
github: https://github.com/Ping-Hsun-Chiang/RAG-transport-policy-qa
---

## 解決什麼問題

查交通法規時，自己翻法規資料庫得先知道是哪一部法規、哪一條；直接問聊天機器人則可能得到編造的條號或錯誤的罰鍰金額，而且無從查證。這個系統讓使用者以自然語言提問，答案只根據真實條文生成、每一句都能追溯到出處，且不需 API Key、資料不離開本機。

## 技術重點

- **依法規結構切塊**：以「條」為單位切塊並保留章節資訊，修復 PDF 斷行，每個 chunk 加上法規與條號標頭，避免固定長度切塊把條文切得支離破碎
- **本機 RAG 管線**：以 bge-m3 產生 Embedding、存入 ChromaDB，檢索後交給 Ollama 上的 qwen2.5 生成答案，全程離線可用
- **防止幻覺**：檢索相似度低於門檻時由程式直接拒答、不呼叫 LLM；Prompt 要求只根據條文作答，且數字必須與條文一致
- **檢索評估**：建立人工標註題組，以 Hit@K 與 MRR 量化檢索品質

## 成果

- 收錄公路法、汽車運輸業管理規則、道路交通管理處罰條例共 406 條條文
- 檢索評估 Hit@5 達 100%、MRR 1.000，無關問題可在呼叫 LLM 前被擋下
- 每個答案附上引用條文、相似度與全國法規資料庫官方連結，可逐一查證
