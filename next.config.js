/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static exports (compatible with GitHub pages)
  reactStrictMode: true,
  // swcMinify: true, // TODO remove this until we figure what it's for
}

module.exports = nextConfig
