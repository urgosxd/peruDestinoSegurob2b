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
interface Props {
  imgSrc: string
  txt1: string
  txt2: string
  slug: string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function CardDestinos({ imgSrc, txt1, txt2, slug }: Props) {
  const ImageMotion = motion(Image)
  return (
    <Card className="relative grid  w-full  lg:max-w-[28rem] max-w-[15rem] p-0 border rounded-lg ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 w-full lg:h-[50vh] h-[30vh] cursor-pointer" >
        <ImageMotion
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeOut", duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}

          src={imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" priority  /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[30vh]" />
      </CardHeader>
      <CardBody className="text-center !p-3">
        <Typography as="p" className="lg:mb-2 lg:text-2xl text-md font-normal text-gray-800">
          {txt1}
        </Typography>
        <Typography as="p" className="font-bold lg:text-xl text-xl text-black" textGradient>
          Desde ${txt2}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 !p-0">
        <Link href={`/paquetes/${slug}`}>

          <Typography
            color="white"
            className="bg bg-[#D20000] border rounded-lg lg:font-black font-bold p-2 "
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
