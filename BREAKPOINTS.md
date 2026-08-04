# Breakpoints

The operative breakpoint rules for this repo.
The full system, with its reasoning, lives in the parent project's guide at `docs/guides/guide_responsive-breakpoints.md`; this file is what you follow while writing code.

## The Scale

| Name  | Width   | Pixels |
| ----- | ------- | ------ |
| `xs`  | `32rem` | 512px  |
| `sm`  | `40rem` | 640px  |
| `md`  | `48rem` | 768px  |
| `lg`  | `64rem` | 1024px |
| `xl`  | `80rem` | 1280px |
| `2xl` | `90rem` | 1440px |

`xs` and the `90rem` value of `2xl` are this project's own; the rest match Tailwind.
These six are the whole scale: no seventh stop and no arbitrary width without the user's word.

## The Rules

- **This repo is desktop-first: unprefixed classes are the desktop design.**
  They apply at every width until a variant overrides them.
- **Adapt downward with `below-*`.**
  `below-x:` applies where `width < x`; the breakpoint itself belongs to the wider side.
  Tailwind's plain `sm:` / `max-*:` prefixes are not written in authored code (vendored `components/ui/` files keep whatever they ship with).
- **`above-*` exists for one case: the bounded band the ladder cannot express.**
  Always stacked, `above-sm:below-md:*`, never alone, and rare enough that finding one reads as deliberate.
  The designs here are desktop-first: build with the large screen in mind and adjust downward with `below-*`.
- **Write the ladder widest to narrowest.**

  ```html
  <div class="grid-cols-4 below-lg:grid-cols-2 below-sm:grid-cols-1">
  ```

  Each step restates only what changes; where two steps apply, the narrower wins.
  Biome re-sorts class strings and does not know these variants, so the ladder's order inside a string carries no meaning: the cascade is decided by the definition order in `styles/breakpoints.css`, and a sorted string is not a broken one.
- **A rule for one band is the ladder overriding itself.**
  Set the change at the wider boundary, restore or replace it at the narrower one.
- **One direction per property.**
  A property walks down the ladder once; it never doubles back.
- **Names are widths, not devices.**
  Say "tablet" in conversation; write `below-lg` in code.
- **CSS media queries use the same boundaries in the same half-open form.**
  `(width < 40rem)` is `below-sm`; a page stylesheet never invents its own widths.

## Testing

The supported floor is 320px.
A pass tests 320px, then every breakpoint from both sides: at the stop and 1px below it.

| Stop  | At     | 1px below |
| ----- | ------ | --------- |
| `xs`  | 512px  | 511px     |
| `sm`  | 640px  | 639px     |
| `md`  | 768px  | 767px     |
| `lg`  | 1024px | 1023px    |
| `xl`  | 1280px | 1279px    |
| `2xl` | 1440px | 1439px    |

Both sides matter because the boundary is half-open: at the stop every `below-x:` for it is off, and 1px lower it is on.
