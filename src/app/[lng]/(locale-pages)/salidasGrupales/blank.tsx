
import FakeFooter from "@/components/SideFakeFooter";
import ContactoForm from "@/components/formContacto";
import { getAllPaquetes, getAllSalidasGrupales, getCalendarioPage, getContactoPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import CustomEventCalendarByYear from "@/components/calendarGetTimes";
import CustomEventSalidasByYear from "@/components/newCalendar";


export default async  function SalidasGrupales() {
  const data:any[] = await getCalendarioPage()
  const contactoUnico = data[0]
  
  let data2:any[] = await getAllSalidasGrupales()

  data2  =data2.reverse()

  const mes = new Date()
  
  return (
  <div className="flex flex-col w-[98vw] items-center">
      <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Salidas Grupales" />
      <div className="mt-12 w-full flex flex-col items-center">
            {/* <CustomEventCalendarByYear data={paquetesDate} year="2023" currentMonth={mes.getMonth()}/> */}
        <CustomEventSalidasByYear data={data2} year={"2024"} currentMonth={mes.getMonth()}/>

      </div>
        
    </div>
  )
  }

export const metadata = {
  title: "Salidas Peru Destino Seguro",
  description: "**",
}
