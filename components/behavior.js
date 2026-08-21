export function initDWW() {
  if (typeof document === "undefined") return;
  /* ============================================================
     Digital Web Weaver — per-page behaviour
     Data-attribute driven so one file serves every page.

     Scope note: this only wires up behaviour that is local to the
     current page's content (FAQ, stack tabs, process pipeline,
     scrollspy, reveal-on-scroll, lead form, stack-icon fallback).
     It's called from <Interactions/>, which is rendered inside each
     page and therefore remounts — and re-runs this — on every
     client-side navigation, so a fresh page's DOM always gets wired.

     Shell-level behaviour (mobile drawer, sidebar collapse, sidebar
     folder tree, click-to-scroll) lives in components/Shell.jsx
     instead, because Shell mounts once for the whole session — binding
     it here would only ever work for the first page visited.

     Cleanup note: every addEventListener call below is paired with an
     entry in `teardown`, and the returned cleanup function runs all of
     them. This isn't just tidiness — React 18 Strict Mode deliberately
     mounts effects twice in dev (mount → cleanup → mount again) to
     surface exactly this class of bug. Without a complete teardown, the
     second mount adds a second set of listeners on top of the first, so
     a single click fires the FAQ/pipeline/tab toggle twice and the two
     calls cancel each other out — the feature looks completely dead
     even though the handler code itself is correct.
     ============================================================ */

  "use strict";
  document.documentElement.classList.add("js");

  var content = document.querySelector(".content");
  var observers = [];
  var teardown = [];

  function on(el, event, handler) {
    el.addEventListener(event, handler);
    teardown.push(function () { el.removeEventListener(event, handler); });
  }

  /* ---- Scrollspy: highlight active section in activity bar + tabs ---- */
  var sections = Array.prototype.slice.call(document.querySelectorAll(".content section[id]"));
  function setActive(id) {
    document.querySelectorAll("[data-target]").forEach(function (n) {
      n.classList.toggle("is-active", n.getAttribute("data-target") === id);
    });
  }
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(en.target.id);
      });
    }, { root: content, rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
    observers.push(spy);
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal, .stagger");
  if (reveals.length && "IntersectionObserver" in window) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); revObs.unobserve(en.target); }
      });
    }, { root: content, rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
    reveals.forEach(function (r) { revObs.observe(r); });
    observers.push(revObs);
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---- Stack category tabs ---- */
  var stackWrap = document.querySelector("[data-stack]");
  if (stackWrap) {
    var tabs = stackWrap.querySelectorAll(".stack-tab");
    var cells = document.querySelectorAll(".stack-cell");
    function showCat(cat) {
      tabs.forEach(function (t) { t.classList.toggle("is-active", t.getAttribute("data-cat") === cat); });
      var i = 0;
      cells.forEach(function (c) {
        var match = c.getAttribute("data-cat") === cat;
        c.classList.toggle("is-hidden", !match);
        if (match) { i++; var idx = c.querySelector(".stack-cell__idx"); if (idx) idx.textContent = ("0" + i).slice(-2); }
      });
    }
    tabs.forEach(function (t) { on(t, "click", function () { showCat(t.getAttribute("data-cat")); }); });
    var first = stackWrap.querySelector(".stack-tab");
    if (first) showCat(first.getAttribute("data-cat"));
  }

  /* ---- Tech-stack icon fallback (letter badge if brand logo fails) ---- */
  document.querySelectorAll(".stack-cell__logo img").forEach(function (img) {
    on(img, "error", function () {
      img.style.display = "none";
      var f = img.nextElementSibling;
      if (f) f.style.display = "flex";
    });
  });

  /* ---- Process pipeline ---- */
  var pipeWrap = document.querySelector("[data-pipeline]");
  if (pipeWrap) {
    var pipes = pipeWrap.querySelectorAll(".pipe");
    var fill = pipeWrap.querySelector(".pipeline__fill");
    var panels = document.querySelectorAll("[data-step-panel]");
    var total = pipes.length;
    function selectStep(idx) {
      pipes.forEach(function (p, i) {
        p.classList.toggle("is-done", i < idx);
        p.classList.toggle("is-current", i === idx);
        var dot = p.querySelector(".pipe__dot");
        if (dot) dot.textContent = i < idx ? "✓" : p.getAttribute("data-num");
      });
      if (fill) fill.style.width = "calc((100% - 40px) * " + (total > 1 ? idx / (total - 1) : 0) + ")";
      panels.forEach(function (pn) { pn.hidden = parseInt(pn.getAttribute("data-step-panel"), 10) !== idx; });
    }
    pipes.forEach(function (p, i) { on(p, "click", function () { selectStep(i); }); });
    selectStep(0);
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq__q").forEach(function (q) {
    on(q, "click", function () {
      var item = q.closest(".faq__item");
      var open = item.classList.toggle("is-open");
      var sign = q.querySelector(".sign");
      if (sign) sign.textContent = open ? "[-]" : "[+]";
    });
  });

  /* ---- Typewriter effect (decorative code panels, e.g. homepage hero) ----
     Opt-in via [data-typewriter] rather than every .code panel sitewide.
     Walks the server-rendered markup's real DOM structure (not a string
     regex) so the existing per-token syntax-highlight spans (.kw/.fnn/
     .num/.str/.cmt/...) stay intact at every reveal step instead of
     flashing unstyled text — the reveal budget is a character count of
     visible text, and at each tick we re-walk the tree emitting whatever
     tags/text fall within that budget, closing anything still open. */
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function countChars(node) {
    if (node.nodeType === 3) return node.nodeValue.length;
    if (node.nodeType !== 1) return 0;
    var n = 0;
    for (var i = 0; i < node.childNodes.length; i++) n += countChars(node.childNodes[i]);
    return n;
  }
  // Renders as much of `node`'s subtree as fits in `budget` visible
  // characters. Returns the HTML produced and how much budget is left.
  function renderNode(node, budget) {
    if (budget <= 0) return { html: "", remaining: 0 };
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      if (text.length <= budget) return { html: escapeHtml(text), remaining: budget - text.length };
      return { html: escapeHtml(text.slice(0, budget)), remaining: 0 };
    }
    if (node.nodeType !== 1) return { html: "", remaining: budget };
    var tag = node.tagName.toLowerCase();
    var html = "<" + tag + (node.className ? ' class="' + node.className + '"' : "") + ">";
    var remaining = budget;
    for (var i = 0; i < node.childNodes.length && remaining > 0; i++) {
      var res = renderNode(node.childNodes[i], remaining);
      html += res.html;
      remaining = res.remaining;
    }
    html += "</" + tag + ">";
    return { html: html, remaining: remaining };
  }

  var typeTimers = [];
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-typewriter]").forEach(function (el) {
    if (reducedMotion) return; // server-rendered content is already there — leave it static
    var original = el.cloneNode(true);
    var rootChildren = Array.prototype.slice.call(original.childNodes);
    var total = countChars(original);
    if (!total) return;

    // Character index at which each root-level child (a .ln span or a
    // line-content span, alternating) finishes — used to add a short
    // pause after a full line completes, like a real Enter keystroke,
    // rather than a flat per-character rate throughout.
    var boundaries = [];
    var running = 0;
    rootChildren.forEach(function (child, i) {
      running += countChars(child);
      boundaries.push({ at: running, lineEnd: i % 2 === 1 });
    });

    // Cleared lazily on the first real tick, not here — React Strict
    // Mode's dev-only double-invoke runs this whole setup once as a
    // throwaway mount, cleans it up (cancelling the timer below) before
    // it ever fires, then runs it again for real. Clearing el.innerHTML
    // synchronously here would wipe the source content during that
    // throwaway first pass with nothing yet queued to restore it, so the
    // second (real) mount would clone an already-empty element.
    var revealed = 0;
    var started = false;
    function tick() {
      if (!started) { started = true; el.innerHTML = ""; }
      revealed++;
      if (revealed >= total) {
        el.innerHTML = original.innerHTML; // exact server-rendered markup, no reconstruction drift
        return;
      }
      var html = "";
      var remaining = revealed;
      for (var i = 0; i < rootChildren.length && remaining > 0; i++) {
        var res = renderNode(rootChildren[i], remaining);
        html += res.html;
        remaining = res.remaining;
      }
      el.innerHTML = html + '<span class="caret typing"></span>';
      var boundary = boundaries.filter(function (b) { return b.at === revealed; })[0];
      var delay = boundary ? (boundary.lineEnd ? 130 : 40) : 16;
      typeTimers.push(setTimeout(tick, delay));
    }
    typeTimers.push(setTimeout(tick, 400)); // brief pause before typing starts
  });

  /* ---- Project carousel arrow buttons ---- */
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector("[data-carousel-track]");
    var prev = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");
    if (!track) return;
    function scrollByCard(dir) {
      var card = track.querySelector(".work-mini");
      var step = card ? card.getBoundingClientRect().width + 16 : 280;
      track.scrollBy({ left: dir * step, behavior: "smooth" });
    }
    if (prev) on(prev, "click", function () { scrollByCard(-1); });
    if (next) on(next, "click", function () { scrollByCard(1); });
  });

  /* ---- Lead form ---- */
  document.querySelectorAll("[data-form]").forEach(function (form) {
    var card = form.closest(".formcard");
    var success = card ? card.querySelector(".form__success") : null;
    var submitBtn = form.querySelector('[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.textContent : "";
    var errorEl = null;

    function showError(msg) {
      if (!errorEl) {
        errorEl = document.createElement("p");
        errorEl.className = "form__error";
        form.appendChild(errorEl);
      }
      errorEl.textContent = msg;
    }

    on(form, "submit", function (e) {
      e.preventDefault();
      var nameField = form.querySelector('[name="name"]');
      var data = Object.fromEntries(new FormData(form).entries());
      data.page = window.location.pathname;

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending…"; }
      if (errorEl) errorEl.textContent = "";

      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) { if (!res.ok) throw new Error("request failed"); })
        .then(function () {
          if (success) {
            var slot = success.querySelector("[data-name-slot]");
            if (slot) {
              var n = nameField && nameField.value.trim();
              slot.textContent = n ? ", " + n.split(" ")[0] : "";
            }
            form.hidden = true;
            success.hidden = false;
          }
        })
        .catch(function () {
          showError("Something went wrong sending this — please try again, or email info@digitalwebweaver.com directly.");
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitLabel; }
        });
    });
    var reset = success ? success.querySelector(".s-reset") : null;
    if (reset) {
      on(reset, "click", function () {
        form.reset(); success.hidden = true; form.hidden = false;
      });
    }
  });

  // Called on unmount (page navigation, or React Strict Mode's dev-only
  // double-invoke) so nothing from this mount survives into the next one.
  return function cleanup() {
    observers.forEach(function (o) { o.disconnect(); });
    teardown.forEach(function (off) { off(); });
    typeTimers.forEach(function (t) { clearTimeout(t); });
  };
}
