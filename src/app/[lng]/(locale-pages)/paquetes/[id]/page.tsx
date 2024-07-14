// import { getAllPaquetes, getPaqueteBySlug } from "@/app/lib/wp"
import { getDataNumeros, getPaqueteBySlug, getPaquetes } from "@/app/lib/wp"
import {zip} from "@/app/lib/toolsCode"
import BackBanner from "@/components/bacBanner"
import BackBannerDiv from "@/components/backBannerDiv"
import Cartita from "@/components/cartita"
import MiniCard from "@/components/miniCardCallCenter"

import Questions from "@/components/questions"
import Subtitle from "@/components/subtitle"
import Image from 'next/image'

export const generateStaticParams = async ()=>{
  let posts = await  getPaquetes([])
  // posts = posts.reverse()
  return posts.items.map(ele=>({id:`${ele.id}` }))

}
export default async function Paquete(props:any){
  const post = await getPaqueteBySlug(props.params.id)
  const dataNumeros = await getDataNumeros(['name','numero','desc','link'])
  console.log(dataNumeros)
  let inclu = post.incluidos

  let exclu = post.excluidos

  const dias = post.dias
  const ddias = dias.map((ele:any,idx:number)=>({question:`dia ${idx+1}:`,answer:ele.item}))
  const carrousel = post.galleryPaquete

  

  for (const [a,b] of zip(dataNumeros.items,['/VIDEOLLAMADA.png','/WPP.png','/ASES.png'])) {
    a.img = b
  }


  // const logoCallCenter = [
  //   ['/VIDEOLLAMADA.png',"VIDEOLLAMADA","Contacta con un asesor","Agendar"],
  //   ['/WPP.png',"WHATSAPP","Realiza tus consultas Escribenos!","abrir"],
  //   ['/ASES.png',"HAZTE SOCIO COMERCIAL"," ","Ser socio"]
  // ]

  return (
  <div  className="w-[98vw] flex flex-col items-center">
    <BackBannerDiv imgSrc={post.background.meta.download_url} title={post.title} duracion={post.duracion}/>
      <div className="flex flex-row w-full mb-10">
      <div className="w-1/3 flex flex-col justify-between items-center  mt-16 max-h-96">
        <p
             className="lg:text-[25px] font-semibold uppercase text-black leading-none">
            Precio por Persona
          </p>
          <p className="text-[#D20000] lg:text-[58px] uppercase font-semibold leading-tight">
            USD${post.precio}
          </p>
            <div className="flex flex-col">

          <button className="bg-[#626262] rounded-lg text-[22px] font-normal text-white px-2 font-monse">Arma tu itinerario</button>
          {/* <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button> */}
          {/* <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button> */}
        
          </div>
          <div>
            <Cartita inclu={inclu.map(ele=>ele.item)} exclu={exclu.map(ele=>ele.item)}/>

          </div>
        </div>
          <div className="w-2/3">
          <div className="flex flex-row gap-x-5  h-[60vh] w-full">
            {carrousel.map(ele=>(<div className="w-full relative  my-10">
              <Image src={ele.image.meta.download_url} fill alt="ga" className="border rounded-2xl" />
            </div>))}
          </div>
            <div>
            <Questions  questionAnswer={ddias} paquete/>
          </div>
      </div>
    </div>
      <h2 className="subtitle w-fit lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-[#5B5B5F]  mb-5 lg:mb-10"> 
            Otros Canales de Venta Asitida
    </h2>
        <div className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center px-36 ">
          
      {dataNumeros.items.map(ele=><MiniCard imgSrc={ele.img} txt1={ele.name} txt2={ele.desc} But={ele.numero} />)}

      </div>
    </div>
  )
}
