/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['zzyueuweeoakopuuwfau.supabase.co'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
}

module.exports = nextConfig
