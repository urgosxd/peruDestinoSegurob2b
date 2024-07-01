'use client'
import { memo,useState } from "react"
import { Carousel, ListItemSuffix, Typography } from "@material-tailwind/react";
import Image from 'next/image'
import localFont from 'next/font/local'

import React, { Component, useEffect } from "react";
import { useCycle, motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

interface Props {
  data: { img: string, titulo: string, duracion: string }[]
}

const myFont = localFont({ src: '../../public/CoreBoriW01-Regular.ttf' })

const PlaneVariants = {
  animationOne: {
    x: 370,
    y: 250,
    transition: { duration: 1.0 },
  },
  animationTwo: {
    x: 140,
    y: 150,
    transition: { duration: 1.0 },
  },
  animationThree: {
    x: 170,
    y: 200,
    transition: { duration: 1.0 },
  },
};

const CustomCarousel = ({ data }: Props) => {
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );


  // const duration = 2
  // const parabolicY = (x: number) => 2*x;
const [trail, setTrail] = useState([]);

  const duration = 6; // in seconds

  const generateKeyframes = () => {
    const keyframes = { x: [], y: [], rotate: [] };
    for (let t = 0; t <= 2 * Math.PI; t += 0.1) {
      keyframes.x.push(100 * Math.sin(2 * t)); // Example: double frequency for x
      keyframes.y.push(100 * Math.cos(t)); // Single frequency for y
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

  const keyframes = generateKeyframes();

  // useEffect(() => {
  //   setTimeout(cycleAnimation, 1000); // start "animationTwo" after 1 second
  //   setTimeout(cycleAnimation, 2000); // start "animationThree" after 2 seconds
  // }, []);

useEffect(() => {
    const interval = setInterval(() => {
      setTrail(trail => [...trail, { x: keyframes.x[0], y: keyframes.y[0] }]);
    }, duration * 1000 / keyframes.x.length);
    return () => clearInterval(interval);
  }, []);

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
              {trail.map((point, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `calc(50% + ${point.y}px)`,
            left: `calc(50% + ${point.x}px)`,
            width: "5px",
            height: "5px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}
              <Image src={ele.img} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority width={1500} height={900} className="lg:h-full h-full lg:w-full object-cover"></Image>
              <div className="absolute flex flex-col top-[156px] left-[98px] h-full w-[320px]">
                <motion.div
                  className="text-2xl text-gray-600 w-fit h-fit"
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

                  <FaPaperPlane size={30} rotate={45} />
                </motion.div>
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
