'use client'
import { memo } from "react"
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'

import React  from "react";
import { useCycle, motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import RatioComponent from "./ratioComponen";
import { useMobile } from "@/hooks/useMobile";

interface Props {
  data: { type: string, value: any, id: string }[]
  keyframes: any[]
  keyframes2: any[]
}

// const myFont = localFont({ src: '../../public/CoreBoriW01-Regular.ttf' })

const CustomCarousel = ({ data,keyframes,keyframes2 }: Props) => {
  console.log(data)
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );


  // const duration = 2
  // const parabolicY = (x: number) => 2*x;
  const duration = 6; // in seconds


  const isMobile = useMobile()
  return (
    <div className="lg:w-full w-full h-[70vh] lg:h-screen">
      <Carousel autoplay loop autoplayDelay={8000} transition={{ duration: 2 }} className="overflow-y-hidden">
        {data.map((ele,idxx) => {

          let rawDuracion = []
          try {
            rawDuracion = ele.value.carouselDuracion.split('-')
          } catch (error) {

            rawDuracion = [undefined, undefined]

          }
          const dias = rawDuracion[0]
          const noches = rawDuracion[1]
          switch (ele.type) {
            case "Tipo1":
              // console.log(ele.value.miniPhotos)
              return (<div className="relative w-full h-full lg:h-full">
                <Image src={ele.value.photo.url.full_url}  quality={100} sizes="(max-width: 768px) 50vw, 100vw"  alt="ims" objectFit="cover" priority={idxx == 0 ? true :false} fill className=""></Image>
                

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="absolute flex flex-col-reverse lg:flex-row top-0  h-full w-full ">
                  <div className="w-full h-1/2 lg:h-full  lg:w-1/3 h-full flex flex-col justify-center content-center flex-wrap items-center">
                    <div className="mx-[7%] lg:mx-[10%]">
                      <Image src="/peruCarousel.png" alt="peru" width={140} height={60} className="w-[65px] lg:w-[140px]" />
                      <div className="flex flex-row lg:flex-col items-end lg:items-start">
                      <div className={`font-custom text-white text-[36px] lg:text-[40px] w-[65%] leading-[42px] lg:leading-[47.5px] font-normal`} >{ele.value.carouselTitulo}</div>
                      <div className="text-white bg-[#00AFD5] uppercase text-[11px] lg:text-[23px] font-bold lg:font-extrabold w-fit px-2 lg:px-3 rounded-xl font-monse h-fit"> {dias} Días / {noches} Noches </div>
                      </div>
                      <Image src="/incluido.png" alt="incluido" width={332} height={100} />
                    </div>

                  </div>
                  <div className="w-full h-1/2 lg:h-full lg:w-2/3 h-full flex flex-col justify-center">
                    <RatioComponent data={ele.value.miniPhotos.map(ele => ({ miniTitle: "AA", miniContent: "aa", img: ele.url.full_url }))} />
                  </div>
                </div>
                
                <motion.div
                  className="text-2xl text-gray-600 w-fit h-fit mx-auto z-50"
                  animate={{
                    x: keyframes.x,
                    y: keyframes.y,
                    rotate: keyframes.rotate
                  }}
                  transition={{
                    x: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    y: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    rotate: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  }}
                >
                  <FaPaperPlane size={30} rotate={90} color="white" />
                </motion.div>


                {!isMobile && <motion.div 
                  className="text-2xl text-gray-600 w-fit h-fit mx-auto "
                  animate={{
                    x: keyframes2.x,
                    y: keyframes2.y,
                    rotate: keyframes.rotate
                  }}
                  transition={{
                    x: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    y: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    rotate: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",

                    }
                  }}
                >

                  <FaPaperPlane size={30} color="white" />
                </motion.div>}

              </div>
              )

            case "Tipo2":
              return (
                <div className="relative w-full h-full">
                <Image src={ele.value.photo.url.full_url} quality={100} sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw" alt="ims" objectFit="cover" priority={true} fill className=""></Image>
                </div>
              )
            default:
              break

          }
        })}
      </Carousel>
    </div>

  )
}

export default memo(CustomCarousel)
