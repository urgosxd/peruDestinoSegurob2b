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
  async redirects(){
    return [
      {source:'https://perudestinoseguro.com/:slug/',
      destination:'/blog/:slug',
      permanent:true},

      {source:'https://perudestinoseguro.com/nosotros2/',
      destination:'/nosotros',
      permanent:true},
      
      {source:'https://perudestinoseguro.com/contacto/',
      destination:'/contacto',
      permanent:true},
      
      {source:'https://perudestinoseguro.com/guia-viajera/',
      destination:'/blog?page=1',
      permanent:true},
      
      // {source:'https://perudestinoseguro.com/tours-peru/',
      // destination:'/',
      // permanent:true},
    ]
  }
}

module.exports = nextConfig
