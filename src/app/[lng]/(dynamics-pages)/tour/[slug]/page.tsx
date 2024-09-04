import { getAllTours, getDataNumeros, getPaquete, getTour } from "@/app/lib/wp";
import { LocaleType } from "../../../../../../i18next/settings";
import SwitcherGlobal from "@/components/SwitcherGlobal"
import BackBannerDiv from "@/components/backBannerDiv";
import { createTranslation } from "../../../../../../i18next";
import Cartita from "@/components/cartita";
import Questions from "@/components/questions";
import { MultiCarousel } from "@/components/multiCarousel";
import MiniCard from "@/components/miniCardCallCenter";
import { LinksComponents } from "@/components/linksComponents";
import { MultiCarouselRecomends } from "@/components/multiCarouselRecomend";


export const fetchCache = 'force-no-store';

async function getPageData(slug: string, lng: LocaleType) {


  const instance = await getTour({ slug: slug, locale: lng, fields: '*' })



  const idInstance = instance.items[0].id

  const related = await getTour({ translation_of: idInstance })

  const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


  return {
    tour: instance.items[0],
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
  const { tour, related } = await getPageData(params.slug, params.lng)
  const dataInformacion = await getDataNumeros({ fields: '*' })
  const dataTours = await getTour({fields:"*",locale:params.lng,sss:"basic",sender:`${tour.id}`})
  const dataPaquete = await getPaquete({fields:"*",locale:params.lng,sss:"basic",sender:"1001"})
  console.log(dataTours)
  console.log(dataPaquete)
  return (
    <div className="w-[98vw] flex flex-col items-center">
      {/* <SwitcherGlobal currentLocale={params.lng} dynamicLinks={related} slug="packages" /> */}
      <BackBannerDiv imgSrc={tour.background.meta.download_url} title={tour.title} duracion={tour.duracion} link1={tour.linkPdf} link2={tour.linkWord} link3={tour.linkFlyer} tourDisplay={true} />
      <div className="flex flex-col lg:flex-row w-full mb-10 items-center lg:items-start">
        <LinksComponents link1={tour.linkPdf} link2={tour.linkWord} link3={tour.linkFlyer} tourDisplay={true}/>
        <div className="w-full lg:w-0">
          <MultiCarousel direction={true} data={tour.galleryTour.map(ele => ({ imageUrl: ele.image.meta.download_url, title: ele.image.title }))} />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-between items-center  mt-16 lg:max-h-[100vh]">
          <p
            className="text-[20px] lg:text-[25px] font-semibold uppercase text-black leading-none">
            Precio por Persona
          </p>
          <p className="text-[#D20000] text-[48px]  lg:text-[58px] uppercase font-semibold leading-tight">
            USD${tour.precio}
          </p>
          <div className="flex flex-col">

            {/* <button className="bg-[#626262] rounded-lg text-[15px] lg:text-[22px] font-normal text-white px-2 font-monse">Arma tu itinerario</button> */}
            {/* <button className="bg-[#D20000]  rounded-none mb-3  text-md font-bold">Comprar</button> */}
            {/* <button className="bg-[#D20000] rounded-none mb-3 text-md font-bold" >Contactanos</button> */}

          </div>
          <div className="mb-[42px] lg:mb-0">
            <Cartita inclu={tour.incluidos.map(ele => ele.item)} exclu={tour.excluidos.map(ele => ele.item)} />
          </div>
        </div>
        <h2 className="lg:hidden block subtitle w-fit text-[20px] lg:text-[34px]  p-3 text-center font-semibold text-gray-800  lg:mb-10">
          Itinerario
          </h2>
        <div className="w-full lg:w-2/3">
          <div className=" flex justify-center container mx-auto py-3 px-10 max-w-[950px]">
            <MultiCarousel direction={false} data={tour.galleryTour.map(ele => ({ imageUrl: ele.image.meta.download_url, title: ele.image.title }))} />
          </div>
          <div>
            <h2 className="hidden lg:block subtitle w-fit text-[16px] lg:text-[28px]  p-3 text-center font-semibold text-gray-800   ml-16">
                Itinerario
            </h2>

          <div dangerouslySetInnerHTML={{ __html: tour.itinerario }} className="tourQWERTY" />
          </div>
        </div>
      </div>
      <h2 className="subtitle w-2/3 lg:w-fit lg:text-[34px] text-[20px] lg:text-3xl       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10">
        Tours y Paquetes Recomendados
      </h2>
      
      <div className="w-full flex flex-col justify-center">
        <MultiCarouselRecomends data={dataPaquete.items.concat(dataTours.items)} lng={params.lng}/>
      </div>
      <h2 className="subtitle w-2/3 lg:w-fit lg:text-[34px] text-[20px] lg:text-3xl       my-[20px] lg:my-[50px] p-3 text-center font-semibold text-gray-800  lg:mb-10">
        Otros Canales de Venta Asistida
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
  const rawData = await getAllTours()
  const allSlugs = rawData.items
  const params = allSlugs.map(({ meta }) => ({
    lng: meta.locale,
    slug: removeAccents(meta.slug)
  }))
  return params
}
