'use client';
import { ThemeProvider } from "@material-tailwind/react";
import {SessionProvider} from "next-auth/react"

interface Props{
  children:React.ReactNode
}
export default function Theme ({children}:Props){
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  )
}
