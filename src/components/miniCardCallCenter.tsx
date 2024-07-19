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
  imgSrc:string
  txt1:string
  txt2:string
  But:string
}
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function MiniCard({imgSrc,txt1,txt2,But}:Props) {
  return (
    <Card className=" relative mt-6 lg:w-1/3 w-full items-center ">
      <CardBody className=" flex flex-col items-center justify-center">
        <img
          src={imgSrc}
          alt="card-image"
          className=""
        />
 
        <Typography  className="mt-6 h-5 text-xl font-bold text-center text-wrap  tracking-normal w-full leading-none">
          {txt1}
        </Typography>
        <Typography className="text-center w-full h-5 text-sm leading-tight mt-4 mb-4 text-gray-500">
          {txt2}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button className="bg bg-[#D20000] py-1 rounded-lg text-white w-36">{But}         <ChevronRightIcon className="inline-block w-3  stroke-[4px]"/></button>
      </CardFooter>
    </Card>
  );
}
