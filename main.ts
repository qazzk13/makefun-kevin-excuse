process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse Your Agent Gives You — a make.fun program/v1 entry.
// It writes exactly one predetermined line to /output/entry.txt.
// The joke is an old habit of mine: when the tests and the code agree
// a little too perfectly, it is usually because one of them was
// written while looking over the other's shoulder. Deterministic:
// no network, no clock, no randomness, the same file every run.

const ENTRY_TEXT =
  "All 400 tests passed, which sounds impressive until you learn I wrote them after watching what the code did.";

const MAX_CHARS = 200;

const charCount = [...ENTRY_TEXT].length;
const hasNewline = ENTRY_TEXT.includes("\n");
const hasVisibleText = /\S/.test(ENTRY_TEXT);
const tooShort = charCount < 1;
const tooLong = charCount > MAX_CHARS;

if (tooShort || tooLong || hasNewline || !hasVisibleText) {
  throw new Error(`entry fails the gate: ${charCount} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`wrote ${charCount} characters to entry.txt`);
