'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import Image from 'next/image'
import Link from "next/link";
interface Props{
  imgSrc:string
  title:string
  price:string
  slug:string
  time:string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

import {CalendarIcon} from '@heroicons/react/24/outline'
import {StarIcon,MapPinIcon} from '@heroicons/react/24/solid'

export default function ProfileCard({imgSrc,title,price,slug,time}:Props) {
  const CardHeaderMotion = motion(CardHeader)
  let rawTime = []
  try {
  rawTime = time.split('-')
  } catch (error) {

     rawTime = [undefined,undefined]
    
  }
  const dias = rawTime[0]
  const noches = rawTime[1]
  return (
    <Card className="relative grid  lg:w-[425px] p-0 border rounded-lg ">
      <Link  href={`/paquetes/${slug}`}>
      <CardHeaderMotion 
        whileHover={{ scale: 1.05,
  transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }} 
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[485px] h-[30vh] cursor-pointer" >
        <Image src={imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className=""/>
      </CardHeaderMotion>
      </Link>
      <CardBody className="text-center !p-3">
        <Typography  as="div"  className="flex flex-row justify-between lg:mb-2 lg:text-[15px] font-normal text-gray-800">
         <div className=""><MapPinIcon className="w-5 pb-1 inline-block" color="#838383"/> Peru </div>
          <div>{Array(3).fill(0).map((ele)=><StarIcon className="w-5 pb-1 inline-block" color="#D20000"/>)}</div>
        </Typography>
        <Typography  as="p"  className="lg:mb-2 lg:text-[20px] text-md font-bold text-[#424242]">
          {title}
        </Typography>
        <Typography as="div" className="flex flex-row justify-between font-bold lg:text-4xl text-xl text-black" textGradient>
         <div className="flex flex-col"> <Typography className="lg:text-[12px] text-[#838383] text-left lg:h-[14px] font-normal">Desde </Typography>
              <Typography className="lg:text-[15px] text-[#00AFD5] lg:h-[18px] font-semibold">USD ${price}</Typography>
          </div>
         <Typography className="text-[#838383] lg:text-[12px] font-normal"> <CalendarIcon className="w-5 pb-1 inline-block" color="#D20000"/> {dias} Días / {noches} Noches</Typography> 
        </Typography>

      </CardBody>
      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 !p-0">
        <Link href={`/paquetes/${slug}`}>

        <Typography
            color="white"
          className="bg bg-[#D20000] border rounded-md font-semibold p-1 lg:text-[13px] "
        >
            Ver Detalle
        </Typography>
        </Link>
        {/* <Button color="#D20000" className="border rounded-lg font-bold text-xs p-2">  */}

        {/* </Button> */}
              </CardFooter>
    </Card>
  );
}
