import FakeFooter from "@/components/SideFakeFooter";
import ContactoForm from "@/components/formContacto";
import { getAllPaquetes, getCalendarioPage, getContactoPage } from "../lib/wp";
import BackBanner from "@/components/bacBanner";
import CustomEventCalendarByYear from "@/components/calendarGetTimes";


export default async  function Calendario() {
  const data:any[] = await getCalendarioPage()
  const contactoUnico = data[0]
  
  const data2:any[] = await getAllPaquetes()
  let paquetesDate:any[] = data2.reverse()
  paquetesDate = paquetesDate.map(ele=>ele.acf)
  paquetesDate = paquetesDate.map((ele:any)=>{
    const first = ele.date.split(" ")[0]
    return {...ele,date:first}
  })

  console.log(paquetesDate);

  const mes = new Date()
  
  return (
  <div className="flex flex-col w-[98vw] items-center">
      
      <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Nuestros proximos viajes" />
      <div className="mt-12 w-full flex flex-col items-center">
            <CustomEventCalendarByYear data={paquetesDate} year="2023" currentMonth={mes.getMonth()}/>
      </div>
        
    </div>
  )
  }
