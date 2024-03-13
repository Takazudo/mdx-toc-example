import * as esbuild from "esbuild";
import { settings } from "./settings.mjs";
import { copyHtml } from "./copy-html.mjs";

await copyHtml({
  outDir: "./_dev",
});
// esbuild.build(options).catch(() => process.exit(1));
const context = await esbuild.context({
  ...settings,
  outfile: "./_dev/index.js",
  //outdir: "./_dev",
  sourcemap: "inline",
});

// Enable watch mode
await context.watch();

// Enable serve mode
await context.serve({
  servedir: "./_dev",
});

// const serveResult = await ctx.serve(serveOptions);

// Dispose of the context
// context.dispose();
