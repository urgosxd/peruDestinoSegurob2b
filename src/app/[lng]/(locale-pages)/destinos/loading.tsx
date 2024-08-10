'use client'
import Loader from "@/components/loading";
import { ScrollToTop } from "@/components/scrollToTop";
import React from "react"
import ClipLoader from 'react-spinners/ClipLoader';

export default function Loading(){
  return (
    <>
    <ScrollToTop/>
    <Loader/>
    </>
    )
}
