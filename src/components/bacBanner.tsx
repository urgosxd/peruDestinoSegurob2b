'use client'
import { useMobile } from "@/hooks/useMobile";
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
  miniText?: string
}
export default function BackBanner({ imgSrc, txt,miniText=undefined }: Props) {
  console.log(imgSrc);
  
  // const isMobile = useMobile()
  return (
    <Card
      shadow={false}
      className="relative grid lg:h-[20rem] h-[50vh] w-full items-center justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0  m-0 lg:w-full w-full rounded-none`}
      // style={{backgroundImage: `url(${imgSrc})`}}
        >
          <Image src={imgSrc} fill={true} alt="aeo" className="rounded-none object-cover" sizes="(max-width: 768px) 150vw, 100vw"/>

        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20" />
      </CardHeader>
      <CardBody className="relative p-0 pr-0  pt-0">
        <Typography
          variant="h1"
          color="white"
          className="mb-3 font-bold` leading-[1.5] w-fit border-solid  
        border-b-2 border-red-700  text-left lg:text-[40px] text-xl font-semibold"
        >
          {txt}
        </Typography>

            {miniText && <Typography className="text-white font-semibold text-[30px]">{miniText}</Typography>}
      </CardBody>
    </Card>
  );
}
