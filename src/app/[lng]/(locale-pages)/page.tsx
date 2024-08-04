import Image from 'next/image'
import SessionValidator from "@/components/sessionValidator"
import SessionProvider from "@/app/context/NextAuthProvider"
import CustomCarousel from '@/components/customCarousel'
import Subtitle from '@/components/subtitle'
import ProfileCard from '@/components/cardPaquetes'
// import paquetes from "@/app/lib/paquetes"
// import destinos from './lib/destinos'
import BackCard from '@/components/backCard'
import {getDestinos, getInicioPage,getPaquete} from '@/app/lib/wp'
import { GetStaticProps, NextPage } from 'next'
import Questions from '@/components/questions'
import AgenciaForm from '@/components/formAgencio'
import { RevealBento } from '@/components/gridDestino'
import { createTranslation } from '../../../../i18next'
import SwitcherGlobal from '@/components/SwitcherGlobal'
import { LocaleType } from '../../../../i18next/settings'

type Props = {
  params:{
    lng:string
  }
}
async function getPageData(slug:string,lng:LocaleType){

const instance =  await getInicioPage({locale:lng,fields:'*'})

  const idInstance = instance.items[0].id

  const related = await getInicioPage({translation_of:idInstance})

  const relatedLanguages = related.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug}))


  return {
    InicioPage: instance.items[0],
    related: instance.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug})).concat(relatedLanguages)
  }

}

export default async function Home({params }: Props) {
  // let paquetes: any[] = await getAllPaquetes()
  // paquetes = paquetes.reverse()
  // // paquetes = paquetes.map(ele => ele.acf).reverse()

  // let destinos: any[] = await getAllDestinos()
  // destinos = destinos.map(ele => ele.acf).reverse()

  // let imgCarousels: any[] = await getAllImgCarousel()
  // imgCarousels = imgCarousels.map(ele => ele.acf)

  // let pregFrecuents: any[] = await getAllPregFrecuentes()
  // pregFrecuents = pregFrecuents.map(ele => ele.acf).reverse()
  // // console.log(paquetes)
  // console.log(imgCarousels);
  // console.log(pregFrecuents);



  const {t} = await createTranslation(params.lng,'inicio')



  // const dataGeneral = await getInicioPage()

  const destinos = await getDestinos({fields:"*"})

  // const paquetes = await getPaquetes(['featuredImage','precio','duracion'])

  const paquetes = await getPaquete({fields:"featuredImage,precio,duracion",locale:params.lng})
  // console.log(dataGeneral)
  console.log(paquetes)
  console.log(paquetes.items.map(ele=>ele.meta))
  // const gallery = 
  // const gallery = dataGeneral.galleryInicio.map(ele=>({img:ele.image.meta.download_url,titulo:ele.carouselTitulo,duracion:ele.carouselDuracion}))



  const {InicioPage , related} = await getPageData("inicio",params.lng)

const removeAccents = (str) => {
  return str
    .normalize("NFD") // Descompone los caracteres con acentos
    .replace(/([aeiouAEIOU])[\u0300-\u036f]/g, "$1") // Elimina los acentos solo de las vocales
    .normalize("NFC"); // Recomponer los caracteres
};


  const urlsDestinos = destinos.items.map(ele=>( ele.name.toLowerCase()))

  return (
    <div className="flex flex-col items-center">
      
      <SwitcherGlobal currentLocale={params.lng}  dynamicLinks={related} slug={undefined}/>
      <CustomCarousel data={t('galleryIni',{returnObjects:true})} ></CustomCarousel>
      {/* <SessionProvider> */}
      {/* <SessionValidator>GAAAAAAAA</SessionValidator> */}
      {/* </SessionProvider> */}
      <h2 className="subtitle w-fit lg:text-[34px] text-[20px] lg:text-3xl
       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10"> 
        {t('paqueteTitulo')}
    </h2>
      <div className=" grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
        {paquetes.items.map(ele => (<ProfileCard key={ele.featuredImage.meta.title} imgSrc={ele.featuredImage.meta.download_url} title={ele.title} price={`${ele.precio}`} slug={ removeAccents(ele.meta.slug)} time={ele.duracion} lng={params.lng} />))}
      </div>
        <h2 className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {t('destinoTitulo')}
    </h2>

    <RevealBento img={{imgSrc:destinos.items[0].background.meta.download_url,label:destinos.items[0].name}} imgs={destinos.items.slice(1,destinos.items.length).map(ele=>({imgSrc:ele.background.meta.download_url,label:ele.name}))} lng={params.lng} urls={urlsDestinos} />

      {/* <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center destinoCss w-10/12 pl-0 grid-cols-1 gap-y-2 lg:pl-0"> */}
        {/* {destinos.map(ele => (<BackCard key={ele.txt_unique} imgSrc={ele.imgsrc} txt={ele.txt_unique} />))} */}
      {/* </div> */}
        
      <div className="w-full">
        <div className="flex lg:flex-row flex-col w-[90%] mx-auto mt-10">

        <div className="lg:w-1/2 w-full flex flex-col items-center">
          
          <h3 className="my-9 text-[24px] text-[#000000] font-semibold text-center uppercase">Preguntas Frecuentes</h3>
          <Questions questionAnswer={(t('faqInicio',{returnObjects:true})).map(ele=>({question:ele.question ,answer: ele.answer}))} />
        </div>
        <div className="lg:w-1/2 w-full p-10 lg:p-0 ">
          <h3 className="lg:mt-9 mt-6 font-bold lg:text-[24px] text-[#5C5C5C]">
            {t('formularioTitulo')}
          </h3>
          <p className="text-left pr-10 my-3 font-normal text-[18px] text-[#989898]">
            {t('formularioSubtitulo')}
          </p>
              {/* Escriba su correo y Pregunta a continuacion. Nuestro equipo respondera a sus preguntas lo antes posible</p> */}
          <AgenciaForm />
            </div>
      </div>
      </div>
      
    </div>
  )
}

export const metadata = {
  title: "Peru Destino Seguro",
  description: "**",
}
