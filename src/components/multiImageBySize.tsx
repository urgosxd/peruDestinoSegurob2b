'use client'

import { useMobile } from "@/hooks/useMobile"
import BackBanner from "./bacBanner"

interface Props {
  imgDesktop: string
  imgMobile: string
  title: string
  subTitle?: string
}

export const MultiImageBySize = ({imgDesktop,imgMobile,title,subTitle=undefined}:Props)=>{
  const isMobile = useMobile()
  return isMobile ? <BackBanner imgSrc={imgMobile} txt={title} miniText={subTitle} /> : <BackBanner imgSrc={imgDesktop} txt={title}/> 
}
