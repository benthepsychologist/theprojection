/* The Projection — "Copy for AI chat" packaging.
   No backend, no login: formats on-page content (thread timelines, or the
   whole week on the homepage) into clean text on the clipboard, so a
   visitor can paste it into Claude/ChatGPT/Perplexity/whatever and ask
   questions there. Shared by thread single pages (self-wiring below) and
   the homepage dashboard (dashboard.js calls window.TPChatCopy directly). */
(function () {
  "use strict";

  // Walks a rendered DOM subtree into readable markdown-ish plain text.
  // Kept deliberately simple — this feeds an LLM's context window, not a
  // markdown renderer, so "good enough to read" beats "byte-perfect".
  function domToText(root) {
    function walk(node) {
      if (node.nodeType === 3) return node.textContent;
      if (node.nodeType !== 1) return "";
      var tag = node.tagName.toLowerCase();
      var cls = node.className || "";
      if (tag === "summary") return ""; // collapse-toggle label, not content
      if (typeof cls === "string" && cls.indexOf("item-meta") !== -1) {
        var m = node.textContent.replace(/\s+/g, " ").trim();
        return m ? " [" + m + "]" : "";
      }
      var kids = "";
      node.childNodes.forEach(function (c) { kids += walk(c); });
      switch (tag) {
        case "strong": case "b": return "**" + kids.trim() + "**";
        case "em": case "i": return "_" + kids.trim() + "_";
        case "code": return "`" + kids.trim() + "`";
        case "a":
          var href = node.getAttribute("href") || "";
          if (!href || href.charAt(0) === "#") return kids;
          try { href = new URL(href, window.location.href).href; } catch (e) {}
          return kids.trim() + " (" + href + ")";
        case "li": return "- " + kids.trim() + "\n";
        case "ul": case "ol": return kids + "\n";
        case "h1": return "\n# " + kids.trim() + "\n";
        case "h2": return "\n## " + kids.trim() + "\n";
        case "h3": return "\n### " + kids.trim() + "\n";
        case "h4": return "\n#### " + kids.trim() + "\n";
        case "p": return kids.trim() + "\n\n";
        case "br": return "\n";
        default: return kids; // div, span, details, section — structural only
      }
    }
    return walk(root).replace(/\n{3,}/g, "\n\n").trim();
  }

  function copyToClipboard(text, btn) {
    function done(ok) {
      if (!btn) return;
      var orig = btn.getAttribute("data-orig-label");
      if (orig === null) { orig = btn.textContent; btn.setAttribute("data-orig-label", orig); }
      btn.textContent = ok ? "✓ Copied — paste into any chat" : "Copy failed — select text manually";
      setTimeout(function () { btn.textContent = orig; }, 2400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      var ok = document.execCommand("copy");
      document.body.removeChild(ta);
      done(ok);
    } catch (e) {
      done(false);
    }
  }

  window.TPChatCopy = { domToText: domToText, copyToClipboard: copyToClipboard };

  // Deterministic per-thread "art" strip (same generator as dashboard.js —
  // duplicated, not shared, since these load on different pages and it's
  // a dozen lines). No image to source, no network call, never breaks.
  var LENS_HEX = { ai: "#0070E0", money: "#A86302", "mental-health": "#E50B1E" };
  function hashHue(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % 360;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var art = document.querySelector(".thread-art[data-slug]");
    if (art) {
      var base = LENS_HEX[art.getAttribute("data-lens")] || "#E01279";
      var hue = hashHue(art.getAttribute("data-slug"));
      var svg = "data:image/svg+xml;utf8," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="10">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0" stop-color="' + base + '" stop-opacity="0.9"/>' +
        '<stop offset="1" stop-color="hsl(' + hue + ',70%,45%)" stop-opacity="0.75"/>' +
        '</linearGradient></defs><rect width="900" height="10" fill="url(#g)"/></svg>');
      art.style.backgroundImage = "url('" + svg + "')";
    }
  });

  // Self-wiring for thread single pages: a button#copy-chat-thread with
  // data-title/data-meta/data-blurb/data-url, packaging #chat-copy-root.
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("copy-chat-thread");
    var root = document.getElementById("chat-copy-root");
    if (!btn || !root) return;
    btn.addEventListener("click", function () {
      var title = btn.getAttribute("data-title") || document.title;
      var meta = btn.getAttribute("data-meta") || "";
      var blurb = btn.getAttribute("data-blurb") || "";
      var url = btn.getAttribute("data-url") || window.location.href;
      var text = "# " + title + "\n" + meta +
        (blurb ? "\n\nWatch: " + blurb : "") +
        "\n\nSource: " + url + " (The Projection, from kestrel's tracked read)\n\n" +
        domToText(root) +
        "\n\n---\nI'm pasting a tracked news timeline on this story from The " +
        "Projection. Ask me anything about it, or tell me what stands out.";
      copyToClipboard(text, btn);
    });
  });
})();
