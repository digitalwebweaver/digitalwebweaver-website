// Same contract/consent trail as react-app's lead forms (POST /api/lead).
export const CONSENT_NOTICE = "privacy-policy-2026-09-25";
function submitLead(e, f) {
  e.preventDefault();
  if (!f.reportValidity()) return;
  const data = Object.fromEntries(new FormData(f).entries());
  if (data.description) { data.message = data.description; delete data.description; }
  data.page = location.pathname;
  data.consent = true;
  data.consentAt = new Date().toISOString();
  data.consentNotice = CONSENT_NOTICE;
  const btn = f.querySelector('[type=submit]'), label = btn && btn.textContent;
  let err = f.querySelector('.lead__err');
  if (!err) { err = document.createElement('p'); err.className = 'lead__err'; err.setAttribute('role', 'alert'); err.style.cssText = 'color:#c8174f;margin-top:10px;font-size:14px'; f.append(err); }
  err.textContent = '';
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  fetch('/api/lead/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    .then(r => { if (!r.ok) throw new Error('request failed'); })
    .then(() => {
      f.hidden = true;
      const ok = f.parentElement.querySelector('.lead-ok');
      if (ok) { ok.hidden = false; ok.focus(); }
    })
    .catch(() => { err.textContent = 'Something went wrong sending this. Please try again, or email info@digitalwebweaver.com directly.'; })
    .finally(() => { if (btn) { btn.disabled = false; btn.textContent = label; } });
}

export function initDWW() {
  const ac = new AbortController(), timers = new Set();
  let dead = false;
  const win = (t, fn, o) => window.addEventListener(t, fn, { ...o, signal: ac.signal });
  const doc = (t, fn, o) => document.addEventListener(t, fn, { ...o, signal: ac.signal });
  const setTimeout = (fn, ms) => { const id = window.setTimeout(fn, ms); timers.add(id); return id; };
  const setInterval = (fn, ms) => { const id = window.setInterval(fn, ms); timers.add(id); return id; };
  const clearTimeout = id => window.clearTimeout(id);
  const rAF = fn => (dead ? 0 : requestAnimationFrame(fn));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // mobile drawer
  const burger = $('#burger'), nav = $('#nav'), header = $('#header');
  const setMenu = open => {
    if (!burger || !nav) return;
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) nav.style.top = header.getBoundingClientRect().bottom + 'px';
  };
  burger && burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  nav && $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  win('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  win('resize', () => { if (innerWidth > 1080) setMenu(false); closeAll && closeAll(); });

  // mega menus
  const triggers = $$('.nav__trigger');
  const desktop = () => innerWidth > 1080;
  const closeAll = except => triggers.forEach(t => { if (t !== except) { t.setAttribute('aria-expanded', 'false'); $('#' + t.getAttribute('aria-controls')).classList.remove('open'); } });
  const openMega = (t, open) => { closeAll(t); t.setAttribute('aria-expanded', open); $('#' + t.getAttribute('aria-controls')).classList.toggle('open', open); };
  let hoverT;
  triggers.forEach(t => {
    const item = t.parentElement;
    t.addEventListener('click', () => openMega(t, t.getAttribute('aria-expanded') !== 'true'));
    item.addEventListener('mouseenter', () => { if (desktop() && matchMedia('(hover:hover)').matches) { clearTimeout(hoverT); hoverT = setTimeout(() => openMega(t, true), 80); } });
    item.addEventListener('mouseleave', () => { if (desktop()) { clearTimeout(hoverT); hoverT = setTimeout(() => openMega(t, false), 160); } });
    t.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); openMega(t, true); const f = $('#' + t.getAttribute('aria-controls') + ' a'); f && f.focus(); } });
  });
  doc('click', e => { if (desktop() && !e.target.closest('.nav__item')) closeAll(); });
  win('keydown', e => {
    if (e.key !== 'Escape') return;
    const open = triggers.find(t => t.getAttribute('aria-expanded') === 'true');
    if (open) { openMega(open, false); open.focus(); }
  });
  $$('.mega a').forEach(a => a.addEventListener('click', () => closeAll()));

  // scroll progress
  const bar = $('#progress');
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  };
  win('scroll', onScroll, { passive: true }); onScroll();

  // word retype
  const rt = $('#retype');
  if (rt && !reduce) {
    const words = ['scales()', 'lasts()', 'performs()'];
    let i = 0;
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    (async function loop() {
      await sleep(2200);
      const w = rt.textContent;
      for (let n = w.length; n >= 0; n--) { rt.textContent = w.slice(0, n); await sleep(35); }
      i = (i + 1) % words.length;
      const next = words[i];
      for (let n = 1; n <= next.length; n++) { rt.textContent = next.slice(0, n); await sleep(70); }
      loop();
    })();
  }

  // v2 hero: swapping word + pipeline
  const swap = $('#swap');
  if (swap && !reduce) {
    const words = ['Custom Software', 'SaaS', 'Web App', 'Mobile App', 'ERP & CRM'];
    let wi = 0;
    setInterval(() => {
      swap.classList.add('out');
      setTimeout(() => {
        wi = (wi + 1) % words.length;
        swap.textContent = words[wi];
        swap.classList.remove('out'); swap.classList.add('in');
        rAF(() => rAF(() => swap.classList.remove('in')));
      }, 260);
    }, 2600);
  }
  const pipe = $('#pipe');
  if (pipe) {
    const track = $('.pipe__track', pipe), steps = $$('li', track);
    let si = 0;
    const paint = () => {
      steps.forEach((s, k) => { s.classList.toggle('on', k === si); s.classList.toggle('done', k < si); });
      track.style.setProperty('--p', si / (steps.length - 1));
    };
    paint();
    if (!reduce) setInterval(() => { si = (si + 1) % steps.length; paint(); }, 1800);
  }

  // generic tabs (tech + process)
  const tabs = (tabSel, onChange) => {
    const list = $$(tabSel);
    const select = t => {
      list.forEach(x => {
        const on = x === t;
        x.setAttribute('aria-selected', on);
        x.tabIndex = on ? 0 : -1;
        $('#' + x.getAttribute('aria-controls')).hidden = !on;
      });
      onChange && onChange(list.indexOf(t), list);
    };
    list.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const n = list[(i + d + list.length) % list.length];
        n.focus(); select(n);
      });
    });
    onChange && onChange(0, list);
  };
  tabs('.tab');
  const fill = $('#stepsFill');
  tabs('.step', (idx, list) => {
    list.forEach((s, i) => s.classList.toggle('done', i < idx));
    if (fill) fill.style.width = (idx / (list.length - 1)) * (100 - 100 / list.length) + '%';
  });

  // reveal on scroll
  const rev = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    rev.forEach(el => io.observe(el));
  } else rev.forEach(el => el.classList.add('in'));


  // motion polish: stagger, count-up, header, card glow, faq
  (function(){
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
    $$('.grid-3, .caps, .steps, .ind-list, .related ul, .cta__steps, .ft-grid').forEach(g => {
      if (reduce || g.closest('.reveal') !== null && !g.classList.contains('reveal')) return;
      [...g.children].forEach((ch, i) => { ch.style.setProperty('--i', Math.min(i, 10)); ch.classList.remove('reveal'); });
      g.classList.add('reveal', 'stagger');
      if ('IntersectionObserver' in window) {
        const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { g.classList.add('in'); o.unobserve(g); } }), { rootMargin: '0px 0px -8% 0px' });
        o.observe(g);
      } else g.classList.add('in');
    });
    const nums = $$('.stat__n, .ind-detail__big strong, .rv__score strong');
    const run = el => {
      const node = [...el.childNodes].find(n => n.nodeType === 3 && /\d/.test(n.textContent));
      if (!node) return;
      const m = node.textContent.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/s); if (!m) return;
      const end = parseFloat(m[2]), dec = (m[2].split('.')[1] || '').length, t0 = performance.now(), d = 1400;
      const tick = t => { const p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3);
        node.textContent = m[1] + (end * e).toFixed(dec) + m[3]; if (p < 1) rAF(tick); };
      rAF(tick);
    };
    if (!reduce && 'IntersectionObserver' in window) {
      const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); o.unobserve(e.target); } }), { threshold: .6 });
      nums.forEach(n => o.observe(n));
    }
    const hd = document.getElementById('header');
    if (hd) { const f = () => hd.classList.toggle('is-scrolled', scrollY > 80); f(); win('scroll', f, { passive: true }); }
    if (fine && !reduce) doc('pointermove', e => {
      const el = e.target.closest && e.target.closest('a.win, .caps li, .ind-sys, .related a, .cta__steps li');
      if (!el) return; const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
    if (!reduce) $$('.faq details').forEach(d => {
      const s = d.querySelector('summary'), p = d.querySelector('summary + *'); if (!s || !p) return;
      s.addEventListener('click', ev => {
        ev.preventDefault();
        if (d.open) {
          const h = p.scrollHeight; p.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 260, easing: 'cubic-bezier(.2,.7,.2,1)' }).onfinish = () => { d.open = false; };
        } else {
          d.open = true; const h = p.scrollHeight;
          p.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' });
        }
      });
    });
  })();


  // footer wordmark spotlight
  $$('.ft-word').forEach(w => w.addEventListener('pointermove', e => {
    const r = w.getBoundingClientRect();
    w.style.setProperty('--fx', (e.clientX - r.left) + 'px'); w.style.setProperty('--fy', (e.clientY - r.top) + 'px');
  }, { passive: true }));


  // project brief modal: its code is fetched the first time someone opens it
  const loadModal = () => window.__dwwModal || (window.__dwwModal = import(/* @vite-ignore */ window.__DWW.modal).then(mod => mod.initProjectModal()));
  const openModal = t => loadModal().then(() => window.openProjectModal(t));
  doc('click', e => {
    const t = e.target.closest('a, button');
    if (!t || t.closest('#pm')) return;
    if (t.hasAttribute('data-project') || (t.classList.contains('btn') && /start a project/i.test(t.textContent))) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault(); openModal(t);
    }
  });
  if (location.hash === '#start-project') openModal();


  // project tab rail arrows (shown only when tabs overflow)
  $$('.proj-rail').forEach(rail => {
    const row = $('.proj-tabs', rail), prev = $('.proj-rail__btn--prev', rail), next = $('.proj-rail__btn--next', rail);
    const upd = () => {
      const max = row.scrollWidth - row.clientWidth - 2;
      const p = row.scrollLeft > 2, n = row.scrollLeft < max;
      prev.hidden = !p; next.hidden = !n;
      rail.classList.toggle('has-prev', p); rail.classList.toggle('has-next', n);
    };
    const step = d => { const t = row.querySelector('.proj-tab'); row.scrollBy({ left: d * (t ? t.offsetWidth + 12 : row.clientWidth / 3), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
    prev.addEventListener('click', () => step(-1)); next.addEventListener('click', () => step(1));
    row.addEventListener('scroll', upd, { passive: true }); win('resize', upd); upd();
  });

  // project showcase (auto-advance, pauses on hover/focus)
  const pTabs = $$('.proj-tab');
  if (pTabs.length) {
    const stage = $('#projStage'), DUR = 7000;
    let cur = 0, timer = null, paused = false, t0 = 0, raf;
    const sel = i => {
      cur = i;
      pTabs.forEach((t, k) => {
        const on = k === i;
        t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
        $('#' + t.getAttribute('aria-controls')).hidden = !on;
        $('.proj-tab__bar', t).style.transform = on ? '' : 'scaleX(0)';
      });
      const row = pTabs[i].parentElement;
      if (row.scrollWidth > row.clientWidth) row.scrollTo({ left: pTabs[i].offsetLeft - 18, behavior: reduce ? 'auto' : 'smooth' });
      t0 = performance.now();
    };
    const loop = now => {
      if (!paused) {
        const p = Math.min((now - t0) / DUR, 1);
        $('.proj-tab__bar', pTabs[cur]).style.transform = 'scaleX(' + p + ')';
        if (p >= 1) sel((cur + 1) % pTabs.length);
      } else t0 = now - (parseFloat(($('.proj-tab__bar', pTabs[cur]).style.transform.match(/[\d.]+/) || [1])[0]) * DUR);
      raf = rAF(loop);
    };
    pTabs.forEach((t, i) => {
      t.addEventListener('click', () => { sel(i); stop(); });
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const n = (i + d + pTabs.length) % pTabs.length; pTabs[n].focus(); sel(n); stop();
      });
    });
    const stop = () => { cancelAnimationFrame(raf); raf = null; stage.classList.remove('autoplay'); pTabs.forEach(t => $('.proj-tab__bar', t).style.transform = ''); sel(cur); };
    const wrap = stage.parentElement;
    ['mouseenter', 'focusin'].forEach(ev => wrap.addEventListener(ev, () => (paused = true)));
    ['mouseleave', 'focusout'].forEach(ev => wrap.addEventListener(ev, () => (paused = false)));
    sel(0);
    if (!reduce) {
      stage.classList.add('autoplay');
      new IntersectionObserver(([e]) => {
        if (!stage.classList.contains('autoplay')) return;
        if (e.isIntersecting && !raf) { t0 = performance.now(); raf = rAF(loop); }
        else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = null; }
      }).observe(stage);
    }
  }

  // industries explorer
  const indRows = $$('.ind-row'), indPanel = $('#indPanel'), indFile = $('#indFile');
  const showInd = (btn, toggle) => {
    const mobile = innerWidth <= 1060;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    indRows.forEach(r => { r.setAttribute('aria-expanded', 'false'); $('#' + r.getAttribute('aria-controls')).hidden = true; });
    if (mobile && toggle && isOpen) return;
    btn.setAttribute('aria-expanded', 'true');
    const d = $('#' + btn.getAttribute('aria-controls'));
    d.hidden = false;
    if (indPanel) {
      const clone = document.createElement('div');
      clone.innerHTML = d.innerHTML;
      indPanel.replaceChildren(clone);
      const k = btn.getAttribute('aria-controls').replace('ind-', '');
      $$('#indShots .ind-shot').forEach(s => { s.hidden = s.dataset.i !== k; });
      indFile.textContent = 'industries/' + btn.querySelector('.ind-row__name').textContent.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
    }
  };
  indRows.forEach(r => {
    r.addEventListener('click', () => showInd(r, true));
    r.addEventListener('mouseenter', () => { if (innerWidth > 1060 && matchMedia('(hover:hover)').matches) showInd(r); });
  });
  if (indRows[0]) showInd(indRows[0]);

  // lead forms -> /api/lead
  $$('form.lead').forEach(f => f.addEventListener('submit', e => submitLead(e, f)));

  // copy email
  const copy = $('#copy');
  copy && copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('#email').textContent); copy.textContent = 'Copied ✓'; }
    catch { copy.textContent = 'Press ⌘C'; }
    setTimeout(() => (copy.textContent = 'Copy'), 1800);
  });

  // IST clock
  const clock = $('#clock');
  const tick = () => clock.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });
  if (clock) { tick(); setInterval(tick, 30000); }

  // hero network canvas
  const cv = $('#net');
  const startNet = () => {
    if (!(cv && !reduce && !(navigator.connection && navigator.connection.saveData) && innerWidth > 640)) return;
    const ctx = cv.getContext('2d');
    cv.style.opacity = 1;
    let w, h, dpr, nodes = [], blinks = [], mouse = null, visible = true;
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(90, Math.round(w * h / 16000)));
      nodes = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 }));
    };
    size(); win('resize', size);
    const hero = cv.closest('.hero, .page-hero') || cv.parentElement;
    hero.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
    hero.addEventListener('pointerleave', () => (mouse = null));
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) rAF(draw); }).observe(hero);
    function draw() {
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      if (Math.random() < .08) blinks.push({ x: Math.round(Math.random() * w / 24) * 24, y: Math.round(Math.random() * h / 24) * 24, t: 1 });
      blinks = blinks.filter(b => (b.t -= .015) > 0);
      blinks.forEach(b => {
        ctx.fillStyle = `rgba(200,23,79,${b.t * .5})`; ctx.beginPath(); ctx.arc(b.x, b.y, 6 * b.t, 0, 7); ctx.fill();
        ctx.fillStyle = `rgba(200,23,79,${b.t})`; ctx.beginPath(); ctx.arc(b.x, b.y, 1.6, 0, 7); ctx.fill();
      });
      nodes.forEach(n => {
        if (mouse) { const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy); if (d < 190) { n.vx += dx * .00004; n.vy += dy * .00004; } }
        n.vx *= .995; n.vy *= .995;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(31,35,40,${(1 - d / 130) * .14})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        if (mouse) { const d = Math.hypot(a.x - mouse.x, a.y - mouse.y); if (d < 190) { ctx.strokeStyle = `rgba(200,23,79,${(1 - d / 190) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); } }
        ctx.fillStyle = 'rgba(31,35,40,.35)'; ctx.beginPath(); ctx.arc(a.x, a.y, 1.5, 0, 7); ctx.fill();
      }
      rAF(draw);
    }
  };
  setTimeout(startNet, 3500); // decorative: starts well after first paint/interaction so it never competes with LCP

  // ---- page-specific scripts that used to be inline in individual pages ----
  // home: customer-review slider
  (function () {
    const root = document.getElementById('rv'); if (!root) return;
    const S = root.querySelectorAll('.rv__slide'), T = root.querySelectorAll('.rv__list button'),
      bar = document.getElementById('rvBar'), file = document.getElementById('rvFile'), cnt = document.getElementById('rvCount');
    const n = S.length, D = 7000; let i = 0, t0 = 0, paused = false;
    const slug = s => s.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
    const go = k => {
      i = (k + n) % n;
      S.forEach((s, j) => { s.hidden = j !== i; });
      T.forEach((b, j) => b.setAttribute('aria-selected', j === i));
      file.textContent = 'reviews/' + String(i + 1).padStart(2, '0') + '-' + slug(T[i].querySelector('strong').textContent) + '.md';
      cnt.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
      t0 = performance.now();
    };
    const tick = t => {
      if (!paused && !reduce) { const p = Math.min(1, (t - t0) / D); bar.style.transform = 'scaleX(' + p + ')'; if (p >= 1) go(i + 1); }
      else t0 = t - (parseFloat((bar.style.transform.match(/[\d.]+/) || [0])[0]) * D);
      rAF(tick);
    };
    T.forEach(b => b.addEventListener('click', () => go(+b.dataset.i)));
    document.getElementById('rvPrev').addEventListener('click', () => go(i - 1));
    document.getElementById('rvNext').addEventListener('click', () => go(i + 1));
    root.addEventListener('mouseenter', () => { paused = true; }); root.addEventListener('mouseleave', () => { paused = false; });
    root.addEventListener('focusin', () => { paused = true; }); root.addEventListener('focusout', () => { paused = false; });
    go(0); rAF(tick);
  })();

  // blog: category filter
  (function () {
    const b = document.querySelectorAll('.blog-filter button'), c = document.querySelectorAll('#posts>a');
    b.forEach(x => x.addEventListener('click', () => {
      b.forEach(y => y.setAttribute('aria-pressed', y === x));
      c.forEach(a => { a.hidden = !!x.dataset.cat && a.dataset.cat !== x.dataset.cat; });
    }));
  })();

  // cost estimator
  (function () {
    const root = document.getElementById('est'); if (!root) return;
    /* Edit prices here (INR). [min, max], weeks [min, max] */
    const BASE = { site: { n: 'Business website', r: [25000, 80000], w: [3, 5] }, shop: { n: 'E-commerce store', r: [50000, 150000], w: [5, 8] }, app: { n: 'Web application', r: [100000, 300000], w: [8, 14] }, mobile: { n: 'Mobile app', r: [150000, 400000], w: [10, 16] }, saas: { n: 'SaaS / MVP', r: [200000, 600000], w: [8, 12] }, erp: { n: 'ERP / CRM system', r: [250000, 1000000], w: [12, 26] } };
    const FEAT = { pay: ['Online payments', [10000, 25000], 0.5], login: ['User accounts & roles', [15000, 40000], 1], admin: ['Admin dashboard', [20000, 60000], 1], wa: ['WhatsApp / SMS alerts', [10000, 25000], 0.5], int: ['Integrations', [20000, 60000], 1], ai: ['AI features', [40000, 150000], 2], lang: ['Multi-language', [10000, 30000], 0.5], report: ['Reports & analytics', [20000, 60000], 1] };
    const FX = { INR: [1, '₹', 'en-IN'], USD: [1 / 84, '$', 'en-US'], GBP: [1 / 106, '£', 'en-GB'] };
    let cur = 'INR';
    const fmt = v => { const f = FX[cur]; v = v * f[0]; const s = v >= 100000 && cur === 'INR' ? (Math.round(v / 10000) / 10) + 'L' : Math.round(v / (cur === 'INR' ? 1000 : 100)) * (cur === 'INR' ? 1000 : 100); return f[1] + (typeof s === 'number' ? s.toLocaleString(f[2]) : s); };
    const calc = () => {
      const t = root.querySelector('[name=type]:checked').value, b = BASE[t];
      let lo = b.r[0], hi = b.r[1], w0 = b.w[0], w1 = b.w[1];
      const lines = ['<li><span>' + b.n + '</span><b>' + fmt(b.r[0]) + ' – ' + fmt(b.r[1]) + '</b></li>'];
      root.querySelectorAll('[data-k=feat] input:checked').forEach(i => { const f = FEAT[i.value]; lo += f[1][0]; hi += f[1][1]; w0 += f[2] * .5; w1 += f[2]; lines.push('<li><span>+ ' + f[0] + '</span><b>' + fmt(f[1][0]) + ' – ' + fmt(f[1][1]) + '</b></li>'); });
      if (root.querySelector('[name=design]:checked').value === 'custom') { lo *= 1.2; hi *= 1.3; w0 += 1; w1 += 2; lines.push('<li><span>+ Fully custom design</span><b>+20–30%</b></li>'); }
      if (root.querySelector('[name=speed]:checked').value === 'fast') { lo *= 1.15; hi *= 1.2; w0 = Math.max(2, w0 * .75); w1 = Math.max(3, w1 * .75); lines.push('<li><span>+ Fast-track team</span><b>+15–20%</b></li>'); }
      document.getElementById('estRange').textContent = fmt(lo) + ' – ' + fmt(hi);
      document.getElementById('estTime').textContent = Math.round(w0) + '–' + Math.round(w1) + ' weeks';
      document.getElementById('estLines').innerHTML = lines.join('');
      const d = document.getElementById('f-desc'); if (d) d.value = 'Estimator: ' + b.n + ', ' + fmt(lo) + ' – ' + fmt(hi) + ', ' + Math.round(w0) + '–' + Math.round(w1) + ' weeks';
    };
    root.addEventListener('change', calc);
    root.querySelectorAll('.est__cur button').forEach(btn => btn.addEventListener('click', () => { cur = btn.dataset.c; root.querySelectorAll('.est__cur button').forEach(x => x.setAttribute('aria-pressed', x === btn)); calc(); }));
    calc();
  })();

  return () => {
    dead = true;
    ac.abort();
    document.body.classList.remove('menu-open');
    timers.forEach(id => { window.clearTimeout(id); window.clearInterval(id); });
  };
}
