'use client'
import React from "react";
import Image from "next/image"
import { MotionProps, motion } from "framer-motion";
import { useTranslation } from "../../i18next/client"
import { LocaleType } from "../../i18next/settings";
import Link from "next/link";
import { useMobile } from "@/hooks/useMobile";
import { SwipeCarousel } from "./swiperCarousel";
import { SwipeContact } from "./swiperContact";

interface Props {
  data: any[]
  lng: string
}

export const ValoresWrapper = ({data,lng}:Props) => {
  
  const { t } = useTranslation(lng, 'translation')

  function putNameDestiny (dest:string){
    const baseURL = `/${lng}/${t('destinations')}/?city=${dest}`
    return baseURL
  }

  const isMobile = useMobile()
  
  return isMobile ? <div className=""> {/* <SwipeContact imgs={getImages(globalItems)} labelImgs={getLabelsImgs(globalItems)} label />  */}</div> 
    : 
    data.map(ele=>( <div className="lg:w-2/12 w-full flex flex-col items-center"><img src={ele.img.meta.download_url} className="w-20 h-16" /> <p className="w-full text-center">{ele.label}</p></div>))
    
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

const HeaderBlock = ({ img,url }: { img: FinalFrame,url:string }) => (
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

const SocialsBlock = ({ imgs,urls }: { imgs: FinalFrame[],urls:string[] }) => (
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

