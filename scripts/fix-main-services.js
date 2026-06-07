// Surgically fixes main-services.ts by removing stray content between cta and cases
const fs = require('fs');
const filePath = 'd:/dwww/react/data/pages/services/main-services.ts';

let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
const out = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];

  // Pattern: after the cta property (ends with `}`), there's stray `},` or `}` that closes nothing
  // followed by orphaned case item lines ending with `},`
  // followed by a `  ],` line
  // THEN the real `  cases:` block begins
  //
  // Detect: line is `},` AND next non-empty line starts with `    { tag:`
  // OR line is `}` followed by orphaned items
  if (line.trim() === '},' && i + 1 < lines.length) {
    // Check if what follows is orphaned case items
    let j = i + 1;
    let orphanCount = 0;
    while (j < lines.length && lines[j].trim().startsWith('{ tag:')) {
      orphanCount++;
      j++;
    }
    // Check if after the orphaned items there's `  ],` then `  cases:`
    if (orphanCount > 0 && j < lines.length && lines[j].trim() === '],' &&
        j + 1 < lines.length && lines[j + 1].trim().startsWith('cases:')) {
      // This is the stray block - skip `},` + orphans + `],`
      // But first fix the cta line above - it may need a comma
      // The cta line should be the previous line in out
      if (out.length > 0) {
        const lastLine = out[out.length - 1];
        if (!lastLine.trimEnd().endsWith(',') && !lastLine.trimEnd().endsWith('{')) {
          out[out.length - 1] = lastLine.trimEnd() + ',';
        }
      }
      i = j + 1; // skip to cases:
      console.log(`Skipped stray block at line ${i - orphanCount - 2}`);
      continue;
    }
  }

  // Fix bgStyle: { background: "background:linear-gradient(...)" }
  // → bgStyle: "linear-gradient(...)"
  if (line.includes('bgStyle: { background: "background:')) {
    const fixed = line.replace(
      /bgStyle: \{ background: "background:(linear-gradient\([^"]+\))" \}/,
      'bgStyle: "$1"'
    );
    out.push(fixed);
    i++;
    continue;
  }

  // Fix &amp; HTML entities
  if (line.includes('&amp;')) {
    out.push(line.replace(/&amp;/g, '&'));
    i++;
    continue;
  }

  out.push(line);
  i++;
}

fs.writeFileSync(filePath, out.join('\n'), 'utf8');
console.log('Done. Lines:', lines.length, '→', out.length);
