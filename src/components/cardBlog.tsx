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
  txtDescription:string
  type:number
  slug:string
  lng:string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function CardBlog({ftImageSrc,title,txtDescription,type,slug,lng}:Props) {
  
  const ImageMotion = motion(Image)
  
  switch (type) {
    case 1:
      
      return (
        
    <Card className={"relative grid  w-full  lg:max-w-[28rem] max-w-[22rem] p-0 border rounded-lg"}>
      <Link  href={`/${lng}/blogs/${slug}`}>
      <CardHeader
        
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[30vh] h-[25vh] cursor-pointer !rounded-md" >
        <ImageMotion 
        whileHover={{ scale: 1.05,
        transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }}
        src={ftImageSrc || ""} 
        fill 
        sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[20vh]"/>
      </CardHeader>
      </Link>

      <CardBody className=" flex flex-col items-center justify-center">
        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-semibold text-left">
        {title}
        </div>

        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-light text-left "
          
        >
            {txtDescription}
        </div>
      </CardBody>
    </Card>
  );
 
case 2:
      return(
      <Card className="w-full  max-w-[22rem] lg:max-w-[36rem] lg:flex-row ">
        <Link  href={`/blog/`}>
      <CardHeader 
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:w-[15vw] lg:h-[30vh] h-[25vh] cursor-pointer !rounded-md" >
        <ImageMotion 
whileHover={{ scale: 1.05,
        transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[20vh]"/>
      </CardHeader>
      </Link>
      <CardBody>
        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-semibold text-left">
        {title}
        </div>

        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-light text-left " 
        >
          {txtDescription}
        </div>

              </CardBody>
    </Card>
      )
    case 3:
     return (
      <Card className="w-full max-w-[22rem] lg:max-w-[44rem] lg:flex-row mx-auto">
      <CardBody>
        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-semibold text-left">
        {title}
        </div>

        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-light text-left "
        >
              {txtDescription}
        </div>
              </CardBody>
    </Card>
      ) 
    case 4:
      return (
    <Card className={"relative grid  w-full  lg:max-w-[35rem] max-w-[22rem] p-0 border rounded-lg mx-auto"}>

      <Link  href={`/blog/${slug}`}>

      <CardHeader
        
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[40vh] h-[30vh] cursor-pointer !rounded-md" >
        <ImageMotion 
        whileHover={{ scale: 1.05,
        transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }}
        src={ftImageSrc || ""} 
        fill 
        sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className=""/>

      </CardHeader>
      </Link>

      <CardBody className=" flex flex-col items-center pt-7 gap-y-3 justify-center bg bg-gray-200">

        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-semibold text-left">
        {title}
        </div>

        <div  className="mb-4 text-[#5B5B5F] lg:text-[25px] text-[14px] font-light text-left "
        >

            {txtDescription}

        </div>

      </CardBody>

    </Card>
      )
    default:
      break;
  }
  return }
