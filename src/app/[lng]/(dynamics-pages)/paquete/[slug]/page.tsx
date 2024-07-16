import { getAllPaquetes, getPaquete } from "@/app/lib/wp";
import { LocaleType } from "../../../../../../i18next/settings";

import SwitcherGlobal from "@/components/SwitcherGlobal" 


async function getPageData(slug:string,lng:LocaleType){

   
  const instance =  await getPaquete({slug:slug,locale:lng,fields:'*'})

  const idInstance = instance.items[0].id

  const related = await getPaquete({translation_of:idInstance})

  const relatedLanguages = related.items.map(ele=> ({language: ele.meta.locale,slug:ele.meta.slug}))

  console.log(instance)
  console.log(relatedLanguages)

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
  
  const {paquete , related} = await getPageData(params.slug,params.lng)


  return (
  <main>
      <SwitcherGlobal currentLocale={params.lng}  dynamicLinks={related} slug="paquete"/>
    </main>
  )

}

export async function generateStaticParams(){
  const rawData = await getAllPaquetes()
  const allSlugs = rawData.items
  const params = allSlugs.map(({meta})=>({
    lng:meta.locale,
    slug:meta.slug
  }))
  return params
}
