import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image"
// const imgs = [
//   "/imgs/nature/1.jpg",
//   "/imgs/nature/2.jpg",
//   "/imgs/nature/3.jpg",
//   "/imgs/nature/4.jpg",
//   "/imgs/nature/5.jpg",
//   "/imgs/nature/6.jpg",
//   "/imgs/nature/7.jpg",
// ];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 400,
  damping: 50,
};

type Props = {
  imgs: string[]
  labelImgs: any[],
  label: boolean
}

export const SwipeCarousel = ({ imgs, labelImgs, label }: Props) => {

  const imgsLen = imgs.length > 0 ? imgs : labelImgs
  const [imgIndex, setImgIndex] = useState(0);
  
  const [arr, setArr] = useState(imgsLen.slice(0, 3));

  const [rest, setRest] = useState(imgsLen.slice(3));

  const updateArr = (idx?: number) => {
    const [a, b, c] = arr;

    if (idx === 0) {
      const lastRem = rest[rest.length - 1];
      const beforeArr = [lastRem, a, b];
      const beforeRem = [c, ...rest.slice(0, rest.length - 1)];
      setArr(beforeArr);
      setRest(beforeRem);
    } else {
      const firstRem = rest[0];
      const afterArr = [b, c, firstRem];
      const afterRem = [...rest.slice(1), a];
      setArr(afterArr);
      setRest(afterRem);
    }
  };

  const dragX = useMotionValue(0);

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();

  //     if (x === 0) {
  //       setImgIndex((pv) => {
  //         if (pv === imgsLen.length - 1) {
  //           return 0;
  //         }
  //         return pv + 1;
  //       });
  //     }
  //   }, AUTO_DELAY);

  //   return () => clearInterval(intervalRef);
  // }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    console.log(x)

    if (x <= -DRAG_BUFFER ) {
    console.log('neg')
      // setImgIndex((pv) => pv + 1);
      updateArr(2)
    } else if (x >= DRAG_BUFFER ) {
    console.log('pos')
      // setImgIndex((pv) => pv - 1);
      updateArr(0)
    }
  };

    

  return (
    <div className="relative overflow-hidden rounded-2xl lg:py-4 w-screen ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        // animate={{
        //   translateX: `-${imgIndex * 100}%`,
        // }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing "
      >
        <Images imgIndex={imgIndex} imgs={arr} labelsImgs={labelImgs} label={label} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} labelImgs={labelImgs} label={label} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex, imgs, labelsImgs, label }: { imgIndex: number, imgs: string[], labelsImgs: any[], label: boolean }) => {
  return (
    <>
      {label ? labelsImgs.map((ele, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              // backgroundImage: `url(${ele.src})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="relative  w-screen h-[85vh]  shrink-0 rounded-[35px] bg-neutral-800 object-cover px-7"
          >
                <Image src={ele.src} quality={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover"  fill className="lg:h-full h-full lg:w-full object-cover rounded-[35px] "></Image>
            {/* <img  src={ele.src} className="w-full h-full object-cover rounded-[35px]" loading="lazy" decoding="async"/> */}
            <p className="absolute bottom-7 left-10 text-white text-3xl font-bold underline leading-[40px]">{ele.label}</p>
          </motion.div>
        );
      }) :
        imgs.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                // backgroundImage: `url(${imgSrc})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="relative w-screen h-[75vh] shrink-0 rounded-xl bg-neutral-800 object-cover"
            >
                <Image src={imgSrc} quality={100} sizes="(max-width: 768px) 50vw, 100vw" alt="ims" objectFit="cover"  fill className="lg:h-full h-full lg:w-full object-cover rounded-xl "></Image>
            {/* <img  src={imgSrc} className="w-full h-full object-cover rounded-xl" loading="lazy" decoding="async"/> */}
            </motion.div>
          );
        })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs, labelImgs, label }: { imgIndex: number, setImgIndex: React.Dispatch<React.SetStateAction<number>>, imgs: string[], labelImgs: any[], label: boolean }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {label ? labelImgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
          />
        );
      }) : imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      {/* <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" /> */}
      {/* <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" /> */}
    </>
  );
};
