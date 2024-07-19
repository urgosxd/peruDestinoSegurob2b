import BackBanner from "@/components/bacBanner"
import { getDestinoCusco, getNosotrosPage,getDestinoArequipa,getDestinoPuno, getDestinosPage } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"
import CardDestinos from "@/components/cardDestinos"

export default async function Destinos() {
  let unico:any[] = await getDestinosPage()
  unico = unico.map(ele=>ele.acf)
  const unicoDestinos = unico[0]
  
  let cuscos:any[] = await getDestinoCusco()
  cuscos = cuscos.map(ele=>ele.acf).reverse()
  let arequipas:any[] = await getDestinoArequipa()
  arequipas = arequipas.map(ele=>ele.acf).reverse()
  let punos:any[] = await getDestinoPuno()
  punos = punos.map(ele=>ele.acf).reverse()

  return (
    <div className="w-[98vw] flex flex-col items-center">

      <BackBanner imgSrc={unicoDestinos.imgback} txt="Nuestros Destinos" />
      <Subtitle>
        Cusco
      </Subtitle>
      <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
      {cuscos.length >0 && cuscos.map(ele=><CardDestinos imgSrc={ele.imgsrc} txt1={ele.lugar} txt2={ele.precio} slug={""}/>)}
      </div>
        
      <Subtitle>
        Arequipa
      </Subtitle>
       <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
       {arequipas.length > 0 && arequipas.map(ele=><CardDestinos imgSrc={ele.imgsrc} txt1={ele.lugar} txt2={ele.precio} slug={""}/>)}
      </div>
 
      <Subtitle>
        Puno
      </Subtitle>
        
       <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
      {punos.length > 0 && punos.map(ele=><CardDestinos imgSrc={ele.imgsrc} txt1={ele.lugar} txt2={ele.precio} slug={""}/>)}
      </div>
    </div>
  )
}

export const metadata = {
  title: "Destinos Peru Destino Seguro",
  description: "**",
}
