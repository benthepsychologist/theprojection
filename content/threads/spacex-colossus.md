---
title: Colossus
lens: ai
status: open
opened: 2026-07-24
last_seen: 2026-07-24
weight: 2
entities:
- spacex
- elon-musk
parent: where-the-capex-lands
thread_kind: project
blurb: SpaceXAI's self-owned training compute (Colossus, Memphis) — the "owns its
  mines" fact that makes it structurally distinct from OpenAI/Anthropic, who rent.
  Track the live GPU count + power draw, the reported scale-to-1M-GPU plan, grid/power
  constraints, and whether owning the mines translates into a frontier Grok. Feeds
  the "who controls the stack" thesis (radar Q1).
---

## 2026-07-24 — Opened + crawled

- **Thread opened** (ben-steer) — answering the SpaceXAI Q1 gap the board's
  `dormant` posture exposed. ⟨steer 2026-07-24⟩
- **The "owns its mines" thesis holds and then some.** Compute ownership is
  real, frontier-relevant (Grok 4 was trained on Colossus), and now so large
  that SpaceX *leases the older Colossus 1 to Anthropic* while training Grok
  on Colossus 2 — ownership became a revenue lever, not just a cost center.
  The binding constraints are power and permits, not silicon. ⟨crawl 2026-07-24⟩

## ← Backstory (crawl 2026-07-24 → artifacts/findings/spacex-colossus-2026-07-24.md)

## 2026-07-15 — The permit fight escalates

- **xAI ran ~59 gas turbines (57 in Southaven) for Colossus 2 without
  federal Clean Air permits**; DOJ (Trump admin) moved to shield them as a
  "national security" asset — a novel federal-cover angle.
  ([technology.org](https://www.technology.org/2026/07/15/xai-59-unpermitted-gas-turbines-southaven-colossus-2/)) ⟨crawl 2026-07-24⟩

## 2026-05-06 — Ownership becomes a revenue lever

- **Anthropic rents ALL of Colossus 1 (~220k GPUs, 300+ MW) for $1.25B/
  month through May 2029 (~$40B+)** — with a side-clause to explore orbital
  compute. SpaceXAI trains Grok on Colossus 2 while leasing the older
  cluster; cross-refs `ai-circular-financing-risk` (Anthropic, which
  "rents its mines", now rents from SpaceX too).
  ([CNBC](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html)) ⟨crawl 2026-07-24⟩

## 2026-04-14 — The environmental-justice suit

- **NAACP / SELC / Earthjustice filed a Clean Air Act suit** over 27
  unpermitted turbines at Colossus 2 (~$124k/day penalties sought); the
  plant could emit >1,700 tons NOx/yr — the largest NOx source in metro
  Memphis, in majority-Black tracts at the 95th–99th EJScreen percentile.
  ([Earthjustice](https://earthjustice.org/press/2026/naacp-asks-court-for-emergency-action-to-stop-illegal-air-pollution-from-xais-data-center-power-plant)) ⟨crawl 2026-07-24⟩

## 2026-02-02 — Absorbed into SpaceX

- **SpaceX absorbed xAI (which already held X) at $1.25T combined** ($1T
  SpaceX + $250B xAI) — the largest merger ever; SpaceX cash flow now
  underwrites the data-center burn. (Corrects our earlier "~$2.1T" figure —
  see `spacexai-public-megacap`.)
  ([Bloomberg](https://www.bloomberg.com/news/articles/2026-02-02/elon-musk-s-spacex-said-to-combine-with-xai-ahead-of-mega-ipo)) ⟨crawl 2026-07-24⟩

## 2025-07-09 — The payoff datapoint

- **Grok 4 released, trained on Colossus (200k GPUs)** — first model to hit
  50% on Humanity's Last Exam, genuinely frontier at launch. The proof that
  owning the mines produced a frontier model at least once.
  ([x.ai](https://x.ai/news/grok-4)) ⟨crawl 2026-07-24⟩

## 2024-09 → 2025-05 — The buildout

- **Colossus online: 100k H100 in 122 days** (Sept 2024), doubled to 200k
  ~92 days later; fully operational at 200k GPUs by May 2025 (150 MW grid
  via MLGW+TVA + 150 MW Tesla Megapack backup), then ~230k (150k H100 +
  50k H200 + 30k GB200) by Dec 2025.
  ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-colossus-is-fully-operational-with-200-000-gpus-backed-by-tesla-batteries-phase-2-to-consume-300-mw-enough-to-power-300-000-homes)) ⟨crawl 2026-07-24⟩

## Scale, honestly — confirmed vs. reported

- **Confirmed floor:** ~230k GPUs operational (Colossus 1), ~250 MW draw —
  now leased to Anthropic, not running Grok.
- **Reported ceiling:** the widely-cited ~555k GPUs / ~2 GW / ~$18B headline
  is analyst-derived (SemiAnalysis), NOT an xAI disclosure — it bundles
  Colossus 1 + the ramping Colossus 2 and mixes live with target. Treat as
  direction of travel, not a live count. The 1M-GPU plan is Musk's roadmap,
  reported not delivered. ⟨crawl 2026-07-24⟩
