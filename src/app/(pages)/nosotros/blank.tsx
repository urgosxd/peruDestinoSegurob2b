import BackBanner from "@/components/bacBanner"
import { getNosotrosPage } from "@/app/lib/wp"
import Image from 'next/image'
import Subtitle from "@/components/subtitle"

export default async function Nosotros() {
  let nosotros: any[] = await getNosotrosPage()
  console.log(nosotros);
let uniNosotros = nosotros.map(ele => ele.acf).reverse()[0]
  const exp = [{ rojo: uniNosotros.agenciaviajesatendidas, txt: "Agencias de viaje Atendidas", }, { rojo: uniNosotros.destinos, txt: "destinos", }, { rojo: uniNosotros.aniosxp, txt: "15 AÑOS DE EXPERIENCIA" }]

  const logos = ["/respaldo2.png", "/respaldo.png", "/ytu.png", "/safe.png", "/TripAdvisor.png"]
  const valores = [
    { img: "/RESPONSABILIDAD.png", txt: "Responsabilidad" },
    { img: "/LEALTAD.png", txt: "Lealtad" }, { img: "/iconitoVal.png", txt: "Honestidad" },
    { img: "/PUNTUALIDAD.png", txt: "Puntualidad" },
    { img: "/iconitoVal.png", txt: "Disciplina" },
    {img:"/candado.png",txt:"Confidencialidad"}
    // {img: "./"}
  ]
  const Datalegal = [
    ["RAZÓN SOCIAL","Perú Destino Seguro E.I.R.L."],
    ["NÚMERO DE RUC",uniNosotros.ruc],
    ["NOMBRE COMERCIAL","PDS VIAJES"],
    ["CERTIFICADO DE AUTORIZACIÓN","Perú Destino Seguro E.I.R.L"],
  ]

  return (
    <div className="w-[98vw] flex flex-col items-center">

      <BackBanner imgSrc={uniNosotros.imgback} txt="Acerca de Nosotros" />
      <div className="flex lg:flex-row flex-col mt-5 lg:mt-10 w-full px-10" >
        <div className="lg:w-3/5 w-full lg:px-10 px-0">

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
        <div className="lg:w-2/5 w-full h-full mx-10">


          <div className="lg:h-[65vh] h-[40vh] relative mt-10 lg:mt-0">
          <Image alt={"ga"} fill={true} src={uniNosotros.imgfundadores} className="border rounded-3xl" />
          </div>
        </div>

      </div>
        <div className="mt-28 grid lg:grid-cols-2 gri-cols-1 divide-y-2 divide-neutral-800 mt-10 border py-5 rounded-3xl">
          {Datalegal.map((ele,idx)=>(<div className={`pr-24 pl-24 py-3 ${idx==1 ? "dataLegal":" "}`}><div className="font-bold text-lg text-gray-700">{ele[0]}</div><div className="text-gray-600">{ele[1]}</div></div>))}
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
          {valores.map(ele => (<div className="lg:w-2/12 w-full flex flex-col items-center"><img src={ele.img} className="w-20 h-16" /> <p className="w-full text-center">{ele.txt}</p></div>))}
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

export const metadata = {
  title: "Nosotros Peru Destino Seguro",
  description: "**",
}
