'use client'
import React, { useState, useRef, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './mulitCarousel.css'
import Image from 'next/image'
import { useMobile } from '@/hooks/useMobile';
import CardDestinos from './cardDestinos';
import ProfileCard from './cardPaquetes';
// Data
// import data from './data.json';


type Props = {
  data: any[]
,lng:string
}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  }
};
export const MultiCarouselRecomends = ({  data,lng }: Props) => {
  return(
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
    {data.map((ele, idx) => (<div className="slider rounded-xl" key={idx}>
       {idx == 0? <ProfileCard key={ele.featuredImage.meta.title} classNamePlus="lg:h-[420px] min-h-[40vh]" imgSrc={ele.featuredImage.meta.download_url} title={ele.title} price={`${ele.precio}`} slug={(ele.meta.slug)} time={ele.duracion} lng={lng} /> : <CardDestinos imgSrc={ele.featuredImage.meta.download_url} txt1={ele.title} txt2={ele.precio} slug={ele.meta.slug} lng={lng}/>}
    </div>))}
  </Carousel>
  )
}
