'use client'
import React, { useState, useRef, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './mulitCarousel.css'
import Image from 'next/image'
import { useMobile } from '@/hooks/useMobile';
// Data
// import data from './data.json';


type Props = {
  data: {title:string,imageUrl:string}[]
  direction:boolean

}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export const MultiCarousel = ({direction,data}:Props) =>{
  
  const isMobile = useMobile()
  const finalIsMobile = direction ? isMobile : !isMobile
  return finalIsMobile &&
  <Carousel
  responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
>

  {data.map((ele,idx)=>(<div className="slider h-[420px] lg:h-[280px] rounded-xl" key={idx}> 
  <Image src={ele.imageUrl} sizes="(max-width: 768px) 50vw, 100vw" alt={ele.title} width={isMobile?390:280} height={isMobile?420:280}  priority  className="lg:h-full h-full rounded-xl"></Image>
        {/* <img src={ele.imageUrl}/> */}
      </div>))}
                 

</Carousel>
  
}
