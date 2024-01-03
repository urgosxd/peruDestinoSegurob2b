// 'use client'
import FakeFooter from "@/components/SideFakeFooter";
import ContactoForm from "@/components/formContacto";
import { getContactoPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import { revalidatePath } from "next/cache";
// import { useState } from "react";


export default async  function Contacto() {
  const data:any[] = await getContactoPage()
  const contactoUnico = data[0]
  console.log(data);
  
  // const [ip,setIp] = useState("")

  //  const getData = async () => {
  //   const res = await fetch("https://api.ipify.org/?format=json");
  //   if(res.ok){
  //     const data = await res.json()
  //     return data
  //   }
  // }
  // const ip = await getData()

  
  async function addClient(prevState:any,formData:FormData){
    'use server'
    const rawFormData ={
      nombres:formData.get("nombres")!.toString(),
      apellidos:formData.get("apellidos")!.toString(),
      telefono:formData.get("telefono")!.toString(),
      correo:formData.get("correo")!.toString(),
    }
    try {
      const params = new URLSearchParams()
  params.append('FIELDS[NAME]',rawFormData.nombres)
  params.append('FIELDS[LAST_NAME]',rawFormData.apellidos)
  params.append('FIELDS[EMAIL][0][VALUE]',rawFormData.correo)
  params.append('FIELDS[EMAIL][0][VALUE_TYPE]','Work')
  params.append('FIELDS[PHONE][0][VALUE]',rawFormData.telefono)
  params.append('FIELDS[PHONE][0][VALUE_TYPE]','Work')
  
  const res = await fetch('https://jushka.bitrix24.es/rest/307/k7cro1hl5lzveaf5/crm.contact.add.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    body:params
  })
 
   const data = await res.json()
      console.log(data)
      
     revalidatePath("/")
      return {
        message: "data"
      }
    }
    catch {
      return {
        message : "FAILLL"
      }
    }
  }
  return (
  <div className="flex flex-col w-[98vw] items-center">
      
      <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Contacto" />
      <div className="flex lg:flex-row flex-col w-full mt-12">

      <div className="lg:w-2/3 w-full  flex justify-center">

      <ContactoForm action={addClient}/>
      </div>
      <div className="lg:w-1/3 w-full flex lg:justify-center">
      <FakeFooter phones={contactoUnico.acf.telefono.split(",")} address={contactoUnico.acf.direccion} email={contactoUnico.acf.correo}/>
      </div>
      </div>
    </div>
  )
  }
