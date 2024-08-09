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
interface Props {
  imgSrc: string
  title: string
  price: string
  slug: string
  time: string
  lng: string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

import { CalendarIcon } from '@heroicons/react/24/outline'
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function ProfileCard({ imgSrc, title, price, slug, time, lng }: Props) {
  let rawTime = []
  try {
    rawTime = time.split('-')
  } catch (error) {

    rawTime = [undefined, undefined]

  }
  const dias = rawTime[0]
  const noches = rawTime[1]

  const ImageMotion = motion(Image)
  return (
    <Card className="relative grid w-full  lg:w-[425px] p-0 border rounded-lg ">
      <Link href={`/${lng}/packages/${slug}`}>
        <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[420px] h-[30vh] cursor-pointer" 
        >
          <ImageMotion
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}

            src={imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className=" h-[10vh] lg:h-[30vh]" />
        </CardHeader>
      </Link>

      <CardBody className="text-center !p-3">
        <Typography as="div" className="flex flex-row justify-between lg:mb-2 lg:text-[15px] font-normal text-gray-800">
          <div className=""><MapPinIcon className="w-5 pb-1 inline-block" color="#838383" /> Peru </div>
          <div>{Array(3).fill(0).map((ele) => <StarIcon className="w-5 pb-1 inline-block" color="#D20000" />)}</div>
        </Typography>

        <Typography as="p" className="mb-2 lg:mb-2 lg:text-[20px] text-[18px] font-bold text-[#808080] lg:text-[#424242]">
          {title}
        </Typography>
        <Typography as="div" className="flex flex-col lg:flex-row justify-between font-bold lg:text-4xl text-xl text-black" textGradient>
          <div className="mb-2 lg:mb-2 flex flex-row lg:flex-col justify-center"> <Typography className="lg:text-[12px] text-[#838383] text-left lg:h-[14px] font-normal">Desde </Typography>
            <Typography className="lg:text-[15px] lg:text-[#00AFD5] lg:h-[18px] font-semibold">USD ${price}</Typography>
          </div>
          <Typography className="text-start lg:text-center text-[#838383] text-[10px] lg:text-[12px] text-semibold lg:font-normal"> <CalendarIcon className="w-5 pb-1 inline-block" color="#D20000" /> {dias} Días / {noches} Noches</Typography>
        </Typography>

      </CardBody>
      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 !p-0">
        <Link href={`/${lng}/packages/${slug}`}>

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
