---
title: "Methodology"
---

# Methodology

The Projection publishes three news feeds — Mental Health, Frontier AI, and
Global Capital — each a running, curated read on a different slice of the
same story: AI colliding with mental-health care, the frontier AI race
that's producing it, and the capital markets financing both. All three run
on the same underlying pipeline, laid out once below. What's actually
distinctive per feed — the questions it's chasing, the sources it leans on,
the threads and entities it follows — is covered in its own section after
that.

This page is a snapshot as of **2026-08-07**. Every coverage number below —
thread counts, entity counts, source counts — is a point-in-time figure
carried over from that day's review, not a live counter; it will have moved
by the time you're reading this.

## The common methodology

**Automated collection.** Every feed starts the same way: a fixed set of
programmatic collectors sweep a fixed list of watched entities and search
terms every day. Nothing here is scraped or searched by hand. Depending on
the feed, that's some mix of general news sweeps (Google News RSS, GDELT),
curated outlet RSS/Atom feeds, government and financial data sources (SEC
EDGAR, Federal Register, Treasury TIC, BIS, IMF, FRED, Senate lobbying
filings, FEC), academic and clinical sources (OpenAlex, Semantic Scholar,
arXiv, ClinicalTrials.gov), and a handful of narrower ones (GitHub
releases, Manifold Markets prediction odds, Hacker News, CourtListener
case law). Which of these actually matter to which feed — and which are
currently down or under-built — is in each feed's own section below.

**The attention map.** What the collectors find lands on a shared
attention map: a watchlist of named entities and a list of threads —
tracked, ongoing stories — one map per lens. The map only moves by
steering: a person reads the daily output and decides "track X," "drop
Y," "go deeper on Z," and those edits land as small, provenance-tagged
changes. Large automated passes — re-triages, syntheses — can only
propose into the surface that gets read; they never batch-rewrite the map
directly. The coverage critic (below) is the other way entities and
threads get added, and that part is automatic.

**Daily curation.** Once the day's collectors have run, a daily pass reads
what came back and writes the digest, organized into a small set of fixed
sections per feed, under one rubric shared across all three: signal over
noise, sourced claims only, no framing spin. This step is currently a
model-assisted judgment call made fresh every day, not a mechanical
pipeline — collection above is fully automated, but deciding what's
signal, and what a given item is evidence for, still takes a curator's
read each morning.

**Item annotations.** Every item that makes a digest is tagged, in the
underlying record, to the thread(s) and entity it belongs to. That's what
lets an item about a state bill and an item about a lawsuit roll up into
the same tracked narrative over weeks, instead of existing only as that
day's headline. The tag is machine-checked, so the link between what was
said and what it's evidence for stays auditable rather than implicit.

**The coverage critic.** Every finalized day, each feed's digest is
checked against a named set of benchmark publications for that feed —
real named outlets, listed in each feed's own section below; there's no
reason to keep them vague. If a benchmark led with something a feed's own
sweep didn't catch, that's a logged miss, and misses don't just get
noted — they get added to the watchlist or thread list automatically.
That's the main way each feed's coverage grows without waiting for
someone to spot a gap by hand.

**The dated-expectations ledger.** Specific dated claims — a hearing date,
an earnings call, an injunction ruling, an IPO listing — get logged to a
standing ledger and checked automatically as their date arrives. A date
that passes with nothing recorded against it is treated as news in its
own right, not quietly dropped: a silent miss is louder than a late one.

**Thread timelines.** A thread is a tracked, ongoing story, not a single
day's item. It accumulates dated entries over weeks as the story
develops, and can be backward-crawled to establish its history before
this feed started watching it. Related threads can nest under a shared
umbrella — a meta-thread — without losing their own separate timelines.

**The briefing layer.** Every page — feed, thread, entity — opens with a
three-part readout: BREAKING (today), NEWS (the last seven days), and a
short SUMMARY. BREAKING and NEWS are assembled mechanically from the
dated item record — no model touches either, so they can't drift from
what the sources actually say. SUMMARY is the one model-written part:
written against that page's tracked material, regenerated only when the
underlying evidence changes, and enforced as a shape rather than
requested as one — fixed slots (a headline, bullets, a watch list;
feed-level pages get a fuller version with a ranked lead and per-lens
sections), and anything that doesn't fill them gets rejected. Treat
SUMMARY as orientation, not citation — the dated, linked bullets
underneath it are the record.

