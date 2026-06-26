/* ==========================================================================
   Page interactions: scroll-reveal, animated counters, contact form UX.
   Runs after partials.js. Respects prefers-reduced-motion.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Scroll reveal --------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* --- Count-up stats -------------------------------------------------- */
  const counters = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    if (!('IntersectionObserver' in window)) {
      counters.forEach(runCount);
    } else {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      counters.forEach(c => cio.observe(c));
    }
  }

  /* --- Contact form (client-side UX only; no backend wired) ------------ */
  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Native validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span> Sending…';

      // Simulate async submit. Replace this block with a real handler
      // (Formspree / Netlify Forms / your endpoint). See README.md.
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.innerHTML = original;
        if (status) {
          status.className = 'mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-start gap-2';
          status.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Thanks! Your request was received. We&rsquo;ll call you back shortly — for urgent issues please call <strong>(806) 368-7393</strong>.</span>';
          status.classList.remove('hidden');
          status.focus?.();
        }
      }, 1100);
    });
  }
});
