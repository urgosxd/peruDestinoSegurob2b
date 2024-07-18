import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState } from 'react';
import Image from 'next/image'
type Props = {

  data: { miniTitle: string, miniContent: string, img: string }[]
}

export default function RatioComponent({ data }: Props) {


    
  return (
    <div className="w-full h-full"><ImageGrid data={data}/> </div>

  )

}



const ImageGrid = ({data}:Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const smallStyle = {
    width: '100px',
    height: '100px',
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', // forma doblada a la derecha
  };

  const largeStyle = {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // forma recta
  };

  return (
    <div className="w-full h-full flex flex-row justify-center pare">
      {data.map((i,idx) => (
          <motion.div
          key={idx}
          onClick={handleToggle}
          style={{backgroundColor: "black",margin:"auto 0",marginLeft: idx > 0 ? -30 : 0,position:"relative",clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}}
          animate={{ width: expanded ? '100%' : '25%', height: expanded ? '100%' : '350px',marginLeft:expanded ? idx > 0 ? -70 : 0: idx > 0 ? -30 : 0 }}
          transition={{ duration: 0.5 }}
        >

          <Image src={i.img} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover" priority fill className="object-cover h-[350px] w-[100px] "></Image>
        </motion.div>
              ))}
      
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="flt_tag">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
            </filter>
        </defs>
    </svg>
    </div>
  );
};

