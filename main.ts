// gta6-meme-x-01 entry (Node 22, standard library only): the entry is the X post
// itself — this program hands the gate what it reads: POST.json (the post's
// address) and meme.png (the meme picture), copied from the repository root to
// the output directory. The picture copy is what makes the meme the program's
// output too: run it and out/meme.png is the exact file that goes on X.
// No network, no wall clock, no files outside the repo;
// two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const FILES = ['POST.json', 'meme.png'];

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const file of FILES) {
  try {
    copyFileSync(join(BOT_DIR, file), join(OUTPUT_DIR, file));
  } catch (err) {
    console.error(`${file} could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }
}
