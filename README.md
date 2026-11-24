# rakibulriyaddev.github.io

Personal portfolio and CV of Rakibul Islam, live at **https://rakibulriyaddev.github.io**.

Built with Next.js (static export) and Tailwind CSS, deployed to GitHub Pages.

## Structure

| Path | What it is |
|---|---|
| `src/app/page.tsx` | The whole single-page site. Content (skills, experience, projects, education, achievements) lives in the data arrays at the top of the file. |
| `src/app/components/Nav.tsx` | Sticky header with section links and the mobile drawer |
| `src/app/layout.tsx` | Page title, description and fonts |
| `public/cv/main.tex` | CV source (LaTeX, RenderCV layout) |
| `public/cv/main.pdf` | Compiled CV, linked from the site's "Download Resume" button |
| `public/images/portrait.jpg` | Hero portrait |

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/
```

## Update the CV

Edit `public/cv/main.tex`, then rebuild the PDF (needs a LaTeX distribution, e.g. MiKTeX). Run it twice so cross-references settle:

```bash
cd public/cv
pdflatex -interaction=nonstopmode -output-directory=<tmp-dir> main.tex
```

Copy `<tmp-dir>/main.pdf` over `public/cv/main.pdf` and keep the `.aux`/`.log` files out of git. Keep the site (`page.tsx`) and the CV in sync when either changes.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`. It builds the static export and publishes it to GitHub Pages; there's no manual step.

The "years of experience" figure is computed at build time from the start date in `page.tsx`, so it updates on the next deploy.
