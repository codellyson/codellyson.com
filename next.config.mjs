import createMDX from "@next/mdx";
import rehypeExpressiveCode from "rehype-expressive-code";
 
/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
  themes: ['github-dark', 'github-light'],
  frames: true,
  lineNumbers: true,
  keepLanguageTag: false,
   shiki: {
    theme: 'github-dark',
    langs: ['ts', 'js', 'jsx', 'tsx', 'css', 'html', 'json', 'python', 'bash', 'yaml', 'markdown', 'mdx', 'graphql', 'jsonc', 'toml', 'xml', 'yaml', 'yml', 'sql', 'md', 'mdx'],
  }
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
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
    providerImportSource: "@mdx-js/react",
     
  },
});

export default withMDX(nextConfig);
