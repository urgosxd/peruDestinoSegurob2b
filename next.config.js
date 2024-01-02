/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
  async redirects() {
    return [
      {
        source: '/:slug/',
        destination: '/blog/:slug',
        permanent: true
      },

      {
        source: '/nosotros2/',
        destination: '/nosotros',
        permanent: true
      },

      {
        source: '/contacto/',
        destination: '/contacto',
        permanent: true
      },

      {
        source: '/guia-viajera/',
        destination: '/blog?page=1',
        permanent: true
      },

      // {source:'https://perudestinoseguro.com/tours-peru/',
      // destination:'/',
      // permanent:true},
    ]
  }
}

module.exports = nextConfig
