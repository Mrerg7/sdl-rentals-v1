# Changelog — sdl.rentals

## [2026-10-04] Comprehensive website optimization (FEAT)

### I. Technical foundation
- Worker `src/worker.ts` (free plan): `GET /api/health`, `POST /api/inquire`
  (validation + honeypot, min $10k), `POST /api/subscribe`, CORS locked to
  `https://sdl.rentals`, `run_worker_first: [/api/*]`, `ASSETS` binding.
- `wrangler.toml`: added `main`, `binding = "ASSETS"`, `run_worker_first`.
- Security + cache headers (`public/_headers`): HSTS, nosniff, DENY framing,
  strict Referrer/Permissions policy, CSP (free-plan compatible), immutable
  caching for css/js/fonts/images.
- SEO head overhaul (`BaseLayout`): canonical, robots max-image-preview,
  theme-color (dark/light), color-scheme, preconnect/dns-prefetch/preload hero,
  OG 1200×630 + Twitter large-image, manifest + icons, skip link.
- Structured data: Organization, WebSite, **Product/Offer** (asking $55k,
  offers from $28k), FAQPage, BreadcrumbList (5 ld+json blocks).
- Sitemap via `@astrojs/sitemap` now covers `/`, `/faq`, `/valuation-guide`;
  `robots.txt` points at `sitemap-index.xml`. New `manifest.webmanifest`.
- `astro build`: 4 pages, 0 errors. `wrangler deploy --dry-run`: 14 files,
  ASSETS binding OK (Workers free plan).

### II. SEO
- Title format: `sdl.rentals | Premium Domain for Sale | SDL Rentals Scottsdale`.
- Meta description with price/availability ($55k / from $28k) + CTA + UVP;
  domain-focused keywords (buy .rentals, investment, brandable, expired, marketplace).
- Single H1 (`sdl.rentals`), 8 semantic H2s, 0 duplicate IDs, 51 ARIA hooks.
- Internal linking: portfolio, `/faq/`, `/valuation-guide/`, 6 cross-domain links.

### III. CRO
- Above-the-fold price panel (Asking $55,000 / from $28,000) + live viewer counter.
- Triple CTAs by tier: Buy Now / Make an Offer / Contact Agent (+ sticky mobile bar).
- Trust signals: Escrow.com, SSL/registrar-lock, transaction guarantee, 24–48h SLA
  + trust bar (11M visitors • $3.7B impact).
- Urgency: 1-of-1 asset badge, weekly viewers, spots-left microcopy.
- Social proof: 3 testimonials + comparable-sales ticker ($25k–$120k).
- Real inquiry form → `POST /api/inquire` (validation, honeypot, mailto fallback,
  success state, 15 `data-track` analytics hooks).
- Exit-intent email capture → `POST /api/subscribe` (desktop mouse-out + 45s
  mobile fallback, 7-day frequency cap).

### IV. Mobile
- Hamburger menu, all interactive elements `min 48px` (58 tap-targets),
  16px base font, `viewport-fit=cover`, `overflow-x: clip`, no horizontal scroll.

### V. Authority content
- New `/faq/` (escrow steps, timelines, installments, bundles).
- New `/valuation-guide/` (scarcity, extension fit, Scottsdale rental demand,
  comps, offer playbook) — weekly-blog ready.
- Portfolio section with live search + category filters (all/geo/rentals/brandable).

### VI. Design modernization
- Dark/light toggle (persisted, respects OS; dark default for hero brand).
- Scroll-reveal animations, card hover lifts, FAQ accordions, reduced-motion support.
- Visible focus rings (WCAG), custom 404 page, gradient acquisition footer.

### VII. Validation
- H1×1 / H2×8, 0 duplicate IDs, 8 mailto fallbacks, 5 schema blocks.
- Pre-deploy QA: build clean, dry-run clean, CTAs tracked, forms validate.

### Deployment
- Stays on Cloudflare Workers free plan (static assets + edge APIs, no paid bindings).
- Post-deploy: monitor errors/analytics 48h; submit updated sitemap in Google
  Search Console (manual step).
