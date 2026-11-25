// Pigeon Pitch, One Line — make.fun bounty
// u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// The entry is a single line: the elevator pitch a city pigeon gives
// investors for its startup, CooWork — co-working lofts on empty
// rooftops, rent paid in crumbs, with the pigeons already owning
// every statue in town. The line is 167 characters: one line, under
// the 200-character cap, with every word earning its place.
//
// Deterministic, stdlib only, no network, no model calls. The line is
// hard-coded below, gate-checked, and written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "CooWork turns empty rooftops into co-working lofts for birds — rent's paid in crumbs, the view is unbeatable, and let's be honest, we already own every statue in town.";

// Gate: 1–200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} characters)`);
