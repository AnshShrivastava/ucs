# Universal Children School website

Static React + TypeScript + Vite + Tailwind site for GitHub Pages. No backend, no secrets.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repository on the `main` branch.
2. In the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

`vite.config.ts` uses a relative `base` and the site uses hash routing (`/#/about`), so it works under any repository name and refreshes never 404.

## Edit content
Everything lives in `src/config/school.ts`. Empty values are hidden or shown as "will be published once confirmed". Entries marked `DRAFT` are placeholder copy for management approval. To use the real logo, put it in `public/` and set `logoPath`. To replace placeholder illustrations, swap the `<Photo>` component for `<img>` tags (images go in `src/assets/` or `public/`).

## Launch checklist (verify before publishing)
- [ ] Full street address (currently only "Gwalior, Madhya Pradesh, India")
- [ ] Phone number and email address
- [ ] Office hours / school timings
- [ ] Google Maps embed URL (`mapEmbedUrl`); the supplied short link is used for directions
- [ ] Affiliation or board (leave blank until confirmed)
- [ ] Classes offered, eligibility, admission process, required documents
- [ ] Co-curricular activities
- [ ] Approve or edit the vision, mission, values, tagline and approach themes
- [ ] Official logo and real photographs
- [ ] Social media URLs (optional)

## Path to a backend (see `src/services/`)
- **Phase 1 (now):** static site, config file, `mailto:` enquiries.
- **Phase 2:** build a REST API (Go or Node) with a database and admin login. Implement `EnquiryService` and `SchoolInfoService` with `fetch` calls; pages already read data through `config`/`services`, so UI changes stay small. Move the content out of `school.ts` into the admin dashboard. Host the API separately; GitHub Pages cannot run servers.
- **Phase 3:** admissions and payments (e.g. Razorpay) with server-side order creation, signed webhook verification, idempotent processing and transaction records. Keep all keys on the server only.
