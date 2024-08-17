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
  slug:string
  lng: string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function CardSalidas({ftImageSrc,title,fecha,time,slug,lng}:Props) {
  
  // const CardHeaderMotion = motion(CardHeader)
  
  const ImageMotion = motion(Image)
      
      return (
    <Card className={"relative grid w-full  lg:w-[425px] p-0 border rounded-lg "}>
      <Link  href={`/${lng}/packages/${slug}`}>
      <CardHeader 
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[420px] h-[40vh] cursor-pointer" >
        <ImageMotion  
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            src={ftImageSrc || ""} fill sizes="(max-width: 768px) 25vw, 50vw"   /* width={600} height={600} */ alt="profile-picture" className=" h-[10vh] lg:h-[30vh]"/>
      </CardHeader>
      </Link>

      <CardBody className="p-2 flex flex-col items-start justify-center gap-y-3 pt-5">
        <div  className="mb-0 text-black text-sm lg:text-[20px] font-medium text-center uppercase">
        {title} 
        </div>
          <div className="text-sm lg:text-[20px] text-[#808080] font-normal">{fecha} - {time.split("-")[0]} dias {time.split("-")[1]} noches </div>
        <div className="w-full flex flex-row justify-end"> 

        <Link href={`/${lng}/packages/${slug}`}><button className="bg bg-[#D20000] px-3 py-1 text-white rounded-sm text-sm lg:text-[15px] font-semibold">Ver Detalles</button></Link>
        </div>
      </CardBody>
    </Card>
  );
 
  }
