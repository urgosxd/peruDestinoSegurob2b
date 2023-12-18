'use client'
import {memo} from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
interface Props{
  imgs:any[]
}
const CustomCarousel =({imgs}:Props) =>{

  return (
    <div className="h-[40vh] lg:h-[90vh] lg:w-full w-11/12">
 <Carousel autoplay loop transition={{ duration: 2 }} className="rounded-xl">
          {imgs.map((ele) => (
            <Image src={ele.imgsrc} alt="ims" priority width={1800} height={900} className="lg:h-full h-full lg:w-full object-cover"></Image>
          ))}
        </Carousel>
</div>
  )
}

export default memo(CustomCarousel)
