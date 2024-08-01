'use client'
import React, { useState, useRef, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
// Data
// import data from './data.json';


type Props = {
  data: {title:string,imageUrl:string}[]

}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// const CustomDot = ({ data, ...rest }) => {
//   const {
//     onMove,
//     index,
//     active,
//     carouselState: { currentSlide, deviceType }
//   } = rest;

//   const carouselItems = data.map((ele)=>(<div className="h-[300px] w-[250px] rounded-lg"> 
//   <Image src={ele.imageUrl} sizes="(max-width: 768px) 50vw, 100vw" alt={ele.title} objectFit="cover" priority fill className="lg:h-full h-full lg:w-full object-cover rounded-lg"></Image>
//       </div>))
//   // onMove means if dragging or swiping in progress.
//   // active is provided by this lib for checking if the item is active or not.
//   return (
//     <button
//       className={active ? "active" : "inactive"}
//       onClick={() => onClick()}
//     >
//       {React.Children.toArray(carouselItems)[index]}
//     </button>
//   );
// };

export const MultiCarousel = ({data}:Props) =>{
  
  return (
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  // customTransition="all ease 1"
  transitionDuration={500}
  containerClass="carousel-container w-3/4"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={"desktop"}
  dotListClass="custom-dot-list-style"
  itemClass="ml-3"
>

  {data.map((ele)=>(<div className="h-[300px] w-[250px] rounded-lg"> 
  <Image src={ele.imageUrl} sizes="(max-width: 768px) 50vw, 100vw" alt={ele.title} objectFit="cover" priority fill className="lg:h-full h-full lg:w-full object-cover rounded-lg"></Image>
      </div>))}
                 

</Carousel>
  )
}
