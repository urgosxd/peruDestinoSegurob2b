'use client'
import React from "react";
import Image from "next/image"
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FinalFrame ={
  imgSrc:string
  label:string
}


export const RevealBento = ({img,imgs}:{img:FinalFrame,imgs:FinalFrame[]}) => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-[90%] grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock img={img} />
        <SocialsBlock imgs={imgs} />
      </motion.div>
    </div>
  );
};


type BlockProps = {
  className?: string;
  children:React.JSX.Element[] | React.JSX.Element
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

const HeaderBlock = ({img}:{img:FinalFrame}) => (
  <Block className="col-span-12 row-span-2 md:col-span-4">
        <div className="grid relative h-full rounded-l-lg z-10">
        <Image src={img.imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" objectFit="cover" priority alt="profile-picture" className=" object-cover rounded-l-2xl"/>
         <div className="absolute bottom-5 left-5 text-white border-solid  
        border-b-4 border-white text-3xl">{img.label}</div>
        </div>
      </Block>
);

const objBorders = ['','rounded-tr-2xl','','rounded-br-2xl']

const SocialsBlock = ({imgs}:{imgs:FinalFrame[]}) => (
  <>
    {imgs.map((ele,idx)=>(
    <Block
      whileHover={{
        rotate: "2.5deg",
        // scale: 1.1,
      }}
      className="col-span-6 md:col-span-4"
    >
        <div className="grid relative h-[320px]">
        <Image src={ele.imgSrc} fill sizes="(max-width: 768px) 25vw, 50vw" objectFit="cover" priority alt="profile-picture" className={`object-cover ${objBorders[idx]}`}/>
          <div className={`absolute bottom-5 left-5 text-white border-solid  
        border-b-4 border-white text-3xl `}>{ele.label}</div>
        </div>
    </Block>
    ))}
    
      </>
);

