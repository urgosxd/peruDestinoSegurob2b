'use client'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export default function AgenciaForm() {
  return (

    <form className="mt-8 mb-2 w-3/4 max-w-screen-lg">
      <div className="mb-1 flex flex-col gap-6">
        <Input
          size="lg"
          placeholder="Correo Electronico"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !text-2xl "
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
          
           <Textarea size="lg" placeholder="Escriba su pregunta porfavor"  className="!text-2xl "/>
        {/* <Input */}
        {/*   size="lg" */}
        {/*   placeholder="Escriba su pregunta por favor" */}
        {/*   className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !text-xl !font-bold" */}
        {/*   labelProps={{ */}
        {/*     className: "before:content-none after:content-none", */}
        {/*   }} */}
        {/* /> */}
        <Button className="mt-6 text-white bg-[#D20000] text-xl" fullWidth>
          Enviar
        </Button>
      </div>
    </form>
  )
}

