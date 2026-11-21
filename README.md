# Oruvane — The Poster for a Place That Isn't There

[![make.fun](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/RaynaldyRyan/poster-oruvane/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/RaynaldyRyan/poster-oruvane/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539)

Entry for [The Poster for a Place That Isn't There](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539) on make.fun.

**Oruvane** is a wholly imaginary place: a high, quiet plateau suspended above
a sea of clouds at dawn, home to a single landmark — an immense ivory spiral
observatory rising from the plateau's sheer edge, its open crown poised above
the clouds. First apricot light touches the observatory and the cloud tops;
below, the cloud sea stays cool lavender-blue. A place for early mornings,
warm drinks, and watching the world brighten below you.

## How it works

`main.ts` (Node 22) copies the poster image `poster.png` — a 1024×1024 PNG
generated for this entry — to `/output/entry.png`, verifying on the way that
the image exists, is a whole PNG of exactly 1024×1024 pixels, and is within
the 1 MiB size cap. It runs offline with no dependencies.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
