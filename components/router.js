// Tiny client-side router: no framework, no reload. Fetches the next page's static HTML, swaps the page
// content in place, syncs <head> (title, meta, canonical, JSON-LD) and the URL, and re-runs the page script.
const cache = new Map(); // url -> Promise<string>
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fileLike = p => /[.][a-z0-9]+$/i.test(p);

const load = (url) => {
  if (!cache.has(url)) {
    cache.set(url, fetch(url, { credentials: 'same-origin' }).then(r => {
      if (!r.ok || !(r.headers.get('content-type') || '').includes('text/html')) throw new Error('not a page');
      return r.text();
    }).catch(e => { cache.delete(url); throw e; }));
  }
  return cache.get(url);
};

const HEAD_SELECTOR = 'title,meta[name=description],meta[name=robots],meta[property^="og:"],meta[name^="twitter:"],link[rel=canonical],link[rel=alternate],script[type="application/ld+json"]';
const syncHead = (doc) => {
  document.head.querySelectorAll(HEAD_SELECTOR).forEach(el => el.remove());
  doc.head.querySelectorAll(HEAD_SELECTOR).forEach(el => document.head.appendChild(document.importNode(el, true)));
};

const sameOrigin = (a) => a.origin === location.origin && !a.target && !a.hasAttribute('download') && !fileLike(a.pathname) && !a.pathname.startsWith('/api/');

export function enableRouter(onSwap) {
  history.scrollRestoration = 'manual';
  let navId = 0;

  async function go(href, { push = true } = {}) {
    const u = new URL(href, location.href), id = ++navId;
    let html;
    try { html = await load(u.origin + u.pathname + u.search); } catch (e) { location.href = u.href; return; }
    if (id !== navId) return; // a newer navigation won
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const next = doc.getElementById('__next');
    if (!next) { location.href = u.href; return; }
    if (push) { history.replaceState({ y: scrollY }, ''); history.pushState({ y: 0 }, '', u.href); }
    const swap = () => {
      syncHead(doc);
      document.documentElement.lang = doc.documentElement.lang || 'en';
      document.getElementById('__next').innerHTML = next.innerHTML;
      onSwap();
      const target = u.hash && document.getElementById(decodeURIComponent(u.hash.slice(1)));
      if (target) target.scrollIntoView(); else scrollTo(0, push ? 0 : (history.state && history.state.y) || 0);
    };
    if (document.startViewTransition && !reduced) await document.startViewTransition(swap).updateCallbackDone.catch(() => {});
    else swap();
  }

  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const u = new URL(a.href, location.href);
    if (!sameOrigin(a)) return;
    if (u.pathname === location.pathname && u.search === location.search) return; // same-page #hash: browser scrolls
    e.preventDefault();
    go(u.href);
  });
  addEventListener('popstate', () => go(location.href, { push: false }));

  // warm the cache as soon as the pointer or a finger is on a link, so the click itself is instant
  const warm = e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || !sameOrigin(a) || (a.pathname === location.pathname) || (navigator.connection && navigator.connection.saveData)) return;
    load(a.origin + a.pathname + a.search).catch(() => {});
  };
  document.addEventListener('pointerover', warm, { passive: true });
  document.addEventListener('touchstart', warm, { passive: true });
}
