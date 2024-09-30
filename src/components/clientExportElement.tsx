'use client' 

import { useMobile } from "@/hooks/useMobile";
import {  motion, MotionProps } from "framer-motion";
import {  ElementType, ComponentPropsWithoutRef, ForwardRefExoticComponent } from "react";

// Definimos los props genéricos para nuestro componente MotionElement
type MotionElementProps<T extends ElementType> = {
  as?: T;
} & MotionProps & ComponentPropsWithoutRef<T>;

// Componente genérico que usa forwardRef para pasar refs a Framer Motion
const MotionElement = <T extends ElementType = "div">(
  { as  , ...props }: MotionElementProps<T>,
) =>{
  // Hacemos un casting explícito a string | ForwardRefExoticComponent para asegurar que sea un tipo aceptado por motion

  const isMobile = useMobile()
  const Component = motion(as as string | ForwardRefExoticComponent<any>);
  
  return <Component  {...props} viewport={isMobile ? {margin: "0px 0px 150px 0px"} : {margin:"100px 0px 0px 0px"}} />;
};

export default MotionElement