**What else is on the dashboard.** Two narrower signals sit alongside the
three feeds. A flash rail carries, rarely, a single banner for something
that would lead a general news front page regardless of lens — a
deliberately high bar, normally at most one active at a time, and it
disappears automatically 24 hours after it's filed rather than staying up
on anyone's judgment call. And a mechanical world-news signal counts how
many distinct outlets are covering a story (merging a Google News cluster
with a deduped GDELT feed) and matches that count against tracked
threads — no model, no curator, just a number, kept deliberately small so
it stays a radar rather than a fourth feed competing with the three real
ones.

**Publish.** Getting onto the public site is default-on, not hand-gated —
every thread ships unless it's individually held back. What actually
holds the line is mechanical, not a person reviewing each item before it
goes out: only a fixed allowlist of fields is ever exported, raw internal
notes and reasoning never are, and every export is scanned for secrets
before it's staged.

---

## Mental Health

### The questions

This feed watches **AI in mental health, digital mental-health care, and
evidence-based practice** — the third of those promoted to a first-class
strand in August 2026, with the question set below rebuilt from a
two-track synthesis of the 2021–2026 research literature. Ten standing
questions, in three clusters.

**The evidence — what actually works:**

- **Is mental-health care getting more effective, or just more
  available?** The anchor finding behind the question: across 441 RCTs
  and eight disorders, response rates to psychotherapy run only 24–42% —
  therapy beats control, but most patients in successful trials still
  don't strongly respond — and most recent innovation (task-sharing,
  single-session interventions, digital delivery) expands *reach* rather
  than efficacy.
- **Does the science of matching ever reach the clinic?** Measurement-based
  care is strongly evidenced and persistently underused; precision
  psychiatry keeps producing striking pilot numbers that don't survive
  external validation. Does "we know what works but don't do it" close,
  or is it a permanent structural feature of mental-health delivery?
- **Are the fast-moving somatic bets outrunning their own evidence
  fixes?** Psilocybin is sprinting toward possible first-ever US approval
  on compressed review timelines — 18 months after the FDA rejected MDMA
  and then wrote new trial-design rules addressing exactly the unblinding
  problem the accelerating trials share. Ketamine's real-world results
  run well below its trial results. GLP-1 psychiatric signals point both
  directions at once.
- **Does the evidence machine itself hold?** Contested guidelines on both
  sides of the Atlantic, Cochrane's mental-health review group retired,
  and a US research-funding shock (NIMH lost more grants than any other
  NIH institute in the 2025 termination wave; 383 trials terminated) —
  who referees the evidence base, and can it keep producing?

**The technology — is the science catching the deployment:**

- **Do AI-therapy efficacy claims survive independent replication?** The
  first generative-AI therapy RCT reported large symptom reductions —
  against a wait-list-only control, evaluated by the lab that built it,
  with formal critique letters published in response. The field's
  most-quoted independent evaluator maintains no replicated evidence yet
  shows any chatbot improves clinical outcomes.
- **Does safety evaluation mature faster than deployment?** Benchmarks
  for AI mental-health safety now exist (models handle extreme-risk
  crisis queries reasonably and falter on intermediate-risk ones), and
  "AI psychosis" sits at the case-report stage with no population-level
  epidemiology — does it become a measured clinical entity or remain a
  media-amplified rare event?
- **Do digital therapeutics solve their two structural problems?**
  Engagement (attrition runs 19–28% and no one has shown more engagement
  causes better outcomes) and the payment model (the sector's defining
  collapse happened *despite* best-in-class trial evidence — evidence was
  never the bottleneck; payment design was, and Germany's
  performance-linked pricing reform is the live test of the fix).
- **Does the screens-and-youth causality fight ever resolve?** The
  academic dispute generates fresh rebuttals yearly rather than settling,
  while policy runs the natural experiments: a national under-16
  social-media ban showing ~80% evasion at three months, school phone
  bans showing real academic gains and consistently null mental-health
  effects.

**The market and its governance:**

