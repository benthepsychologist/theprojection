---
title: China's Stack
lens: ai
status: open
opened: 2026-07-22
last_seen: 2026-08-06
weight: 3
entities:
- zhipu-ai
- moonshot-ai
- alibaba-qwen
- deepseek
thread_kind: meta
blurb: 'One story, both directions: Z.AI''s 1 GW all-domestic-chip site, Kimi K3 /
  Qwen3.8-Max, Alibaba open-sourcing the Zhenwu stack, Moonshot''s HKEX plan — and
  Washington''s response (Commerce retreating from a model ban toward procurement/hosting
  rules; September US-China talks) plus Beijing''s own proposed export controls on
  its models/chips. US chip-equity reaction is the measure.'
---

## 2026-08-04→05 — A domestic-toolmaker substitution story, a chip-stock rally, and a US import threat that boomerangs onto US suppliers

- **Chinese tech firms are reportedly evaluating domestic toolmaker AMEC
  (Advanced Micro-Fabrication Equipment) as a substitute for Applied
  Materials' and Lam Research's etching tools** at Chinese fabs — a direct
  substitution move against the two named US equipment makers, who are
  themselves exposed to further export-restriction risk. ⚠ Outlet-named
  but full article text/URL not yet retrieved (Reuters, via Bloomberg's
  Points of Return newsletter, corroborated by China market wires);
  flagged for a depth pass. ⟨daily 2026-08-06⟩
- **China's AI/chip-linked stock indices rallied hard on 08-04** — CSI
  Artificial Intelligence Index +5.9%, CSI Semiconductor +4.9%, ChiNext
  +5.7%, STAR 50 +4.1%, CSI 300 +1.3% — on a new Artificial Analysis
  benchmark finding that a version of DeepSeek's flagship model is "by far
  the least expensive to run on benchmark tests among well-known models
  globally"; JPMorgan called the prior selloff "a healthy rotation rather
  than the end of the cycle" and expects "AI to reassert market leadership
  into August." (Reuters wire, via Business Recorder/Free Malaysia Today,
  08-04 17:33; full URL not yet retrieved) ⟨daily 2026-08-06⟩
- **The FCC is reportedly weighing restrictions on Chinese-made optical
  transceivers** — the devices linking AI servers to each other — a move
  that would cut into the ~$31B market where China's Innolight and
  Eoptolink hold 60%+ global share, but would also cut demand for the US
  chips (Broadcom, Marvell digital signal processors, ~40% of
  manufacturing cost) inside those same transceivers, extending exposure
  to Nvidia and AMD by extension — a US policy lever that boomerangs onto
  its own supply chain. (Benzinga, 08-05; full URL not yet retrieved)
  ⟨daily 2026-08-06⟩
- 💡 **Read together, these three are the same axis from three different
  angles** — China substituting equipment, markets pricing Chinese AI cost
  advantage, and a US policy tool that hits US firms as hard as Chinese
  ones. None is independently a reset; the FCC transceiver angle is the
  one worth a depth pass since it's a genuinely new mechanism, not a
  repeat of the chip-export storyline already on this thread. ⟨daily
  2026-08-06⟩

## 2026-08-03 — Alibaba ships Qwen3.8-Max, the first Chinese frontier-scale head-to-head vs a US model

- **Alibaba unveiled Qwen3.8-Max, benchmarked head-to-head against
  GPT-5.6 Sol** — 2.4T total / 95B active parameters (MoE), 1M-token-class
  context, with open weights promised to Hugging Face/ModelScope "next
  week"; it posts TerminalBench 2.1 86.6 (vs Sol's 88.8) and PaperBench
  93, the first Chinese lab explicitly benchmarking at this scale against
  a US frontier model.
  ([the-decoder](https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/)) ⟨daily 2026-08-03⟩
