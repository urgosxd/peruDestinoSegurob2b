import { getAllPaquetes, getDataNumeros, getPaquete } from "@/app/lib/wp";
import { LocaleType } from "../../../../../../i18next/settings";

import SwitcherGlobal from "@/components/SwitcherGlobal"
import BackBannerDiv from "@/components/backBannerDiv";
import { createTranslation } from "../../../../../../i18next";
import Cartita from "@/components/cartita";
import Questions from "@/components/questions";
import { MultiCarousel } from "@/components/multiCarousel";
import MiniCard from "@/components/miniCardCallCenter";
import { LinksComponents } from "@/components/linksComponents";


async function getPageData(slug: string, lng: LocaleType) {


  const instance = await getPaquete({ slug: slug, locale: lng, fields: '*' })



  const idInstance = instance.items[0].id

  const related = await getPaquete({ translation_of: idInstance })

  const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


  return {
    paquete: instance.items[0],
    related: instance.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug })).concat(relatedLanguages)
  }

}
type PageProps = {
  params: {
    lng: string
    slug: string
  };
};

export default async function Page({ params }: PageProps) {


  // const {t} = await createTranslation(params.lng,'inicio')
  const { paquete, related } = await getPageData(params.slug, params.lng)
  const dataInformacion = await getDataNumeros({ fields: '*' })

  console.log(dataInformacion)
  // console.log(paquete)
  const ddias = paquete.dias.map((ele: any, idx: number) => ({ question: `dia ${idx + 1}: ${ele.titulo}`, answer: ele.item }))
  // console.log(ddias)
  return (
    <div className="w-[98vw] flex flex-col items-center">
      {/* <SwitcherGlobal currentLocale={params.lng} dynamicLinks={related} slug="packages" /> */}
      <BackBannerDiv imgSrc={paquete.background.meta.download_url} title={paquete.title} duracion={paquete.duracion} link1={paquete.linkWord} link2={paquete.linkPdf} link3={paquete.linkFlyer} />
      <div className="flex flex-col lg:flex-row w-full mb-10 items-center lg:items-start">
        <LinksComponents link1={paquete.linkWord} link2={paquete.linkPdf} link3={paquete.linkFlyer} />
        <div className="w-full lg:w-0">
          <MultiCarousel direction={true} data={paquete.galleryPaquete.map(ele => ({ imageUrl: ele.image.meta.download_url, title: ele.image.title }))} />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-between items-center  mt-16 lg:max-h-[100vh]">
          <p
            className="text-[20px] lg:text-[25px] font-semibold uppercase text-black leading-none">
            Precio por Persona
          </p>
          <p className="text-[#D20000] text-[48px]  lg:text-[58px] uppercase font-semibold leading-tight">
            USD${paquete.precio}
          </p>
          <div className="flex flex-col">
            <button className="bg-[#626262] rounded-lg text-[15px] lg:text-[22px] font-normal text-white px-2 font-monse">Arma tu itinerario</button>
            {/* <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button> */}
            {/* <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button> */}
          </div>
          <div className="mb-[42px] lg:mb-0">
            <Cartita inclu={paquete.incluidos.map(ele => ele.item)} exclu={paquete.excluidos.map(ele => ele.item)} />
          </div>
        </div>
        <h2 className="lg:hidden block subtitle w-fit text-[20px] lg:text-[34px] text-3xl p-3 text-center font-semibold text-gray-800  lg:mb-10">
                Itinerario
          </h2>
        <div className="w-full lg:w-2/3">
          <div className=" flex justify-center container mx-auto py-3 px-10 w-full">
            <MultiCarousel direction={false} data={paquete.galleryPaquete.map(ele => ({ imageUrl: ele.image.meta.download_url, title: ele.image.title }))} />
          </div>
          <div>
            <Questions questionAnswer={ddias} paquete />
          </div>
        </div>
      </div>
      <h2 className="subtitle w-2/3 lg:w-fit lg:text-[34px] text-[20px] lg:text-3xl       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10">
        Otros Canales de Venta Asitida
      </h2>
      <MiniCard data={dataInformacion.items} />
    </div>

  )

}


export async function generateStaticParams() {
  const removeAccents = (str) => {
    return str
      .normalize("NFD") // Descompone los caracteres con acentos
      .replace(/([aeiouAEIOU])[\u0300-\u036f]/g, "$1") // Elimina los acentos solo de las vocales
      .normalize("NFC"); // Recomponer los caracteres
  };
  const rawData = await getAllPaquetes()
  const allSlugs = rawData.items
  const params = allSlugs.map(({ meta }) => ({
    lng: meta.locale,
    slug: removeAccents(meta.slug)
  }))
  return params
}
