import BackBanner from "@/components/bacBanner"
import { getDestinoCusco, getNosotrosPage,getDestinoArequipa,getDestinoPuno } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"
import CardDestinos from "@/components/cardDestinos"

export default async function Destinos() {
  let cuscos:any[] = await getDestinoCusco()
  cuscos = cuscos.map(ele=>ele.acf).reverse()
  let arequipas:any[] = await getDestinoArequipa()
  let punos:any[] = await getDestinoPuno()

  return (
    <div className="w-[98vw] flex flex-col items-center">

      {/* <BackBanner imgSrc={uniNosotros.imgback} txt="Acerca de Nosotros" /> */}
      <Subtitle>
        Cusco
      </Subtitle>
      <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
      {cuscos.map(ele=><CardDestinos imgSrc={ele.imgsrc} txt1={ele.lugar} txt2={ele.precio} slug={""}/>)}
      </div>
    </div>
  )
}
