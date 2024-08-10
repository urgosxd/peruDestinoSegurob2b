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
import { SwipeSimple } from "./swiperSimple";

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
  
  return isMobile ? <div className=""> <SwipeSimple data={data}/> </div> 
    : 
    data.map(ele=>( <div className="lg:w-2/12 w-full flex flex-col items-center"> <img src={ele.img.meta.download_url} className="w-20 h-16" /> <p className="w-full text-center">{ele.label}</p></div>))
    
};

