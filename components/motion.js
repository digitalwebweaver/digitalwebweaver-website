// motion.js: the JS half of the motion styles in site.css: the pill that slides behind the selected tab.
// (The eyebrow typing effect is CSS-only and rides on the existing .reveal/.in classes.)
// Nothing is measured at start-up: reading layout would force the browser to lay out the off-screen sections that
// content-visibility skips. Each tab row is measured the first time it scrolls into view, when its layout already exists.
// Returns a cleanup function so the in-place router can re-run it on every page swap.
export function initMotion() {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches || !('IntersectionObserver' in window)) return () => {};
  const off = [], live = new Set();
  const place = t => {
    const s = t.querySelector('.tab[aria-selected="true"]'); if (!s) return;
    t.style.setProperty('--x', s.offsetLeft + 'px'); t.style.setProperty('--y', s.offsetTop + 'px');
    t.style.setProperty('--w', s.offsetWidth + 'px'); t.style.setProperty('--h', s.offsetHeight + 'px');
    t.classList.add('has-pill');
  };
  const mo = new MutationObserver(ms => new Set(ms.map(m => m.target.closest('.tabs'))).forEach(t => live.has(t) && place(t)));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target); live.add(e.target); place(e.target);
    mo.observe(e.target, { attributes: true, subtree: true, attributeFilter: ['aria-selected'] });
  }));
  document.querySelectorAll('.tabs').forEach(t => io.observe(t));
  const again = () => live.forEach(place);
  addEventListener('resize', again);
  off.push(() => removeEventListener('resize', again), () => io.disconnect(), () => mo.disconnect());
  return () => off.forEach(f => f());
}
