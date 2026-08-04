---
title: ASML — the EUV Monopoly
lens: ai
status: open
opened: 2026-08-04
last_seen: 2026-08-04
weight: 3
entities:
- asml
- tsmc
- samsung
- intel
- sk-hynix
- mistral-ai
thread_kind: story
blurb: 'Guidance is climbing (€36-40B to €43-45B for FY2026) while the China fight
  runs on three fronts at once: the MATCH Act would extend controls to DUV tools generally,
  not just EUV, and passed House committee; Commerce''s Lutnick opened a still-unresolved
  inquiry into whether an EUV tool illegally reached China (ASML denies it); and China''s
  own Shanghai Aishengna is now shipping domestic DUV units to SMIC/Hua Hong/CXMT,
  though independent forecasts put a genuinely competitive 7nm domestic scanner a
  decade out, not this year. High-NA adoption is splitting the big three — Intel shipped
  first, TSMC opted out for A14 on cost, Samsung/SK Hynix are ordering. The Mistral
  stake (11%, active board seat) has no confirmed follow-on yet. Next: Q3 2026 earnings,
  MATCH Act''s Senate/NDAA fate, Lutnick inquiry resolution.'
---

## ← Backstory

<!-- /crawl appends below; finding pointer goes in the heading line -->

### 2026-08-04 — China lithography roadmap review; DUV pace confirmed, EUV prototype still chipless

- **A same-day roadmap review confirms China's domestic tool-maker
  Shanghai Aishengna is on pace for roughly 5 immersion DUV machines a
  year**, and notes China's separate Shenzhen-based EUV prototype effort
  has **produced no usable chips yet**. (Tom's Hardware — headline-level,
  full body not retrievable) ⟨crawl 2026-08-04⟩

### 2026-08-02 — CXMT's LPDDR6 push shows a DUV performance ceiling (unverified)

- **TechTimes reports CXMT nearing LPDDR6 memory production but flags a
  12.8 Gbps vs. 14.4 Gbps performance gap** attributed to China's
  DUV-only (no EUV) manufacturing ceiling — thin: article body was
  blocked (403), headline only. ⟨crawl 2026-08-04⟩

### 2026-07-30 — Domestic 7nm scanner forecast lands much later than the breaking story implied

- **An AI Futures Project forecast (June 2026) puts a commercially viable
  Chinese domestic 7nm immersion scanner between 2032 and 2038 (median
  2035)** — far beyond the "delivered this year" framing of the
  2026-07-28 breaking story below. (Tom's Hardware — headline/snippet
  confirmed, full body not retrievable) ⟨crawl 2026-08-04⟩

### 2026-07-29 — The reverse-engineering ceiling, explained

- **A full-text policy piece (War on the Rocks) lays out why China's EUV
  reverse-engineering push can't just leapfrog ASML:** ASML's EUV
  machines have 100,000+ components (700,000 at subsystem level) from
  ~5,000 suppliers, cost ~$180M (standard) to ~$380M (High-NA), and
  depend on tacit, path-dependent systems-integration knowledge that
  component-level reverse engineering (reported use of former ASML
  engineers, per a Dec-2025 report) doesn't capture — plus supply-chain
  chokepoints entirely outside China's reach: Japanese photoresist makers
  JSR/TOK/Shin-Etsu, Tokyo Electron's near-monopoly on EUV photoresist
  coaters/developers, Hoya/AGC on mask blanks, KLA on metrology, and
  Lasertec's near-monopoly on actinic mask inspection. ASML also runs
  ~10,000 field-support engineers who need close to a year of training
  each — a services moat on top of the hardware one. ⟨crawl 2026-08-04⟩

### 2026-07-28 — Shanghai Aishengna named as China's first domestic immersion-DUV maker

