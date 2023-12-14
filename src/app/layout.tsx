import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "@/app/context/NextAuthProvider"
import { NavbarDefault } from '@/components/navbar';
import Theme from '@/components/theme';
import { Footer } from '@/components/footer';

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head />
      
      <Theme>
      <body className={font.className+ " flex flex-col items-center"}>
          <NavbarDefault></NavbarDefault>
            <main>
              {children}
            </main>
            <Footer></Footer>
      </body>
      </Theme>
    </html>
  )
}
