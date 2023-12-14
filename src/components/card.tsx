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
    <Card className="w-xs p-0 border rounded-lg">
      <CardHeader floated={false}
        shadow={false}
        color="transparent"
        className="m-0 " >
        <Image src={imgSrc} width={600} height={600} alt="profile-picture" className="h-fit max-w-md"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography  as="p"  className="mb-2 text-3xl font-normal text-gray-800">
          {txt1}
        </Typography>
        <Typography as="p" className="font-bold text-4xl text-black" textGradient>
           Desde ${txt2}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
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
