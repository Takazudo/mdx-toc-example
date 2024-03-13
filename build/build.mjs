import * as esbuild from "esbuild";
import { settings } from "./settings.mjs";
import { copyHtml } from "./copy-html.mjs";

try {
  await copyHtml({
    outDir: "./dist",
  });
  await esbuild.build({
    ...settings,
    outfile: "./dist/index.js",
    minify: true,
    sourcemap: "linked",
  });
} catch (e) {
  process.exit(1);
}
