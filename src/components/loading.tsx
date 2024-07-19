'use client'
import React, { CSSProperties } from "react"
import ClipLoader from 'react-spinners/ClipLoader';

export default function Loader(){
  const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  // borderColor: "red",
};
  return (<div className="mt-28">
      <ClipLoader  cssOverride={override} loading={true} color="#D20000" size={100}/>
    </div>)
}
