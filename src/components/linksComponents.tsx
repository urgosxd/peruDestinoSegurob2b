'use client'

import { useMobile } from "@/hooks/useMobile"

interface Props {
  link1:string
  link2:string
  link3:string
  tourDisplay?: boolean
}

export const LinksComponents = ({link1,link2,link3,tourDisplay=false}:Props)=>{

  const isMobile = useMobile()
  return  isMobile &&
    <div className="flex flex-col px-10 gap-y-[20px] my-[45px]">
             <a href={link1} target="_blank" className="text-center w-fit px-10 text-[28px] font-bold rounded-lg py-2  bg bg-[#D20000] text-white " > Descargar Pdf</a>
             <a href={link2} target="_blank" className="text-center w-fit px-10 text-[28px] font-bold rounded-lg py-2  bg bg-[#00afd5] text-white " > Descargar Word</a>
             {!tourDisplay &&  <a href={link3} target="_blank" className="text-center w-fit px-10 text-[28px] font-bold rounded-lg py-2  bg bg-[#808080] text-white " > Descargar Flyer</a>}
    </div>

  

}
