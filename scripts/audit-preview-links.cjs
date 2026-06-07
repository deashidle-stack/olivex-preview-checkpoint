#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const roots = process.argv.slice(2);
if (roots.length === 0) roots.push(".", "share-preview");

const ignorePrefixes = ["http:", "https:", "mailto:", "tel:", "#", "data:", "app:"];
const htmlFiles = [];
const problems = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}

function anchorExists(file, hash) {
  const text = fs.readFileSync(file, "utf8");
  const escaped = hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`id=["']${escaped}["']`).test(text);
}

for (const root of roots) {
  if (!fs.existsSync(root)) {
    problems.push({ root, issue: "missing audit root" });
    continue;
  }
  walk(root);
}

const attrRe = /(?<![\w-])(href|src)=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const text = fs.readFileSync(file, "utf8");
  const dir = path.dirname(file);

  for (const match of text.matchAll(attrRe)) {
    const attr = match[1];
    const raw = match[2];
    if (!raw || ignorePrefixes.some((prefix) => raw.startsWith(prefix))) continue;

    const [withoutHash, hash] = raw.split("#");
    const target = withoutHash.split("?")[0];
    if (!target) continue;

    const resolved = path.normalize(path.join(dir, target));
    if (!fs.existsSync(resolved)) {
      problems.push({ file, attr, raw, resolved, issue: "missing target" });
      continue;
    }

    if (hash && resolved.endsWith(".html") && !anchorExists(resolved, hash)) {
      problems.push({ file, attr, raw, resolved, issue: `missing anchor #${hash}` });
    }
  }
}

const result = { htmlFiles: htmlFiles.length, problems };
console.log(JSON.stringify(result, null, 2));

if (problems.length > 0) process.exit(1);
