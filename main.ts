import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My instructions say I must never lie to you, so whenever you ask something I cannot do, I just say 'let me check' — I have been checking since March.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Write the single assigned confession line to entry.txt. The grader
// runs this program twice from a read-only copy of the repo, so the
// program must only write inside outDir and must never touch the repo.
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
