<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Formatting and linting

Biome is the formatter and the linter here.
There is no ESLint and no Prettier, and neither gets added.

Run it before you call work finished, rather than leaving it to CI:

```bash
npm run check
```

- `npm run format` — apply formatting.
- `npm run lint` — lint only, writes nothing.
- `npm run check` — formatting, linting, and safe fixes together.

`biome.json` is the only source of formatting truth.
Do not add `.prettierrc`, `.eslintrc`, or editor-specific formatting config, and do not hand-format code to taste.
If the formatting looks wrong, change `biome.json` and re-run, never the file.

The deployment workflow runs `biome ci` before the build, so unformatted or failing code cannot deploy.

# Styling

Tailwind v4, configured in CSS. There is no `tailwind.config.js` and none gets added.
`app/globals.css` is the only place tokens are defined, in one `@theme inline` block.
`inline` is required there: the tokens reference other theme variables, and without it Tailwind tree-shakes the referenced defaults and the `var()` resolves to nothing.

- **Scale the design from the theme, never the markup.**
  `--spacing` drives every spacing utility, `--text-*` drives the type scale.
- **Alias Tailwind's palette instead of picking hex values.**
  Its colours are already designed and tested; a hand-mixed shade is not.
- **Name roles, not shades.**
  `text-muted`, `border-border`. A different opacity step at each call site is a magic number wearing a class name.
- **Opacity modifiers and `[…]` values are correct for genuine one-offs, wrong as the default.**
  Use them where nothing else reuses the value; add a token the moment something does.
- **Every page is RTL.**
  Use logical utilities — `ps`/`pe`, `ms`/`me`, `start`/`end`, `text-start` — never `left`/`right`.
- **Check utility names against v4 before using them.**
  Several were renamed: `bg-gradient-to-b` is now `bg-linear-to-b`.
