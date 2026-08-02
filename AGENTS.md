# Demos

The instruction file for the demo project.
The root [`AGENTS.md`](../AGENTS.md) wins over anything here.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Formatting and Linting

Biome is the formatter and the linter here.
There is no ESLint and no Prettier, and neither gets added.

Run it before you call work finished, rather than leaving it to CI.
[`README.md`](README.md) lists the commands.

`biome.json` is the only source of formatting truth.
Do not add `.prettierrc`, `.eslintrc`, or editor-specific formatting config, and do not hand-format code to taste.
If the formatting looks wrong, change `biome.json` and re-run, never the file.

The deployment workflow runs `biome ci` before the build, so unformatted or failing code cannot deploy.

## Structure

Anything global and reusable lives in `components/`, with the vendored shadcn components under `components/ui/`.
Anything a single page owns stays with that page, as `app/_home/` and `app/cookies/_components/` do.

## Styling

Tailwind v4, configured in CSS.
There is no `tailwind.config.js` and none gets added.

`styles/` holds every token, split by what each file does: `tokens.css` for the non-color scale, `roles.css` for the color role names, `schemes/` for what those roles mean in light and in dark, and `campaigns/` for what they mean inside one campaign.
`styles/globals.css` is the entry point and contains imports only.
A page may add its own stylesheet next to itself for what only that page uses.

`inline` is required on the `@theme` blocks: the tokens reference other theme variables, and without it Tailwind tree-shakes the referenced defaults and the `var()` resolves to nothing.

- **Scale the design from the theme, never the markup.**
  `--spacing` drives every spacing utility, `--text-*` drives the type scale.
- **Try Tailwind's palette first, and where it has no right answer, set the value directly.**
  Its ramps are designed and tested, so an alias is the better default and every neutral should come from one.
  But the campaigns bring brand colors that no ramp contains, and the neutral ramps themselves run out at the extremes: each is either too blue or too flat for a given ground.
  Bending a design to the nearest available step is worse than a value that is simply correct, so never force the alias.
  Alias where a step genuinely fits, set the value where none does, and leave a comment saying which case it was, so the next reader knows it was a decision rather than an oversight.
- **Name roles, not shades.**
  `text-muted`, `border-border`.
  A different opacity step at each call site is a magic number wearing a class name.
- **Opacity modifiers and `[...]` values are correct for genuine one-offs, wrong as the default.**
  Use them where nothing else reuses the value; add a token the moment something does.
- **Every page is RTL.**
  Use logical utilities: `ps`/`pe`, `ms`/`me`, `start`/`end`, `text-start`, never `left`/`right`.
- **Check utility names against v4 before using them.**
  Several were renamed: `bg-gradient-to-b` is now `bg-linear-to-b`.

## Assets and Paths

`next/link` and `next/font` apply the base path on their own.
A string `src` passed to `next/image` does not, and has to be prefixed by hand.

Record the source and license of every third-party asset in [`README.md`](README.md) as it is added.
