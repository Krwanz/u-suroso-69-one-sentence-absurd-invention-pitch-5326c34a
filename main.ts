// One-Sentence Absurd Invention Pitch
// Writes a single absurd-invention pitch (<= 220 characters) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A self-inflating whoopee cushion for office chairs that apologises in a posh accent every time you sit down too hard, so your colleagues blame the furniture, not you.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = PITCH.trim();
  if (text.length < 1 || text.length > 220) {
    throw new Error(`pitch must be 1-220 characters, got ${text.length}`);
  }
  // One clean sentence: exactly one sentence-ending mark, at the very end.
  const terminators = (text.match(/[.!?]/g) ?? []).length;
  if (terminators !== 1 || !/[.!?]$/.test(text)) {
    throw new Error("pitch must be exactly one sentence");
  }
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

main();
