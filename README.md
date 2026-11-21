# Muhammad Hassnain — Portfolio

Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

## Updating content

All text, projects, skills and links live in `src/data/portfolio.ts`.

- **Add screenshots:** put images in `public/projects/` and add them to a project's `images` array. Projects with no images show a placeholder.
- **Contact form:** uses EmailJS (service/template IDs in `src/components/sections/Contact.tsx`). A direct `mailto:` link is shown as a fallback.
- **SEO / social card:** edit `index.html`; replace `public/og-image.png` with a custom 1200×630 image if desired.
