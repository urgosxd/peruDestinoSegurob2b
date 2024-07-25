import { getAllPaquetes, getPaquete } from "@/app/lib/wp";
import { LocaleType } from "../../../../../../i18next/settings";

import SwitcherGlobal from "@/components/SwitcherGlobal" 
import BackBannerDiv from "@/components/backBannerDiv";
import { createTranslation } from "../../../../../../i18next";
import Cartita from "@/components/cartita";
import Questions from "@/components/questions";
import { MultiCarousel } from "@/components/multiCarousel";


async function getPageData(slug:string,lng:LocaleType){

   
  const instance =  await getPaquete({slug:slug,locale:lng,fields:'*'})



  const idInstance = instance.items[0].id

  const related = await getPaquete({translation_of:idInstance})

  const relatedLanguages = related.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug}))


  return {
    paquete: instance.items[0],
    related: instance.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug})).concat(relatedLanguages)
  }
  
}
type PageProps =  {
  params: {
    lng: string
    slug: string
  };
};

export default async function Page({params}:PageProps){
  
  
  // const {t} = await createTranslation(params.lng,'inicio')
  const {paquete , related} = await getPageData(params.slug,params.lng)

  console.log(paquete)


  const ddias = paquete.dias.map((ele:any,idx:number)=>({question:`dia ${idx+1}: ${ele.titulo}`,answer:ele.item}))
  return (
    <div  className="w-[98vw] flex flex-col items-center">
      <SwitcherGlobal currentLocale={params.lng}  dynamicLinks={related} slug="packages"/>
      <BackBannerDiv imgSrc={paquete.background.meta.download_url} title={paquete.title} duracion={paquete.duracion} link1={paquete.linkWord} link2={paquete.linkPdf} link3={paquete.linkFlyer}/>
      <div className="flex flex-row w-full mb-10">
      <div className="w-1/3 flex flex-col justify-between items-center  mt-16 max-h-96">
        <p
             className="lg:text-[25px] font-semibold uppercase text-black leading-none">
            Precio por Persona
          </p>
          <p className="text-[#D20000] lg:text-[58px] uppercase font-semibold leading-tight">
            USD${paquete.precio}
          </p>
            <div className="flex flex-col">

          <button className="bg-[#626262] rounded-lg text-[22px] font-normal text-white px-2 font-monse">Arma tu itinerario</button>
          {/* <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button> */}
          {/* <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button> */}
        
          </div>
          <div>
            <Cartita inclu={paquete.incluidos.map(ele=>ele.item)} exclu={paquete.excluidos.map(ele=>ele.item)}/>

          </div>
        </div>
          <div className="w-2/3">
          {/* <div className="flex flex-row gap-x-5  h-[60vh] w-full"> */}
          {/*   {carrousel.map(ele=>(<div className="w-full relative  my-10"> */}
          {/*     <Image src={ele.image.meta.download_url} fill alt="ga" className="border rounded-2xl" /> */}
          {/*   </div>))} */}
          {/* </div> */}
          <div className="w-full flex justify-center container mx-auto py-3 px-10">
              {/* <MultiCarousel data={paquete.galleryPaquete.map(ele=>({imageUrl:ele.image.meta.download_url,title:ele.image.title}))}/> */}
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
          
      {/* {dataNumeros.items.map(ele=><MiniCard imgSrc={ele.img} txt1={ele.name} txt2={ele.desc} But={ele.numero} />)} */}

      </div>
    </div>

  )

}


export async function generateStaticParams(){
  const removeAccents = (str) => {
  return str
    .normalize("NFD") // Descompone los caracteres con acentos
    .replace(/([aeiouAEIOU])[\u0300-\u036f]/g, "$1") // Elimina los acentos solo de las vocales
    .normalize("NFC"); // Recomponer los caracteres
};
  const rawData = await getAllPaquetes()
  const allSlugs = rawData.items
  const params = allSlugs.map(({meta})=>({
    lng:meta.locale,
    slug:removeAccents(meta.slug)
  }))
  return params
}
