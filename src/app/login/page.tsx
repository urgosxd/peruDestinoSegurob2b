import { LoginCard } from "@/components/loginCard"
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next"
import { getServerSideProps } from "next/dist/build/templates/pages"
import Image from 'next/image'
import { getProviders, signIn } from "next-auth/react"
export default async function LoginPage(){
  const providers = await getProviders()
  return (
  <div className="h-[100vh] w-[100vw] relative lg:mt-0">
          <Image alt={"ga"} fill={true} src={"/INICIAR-SESION.png"} className="" />
  <div className="relative flex flex-col">
             <div className="h-[20vh]"></div>
        <div className=" flex flex-col  items-center w-full ">
          <div className="flex flex-row w-3/5 justify-between">
<div className="relative lg:h-[30vh] lg:w-[20vw] mt-16">
        <Image alt="pdsLogo" src={"/PDSWHITE.png"} fill/>
          </div>
        <LoginCard providers={providers}/>
          </div>
           
        </div>
      </div>
    </div>
  )
}