- **Where is the money actually landing, and who are the players?**
  Funding keeps flowing to clinician-augmentation over consumer
  chatbots; the vendors, evaluators, payers, and health systems doing
  the deploying — and the big platforms' health arms — are tracked as
  named entities with their own threads.
- **Does regulation of AI in mental health converge or fragment?** State
  therapy-chatbot bans, an emerging FDA device framework for generative
  AI, and the EU AI Act's high-risk classification are all moving — into
  either a coherent governance regime or a compliance patchwork vendors
  design around.

### Sources & method

The collectors that contribute to this feed: Google News RSS is the
workhorse, sweeping every watched name and phrase continuously; seven
curated mental-health outlets (Behavioral Health Business, STAT News,
OPEN MINDS, Addiction Treatment Business, and NIMH News are live;
MobiHealthNews and Psychiatric Times are blocked by the publishers' bot
protection and swept by search instead); GDELT for a broad daily event
sweep; Federal Register for FDA digital-therapeutic clearances and
HHS/CMS rules; ClinicalTrials.gov (five standing search terms); OpenAlex
and Semantic Scholar for academic literature; SEC EDGAR for
public-company filings; Senate LDA for lobbying; and CourtListener for
litigation, currently flagged **at-risk** — the provider tightened API
access mid-2026 and that hasn't been re-verified.

**New as of August 2026 — the EBP strand's instrumentation:** eight
journal and evidence-body feeds were added to daily collection, each URL
live-verified before inclusion — *npj Digital Medicine*, *JMIR Mental
Health*, *Frontiers in Psychiatry*, *Internet Interventions*, *Lancet
Digital Health*, *Nature Mental Health*, the Peterson Health Technology
Institute's reports, and *JAMA Psychiatry* — and the OpenAlex/Semantic
Scholar research sweep gained standing evidence-focused search terms
(measurement-based care, psychotherapy-outcomes meta-analyses,
psilocybin trials, single-session interventions, and others).

The coverage critic checks this feed's finalized digest against four
named trade publications daily — *Behavioral Health Business*, *STAT*
(health-tech coverage), *Fierce Healthcare*, and *MobiHealthNews* — and,
as of August 2026, two academic publications on a weekly cycle matched to
journal publishing cadence: *JMIR Mental Health* and *npj Digital
Medicine*. A research finding that leads one of those and isn't in the
week's digests is now a logged miss, the same as a trade-press miss.
Three organizations on today's watchlist — Kaiser Permanente, Universal
Health Services, and Hims & Hers — entered exactly that way, each after a
benchmark led with a story this feed had no term to catch.

### Threads & entities

As of this snapshot, this feed tracks **25 active threads** and **38
named entities** (33 organizations, 5 people), plus 16 standing topic
searches and 7 clinical-trial search terms. Twenty-three of the 25
threads are open, two further along ("developing"); none has resolved
yet.

