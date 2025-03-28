import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
    eslint:{
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't ignore build errors
    ignoreBuildErrors: false,
  },
  images: {
    // Add domains for external images (if needed)
    domains: ['example.com'],
  },
  // Enable SWC for faster compilation
  swcMinify: true,
}

export default nextConfig
