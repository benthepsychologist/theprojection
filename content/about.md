---
title: "About"
---

Everything you see is a projection of something you don't. A person's
behavior is a projection of emotional systems they can barely articulate. A
file on a screen is a projection of canonical state stored somewhere else. A
company's products are a projection of its org chart. The surface is never
the system.

**The Projection** is a running read on three things: how AI inference
economics actually work underneath the headline, what governed infrastructure
gets right that ad-hoc infrastructure doesn't, and how to tell a widely
repeated claim from a well-supported one. It's written by a clinical
psychologist who also builds software — the through-line across all three is
the same one.

Threads here are published, not generated on the spot — each one is a
narrative tracked over time, with dated evidence and a link back to its
source, curated daily under a fixed rubric: signal over noise, sourced
claims only, no framing spin. The editorial judgment happens when
something starts being tracked, not as a separate approve-before-it-goes-
live gate — once a thread exists, it publishes automatically. Nothing
here is un-curated; it's just not hand-gated a second time on the way out.

**How it's built.** This site is a thin, static export. All the real work —
sweeping public sources, curating each day, tracking threads over time —
happens in kestrel, a private tool that never publishes anything itself.
What you're reading is generated from kestrel's tracked state and pushed
here: Hugo renders it, Cloudflare serves it, nothing runs server-side. The
site's own code is public and [MIT-licensed](https://github.com/benthepsychologist/theprojection-site)
if you want to see exactly how a thread becomes a page.

**What's at the top of every page.** Each page opens with a readout in
three parts: *Breaking* (anything from today), *News* (the last seven
days), and a short *Summary*. The first two are assembled mechanically
from the same dated item record the threads themselves are built from —
no model writes them, so they can't drift from what the sources actually
say. The summary is different: it's written by a language model against
that page's tracked material, and regenerated only when the evidence
underneath it changes. Treat it as orientation, not citation — the dated
bullets and their source links are the record.

Above all of that, rarely, a **flash** — a single banner carrying
something that would lead a general news front page whether or not it
touches AI, global capital, or mental health. The bar is deliberately high: most
days there is none, and if you start seeing them often, that's a bug
rather than a busy week. A flash can be dismissed; it returns on reload.

**How I use it.** This started as a private morning read — three lenses I
actually track, so I'm not reconstructing context on a news cycle from
scratch every day. What's here is that same read, minus whatever's
genuinely just mine to know. If you want to dig into a thread rather than
just read it, every thread page has a button that packages its whole
tracked timeline for pasting into whatever AI chat you already use — that's
how I actually interrogate one when something looks off.

Questions, corrections, or something worth tracking that isn't here yet:
open an issue on [the site's repo](https://github.com/benthepsychologist/theprojection-site).
