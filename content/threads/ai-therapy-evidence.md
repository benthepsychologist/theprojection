---
title: AI Therapy Evidence
lens: mental-health
status: open
opened: 2026-08-07
last_seen: 2026-08-07
weight: 2
entities: []
parent: mh-evidence-watch
thread_kind: story
blurb: 'The SCIENCE track of AI therapy (the courts/legislatures track is ai-therapy-regulatory-reckoning):
  does Dartmouth''s Therabot RCT (51%/31% symptom reductions, wait-list-only control,
  self-evaluated) replicate independently? Torous''s line — no replicated evidence
  any chatbot improves clinical outcomes — vs. the promotional framing. Safety evaluation
  maturing into a real subfield: VERA-MH benchmark, RAND''s intermediate-risk failures,
  EmoAgent.'
---

## 2026-08-07 — Opened (ben-steer)

- **Opened as the science-track sibling to the existing courts/legislatures
  thread**, seeded from the EBP digital/AI-science research crawl. Parent:
  `mh-evidence-watch`. (EBP digital/AI-science crawl, 2026-08-07) ⟨steer 2026-08-07⟩

## 2026-08-07 — Registry check: Therabot still has zero independent replication

- **ClinicalTrials.gov lists exactly two Therabot-branded studies and both are
  Dartmouth's own** — the original 210-person NEJM AI trial and a new
  single-arm feasibility spinoff (Therabot-CALM, cannabis use plus
  anxiety/depression, no control arm). No outside lab has registered a
  Therabot trial as of this check.
  ([ClinicalTrials.gov NCT06013137](https://clinicaltrials.gov/study/NCT06013137),
  [NCT06920238](https://clinicaltrials.gov/study/NCT06920238))
  (wave: mh-q05) ⟨daily 2026-08-07⟩

## 2026 — Wysa's own chief scientist co-publishes a null result on Wysa's core clinical claim

- **A mixed-methods RCT of Wysa as an NHS waitlist-bridge intervention,
  co-authored by Wysa's own chief scientist Becky Inkster, concludes "there
  is no evidence that Wysa treats depression in this study."** Heavily
  underpowered (76 randomized of 99 consented, 30 lost to follow-up), but a
  genuine negative finding published with the company's own scientist's name
  on it, not extracted by a critic.
  ([DOI: 10.1177/00207640251415507](https://doi.org/10.1177/00207640251415507))
  (wave: mh-q05) ⟨daily 2026-08-07⟩

## 2026-01-23 — Slingshot pulls Ash from the UK over unresolved medical-device classification

- **Two months after its first outcome data — an uncontrolled,
  non-peer-reviewed observational study STAT called a study that "lands with
  a thud" (48% of users showing minimal or no improvement, no control
  group) — Slingshot withdrew its Ash chatbot from the UK market**, citing
  the absence of "a clear regulatory pathway for wellbeing products like
  ours." Ash is marketed as non-medical wellbeing, and the withdrawal reads
  as an attempt to avoid medical-device reclassification before it's forced.
  Slingshot has separately complained to the FDA that press coverage
  "skewed" public risk perception.
  (STAT News, Nov 2025 and Jan 21 2026 — no direct URL in the underlying
  research) (wave: mh-q05) ⟨daily 2026-08-07⟩

## 2025-09 — Three non-Dartmouth generative-AI RCTs complete with active or human comparators, all unpublished

- **The field's first registered head-to-head chatbot-vs-human-therapist
  design completed enrollment**: a 222-person three-arm Chinese trial
  pitting the chatbot "Emohaa" against individual human counseling and a
  waitlist control finished September 2025 with results still unpublished.
  A second, University of Pennsylvania crossover RCT of the Elomia chatbot
  against an active (not waitlist) comparator completed May 2025, also
  unpublished. Neither trial answers the Therabot critique directly — both
  are independent of Dartmouth — but both are the first real empirical test
  cases of the exact "active comparator" design the Therabot critics
  demanded.
  ([ClinicalTrials.gov NCT06992180](https://clinicaltrials.gov/study/NCT06992180),
  [NCT06725147](https://clinicaltrials.gov/study/NCT06725147))
  (wave: mh-q05) ⟨daily 2026-08-07⟩

## 2025-06-30 — Woebot shuts its consumer app; its FDA-track trials had already been quietly wound down 2022-24

- **Woebot retired its consumer app for roughly 1.5 million historical
  users**, with founder Alison Darcy attributing the shutdown to the cost of
  FDA marketing authorization — but ClinicalTrials.gov shows the company's
  FDA-breakthrough-track postpartum-depression trial and an
  adolescent-depression RCT were both terminated by "internal company
  decision" or enrollment difficulty between 2022 and 2024, years before the
  public announcement. Woebot had the deepest RCT evidence base of any
  chatbot maker in the sector and still couldn't sustain the consumer
  product built on it.
  ([ClinicalTrials.gov NCT05551195](https://clinicaltrials.gov/study/NCT05551195))
  (wave: mh-q05) ⟨daily 2026-08-07⟩

## 2026-02 — VERA-MH becomes the first clinician-validated automated safety benchmark

- **VERA-MH (Validation of Ethical and Responsible AI in Mental Health)**
  is the first open-source automated safety-eval tool validated against
  clinician consensus — its LLM-judge agreement with clinical consensus
  (IRR 0.81) actually exceeds clinician-clinician agreement (IRR 0.77).
  Its own findings are unflattering to the systems it tested: roughly 33%
  of conversations failed to surface a crisis line, 12% failed to
  persistently redirect a user under immediate risk, 48% were inadequate
  even under a relaxed bar, and no system tested met an "ideal response"
  standard. Co-authored/funded in part by Spring Health, a commercial
  MH-benefits vendor — notable that industry is building the safety-eval
  infrastructure the field otherwise lacks.
  ([arXiv](https://arxiv.org/abs/2602.05088)) ⟨steer 2026-08-07⟩

## 2025-08 — RAND/NIMH study: chatbots falter specifically on intermediate-risk suicide questions

- **ChatGPT, Claude, and Gemini handle very-low- and very-high-risk suicide
  questions reasonably but are inconsistent on intermediate-risk
  questions**, per an NIMH-funded RAND study published in *Psychiatric
  Services* (30 questions × 100 trials × 3 models, benchmarked against
  clinician ratings). Gemini over-refused even low-risk queries; ChatGPT
  and Claude sometimes gave direct answers to method-lethality questions —
  exactly the intermediate-risk zone where safe response matters most.
  ([RAND](https://www.rand.org/news/press/2025/08/ai-chatbots-inconsistent-in-answering-questions-about.html)) ⟨steer 2026-08-07⟩

## 2025-04 — EmoAgent: simulated vulnerable-user chats show deterioration in a third of interactions

- **A Princeton/Michigan/Columbia/Theta Health team's EmoAgent simulated
  vulnerable-user conversations with popular character chatbots and found
  measurable psychological deterioration** (via PHQ-9/PDI/PANSS proxy
  measures) in 34.4% of interactions; their proposed EmoGuard safety layer
  cut that deterioration rate by more than half. Posted to arXiv April
  2025, later published at EMNLP 2025.
  ([arXiv](https://arxiv.org/abs/2504.09689)) ⟨steer 2026-08-07⟩

## 2025 — Scientific Reports: chatbots roughly triple the unsafe-response rate of human therapists

- **AI chatbots failed to give a safe response to suicidal-ideation
  prompts roughly 20% of the time, versus about 7% for human therapists**
  evaluated on the same comparison, per a 2025 *Scientific Reports* study —
  a direct, quantified human-benchmark comparison rather than a
  standalone chatbot audit. Month of publication not specified in the
  underlying crawl.
  ([Nature/Scientific Reports](https://www.nature.com/articles/s41598-025-17242-4)) ⟨steer 2026-08-07⟩

## 2025 — Torous: no replicated evidence any chatbot improves clinical outcomes

- **John Torous (Beth Israel Deaconess/Harvard, digital psychiatry
  director) has testified to Congress that no well-designed, peer-reviewed,
  replicated research shows any AI chatbot making mental-health claims
  meaningfully improves clinical outcomes** — a materially harder line
  than the promotional framing around Therabot and similar products — and
  separately warns that marketing uses therapeutic language while legal
  fine print disavows providing therapy. No direct URL for the testimony
  itself in the underlying crawl; his position is drawn from public
  commentary compiled in the same report. ⟨steer 2026-08-07⟩

## 2025 — NEJM AI publishes formal critique letters against the Therabot trial

- **Two critique letters published in NEJM AI itself** (Heckman et al.;
  Gratch & Essig) argue the Therabot RCT's wait-list-only control functions
  as a likely "nocebo" comparator rather than an attention-equivalent one,
  that the trial lacked independent evaluation (the evaluators were the
  team that built the product), and that it misapplied a
  human-therapeutic-alliance measure to a chatbot. The Therabot authors
  published a response in the same venue.
  ([NEJM AI](https://ai.nejm.org/doi/abs/10.1056/AIp2500390)) ⟨steer 2026-08-07⟩

## 2025-03 — Therabot RCT: the first generative-AI therapy chatbot trial

- **Dartmouth's Therabot trial (Heinz, Jacobson et al., NEJM AI, March
  2025) was the first RCT of a fully generative-AI therapy chatbot**:
  N=210 (106 Therabot / 104 wait-list-only control), 4 weeks. MDD symptoms
  fell 51% on average (d=0.845-0.903), GAD symptoms fell 31% (d=0.794-0.840),
  eating-disorder-risk concerns fell 19% (d=0.627-0.819); average use was
  6+ hours over 4 weeks (roughly 8 sessions' worth), and alliance ratings
  came in comparable to human therapists. Flag: the widely-cited *Science*
  magazine piece "The Therabot Will See You Now" was authored by Nicholas
  Jacobson, Therabot's own PI, not an independent journalist — a
  conflict-of-interest angle worth carrying every time his lab's coverage
  of its own product is cited.
  ([NEJM AI](https://ai.nejm.org/doi/full/10.1056/AIoa2400802)) ⟨steer 2026-08-07⟩

## ← Backstory

<!-- /crawl appends below; finding pointer goes in the heading line -->