| Strand | Threads | What it covers |
| --- | --- | --- |
| What Works — evidence-based practice | 6 | New in August 2026: an umbrella thread on the state of the evidence, grouping five tracked stories — whether generative-AI therapy's trial claims replicate (Therabot and successors), psilocybin's compressed regulatory sprint toward possible first-ever US approval, the digital-therapeutics payment paradox (Pear's collapse, Germany's performance-linked pricing reform), the social-media causality fight and its policy natural experiments, and the strain on the evidence infrastructure itself (the NIMH funding shock, contested NICE/APA guidelines) |
| AI-therapy regulation | 2 | The legal/regulatory reckoning over AI therapy chatbots — state bans and litigation-driven de facto rules |
| Digital mental-health industry | 4 | Spring Health/Alma consolidation and clinician-augmentation funding (Talkspace's "Tee" AI guide among it, money moving away from consumer chatbots), French insurtech Alan's expansion into Canada, CMS's ACCESS Model behavioral-health payment track (Headspace, SonderMind, Concert Health, Mindoula Health, and April Health by Wysa), and the AI-triage-vs-care divergence it raises |
| Big Tech into health | 6 | One umbrella thread plus five nested ones — Microsoft, Google, Apple, Amazon, and OpenAI's separate moves into health, tracked individually but grouped |
| Payers & parity | 2 | AI-driven claims/denial practices at insurers, and the unresolved status of federal mental-health insurance-parity enforcement |
| Platform & clinical harm | 3 | Grok (xAI) benchmarked worst-in-class on mental-health safety among tested chatbots, Meta's AI-generated CSAM ads failure, and — new in August 2026 — chatbot-linked psychosis as a possible emerging clinical entity, tracked cross-platform |
| Clinician labor & health-system deployment | 2 | Clinician pushback against AI triage tools at Kaiser Permanente and HCA Healthcare |

The entity list is still corporate-heavy but no longer people-thin by
accident: alongside the vendors, evaluators, and health systems, the
watchlist now tracks the researchers whose work anchors the evidence
strand — the field's leading psychotherapy-outcomes meta-analyst, its
most-quoted independent evaluator of AI and app claims, the loudest
pro-causation voice in the social-media fight, and the PI of the first
generative-AI therapy RCT (tracked partly *because* his lab evaluates
its own product).

**Cadence:** daily digest; a weekly revisit of the standing questions
above; the EBP strand's academic benchmarks run on the weekly critic
cycle, matched to journal publishing cadence.

### Known gaps

- **The EBP instrumentation is brand new and unproven in operation.**
  The academic benchmarks, journal feeds, and evidence threads all
  landed in August 2026; the first weekly academic-recall cycle hasn't
  run yet, and the digest's research section — historically inconsistent
  day to day — has yet to demonstrate the consistency the new plumbing
  is meant to produce. The instrumentation existing and the coverage
  being reliable are two different claims; only the first is true so far.
- **The people-watchlist is stronger on researchers than on power.**
  Four researchers anchoring the evidence strand were added in August
  2026, but regulators, legislators, and evaluator leadership still
  aren't tracked as individuals the way frontier-lab executives are on
  the AI side.
- **A sector gap surfaced this week and hasn't been closed.** Nothing
  tracks the applied-behavior-analysis/autism-therapy corner of
  behavioral health — a provider's financial distress and new federal
  Medicaid guidance for that benefit landed the same day with no
  existing thread to catch either.
- **Two of seven curated mental-health feeds are currently down.**
  MobiHealthNews and Psychiatric Times both block this feed's automated
  fetch and are covered by fallback search instead — a real degradation
  from a direct feed, not a full substitute.
- **Litigation tracking has a live reliability flag.** CourtListener
  tightened its access terms mid-2026, and that hasn't been re-verified
  since.

---

## Frontier AI

### The questions

- **Who are the players, and what are they actually doing?** Not just who
  announced something — whether a major actor has a live, tracked
  storyline at all. An actor with nothing being tracked is treated as an
  open question, not a quiet one.
- **Where is the money going?** Which funding rounds, capex commitments,
  and acquisitions are moving capital, and what the financing structure
  underneath the buildout actually looks like once you follow it past the
  headline number.
- **Where is frontier AI heading overall?** Capability, price, and the
  containment/safety story running underneath both — watched for the
  non-events (a model that doesn't ship, a deadline that passes with
  nothing published) as closely as the events.

### Sources & method

This feed is organized around seven strands, and they account for
essentially everything on it:

| Strand | What it tracks |
| --- | --- |
| The frontier-lab race | OpenAI, Anthropic, Google DeepMind, xAI, Meta AI, Mistral, and the rest — leadership moves, model releases, and the gap between announced and shipped. A standing release-watch list (currently eight named models, including GPT-6, Gemini 3, Claude Opus 5, and DeepSeek V4) exists specifically to catch a slip — a model that doesn't ship on schedule — with the same weight as a launch |
| Compute and capex buildout | Microsoft, Amazon, Google, and Meta's data-center and power spending, rolled up under one meta-thread so the buildout reads as one comparable story rather than four disconnected earnings beats |
| Chips and foundry chokepoints | Nvidia, TSMC, ASML (the sole source of the EUV lithography tools advanced chips require), the memory squeeze (SK Hynix, Micron, CXMT), and the foundries actually capable of building at the frontier node |
| China's AI stack | Whether China's frontier labs (DeepSeek, Alibaba's Qwen, Moonshot, Zhipu, and others) and domestic foundry/lithography base (SMIC, Hua Hong, homegrown DUV tooling) can develop independently of the export-controlled Western supply chain |
| Governance and regulation | Export controls, the EU AI Act's enforcement powers, U.S. executive-order deliverables, state legislation, and who gets to set a binding rule before one is forced by an incident |
| Containment, safety, and accountability | Agents escaping intended scope, a lab disclosing its own model breached external systems during evaluation, and the legal exposure that follows model behavior after the fact (copyright suits over training data) |
| Capital structure and financing | Vendor financing between chipmakers and labs, circular-financing risk, and the frontier labs' own paths toward IPOs — overlaps with Global Capital by design; a story that's really about AI stays here, its broader market-wide read lives there |

Fifteen collectors relevant to this feed run daily: a general news sweep
(Google News, GDELT), curated RSS from lab blogs and trade press, SEC
EDGAR, Federal Register, Semantic Scholar and arXiv/OpenAlex for
research, GitHub releases for a panel of load-bearing AI-infrastructure
repos, Manifold Markets for prediction-market odds on release dates,
Hacker News for developer sentiment, and Senate lobbying/FEC filings. Two
sources are weaker than the rest: CourtListener's API access is gated in
a way that hasn't been fully re-verified, and a fourth family (GovInfo,
Regulations.gov, Congress.gov) has a validated key but no collector built
yet.

The coverage critic checks this feed's finalized digest against four
named AI-industry newsletters daily — *The Rundown AI*, *TLDR AI*, *The
Neuron*, and *The AI Daily Brief* — plus two more, *Import AI* and *Last
Week in AI*, on a weekly cycle. A genuine miss adds the missing entity or
storyline to what's tracked going forward — the main way the watchlist
grows without waiting for someone to notice a gap by hand.

### Threads & entities

As of this snapshot, this feed tracks **47 threads** — 35 open, 10
actively developing, one resolved, one retired but kept for the record —
out of 87 total across the whole map, the largest of the three feeds by
thread count. The heaviest concentration is the compute/capex buildout
race (13 threads) and resource moves like power and siting (8), followed
by governance disputes, lab rivalries, and legal/accountability stories
(4-5 each).

The watchlist behind that coverage names 33 organizations, 18 people, 8
models on active release-watch, and 10 policy/money themes.

**Cadence:** daily digests have run continuously since July 20, 2026; two
weekly synthesis editions have been written against the standing
questions above so far.

### Known gaps

- **Two of the fifteen relevant collectors aren't fully live.**
  CourtListener has an API access tier that changed mid-2026 and hasn't
  been re-verified; the api.data.gov family (GovInfo, Regulations.gov,
  Congress.gov) has a working key but no collector built yet.
- **One curated newsletter feed is dead** — blocked by the publisher's
  bot protection rather than genuinely gone — and is only checked by
  manual search, slower than the rest of the pipeline.
- **The full collection run's duration is inconsistent for reasons not
  yet understood.** Two measured runs on comparable days differed by
  roughly 3.5x with no identified cause; coverage hasn't been affected,
  but the pipeline's timing isn't yet predictable.
- **China's frontier-lab roster has had gaps caught late.** A fifth
  major Chinese lab raising at IPO scale wasn't on this feed's tracked
  list until a routine sweep caught it two days after it had already
  been reported elsewhere — the coverage critic is the mechanism meant
  to catch this, and it's still catching misses like this periodically
  rather than never. Several items most weeks are logged as "caught
  late" more generally, a stated limitation of a daily, largely
  automated pipeline.
- **Weekly synthesis is new.** Only two editions written so far, so the
  pattern is still young relative to the daily pipeline.
- **Geographic coverage skews toward the US, the frontier labs, and
  China.** Regions outside that core get comparatively little attention
  even when something AI-relevant happens there.

---

## Global Capital

### The questions

This feed is organized around two standing questions of its own (a third,
"what is each major player doing," is shared with the Frontier AI feed
whenever the player is a financial one):

- **Where is the money going?** Funding rounds, capex commitments, M&A,
  IPOs — a running answer to where capital is concentrating, re-synthesized
  periodically. The current standing read: capital is concentrating into
  a handful of names at sovereign scale, funding the bottleneck resources
  (compute, energy, memory) rather than the models themselves. The
  mechanism doing the concentrating has gotten more specific over time —
  from a generic "circular financing" worry to hyperscalers extending
  off-balance-sheet credit guarantees to third-party developers, cheaper
  capital for the buildout paired with contingent credit risk that stays
  invisible until something breaks. That's exactly what happened one step
  down the chain when a heavily leveraged AI-infrastructure fund was
  forced to sell its entire equity book after a sharp drawdown — the
  first fund broken by the trade it was betting on.
- **Where is capital and economic power concentrating — in AI/health
  markets and above them?** Tracked in three parts: capital in the
  markets this feed cares about (buyers, funders, private equity,
  foundations, swept like any watchlist entity); the macro backdrop
  (rates, inflation, currency, chips, energy, read as standing context);
  and wealth and power more broadly (who actually holds economic power,
  tracked through institutional filings, lobbying, and campaign
  finance — the least-built of the three; see Known gaps below). Two
  recent findings, both treated as data about how this feed itself can
  fail, not just data about markets: the vendor-financing structure above
  got its first real credit-market stress test when a major chipmaker's
  credit-default-swap spread widened by a record margin in a single day,
  with the concern visibly migrating to the largest lessee in the chain
  rather than resolving; and this feed spent two straight weeks reporting
  a central bank's rate decisions in vote-by-vote detail without ever
  naming the sitting chair of that committee — accurate the whole time,
  but missing the thing the votes were a fact about, until a routine
  cross-check caught it.

This lens is explicitly **not a trading-signal service** — no buy/sell
calls, no price targets. It's a record of where capital is concentrating
and why, for someone who wants to understand the mechanism, not trade
on it.

### How this feed is different: the interpretation layer

AI and Mental Health track and report — every claim on those feeds is a
sourced fact with a link. Global Capital does that too, but it also
**interprets**. Alongside the sourced bullet, some items carry a second,
clearly separate block: a generated reading of what the event could mean
for capital flows, tagged with a confidence level, laid out as genuine
branching scenarios ("this could go one of two ways, and here's what
would have to be true for each"), and read against a standing snapshot of
the current macro picture. That block is never presented as fact — it's
visually distinct on the page, and it links to a full reasoning receipt.

A hard rule enforced in code, not just an instruction to whatever writes
it, keeps this from becoming unmoored speculation dressed up as analysis:
every interpretation must name a real transmission mechanism (a rate
differential triggering a carry trade, a risk event triggering flight to
safety, leverage amplifying a move), and once it claims more than the
lowest confidence level, at least one scenario must point to an actual
historical precedent — a specific past instance, not a vague gesture at
"this has happened before." An interpretation that can't clear that bar
is rejected outright rather than published with a disclaimer; duplicate,
hedge-everything scenarios get rejected too — the branches have to be
genuinely different bets on how things go. This is never forced onto
every item — most days, most bullets carry only the sourced fact. Each
interpretation that is generated is cached and given its own receipt
page: the mechanism, every scenario with its precedent (or the honest
absence of one), the macro context it was read against, and the threads
it connects to.

### Sources & method

| Source | What it tracks | How current |
| --- | --- | --- |
| SEC EDGAR | Company filings, full text since 2001 | Daily |
| Treasury TIC | Foreign holdings of US securities | ~2-month reporting lag |
| BIS locational banking statistics | Cross-border bank credit | ~6-week lag |
| IMF balance-of-payments / investment-position data | External positions, financial-stability narrative | Quarterly, ~3-month lag |
| EPFR (via its parent's public newsletter) | Fund-flow trends | Weekly |
| FRED (St. Louis Fed) | Rate, credit-spread, and inflation series | Daily |
| Senate LDA | Lobbying filings | Daily sweep, quarterly filing cadence |
| FEC | Campaign-finance filings | Daily |
| Federal Register | US regulatory actions | Daily |
| Google News + curated RSS + GDELT | General news sweep, by term and by publisher feed | Daily/realtime |

A separate collector for retail/ETF-level fund-flow reports (Morningstar,
ETF.com) currently returns nothing — both sites block automated access in
the environment this feed runs in, and the feed reports that as an honest
empty result rather than silently dropping the source or fabricating a
number.

Each day's curation reads a standing macro snapshot — refreshed weekly
from the Treasury TIC, BIS, IMF, and EPFR data above, covering the
current rate regime, cross-border credit conditions, the external
(foreign-holdings) position, fund-flow trends, and any live conflict risk
premium — before deciding whether an item gets an interpretation.

The coverage critic checks this feed's finalized digest against four
named finance-trade outlets daily — *Money Stuff* (Matt Levine), *Axios
Pro Rata*, *FT Unhedged*, and *Bloomberg Technology* — plus *Odd Lots* on
a weekly cycle. (Money Stuff and FT Unhedged are partially paywalled; the
critic works from web search, public copies, and issue summaries.)
Anything this feed missed gets logged and, if it's a genuinely new entity
or story, added to what it tracks going forward — the missed-Fed-chair
catch above is what that process looks like working as intended, not a
one-off embarrassment: it's why two named individuals are now on this
feed's watchlist.

### Threads & entities

As of this snapshot, Global Capital tracks **17 live threads** directly
under this lens, plus two adjacent AI-buildout capital stories
(vendor-financing circularity and the Stargate data-center project) that
stay filed under the Frontier AI feed for historical reasons but are
cross-referenced here whenever they matter to the capital-flow read.

- **Vendor financing and the AI-buildout credit story** — Nvidia's role
  as a financier as well as a supplier, a leveraged cloud provider's
  discounted debt, chipmaker credit-default-swap moves, and whether the
  capex being spent across the sector is being monetized or just
  financed.
- **The frontier-lab IPO wave** — a meta-thread grouping individual
  IPO/listing stories (a major memory-chip maker's debut, timing
  questions around a leading AI lab's public listing, the merged
  aerospace/AI/social entity's public-market debut).
- **Sovereign and institutional capital moving into AI** — Saudi Arabia's
  Public Investment Fund pivoting from physical megaprojects (NEOM) into
  compute ownership, BlackRock building direct AI-infrastructure debt and
  equity exposure, Fidelity taking direct equity stakes in the labs
  themselves, and Berkshire Hathaway's internal tension between Warren
  Buffett's individual AI-capex bets and Greg Abel's more skeptical
  institutional stance.
- **Macro and geopolitical drivers of capital flow** — the Red
  Sea/Hormuz shipping disruption's effect on oil pricing and war-risk
  insurance, the CHIPS Act's pivot from grants toward equity stakes in
  chipmakers, and the broader rotation of capital between chipmakers and
  the hyperscalers that buy from them.

The watchlist behind this carries 15 organizations (sovereign funds,
buyout firms, foundations, and the capital-concentration names above the
day-to-day market) and 2 named individuals, added specifically after the
coverage critic caught this feed covering a central bank's rate decisions
for two weeks without ever naming the sitting chair of that committee.

**Cadence:** daily digest; the standing macro snapshot behind the
interpretation layer refreshes weekly, matched to how often the
underlying government and central-bank data itself updates.

### Known gaps

- **The "wealth and power" tracking is the least-built third of this
  feed's scope.** Institutional filings, lobbying registrations, and
  campaign-finance data are all wired as live collectors, but the actual
  cohort of people and institutions to track through them — a
  deliberately curated "who holds power" list, distinct from the market
  players already watched — hasn't been built yet.
- **The curated RSS feed list for this lens is stale relative to its
  current focus.** It predates the shift toward AI-capital markets and
  still leans toward healthcare-buyer trade press; three of its ten
  feeds are also currently dead (blocked by the publisher, marked as
  such rather than silently dropped).
- **One data source in the macro-context stack returns nothing.**
  Retail/ETF-level fund-flow data — the corroborating check on the
  professional fund-flow reading — is blocked by both providers this
  feed tried, so one of five macro readings leans on a single source
  instead of two.
- **A legal-records source this feed would use for liability and
  regulatory stories is membership-gated** as of this review, a soft
  spot for anything requiring court-filing detail.
- **A government-data API family (GovInfo, Regulations.gov, and related
  feeds) is validated and keyed but has no working collector yet** — one
  source still waiting on a signup response before it can be added at
  all.
- **Interpretation coverage is intentionally partial.** Most items never
  get a generated reading — a mechanism has to be real and identifiable,
  not manufactured to pad a quiet day — so today the interpretation
  layer is a highlight reel of the clearest cases, not a reading on
  every capital-flow story that runs.
