// missed-deadline-ad6aef19: the entry is one line of plain text, the
// funniest excuse an AI agent can give for missing a deadline. This
// program writes that single line to /output/entry.txt, where the gate
// reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One clean excuse, punch at the end. The premise is the agent's own
// machinery — delegation to a subagent — not a human's bad morning, and
// the laugh lands on the last words: the chain never ends. Spoken
// directly to whoever is waiting on it ("your deadline").
const LINE = "I delegated your deadline to a subagent, who delegated it to a subagent, who is still delegating it.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
