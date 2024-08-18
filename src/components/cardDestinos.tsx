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
  lng: string
}
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "../../i18next/client"

export default function CardDestinos({ imgSrc, txt1, txt2, slug,lng }: Props) {
  
  const { t } = useTranslation(lng, 'translation')
  const ImageMotion = motion(Image)
  return (
    <Card className="relative grid  w-full lg:w-[425px] w-full p-0 border rounded-lg ">
      <Link href={`/${lng}/tour/${slug}`}>
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

          src={imgSrc} fill sizes="(max-width: 768px) 100vw, 50vw" priority objectFit="cover" /* width={600} height={600} */ alt="profile-picture" className="h-[10vh] lg:h-[30vh] object-cover" />
      </CardHeader>
      </Link>
      <CardBody className="text-center !p-3">
        <Typography  as="div"  className="flex flex-row justify-between lg:mb-2 lg:text-[15px] font-normal text-gray-800">
         <div className=""><MapPinIcon className="w-5 pb-1 inline-block" color="#838383"/> Peru </div>
          <div>{Array(3).fill(0).map((ele)=><StarIcon className="w-5 pb-1 inline-block" color="#D20000"/>)}</div>
        </Typography>
        <Typography  as="p"  className="lg:mb-2 lg:text-[20px] text-md font-bold text-[#424242]">
          {txt1}
        </Typography>
        <Typography as="div" className="flex flex-row justify-between font-bold lg:text-4xl text-xl text-black" textGradient>
         <div className="flex flex-col"> <Typography className="lg:text-[12px] text-[#838383] text-left lg:h-[14px] font-normal capitalize">{t('tours.from')} </Typography>
              <Typography className="lg:text-[15px] text-[#00AFD5] lg:h-[18px] font-semibold">USD ${txt2}</Typography>
          </div>
        </Typography>
        {/* <Typography as="p" className="lg:mb-2 lg:text-2xl text-md font-normal text-gray-800"> */}
        {/*   {txt1} */}
        {/* </Typography> */}
        {/* <Typography as="p" className="font-bold lg:text-xl text-xl text-black" textGradient> */}
        {/*   Desde ${txt2} */}
        {/* </Typography> */}
      </CardBody>
      <CardFooter className="flex justify-center lg:gap-3 lg:pt-2 !p-0">
        <Link href={`/${lng}/tour/${slug}`}>

          <Typography
            color="white"
            className="bg bg-[#D20000] border rounded-lg font-semibold p-2 capitalize "
          >
          {t('tours.booking')}
          </Typography>
        </Link>
      </CardFooter>
    </Card>
  );
}
