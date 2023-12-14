import Image from 'next/image'
import SessionValidator from "@/components/sessionValidator"
import SessionProvider from "@/app/context/NextAuthProvider"
import CustomCarousel from '@/components/customCarousel'
import Subtitle from '@/components/subtitle'
import ProfileCard from '@/components/card'
// import paquetes from "@/app/lib/paquetes"
// import destinos from './lib/destinos'
import BackCard from '@/components/backCard'
import { getAllDestinos, getAllPaquetes, getAllImgCarousel, getAllPregFrecuentes } from './lib/wp'
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
  const testImgs = ['https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  // console.log(paquetes)
  // console.log(imgCarousels);
  // console.log(pregFrecuents);
  console.log(imgCarousels)

  return (
    <div className="flex flex-col items-center">
      <CustomCarousel imgs={imgCarousels}></CustomCarousel>
      {/* <SessionProvider> */}
      {/* <SessionValidator>GAAAAAAAA</SessionValidator> */}
      {/* </SessionProvider> */}
      <Subtitle>Nuestros Paquetes</Subtitle>
      <div className="grid grid-cols-3 gap-3 w-11/12">
        {paquetes.map(ele => (<ProfileCard imgSrc={ele.acf.imgsrc} txt1={ele.acf.txtunico} txt2={ele.acf.price} slug={ele.slug} time={ele.acf.time} incluido={ele.acf.incluido} excluido={ele.acf.excluido} />))}
      </div>
      <Subtitle>Destinos</Subtitle>
      <div className="grid grid-cols-3 gap-3 destinoCss">
        {destinos.map(ele => (<BackCard imgSrc={ele.imgsrc} txt={ele.txt_unique} />))}
      </div>

      <div className="flex flex-row w-full mt-10">

        <div className="w-1/2 flex flex-col items-center">
          <h3 className="my-9 font-normal text-3xl">Preguntas Frecuentes</h3>
          <Questions questionAnswer={pregFrecuents} />

        </div>
        <div className="w-1/2">
          <h3 className="mt-9 font-bold text-3xl text-gray-600">
            ¿Eres una agencia?
          </h3>

          <p className="text-left pr-10 my-3 font-light text-xl text-gray-500">Escriba su correo y Pregunta a continuacion. Nuestro equipo respondera a sus preguntas lo antes posible</p>
          <AgenciaForm />
        </div>
      </div>
    </div>
  )
}

