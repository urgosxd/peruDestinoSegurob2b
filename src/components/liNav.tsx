import { Typography } from "@material-tailwind/react"
import React from "react"
import Link from 'next/link'

interface Props {
  txt:string
  setIdxNav:React.Dispatch<React.SetStateAction<number>>
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
  id:number
  idxNavState:number
  lng:string
  func:any
}

const NamesNavbar2URL:{[key:string]:string} = {
  "inicio":"/",
  "destinos":"/destinos",
  "nosotros": "/nosotros",
  "blog": "/blog?page=1",
  "contacto": "/contacto",
  "Salidas Grupales": "/salidasGrupales"

}

export default function LiNav({txt,setIdxNav,setOpenNav,id,lng,func}:Props){
    return (<Typography
        as="li"
        color="blue-gray"
        className={`flex lg:justify-center justify-start pt-0 font-bold ${(txt == "Salidas Grupales") ? "w-50":"w-32"}`}
      >
    <Link
    href={func(lng,txt)}
    // href={NamesNavbar2URL[txt]}
      className="flex flex-col gap-x-2"
        onClick={()=>{setIdxNav(id);setOpenNav(false)}}
    >
     <div  className="mt-7 p-2 lg:text-center uppercase text-md lg:text-md">
      {txt}
        </div>
      {/* {txt == idxNavState ? <motion.div  className="underline" layoutId="underline"/>:null} */}
    </Link>
      </Typography>)
}

