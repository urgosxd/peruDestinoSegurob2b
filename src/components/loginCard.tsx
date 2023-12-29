'use client'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { SocialIcon } from "react-social-icons";

export  async function LoginCard({providers}:{providers:Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null}) {
  return (
    <Card className="w-96 bg-transparent rounded-3xl pt-10">
        <div className="rounded-3xl to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 z-0" />
      <CardBody className="flex flex-col gap-0 z-10">
           <div className="text-white text-5xl font-extrabold text-center">¡Bienvenido!</div>
        <div className="text-white text-xl font-extrabold text-center">Inicia sesión para continuar</div>
            <div className="flex flex-row gap-x-10 justify-center mt-5">
            <SocialIcon  network="facebook" as="div" style={{height:35,width:35}} className="cursor-pointer"/>
            {Object.values(providers!!).map(ele=>{
          return ele.name == "Google" && <img src="/google.svg" className="w-7 cursor-pointer" onClick={()=>signIn(ele.id)}/>
        })}
            </div>

          
        <div className="flex flex-col gap-4 mt-5">
            <div>
                  <Typography
                    className="mb-2 font-medium text-white text-md font-expand"
                  >
                  Correo
                  </Typography>
                  <Input
                    type="email"
                    placeholder=""
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
            <div>
                  <Typography
                    className="mb-2 font-medium text-white text-md font-expand"
                  >
                  Contraseña
                  </Typography>
                  <Input
                    type="password"
                    placeholder=""
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

          <button className="text-white bg bg-[#D20000] rounded-md text-md py-2 font-expand">
            Inicia Sesion
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
