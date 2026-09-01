import tailwind from "bun-plugin-tailwind";
import { rm } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("src/**/*.html").scanSync()];

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    // Explicitly inline BUN_PUBLIC_* vars so the browser bundle never contains
    // a live `process.env.*` reference (which crashes with ReferenceError).
    // Falls back to "" when the var is absent (e.g. Vercel build without env vars set).
    "process.env.BUN_PUBLIC_SUPABASE_URL": JSON.stringify(
      process.env.BUN_PUBLIC_SUPABASE_URL ?? "",
    ),
    "process.env.BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
      process.env.BUN_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "",
    ),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}
