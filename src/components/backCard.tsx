'use client'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from 'next/image'

interface Props {
  imgSrc: string
  txt: string
}
export default function BackCard({ imgSrc, txt }: Props) {
  console.log(imgSrc);
  console.log(txt);
  
  
  
  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[20rem] items-end lg:justify-center justify-start  overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none`}
      // style={{backgroundImage: `url(${imgSrc})`}}
        >
          <Image src={imgSrc} fill={true} alt="aeo" className="rounded-none"/>

        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative p-1 ml-3 w-[20rem]">
        <Typography
          as="p"
          color="white"
          className="mb-3 font-medium leading-[1.5] w-fit border-solid  
        border-b-4 border-white  text-left lg:text-3xl text-xl"
        >
          {txt}
        </Typography>

      </CardBody>
    </Card>
  );
}
