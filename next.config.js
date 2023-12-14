/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: false,
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'practica.pdsviajes.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