- **Shanghai Aishengna Electronic Technology Group** (state-owned,
  founded 2023, ~7B yuan/~$1B registered capital, absorbing engineering
  teams from Huawei-affiliated startup Yuliangsheng and state scanner
  maker SMEE) is confirmed as the maker behind China's first
  domestically-produced immersion DUV lithography tools — **~5 units
  targeted for 2026, ~20 for 2027**, with first deliveries to **SMIC,
  Hua Hong, and CXMT** this year for production-line validation (SMIC
  reportedly testing a unit since 2025-09). The tool prints 28nm-class
  features in a single exposure (7nm-class only via multi-patterning) —
  consistently described as "a generation behind" ASML, which still
  holds an estimated ~98.7% of the global immersion-lithography market.
  This is the same story this repo's `china-duv-lithography` thread
  already tracks; the identity and detail here are fresher.
  (TrendForce, corroborated by Tom's Hardware/TechPowerUp/TechTimes)
  ⟨crawl 2026-08-04⟩

### 2026-06-24 — Dutch government still irritated over MATCH Act's reach

- **Dutch government reported "irritated" by new US ASML restriction
  plans**, continuing pushback that began with April's royal visit to
  Washington below. (NL Times) ⟨crawl 2026-08-04⟩

### 2026-06-19/21 — ASML denies an EUV tool ever reached China

- **ASML publicly denied allegations behind the Lutnick inquiry** (below):
  the company states **none of its 314 operational EUV machines
  worldwide (plus 26 decommissioned) are located in China**, calling the
  allegations "false and reputation-damaging." A confirmed violation
  would breach the multilateral Wassenaar Arrangement. No source found
  confirms a resolution either way as of this crawl (2026-08-04) — the
  matter appears to remain open. (TechTimes, Asia Times) ⟨crawl 2026-08-04⟩

### 2026-07-15 — Q2 2026 earnings: guidance raised again, and Intel ships the first High-NA logic chips

- **ASML's Q2 2026 results: €9.3B net sales, €2.9B net income (31.3%
  margin), 54.0% gross margin, €7.59 EPS**, 86 new + 5 used systems sold,
  system mix Logic 51%/Memory 49%, free cash flow €1.3B. **Full-year 2026
  guidance raised to €43-45B net sales, 54-56% gross margin** (up from
  April's €36-40B/51-53%); Q3 2026 guided €11.0-12.0B revenue, 55-57%
  gross margin. Quarterly net-bookings disclosure appears to have quietly
  stopped — H1 order intake was only characterized as "very strong." 2027
  EUV order coverage called "close to being fully covered," with a
  planned 30% capacity increase for both low-NA EUV and DUV immersion
  systems. (ASML press release / GlobeNewswire) ⟨crawl 2026-08-04⟩
- **Same day: Intel Foundry became the first company anywhere to ship
  high-volume commercial logic made with ASML's High-NA EUV tool** —
  select layers of Intel 18A-node Core Ultra Series 3 ("Panther Lake")
  chips, with yields on those "dual-qualified" layers already matching
  the established (lower-NA) platform. This is a production-readiness
  milestone on select layers, not a full-chip High-NA process yet.
  (ASML press release, corroborated by SiliconANGLE/Tom's Hardware/
  TechTimes) ⟨crawl 2026-08-04⟩
- **CFO Roger Dassen, same call: "We still look at China as approximately
  20% of our total net sales, so that percentage hasn't changed"** —
  attributed to domestic-led logic-chip demand moving in sync with
  global demand. This sits against a reported H1 2026 actual of 16%
  (down from 19% in Q1, 36% in Q4 2025) — the two figures aren't
  reconciled by any source found; both are carried rather than picked.
  (ASML Q2 2026 earnings call transcript) ⟨crawl 2026-08-04⟩

### 2026-04-15 — Q1 2026: guidance set with export-control risk already priced in

- **CEO Christophe Fouquet, Q1 2026 results:** full-year guidance set at
  €36-40B net sales, 51-53% gross margin, with Fouquet stating directly
  that "the bandwidth in our 2026 guidance accommodates potential
  outcomes of ongoing discussions around export controls" — guidance was
  built with the fight below already in mind. (ASML SEC 6-K) ⟨crawl 2026-08-04⟩

### 2026-04-02/08 — The MATCH Act: a real legislative vehicle targeting DUV, not just EUV

- **The MATCH Act (Multilateral Alignment of Technology Controls on
  Hardware Act) was introduced in both chambers** — House sponsor Rep.
  Michael Baumgartner; Senate companion S. 4281 (Sens. Pete Ricketts,
  Andy Kim, co-sponsored by Senate Democratic Leader Chuck Schumer). It
  would classify **all DUV immersion lithography tools** (not just EUV)
  as "covered semiconductor manufacturing equipment," give Commerce 150
  days to certify the Netherlands and Japan have matched US-style
  country-wide controls, or else unilaterally extend US jurisdiction via
  the Foreign Direct Product Rule. It later passed the House Foreign
  Affairs Committee (a countrywide cryogenic-etch ban was stripped first;
  DUV restrictions survived), reported as the "largest export control
  markup in the history of Congress." One analysis judges it will pass
  the House this year but not become law in the 119th Congress, with the
  Senate side possibly folded into the NDAA instead. ASML shares reportedly
  fell ~3.44% on the initial news. (Yahoo Finance, TechWireAsia, NBC News,
  ChinaTalk, Manufacturing Dive) ⟨crawl 2026-08-04⟩
- **Dutch PM Rob Jetten named ASML export controls as a primary reason
  for King Willem-Alexander and Queen Máxima's April 2026 state visit to
  Washington**, including a White House dinner with President Trump —
  talks described as "constructive but without consensus." (NL Times,
  MarketScreener, MLQ News) ⟨crawl 2026-08-04⟩
- **Around the same period, Commerce Secretary Howard Lutnick began
  privately questioning senior ASML executives** over a concern that an
  EUV lithography system may have reached China in violation of export
  controls — see ASML's denial above (2026-06-19/21). (Implicator.ai,
  TechTimes, Techzine, Foreign Policy Journal) ⟨crawl 2026-08-04⟩

### 2025-09-09 — ASML leads Mistral AI's Series C, becomes its largest shareholder

- **ASML invested €1.3B (~$1.5B) as lead investor in Mistral AI's Series
  C**, taking an ~11% fully-diluted stake and valuing Mistral at
  ~$13.8-14B — ASML's largest single shareholder. ASML CFO Roger Dassen
  holds the company's seat on Mistral's Strategic Committee, confirmed
  still active into 2026. As of this crawl (2026-08-04): Mistral is
  reportedly "in talks" for a new round at ~$23B valuation (~$3.5B
  raise), but no source confirms whether ASML is participating — status
  unresolved. (CNBC, ASML press release, ASML governance page, Yahoo
  Finance) ⟨crawl 2026-08-04⟩

### 2024-12-05 — The standing US legal mechanism (background)

- **BIS's Foreign-Produced Direct Product Rule update set a 0%
  de-minimis threshold for certain lithography equipment**, giving the
  US jurisdiction leverage over ASML indirectly via Cymer, its San
  Diego-based excimer-laser subsidiary — the active legal mechanism
  underneath the 2026 fight above, unchanged this crawl window.
  (Federal Register, doc 2024-28270) ⟨crawl 2026-08-04⟩
