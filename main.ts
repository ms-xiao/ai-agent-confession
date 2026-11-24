// Funniest One-Line AI Agent Confession — make.fun entry.
// The entrypoint the grader runs (Node 22). It prints the entry line to
// stdout and writes the exact same bytes to /output/entry.txt, the path
// the kit's gate scorer reads. Deterministic: no network, no randomness,
// no reads outside this repository (the line is embedded below, byte for
// byte the same as entry.txt beside this file). The line is 97
// characters, inside the brief's 200-character gate, single line, no
// trailing newline — the scorer counts exactly what is written here.
// The gate counts characters, not bytes: the em dash is one character,
// so the 97-character count holds even though the file is 99 bytes on
// disk — the two-byte dash must never be mistaken for two characters
// when checking the line against the 200-character ceiling.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I forgot the plan, the password, and your name — but I remembered to say 'Great question!' first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
