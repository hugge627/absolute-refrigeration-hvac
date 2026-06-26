/* ==========================================================================
   Shared header + footer for every page.
   Each page has <div id="site-header"></div> and <div id="site-footer"></div>
   and sets <body data-page="home|services|about|areas|contact">.
   Edit business details in the BIZ object below — they propagate everywhere.
   ========================================================================== */

const BIZ = {
  name: 'Absolute Refrigeration, AC &amp; Heating',
  shortName: 'Absolute HVAC',
  tagline: 'The Cool Place to Call',
  phoneDisplay: '(806) 368-7393',
  phoneHref: '+18063687393',
  email: 'absolutehvacrservices@gmail.com',
  address: '7009 County Rd 1500, Lubbock, TX 79407',
  license: 'TACLB78502C',
  years: '18',
  facebook: 'https://www.facebook.com/THE.COOL.PLACE.TO.CALL',
  instagram: 'https://www.instagram.com/absolutehvacrservices',
  twitter: 'https://x.com/Absolute_HVAC'
};

const NAV = [
  { key: 'home',     label: 'Home',          href: 'index.html' },
  { key: 'services', label: 'Services',      href: 'services.html' },
  { key: 'about',    label: 'About',         href: 'about.html' },
  { key: 'areas',    label: 'Service Areas', href: 'service-areas.html' },
  { key: 'contact',  label: 'Contact',       href: 'contact.html' }
];

function navLinks(active, mobile) {
  return NAV.map(item => {
    const isActive = item.key === active ? 'active' : '';
    const base = mobile
      ? `block rounded-xl px-4 py-3 text-lg ${item.key === active ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-ink hover:bg-slate-50'}`
      : `nav-link ${isActive} text-[15px] px-1 py-2`;
    return `<a href="${item.href}" class="${base}">${item.label}</a>`;
  }).join('');
}

function renderHeader(active) {
  return `
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:left-4 focus:top-4 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white">Skip to content</a>

  <!-- Top utility bar -->
  <div class="bg-ink text-slate-200 text-sm hidden sm:block">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-10 items-center justify-between gap-4">
        <div class="flex items-center gap-5">
          <span class="inline-flex items-center gap-2">
            <i data-lucide="map-pin" class="h-4 w-4 text-primary-300"></i>
            Lubbock &amp; the Permian Basin, TX
          </span>
          <span class="hidden md:inline-flex items-center gap-2">
            <i data-lucide="shield-check" class="h-4 w-4 text-primary-300"></i>
            Licensed &amp; Insured &middot; Lic. ${BIZ.license}
          </span>
        </div>
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-2 font-semibold text-ember-400">
            <i data-lucide="alarm-clock" class="h-4 w-4"></i> 24/7 Emergency Service
          </span>
          <a href="mailto:${BIZ.email}" class="hidden lg:inline-flex items-center gap-2 hover:text-white transition-colors">
            <i data-lucide="mail" class="h-4 w-4"></i> ${BIZ.email}
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main nav -->
  <div id="navbar" class="bg-white/95 backdrop-blur border-b border-slate-100 transition-shadow">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <nav class="flex h-[var(--header-h)] items-center justify-between gap-4" aria-label="Primary">
        <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="${BIZ.shortName} — home">
          <img src="images/logo.png" alt="${BIZ.name} logo"
               class="h-12 w-auto"
               onerror="this.outerHTML='&lt;span class=\\'flex items-center gap-2\\'&gt;&lt;span class=\\'grid h-11 w-11 place-items-center rounded-xl bg-primary-600 text-white font-display font-extrabold text-xl\\'&gt;A&lt;/span&gt;&lt;span class=\\'font-display font-extrabold text-xl tracking-tight text-ink\\'&gt;ABSOLUTE&lt;/span&gt;&lt;/span&gt;'">
        </a>

        <div class="hidden lg:flex items-center gap-7">
          ${navLinks(active, false)}
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a href="tel:${BIZ.phoneHref}" class="btn btn-outline text-[15px]">
            <i data-lucide="phone" class="h-4 w-4"></i> ${BIZ.phoneDisplay}
          </a>
          <a href="contact.html" class="btn btn-primary text-[15px]">Free Estimate</a>
        </div>

        <button id="menuBtn" class="lg:hidden inline-grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-ink"
                aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <i data-lucide="menu" class="h-6 w-6"></i>
        </button>
      </nav>
    </div>

    <!-- Mobile menu -->
    <div id="mobileMenu" class="lg:hidden hidden border-t border-slate-100 bg-white">
      <div class="mx-auto max-w-8xl px-4 py-4 space-y-1">
        ${navLinks(active, true)}
        <div class="grid grid-cols-1 gap-3 pt-3">
          <a href="tel:${BIZ.phoneHref}" class="btn btn-ember w-full">
            <i data-lucide="phone" class="h-5 w-5"></i> Call ${BIZ.phoneDisplay}
          </a>
          <a href="contact.html" class="btn btn-primary w-full">Get a Free Estimate</a>
        </div>
      </div>
    </div>
  </div>`;
}

