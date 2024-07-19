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
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function CardBlog({ftImageSrc,title,txtDescription,type,slug}:Props) {
  
  const ImageMotion = motion(Image)
  
  switch (type) {
    case 1:
      
      return (
    <Card className={"relative grid  w-full  lg:max-w-[28rem] max-w-[15rem] p-0 border rounded-lg"}>
      <Link  href={`/blog/${slug}`}>
      <CardHeader
        
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[40vh] h-[30vh] cursor-pointer" >
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
        <div  className="mb-4 text-gray-600 text-sm font-bold text-center">
        {title}
        </div>

        <div  className="h-10 text-sm  w-full leading-none text-wrap line-clamp-3"
          dangerouslySetInnerHTML={{__html:txtDescription}}
        >
          
        </div>
      </CardBody>
    </Card>
  );
 
case 2:
      return(
      <Card className="w-full  max-w-[15rem] lg:max-w-[36rem] lg:flex-row ">
        <Link  href={`/blog/`}>
      <CardHeader 
        whileHover={{ scale: 1.05,
  transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }} 
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:w-[20vw] lg:h-[25vh] h-[20vh] cursor-pointer" >
        <ImageMotion 
whileHover={{ scale: 1.05,
        transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[20vh]"/>
      </CardHeader>
      </Link>
      <CardBody>
        <div  className="mb-4 text-gray-600 text-sm font-bold text-center">
        {title}
        </div>

        <div  className="h-10 text-sm  w-full leading-none text-wrap line-clamp-5" 
          dangerouslySetInnerHTML={{__html:txtDescription}}
        >
          
        </div>

              </CardBody>
    </Card>
      )
      break;
    case 3:
     return (
      <Card className="w-full max-w-[15rem] lg:max-w-[44rem] lg:flex-row">
        <Link  href={`/blog/`}>
      <CardHeader 
         
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:w-[28vw] lg:h-[60vh] h-[20vh] cursor-pointer" >
        <ImageMotion 
whileHover={{ scale: 1.05,
  transition: { ease: "easeOut", duration: 1 },}}
        whileTap={{ scale: 0.9 }}
                src={ftImageSrc || ""} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[20vh]"/>
      </CardHeader>
      </Link>
      <CardBody>
        <div  className="mb-4 text-gray-600 text-sm font-bold text-center">
        {title}
        </div>

        <div  className="h-full text-sm  w-full leading-none"
          dangerouslySetInnerHTML={{__html:txtDescription}}
        >
        </div>
              </CardBody>
    </Card>
      ) 
      break;
    default:
      break;
  }
  return }
