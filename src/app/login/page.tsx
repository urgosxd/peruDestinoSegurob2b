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
        <div className=" flex flex-col lg:items-end items-center w-full lg:pr-60">
        <LoginCard providers={providers}/> 
        </div>
      </div>
    </div>
  )
}