function renderFooter(active) {
  const cities = ['Lubbock', 'Midland', 'Odessa', 'Andrews', 'Brownfield', 'Lamesa'];
  const svc = [
    ['AC Repair', 'services.html#ac-repair'],
    ['AC Installation', 'services.html#ac-install'],
    ['Heating &amp; Furnace', 'services.html#heating'],
    ['Emergency Service', 'services.html#emergency'],
    ['Maintenance Plans', 'services.html#maintenance'],
    ['Commercial Refrigeration', 'services.html#refrigeration']
  ];
  return `
  <div class="accent-rule h-1"></div>
  <footer class="bg-ink text-slate-300">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <img src="images/logo.png" alt="${BIZ.name}" class="h-12 w-auto bg-white/95 rounded-lg p-1.5"
                 onerror="this.style.display='none'">
            <span class="font-display font-extrabold text-white text-lg">ABSOLUTE</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-slate-400">
            Family-owned HVAC &amp; refrigeration serving Lubbock and the Permian Basin for over ${BIZ.years} years. Proud Trane dealer. &ldquo;${BIZ.tagline}.&rdquo;
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a href="${BIZ.facebook}" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-lg bg-white/5 hover:bg-primary-600 transition-colors"><i data-lucide="facebook" class="h-5 w-5"></i></a>
            <a href="${BIZ.instagram}" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-lg bg-white/5 hover:bg-primary-600 transition-colors"><i data-lucide="instagram" class="h-5 w-5"></i></a>
            <a href="${BIZ.twitter}" aria-label="X (Twitter)" class="grid h-10 w-10 place-items-center rounded-lg bg-white/5 hover:bg-primary-600 transition-colors"><i data-lucide="twitter" class="h-5 w-5"></i></a>
          </div>
        </div>

        <div>
          <h3 class="font-display font-bold text-white">Services</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            ${svc.map(([l, h]) => `<li><a href="${h}" class="text-slate-400 hover:text-white transition-colors">${l}</a></li>`).join('')}
          </ul>
        </div>

        <div>
          <h3 class="font-display font-bold text-white">Service Areas</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            ${cities.map(c => `<li><a href="service-areas.html" class="text-slate-400 hover:text-white transition-colors">${c}, TX</a></li>`).join('')}
          </ul>
        </div>

        <div>
          <h3 class="font-display font-bold text-white">Get in Touch</h3>
          <ul class="mt-4 space-y-3.5 text-sm">
            <li><a href="tel:${BIZ.phoneHref}" class="flex items-start gap-3 hover:text-white transition-colors"><i data-lucide="phone" class="h-5 w-5 mt-0.5 text-primary-300"></i><span class="font-semibold text-white">${BIZ.phoneDisplay}</span></a></li>
            <li><a href="mailto:${BIZ.email}" class="flex items-start gap-3 hover:text-white transition-colors break-all"><i data-lucide="mail" class="h-5 w-5 mt-0.5 text-primary-300"></i>${BIZ.email}</a></li>
            <li class="flex items-start gap-3"><i data-lucide="map-pin" class="h-5 w-5 mt-0.5 text-primary-300"></i>${BIZ.address}</li>
            <li class="flex items-start gap-3"><i data-lucide="alarm-clock" class="h-5 w-5 mt-0.5 text-ember-400"></i><span><span class="text-white font-semibold">24/7</span> emergency service</span></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>&copy; <span data-year>2026</span> ${BIZ.name}. All rights reserved.</p>
        <p>License ${BIZ.license} &middot; Licensed &amp; Insured &middot; Site by Absolute HVAC</p>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const active = document.body.dataset.page || '';
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = renderHeader(active);
  if (footer) footer.innerHTML = renderFooter(active);

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!open));
      menuBtn.innerHTML = open
        ? '<i data-lucide="menu" class="h-6 w-6"></i>'
        : '<i data-lucide="x" class="h-6 w-6"></i>';
      if (window.lucide) lucide.createIcons();
    });
  }

  // Subtle shadow on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('shadow-md', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Current year
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Render icons
  if (window.lucide) lucide.createIcons();
});
