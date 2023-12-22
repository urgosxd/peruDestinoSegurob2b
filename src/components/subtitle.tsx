'use client'

import { Typography } from "@material-tailwind/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
export default function Subtitle({children}:Props){
  return   <h2 className="w-fit border-solid lg:text-5xl text-3xl my-7 
        border-b-2 border-[#D20000] my-10 p-3 text-center font-black text-gray-800 mb-5 lg:mb-10"> 
    {children}
    </h2> 
}


