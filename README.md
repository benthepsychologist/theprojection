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
  on every push to `main` (build command `hugo --gc --minify`, output dir
  `public`).
- Self-hosted, OFL/Apache-licensed webfonts (Piazzolla, Public Sans,
  Newsreader, IBM Plex Mono) — no font-CDN calls at runtime.

## Layout

| path | what |
| --- | --- |
| `hugo.yaml` | site config — lens labels/colors, menus, tagline |
| `data/payload.json` | homepage feed data — **generated**, do not hand-edit |
| `content/threads/*.md`, `content/entities/*.md` | one page per published thread/entity — **generated**, do not hand-edit |
| `content/about.md` | the one hand-authored page |
| `layouts/` | homepage, thread page, list page, shared partials |
| `assets/css/main.css` | the whole brand system — palette sampled from the mark, see `/about/` |
| `static/js/dashboard.js` | homepage renderer — highlights strip, ranked/collapsible thread cards |
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
