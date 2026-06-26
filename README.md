# Absolute Refrigeration, AC &amp; Heating — Website

A fast, mobile-first marketing site built with plain **HTML + Tailwind CSS** (no build step). Open any `.html` file in a browser and it works.

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `services.html` | Services (AC repair/install, heating, emergency, maintenance, refrigeration) + FAQ |
| `about.html` | About / why choose us |
| `service-areas.html` | Service areas + map |
| `contact.html` | Contact info + estimate form + map |

## 1. Drop in your images  ← **do this first**

Save your photos into the **`images/`** folder using these exact filenames:

| Save as | Use this photo |
|---------|----------------|
| `images/logo.png` | The **ABSOLUTE** logo (transparent PNG) |
| `images/hero.jpg` | The **two Trane units against brick** (homepage hero) |
| `images/dual-units.jpg` | The **two Trane units** photo (Services › AC Installation) — can be the same file as hero |
| `images/ac-install.jpg` | The **single Trane unit on the concrete pad** (Services › AC Repair) |
| `images/furnace.jpg` | The **attic furnace / air handler** photo (Services › Heating) |
| `images/truck.jpg` | The **branded box truck** photo (Home + About) |
| `images/favicon.png` | *(optional)* a small square crop of the logo for the browser tab |

> Until a photo is added, that spot shows a labeled blue placeholder telling you exactly which file to drop in — nothing breaks. JPGs around 1600px wide, optimized, are ideal.

## 2. Add your real reviews

Open `index.html`, find the **TESTIMONIALS** section (search for `id="reviews"`). There are 3 review cards with placeholder text in `[brackets]`. Replace:
- the quote inside `<blockquote>`,
- the **Customer Name**, and
- the city.

Add or remove cards freely — they're plain copy-paste blocks.

## 3. Make the contact form actually send (important)

Right now the form (`contact.html`) shows a success message but **does not deliver email** — it's front-end only. Two easy options, no server needed:

**Option A — Formspree (recommended):**
1. Create a free form at [formspree.io](https://formspree.io) → you get an endpoint like `https://formspree.io/f/abcdwxyz`.
2. In `contact.html`, change the form tag to:
   `<form id="contactForm" action="https://formspree.io/f/abcdwxyz" method="POST" novalidate>`
3. In `assets/js/main.js`, replace the `setTimeout(...)` simulated-submit block with a real `fetch(form.action, { method:'POST', body:new FormData(form), headers:{Accept:'application/json'} })`.

**Option B — Netlify Forms:** if you host on Netlify, add `netlify` to the `<form>` tag and a hidden `form-name` field; Netlify captures submissions automatically.

## 4. Edit business details in one place

All contact info (phone, email, address, license, social links) lives in the **`BIZ`** object at the top of `assets/js/partials.js`. Edit it there and it updates the header and footer across every page.

- **Phone is set to `(806) 368-7393`** everywhere, with `tel:` links for one-tap calling.
- **License shown: `TACLB78502C`** — please confirm this is exact (read off the unit sticker). Update in `partials.js` and `about.html` if needed.
- **Hours shown: Mon–Fri 8am–6pm + 24/7 emergency** (on the Contact page) — update if different.

## 5. Customize the look

- **Colors & fonts:** `assets/js/tailwind.config.js` (primary blue, ember orange accent, font families).
- **Components & effects:** `assets/css/styles.css` (buttons, cards, hero gradient, scroll-reveal).
- Icons are [Lucide](https://lucide.dev) (loaded from CDN) — swap any `data-lucide="name"`.

## 6. Going live (optional)

This is a static site — host it anywhere:
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop this folder, done (free).
- **GitHub Pages:** push the folder to a repo and enable Pages.
- **Any web host:** upload all files via FTP.

### Performance note
For production, consider replacing the Tailwind **Play CDN** (`https://cdn.tailwindcss.com`) with a compiled Tailwind stylesheet (Tailwind CLI). The CDN is perfect for editing and previewing; a compiled build is smaller and faster for live traffic. The site works fine either way.

---
*Built with accessibility in mind: keyboard navigation, visible focus states, 4.5:1 contrast, 44px+ touch targets, semantic headings, and reduced-motion support.*
