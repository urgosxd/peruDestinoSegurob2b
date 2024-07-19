'use client'
import React, { useEffect, useRef } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'

import Link from 'next/link'
interface Props{
  // data:any[]
  active:number
}
 
export default function DefaultPagination({active}:Props) {
  

 
  const getItemProps = (index:number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      // onClick: () => setActive(index),
    } as any);
 
  const router = useRouter()
  const next = () => {
    if (active === 5) return;
    
    router.push(`?page=${active+1}`,{scroll:false});
  };
 
  const prev = () => {
    if (active === 1) return;
 
    router.push(`?page=${active-1}`,{scroll:false});
  };

  
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} color="#D20000" className="h-4 w-4" /> 
        Anterior
      </Button>
            <div className="flex items-center gap-2">
        {/* <IconButton {...getItemProps(1)}>1</IconButton> */}
        {/* <IconButton {...getItemProps(2)}>2</IconButton> */}
        {/* <IconButton {...getItemProps(3)}>3</IconButton> */}
        {/* <IconButton {...getItemProps(4)}>4</IconButton> */}
        {/* <IconButton {...getItemProps(5)}>5</IconButton> */}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Siguiente
        <ArrowRightIcon strokeWidth={2} color="#D20000" className="h-4 w-4" />
      </Button>
    </div>
  );
}
