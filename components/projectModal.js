export function initProjectModal() {
  const KEY = 'dww-brief-draft';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WA = 'https://wa.me/919722915105';

  const NEEDS = ['Website', 'Web app / SaaS', 'Mobile app', 'E-commerce', 'AI & automation', 'ERP / CRM', 'UI/UX design', 'Dedicated team', 'Not sure yet'];
  const STAGES = ['New idea', 'Rebuild / redesign', 'Scale an existing product'];
  const BUDGET = {
    INR: ['Under ₹5L', '₹5L – ₹15L', '₹15L – ₹40L', '₹40L+', 'Not sure yet'],
    USD: ['Under $6k', '$6k – $18k', '$18k – $50k', '$50k+', 'Not sure yet']
  };
  const TIME = ['ASAP', '1 – 3 months', '3 – 6 months', 'Flexible'];

  const chip = (name, v, type) => `<label class="pm-chip"><input type="${type}" name="${name}" value="${v}"><span>${v}</span></label>`;
  const opt = (name, v) => `<label class="pm-opt"><input type="radio" name="${name}" value="${v}"><span>${v}</span></label>`;

  const html = `
<div class="pm" id="pm" role="dialog" aria-modal="true" aria-labelledby="pm-title" hidden>
  <div class="pm__scrim" data-pm-close></div>
  <div class="pm__dialog" role="document">
    <aside class="pm__side">
      <p class="pm__eyebrow">// new-project.json</p>
      <p class="pm__side-h">Tell us what you're building.</p>
      <p class="pm__side-p">Two minutes now saves a week of back-and-forth. A senior engineer reads every brief — no sales script.</p>
      <ol class="pm__next">
        <li><b>01</b><span><strong>Reply within 24 hours</strong><small>From the engineer who'd lead your project</small></span></li>
        <li><b>02</b><span><strong>30-minute discovery call</strong><small>Scope, risks, stack and rough cost</small></span></li>
        <li><b>03</b><span><strong>Fixed-scope proposal</strong><small>Timeline and price in writing, within 5 days</small></span></li>
      </ol>
      <ul class="pm__trust">
        <li>NDA on request</li><li>200+ systems shipped</li><li>Clients in 15 countries</li>
      </ul>
      <div class="pm__direct">
        <small>Prefer to talk now?</small>
        <a href="${WA}" target="_blank" rel="noopener">WhatsApp +91 97229 15105 ↗</a>
        <a href="mailto:info@digitalwebweaver.com">info@digitalwebweaver.com</a>
      </div>
    </aside>

    <div class="pm__main">
      <header class="pm__head">
        <div class="pm__steps" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
        <p class="pm__count" aria-live="polite">Step <b>1</b> of 3</p>
        <button class="pm__x" type="button" data-pm-close aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
      </header>

      <form class="pm__form" novalidate>
        <fieldset class="pm__step" data-step="1">
          <legend class="pm__title" id="pm-title">What do you need?</legend>
          <p class="pm__hint">Pick everything that applies.</p>
          <div class="pm__chips" data-req="need">${NEEDS.map(v => chip('need', v, 'checkbox')).join('')}</div>
          <p class="pm__label">Where are you starting from?</p>
          <div class="pm__opts pm__opts--3" data-req="stage">${STAGES.map(v => opt('stage', v)).join('')}</div>
          <p class="pm__err" data-err="1" hidden>Choose at least one service and where you're starting from.</p>
        </fieldset>

        <fieldset class="pm__step" data-step="2" hidden>
          <legend class="pm__title">Budget and timeline</legend>
          <p class="pm__hint">A rough range helps us propose the right team. It stays between us.</p>
          <div class="pm__row">
            <p class="pm__label">Estimated budget</p>
            <div class="pm__cur" role="group" aria-label="Currency">
              <button type="button" data-cur="INR" aria-pressed="true">₹ INR</button><button type="button" data-cur="USD" aria-pressed="false">$ USD</button>
            </div>
          </div>
          <div class="pm__opts pm__opts--5" data-req="budget" id="pm-budget"></div>
          <p class="pm__label">When do you want to start?</p>
          <div class="pm__opts pm__opts--4" data-req="timeline">${TIME.map(v => opt('timeline', v)).join('')}</div>
          <label class="pm__field pm__field--full">
            <span>Tell us about the project <em>optional</em></span>
            <textarea name="details" rows="4" maxlength="1200" placeholder="Goals, users, features you have in mind, links to anything similar…"></textarea>
            <small class="pm__counter"><b>0</b> / 1200</small>
          </label>
          <p class="pm__err" data-err="2" hidden>Choose a budget range and a start date.</p>
        </fieldset>

        <fieldset class="pm__step" data-step="3" hidden>
          <legend class="pm__title">Where should we reply?</legend>
          <p class="pm__hint">We'll only use this to respond to your brief.</p>
          <div class="pm__grid">
            <label class="pm__field"><span>Full name</span><input name="name" autocomplete="name" required></label>
            <label class="pm__field"><span>Work email</span><input name="email" type="email" autocomplete="email" required></label>
            <label class="pm__field"><span>Company <em>optional</em></span><input name="company" autocomplete="organization"></label>
            <label class="pm__field"><span>Phone / WhatsApp <em>optional</em></span><input name="phone" type="tel" autocomplete="tel" placeholder="+91"></label>
          </div>
          <label class="pm__check"><input type="checkbox" name="nda" value="yes"><span>Send me an NDA before the first call</span></label>
          <label class="pm__check"><input type="checkbox" name="consent" value="yes" required><span>I agree to Digital Web Weaver processing my details to respond to this enquiry, per the <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>.</span></label>
          <p class="pm__err" data-err="3" hidden>Add your name, a valid email and tick the consent box.</p>
          <input type="text" name="_hp" tabindex="-1" autocomplete="off" class="pm__hp" aria-hidden="true">
        </fieldset>

        <div class="pm__done" hidden tabindex="-1">
          <span class="pm__tick" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
          <p class="pm__title">Brief received<span data-done-name></span>.</p>
          <p class="pm__hint">A senior engineer will reply to <b data-done-email></b> within 24 hours, Monday to Saturday.</p>
          <dl class="pm__sum"></dl>
          <div class="pm__done-act">
            <a class="btn btn--primary" href="${WA}" target="_blank" rel="noopener"><span class="btn__glyph" aria-hidden="true">&gt;_</span>Can't wait? WhatsApp us</a>
            <button class="btn btn--ghost" type="button" data-pm-close>Close</button>
          </div>
        </div>

        <footer class="pm__foot">
          <button class="pm__back" type="button" hidden>← Back</button>
          <span class="pm__save">Draft saved on this device</span>
          <button class="btn btn--primary pm__go" type="submit"><span class="btn__glyph" aria-hidden="true">&gt;_</span><span data-go>Continue</span></button>
        </footer>
      </form>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  const pm = document.getElementById('pm');
  const form = pm.querySelector('.pm__form');
  const steps = [...pm.querySelectorAll('.pm__step')];
  const bars = [...pm.querySelectorAll('.pm__steps i')];
  const back = pm.querySelector('.pm__back');
  const go = pm.querySelector('[data-go]');
  const foot = pm.querySelector('.pm__foot');
  const done = pm.querySelector('.pm__done');
  const budgetBox = pm.querySelector('#pm-budget');
  let step = 0, cur = 'INR', opener = null, onKey;

  const renderBudget = keep => {
    const idx = keep ? BUDGET[cur === 'INR' ? 'USD' : 'INR'].indexOf(keep) : -1;
    budgetBox.innerHTML = BUDGET[cur].map(v => opt('budget', v)).join('');
    if (idx > -1) budgetBox.querySelectorAll('input')[idx].checked = true;
    pm.querySelectorAll('[data-cur]').forEach(b => b.setAttribute('aria-pressed', b.dataset.cur === cur));
  };
  renderBudget();

  const data = () => {
    const fd = new FormData(form), o = { currency: cur };
    for (const [k, v] of fd) { if (k === '_hp') continue; o[k] = o[k] ? [].concat(o[k], v) : v; }
    return o;
  };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(data())); } catch (e) {} };
  const restore = () => {
    let d; try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (!d) return;
    if (d.currency && d.currency !== cur) { cur = d.currency; renderBudget(); }
    form.querySelectorAll('input, textarea').forEach(el => {
      const v = d[el.name]; if (v == null || el.name === '_hp') return;
      if (el.type === 'checkbox' || el.type === 'radio') el.checked = [].concat(v).includes(el.value);
      else el.value = v;
    });
    count();
  };
  const ta = form.querySelector('textarea');
  const count = () => { pm.querySelector('.pm__counter b').textContent = ta.value.length; };
  ta.addEventListener('input', count);

  const show = i => {
    steps.forEach((s, n) => (s.hidden = n !== i));
    bars.forEach((b, n) => b.classList.toggle('on', n <= i));
    pm.querySelector('.pm__count b').textContent = i + 1;
    back.hidden = i === 0;
    go.textContent = i === steps.length - 1 ? 'Send project brief' : 'Continue';
    step = i;
    const s = steps[i];
    if (!reduce) s.animate([{ opacity: 0, transform: 'translateX(12px)' }, { opacity: 1, transform: 'none' }], { duration: 280, easing: 'cubic-bezier(.2,.7,.2,1)' });
    pm.querySelector('.pm__main').scrollTop = 0;
  };

  const valid = i => {
    const s = steps[i], err = s.querySelector('.pm__err');
    let ok = [...s.querySelectorAll('[data-req]')].every(g => g.querySelector('input:checked'));
    s.querySelectorAll('input[required]').forEach(el => { const v = el.checkValidity(); el.toggleAttribute('aria-invalid', !v); if (!v) ok = false; });
    err.hidden = ok;
    if (!ok && !reduce) err.animate([{ transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'none' }], { duration: 220 });
    return ok;
  };

  const focusables = () => [...pm.querySelectorAll('button, a[href], input:not(.pm__hp), textarea, select')].filter(el => !el.closest('[hidden]') && el.offsetParent !== null);

  const open = trigger => {
    opener = trigger || document.activeElement;
    restore();
    pm.hidden = false;
    document.documentElement.classList.add('pm-lock');
    void pm.offsetWidth; pm.classList.add('is-open');
    show(done.hidden ? step : 0);
    setTimeout(() => { const f = steps[step].querySelector('input'); f && f.focus({ preventScroll: true }); }, reduce ? 0 : 220);
  };
  const close = () => {
    pm.classList.remove('is-open');
    document.documentElement.classList.remove('pm-lock');
    setTimeout(() => {
      pm.hidden = true;
      if (!done.hidden) { done.hidden = true; foot.hidden = false; form.reset(); renderBudget(); count(); show(0); }
    }, reduce ? 0 : 260);
    opener && opener.focus && opener.focus({ preventScroll: true });
  };

  form.addEventListener('change', e => {
    save();
    const s = e.target.closest('.pm__step'); const err = s && s.querySelector('.pm__err');
    if (err && !err.hidden && [...s.querySelectorAll('[data-req]')].every(g => g.querySelector('input:checked'))) err.hidden = true;
  });
  form.addEventListener('input', () => save());
  pm.querySelectorAll('[data-cur]').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.cur === cur) return;
    const sel = budgetBox.querySelector('input:checked'); cur = b.dataset.cur; renderBudget(sel && sel.value); save();
  }));
  back.addEventListener('click', () => show(step - 1));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!valid(step)) return;
    if (step < steps.length - 1) return show(step + 1);
    const d = data();
    if (form._hp && form._hp.value) return;
    const btn = pm.querySelector('.pm__go'); btn.disabled = true; go.textContent = 'Sending…';
    const lead = {
      name: d.name, email: d.email, company: d.company, phone: d.phone,
      need: [].concat(d.need || []).join(', '), stage: d.stage,
      budget: d.budget ? d.budget + ' (' + d.currency + ')' : '', timeline: d.timeline,
      message: d.details, nda: d.nda ? 'Send NDA first' : '',
      page: location.pathname, consent: true, consentAt: new Date().toISOString(), consentNotice: 'privacy-policy-2026-09-25',
    };
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
      if (!r.ok) throw new Error('request failed');
    } catch (err) {
      btn.disabled = false; go.textContent = 'Send project brief';
      const e3 = steps[step].querySelector('.pm__err');
      e3.textContent = 'Something went wrong sending this. Please try again, or email info@digitalwebweaver.com directly.'; e3.hidden = false;
      return;
    }
    btn.disabled = false;
    try { localStorage.removeItem(KEY); } catch (err) {}
    pm.querySelector('[data-done-name]').textContent = d.name ? ', ' + String(d.name).split(' ')[0] : '';
    pm.querySelector('[data-done-email]').textContent = d.email || 'your email';
    const rows = [['Services', [].concat(d.need || []).join(', ')], ['Starting from', d.stage], ['Budget', d.budget], ['Start', d.timeline]];
    pm.querySelector('.pm__sum').innerHTML = rows.filter(r => r[1]).map(r => `<div><dt>${r[0]}</dt><dd></dd></div>`).join('');
    pm.querySelectorAll('.pm__sum dd').forEach((dd, i) => (dd.textContent = rows.filter(r => r[1])[i][1]));
    steps.forEach(s => (s.hidden = true)); foot.hidden = true; done.hidden = false;
    bars.forEach(b => b.classList.add('on'));
    pm.querySelector('.pm__count').textContent = 'Sent';
    done.focus();
  });

  pm.addEventListener('click', e => { if (e.target.closest('[data-pm-close]')) close(); });
  document.addEventListener('keydown', onKey = e => {
    if (pm.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    if (e.key === 'Tab') {
      const f = focusables(); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  window.openProjectModal = open;
  return () => {
    document.removeEventListener('keydown', onKey);
    document.documentElement.classList.remove('pm-lock');
    pm.remove();
    delete window.openProjectModal;
  };
}
