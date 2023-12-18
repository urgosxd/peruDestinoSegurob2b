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
  txt1:string
  txt2:string
  slug:string
  time:string
  incluido:string
  excluido:string
}
export default function ProfileCard({imgSrc,txt1,txt2,slug,time,incluido,excluido}:Props) {
  return (
    <Card className="relative grid  w-full  lg:max-w-[28rem] max-w-[20rem] p-0 border rounded-lg ">
      <CardHeader floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[80vh] h-[70vh]" >
        <Image src={imgSrc} fill  /* width={600} height={600} */ alt="profile-picture" className="h-[20vh] lg:h-[30vh] max-w-md"/>
      </CardHeader>
      <CardBody className="text-center !p-3">
        <Typography  as="p"  className="lg:mb-2 lg:text-3xl text-xl font-normal text-gray-800">
          {txt1}
        </Typography>
        <Typography as="p" className="font-bold lg:text-4xl text-2xl text-black" textGradient>
           Desde ${txt2}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center lg:gap-7 lg:pt-2 !p-0">
        <Link href={`/paquetes/${slug}`}>

        <Typography
          color="white"
          className="bg bg-[#D20000] border rounded-lg font-black text-md p-2 "
          
          
        >

          BUY NOW
        </Typography>
        </Link>
        {/* <Button color="#D20000" className="border rounded-lg font-bold text-xs p-2">  */}

        {/* </Button> */}
              </CardFooter>
    </Card>
  );
}
