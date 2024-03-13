import mdx from "@mdx-js/esbuild";
import rehypeExternalLinks from "rehype-external-links";

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
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            rel: ["nofollow"],
          },
        ],
      ],
    }),
  ],
};

export { settings };
