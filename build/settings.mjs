import mdx from "@mdx-js/esbuild";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";

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
        [rehypeSlug],
        [rehypeToc],
      ],
    }),
  ],
};

export { settings };
