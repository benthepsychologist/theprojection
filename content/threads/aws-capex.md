---
title: AWS Capex
lens: ai
status: developing
opened: 2026-07-23
last_seen: 2026-07-30
weight: 2
entities:
- amazon-aws
parent: hyperscaler-capex-big-picture
thread_kind: story
blurb: 'Earnings 07-30 (corrected from ~07-31). Crawl 07-27: the AGI-cuts vs $200B-plan
  "contradiction" is coherent — retreat from frontier research, double down as the
  labs'' landlord: $364B backlog EXCLUDING Anthropic''s new $100B+/decade commitment
  (grew 10 days AFTER the Google TPU deal — diversification, not displacement); OpenAI
  $50B investment + separate $100B/8yr compute deal CONFIRMED (02-27 announcement).
  Rainier live (500K Trainium2, $26B IN); 1.4M Trainium deployed; Talen 1.92GW/17yr
  + X-Energy 5GW-by-2039. Watch 07-30: capex guide, backlog, FCF (reportedly borrowing
  $25B).'
---

## 2026-07-28 — Two AWS sites in Bahrain confirmed damaged by satellite imagery

- **Bloomberg reports satellite imagery showing significant damage to two
  Amazon data centres in Bahrain** (Zallaq and Askar), corroborating IRGC
  claims made via Tasnim. The first war in which commercial datacentres
  have been deliberately targeted, with published damage assessment.
  ([Bloomberg](https://www.bloomberg.com/news/articles/2026-07-28/amazon-data-centers-hit-in-iran-strikes-satellite-images-show)
  · [Tom's Hardware](https://www.tomshardware.com/tech-industry/data-centers/amazon-data-center-in-bahrain-struck-and-destroyed-by-iranian-cruise-missiles-state-media-claims-attacks-launched-against-aws-site-in-response-to-alleged-us-strikes-on-an-under-construction-nuclear-plant)) ⟨daily 2026-07-28⟩
- **⚠ The imagery is new; the strikes are not.** Claimed ~**07-21**, after
  Shahed drone attacks on AWS sites in the **UAE (03-01)** and a further
  Bahrain strike (**04-01**). Recorded as corroboration, not a fresh
  attack. ⟨daily 2026-07-28⟩
- **The capex read:** Amazon has committed ~$200B to the 2026 buildout and
  just sold **$25B of bonds** to finance it. Physical loss of regional
  capacity — and the insurance/siting repricing behind it — is a cost line
  this thread has never had to model. Watch whether the 07-30 print or
  call mentions it at all. ⟨daily 2026-07-28⟩

## 2026-07-23 — Thread opened; first signal is a headcount cut, not capex

- **Opened alongside its three siblings** (google-capex, meta-capex,
  microsoft-capex) so the term list catches AWS capex news going forward
  — no dedicated item swept yet, stated plainly rather than backfilled
  with a stretch. ⟨steer 2026-07-23⟩
- **Amazon cut AGI research roles** (model-customization/post-training)
  while the $200B 2026 capex plan holds — a pivot toward enterprise
  deployment over frontier research, not a capex-figure change; first
  real test is the ~07-31 earnings call.
  ([Techtimes](https://www.techtimes.com/articles/321341/20260723/amazon-cuts-agi-jobs-while-pouring-200-billion-ai-infrastructure.htm)) ⟨daily 2026-07-23⟩

## ← Backstory

_(Finding: `artifacts/findings/aws-capex-2026-07-27.md` · Bundle:
`artifacts/bundles/aws-capex-2026-07-27/provenance.yaml`)_

- **The capex buys landlord capacity, not a frontier-research bid** —
  the AGI-team cuts and the $200B plan read as coherent, not
  contradictory: Anthropic committed over $100B to AWS over the next
  decade (2026-04-20) and OpenAI signed a separate $100B/8-year AWS
  compute deal (2026-02-27, alongside a $50B Amazon-into-OpenAI
  investment). AWS's Q1 2026 backlog hit $364B, up from $244B, excluding
  the Anthropic deal.
  ([Anthropic](https://www.anthropic.com/news/anthropic-amazon-compute))
  ⟨crawl 2026-07-27⟩
- **Project Rainier (New Carlisle, Indiana) came online 2025-10-29** —
  ~500,000 Trainium2 chips, built for Anthropic, one of the world's
  largest AI compute clusters, initial $11B investment; a further $15B
  followed for more Indiana capacity (2025-11-24). Mississippi's
  commitment was raised to $25B (2026-04-09); Pennsylvania ($20B,
  2025-06-09) and a new ~$10B North Carolina site (2026-07-20) round out
  the confirmed US build-out.
  ([Google News RSS convergence — About Amazon/DCD/DCK/Semafor](https://news.google.com/rss/search?q=Amazon%20Project%20Rainier%20Trainium))
  ⟨crawl 2026-07-27⟩
- **AWS-Anthropic relationship grew, not shrank, despite Anthropic's
  Google TPU deal** — ten days after Anthropic expanded with Google and
  Broadcom for TPU capacity (2026-04-06/07), Anthropic and Amazon
  announced an expanded deal: Anthropic already on 1M+ Trainium2 chips,
  nearly 1GW combined Trainium2/3 capacity by end of 2026 (headroom to
  5GW), Amazon investing up to $25B in Anthropic. Reads as multi-cloud
  diversification, not AWS displacement — no numeric compute split
  across AWS/Google/Microsoft exists in any source found.
  ([TechCrunch](https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/))
  ⟨crawl 2026-07-27⟩
- **Power: 1.92GW under firm nuclear PPA now, 5GW+ SMR pipeline by
  2039** — the AWS-Talen 17-year PPA (1,920 MW from Susquehanna, through
  2042, ~$18B) was restructured in 2025-06 specifically to avoid the
  FERC approval that killed the original 2024 co-located deal. X-Energy
  (Amazon-backed, IPO'd 2026-04-23 raising ~$1.02B) joined the DOE's
  Project Prometheus alongside NVIDIA and AWS on 2026-07-22, reaffirming
  the 5GW-by-2039 nuclear option.
  ([X-Energy IR](https://investors.x-energy.com)) ⟨crawl 2026-07-27⟩
- **The OpenAI ~$50B deal is CONFIRMED, not a rumor** — officially
  announced 2026-02-27: $50B total Amazon-into-OpenAI investment plus an
  expanded $100B/8-year AWS compute deal, ~2GW Trainium capacity, AWS as
  exclusive third-party cloud distributor for OpenAI's "Frontier"
  platform. Triggered a Microsoft exclusivity dispute that resolved
  2026-04-27 (Microsoft's exclusivity ended; OpenAI now multi-clouds
  across AWS and Azure; hard 2032 Microsoft-OpenAI partnership end date).
  ([TechCrunch](https://techcrunch.com)) ⟨crawl 2026-07-27⟩
- **Earnings-date correction:** Amazon's Q2 2026 call is confirmed for
  **2026-07-30**, not "~07-31" as this thread's watch line has said since
  opening — worth fixing on next `/daily`/`/steer` touch. Watch for: a
  raised $200B capex guide (Alphabet just raised its own 2026 guide
  07-22/23), backlog growth past $364B, FCF commentary (Amazon reportedly
  borrowing an extra $25B as FCF turns negative under the capex load,
  per TIKR/Motley Fool 07-08/09), and any analyst question on the AGI
  cuts vs. capex tension. ⟨crawl 2026-07-27⟩
- **Open gap:** the brief's "$151B TTM" capex figure was not
  independently confirmed this crawl — every direct-fetch attempt
  against Amazon's own IR/blog domains 404'd. Verify at 07-30 earnings.
  ⟨crawl 2026-07-27⟩
