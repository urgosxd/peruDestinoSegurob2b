import { getAllBlogs, getAllPaquetes, getBlog, getDataNumeros, getPaquete, getTour } from "@/app/lib/wp";
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



async function getPageData(slug: string, lng: LocaleType) {


  const instance = await getBlog({ slug: slug, locale: lng, fields: '*' })



  const idInstance = instance.items[0].id

  const related = await getBlog({ translation_of: idInstance })

  const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


  return {
    blog: instance.items[0],
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
  const { blog, related } = await getPageData(params.slug, params.lng)
  const dataInformacion = await getDataNumeros({ fields: '*' })

  const dataTours = await getTour({fields:"*",locale:params.lng,sss:"basic",sender:"1001"})
  const dataPaquete = await getPaquete({fields:"*",locale:params.lng,sss:"basic",sender:`1001`})


  return (
    <div className="w-[98vw] flex flex-col items-center">
      GAAAAAAA
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
  const rawData = await getAllBlogs()
  const allSlugs = rawData.items
  const params = allSlugs.map(({ meta }) => ({
    lng: meta.locale,
    slug: removeAccents(meta.slug)
  }))
  return params
}
