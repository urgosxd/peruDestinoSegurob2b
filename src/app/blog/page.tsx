import { getBlogPage, getContactoPage } from "../lib/wp";
import BackBanner from "@/components/bacBanner";


export default async  function Contacto() {
  // const data:any[] = await getContactoPage()
  // const contactoUnico = data[0]
  // console.log(data);
  

    const data:any[] = await getBlogPage()
    const blogUnico = data[0]
  
  return (
  <div className="flex flex-col w-[100vw] items-center">
      <BackBanner imgSrc={blogUnico.acf.imgback} txt="Blog"/>

      
    </div>
  )
  }
