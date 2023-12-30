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
interface Props{
  ftImageSrc:string
  title:string
  fecha:string
  time:string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function CardSalidas({ftImageSrc,title,fecha,time}:Props) {
  
  const CardHeaderMotion = motion(CardHeader)
  
      
      return (
    <Card className={"relative grid  w-full  lg:max-w-[20rem] max-w-[15rem] p-0 border rounded-lg"}>
      <Link  href={`/blog/`}>
      <CardHeaderMotion 
        whileHover={{ scale: 1.05,
        transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }} 
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[40vh] h-[30vh] cursor-pointer" >
        <Image src={ftImageSrc || ""} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[20vh]"/>
      </CardHeaderMotion>
      </Link>

      <CardBody className="p-1 flex flex-col items-start justify-center gap-y-0">
        <div  className="mb-4 text-gray-600 text-sm font-bold text-center">
        {title} {time}
        </div>
          <div>{fecha}</div>
        <div className="w-full flex flex-row justify-end"> 

        <button className="bg bg-[#D20000] px-2 py-1 text-white rounded-lg text-lg">Ver Detalles</button>
        </div>
      </CardBody>
    </Card>
  );
 
  }
