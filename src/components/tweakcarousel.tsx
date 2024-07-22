import React, { useEffect, useState } from "react";
import './tweakcarousel.css'

// const imgs = [
//   "/imgs/nature/1.jpg",
//   "/imgs/nature/2.jpg",
//   "/imgs/nature/3.jpg",
//   "/imgs/nature/4.jpg",
//   "/imgs/nature/5.jpg",
//   "/imgs/nature/6.jpg",
//   "/imgs/nature/7.jpg",
// ];

type Props = {
  imgs: string[]
}

export const TweakCarousel = ({ imgs}: Props) => {
  

  const {direction,pad,diff,translate,state,spill,reverse,speed,items,scale,inset,outset} = {direction: 'horizontal' ,pad: false, diff: false,translate: 'items',state: 'running',spill: false,reverse: false,speed: 30,items:imgs.length ,scale:  1,inset:0 ,outset: 0 }

  const renderStamp = Date.now()
  return (
    <div
      className="containerTweak"
      data-direction={direction}
      data-pad={pad}
      data-pad-diff={diff}
      data-translate={translate}
      data-play-state={state}
      data-spill={spill}
      data-reverse={reverse}
      style={{ '--speed': speed, '--count': items, '--scale': scale, '--inset': inset, '--outset': outset }}
    >
      <ul>
        {pad && translate === 'track'
          ? new Array(items).fill(0).map((item, index) => {
              return (
                <li
                  aria-hidden="true"
                  className="pad pad--negative"
                  key={`pad-negative-${renderStamp}--${index}`}
                >
                  {index}
                </li>
              )
            })
          : null}
        {imgs.map((item, index) => {
          return (
            <li key={`index-${renderStamp}--${index}`} style={{ '--index': index }}>
              <img src={item} className="object-cover h-36"/>
              {/* {index} */}
            </li>
          )
        })}
        {pad && translate === 'track'
          ? new Array(items).fill(0).map((item, index) => {
              return (
                <li
                  aria-hidden="true"
                  className="pad pad--positive"
                  key={`pad-positive-${renderStamp}--${index}`}
                >
                  {index}
                </li>
              )
            })
          : null}
      </ul>
    </div>
  )
}
