/** @type {import('next').NextConfig} */
const nextConfig = {
typescript:{
    ignoreBuildErrors:true,
  },
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
