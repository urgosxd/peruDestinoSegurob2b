'use client'

import { useState } from "react";
import {motion} from "framer-motion"
import { useInterval } from "@/hooks/useInterval";



function Card({
  content,
  idx,
  onClick,
  onMouseEnter,
  onMouseLeave
}: {
  content: string;
  idx: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  let style = {};

  if (idx === 0)
    style = {
      opacity: 0.4,
      transform: "translateX(-40%) scale(0.8)",
      zIndex: 0
    };
  if (idx === 1) style = { zIndex: 1 };
  if (idx === 2)
    style = {
      opacity: 0.4,
      transform: "translateX(40%) scale(0.8)",
      zIndex: 0
    };

  return (
    <div
      className="cardHH"
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    <div>{content}</div>
    </div>
  );
}

export const Carrou = ({list})=>{

  const [arr, setArr] = useState(list.slice(0, 3));

  const [rest, setRest] = useState(list.slice(3));

  const [isScrolling, setIsScrolling] = useState(true);

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

  useInterval(
    () => {
      updateArr();
    },
    isScrolling ? 3000 : null
  );
  return (
    <div>
      {arr.map((item, idx) => (
        <Card
          key={item}
          idx={idx}
          content={item}
          onClick={() => updateArr(idx)}
          onMouseEnter={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(true)}
        />
      ))}
    </div>
  );
  }
