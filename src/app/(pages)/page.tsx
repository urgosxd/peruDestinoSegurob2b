import Image from 'next/image'
import SessionValidator from "@/components/sessionValidator"
import SessionProvider from "@/app/context/NextAuthProvider"
import CustomCarousel from '@/components/customCarousel'
import Subtitle from '@/components/subtitle'
import ProfileCard from '@/components/cardPaquetes'
// import paquetes from "@/app/lib/paquetes"
// import destinos from './lib/destinos'
import BackCard from '@/components/backCard'
import { getAllDestinos, getAllPaquetes, getAllImgCarousel, getAllPregFrecuentes } from '@/app/lib/wp'
import { GetStaticProps, NextPage } from 'next'
import Questions from '@/components/questions'
import AgenciaForm from '@/components/formAgencio'

interface Props {
}

export default async function Home({ }: Props) {
  let paquetes: any[] = await getAllPaquetes()
  paquetes = paquetes.reverse()
  // paquetes = paquetes.map(ele => ele.acf).reverse()

  let destinos: any[] = await getAllDestinos()
  destinos = destinos.map(ele => ele.acf).reverse()

  let imgCarousels: any[] = await getAllImgCarousel()
  imgCarousels = imgCarousels.map(ele => ele.acf)

  let pregFrecuents: any[] = await getAllPregFrecuentes()
  pregFrecuents = pregFrecuents.map(ele => ele.acf).reverse()
  // console.log(paquetes)
  // console.log(imgCarousels);
  // console.log(pregFrecuents);

  return (
    <div className="flex flex-col items-center">
      <CustomCarousel imgs={imgCarousels}></CustomCarousel>
      {/* <SessionProvider> */}
      {/* <SessionValidator>GAAAAAAAA</SessionValidator> */}
      {/* </SessionProvider> */}
      <Subtitle>Nuestros Paquetes</Subtitle>
      <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 gap-2 pl-7 lg:pl-0 gap-y-10">
        {paquetes.map(ele => (<ProfileCard key={ele.acf.txtunico} imgSrc={ele.acf.imgsrc} txt1={ele.acf.txtunico} txt2={ele.acf.precio} slug={ele.slug} time={ele.acf.tiempo} incluido={ele.acf.incluido} excluido={ele.acf.excluido} />))}
      </div>
      <Subtitle >Destinos</Subtitle>
      <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center destinoCss w-10/12 pl-0 grid-cols-1 gap-y-2 lg:pl-0">
        {destinos.map(ele => (<BackCard key={ele.txt_unique} imgSrc={ele.imgsrc} txt={ele.txt_unique} />))}
      </div>

      <div className="flex lg:flex-row flex-col w-full mt-10">

        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <h3 className="my-9 font-normal text-3xl">Preguntas Frecuentes</h3>
          <Questions questionAnswer={pregFrecuents} />

        </div>
        <div className="lg:w-1/2 w-full p-10 lg:p-0">
          <h3 className="lg:mt-9 mt-6 font-bold lg:text-3xl text-xl text-gray-600">
            ¿Eres una agencia?
          </h3>

          <p className="text-left pr-10 my-3 font-light text-xl text-gray-500">Escriba su correo y Pregunta a continuacion. Nuestro equipo respondera a sus preguntas lo antes posible</p>
          <AgenciaForm />
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Peru Destino Seguro",
  description: "**",
}
