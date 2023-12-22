import { getAllPaquetes, getPaqueteBySlug } from "@/app/lib/wp"
import BackBanner from "@/components/bacBanner"
import BackBannerDiv from "@/components/backBannerDiv"
import Cartita from "@/components/cartita"

import Questions from "@/components/questions"

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
  
  return (
  <div  className="w-[100vw] flex flex-col items-center">
    <BackBannerDiv imgSrc={data.imgback} txt={data.txtunico} time={data.time}/>
      <div className="flex flex-row w-full">
      <div className="w-1/3 p-10 flex flex-col items-center">

        <p
             className="text-2xl font-bold uppercase">
            Precio por Persona
          </p>
          <p className="text-[#D20000] text-6xl uppercase font-bold">
            US${data.price}
          </p>
            <div className="flex flex-col mt-4">

          <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold">Modificar tu Paquete</button>
          <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button>
          <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button>
        
          </div>
          <div>
            <Cartita inclu={allInclu} exclu={allExclu}/>

          </div>
        </div>
          <div className="w-2/3">
          <div className="h-[60vh]">
          IMAGESSS
          </div>
            <div>
            <Questions  questionAnswer={ddias}/>
          </div>

      </div>

    </div>
    </div>
  )
}
