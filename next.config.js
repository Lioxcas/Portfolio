/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
/*   output: { path: path.resolve(__dirname, "static") },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });
    return config;
  }, */
