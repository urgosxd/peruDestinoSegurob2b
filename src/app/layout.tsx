import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "@/app/context/NextAuthProvider"
import { NavbarDefault } from '@/components/navbar';
import Theme from '@/components/theme';
import { Footer } from '@/components/footer';
import Script from 'next/script'
const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Peru Destino Seguro B2B',
  robots:{
    index:false,
    follow:false
  },
  title: 'Peru Destino Seguro',
  verification:{
    google: "lPNLi9cxaLWnYzIQxDt4M4W1RlPbTqZy7_46teJxqiA"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head/>
      <Theme>
      <body className={font.className+ ""}>
                 {children}
      </body>
      </Theme>
    </html>
  )
}
