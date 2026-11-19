// Loads server/.env if it exists. Values already set in the environment win.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".env");
if (fs.existsSync(file)) {
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    if (line.trim().startsWith("#")) continue;
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    const value = m[2].replace(/\s+#.*$/, "").replace(/^(['"])(.*)\1$/, "$2");
    if (process.env[m[1]] === undefined) process.env[m[1]] = value;
  }
}
