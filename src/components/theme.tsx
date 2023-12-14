'use client';
import { ThemeProvider } from "@material-tailwind/react";
interface Props{
  children:React.ReactNode
}
export default function Theme ({children}:Props){
  return (
  <ThemeProvider>{children}</ThemeProvider>
  )
}
