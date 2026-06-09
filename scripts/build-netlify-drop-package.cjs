#!/usr/bin/env node

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "share-preview");
const deliverables = path.join(root, "deliverables");
const packageName = "olivex-preview-hub-netlify-drop";
const target = path.join(deliverables, packageName);
const zipPath = path.join(deliverables, `${packageName}.zip`);

if (!fs.existsSync(source)) {
  throw new Error(`Missing source folder: ${source}`);
}

fs.mkdirSync(deliverables, { recursive: true });
fs.rmSync(target, { recursive: true, force: true });
fs.rmSync(zipPath, { force: true });

execFileSync(
  "rsync",
  [
    "-a",
    "--delete",
    "--exclude",
    "qa/",
    "--exclude",
    ".DS_Store",
    "--exclude",
    "._*",
    "--exclude",
    "__MACOSX/",
    "--exclude",
    "assets/Logo_OliveX_020620261452.pdf",
    "--exclude",
    "assets/logo-rendered/",
    "--exclude",
    "assets/olivex-wordmark-temp.png",
    "--exclude",
    "assets/olivex-wordmark-transparent.png",
    "--exclude",
    "assets/visuals/olivex-hero-editorial-2026-06-07.png",
    "--exclude",
    "assets/visuals/olivex-producer-poster-2026-06-07.png",
    "--exclude",
    "assets/visuals/olivex-product-placeholder-2026-06-07.png",
    `${source}/`,
    `${target}/`,
  ],
  { stdio: "inherit" },
);

const rootIndex = path.join(target, "index.html");
const storefront = path.join(target, "website.html");
if (!fs.existsSync(rootIndex)) {
  throw new Error("Drop package is invalid: missing root index.html");
}
if (!fs.existsSync(storefront)) {
  throw new Error("Drop package is invalid: missing website.html storefront");
}

execFileSync("ditto", ["-c", "-k", "--norsrc", "--keepParent", packageName, zipPath], {
  cwd: deliverables,
  env: { ...process.env, COPYFILE_DISABLE: "1" },
  stdio: "inherit",
});

function sizeMb(filePath) {
  return Number((fs.statSync(filePath).size / 1024 / 1024).toFixed(2));
}

const summary = {
  folder: path.relative(root, target),
  zip: path.relative(root, zipPath),
  zipMb: sizeMb(zipPath),
  rootIndex: path.relative(root, rootIndex),
  storefront: path.relative(root, storefront),
};

console.log(JSON.stringify(summary, null, 2));
