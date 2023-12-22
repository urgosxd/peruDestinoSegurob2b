import BackBanner from "@/components/bacBanner"
import { getNosotrosPage } from "../lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"

export default async function Nosotros() {
  let nosotros: any[] = await getNosotrosPage()
  console.log(nosotros);
let uniNosotros = nosotros.map(ele => ele.acf).reverse()[0]
  const exp = [{ rojo: "+5K", txt: "Agencias de viaje Atendidas", }, { rojo: "+30", txt: "destinos", }, { rojo: "+15", txt: "15 AÑOS DE EXPERIENCIA" }]

  const logos = ["./respaldo2.png", "./respaldo.png", "./ytu.png", "./safe.png", "./TripAdvisor.png"]
  const valores = [
    { img: "./RESPONSABILIDAD.png", txt: "Responsabilidad" },
    { img: "./LEALTAD.png", txt: "Lealtad" }, { img: "./iconitoVal.png", txt: "Honestidad" },
    { img: "./PUNTUALIDAD.png", txt: "Puntualidad" },
    { img: "./iconitoVal.png", txt: "Disciplina" },
  ]

  return (
    <div className="w-[98vw] flex flex-col items-center">

      <BackBanner imgSrc={uniNosotros.imgback} txt="Acerca de Nosotros" />
      <div className="flex lg:flex-row flex-col mt-5 lg:mt-10 w-full px-10" >
        <div className="lg:w-1/2 w-full lg:px-10 px-0">

          <h2
            className="w-fit border-solid lg:text-4xl text-2xl my-2
        border-b-2 border-[#D20000] p-2 text-center font-black text-gray-700"
          >
            Nosotros
          </h2>
          <div
            className="wasgi"
            dangerouslySetInnerHTML={{ __html: uniNosotros.parrafo }}
          >
              
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-full">

          <div className="lg:h-[65vh] h-[40vh] relative mt-10 lg:mt-0">
          <Image alt={"ga"} fill={true} src={uniNosotros.imgfundadores} className="border rounded-3xl" />
          </div>
        </div>

      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-x-16 gap-y-10 lg:mx-16 mx-0 lg:mt-28 mt-12 mb-10">
        {
          exp.map(ele => (<div className="w-1/3 flex  flex-col items-center">
            <p
              className="lg:text-6xl text-5xl font-black text-[#D20000]"
            >
              {ele.rojo}
            </p>
            <div className=" w-full">
              <p
                className="uppercase font-bold text-center w-full"
              >
                {ele.txt}
              </p>

            </div>
          </div>))
        }

      </div>
      <Subtitle>
        Valores
      </Subtitle>
      <div className="mb-10">
        <div className="flex lg:flex-row lg:gap-x-16 flex-col gap-x-0 gap-y-10 lg:gap-y-0">
          {valores.map(ele => (<div className="lg:w-3/12 w-full flex flex-col items-center"><img src={ele.img} className="w-20 h-16" /> <p className="w-full text-center">{ele.txt}</p></div>))}
        </div>
      </div>
      <Subtitle>
        Certificaciones
      </Subtitle>
      <div className="flex lg:flex-row flex-col lg:gap-x-16 lg:gap-y-0 gap-y-8 items-center">
        {logos.map(ele => (<img src={ele} className="lg:w-3/12 w-1/2 lg:h-16 h-10" />))}
      </div>
    </div>
  )
}
