/* The Projection — weekly dashboard renderer.
   Ported from kestrel's internal read-shell.html (renderHome), adapted:
   thread/entity links point at real Hugo pages (/threads/<slug>/,
   /entities/<slug>/) instead of hash routes, and there's no client-side
   routing here — this only ever renders the homepage's weekly view. */
(function () {
  "use strict";
  var el = document.getElementById("tp-payload");
  var root = document.getElementById("dashboard");
  if (!el || !root) return;
  var P = JSON.parse(el.textContent);

  var LENSES = ["ai", "money", "mental-health"];
  var LENS_LABEL = { ai: "AI", money: "Money", "mental-health": "Mental Health" };
  var lensFilter = "all";

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
  function dots(weight) {
    var w = weight || 2;
    return "●●●".slice(0, w) + "○○○".slice(0, 3 - w);
  }
  function itemLi(it, showDay) {
    var li = e("li");
    li.appendChild(frag(it.html));
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
    li.appendChild(meta);
    return li;
  }

  function render() {
    root.textContent = "";

    // today orientation strip — one card per lens with a throughline
    var th = (P.throughlines || {})[P.today] || {};
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
    var counts = {};
    P.items.forEach(function (it) {
      (it.threads || []).forEach(function (s) {
        counts[s] = counts[s] || { week: 0, today: 0 };
        counts[s].week++;
        if (it.day === P.today) counts[s].today++;
      });
    });
    function score(t) {
      var c = counts[t.slug] || { week: 0, today: 0 };
      return (t.weight || 2) * (c.today * 2 + c.week);
    }
    var upByThread = {};
    (P.upcoming || []).forEach(function (u) {
      if (u.thread) (upByThread[u.thread] = upByThread[u.thread] || []).push(u);
    });

    var tsec = e("div", "section");
    tsec.appendChild(e("h2", "", "🧵 Active threads this week"));
    var act = P.threads
      .filter(function (t) { return lensOk(t.lens) && t.status !== "resolved"; })
      .sort(function (a, b) {
        return score(b) - score(a) || (b.weight || 2) - (a.weight || 2) ||
          (b.last_seen < a.last_seen ? -1 : 1);
      });
    var quiet = [];
    act.forEach(function (t) {
      var c = counts[t.slug] || { week: 0, today: 0 };
      var ups = upByThread[t.slug] || [];
      if (!c.week && !ups.length) { quiet.push(t); return; }
      var card = e("div", "tcard");
      var head = e("div", "thead");
      head.appendChild(link("/threads/" + t.slug + "/", t.title));
      head.appendChild(e("span", "count", dots(t.weight) + "  " +
        (c.today ? "+" + c.today + " today · " : "") + c.week + " this wk"));
      card.appendChild(head);
      card.appendChild(e("div", "lens", LENS_LABEL[t.lens] || t.lens));

      var wk = P.items.filter(function (it) {
        return lensOk(it.lens) && (it.threads || []).indexOf(t.slug) >= 0;
      });
      if (wk.length) {
        var ul = e("ul", "evidence");
        wk.forEach(function (it) { ul.appendChild(itemLi(it, true)); });
        card.appendChild(ul);
      }
      ups.forEach(function (u) {
        var r = e("div", "exp-row");
        r.appendChild(e("span", "due", "⏳ " + u.due));
        r.appendChild(e("span", "grow", u.claim));
        r.appendChild(e("span", "status status-" + u.status,
          u.status === "pending" ? "pending" : u.status.replace("-", " ")));
        card.appendChild(r);
      });
      tsec.appendChild(card);
    });
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
      var ul2 = e("ul", "items-list");
      loose.slice(0, 8).forEach(function (it) { ul2.appendChild(itemLi(it, true)); });
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
})();
