import { cpSync, existsSync, mkdirSync } from "node:fs";

const out = ".next/standalone";
if (!existsSync(out)) throw new Error("Next standalone output was not generated");
if (existsSync("public")) cpSync("public", `${out}/public`, { recursive: true });
mkdirSync(`${out}/.next`, { recursive: true });
cpSync(".next/static", `${out}/.next/static`, { recursive: true });
console.log("Prepared standalone Next deployment with public and static assets");
