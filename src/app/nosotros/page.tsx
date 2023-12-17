import BackBanner from "@/components/bacBanner"
import { getNosotrosPage } from "../lib/wp"
import Image from 'next/image'
import { Typography } from "@/components/clientCompoMaterial"
import Subtitle from "@/components/subtitle"

export default async function Nosotros() {
  let nosotros: any[] = await getNosotrosPage()
  console.log(nosotros);

  let uniNosotros = nosotros.map(ele => ele.acf).reverse()[0]
  const exp = [{ rojo: "+5K", txt: "Agencias de viaje Atendidas", }, { rojo: "+30", txt: "destinos", }, { rojo: "+15", txt: "15 AÑOS DE EXPERIENCIA" }]

  const logos =["./respaldo2.png","./respaldo.png","./ytu.png","./safe.png","./TripAdvisor.png"]
  const valores = [
    {img:"./RESPONSABILIDAD.png",txt:"Responsabilidad"},
    {img:"./LEALTAD.png",txt:"Lealtad"}, {img:"./iconitoVal.png",txt:"Honestidad"},
    {img:"./PUNTUALIDAD.png",txt:"Puntualidad"},
    {img:"./iconitoVal.png",txt:"Disciplina"},
  ]

  return (
    <div className="w-[98vw] flex flex-col items-center">

      <BackBanner imgSrc={uniNosotros.imgback} txt="Acerca de Nosotros" />
      <div className="flex flex-row mt-20 px-10" >
        <div className="w-1/2 px-10">

          <Typography
            as="h2"
            className="w-fit border-solid text-4xl my-2
        border-b-2 border-[#D20000] p-2 text-center font-black text-gray-700"
          >
            Nosotros
          </Typography>
          <Typography
            as="p"
            className="text-2xl w-fit text-gray-500 mt-5 text-justify font-ligth pr-5 leading-none"
          >
            {uniNosotros.parrafo}
          </Typography>
        </div>
        <div className="w-1/2 h-[65vh] relative ">

          <Image alt={"ga"} fill={true} src={uniNosotros.imgfundadores} className="border rounded-3xl"/>
        </div>

      </div>
      <div className="flex flex-row justify-center gap-x-16 mx-16 mt-28 mb-10">
        {
        exp.map(ele=>(<div className="w-1/3 flex  flex-col items-center">
          <Typography
            as="p"
            className="text-6xl font-black text-[#D20000]"
          >
              {ele.rojo}
          </Typography>
            <div className=" w-1/2">
            <Typography
            as="p"
              className="uppercase font-bold text-center"
          >
            {ele.txt}
          </Typography>

          </div>
        </div>))
        }
        
      </div>
        <Subtitle>
        Valores
      </Subtitle>
        <div className="mb-10">
        <div className="flex flex-row gap-x-16">
        {valores.map(ele=>(<div className="w-3/12 flex flex-col"><img src={ele.img} className="w-20 h-16" /> <p className="w-">{ele.txt}</p></div>))}
      </div>
      </div>
        <Subtitle>
        Certificaciones
      </Subtitle>
        <div className="flex flex-row gap-x-16">
        {logos.map(ele=>(<img src={ele} className="w-3/12 h-16" />))}
      </div>
      </div>
  )
}
