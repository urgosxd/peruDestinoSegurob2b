'use client'
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
export default function FakeFooter(){
return (
    <div className="flex flex-col w-full  lg:items-start items-center">
      <div className="flex flex-row w-1/2 lg:w-full mt-8">
        <div>
        <PhoneIcon className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div className="pl-8 w-full">
          <p
            className="font-bold text-lg"
          >
              Telefono
          </p>
          <p  className="text-lg w-full">
+51 (084) 750156
          </p>
          <p   className="text-lg w-full">
+51 (916) 041494
          </p>
      </div>
        </div>

      <div className="flex flex-row w-1/2 mt-8">
        <div>
        <EnvelopeIcon className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div  className="pl-8">

          <p   className="font-bold text-lg">
            Correo
          </p>
          <p   className="text-lg">

                ventas@pdsviajes.com
          </p>
        </div>
      </div>

      <div className="flex flex-row lg:w-3/4 w-1/2 mt-8">
        <div>
        <MapPinIcon  className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div className="pl-8" >

          <p  className="font-bold text-lg">
            Direccion
          </p>
          <p   className="text-lg">

                Av. Tacna Nro. 168 - Cusco
          </p>
        </div>
      </div>

    </div>
)
}
