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
