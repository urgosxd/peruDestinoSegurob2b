import BackBanner from "@/components/bacBanner"
import { getContactarPage, getNosotrosPage } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"
import { createTranslation } from '../../../../../i18next';
import { LocaleType } from "../../../../../i18next/settings";
import SwitcherGlobal from "@/components/SwitcherGlobal";
import MapLocation from "@/components/Map";
import { MapProvider } from "@/app/context/map-provider";


type Props = {
  params: {
    lng: string
  }
}

async function getPageData(slug: string, lng: LocaleType) {

  const instance = await getContactarPage({ locale: lng, fields: '*' })

  const idInstance = instance.items[0].id

  const related = await getContactarPage({ translation_of: idInstance })

  const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


  return {
    NosotrosPage: instance.items[0],
    related: instance.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug })).concat(relatedLanguages)
  }

}

export default async function Contactar({ params }: Props) {
  // let nosotros = await getNosotrosPage()
  // const ga = JSON.parse(nosotros)
  // console.log(nosotros.items);
  // console.log(params.lng)
  const { t } = await createTranslation(params.lng, 'contactar')

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
  const { NosotrosPage, related } = await getPageData("contactar", params.lng)

  return (

    <div className="w-[98vw] flex flex-col items-center">
      <SwitcherGlobal currentLocale={params.lng} dynamicLinks={related} slug={undefined} />
      <BackBanner imgSrc={t('background.meta.download_url')} txt={t('titulo')} />
      <h2
        className="w-fit border-solid lg:text-[34px] text-2xl my-2
        border-b-2 border-[#D20000] p-2 text-center font-semibold text-gray-700"
      >
        {t('formTitle')}
      </h2>

      <MapProvider>
      <MapLocation address={t('ubicacion')}/>
      </MapProvider>

    </div>
  )
}

export const metadata = {
  title: "Nosotros Peru Destino Seguro",
  description: "**",
}
