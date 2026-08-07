/* The Projection — weekly dashboard renderer.
   Ported from kestrel's internal read-shell.html (renderHome), adapted:
   thread/entity links point at real Hugo pages (/threads/<slug>/,
   /entities/<slug>/) instead of hash routes, and there's no client-side
   routing here — this only ever renders the homepage's weekly view. */
(function () {
  "use strict";
  var el = document.getElementById("tp-payload");
  // #dashboard was retired from /news/ (2026-08-07) but this script still
  // computes the copy-week button's data inside render() — so with no
  // container, render into a detached node instead of bailing out.
  var root = document.getElementById("dashboard") || document.createElement("div");
  if (!el) return;
  var P = JSON.parse(el.textContent);

  var LENSES = ["ai", "money", "mental-health"];
  var LENS_LABEL = { ai: "AI", money: "Money", "mental-health": "Mental Health" };
  var lensFilter = "all";
  // set fresh on every render(); read by the "copy for AI chat" button so it
  // always reflects whatever's currently on screen (incl. the lens filter).
  var counts = {}, upByThread = {}, movers = [], quiet = [], childrenOf = {};

  function e(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function frag(html) {
    var d = document.createElement("span");
    d.innerHTML = html;
    return d;
  }
  function link(href, text, cls) {
    var a = e("a", cls || "", text);
    a.href = href;
    return a;
  }
  function entName(slug) {
    var found = P.entities.find(function (x) { return x.slug === slug; });
    return found ? found.name : slug;
  }
  function threadBy(slug) {
    return P.threads.find(function (t) { return t.slug === slug; });
  }
  function lensOk(l) {
    return lensFilter === "all" || l === lensFilter;
  }
  function weekItemsFor(t) {
    return P.items.filter(function (it) {
      return lensOk(it.lens) && (it.threads || []).indexOf(t.slug) >= 0;
    }).sort(function (a, b) { return a.day < b.day ? 1 : (a.day > b.day ? -1 : 0); });
  }
  function dots(weight) {
    var w = weight || 2;
    return "●●●".slice(0, w) + "○○○".slice(0, 3 - w);
  }
  function hostname(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return null; }
  }
  // Real per-article thumbnail (it.img — captured server-side, og:image
  // with a twitter:image fallback) when there is one; otherwise a colored
  // tile (deterministic per source domain, so a given outlet always reads
  // the same) with that domain's favicon centered at real size — not the
  // tiny 14px afterthought this used to be. "Don't worry if it breaks"
  // (Ben) — a failed image load just swaps to the fallback tile.
  function feedThumb(it) {
    var wrap = e("div", "feed-thumb");
    if (it.img) {
      var img = document.createElement("img");
      img.src = it.img;
      img.alt = "";
      img.loading = "lazy";
      img.onerror = function () {
        if (img.parentNode) img.parentNode.removeChild(img);
        wrap.appendChild(fallbackTile(it));
      };
      wrap.appendChild(img);
    } else {
      wrap.appendChild(fallbackTile(it));
    }
    return wrap;
  }
  function fallbackTile(it) {
    var host = it.url && hostname(it.url);
    var tile = e("div", "feed-thumb-fallback");
    var hue = hashHue(host || it.lens || "x");
    tile.style.background = "linear-gradient(135deg, hsl(" + hue + ",55%,42%), hsl(" +
      ((hue + 40) % 360) + ",60%,28%))";
    if (host) {
      var fi = document.createElement("img");
      fi.className = "favicon-lg";
      fi.src = "https://www.google.com/s2/favicons?domain=" + host + "&sz=64";
      fi.alt = "";
      fi.loading = "lazy";
      fi.onerror = function () { fi.style.display = "none"; };
      tile.appendChild(fi);
    }
    return tile;
  }
  // A feed-card, not a list row — real space, one click target for the
  // whole row (not just the tiny "Source" link buried in the sentence).
  function feedItem(it, showDay) {
    // lens class (e.g. "feed-item ai") drives the CSS left-border accent — see main.css.
    var row = e("div", "feed-item" + (it.lens ? " " + it.lens : ""));
    var threadSlug = (it.threads && it.threads.length) ? it.threads[0] : null;
    var threadHref = threadSlug ? "/threads/" + threadSlug + "/" : null;
    var thumbLink = e("a", "feed-thumb-link");
    if (threadHref) { thumbLink.href = threadHref; }
    else if (it.url) { thumbLink.href = it.url; thumbLink.target = "_blank"; thumbLink.rel = "noopener"; }
    else thumbLink.href = "#";
    thumbLink.appendChild(feedThumb(it));
    row.appendChild(thumbLink);

    var body = e("div", "feed-body");
    body.appendChild(frag(it.html));
    var meta = e("div", "item-meta");
    var bits = [];
    if (showDay) bits.push(it.day);
    if (it.day === P.today) meta.appendChild(e("span", "new", "NEW · "));
    if (bits.length) meta.appendChild(e("span", "", bits.join(" ") + " · "));
    meta.appendChild(e("span", "", (LENS_LABEL[it.lens] || it.lens) + " "));
    (it.threads || []).forEach(function (s) {
      var t = threadBy(s);
      meta.appendChild(link("/threads/" + s + "/", (t ? t.title : s), "chip"));
    });
    (it.entities || []).forEach(function (s) {
      meta.appendChild(link("/entities/" + s + "/", entName(s), "chip ent"));
    });
    body.appendChild(meta);
    row.appendChild(body);

    // whole-row click-through: the primary click takes the reader to OUR
    // thread page (same tab), where the story-by-story timeline lives —
    // the external article stays reachable via the inline source link
    // inside it.html. Unthreaded items have no thread page to send you to,
    // so they fall back to the old behavior (Ben: "not enticed to click on
    // anything") and open the external article directly. Either way, real
    // links/buttons inside (the source link, thread/entity chips) keep
    // their own behavior via the closest("a, button") guard.
    if (threadHref) {
      row.addEventListener("click", function (ev) {
        if (ev.target.closest("a, button")) return;
        ev.stopPropagation();
        window.location.href = threadHref;
      });
    } else if (it.url) {
      row.addEventListener("click", function (ev) {
        if (ev.target.closest("a, button")) return;
        ev.stopPropagation();
        window.open(it.url, "_blank", "noopener");
      });
    }
    return row;
  }
  // Deterministic per-thread "art" — no image to source, no network call,
  // never breaks: a small gradient strip seeded by the slug so each thread
  // is visually distinct and recognizable at a glance across visits.
  var LENS_HEX = { ai: "#0070E0", money: "#A86302", "mental-health": "#E50B1E" };
  function hashHue(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % 360;
  }
  function threadArt(t) {
    var base = LENS_HEX[t.lens] || "#E01279";
    var hue = hashHue(t.slug);
    var svg = "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="36">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="' + base + '" stop-opacity="0.9"/>' +
      '<stop offset="1" stop-color="hsl(' + hue + ',70%,45%)" stop-opacity="0.75"/>' +
      '</linearGradient></defs>' +
      '<rect width="400" height="36" fill="url(#g)"/>' +
      '</svg>');
    var img = e("div", "tart");
    img.style.backgroundImage = "url('" + svg + "')";
    return img;
  }

  function render() {
    root.textContent = "";

    // Executive summary — the cross-lens roll-up, above the per-lens ones
    // (Ben, 2026-07-29). Written at curation in the digests' neutral
    // register; mechanised later (ROADMAP §Salience, stages 2-3). Only
    // shown unfiltered — filtering to a lens means you want that lens's
    // roll-up, which renders directly below.
    var th = (P.throughlines || {})[P.today] || {};
    if (th.front && lensFilter === "all") {
      var ex = e("div", "verdict exec");
      ex.appendChild(e("div", "kicker", "Executive summary · " + P.today));
      ex.appendChild(e("p", "", th.front));
      root.appendChild(ex);
    }

    // today orientation strip — one card per lens with a throughline
    var any = false;
    LENSES.filter(lensOk).forEach(function (l) {
      if (!th[l]) return;
      any = true;
      var c = e("div", "verdict");
      c.appendChild(e("div", "kicker", LENS_LABEL[l] + " · today"));
      c.appendChild(e("p", "", th[l]));
      root.appendChild(c);
    });

    // rank threads by weight x move-size (weight amplifies, never fabricates)
    counts = {};
    P.items.forEach(function (it) {
      (it.threads || []).forEach(function (s) {
        counts[s] = counts[s] || { week: 0, today: 0 };
        counts[s].week++;
        if (it.day === P.today) counts[s].today++;
      });
    });
    // meta-threads aggregate their children's activity for RANKING only —
    // a separate computed rollup (rankCounts), never stored, and never
    // shown as the card's own "N this week" badge (that stays the meta-
    // thread's own direct items, so the number on screen always matches
    // what's actually in the card — no "says 5, shows 2" mismatch).
    childrenOf = {};
    P.threads.forEach(function (t) {
      if (t.parent) (childrenOf[t.parent] = childrenOf[t.parent] || []).push(t);
    });
    var rankCounts = {};
    P.threads.forEach(function (t) { rankCounts[t.slug] = counts[t.slug] || { week: 0, today: 0 }; });
    P.threads.filter(function (t) { return t.kind === "meta"; }).forEach(function (m) {
      var agg = counts[m.slug] || { week: 0, today: 0 };
      (childrenOf[m.slug] || []).forEach(function (c) {
        var cc = counts[c.slug] || { week: 0, today: 0 };
        agg = { week: agg.week + cc.week, today: agg.today + cc.today };
      });
      rankCounts[m.slug] = agg;
    });
    function score(t) {
      var c = rankCounts[t.slug] || { week: 0, today: 0 };
      return (t.weight || 2) * (c.today * 2 + c.week);
    }
    upByThread = {};
    (P.upcoming || []).forEach(function (u) {
      if (u.thread) (upByThread[u.thread] = upByThread[u.thread] || []).push(u);
    });

    var act = P.threads
      .filter(function (t) { return lensOk(t.lens) && t.status !== "resolved"; })
      .sort(function (a, b) {
        return score(b) - score(a) || (b.weight || 2) - (a.weight || 2) ||
          (b.last_seen < a.last_seen ? -1 : 1);
      });
    movers = []; quiet = [];
    act.forEach(function (t) {
      // a meta-thread counts as active if ANY child moved, even with no
      // items tagged to the meta-thread itself directly.
      var active = t.kind === "meta" ? (rankCounts[t.slug] || {}).week : (counts[t.slug] || {}).week;
      var ups = upByThread[t.slug] || [];
      if (!active && !ups.length) quiet.push(t);
      else movers.push(t);
    });

    // highlights strip — the top movers, ranked, one line each, before any
    // full-card detail. This is the "read this if nothing else" summary.
    if (movers.length) {
      var hsec = e("div", "section highlights");
      hsec.appendChild(e("h2", "", "✨ This week's highlights"));
      var hol = e("ol", "highlight-list");
      movers.slice(0, 5).forEach(function (t) {
        var c = counts[t.slug] || { week: 0, today: 0 };
        var li = e("li", "highlight-row");
        li.appendChild(e("span", "weight-dots", dots(t.weight)));
        var g = e("span", "grow");
        g.appendChild(link("#tcard-" + t.slug, t.title));
        var meta = e("span", "hmeta", (c.today ? c.today + " new today · " : "") +
          c.week + " this wk · " + (LENS_LABEL[t.lens] || t.lens));
        g.appendChild(meta);
        li.appendChild(g);
        hol.appendChild(li);
      });
      hsec.appendChild(hol);
      root.appendChild(hsec);
    }

    // Cards are collapsed by default, always — the "China decoupling has
    // 13 points open, takes seconds to parse" problem (Ben). What stays
    // visible without a tap: the header, the developing-story summary,
    // and the one or two most recent headlines. Everything else is one
    // click away (the whole card is the click target), not hidden for good.
    function buildCard(t) {
      var c = counts[t.slug] || { week: 0, today: 0 };
      var ups = upByThread[t.slug] || [];
      var card = e("div", "tcard" + (t.kind === "meta" ? " meta" : ""));
      card.id = "tcard-" + t.slug;
      card.appendChild(threadArt(t));

      var head = e("div", "thead");
      head.appendChild(link("/threads/" + t.slug + "/", t.title));
      head.appendChild(e("span", "count", dots(t.weight) + "  " +
        (c.today ? "+" + c.today + " today · " : "") + c.week + " this wk"));
      card.appendChild(head);
      card.appendChild(e("div", "lens", LENS_LABEL[t.lens] || t.lens));

      if (t.parent) {
        var pt = threadBy(t.parent);
        if (pt) {
          var bc = e("div", "breadcrumb");
          bc.appendChild(document.createTextNode("part of "));
          bc.appendChild(link("#tcard-" + pt.slug, pt.title));
          card.appendChild(bc);
        }
      }
      if (t.blurb) card.appendChild(e("p", "tsummary", t.blurb));

      if (t.kind === "meta") {
        var kids = (childrenOf[t.slug] || []).slice()
          .sort(function (a, b) { return score(b) - score(a); });
        if (kids.length) {
          var sub = e("div", "subthreads");
          kids.forEach(function (k) {
            var kc = counts[k.slug] || { week: 0, today: 0 };
            sub.appendChild(link("#tcard-" + k.slug,
              k.title + (kc.week ? " · " + kc.week : ""), "chip"));
          });
          card.appendChild(sub);
        }
      }

      var wk = weekItemsFor(t);
      if (wk.length) {
        var headlines = e("div", "headlines feed-list");
        wk.slice(0, 2).forEach(function (it) { headlines.appendChild(feedItem(it, true)); });
        card.appendChild(headlines);
        var rest = wk.slice(2);
        if (rest.length) {
          card.appendChild(e("div", "evidence-toggle-line",
            "+ " + rest.length + " more update" + (rest.length === 1 ? "" : "s") + " — tap to expand"));
          var body = e("div", "evidence-body");
          var ul = e("div", "evidence feed-list");
          rest.forEach(function (it) { ul.appendChild(feedItem(it, true)); });
          body.appendChild(ul);
          card.appendChild(body);
        }
      }

      if (ups.length) {
        var pendBtn = e("button", "pending-toggle", "⏳ " + ups.length + " pending");
        pendBtn.type = "button";
        pendBtn.addEventListener("click", function (ev) {
          ev.stopPropagation();
          card.classList.toggle("pending-open");
        });
        card.appendChild(pendBtn);
        var pendBody = e("div", "pending-body");
        ups.forEach(function (u) {
          var r = e("div", "exp-row");
          r.appendChild(e("span", "due", "⏳ " + u.due));
          r.appendChild(e("span", "grow", u.claim));
          r.appendChild(e("span", "status status-" + u.status,
            u.status === "pending" ? "pending" : u.status.replace("-", " ")));
          pendBody.appendChild(r);
        });
        card.appendChild(pendBody);
      }

      var copyBtn = e("button", "copy-chat-btn small", "💬 Copy this thread");
      copyBtn.type = "button";
      copyBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (window.TPChatCopy) window.TPChatCopy.copyToClipboard(threadChatText(t), copyBtn);
      });
      card.appendChild(copyBtn);

      // whole-card click expands the "more updates" body — except real
      // links/buttons, which keep their own behavior (Ben: "click anywhere
      // on the CARD to expand to see all the sources").
      card.addEventListener("click", function (ev) {
        if (ev.target.closest("a, button")) return;
        card.classList.toggle("expanded");
      });
      return card;
    }

    var tsec = e("div", "section");
    tsec.appendChild(e("h2", "", "🧵 Active threads this week"));
    movers.forEach(function (t) { tsec.appendChild(buildCard(t)); });
    if (quiet.length) {
      var d = e("details", "quiet");
      var s = e("summary", "", quiet.length + " quiet thread" + (quiet.length === 1 ? "" : "s") +
        " (no evidence or dated expectations this week)");
      d.appendChild(s);
      quiet.forEach(function (t) {
        var r = e("div", "qrow");
        r.appendChild(e("span", "dash", "—"));
        var g = e("span", "");
        g.appendChild(link("/threads/" + t.slug + "/", t.title));
        g.appendChild(e("span", "", "  · last seen " + t.last_seen));
        r.appendChild(g);
        d.appendChild(r);
      });
      tsec.appendChild(d);
    }
    root.appendChild(tsec);

    // not yet a thread
    var loose = P.items.filter(function (it) { return lensOk(it.lens) && !(it.threads || []).length; });
    if (loose.length) {
      var lsec = e("div", "section");
      lsec.appendChild(e("h2", "", "📎 Not yet a thread"));
      var lede = e("p", "lede", "Entity-tagged items with no thread yet — candidates if they recur. Full list on the ");
      lede.appendChild(link("/interest/", "Interest"));
      lede.appendChild(document.createTextNode(" page."));
      lsec.appendChild(lede);
      var ul2 = e("div", "items-list feed-list");
      loose.slice(0, 8).forEach(function (it) { ul2.appendChild(feedItem(it, true)); });
      lsec.appendChild(ul2);
      root.appendChild(lsec);
    }

    // calendar: expectations with no thread
    var noThread = (P.upcoming || []).filter(function (u) { return !u.thread; })
      .sort(function (a, b) { return a.due < b.due ? -1 : 1; });
    if (noThread.length) {
      var csec = e("div", "section");
      csec.appendChild(e("h2", "", "⏳ Also on the calendar"));
      noThread.forEach(function (u) {
        var r = e("div", "calrow");
        r.appendChild(e("span", "due", u.due));
        r.appendChild(e("span", "claim", u.claim));
        r.appendChild(e("span", "status status-" + u.status,
          u.status === "pending" ? "pending" : u.status.replace("-", " ")));
        csec.appendChild(r);
      });
      root.appendChild(csec);
    }

    // active entities this week
    var esec = e("div", "section");
    esec.appendChild(e("h2", "", "👤 Active people & entities"));
    var ec = {};
    P.items.filter(function (it) { return lensOk(it.lens); }).forEach(function (it) {
      (it.entities || []).forEach(function (s) { ec[s] = (ec[s] || 0) + 1; });
    });
    var order = Object.keys(ec).sort(function (a, b) { return ec[b] - ec[a]; });
    var cloud = e("div", "entity-cloud");
    order.forEach(function (s) {
      cloud.appendChild(link("/entities/" + s + "/", entName(s) + " ×" + ec[s], "chip ent"));
    });
    if (!order.length) cloud.appendChild(e("span", "", "None under this filter."));
    esec.appendChild(cloud);
    root.appendChild(esec);

    // map changes
    if ((P.map_changes || []).length) {
      var msec = e("div", "section");
      msec.appendChild(e("h2", "", "🔄 Map changes this week"));
      var mul = e("ul", "mc-list");
      P.map_changes.forEach(function (m) {
        var li = e("li");
        li.appendChild(e("span", "tdate", m.date));
        li.appendChild(document.createTextNode(m.text));
        mul.appendChild(li);
      });
      msec.appendChild(mul);
      root.appendChild(msec);
    }

    if (!any && !act.some(function (t) { return (counts[t.slug] || {}).week; })) {
      // nothing to say under this filter — leave the sections empty rather
      // than invent a message; the section headers already communicate it
    }
  }

  document.querySelectorAll(".chip-row .chip").forEach(function (c) {
    c.addEventListener("click", function () {
      document.querySelectorAll(".chip-row .chip").forEach(function (x) { x.classList.remove("on"); });
      c.classList.add("on");
      lensFilter = c.dataset.lens;
      render();
    });
  });
  render();

  // "Copy this week for AI chat" — data-driven (not DOM-walked, since the
  // homepage already has the structured payload). Reuses counts/movers/
  // quiet/upByThread, which render() keeps fresh on every re-render
  // (including lens-filter changes), so the copy always matches the screen.
  function itemText(it) {
    if (!window.TPChatCopy) return (it.html || "").replace(/<[^>]+>/g, "");
    var d = document.createElement("div");
    d.innerHTML = it.html;
    return window.TPChatCopy.domToText(d).replace(/\n+/g, " ").trim();
  }
  // Per-card "Copy this thread" — same idea as the whole-week button, one
  // level down. A meta-thread's copy lists its sub-threads (titles +
  // counts) rather than flattening every child's items in — same "big
  // picture, not a flood" rule the card itself follows.
  function threadChatText(t) {
    var L = [];
    L.push("# " + t.title);
    L.push("Status: " + (t.status || "").toUpperCase() + " · Lens: " + (LENS_LABEL[t.lens] || t.lens) +
      " · Opened: " + t.opened + " · Last seen: " + t.last_seen);
    if (t.blurb) L.push("\nWatch: " + t.blurb);
    if (t.parent) {
      var pt = threadBy(t.parent);
      if (pt) L.push("\nPart of: " + pt.title);
    }
    if (t.kind === "meta" && (childrenOf[t.slug] || []).length) {
      L.push("\n## Sub-threads");
      childrenOf[t.slug].forEach(function (k) {
        var kc = counts[k.slug] || { week: 0, today: 0 };
        L.push("- " + k.title + " — " + kc.week + " this wk");
      });
    }
    var wk = weekItemsFor(t);
    if (wk.length) {
      L.push("\n## This week's evidence");
      wk.forEach(function (it) { L.push("- " + itemText(it)); });
    }
    (upByThread[t.slug] || []).forEach(function (u) {
      L.push("⏳ due " + u.due + ": " + u.claim + " [" + u.status + "]");
    });
    L.push("\nSource: https://theprojection.org/threads/" + t.slug + "/ (The Projection)");
    L.push("\n---\nI'm pasting a tracked news thread from The Projection. Ask me " +
      "anything about it, or tell me what stands out.");
    return L.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  function buildWeeklyChatText() {
    var L = [];
    L.push("# The Projection — weekly read");
    L.push("Week of " + P.week_start + " · centered on " + P.today + " · generated " + P.generated +
      (lensFilter !== "all" ? " · filtered to " + LENS_LABEL[lensFilter] : ""));
    var th = (P.throughlines || {})[P.today] || {};
    LENSES.filter(lensOk).forEach(function (l) {
      if (th[l]) L.push("\n**" + LENS_LABEL[l] + " today:** " + th[l]);
    });
    if (movers.length) {
      L.push("\n## This week's highlights");
      movers.slice(0, 5).forEach(function (t, i) {
        var c = counts[t.slug] || { week: 0, today: 0 };
        L.push((i + 1) + ". " + t.title + " — " + c.week + " this wk" +
          (c.today ? ", " + c.today + " today" : ""));
      });
    }
    if (movers.length) {
      L.push("\n## Active threads");
      movers.forEach(function (t) {
        L.push("\n### " + t.title + " (" + (LENS_LABEL[t.lens] || t.lens) + ")");
        P.items.filter(function (it) {
          return lensOk(it.lens) && (it.threads || []).indexOf(t.slug) >= 0;
        }).forEach(function (it) { L.push("- " + itemText(it)); });
        (upByThread[t.slug] || []).forEach(function (u) {
          L.push("⏳ due " + u.due + ": " + u.claim + " [" + u.status + "]");
        });
      });
    }
    if (quiet.length) {
      L.push("\n## Quiet threads (no movement this week)");
      quiet.forEach(function (t) { L.push("- " + t.title + " · last seen " + t.last_seen); });
    }
    var noThread = (P.upcoming || []).filter(function (u) { return !u.thread; });
    if (noThread.length) {
      L.push("\n## Also on the calendar");
      noThread.forEach(function (u) { L.push("- " + u.due + ": " + u.claim + " [" + u.status + "]"); });
    }
    L.push("\n---\nI'm pasting The Projection's tracked weekly read (from kestrel, " +
      "a personal intelligence feed). Ask me anything about these developments, " +
      "or tell me what stands out.");
    return L.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  var weekBtn = document.getElementById("copy-chat-week");
  if (weekBtn && window.TPChatCopy) {
    weekBtn.addEventListener("click", function () {
      window.TPChatCopy.copyToClipboard(buildWeeklyChatText(), weekBtn);
    });
  }
})();
