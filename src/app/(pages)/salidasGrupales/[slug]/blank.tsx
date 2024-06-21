import { getAllSalidasGrupales, getSalidasBySlug } from "@/app/lib/wp"
import BackBanner from "@/components/bacBanner"
import BackBannerDiv from "@/components/backBannerDiv"
import Cartita from "@/components/cartita"
import MiniCard from "@/components/miniCardCallCenter"

import Questions from "@/components/questions"
import QuestionsSalida from "@/components/questionsSalida"
import Subtitle from "@/components/subtitle"
import Image from 'next/image'
export const generateStaticParams = async ()=>{
  let posts:any[] =await  getAllSalidasGrupales()
  posts = posts.reverse()
  return posts.map(ele=>({slug:ele.slug}))

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
export default async function Salida(props:any){
  const post:any[] = await getSalidasBySlug(props.params.slug)
  let data = post[0]

  const date = data.acf.fecha.split("/")
  const d = date[0]
  const m = date[1]
  const a = date[2]

  const {imgsrc,fecha,time,...resto} = data.acf
  const newDataObj = {
    ...resto
  }

  const partes:{question:string,answer:string}[] =Object.entries(newDataObj).map(ele=>({question:ele[0],answer:ele[1] as string}))
  
  
  
  return (
  <div  className="w-[98vw] flex flex-col items-center">
      <div className="flex flex-col w-full px-16 mt-10">
      <div className="text-lg text-gray-600">
          Salida Grupal 
        </div>       
        <h1 className="text-4xl font-bold">
        {data.title.rendered}
        </h1>
          <div className="text-lg text-gray-600">
            {d} de {meses[m]} del {a}
        </div>
      </div>
        <div className="flex flex-row w-full justify-between px-16 mt-10">
        <div className="w-fit">
          Detalles
        </div>
          <div className="flex flex-row gap-x-2">

      {Object.keys(newDataObj).map(ele=>(<div className="rounded-lg px-2 font-expand py-1 border border-red-800 text-[#D20000] text-sm font-bold uppercase">{ele}</div>))}
        </div>
      </div>
        <div className="flex flex-row w-full">
        <div className="flex flex-col w-2/3">
          <div className="relative lg:h-[70vh] h-[40vh]  m-16">
            <Image src={data.acf.imgsrc} fill alt="imgSalida"/>
          </div>
            <div className="px-10">

            <QuestionsSalida questionAnswer={partes} paquete />  
          </div>
        </div>
          <div className="w-1/3 ">
          <div className="text-gray-800 text-5xl font-extrabold mt-36 w-full text-center">¿Tienes dudas?</div>
          <div className="w-full flex flex-col items-center mt-10">
          <button className="uppercase bg bg-[#D20000] px-4 py-2 text-white font-bold">Envianos tu consulta</button>
          </div>
        </div >
      </div>
    </div>

  )
}
