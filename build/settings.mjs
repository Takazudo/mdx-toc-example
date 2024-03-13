import mdx from '@mdx-js/esbuild'

const settings = {
  logLevel: "info",
  entryPoints: {
    w: "./src/index.js",
  },
  format: "esm",
  bundle: true,
  //outdir: "dist",
  platform: "browser",
  plugins: [
    mdx({
      /* jsxImportSource: …, otherOptions… */
    }),
  ],
};

export { settings };
