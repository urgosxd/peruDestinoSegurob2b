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

    <form className="lg:mt-9 mt-3 mb-2 w-full max-w-screen-lg pr-10">
      <div className="mb-1 flex flex-col lg:gap-6 gap-2">
        <Input
          size="lg"
          placeholder="Correo Electronico"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-2xl "
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
          
           <Textarea size="lg" placeholder="Escriba su pregunta porfavor"  className="lg:!text-2xl "/>
        {/* <Input */}
        {/*   size="lg" */}
        {/*   placeholder="Escriba su pregunta por favor" */}
        {/*   className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !text-xl !font-bold" */}
        {/*   labelProps={{ */}
        {/*     className: "before:content-none after:content-none", */}
        {/*   }} */}
        {/* /> */}
        <Button className="mt-6 text-white bg-[#D20000] lg:text-xl text-lg !px-3 w-24 lg:w-full" >
          Enviar
        </Button>
      </div>
    </form>
  )
}

