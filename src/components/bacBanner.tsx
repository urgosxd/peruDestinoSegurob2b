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
export default function BackBanner({ imgSrc, txt }: Props) {
  console.log(imgSrc);
  
  
  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full items-center justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 w-full rounded-none`}
      // style={{backgroundImage: `url(${imgSrc})`}}
        >
          <Image src={imgSrc} fill={true} alt="aeo" className="rounded-none"  priority={true}/>

        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20" />
      </CardHeader>
      <CardBody className="relative p-0 pr-0  pt-0">
        <Typography
          variant="h4"
          color="white"
          className="mb-3 font-bold` leading-[1.5] w-fit border-solid  
        border-b-2 border-red-700  text-left text-3xl"
        >
          {txt}
        </Typography>

      </CardBody>
    </Card>
  );
}
