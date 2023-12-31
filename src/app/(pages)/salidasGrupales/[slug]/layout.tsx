import { getCalendarioPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";

export default async function Layout({children}:{children:React.ReactNode}){
  const data:any[] = await getCalendarioPage()
  const contactoUnico = data[0]
  return(
  <div>
      <BackBanner imgSrc={contactoUnico.acf.imgback} txt="Salidas Grupales" />
      {children}
    </div>
  )
}
