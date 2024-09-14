'use client'
import React from "react";
import Image from "next/image"
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "../../i18next/client"
import { LocaleType } from "../../i18next/settings";
import Link from "next/link";
import { useMobile } from "@/hooks/useMobile";
import { SwipeCarousel } from "./swiperCarousel";
import MotionElement from "@/components/clientExportElement"

type FinalFrame = {
  imgSrc: string
  label: string
  imgMobileSrc: string
}


export const RevealBento = ({ img, imgs, urls, lng }: { img: FinalFrame, imgs: FinalFrame[], urls: string[], lng: LocaleType }) => {

  const { t } = useTranslation(lng, 'translation')
  function putNameDestiny(dest: string) {
    const baseURL = `/${lng}/${t('destinations')}/?city=${dest}`
    return baseURL
  }

  const isMobile = useMobile()

  const getImages = (obs) => obs.map(ele => ({ src: ele.imgMobileSrc }))
  const getLabelsImgs = (obs) => obs.map(ele => ({ src: ele.imgMobileSrc, label: ele.label }))

  const globalItems = [img].concat(imgs)


  return isMobile ?
    <MotionElement 
      as="div"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring' }}
    className=""> <SwipeCarousel imgs={getImages(globalItems)} labelImgs={getLabelsImgs(globalItems)} label /> </MotionElement> :
    <MotionElement
      as="div"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring' }}
      className=" w-full bg-zinc-900 px-4 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-[90%] grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock img={img} url={putNameDestiny(urls[0])} />
        <SocialsBlock imgs={imgs} urls={urls.slice(1, urls.length).map(ele => putNameDestiny(ele))} />
      </motion.div>
    </MotionElement>

};


type BlockProps = {
  className?: string;
  children: React.JSX.Element[] | React.JSX.Element
} & MotionProps;
const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = ({ img, url }: { img: FinalFrame, url: string }) => (
  <Block
    whileHover={{
      rotate: "2.5deg",
      // scale: 1.05,
    }}

    className="col-span-12 row-span-2 md:col-span-4">
    <Link href={url} className="grid relative lg:h-[705px] rounded-l-lg z-10">
      <Image src={img.imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" objectFit="cover" priority alt="profile-picture" className=" object-cover rounded-l-2xl" />
      <div className="absolute bottom-5 left-5 text-white border-solid  
        border-b-4 border-white text-3xl">{img.label}</div>
    </Link>
  </Block>
);

const objBorders = ['', 'rounded-tr-2xl', '', 'rounded-br-2xl']

const SocialsBlock = ({ imgs, urls }: { imgs: FinalFrame[], urls: string[] }) => (
  <>
    {imgs.map((ele, idx) => (
      <Block
        whileHover={{
          rotate: "2.5deg",
          // scale: 1.05,
        }}
        className="col-span-6 md:col-span-4"
      >
        <Link href={urls[idx]} className="grid relative h-[345px]">
          <Image src={ele.imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" objectFit="cover" priority alt="profile-picture" className={`object-cover ${objBorders[idx]}`} />
          <div className={`absolute bottom-5 left-5 text-white border-solid  
        border-b-4 border-white text-3xl `}>{ele.label}</div>
        </Link>
      </Block>
    ))}

  </>
);

