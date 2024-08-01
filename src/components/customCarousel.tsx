'use client'
import { memo, useState } from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
import localFont from 'next/font/local'

import React, { Component, useEffect } from "react";
import { useCycle, motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import RatioComponent from "./ratioComponen";
import { Console } from "console";

interface Props {
  data: { type: string, value: any, id: string }[]
}

const myFont = localFont({ src: '../../public/CoreBoriW01-Regular.ttf' })

const CustomCarousel = ({ data }: Props) => {
  console.log(data)
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );


  // const duration = 2
  // const parabolicY = (x: number) => 2*x;
  const [trail, setTrail] = useState([]);

  const duration = 6; // in seconds


  const keyframes = { x: [], y: [], rotate: [] };
  const keyframes2 = { x: [], y: [], rotate: [] };
  const generateKeyframes = () => {
    for (let t = 0; t <= 2 * Math.PI; t += 0.1) {
      keyframes.x.push(100 * Math.sin(2 * t) - 30); // Example: double frequency for x
      keyframes2.x.push(100 * Math.cos(t) + 500); // Example: double frequency for x
      keyframes.y.push(100 * Math.cos(t) + 50); // Single frequency for y
      keyframes2.y.push(100 * Math.sin(2 * t) + 500)
    }
    for (let i = 0; i < keyframes.x.length - 1; i++) {
      const dx = keyframes.x[i + 1] - keyframes.x[i];
      const dy = keyframes.y[i + 1] - keyframes.y[i];
      const angle = Math.atan2(dy, dx);
      const degrees = (angle * 180) / Math.PI; // Convert to degrees
      keyframes.rotate.push(degrees);
    }
    // Add the last rotation value to make the array lengths match
    keyframes.rotate.push(keyframes.rotate[keyframes.rotate.length - 1]);
    return keyframes;
  };

  generateKeyframes();

  // useEffect(() => {
  //   setTimeout(cycleAnimation, 1000); // start "animationTwo" after 1 second
  //   setTimeout(cycleAnimation, 2000); // start "animationThree" after 2 seconds
  // }, []);



  return (
    <div className="lg:w-full w-full h-[640px]">
      <Carousel autoplayDelay={8000} transition={{ duration: 2 }} className="overflow-y-hidden">
        {data.map((ele) => {

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
              return (<div className="relative w-full h-3/4 lg:h-full">
                <Image src={ele.value.photo.url.full_url} quality={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority fill className="lg:h-full h-full lg:w-full object-cover "></Image>
                <motion.div
                  className="text-2xl text-gray-600 w-fit h-fit mx-auto "
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

                <motion.div
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
                </motion.div>

                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="absolute flex flex-col-reverse lg:flex-row top-0  h-full w-full ">
                  <div className="w-full h-1/2 lg:h-full  lg:w-1/3 h-full flex flex-col justify-center content-center flex-wrap items-center">
                    <div className="mx-10">
                      <Image src="/peruCarousel.png" alt="peru" width={140} height={60} className="w-[45px] lg:w-[140px]" />
                      <div className="flex flex-row lg:flex-col">
                      <div className={`${myFont.className} text-white text-[36px] lg:text-[40px] leading-[30px] lg:leading-[47.5px]`} >{ele.value.carouselTitulo}</div>
                      <div className="text-white bg-[#00AFD5] text-[12px] lg:text-[23px] font-bold lg:font-extrabold w-fit px-3 rounded-xl font-monse h-10"> {dias} Días / {noches} Noches </div>
                      </div>
                      <Image src="/incluido.png" alt="incluido" width={332} height={100} />
                    </div>

                  </div>
                  <div className="w-full h-1/2 lg:h-full lg:w-2/3 h-full flex flex-col justify-center">
                    <RatioComponent data={ele.value.miniPhotos.map(ele => ({ miniTitle: "AA", miniContent: "aa", img: ele.url.full_url }))} />
                  </div>
                </div>

              </div>
              )

            case "Tipo2":
              return (
                <div className="relative w-full h-full">
                  <Image src={ele.value.photo.url.url} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority fill className="lg:h-full h-full lg:w-full object-cover"></Image>
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
