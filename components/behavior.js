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

  /* ---- Lead form (mock submit) ---- */
  document.querySelectorAll("[data-form]").forEach(function (form) {
    var card = form.closest(".formcard");
    var success = card ? card.querySelector(".form__success") : null;
    on(form, "submit", function (e) {
      e.preventDefault();
      var nameField = form.querySelector('[name="name"]');
      if (success) {
        var slot = success.querySelector("[data-name-slot]");
        if (slot) {
          var n = nameField && nameField.value.trim();
          slot.textContent = n ? ", " + n.split(" ")[0] : "";
        }
        form.hidden = true;
        success.hidden = false;
      }
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
  };
}
