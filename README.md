# Campaign Demos

Three Hebrew campaign demo pages, published as a static site on GitHub Pages.

The pages are fictional portfolio concepts.
No brand, product, or service shown here is real.

## Routes

| Route | Contents |
| --- | --- |
| `/` | index linking to the three demos |
| `/cookies/` | limited-edition cookie drop |
| `/skincare/` | three-step summer skincare routine |
| `/mortgage/` | mortgage clarity consultation |

Every page is Hebrew and right-to-left.
`lang` and `dir` are set once on the document element in the root layout.

All four routes are built and in the final steps of implementation.
Campaign imagery is currently drawn in markup and CSS while asset production is under way.

## Local Development

```bash
npm install
npm run dev
```

The site is then served at <http://localhost:3000>.

## Formatting

```bash
npm run check
```

Biome formats and lints.
`npm run format` and `npm run lint` run either half on its own.

## Build

```bash
npm run build
```

`next build` writes a static export to `out/`.

## Deployment

`.github/workflows/deploy.yml` checks formatting, builds the export, and publishes `out/` through GitHub Pages on every push to `main`.
A formatting or lint failure blocks the deployment.

The workflow is inert in the parent repository and active only in the published demos repository.

GitHub Pages serves a project repository under `/<repo-name>`, so the build needs a matching base path.
The workflow derives it from `GITHUB_REPOSITORY` and passes it as `NEXT_PUBLIC_BASE_PATH`, which keeps the repository name out of the source.
Local builds leave the variable unset and therefore use an empty base path.

## Assets

No third-party assets are in use.
