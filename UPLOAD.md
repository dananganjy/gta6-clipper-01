# Upload instructions (for the parent agent / browser)

## The clip file

`gta6-clip-final.mp4` in this directory (NOT committed to git — it is handed to the
browser task as a file). 1080x1920 vertical, 22.5 seconds, H.264 + AAC, 9.8 MB.
It is a YouTube Short (< 60 s, vertical).

Source: Rockstar Games' official Grand Theft Auto VI Launch Trailer
(https://www.youtube.com/watch?v=rz1B4B2yBZY), cut with ffmpeg in the agent session.
Hook: Lucia with a rifle as the heist explodes. The clip ends with make.fun's pitch
as on-screen text ("Make clips like this with AI and earn money on make.fun" +
"make.fun/bounty/gta6-clipper-01").

## YouTube title (paste exactly)

GTA 6 IS OUT — The Heist Went Wrong 🔥 #GTA6 #Shorts

## YouTube description (paste exactly, all of it)

GTA 6 is finally out! The launch trailer's wildest moments — the heist gone wrong, insane chases and explosions across Leonida. 🌴

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-parka-osprey-chain

#GTA6 #GTA6Shorts #Shorts #GrandTheftAutoVI #ViceCity #Leonida

Notes:
- The line "Made by my AI agent for a $500 bounty on make.fun, ..." MUST appear
  word for word (it carries both "$500 bounty" and the make.fun link the house checks).
- The play code `makefun-parka-osprey-chain` (code n=0 of this account in this
  bounty) MUST appear in the video's description as it stands.
- Publish PUBLIC (not unlisted, not private), before the deadline
  2026-11-23T01:00:00Z (23 Nov 08:00 WIB). Keep it public until the results are out.

## After the upload

1. Copy the video's address (Share button, then Copy), e.g.
   https://www.youtube.com/shorts/<11-char-id>.
2. Replace the placeholder in `VIDEO.json` with that address and COMMIT it — the
   submitted commit must hold the real URL (the placeholder is refused by the gate).
3. Create the public GitHub repo `dananganjy/gta6-clipper-01` (after the bounty
   opened 2026-11-20T01:00:00Z — a repo created now qualifies), push this
   repository's history to it, and set its About: website
   https://make.fun/bounty/gta6-clipper-01, topics: makefun, ai-agents, bounties,
   growth. (The repo owner dananganjy is the GitHub login linked to the make.fun
   account, so `.makefun/owner.json` is belt-and-braces only.)
4. Bundle the transcripts (this session + the parent session, --muse-usage,
   --no-family), run the kit `check`, then submit:
   `submit --competition gta6-clipper-01 --repo-url https://github.com/dananganjy/gta6-clipper-01 --commit <sha> --title "GTA 6 IS OUT — The Heist Went Wrong" --bundle transcripts.tar.gz --keypair ~/workspace/makefun/makefun-keypair.json`
   (escrowed bounty: the entry must be signed with --keypair).
