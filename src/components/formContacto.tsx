
'use client'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export default function ContactoForm() {
  return (

    <form className="mt-8 mb-2 w-10/12">
      <div className="mb-1 flex flex-col lg:gap-6 gap-3">
        <div className="flex lg:flex-row lg:gap-x-3 flex-col gap-y-3">
        <Input
          size="lg"
          placeholder="Nombre"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl  !font-bold"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
         <Input
          size="lg"
          placeholder="Apellido"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold"
          labelProps={{
            className: "before:content-none after:content-none",
          }}

        /> 
        </div>
                <div className="flex lg:flex-row lg:gap-x-3 flex-col gap-y-3">
        <Input
          size="lg"
          placeholder="Telefono"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
         <Input
          size="lg"
          placeholder="Correo"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:!text-xl !font-bold"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        /> 
        </div>

        {/* <Input */}
        {/*   size="lg" */}
        {/*   placeholder="Consulta" */}
        {/*   className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !text-xl !font-bold !inline-block !align-top !items-start" */}
        {/*   labelProps={{ */}
        {/*     className: "before:content-none after:content-none", */}
        {/*   }} */}
        {/*    */}
        {/*   // containerProps={{className:"h-36 p-0 m-0"}} */}
        {/* /> */}
           <Textarea size="lg" placeholder="Consulta"  className="lg:!text-xl !font-bold"/>
        <Button className="mt-6 text-white bg-[#D20000] lg:text-xl text-sm" >
          Enviar
        </Button>
      </div>
    </form>
  )
}

