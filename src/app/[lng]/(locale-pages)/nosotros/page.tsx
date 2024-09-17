import BackBanner from "@/components/bacBanner"
import { getNosotrosPage } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"
import { createTranslation } from '../../../../../i18next';
import { LocaleType } from "../../../../../i18next/settings";
import SwitcherGlobal from "@/components/SwitcherGlobal";
import { TweakCarousel } from "@/components/tweakcarousel";
import { ValoresWrapper } from "@/components/valoresWrapper";
import ImageGrid from "@/components/imageGrid";

import MotionElement from "@/components/clientExportElement"

type Props = {
  params: {
    lng: string
  }
}

async function getPageData(slug: string, lng: LocaleType) {

  const instance = await getNosotrosPage({ locale: lng, fields: '*' })

  const idInstance = instance.items[0].id

  const related = await getNosotrosPage({ translation_of: idInstance })

  const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


  return {
    NosotrosPage: instance.items[0],
    related: instance.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug })).concat(relatedLanguages)
  }

}

export default async function Nosotros({ params }: Props) {
  // let nosotros = await getNosotrosPage()
  // const ga = JSON.parse(nosotros)
  // console.log(nosotros.items);
  // console.log(params.lng)
  const { t } = await createTranslation(params.lng, 'nosotros')

  // let uniNosotros = nosotros.map(ele => ele.acf).reverse()[0]
  // const exp = [{ rojo: uniNosotros.agenciaviajesatendidas, txt: "Agencias de viaje Atendidas", }, { rojo: uniNosotros.destinos, txt: "destinos", }, { rojo: uniNosotros.aniosxp, txt: "15 AÑOS DE EXPERIENCIA" }]

  // const logos = ["/respaldo2.png", "/respaldo.png", "/ytu.png", "/safe.png", "/TripAdvisor.png"]
  // const valores = [
  //   { img: "/RESPONSABILIDAD.png", txt: "Responsabilidad" },
  //   { img: "/LEALTAD.png", txt: "Lealtad" }, { img: "/iconitoVal.png", txt: "Honestidad" },
  //   { img: "/PUNTUALIDAD.png", txt: "Puntualidad" },
  //   { img: "/iconitoVal.png", txt: "Disciplina" },
  //   {img:"/candado.png",txt:"Confidencialidad"}
  // ]
  const Datalegal = [
    ["RAZÓN SOCIAL", t('razonSocial')],
    ["NÚMERO DE RUC", t('numeroRuc')],
    ["NOMBRE COMERCIAL", t('nombreComercial')],
    ["CERTIFICADO DE AUTORIZACIÓN", t('certificadoAutorizacion')],
  ]

  console.log(Datalegal)
  console.log("aaaa")
  console.log(t('puvImage.meta.download_url'))
  const { NosotrosPage, related } = await getPageData("nosotros", params.lng)

  return (

    <div className="w-[98vw] flex flex-col items-center">
      {/* <SwitcherGlobal currentLocale={params.lng} dynamicLinks={related} slug={undefined} /> */}
      <BackBanner imgSrc={t('background.meta.download_url')} txt={t('titulo')} />
      <MotionElement as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}

        className="flex  lg:flex-row flex-col mt-5 lg:mt-10 w-full px-10 items-center lg:items-start"  >
        <div className="w-full lg:w-3/5 lg:px-10 px-0 flex flex-col items-center lg:items-start">

          <h2
            className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl mb-2 p-3 text-center font-semibold text-gray-800 lg:mb-10"
          >
            {t('subTitulo')}
          </h2>
          <div
            className="wasgi"
            dangerouslySetInnerHTML={{ __html: t('parrafo') }}
          >

          </div>
        </div>
        <div className="lg:w-2/5 w-full h-full mx-10">

          <div className=" lg:h-[60vh] h-[250px] relative mt-10 lg:mt-0">
            <Image alt={"ga"} fill={true} objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={t('imageParrafo.meta.download_url')} className="object-cover border rounded-3xl" />
          </div>
        </div>

      </MotionElement>
      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="flex flex-row justify-center w-full lg:mt-10 mt-14"

      >
        <div className="lg:w-[30%] w-[80%] flex flex-col">
          <div className="relative lg:h-[250px] h-[200px]">
            <p className="absolute h-full lg:text-[25px] text-[20px] text-gray-800">{t('puv')}</p>
            <Image src={"/comillas.png"} width={200} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" objectFit="cover" alt="profile-picture" className="mx-auto object-cover" />
          </div>
          <div className="text-center lg:text-[30px] text-[25px] text-[#D20000]">{t('puvName')}</div>
          <Image src={t('puvImage.meta.download_url')} width={150} height={150} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  alt="profile-picture" className="mx-auto" />
        </div>

      </MotionElement>

      <section className="specialSection relative w-full flex flex-col justify-center bg-gradient-to-r from-red-300 via-red-500 to-red-900 min-h-[400px] mt-14">
        <MotionElement 
          as="div"
          initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}

          className="w-full flex lg:flex-row flex-col justify-around lg:gap-x-10 lg:gap-y-0 gap-y-10">
          <div className="lg:w-1/2 w-full text-white lg:text-[40px] text-[30px] font-bold"> {t('middleMensajeTitle')}</div>
          <div className="lg:w-1/2 w-full text-white lg;text-[25px] text-[20px] font-light"> {t('middleMensaje')}</div>
        </MotionElement>
        <MotionElement 
          as="div"
           initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}

          className="flex lg:flex-row  flex-col justify-around w-full mt-20 lg:gap-y-0 gap-y-10">
          <div className="lg:w-[45%] w-full bg bg-gray-400 rounded-[35px] h-[400px] flex flex-col px-10 justify-between">
            <Image src={"/mision.png"} width={100} height={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" objectFit="cover" alt="profile-picture" className="mx-auto object-cover mt-[-50px]" />
            <div> <div className="text-center font-semibold lg:text-3xl text-2xl">Mision</div> <div className="lg:text-[22px] text-[18px] font-light text-gray-800">{t('mision')}</div> </div>
          <div className="h-[25px]"></div>
          </div>
          <div className="lg:w-[45%] w-full bg bg-gray-400 rounded-[35px] h-[400px] flex flex-col px-10 justify-between">
            <Image src={"/vision.png"} width={100} height={100} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" objectFit="cover" alt="profile-picture" className="mx-auto object-cover mt-[-50px]" />
            <div> <div className="text-center font-semibold lg:text-3xl text-2xl">Vision</div> <div className="lg:text-[22px] text-[18px] font-light text-gray-800">{t('vision')}</div> </div>
          <div className="h-[25px]"></div>
          </div>

        </MotionElement>
        <div className="custom-shape-divider-top-1726537091">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}

        className=" mt-14 lg:mt-28 grid lg:grid-cols-2 gri-cols-1 divide-y-2 divide-neutral-800 border py-5 rounded-3xl">
        {Datalegal.map((ele, idx) => (<div className={`pr-24 pl-24 py-3 ${idx == 1 ? "dataLegal" : " "}`}><div className="font-semibold lg:text-[18px] text-[#5B5B5F] text-center lg:text-start ">{ele[0]}</div><div className="text-[#B8B8B8] lg:text-[18px] font-normal text-center lg:text-start">{ele[1]}</div></div>))}
      </MotionElement>

      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}

        className="flex lg:flex-row flex-col justify-center items-center w-full lg:w-fit lg:gap-x-16 gap-y-10 lg:mx-16 mx-0 lg:mt-28 mt-12 mb-10">
        {
          t('estadisticasNosotros', { returnObjects: true }).map(ele => (
            <div className="w-1/2 lg:w-1/3 flex  flex-col items-center ">
              <p
                className="text-[64px] font-bold text-[#D20000] leading-[92px]"
              >
                {ele.redLet}
              </p>
              <div className=" w-full">
                <p
                  className="uppercase font-semibold text-[20px] lg:text-[32px] text-[#5B5B5F] text-center leading-[25px] w-full leading-[30px]"
                >
                  {ele.grayLet}
                </p>
              </div>
            </div>))
        }


      </MotionElement>
      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10">
        {t('valoresSubtitle')}
      </MotionElement>
      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="lg:mb-10">
        <div className="flex lg:flex-row lg:gap-x-16 flex-col gap-x-0 gap-y-10 lg:gap-y-0">
          {/* {t('valoresNosotros',{returnObjects:true}).map(ele => (<div className="lg:w-2/12 w-full flex flex-col items-center"><img src={ele.img.meta.download_url} className="w-20 h-16" /> <p className="w-full text-center">{ele.label}</p></div>))} */}
          {<ValoresWrapper data={t('valoresNosotros', { returnObjects: true })} lng={params.lng} />}
        </div>
      </MotionElement>
      <MotionElement as="h2"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl lg:my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10">
        {t('partnersSubtitle')}
      </MotionElement>
      <MotionElement as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center w-[90%] justify-center">
        <TweakCarousel imgs={t('partnersNosotros', { returnObjects: true }).map((ele) => (ele.image.meta.download_url))} />
        {/* {logos.map(ele => (<img src={ele} className="lg:w-3/12 w-1/2 lg:h-16 h-10" />))} */}
      </MotionElement>
      <MotionElement as="h2"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="subtitle w-fit text-[20px] lg:text-[34px] text-3xl lg:my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10">
        {t('certificadosSubtitle')}
      </MotionElement>
      <MotionElement
        as="div"
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <ImageGrid srcImages={t('certificadosNosotros', { returnObjects: true }).map(ele => (ele.image.meta.download_url))} label={false} />
      </MotionElement>
    </div>
  )
}

export const metadata = {
  title: "Nosotros Peru Destino Seguro",
  description: "**",
}
