/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static exports (compatible with GitHub pages)
  reactStrictMode: true,
  // swcMinify: true, // TODO remove this until we figure what it's for
  eslint: {
    ignoreDuringBuilds: true, // TODO keep this until Github Actions can correctly lint
  }
}

module.exports = nextConfig
