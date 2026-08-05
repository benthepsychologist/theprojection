# The Projection

**theprojection.org** — a public, thread-centric read on AI inference
economics, governed infrastructure, and epistemics. Published, not
generated on the spot: every thread is curated daily against dated
evidence before it's ever tracked, and once it's tracked it publishes
automatically — no separate manual approve-before-it-goes-live step. See
[`/about/`](https://theprojection.org/about/) for the human-facing version
of this and the full picture of how it's used.

This repo is the **published surface only**. It is generated and pushed by
a separate open-source tool ([kestrel](https://github.com/benthepsychologist/kestrel)) — nothing about how threads are collected,
scored, or curated lives here. If you're reading this on GitHub: `data/`
and `content/threads/*.md` are overwritten wholesale on every publish run
and should not be hand-edited — edits belong upstream.

## Stack

- **[Hugo](https://gohugo.io/)**, no theme submodule — layouts in
  `layouts/` are custom, built directly against the brand system in
  `assets/css/main.css`.
- **[Cloudflare Pages](https://pages.cloudflare.com/)** builds and deploys
  via a deploy hook (build command `hugo --gc --minify`, output dir
  `public`). The hook fires automatically inside kestrel's publish run;
  a bare template/CSS push does **not** trigger a build — fire the hook
  by hand.
- Self-hosted, OFL/Apache-licensed webfonts (Piazzolla, Public Sans,
  Newsreader, IBM Plex Mono) — no font-CDN calls at runtime.

## Layout

⚠️ **`CLAUDE.md` in this repo is kit-rendered**, from the site-attention
agentdoc template in `/workspace/kestrel/library/`, and tracked by hash in
`.claude/kit.yaml`. Unlike the data repo's copy it carries **no warning
inside the file itself**, so it is easy to edit without realising you are
creating drift. You may edit it — this repo is in the write zone — but
**kestrel is not** (Ben, 2026-08-04), so do not go there to reconcile the
template: drop a brief into `/workspace/kestrel/INBOX/` instead. An edit
here will show as `dirty` in `kit.py sync`, which is the intended signal,
not a fault.

📌 **Two known errors in that rendered `CLAUDE.md`, upstream to fix — do not
patch them here:** it places the publish adapter at
`/workspace/kestrel/tools/publish/` (it was relocated to
`theprojection-data/publish/adapter.py` on 2026-07-31 — the directory itself
was not renamed in the 2026-08-05 repo rename, only the GitHub repo/display
name changed to theprojection-corpus, so this path is still accurate — and
no per-site code lives in the engine repo), and its "data/instance repo"
upstream pointer names *this* repo rather than the data/instance repo
(theprojection-corpus, formerly theprojection-data). Both are template bugs,
covered in the brief filed 2026-08-04.

| path | what |
| --- | --- |
| `hugo.yaml` | site config — lens labels/colors, menus, tagline |
| `data/payload.json`, `data/board.json`, `data/claims.json`, `data/readouts.json`, `data/interpretations.json` | feed · board-node · claim · per-scope readout/briefing · interpretation data — **generated** (published from kestrel), do not hand-edit |
| `content/threads/*.md`, `content/entities/*.md`, `content/map/*`, `content/claim/*`, `content/interpretation/*` | one page per thread/entity/node/claim/interpretation — **generated**, do not hand-edit |
| `content/about.md`, `content/news/_index.md`, `content/research/`, `content/metric/*.md` | the hand-authored pages — about, the /news/ dashboard shell, the /research/ stub, plus one methodology page per board metric |
| `content/news/{ai,global-capital,mental-health}.md` | the three lens beats, **generated** (published from kestrel) — nested under /news/ since 2026-08-03 (were /beat/) |
| `layouts/` | projects hub (home), /news/ dashboard + beats, thread page, map/claim/metric/research pages, shared partials |
| `assets/css/main.css` | the whole brand system — palette sampled from the mark, light-only on purpose; board tokens scoped via `.board-paper`; `#E01279` reserved for selection/"new" |
| `static/js/dashboard.js` | the /news/ feed renderer — highlights strip, ranked/collapsible thread cards |
| `static/js/board-plate.js` | the `/map/` plate — thrust × gravity bubble chart (size = weight, fill = optionality, ring = sector), data injected from `board.json` |
| `static/js/copy-chat.js` | "copy for AI chat" — packages a thread (or the whole week) to the clipboard, no backend |
| `static/js/map.js` | the `/map/` **vocabulary swap** — rewrites every labeled board element to the projection the reader picks, entirely client-side (all projections' labels ship in the page; no rebuild), loaded via `board-swap.html` |
| `static/js/diagonal-plate.js` | the **reach=spend diagonal** on the circular-financing thread pages (thrust × gravity; size = weight, fill = burn heat, ring = sector), data injected as `window.DIAG_DATA` |
| `static/images/mark.png` | the logo (background already transparent) |
| `static/fonts/` | self-hosted webfont files |

## Data sourcing & API usage

The upstream tool gathers from public sources under a standing set of
commitments (the canonical signup/use-case text lives in kestrel's
[`sources/API-SIGNUP.md`](https://github.com/benthepsychologist/kestrel/blob/master/sources/API-SIGNUP.md)):

- **Personal, non-commercial research.** Low-volume, scheduled
  (daily-to-weekly) queries — never bulk harvesting, never redistribution
  of source datasets. Result sets are buffered briefly with provenance
  records of every fetch.
- **Attribution, always.** Anything published here links back to its
  original source; claim pages carry their citations inline. Data under
  attribution licenses (e.g. CC BY 4.0) is credited per its terms.
- **Well-behaved clients.** Custom lightweight collectors that respect
  documented rate limits and identify themselves with a contact
  User-Agent: `kestrel/0.1 (personal research; ben@getmensio.com)`.
- **Contact:** ben@getmensio.com — source owners with any concern about
  how their data appears here are invited to write.

## Local build

```
hugo server -D
```

## Licensing

Site code (layouts, CSS, config) is MIT-licensed — see `LICENSE`. The
published writing itself is © Ben; feel free to link and quote, not to
republish wholesale.
