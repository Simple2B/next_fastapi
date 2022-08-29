/**
 * @type {import('next').NextConfig}
 */
module.exports = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    // domains: ['storage.googleapis.com', 'coinpayments.net'],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: true,
  }
  return nextConfig
}
