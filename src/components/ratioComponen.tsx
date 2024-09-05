import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState } from 'react';
import Image from 'next/image'
import { useMobile } from "@/hooks/useMobile";
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

  const MotionImage = motion(Image)
  const mobile = useMobile()
  function getWidth(idx:number){
    if (idx!==1){

    return mobile ? '23%':'20%'
    }else{
    return mobile ? '27%': '25%'
    }

  }
  function getHeight(idx:number){
    if (idx!==1){
    return mobile ? '150px':'300px'
    }else{
    return mobile ? '190px': '430px'
    }
  }
  return (
    <div className="w-full h-full flex flex-row justify-center pare gap-x-10 lg:gap-x-14">
      <AnimatePresence>
        {!expanded && 
      <MotionImage initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{ duration: 0.75 }}  src="/NUBE.png" alt="ga" width={mobile ? 75 : 200} height={mobile ? 35 : 100} className="absolute top-[30%] lg:top-[60%] left-[22%] lg:left-[50%] z-50"/>
        }
      </AnimatePresence>
      <AnimatePresence>
        {!expanded && 
      <MotionImage initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{ duration: 0.75 }}  src="/NUBE.png" alt="ga" width={mobile ? 150 : 350} height={mobile ? 75 : 200} className="absolute top-[15%] right-[10%] z-50"/>
        }
      </AnimatePresence>

      {/* <MotionImage animate={{opacity: expanded ? 0: 100}} exit={{opacity:0}} transition={{ duration: 0.5 }}  src="/NUBE.png" alt="ga" width={200} height={100} className="absolute top-[60%] left-[50%] z-50"/> */}
      {data.map((i,idx) => (
          <motion.div
          key={idx}
          onClick={handleToggle}
          className="cursor-pointer my-auto bg-white relative z-20 containerImgRounded"
          // style={{backgroundColor: "white",margin:"auto 0",position:"relative",zIndex:20,transform: 'skewX(-20deg)',borderRadius: '0 50px 0 50px'}}
          animate={{ width: expanded ? '100%' : getWidth(idx), height: expanded ? '100%' : getHeight(idx),marginLeft:expanded ? idx > 0 ? -70 : 0: idx > 0 ? -30 : 0 }}
          transition={{ duration: 0.5 }}
        >
        <motion.div
          style={{position:'relative',aspectRatio: 16/9,backgroundColor: "black",position:'relative',overflow:'hidden',borderRadius:mobile ?'0 20px 0 20px' :  '0 50px 0 50px',width:mobile ?'97.5%':'95%',height:mobile ?'98%' : '97%',margin: mobile ?"2px auto": "5px auto"}}
          // animate={{ width: expanded ? '100%' : '25%', height: expanded ? '100%' : '350px',marginLeft:expanded ? idx > 0 ? -70 : 0: idx > 0 ? -30 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={i.img} sizes="(max-width: 768px) 50vw, 50vw" alt={`ims${idx}`}  quality={100} fill className="imgRounded"/>
            {/* <img src={i.img} className="imgRounded"/> */}
        </motion.div>
        </motion.div>
              ))}
      
    </div>
  );
};

