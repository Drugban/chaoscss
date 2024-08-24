/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeStarryNight from "rehype-starry-night";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: true,
      },
      {
        source: "/docs/getting-started",
        destination: "/docs/getting-started/installation",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkDirective],
    rehypePlugins: [rehypeSlug, rehypeStarryNight],
  },
});

export default withMDX(nextConfig);
