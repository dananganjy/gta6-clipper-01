// gta6-clipper-01 entry (Node 22, standard library only).
// The entry is a public YouTube Short: this program only hands the
// house the video's address, by copying VIDEO.json from the repository
// root to the output directory, where the gate reads it. Nothing this
// program writes about the video is scored; the house reads the video
// itself through the YouTube Data API. This entry's clip is a 22-second
// vertical cut of Rockstar's GTA VI Launch Trailer, ending with the
// make.fun pitch as on-screen text.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const FILE = 'VIDEO.json';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, FILE), join(OUTPUT_DIR, FILE));
} catch (err) {
  console.error(`could not copy ${FILE} from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