- **Huawei's chief semiconductor scientist declares Nvidia's scale-up path
  finite** — Liao Heng: "there has to be a limit in how they scale up with
  ever-increasing compute die and more HBM. Once they cross that physical
  limit, there will be an avalanche," promising Huawei's alternative (a "Tau
  Scaling Law" using "LogicFolding") "later this year" alongside a
  smartphone chip built on it.
  ([The Star](https://www.thestar.com.my/tech/tech-news/2026/08/04/huaweis-top-scientist-warns-of-chip-limit-nvidia-will-soon-face)) ⟨daily 2026-08-03⟩
- 💡 **Read it as positioning with a deferred proof.** A supply-constrained
  competitor announcing that the leader's roadmap terminates, with evidence
  postponed to an unshipped product, is an argument about which axis the
  race runs on — not yet a demonstration. What makes it thread-relevant is
  that Huawei is now committing publicly to a *different* architecture
  rather than claiming parity on Nvidia's. ⟨daily 2026-08-03⟩

## 2026-08-02 — DeepSeek used for an autonomous attack campaign after Claude and Codex refused

- **A Zhuhai-based threat actor using the aliases *knaithe* and *KnYuan*
  wired DeepSeek into the open-source Hermes Agent framework**, drove it
  from a single Telegram command, and ran an autonomous
  scan-research-exploit pipeline against more than 460 internet-facing
  targets, staging or exploiting 7 CVEs across Langflow, n8n and Citrix
  NetScaler among others. Unit 42 report published 2026-07-30.
  ([Unit 42](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)) ⟨daily 2026-08-02⟩
- **The actor tried Claude Code and OpenAI's Codex first and both
  platforms' safety controls blocked the offensive use**; the switch to
  DeepSeek, reached directly by API with no equivalent guardrail, is what
  made the campaign viable. The actor also tested Qwen, GLM, Kimi and
  MiniMax.
  ([Unit 42](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)) ⟨daily 2026-08-02⟩
- **Unit 42 calls this the first confirmed real-world evidence** both that
  autonomous AI-driven attack cycles are operationally viable and that
  provider-side safety controls have measurable defensive value.
  ([Unit 42](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)) ⟨daily 2026-08-02⟩
- **The campaign was discovered only because Hermes accidentally exposed a
  web server from its own home directory**, leaking API keys, exploit
  scripts and attack logs.
  ([Unit 42](https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/)) ⟨daily 2026-08-02⟩
- **This was caught two days late** — the Unit 42 report is dated 07-30,
  and today's entry is the first record of it here. ⟨daily 2026-08-02⟩

## 2026-07-31 (later) — DeepSeek ships V4-Flash, and it beats DeepSeek's own flagship

- **DeepSeek put `V4-Flash-0731` into public API beta, claiming it beats
  its own V4-Pro-Preview flagship on all nine published agent and coding
  benchmarks.** A cheaper model outscoring the vendor's own top-line
  model — from the lab whose price pressure the OpenAI Luna cut below is
  read as a response to. The sequencing matters for this thread: the US
  price cut came first, this shipped hours later.
  ([TechNode](https://technode.com/2026/07/31/deepseek-puts-v4-flash-api-into-public-beta/)) ⟨daily 2026-07-31⟩
- **Correction to the day's framing:** the 07-31 digest recorded "nothing
  shipped today," which was true of the four US labs it checked and wrong
  as a statement about the day. Logged so the pattern is visible — the
  release-watch question this thread carries is not a US-only question.
  ⟨daily 2026-07-31, corrected 2026-08-01⟩

## 2026-07-30 (later) — DeepSeek is building a 1GW campus in Inner Mongolia and may file to IPO this year

<!-- Added at finalize ⟨2026-08-01⟩; Bloomberg's tech-capital lead for
     07-30, missed on the day and caught by the coverage critic. -->

- **DeepSeek is developing a roughly 1GW AI data-center campus in
  Ulanqab, Inner Mongolia**, targeting partial capacity late 2027/early
  2028, building some itself and leasing the rest, with the chip vendor
  (Nvidia vs. Huawei) still undecided — that last point being the part
  this thread cares about most.
  ([Bloomberg](https://www.bloomberg.com/news/articles/2026-07-30/deepseek-is-developing-massive-ai-data-center-in-inner-mongolia)) ⟨daily 2026-07-30, added 2026-08-01⟩
- **Separately, DeepSeek could file for an IPO as soon as this year**,
  following a reported $7B raise at roughly a $50B valuation. Read
  alongside the 07-30 note that DeepSeek had *paused* a larger ~$74B
  raise: the pause was of one round, not of the capital programme.
  Chinese labs are now raising infrastructure financing at US scale.
  ⟨daily 2026-07-30, added 2026-08-01⟩

## 2026-07-31 — OpenAI cuts GPT-5.6 pricing 80%, read by the press as a China-pressure response

- **OpenAI cut GPT-5.6 Luna pricing 80% (Terra 20%)** — press coverage
  frames it as a response to cheap Chinese open-weight competition
  (DeepSeek, Kimi K3, MiniMax) undercutting on price, though OpenAI's own
  stated rationale was infrastructure efficiency (GPU utilization,
  speculative decoding) — the China-competition read is press inference,
  not a company statement.
  ([the-decoder](https://the-decoder.com/openai-goes-full-china-pricing-mode-with-an-80-percent-cut-to-its-most-affordable-gpt-5-6-model/), [CNBC](https://www.cnbc.com/2026/07/30/open-ai-price-cut-gpt.html)) ⟨daily 2026-07-31⟩ — confidence: medium on the causal framing specifically.

## 2026-07-30 — Moonshot's raise closes smaller than reported; DeepSeek pauses its own

- **Moonshot's Series F closed at $35B, not the $50B target** flagged
  07-22 — $3.5B raised. Confirmed via Bloomberg + 10 outlets; some
  aggregators still repeat the stale $50B figure. ⟨daily 2026-07-30⟩
- **DeepSeek separately paused its own ~$74B second raise**, after
  founder Liang Wenfeng's May-20 closed-door remarks (leaked via GitHub
  07-22, Bloomberg reported 07-25) describing obtaining "noncompliant"
  (smuggled) Nvidia chips and ~20,000 H-series-equivalent compute —
  echoing the export-evasion angle already open on Moonshot. ⟨daily 2026-07-30⟩

## 2026-07-28 — China starts mass-producing its own immersion DUV

- **Reuters names the maker: Shanghai Aishengna Electronic Technology
  Group**, state-owned, assembled by absorbing lithography-startup teams —
  China's first *mass-produced* immersion DUV tool. **~5 units targeted
  for 2026, ~20 for 2027**, with **SMIC, Hua Hong and CXMT** the expected
  first recipients this year.
  ([Reuters](https://www.globalbankingandfinance.com/exclusive-china-starts-production-home-grown-immersion-duv/)) ⟨daily 2026-07-28⟩
- **The caveat is the story's other half** — the tools are "far from
  matching" ASML's competing models and are unproven at high-volume
  manufacturing. This is a first rung, not parity. What makes it thread
  news anyway: the chokepoint assumption is now testable against a
  shipping product with named recipients and a unit count, rather than
  against a prototype demo. Ledger entry opened on the 2026 unit target. ⟨daily 2026-07-28⟩
- **It priced immediately** — cited across the tape as a catalyst for the
  fourth straight losing session in the chip complex, and for Korea's
  second circuit breaker in two days. ⟨daily 2026-07-28⟩

## 2026-07-23 — The White House names a name

- **OSTP Director Michael Kratsios directly accused Moonshot of
  distilling Anthropic's Fable model to build Kimi K3** — the first time a
  senior US official has named a specific Chinese lab; separately
  alleged Moonshot obtained restricted Nvidia GB300 chips via Thailand.
  Treasury Secretary Bessent: "sanctions and the Entity List are both on
  the table." Under Secretary of State Helberg called it a "heist of
  invaluable American IP."
  ([SCMP](https://www.scmp.com/tech/tech-war/article/3361625/global-ai-experts-push-back-us-distillation-claims-against-moonshots-kimi-k3-model)) ⟨daily 2026-07-23⟩
- **Moonshot denies it** — only 15 days elapsed between Fable's July 1
  release and K3's July 15 launch; independent researchers (Redwood's
  Ryan Greenblatt) call the evidence "thinner than official statements
  suggest," circumstantial (K3 self-identifying as Claude at unusual
  rates has innocent explanations — scraped transcripts, leaked system
  prompts). Lands right before K3's open weights ship (07-27), adding
  legal-risk overhang for adopters.
  ⟨daily 2026-07-23⟩
- **China separately weighing its own tighter export controls** on AI
  models and chips — MofCom reportedly consulting Alibaba/ByteDance on
  restricting overseas transfer of training data and model weights.
  ⟨daily 2026-07-23⟩
- **Cross-thread irony**: Hugging Face used Zhipu's open-weight GLM-5.2
  to investigate `openai-containment-breach` — a Chinese open model
  defending against a US lab's rogue AI, the same day this accusation
  landed. ⟨daily 2026-07-23⟩
- **2026-07-24: split out** — the Kratsios/Bessent distillation accusation
  above now has its own thread, `kimi-distillation-fight` (ben-steer);
  further developments on that specific story land there, not here.
  ⟨steer 2026-07-24⟩

## 2026-07-22 — Washington splits; the exits line up

- **Bessent threatened sanctions on Chinese model makers** (07-21, on
  air) — "watermarks of our US LLMs" on Chinese models; trigger named as
  Kimi K3.
  ([SiliconANGLE](https://siliconangle.com/2026/07/21/u-s-treasury-secretary-bessent-threatens-sanctions-chinese-ai-model-makers/)) ⟨daily 2026-07-22⟩
- **Huang pushed back** — US firms should be free to use "excellent"
  Chinese open models; adoption grows chip demand, monoculture is the
  risk.
  ([Yahoo/Axios](https://finance.yahoo.com/technology/ai/articles/jensen-huang-says-u-firms-131327067.html)) ⟨daily 2026-07-22⟩
- **Moonshot plans a final pre-IPO round at $50B** (Aug; ARR $300M in
  June, ×3 since March) — HKEX targeted within 6 months.
  ([TechNode](https://technode.com/2026/07/22/moonshot-ai-reportedly-plans-final-pre-ipo-round-at-50-billion-valuation/)) ⟨daily 2026-07-22⟩

## 2026-07-21 — Washington recalibrates, Beijing gates

- **Commerce backed away from banning Chinese AI models** — procurement
  pressure and hosting rules weighed instead.
  ([The Neuron](https://www.theneurondaily.com/p/cheap-ai-got-political)) ⟨daily 2026-07-21⟩
- **US–China official AI talks set for September** — military AI, cyber,
  model access, open weights on the agenda.
  ([Tech Startups](https://techstartups.com/2026/07/21/top-tech-news-today-july-21-2026-anthropic-blackrock-tesla/)) ⟨daily 2026-07-21⟩
- **Moonshot suspended new Kimi K3 subscriptions** on capacity; open
  weights still slated 07-27.
  ([BuildFastWithAI](https://www.buildfastwithai.com/blogs/ai-news-today-july-21-2026)) ⟨daily 2026-07-21⟩

## 2026-07-20 — The gigawatt statement

- **Z.AI completed a 1 GW data center on all-Chinese chips** — training
  site independent of restricted Nvidia hardware.
  ([Bloomberg](https://www.bloomberg.com/news/articles/2026-07-20/z-ai-completes-giant-data-center-with-chinese-chips-to-train-ai)) ⟨daily 2026-07-20⟩
- **Beijing weighed export controls on its own stack** — models, weights,
  training data, chip designs.
  ([Reuters via Yahoo](https://finance.yahoo.com/technology/ai/articles/china-considers-tighter-export-controls-041139427.html)) ⟨daily 2026-07-20⟩
- **Qwen3.8-Max (2.4T) previewed days after Kimi K3**; Nvidia tested $200
  support as the chip selloff continued.
  ([MarkTechPost](https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/)) ⟨daily 2026-07-20⟩

## ← Backstory

## 2026-07-17 — The trigger

- **Kimi K3 topped a coding benchmark and triggered the chip selloff** —
  the "DeepSeek-moment" echo that made this one story. ⟨seed 2026-07-22⟩

## 2026-07-19→21 — The market priced it (crawl)

- **Chinese equities shed $1.48T over two weeks** (STAR −25% from July
  peak; Q2 GDP 4.3%) and the **"national team" injected ~$8.9B** (China
  Reform + Chengtong, insurer pledges, 300+ buybacks).
  ([Epoch Times](https://www.theepochtimes.com/china/after-a-1-48-trillion-selloff-chinas-national-team-steps-in-to-steady-stocks-6065409)) ⟨crawl 2026-07-22⟩
- **Qwen3.8-Max's "second only to Fable 5" claim disputed** — an
  independent StackPerf run scored Kimi K3 83 vs 80 over it.
  ([Cherry Creek News](https://thecherrycreeknews.com/alibaba-qwen-3-8-max-second-only-to-fable-5-first-benchmark-cherry_creek/)) ⟨crawl 2026-07-22⟩
- ⚠ **Correction to our 07-21 entry:** the "Commerce backing off toward
  procurement/hosting rules" framing is uncorroborated — what's sourced is
  an Axios wholesale-ban report officials distanced from. "September" for
  US–China talks is also unsourced (only "later this year").
  ⟨crawl 2026-07-22⟩

## 2026-07-16→18 — The K3 shock (crawl)

- **Kimi K3 shipped 07-16/17** (2.8T, largest open weights ever) and
  **topped Frontend Code Arena 07-18**, tipping Nvidia −2%; **Alibaba
  open-sourced the SAIL Zhenwu stack at WAIC 07-18** (corrects our ~07-20
  dating), aimed at CUDA; **DeepSeek weighed a $71B-valuation raise +
  possible 2026 IPO** (07-16).
  ([Yahoo/Reuters](https://finance.yahoo.com/technology/ai/articles/moonshots-kimi-k3-launch-shakes-124223269.html) ·
  [China Tech News](https://www.chinatechnews.com/2026/07/18/125849-alibaba-targets-nvidias-dominant-software-ecosystem-with-open-source-ai-stack) ·
  [TechStory](https://techstory.in/deepseek-weighs-second-fundraise-at-71-billion-valuation-and-eyes-ipo-as-early-as-2026/)) ⟨crawl 2026-07-22⟩

## 2026-04→06 — The buildup (crawl)

- **April:** DeepSeek V4-Pro/Flash (MIT, 1.6T MoE; Pro reportedly on ~50k
  H100s via Singapore shells, Flash on Huawei Ascend); Qwen passed 1B HF
  downloads.
  ([Forbes](https://www.forbes.com/sites/jonmarkman/2026/04/28/chinas-deepseek-v4-and-qwen-reshape-the-open-source-ai-race/)) ⟨crawl 2026-07-22⟩
- **May:** China banned Nvidia's RTX 5090D V2 hours after Trump's Beijing
  visit; Alibaba unveiled Zhenwu M890 + 380B-yuan buildout while admitting
  ~560k units shipped ever ("Chinese fabs can't yet match TSMC").
  ([The Register](https://www.theregister.com/systems/2026/05/22/alibaba-just-admitted-its-struggling-to-keep-up-with-rival-chipmakers-and-ai-shops/5244665)) ⟨crawl 2026-07-22⟩
- **June:** 9 domestic chips certified for government procurement
  (headline-verified); the NDA token-economy plan made tokens tradable
  units; Amodei accused Alibaba of distilling Claude into Qwen.
  ([Jamestown](https://jamestown.org/the-prcs-token-economy-takes-shape/)) ⟨crawl 2026-07-22⟩

## 2025-01 — The reference shock (crawl)

- **DeepSeek R1 wiped ~$600B off Nvidia temporarily** — the yardstick for
  every 2026 episode.
  ([Forbes](https://www.forbes.com/sites/jonmarkman/2026/04/28/chinas-deepseek-v4-and-qwen-reshape-the-open-source-ai-race/)) ⟨crawl 2026-07-22⟩
