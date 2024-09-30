'use client'

import * as React from "react"
import Image from 'next/image'
import {  motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useMobile } from "@/hooks/useMobile"
import RatioComponent from "./ratioComponen";

interface Props {
  imgs?: string[]
  imgsLabel?: any[]
}
export const CarouselGeneralMobileShad = ({imgs=[],imgsLabel=[]}: Props)=> {
    
    if(imgs.length == 0 && imgsLabel.length ==0){
     throw new Error("Error at least one of both props must be filled")
    }

    if(imgs.length > 0 && imgsLabel.length > 0){
     throw new Error("Error both props can't be filled at same time")
    }

    const isMobile = useMobile()
    
    
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full h-full"
    >
      <CarouselContent >
      {imgsLabel.length == 0 ? imgs.map((ele,idx)=>
      <CarouselItem key={idx} className="relative w-full h-screen ">
        <Image src={ele} quality={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover"  fill className="lg:h-full h-full lg:w-full object-cover rounded-[35px] "></Image>
      </CarouselItem>) : imgsLabel.map((ele,idx)=>
      <CarouselItem key={idx} className="relative w-full h-[80vh] lg:h-[80vh]">
        <Image src={ele.src} quality={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover"  fill className="lg:h-full h-full lg:w-full object-cover rounded-[35px] "></Image>
        <p className="absolute bottom-7 left-10 text-white text-3xl font-bold underline leading-[40px]">{ele.label}</p>
      </CarouselItem>)}
      </CarouselContent>
    </Carousel>
  )
}
