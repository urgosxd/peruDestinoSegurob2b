'use client'
import { memo } from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
import localFont from 'next/font/local'
import { Montserrat } from "next/font/google";

interface Props {
  data: {img:string,titulo:string,duracion:string}[]
}

const myFont = localFont({ src: '../../public/CoreBoriW01-Regular.ttf' })


const CustomCarousel = ({ data }: Props) => {
  return (
    <div className="lg:w-full w-full">
      <Carousel autoplay loop transition={{ duration: 2 }} className="rounded-xl">
        {data.map((ele) => {
          let rawDuracion = []
          try {
            rawDuracion = ele.duracion.split('-')
          } catch (error) {

            rawDuracion = [undefined, undefined]

          }
          const dias = rawDuracion[0]
          const noches = rawDuracion[1]

          return (
            <div className="relative">
              <Image src={ele.img} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority width={1500} height={900} className="lg:h-full h-full lg:w-full object-cover"></Image>
              <div className="absolute flex flex-col top-[156px] left-[98px] h-full w-[320px]">
                
                <Image src="/peruCarousel.png" alt="peru" width={140} height={60} />
                <div className={`${myFont.className} text-white lg:text-[40px] leading-[47.5px]`} >{ele.titulo}</div>
                <div className="text-white bg-[#00AFD5] text-[23px] font-extrabold w-fit px-3 rounded-xl font-monse"> {dias} Días / {noches} Noches </div>
                <Image src="/incluido.png" alt="incluido" width={332} height={100} />
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default memo(CustomCarousel)
