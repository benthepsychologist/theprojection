# The Projection

**theprojection.org** — a public, thread-centric read on AI inference
economics, governed infrastructure, and epistemics. Published, not
generated on the spot: every thread is curated daily against dated
evidence before it's ever tracked, and once it's tracked it publishes
automatically — no separate manual approve-before-it-goes-live step. See
[`/about/`](https://theprojection.org/about/) for the human-facing version
of this and the full picture of how it's used.

This repo is the **published surface only**. It is generated and pushed by
a separate private tool (kestrel) — nothing about how threads are collected,
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

| path | what |
| --- | --- |
| `hugo.yaml` | site config — lens labels/colors, menus, tagline |
| `data/payload.json`, `data/board.json`, `data/claims.json` | feed + board-node + claim data — **generated** (published from kestrel), do not hand-edit |
| `content/threads/*.md`, `content/entities/*.md`, `content/map/*`, `content/claim/*` | one page per thread/entity/node/claim — **generated**, do not hand-edit |
| `content/about.md`, `content/metric/*.md` | the hand-authored pages — about, plus one methodology page per board metric |
| `layouts/` | homepage, thread page, map/claim/metric pages, shared partials |
| `assets/css/main.css` | the whole brand system — palette sampled from the mark, light-only on purpose; board tokens scoped via `.board-paper`; `#E01279` reserved for selection/"new" |
| `static/js/dashboard.js` | homepage renderer — highlights strip, ranked/collapsible thread cards |
| `static/js/board-plate.js` | the `/map/` plate — thrust × gravity bubble chart (size = weight, fill = optionality, ring = sector), data injected from `board.json` |
| `static/js/copy-chat.js` | "copy for AI chat" — packages a thread (or the whole week) to the clipboard, no backend |
| `static/images/mark.png` | the logo (background already transparent) |
| `static/fonts/` | self-hosted webfont files |

## Local build

```
hugo server -D
```

## Licensing

Site code (layouts, CSS, config) is MIT-licensed — see `LICENSE`. The
published writing itself is © Ben; feel free to link and quote, not to
republish wholesale.
