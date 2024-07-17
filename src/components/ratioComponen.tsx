import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState } from 'react';

type Props = {

  data: { miniTitle: string, miniContent: string, img: string }[]
}

export default function RatioComponent({ data }: Props) {


    
  return (
    <div className="absolute flex flex-col right-[600px]"><ImageGrid data={data}/> </div>

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
    clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%)', // forma doblada a la derecha
  };

  const largeStyle = {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // forma recta
  };

  return (
    <div>
    <div style={{ display: 'flex', gap: '10px', width: '300px', height: '300px', overflow: 'hidden' }}>
      {data.map((i,idx) => (
        <motion.div
          key={idx}
          style={expanded ? largeStyle : smallStyle}
          animate={{ width: expanded ? '100%' : '100px', height: expanded ? '100%' : '100px' }}
          transition={{ duration: 0.5 }}
        >
          <img src={i.img}/>
        </motion.div>
      ))}
    </div>
      <button onClick={handleToggle} className="text-2xl text-green-600">Toggle</button>
    </div>
  );
};

