import BackBanner from "@/components/bacBanner"
import { getNosotrosPage } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"
import { createTranslation } from '../../../../../i18next';
import { LocaleType } from "../../../../../i18next/settings";
import SwitcherGlobal from "@/components/SwitcherGlobal";


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
  const { NosotrosPage, related } = await getPageData("nosotros", params.lng)

  return (

    <div className="w-[98vw] flex flex-col items-center">
      <SwitcherGlobal currentLocale={params.lng} dynamicLinks={related} slug={undefined} />
      <BackBanner imgSrc={t('background.meta.download_url')} txt={t('titulo')} />
      <div className="flex lg:flex-row flex-col mt-5 lg:mt-10 w-full px-10" >
        <div className="lg:w-3/5 w-full lg:px-10 px-0">

          <h2
            className="w-fit border-solid lg:text-[34px] text-2xl my-2
        border-b-2 border-[#D20000] p-2 text-center font-semibold text-gray-700"
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

          <div className="lg:h-[60vh] h-[40vh] relative mt-10 lg:mt-0">
            <Image alt={"ga"} fill={true} src={t('imageParrafo.meta.download_url')} className="border rounded-3xl" />
          </div>
        </div>

      </div>
      <div className="mt-28 grid lg:grid-cols-2 gri-cols-1 divide-y-2 divide-neutral-800 mt-10 border py-5 rounded-3xl">
        {Datalegal.map((ele, idx) => (<div className={`pr-24 pl-24 py-3 ${idx == 1 ? "dataLegal" : " "}`}><div className="font-semibold lg:text-[18px] text-[#5B5B5F] ">{ele[0]}</div><div className="text-[#B8B8B8] lg:text-[18px] font-normal">{ele[1]}</div></div>))}
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-x-16 gap-y-10 lg:mx-16 mx-0 lg:mt-28 mt-12 mb-10">
        {
          t('estadisticasNosotros', { returnObjects: true }).map(ele => (<div className="w-1/3 flex  flex-col items-center ">
            <p
              className="lg:text-[64px] text-3xl font-bold text-[#D20000] leading-[92px]"
            >
              {ele.redLet}
            </p>
            <div className=" w-full">
              <p
                className="uppercase font-semibold text-[32px] text-[#5B5B5F] text-center leading-[25px] w-full leading-[30px]"
              >
                {ele.grayLet}
              </p>
            </div>
          </div>))
        }


      </div>
      <h2 className="subtitle w-fit lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {t('valoresSubtitle')}
    </h2>
            <div className="mb-10">
        <div className="flex lg:flex-row lg:gap-x-16 flex-col gap-x-0 gap-y-10 lg:gap-y-0">
          {/* {valores.map(ele => (<div className="lg:w-2/12 w-full flex flex-col items-center"><img src={ele.img} className="w-20 h-16" /> <p className="w-full text-center">{ele.txt}</p></div>))} */}
        </div>
      </div>
      <h2 className="subtitle w-fit lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {t('partnersSubtitle')}
    </h2>
      <div className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center">
        {/* {logos.map(ele => (<img src={ele} className="lg:w-3/12 w-1/2 lg:h-16 h-10" />))} */}
      </div>
            <h2 className="subtitle w-fit lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {t('certificadosSubtitle')}
    </h2>
    </div>
  )
}

export const metadata = {
  title: "Nosotros Peru Destino Seguro",
  description: "**",
}
