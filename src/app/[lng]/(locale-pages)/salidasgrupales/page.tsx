
import FakeFooter from "@/components/SideFakeFooter";
import ContactoForm from "@/components/formContacto";
import { getAllPaquetes, getSalidasGrupales, getSalidasPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import CustomEventCalendarByYear from "@/components/calendarGetTimes";
import CustomEventSalidasByYear from "@/components/newCalendar";

// async function getPageData(slug: string, lng: LocaleType) {

//   const instance = await getSalidasPage({ locale: lng, fields: '*' })

//   const idInstance = instance.items[0].id

//   const related = await getSalidasPage({ translation_of: idInstance })

//   const relatedLanguages = related.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug }))


//   return {
//     NosotrosPage: instance.items[0],
//     related: instance.items.map(ele => ({ language: ele.meta.locale, slug: ele.meta.slug })).concat(relatedLanguages)
//   }

// }

type Props = {
  params: {
    lng: string
  }
}


export default async  function SalidasGrupales({params}:Props) {
  const data = await getSalidasPage({'fields':'*'})
  const realData = data.items[0]
  
  // let data2 = await getAllSalidasGrupales()
  const salidasGrupales = await getSalidasGrupales({'fields':'*'})


  const mes = new Date()
  
  return (
  <div className="flex flex-col w-[98vw] items-center">
      <BackBanner imgSrc={realData.background.meta.download_url} txt="Salidas Grupales" />
      <div className="mt-12 w-full flex flex-col items-center">
            {/* <CustomEventCalendarByYear data={paquetesDate} year="2023" currentMonth={mes.getMonth()}/> */}
        <CustomEventSalidasByYear data={salidasGrupales.items} year={"2024"} currentMonth={mes.getMonth()} lng={params.lng} />

      </div>
        
    </div>
  )
  }

export const metadata = {
  title: "Salidas Peru Destino Seguro",
  description: "**",
}
