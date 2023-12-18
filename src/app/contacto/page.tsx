import FakeFooter from "@/components/SideFakeFooter";
import ContactoForm from "@/components/formContacto";
import { getContactoPage } from "../lib/wp";
import BackBanner from "@/components/bacBanner";


export default async  function Contacto() {
  const data:any[] = await getContactoPage()
  const contactoUnico = data[0]
  console.log(data);
  

  
  return (
  <div className="flex flex-col w-[98vw] items-center">
      
      <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Contacto" />
      <div className="flex lg:flex-row flex-col w-full mt-12">

      <div className="lg:w-2/3 w-full  flex justify-center">

      <ContactoForm/>
      </div>
      <div className="lg:w-1/3 w-full flex lg:justify-center">
          <FakeFooter/>
      </div>
      </div>
    </div>
  )
  }
