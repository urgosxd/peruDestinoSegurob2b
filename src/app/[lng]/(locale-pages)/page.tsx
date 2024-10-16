import CustomCarousel from '@/components/customCarousel'
import ProfileCard from '@/components/cardPaquetes'
import {getDestinos, getInicioPage,getPaquete} from '@/app/lib/wp'
import Questions from '@/components/questions'
import { RevealBento } from '@/components/gridDestino'
import { createTranslation } from '../../../../i18next'
import SwitcherGlobal from '@/components/SwitcherGlobal'
import { LocaleType } from '../../../../i18next/settings'
import MotionElement from "@/components/clientExportElement"
import AgenciaForm from '@/components/formAgencio'
import { AccordionShad } from '@/components/accordionShad'
import { CarouselPrincipalShad } from '@/components/carouselPrincipalShad'

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

  const paquetes = await getPaquete({fields:"featuredImage,precio,duracion",locale:params.lng,sss:"nocampaing",sender:"2"})
  // console.log(dataGeneral)
  // const gallery = 
  // const gallery = dataGeneral.galleryInicio.map(ele=>({img:ele.image.meta.download_url,titulo:ele.carouselTitulo,duracion:ele.carouselDuracion}))



  const {InicioPage , related} = await getPageData("inicio",params.lng)

const removeAccents = (str) => {
  return str
    .normalize("NFD") // Descompone los caracteres con acentos
    .replace(/([aeiouAEIOU])[\u0300-\u036f]/g, "$1") // Elimina los acentos solo de las vocales
    .normalize("NFC"); // Recomponer los caracteres
};
  const order = ["cusco","lima","arequipa","puno","ica"]

  const destinosF = destinos.items.sort((a, b) => {
  return order.indexOf(a.name.toLowerCase()) - order.indexOf(b.name.toLowerCase());
  });

  const urlsDestinos = destinosF.map(ele=>( ele.name.toLowerCase()))

const keyframes = { x: [], y: [], rotate: [] };
  const keyframes2 = { x: [], y: [], rotate: [] };
  const generateKeyframes = () => {
    for (let t = -0.25; t <= 2 * Math.PI; t += 0.1) {
      keyframes.x.push(100 * Math.sin(2 * t) - 30); // Example: double frequency for x
      keyframes2.x.push(100 * Math.cos(t) + 500); // Example: double frequency for x
      keyframes.y.push(100 * Math.cos(t) + 50); // Single frequency for y
      keyframes2.y.push(100 * Math.sin(2 * t) + 500)
    }
    for (let i = 0; i < keyframes.x.length ; i++) {
      const dx = keyframes.x[i + 1] - keyframes.x[i];
      const dy = keyframes.y[i + 1] - keyframes.y[i];
      const angle = Math.atan2(dy, dx);
      const degrees = (angle * 180) / Math.PI; // Convert to degrees
      keyframes.rotate.push(degrees);
    }
    // Add the last rotation value to make the array lengths match
    keyframes.rotate.push(keyframes.rotate[keyframes.rotate.length - 1]);
    return keyframes;
  };

  generateKeyframes();



  return (
    <div className="flex flex-col items-center w-full">
      
      {/* <SwitcherGlobal currentLocale={params.lng}  dynamicLinks={related} slug={undefined}/> */}
      {/*<CustomCarousel data={t('galleryIni',{returnObjects:true})} keyframes={keyframes} keyframes2={keyframes2} ></CustomCarousel>*/}
      <CarouselPrincipalShad data={t('galleryIni',{returnObjects:true})} keyframes={keyframes} keyframes2={keyframes2}/>
      {/* <SessionProvider> */}
      {/* <SessionValidator>GAAAAAAAA</SessionValidator> */}
      <MotionElement
        as="h2"
        initial={{ opacity: 0 ,translateY: 200}}
        whileInView={{ opacity: 1 ,translateY: 0}}
        transition={{duration:1,type:'spring'}}
        // viewport={{margin:"100px 0px 0px 0px"}}
        className="subtitle w-fit lg:text-[34px] text-[20px] lg:text-3xl
       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10"> 
        {t('paqueteTitulo')}
      </MotionElement>

      <MotionElement
        as="div"
        initial={{ opacity: 0 ,translateY: 200}}
        whileInView={{ opacity: 1 ,translateY: 0}}
        transition={{duration:1,type:'spring'}}
        // viewport={{margin:"100px 0px 0px 0px"}}
        className=" grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1  lg:gap-x-24 lg:pl-0 gap-y-10">
        {paquetes.items.map(ele => (<ProfileCard key={ele.featuredImage.meta.title} imgSrc={ele.featuredImage.meta.download_url} title={ele.title} price={`${ele.precio}`} slug={(ele.meta.slug)} time={ele.duracion} lng={params.lng} />))}
      </MotionElement>
      <MotionElement 
        as="h2"
        initial={{ opacity: 0 ,translateY: 200}}
        whileInView={{ opacity: 1 ,translateY: 0}}
        transition={{duration:1,type:'spring'}}
        className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {t('destinoTitulo')}
      </MotionElement>

    <RevealBento img={{imgSrc:destinosF[0].background.meta.download_url,imgMobileSrc:destinosF[0].backgroundMobile.meta.download_url,label:destinosF[0].name}} imgs={destinosF.slice(1,destinosF.length).map(ele=>({imgSrc:ele.background.meta.download_url,imgMobileSrc:ele.backgroundMobile.meta.download_url,label:ele.name}))} lng={params.lng} urls={urlsDestinos} />

    <MotionElement 
        as="div"
        initial={{ opacity: 0 ,translateY: 200}}
        whileInView={{ opacity: 1 ,translateY: 0}}
        transition={{duration:1,type:'spring'}}
        // viewport={{margin:"100px 0px 0px 0px"}}
        // viewport={{amount:0.3}}
        className="w-full">
      <div className="flex lg:flex-row flex-col w-full lg:w-[90%] mx-auto mt-10">
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <h3 className="my-3 mb-9 lg:my-9 text-[20px] lg:text-[24px] text-[#5B5B5F] lg:text-[#000000] font-semibold text-center lg:no-underline underline underline-offset-8 decoration-red-900 capitalize ">Preguntas Frecuentes</h3>

          {/*<Questions questionAnswer={(t('faqInicio',{returnObjects:true})).map(ele=>({question:ele.question ,answer: ele.answer}))} />*/}
          {<AccordionShad questionAnswer={(t('faqInicio',{returnObjects:true})).map(ele=>({question:ele.question ,answer: ele.answer}))}/>}

        </div>
        <div className="lg:w-1/2 w-full p-10 lg:p-0 ">
          <h2 className="lg:mt-9 mt-6 font-bold lg:text-[24px] text-[#5C5C5C]">
            {t('formularioTitulo')}
          </h2>
          <p className="text-left pr-10 my-3 font-normal text-[18px] text-[#989898]">
            {t('formularioSubtitulo')}
          </p>
          <AgenciaForm lng={params.lng} />
        </div>
      </div>
      </MotionElement>
    </div>
  )
}

export const metadata = {
  title: "Peru Destino Seguro",
  description: "**",
}
