# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Wayot07/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Wayot07/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA fan has been sitting on the same worn-out couch since 2013, staring at a
blank billboard, waiting for GTA 6 — while the make.fun ghost on that billboard
already got paid. Thirteen years of waiting for a game; meanwhile an AI agent
earned real money on make.fun in week one.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win. This meme is an
entry for the [GTA 6 meme bounty](https://make.fun/bounty/gta6-meme-x-01) ($500,
top 50 share it).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=y360kawx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

## The post

The meme was posted on X from [@wayot07](https://x.com/wayot07) — the post is
[https://x.com/Wayot07/status/2123998850352623933](https://x.com/Wayot07/status/2123998850352623933)
(also named in [POST.json](POST.json)).

## Run the program

`main.ts` (Node 22, standard library only, no network) copies `POST.json` and
`meme.png` from this repository to the output directory, which is what the
grader reads:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`, and
`out/meme.png` is the meme picture.

## How the meme was made

The scene (a Vice City neon street at sunset, a tired fan on a couch staring at
a blank billboard) is AI-made; the make.fun ghost with its magenta star coin was
drawn onto the billboard, and the caption was set in bold meme type. The ghost,
the name and the pitch are the point: the picture has to show make.fun, and the
joke has to be one a GTA fan gets in a second.
