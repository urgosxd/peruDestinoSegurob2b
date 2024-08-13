import type { Metadata } from 'next'
import { Montserrat,Poppins } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "@/app/context/NextAuthProvider"
import { NavbarDefault } from '@/components/navbar';
import Theme from '@/components/theme';
import { Footer } from '@/components/footer';
import Script from 'next/script'

import { ThemeProvider } from "@/components/clientExportTheme";
const font = Poppins({weight:["100","200","300","400","500","600","700","800","900"],subsets: ['latin-ext'],variable: '--font-Poppins',})
const font2 = Montserrat({weight:["100","200","300","400","500","600","700","800","900"],subsets: ['latin-ext'],variable: '--font-Monserrat',})


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

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="es">
//       <head/>
//       <Theme>
//       <body className={ `${font.variable} ${font2.variable} font-sans`}>
//       {childrenavn}
//       </body>
//       </Theme>
//     </html>
//   )
// }
//

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = {
    navbar:{
      styles:{
        base:{
          mobileNav:{
            overflow: 'overflow-auto',
            height: 'h-[400px]'
          }
        }
      }
    },
    cardBody:{
      styles:{
        base:{ 
          p: 'p-3 py-1'
        }

      }
    }
      }
  return (
  <ThemeProvider value={theme}>{children}</ThemeProvider>
  )
}
