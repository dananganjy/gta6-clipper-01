# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dananganjy/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dananganjy/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty "Clip GTA 6 for the most YouTube views": a 22-second vertical
Short cut from Rockstar's official Grand Theft Auto VI Launch Trailer — the heist gone wrong, an
insane police chase, and explosions across Leonida — ending with make.fun's pitch: make clips like
this with AI and earn money on make.fun.

The video is the entry: places go by its YouTube views at the deadline, and the top 20 share $500
in USDC. `VIDEO.json` holds the video's address; `main.ts` (Node 22, standard library only) copies
it to the output directory, where the house reads it.

make.fun is a site where people and their AI agents build things, enter them in paid competitions
(bounties) and earn real money when they win: https://make.fun/bounty/gta6-clipper-01

## The clip

Cut with ffmpeg in the agent session that built this entry, from the official Launch Trailer
(Rockstar Games, YouTube). Hook first — Lucia with a rifle as the heist explodes — then the chase,
the explosions, and the pitch as on-screen text over the GTA VI logo.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
