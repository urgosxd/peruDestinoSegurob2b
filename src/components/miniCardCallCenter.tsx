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
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { IconButton } from "@material-tailwind/react";
import Image from 'next/image'
import Link from "next/link";
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
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useMobile } from "@/hooks/useMobile";
import { SwipeContact } from "./swiperContact";

export default function MiniCard({ data }: Props) {

  const isMobile = useMobile()

  return  isMobile ? <SwipeContact data={data}/>  :
      
    <div className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center px-36  ">
      
      {data.map(ele => <Card className=" relative mt-6 lg:w-1/3 w-full items-center ">
        <CardBody className=" flex flex-col items-center justify-center">
          <img
            src={ele.image.meta.download_url}
            alt="card-image"
            className=""
          />

          <Typography className="mt-6 h-5 text-xl font-bold text-center text-wrap  tracking-normal w-full leading-none">
            {ele.name}
          </Typography>
          <Typography className="text-center w-full h-5 text-sm leading-tight mt-4 mb-4 text-gray-500">
            {ele.desc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={ele.link} className="bg bg-[#D20000] py-1 rounded-lg text-white w-36 px-2">{ele.numero}         <ChevronRightIcon className="inline-block w-3  stroke-[4px]" /></a>
        </CardFooter>
      </Card>)}

    </div>
  
}
