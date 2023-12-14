'use client'
import {memo} from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
interface Props{
  imgs:any[]
}
const CustomCarousel =({imgs}:Props) =>{

  return (
    <div className="h-[90vh] w-full">
 <Carousel autoplay loop transition={{ duration: 2 }} className="rounded-xl">
          {imgs.map((ele) => (
            <Image src={ele.imgsrc} alt="ims" width={1000} height={1000} className="h-full w-full object-cover"></Image>
          ))}
        </Carousel>
</div>
  )
}

export default memo(CustomCarousel)
