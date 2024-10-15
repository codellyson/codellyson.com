import createMDX from "@next/mdx";
import rehypeExpressiveCode from "rehype-expressive-code";

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
  // You can add configuration options here
  themes: ["andromeeda", "aurora-x"],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      // The nested array structure is required to pass options
      // to a rehype plugin
      [rehypeExpressiveCode, rehypeExpressiveCodeOptions],
    ],
  },
});

export default withMDX(nextConfig);
