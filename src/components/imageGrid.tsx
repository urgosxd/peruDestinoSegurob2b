import React, { useState } from 'react';
// import './Counter.css';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ImagePopUp } from './imagePopUp';
import { SwipeCarousel } from "./swiperCarousel";
import { GalleryCarrousel } from "./galleryCarousel";
import { useMobile } from '@/hooks/useMobile';

export default function ImageGrid({
  srcImages=[],
  srcLabelImages=[],
  label
}: {
  srcImages?: string[],
  srcLabelImages?: any[],
  label:boolean,
}) {
  
  const isMobile = useMobile()
  console.log(isMobile)
  return isMobile ? <SwipeCarousel imgs={srcImages} labelImgs={srcLabelImages} label={label}  />  : <GalleryCarrousel srcImages={srcImages} srcLabelImages={srcLabelImages} label={label}/>
}
