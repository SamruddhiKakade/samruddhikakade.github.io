// Fails the build if the site's source contains anything that must stay private.
// Generic rules live here; private terms live in a git-ignored file outside the site (../profile/site-blocklist.txt).
// In that file, a line starting with "re:" is a case-sensitive regular expression; any other line is a
// case-insensitive substring.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const scan = ['src', 'public'].map((d) => join(root, d));
const exts = new Set(['.mdx', '.md', '.astro', '.ts', '.mjs', '.css', '.svg', '.html', '.txt']);

// Only these repositories of hers may be linked.
const allowedRepos = new Set(['CSP_571_Project', 'ITMD_361_Lab_6', 'ITMD_361_Lab_7']);

const rules = [
  { name: 'em dash', re: /\u2014/ },
  { name: 'phone number', re: /\(?\b\d{3}\)?[-. ]\d{3}[-. ]\d{4}\b/ },
];

const blockFile = join(root, '..', 'profile', 'site-blocklist.txt');
const lines = existsSync(blockFile)
  ? readFileSync(blockFile, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  : [];
const blocked = lines.filter((l) => !l.startsWith('re:'));
const blockedRe = lines.filter((l) => l.startsWith('re:')).map((l) => new RegExp(l.slice(3)));
if (!lines.length) console.warn('privacy-check: no private blocklist found (fine in CI; run locally before committing).');

const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(extname(p))) files.push(p);
  }
};
scan.filter(existsSync).forEach(walk);

const problems = [];
for (const f of files) {
  if (f.endsWith('privacy-check.mjs')) continue;
  const lines = readFileSync(f, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    const at = `${f.slice(root.length)}:${i + 1}`;
    for (const r of rules) if (r.re.test(line)) problems.push(`${at}  ${r.name}: ${line.trim().slice(0, 100)}`);
    for (const b of blocked) if (line.toLowerCase().includes(b.toLowerCase())) problems.push(`${at}  private term "${b}"`);
    for (const r of blockedRe) if (r.test(line)) problems.push(`${at}  private pattern ${r}`);
    for (const m of line.matchAll(/github\.com\/SamruddhiKakade\/([\w.-]+)/g)) {
      if (!allowedRepos.has(m[1])) problems.push(`${at}  link to a repository not on the approved list: ${m[1]}`);
    }
  });
}

if (problems.length) {
  console.error(`privacy-check: ${problems.length} problem(s)\n` + problems.join('\n'));
  process.exit(1);
}
console.log(`privacy-check: ${files.length} files clean.`);
