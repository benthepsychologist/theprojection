/* map.js — the vocabulary swap. The board (data/board.json) is neutral; the
   page renders the default projection server-side, and this rewrites every
   labeled element to whichever projection the reader picks. No rebuild, no
   round-trip — the labels for every projection are already in the page.

   Element contract (set by layouts/map/list.html):
     data-lk="rank:<slug>" | "posture:<slug>" | "condition:<slug>" | "house"
     data-name="<full name>"           (house elements only)
     data-gloss="rank:<slug>"          (legend gloss text)
     data-masthead                     (the one-line masthead)
     data-housekind="label"|"gloss"    (the house-kind's own label/gloss)
   A kind maps to its plural key in the label data (rank -> ranks, etc.). */
(function () {
  var L = window.__BOARD_LABELS;
  if (!L) return;
  var DEFAULT = window.__BOARD_DEFAULT;
  var active = null;
  try { active = localStorage.getItem("projection"); } catch (e) {}
  if (!active || !L[active]) active = DEFAULT;

  function houseLabel(tmpl, name) {
    var parts = (name || "").trim().split(/\s+/);
    return tmpl.replace("{surname}", parts[parts.length - 1]).replace("{name}", name);
  }

  function lookup(p, key) { // "rank:integrated-power" -> entry object
    var i = key.indexOf(":");
    if (i < 0) return null;
    var map = key.slice(0, i) + "s", val = key.slice(i + 1);
    return p[map] ? p[map][val] : null;
  }

  function apply() {
    var p = L[active];
    if (!p) return;

    document.querySelectorAll("[data-lk]").forEach(function (el) {
      var key = el.getAttribute("data-lk");
      if (key === "house") {
        el.textContent = houseLabel(p.house.template, el.getAttribute("data-name"));
        return;
      }
      var entry = lookup(p, key);
      if (entry && entry.label != null) el.textContent = entry.label;
    });

    document.querySelectorAll("[data-gloss]").forEach(function (el) {
      var entry = lookup(p, el.getAttribute("data-gloss"));
      if (entry && entry.gloss != null) el.textContent = entry.gloss;
    });

    document.querySelectorAll("[data-housekind]").forEach(function (el) {
      var f = el.getAttribute("data-housekind");
      if (p.house && p.house[f] != null) el.textContent = p.house[f];
    });

    document.querySelectorAll("[data-masthead]").forEach(function (el) {
      el.textContent = p.masthead || "";
    });

    document.querySelectorAll(".vocab-opt").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-proj") === active);
    });
  }

  document.querySelectorAll(".vocab-opt").forEach(function (b) {
    b.addEventListener("click", function () {
      active = b.getAttribute("data-proj");
      try { localStorage.setItem("projection", active); } catch (e) {}
      apply();
    });
  });

  apply(); // reconcile to the stored choice on load (server rendered DEFAULT)
})();
