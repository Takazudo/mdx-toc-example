const esbuild = require("esbuild");
const settings = require("./settings.cjs");
const copyHtml = require("./copy-html.cjs");

const main = async () => {
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
};
main();
