'use client'

import Image from 'next/image'
import { useState } from "react"
import { CalendarDaysIcon,CheckIcon,ClockIcon } from '@heroicons/react/24/outline'
import { StarIcon,ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import { Card, Typography } from "@material-tailwind/react";
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
 const customState:{[key:string]:{d:string,imgsrc:string,time:string,state:string,txt:string}[]} = {
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
  const customStateNext:{[key:string]:{d:string,imgsrc:string,time:string,state:string,txt:string}[]} = {
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
    const gaa = ele.date.split("/")
    return {
      ...ele
      ,date:{
        d:gaa[0],
        m:gaa[1],
        a:gaa[2]
      }
    }
  })
  
  const filtByYears = NewData.filter(ele=>AcceptYears.includes(ele.date.a))

  filtByYears.forEach(ele => {
    if (ele.date.a == year){

    customState[meses[ele.date.m]].push({d:ele.date.d ,time:ele.time,imgsrc:(ele.imgsrc),state:ele.status,txt:ele.txtunico})
    }
    else{
    customStateNext[meses[ele.date.m]+"1"].push({d:ele.date.d ,time:ele.time,imgsrc:(ele.imgsrc),state:ele.status,txt:ele.txtunico})
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
export default function CustomEventCalendarByYear({data, year,currentMonth}:Props){

  // const acfs = data.map(ele=>ele.acf)
  const datasBrute = setEvents(data,year)  
  const datas = {...datasBrute[0],...datasBrute[1]}

  const logosHeader = [<CalendarDaysIcon className="w-3 inline-block pb-1"/>,<StarIcon className="w-3 inline-block pb-1"/>,<ClockIcon className="w-3 inline-block pb-1"/>,<CheckIcon className="w-3 inline-block pb-1"/>]

  const [currentYear,setCurrentYear] = useState(parseInt(year))

  const TABLE_HEAD = ["Dia","Producto","Duracion","Estado"]
  console.log(Object.entries(datas))
  
  const modules = Object.entries(datas).map(ele=>(
  <div className="flex flex-col items-center w-full">
      <h2 className="capitalize text-3xl text-gray-700 font-bold">{ele[0].charAt(ele[0].length -1) == "1" ? ele[0].substring(0,ele[0].length -1) : ele[0]}</h2>
  <Card className="h-full w-10/12  mt-5">
        <table className="w-full min-w-max table-auto text-center border-collapse border border-slate-400">
        <thead className="bg bg-[#D20000]">
          <tr className="bg bg-[#D20000]">
            {TABLE_HEAD.map((head,idx)=>(
            <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg !bg-[#D20000] border border-slate-300"
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none opacity-70 text-white font-bold uppercase" 
                >
                 {logosHeader[idx]} {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
          <tbody>
          {ele[1].map(({d,time,imgsrc,state,txt})=>(
          <tr>
              <td className="border border-gray-700">
                  <Typography className="text-3xl text-gray-700 font-bold">
                  {d}
                </Typography>
              </td>
              <td className="border border-gray-700">
                <div className="flex flex-col items-center">
                  <Image alt={"aoe"} src={imgsrc} width={100} height={100}/>
                    <p className="pt-3">{txt}</p>
                </div>
                </td>
              <td className="border border-gray-700">
                  <Typography className="text-xl text-gray-700 font-semibold">
                  {time.split("-")[0]} Dias
                </Typography>
              </td>
              <td className="border border-gray-700">
                  <Typography className="text-xl text-gray-900 font-bold capitalize">
                  {state}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </Card>
    </div>
  ))

  const [idx,setIdx] = useState(currentMonth)
  

  const Minus =()=>{
    if(idx == 12){
      

      setCurrentYear(prev=>prev-1)

    }
    else{
    }
      setIdx(prev => prev-1)
  }

  const Add =()=>{
      if(idx == 11){
      setCurrentYear(prev=>prev+1)
    }
    else{
    }
      setIdx(prev => prev+1)

  }
  

return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[#D20000] text-8xl font-extrabold w-full text-center">
        {currentYear}
      </h2>
      <div className="flex flex-row w-10/12 justify-between px-0 mt-10">
      <button onClick={Minus}><ArrowLeftIcon className="w-10" color="gray"/></button>
        <h2> </h2>
      <button onClick={Add}><ArrowRightIcon className="w-10"  color="gray"/> </button>
      </div>
        {modules[idx]}
    </div>
)
}
