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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useMobile } from "@/hooks/useMobile"
import { ChevronRightIcon } from "lucide-react";

type miniCardType ={
  image: any
  name: string
  desc: string
  numero: string
  link: string
}
interface Props {
  data: miniCardType[]
}
export const CarouselInformationShad = ({data}:Props)=> {
    
    
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full h-full"
    >
    
      <CarouselContent >

      {data.map((ele,idx)=>(
      <CarouselItem>
        <Card className="relative mt-6 lg:w-1/3 w-full items-center ">
        <CardHeader></CardHeader>
        <CardContent className=" flex flex-col items-center justify-center">
        <Image src={ele.image.meta.download_url} quality={100} width={100} height={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims"  className=""></Image>
        <div className="mt-6 h-5 text-xl font-bold text-center text-wrap  tracking-normal w-full leading-none">{ele.name}</div>
        <div className="text-center w-full h-5 text-sm leading-tight mt-4 mb-4 text-gray-500">{ele.desc}</div>
        </CardContent>
        <CardFooter>

          <a href={ele.link} className="bg bg-[#D20000] text-center py-1 rounded-lg text-white w-40 px-2 mx-auto">{ele.numero}   <ChevronRightIcon className="inline-block w-3  stroke-[4px]" /></a>
        </CardFooter>
        </Card>
      </CarouselItem>))}

      </CarouselContent>
    </Carousel>
  )
}
