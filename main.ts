// Everyday Wonder, Two Days to Find the Line
// A single sentence about a small moment of wonder in everyday life,
// written to /output/entry.txt for the make.fun judge.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The gecko on the bathroom wall froze mid-step as I brushed my teeth, and for a second the house felt less like mine and more like a place I was only visiting.";

function main(): void {
  const text = ENTRY.trim();

  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }

  const sentences = text
    .split(/[.!?]/)
    .filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) {
    throw new Error("entry must be a single sentence");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} characters to /output/entry.txt`);
}

main();
