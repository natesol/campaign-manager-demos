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
