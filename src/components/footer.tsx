'use client'
import { Typography } from "@material-tailwind/react";
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

export function Footer() {
  return (
    <footer className="w-11/12 bg-white lg:ml-10 ml-2 lg:mt-20 mt-10">
      <div className="flex lg:flex-row flex-col  flex-wrap items-center justify-center lg:gap-y-6 gap-y-8 lg:gap-x-12 gap-x-3 bg-white text-center md:justify-between">
        <img src="/pdsLogo.png" alt="logo-ct" className="w-1/12" />
        <div>
          <Typography
            color="blue-gray"
            className="font-bold"
          >

            Nuestras Redes Sociales
          </Typography>

          <Typography
            color="blue-gray"
            className="font-normal"
          >

            Peru Destino Seguro S.R.L
          </Typography>
            <div className="flex flex-row gap-x-3">
            <SocialIcon bgColor="#D20000" url="https://www.youtube.com/"/>
            <SocialIcon bgColor="#D20000" url="https://www.facebook.com/"/>
            <SocialIcon bgColor="#D20000" url="https://www.instagram.com/"/>
            <SocialIcon bgColor="#D20000" url="https://www.tiktok.com/"/>
            <SocialIcon bgColor="#D20000" url="https://www.whatsapp.com/"/>
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-x-8 lg:text-right text-center leading-none">
          <li>
            <Typography
              color="blue-gray"
              className="font-bold leading-normal"
            >

              RAZON SOCIAL:
            </Typography>
            <Typography
              color="blue-gray"
              className="font-normal leading-normal"
            >
              Peru Destino Seguro S.R.L
            </Typography>
            <Typography
              color="blue-gray"
              className="font-bold leading-normal"
            >
              Direccion:
            </Typography>

              <Typography
                color="blue-gray"
                className="font-normal leading-normal"
              >
                <MapPinIcon className="w-3 pb-2 inline-block " color="#D20000"/>    Av. Tacna Nro. 168 - Cusco
              </Typography>


            <Typography
              color="blue-gray"
              className="font-bold leading-normal"
            >
             Telefono
            </Typography>

            <Typography
              color="blue-gray"
              className="font-normal leading-normal"
            >

             <PhoneIcon className="w-3 pb-2 inline-block" color="#D20000"/>  +51 (084) 750156
            </Typography>

            <Typography
              color="blue-gray"
              className="font-normal leading normal"
            >
              <PhoneIcon className="w-3 pb-2 inline-block" color="#D20000"/>  +51 (916) 041494
            </Typography>

            <Typography
              color="blue-gray"
              className="font-bold leading-normal"
            >
              Correo Electronico:
            </Typography>

            <Typography
              color="blue-gray"
              className="font-normal leading-normal"
            >
            <EnvelopeIcon className="w-3 pb-1 inline-block" color="#D20000"/>     ventas@pdsviajes.com
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />

      <div className="w-full flex flex-row flex-wrap justify-between gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Typography color="blue-gray" className="text-center font-normal">
          Derechos reservados Peru Destino Seguro 2023
        </Typography>
            <img src="/tarjetas.png" alt="logo-ct" className="w-2/12" />
      </div>
    </footer>
  );
}
