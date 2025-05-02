/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static exports (compatible with GitHub pages)
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
