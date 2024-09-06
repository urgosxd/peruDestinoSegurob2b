import { getDestinos } from "@/app/lib/wp"
import { Footer } from "@/components/footer"
import { NavbarDefault } from "@/components/navbar"
import Script from 'next/script'


export const fetchCache = 'force-no-store';

export default async function Layout({children,params}:{children:React.ReactNode,params:any}){
  return 
  children
  
}
