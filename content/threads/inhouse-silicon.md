---
title: In-House Silicon
lens: ai
status: open
opened: 2026-07-24
last_seen: 2026-07-25
weight: 2
entities:
- google
- amazon-aws
- microsoft
- meta-ai
- openai
- broadcom
parent: ai-compute-spend
thread_kind: story
blurb: The custom-silicon revolt (TPU/Trainium/Maia/MTIA) — real but INFERENCE- only,
  anchored by Anthropic running mostly off Nvidia on Trainium + TPU. Nvidia's absolute
  demand still grows; the clearest winners are the co- design houses (Broadcom, Marvell).
  Watch whether displacement reaches frontier training.
---

## 2026-07-24 — Opened + crawled

- **Thread opened** (ben-steer). ⟨steer 2026-07-24⟩
- **Verdict: diversification at the margin and on inference, not a rout.**
  The CUDA-vs-XLA software moat keeps Nvidia the default for anyone without
  a captive anchor customer; the "in-house" silicon is largely outsourced
  to Broadcom/Marvell. ⚠ WebSearch budget exhausted (fan-out) — primary-doc
  fetch path; Maia 200 + some codenames single-sourced, flagged. ⟨crawl 2026-07-24⟩

## ← Backstory (crawl 2026-07-24 → artifacts/findings/inhouse-silicon-2026-07-24.md)

## 2026-06 — Broadcom is the real winner

- **Broadcom's custom-AI revenue hit $10.8B in a single quarter (+143%
  YoY)**, guiding $29.4B next and reaffirming ">$100B AI revenue in 2027";
  ~6 hyperscaler XPU customers. Marvell (Trainium/Maia co-design)
  projecting ~$11B AI-ASIC revenue in 2026. The revolt enriches the
  co-designers.
  ([Reuters](https://www.reuters.com/business/broadcom-tumbles-revenue-miss-clouds-ai-boom-bets-2026-06-04/)) ⟨crawl 2026-07-24⟩

## 2026-04 — Google Ironwood + the Anthropic anchor

- **Ironwood (TPU v7) hit broad Cloud GA** (04-22); combined with the Oct
  2025 Anthropic–Google deal (up to 1M TPUs / >1GW in 2026, first phase
  400k Ironwood). SemiAnalysis: Ironwood ~44% lower TCO than a GB200 server;
  Anthropic ~52% lower TCO/PFLOP vs GB300 — the economics behind the revolt.
  ([SemiAnalysis](https://newsletter.semianalysis.com/p/tpuv7-google-takes-a-swing-at-the)) ⟨crawl 2026-07-24⟩

## 2026-03 — Meta MTIA: inference, not frontier

- **Meta's MTIA 300 in production** (ranking/rec), 400/450/500 on a 6-month
  cadence, "hundreds of thousands" deployed for inference — but explicitly
  NOT frontier-LLM training (Meta still buys Nvidia/AMD for that). The
  workload-specific pattern.
  ([Meta](https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/)) ⟨crawl 2026-07-24⟩

## 2026-01 — Microsoft the laggard

- **Maia 200 launched — inference-only** (TSMC 3nm, claims 30% better
  perf/$); next-gen "Braga" reportedly delayed into 2026. Microsoft is
  furthest behind and still overwhelmingly Nvidia-reliant for training. ⚠
  Maia 200 specs are a vendor claim, single-sourced — don't treat as
  independent benchmark.
  ([Microsoft](https://blogs.microsoft.com/blog/2026/01/26/maia-200-the-ai-accelerator-built-for-inference/)) ⟨crawl 2026-07-24⟩

## 2025-10→12 — The Anthropic-on-Amazon anchor

- **Amazon Trainium3 UltraServers GA** (re:Invent, up to 50% lower cost);
  **Project Rainier** live (~500k Trainium2 for Claude training, Indiana);
  AWS passed 1M+ Trainium deployed (+150% YoY); Anthropic committed >$100B
  to AWS/10yr, up to 5GW Trainium. A frontier lab running mostly off Nvidia
  is the strongest evidence the revolt is real.
  ([Anthropic](https://www.anthropic.com/news/anthropic-amazon-compute)) ⟨crawl 2026-07-24⟩
