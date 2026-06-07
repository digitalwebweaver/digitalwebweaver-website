// Fix industries.ts: remove stray content on cta lines + orphan/duplicate cases blocks
const fs = require('fs');
const filePath = 'd:/dwww/react/data/pages/industries/industries.ts';

let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
const out = [];
let i = 0;
let inOrphanZone = false;
let fixes = 0;

while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();

  // Skip orphan zone lines until the real `};` closing
  if (inOrphanZone) {
    if (trimmed === '};') {
      inOrphanZone = false;
      // Don't emit — we already emitted `};` when we entered the zone
    }
    i++;
    continue;
  }

  // Fix cta line that has stray `, stack: [...], bgClass: "...",` after the cta value
  // Pattern: `  cta: { ... }, stack: [...]` — find `, stack:` and truncate there
  if (line.includes('  cta:') && line.includes('}, stack:')) {
    const cutAt = line.indexOf('}, stack:');
    // cutAt is position of `}` — include it, then add `,`
    out.push(line.slice(0, cutAt + 1) + ',');
    fixes++;
    i++;
    continue;
  }

  // Detect the erroneous `},` at column 0 that appears right after the (correct) cases `]`
  // followed by orphan `{ tag:` lines — this `},` should instead be `};` closing the export const
  if (trimmed === '},' && line[0] === '}') {
    // Look ahead for the first non-empty line
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j++;
    if (j < lines.length && /^\s+\{ tag:/.test(lines[j])) {
      out.push('};');
      inOrphanZone = true;
      fixes++;
      i++;
      continue;
    }
  }

  out.push(line);
  i++;
}

fs.writeFileSync(filePath, out.join('\n'), 'utf8');
console.log(`Fixed ${fixes} issues. Lines: ${lines.length} → ${out.length}`);
