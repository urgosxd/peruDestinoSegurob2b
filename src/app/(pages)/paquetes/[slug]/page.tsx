import { getAllPaquetes, getPaqueteBySlug } from "@/app/lib/wp"
import BackBanner from "@/components/bacBanner"
import BackBannerDiv from "@/components/backBannerDiv"
import Cartita from "@/components/cartita"
import MiniCard from "@/components/miniCardCallCenter"

import Questions from "@/components/questions"
import Subtitle from "@/components/subtitle"
import Image from 'next/image'

export const generateStaticParams = async ()=>{
  let posts:any[] =await  getAllPaquetes()
  posts = posts.reverse()
  return posts.map(ele=>({slug:ele.slug}))

}
export default async function Paquete(props:any){
  const post:any[] = await getPaqueteBySlug(props.params.slug)
  let data = post[0]
  data = data.acf
  let inclu:string = data.incluido

  const allInclu = inclu.split(",")
  let exclu:string = data.excluido

  const allExclu = exclu.split(",")
  const dias = data.dias.split(",")
  const ddias = dias.map((ele:string,idx:number)=>({question:`dia ${idx+1}:`,answer:ele}))
  
  const carrousel:string = data.carrouselcomas
  const allCarrousel = carrousel.split(",")

  const logoCallCenter = [
    ['/VIDEOLLAM.png',"VIDEOLLAMADA","Contacta con un asesor","Agendar"],
    ['/WPP.png',"WHATSAPP","Realiza tus consultas Escribenos!","abrir"],
    ['/ASES.png',"HAZTE SOCIO COMERCIAL"," ","Ser socio"]
  ]
  return (
  <div  className="w-[98vw] flex flex-col items-center">
    <BackBannerDiv imgSrc={data.imgFondo} txt={data.txtunico} time={data.tiempo}/>
      <div className="flex flex-row w-full mb-10">
      <div className="w-1/3 p-10 flex flex-col items-center mt-16">

        <p
             className="text-2xl font-bold uppercase">
            Precio por Persona
          </p>
          <p className="text-[#D20000] text-6xl uppercase font-bold">
            US${data.precio}
          </p>
            <div className="flex flex-col mt-4">

          <button className="bg-[#D20000] rounded-none mb-3 text-md font-normal text-white px-10">Arma tu itinerario</button>
          {/* <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button> */}
          {/* <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button> */}
        
          </div>
          <div>
            <Cartita inclu={allInclu} exclu={allExclu}/>

          </div>
        </div>
          <div className="w-2/3">
          <div className="flex flex-row gap-x-5  h-[60vh] w-full">
            {allCarrousel.map(ele=>(<div className="w-full relative  my-10">
              <Image src={ele.trim()} fill alt="ga" className="border rounded-2xl" />
            </div>))}
          </div>
            <div>
            <Questions  questionAnswer={ddias} paquete/>
          </div>

      </div>

    </div>
        <Subtitle>
          Otros Canales de Venta Asistida 
      </Subtitle>
        <div className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center px-36 ">
          
      {logoCallCenter.map(ele=><MiniCard imgSrc={ele[0]} txt1={ele[1]} txt2={ele[2]} But={ele[3]} />)}

      </div>
    </div>
  )
}
