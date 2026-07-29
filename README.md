# Campaign demos

Three Hebrew campaign demo pages, published as a static site on GitHub Pages.

The pages are fictional portfolio concepts.
No brand, product, or service shown here is real.

## Routes

| Route | Contents |
| --- | --- |
| `/` | English index linking to the three demos |
| `/cookies/` | limited-edition cookie drop |
| `/skincare/` | three-step summer skincare routine |
| `/mortgage/` | mortgage clarity consultation |

The index is English and left-to-right.
Each demo sets `lang="he"` and `dir="rtl"` on its own top-level element, so Hebrew and RTL stay scoped to the demo pages.

## Local development

```bash
npm install
npm run dev
```

The site is then served at http://localhost:3000.

## Build

```bash
npm run build
```

`next build` writes a static export to `out/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the export and publishes `out/` through GitHub Pages.

GitHub Pages serves a project repository under `/<repo-name>`, so the build needs a matching base path.
The workflow derives it from `GITHUB_REPOSITORY` and passes it as `NEXT_PUBLIC_BASE_PATH`, which keeps the repository name out of the source.
Local builds leave the variable unset and therefore use an empty base path.

`next/link` and `next/font` apply the base path on their own.
A string `src` passed to `next/image` does not, and has to be prefixed manually.

## Assets

No third-party assets are in use yet.
Sources and licences are recorded here as assets are added.
