'use client'

import Image from 'next/image'
import { useState } from "react"
import { CalendarDaysIcon,CheckIcon,ClockIcon } from '@heroicons/react/24/outline'
import { StarIcon,ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from "@material-tailwind/react";
import CardSalidas from './cardSalidas'
interface Props{
  data:any[]
  year:string
  currentMonth:number
}



const meses:{[key:string]:string} = {
  "01":"enero",
  "02":"febrero",
  "03":"marzo",
  "04":"abril",
  "05":"mayo",
  "06":"junio",
  "07":"julio",
  "08":"agosto",
  "09":"septiembre",
  "10":"octubre",
  "11":"noviembre",
  "12":"diciembre"
}
function setEvents(data:any[],year:string){
 const customState:{[key:string]:{d:string,m:string,imgsrc:string,time:string,title:string,slug:string}[]} = {
  enero:[],
  febrero:[],
  marzo:[],
  abril:[],
  mayo:[],
  junio:[],
  julio:[],
  agosto:[],
  septiembre:[],
  octubre:[],
  noviembre:[],
  diciembre:[]
}   
  const customStateNext:{[key:string]:{d:string,m:string,imgsrc:string,time:string,title:string,slug:string}[]} = {
  enero1:[],
  febrero1:[],
  marzo1:[],
  abril1:[],
  mayo1:[],
  junio1:[],
  julio1:[],
  agosto1:[],
  septiembre1:[],
  octubre1:[],
  noviembre1:[],
  diciembre1:[]
} 
  const AcceptYears = [year,`${parseInt(year)+1}`]
  const NewData = data.map(ele=>{
    // date to Fecha field name ACF issue
    const gaa = ele.acf.fecha.split("/")
    return {
      ...ele,
        date:{
        d:gaa[0],
        m:gaa[1],
        a:gaa[2]
      }
      ,}
  })
  
  const filtByYears = NewData.filter(ele=>AcceptYears.includes(ele.date.a))

  filtByYears.forEach(ele => {
    if (ele.date.a == year){

    customState[meses[ele.date.m]].push({d:ele.date.d,m:ele.date.m,time:ele.acf.time,imgsrc:(ele.acf.imgsrc),title:ele.title.rendered,slug:ele.slug})
    }
    else{
    // customStateNext[meses[ele.date.m]+"1"].push({d:ele.date.d,m:ele.date.m ,time:ele.acf.time,imgsrc:(ele.acf.imgsrc),txt:ele.title.rendered})
    }
  });

  for (let i = 1; i < 13; i++) {
    if(i<10){
    customState[meses[`0${i}`]] = customState[meses[`0${i}`]].sort((a,b)=>(parseInt(a.d) - parseInt(b.d)))
    customStateNext[meses[`0${i}`]+"1"] = customStateNext[meses[`0${i}`]+"1"].sort((a,b)=>(parseInt(a.d) - parseInt(b.d)))
    }else{
    customState[meses[`${i}`]] = customState[meses[`${i}`]].sort((a,b)=>(parseInt(a.d) - parseInt(b.d)))
    customStateNext[meses[`${i}`]+"1"] = customStateNext[meses[`${i}`]+"1"].sort((a,b)=>(parseInt(a.d) - parseInt(b.d)))
    }
    
  }
  return [customState,customStateNext]
}

// const meses:{[key:string]:string} = {
//   "01":"enero",
//   "02":"febrero",
//   "03":"marzo",
//   "04":"abril",
//   "05":"mayo",
//   "06":"junio",
//   "07":"julio",
//   "08":"agosto",
//   "09":"septiembre",
//   "10":"octubre",
//   "11":"noviembre",
//   "12":"diciembre"
// }


export default function CustomEventSalidasByYear({data, year,currentMonth}:Props){

  const datasBrute = setEvents(data,year)  
  const datas = {...datasBrute[0]}
  
  return (
  <div className="w-full px-10">
      {Object.entries(datas).map(ele=>
        ele[1].length > 0  &&  <div className="capitalize font-bold text-black text-lg">        
      {ele[0]}  {year} / {ele[1].length} opciones disponibles
          <div className="flex flex-row gap-x-5 mt-5">
            {ele[1].map(ele=>(<CardSalidas ftImageSrc={ele.imgsrc} title={ele.title} time={ele.time} fecha={`${ele.d} ${meses[ele.d]} `} slug={ele.slug} />))}
          </div>
         </div>
    )}
    </div>
  )
}
