'use client'
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
export default function FakeFooter(){
return (
    <div className="flex flex-col w-full items-start">
      <div className="flex flex-row w-1/2 mt-8">
        <div>
        <PhoneIcon className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div className="pl-8">
          <Typography
          as="p"  className="font-bold text-lg"
          >
              Telefono
          </Typography>
          <Typography as="p" className="text-lg">
+51 (084) 750156
          </Typography>
          <Typography as="p"  className="text-lg">
+51 (916) 041494
          </Typography>
      </div>
        </div>

      <div className="flex flex-row w-1/2 mt-8">
        <div>
        <EnvelopeIcon className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div  className="pl-8">

          <Typography as="p"  className="font-bold text-lg">
            Correo
          </Typography>
          <Typography as="p"  className="text-lg">

                ventas@pdsviajes.com
          </Typography>
        </div>
      </div>

      <div className="flex flex-row w-3/4 mt-8">
        <div>
        <MapPinIcon  className="w-10 pb-2 inline-block" color="#D20000"/>
        </div>
        <div className="pl-8" >

          <Typography as="p"  className="font-bold text-lg">
            Direccion
          </Typography>
          <Typography as="p"  className="text-lg">

                Av. Tacna Nro. 168 - Cusco
          </Typography>
        </div>
      </div>

    </div>
)
}
