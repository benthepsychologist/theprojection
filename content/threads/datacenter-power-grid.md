---
title: Grid & Turbines
lens: ai
status: open
opened: 2026-07-24
last_seen: 2026-07-25
weight: 1
entities:
- spacex
parent: ai-power-buildout
thread_kind: story
blurb: The grid is the binding constraint (not chips) — interconnection queues exploding,
  hyperscalers self-supplying via gigawatt-scale gas, an equipment ceiling (turbines
  sold out to 2030, transformers ~3yr), and the ratepayer + environmental-justice
  fights. Watch the DOJ national- security shield over xAI's unpermitted turbines
  — the improvisation has outrun the regulatory system.
---

## 2026-08-05 — PJM's answer to the same-week Texas freeze: bring your own power or get cut off

- **PJM (the 13-state PA-to-Illinois grid operator) launched an "Interim
  Resource Adequacy Service"**: large loads (50MW+, i.e. essentially all
  data centers) must be registered, and must either secure their own
  bilateral power contracts (generation, storage, demand-response) or
  face curtailment ahead of other emergency measures once the rule bites
  in June 2027. States/utilities enforce it — PJM itself has no authority
  to curtail a customer directly — and can run their own "reliability
  backstop procurement" auctions to help data centers avoid curtailment.
  Trigger: capacity-auction costs hit $16.4B in the June auction, data
  centers were 38% of that, and PJM projects 30-34GW of new data-center
  demand by the early 2030s.
  ([Canary Media](https://www.canarymedia.com/articles/data-centers/pjm-data-center-plan)) ⟨daily 2026-08-05⟩
- **Filed alongside a separate, more immediate fix: a one-time "backstop"
  capacity auction**, submitted to FERC 2026-07-31, running 2026-09-30 to
  2026-10-21, to plug a 6.8GW shortfall from PJM's last base auction —
  can procure up to $20B in new generation capacity through 2027.
  ([Utility Dive](https://www.utilitydive.com/news/pjm-backstop-capacity-auction-ferc-data-centers/826792/)) ⟨daily 2026-08-05⟩
- 💡 **This thread went quiet 07-25 on the "equipment ceiling + DOJ
  shield" verdict; the story has moved from equipment scarcity to grid
  governance.** PJM is now doing structurally what Texas's PUCT/ERCOT
  freeze did procedurally the same week (see `ai-power-buildout` and
  `where-the-capex-lands`) — pushing the risk of an unbuilt or
  under-powered site back onto the developer instead of the ratepayer.
  ⟨daily 2026-08-05⟩

## 2026-07-24 — Opened + crawled

- **Thread opened** (ben-steer). ⟨steer 2026-07-24⟩
- **Verdict: severe, worsening, multi-dimensional — power is the gating
  factor.** The defining escalation is legal-political: the DOJ now invokes
  national security to keep unpermitted turbines running against a citizen
  Clean Air Act suit — the improvisation has outrun the regulatory system.
  ⚠ WebSearch budget exhausted (fan-out) — flagship + high-value claims
  re-verified via fetch; some figures RSS-only, flagged. ⟨crawl 2026-07-24⟩

## ← Backstory (crawl 2026-07-24 → artifacts/findings/datacenter-power-grid-2026-07-24.md)

## 2026-07 — The equipment ceiling + the ratepayer bill

- **GE Vernova's gas-turbine backlog hit 116 GW, sold out through 2030**
  ($176B total backlog, data-center orders >$5B YTD = 2x all of 2025) —
  even self-supply can't scale fast. Same week, PJM's market monitor:
  **data centers drove 38% of the latest capacity-auction charges (46%
  across four auctions)**; the 2028/29 auction cleared at the $325/MW-day
  price cap; FERC's chair warned PJM faces a "grave legitimacy crisis."
  ([GE Vernova](https://www.gevernova.com)) ⟨crawl 2026-07-24⟩

## 2026-06-16 — The DOJ national-security shield

- **The Trump DOJ moved to dismiss the NAACP Clean Air Act suit on
  national-security grounds** — arguing shutting the 57 unpermitted
  Southaven turbines threatens security because Grok "supports Department
  of War operations" (a DoD official called Grok "paramount national
  security," citing the Iran strikes). Converts an environmental-permitting
  fight into a federal-power question. Cross-refs `spacex-colossus`.
  ([NYT](https://www.nytimes.com/2026/06/16/climate/)) ⟨crawl 2026-07-24⟩

## 2026-04 — Improvising around the grid, at scale

- **Meta's "Hyperion" got ~7 new gas plants fast-tracked in Louisiana**
  (Entergy +$14B capex; a later ratepayer-protection order); **NAACP/SELC/
  Earthjustice sued xAI** over 27 unpermitted methane turbines (~495 MW,
  alleged 1,700+ t/yr NOx) at Southaven — "a de facto power plant without
  an air permit," in a historically Black neighborhood leading TN in asthma.
  ([Earthjustice](https://earthjustice.org)) ⟨crawl 2026-07-24⟩

## 2026-01 — EPA: the turbines ran illegally

- **EPA ruled xAI's Memphis turbines ran illegally** under a bogus
  "temporary" exemption — 35 operated, only 15 permitted. Memphis is really
  two braided sites: Colossus 1 (Boxtown, TN) + Colossus 2 (Southaven, MS).
  ([TechCrunch](https://techcrunch.com/2026/01/16/epa-rules-that-xais-natural-gas-generators-were-illegally-used/)) ⟨crawl 2026-07-24⟩

## Backstory — the queue + the equipment wall

- **ERCOT's large-load queue hit ~438 GW (+~300% YoY)**; large-transformer
  lead times are ~2.5–3yr (vs 4–6 weeks pre-pandemic), Wood Mackenzie
  projected a 30% transformer supply deficit; AEP Ohio's landmark
  data-center tariff (07-2025) is the template other states now copy
  (make data centers pay for their minimum contracted power). ⚠ ERCOT
  438GW + transformer figures RSS/secondary-sourced. ⟨crawl 2026-07-24⟩
