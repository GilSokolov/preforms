#!/usr/bin/env node
// Runs build + tests for @preforms/angular against a given Angular major in an
// isolated temp copy of the workspace (the real node_modules/lockfile are untouched).
// Usage: node scripts/test-angular-matrix.mjs <20|21> [--keep]
import { cpSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, basename } from "node:path";
import { spawnSync } from "node:child_process";

const major = process.argv[2];
const keep = process.argv.includes("--keep");
if (!/^\d+$/.test(major ?? "")) {
  console.error("Usage: node scripts/test-angular-matrix.mjs <major> [--keep]");
  process.exit(2);
}

const root = resolve(import.meta.dirname, "..");
const work = mkdtempSync(join(tmpdir(), `preforms-ng${major}-`));
const skip = new Set(["node_modules", "dist", ".git", ".angular", ".claude"]);

for (const entry of ["package.json", "packages/ts", "packages/angular", "packages/data"]) {
  cpSync(join(root, entry), join(work, entry), {
    recursive: true,
    filter: (src) => !skip.has(basename(src)),
  });
}
writeFileSync(join(work, "pnpm-workspace.yaml"), 'packages:\n  - "packages/*"\n');

const range = `^${major}`;
const pkgPath = join(work, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
delete pkg.workspaces;
for (const name of Object.keys(pkg.devDependencies)) {
  if (/^@angular\/(core|common|compiler|compiler-cli|forms|cdk|material|cli|platform-browser)$/.test(name) || name === "ng-packagr") {
    pkg.devDependencies[name] = range;
  }
  // lint is not part of the matrix and its tooling is pinned to one Angular major
  if (/eslint|angular-eslint/.test(name)) delete pkg.devDependencies[name];
}
pkg.devDependencies["@angular/compiler-cli"] = range;
pkg.devDependencies["@angular/platform-browser"] = range;
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

const ngPkgPath = join(work, "packages/angular/package.json");
const ngPkg = JSON.parse(readFileSync(ngPkgPath, "utf8"));
ngPkg.devDependencies["@angular/platform-browser"] = range;
writeFileSync(ngPkgPath, JSON.stringify(ngPkg, null, 2));

const run = (cmd, args) => {
  console.log(`\n$ ${cmd} ${args.join(" ")}   (in ${work})`);
  const r = spawnSync(cmd, args, { cwd: work, stdio: "inherit", shell: true });
  if (r.status !== 0) {
    console.error(`\nFAILED on Angular ${major}: ${cmd} ${args.join(" ")} (work dir kept: ${work})`);
    process.exit(r.status ?? 1);
  }
};

run("pnpm", ["install", "--no-frozen-lockfile"]);
run("pnpm", ["--filter", "@preforms/ts", "build"]);
run("pnpm", ["--filter", "@preforms/angular", "build"]);
run("pnpm", ["--filter", "@preforms/ts", "test"]);
run("pnpm", ["--filter", "@preforms/angular", "test"]);
console.log(`\nOK: build + tests passed on Angular ${major}`);
if (!keep) rmSync(work, { recursive: true, force: true });
