'use client'
import {memo} from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
interface Props{
  imgs:any[]
}
const CustomCarousel =({imgs}:Props) =>{

  return (
    <div className="lg:w-full w-full">
      <Carousel autoplay loop transition={{ duration: 2 }} className="rounded-xl">
          {imgs.map((ele) => (
          <div className="relative">
          <Image src={ele} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority width={1500} height={900} className="lg:h-full h-full lg:w-full object-cover"></Image>
            <div className="absolute flex top-0 h-full w-full justify-between">
              <div className="text-white">hola</div>
              <div className="text-white">ula</div>
            </div>
          </div>
          ))}
      </Carousel>
    </div>
  )
}

export default memo(CustomCarousel)
