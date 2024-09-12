'use client'
import { Typography } from "@material-tailwind/react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

interface Props {
  data: any
}

export function Footer({ data }: Props) {

  return (
    <footer className="w-full bg bg-[#F7F7F7] lg:mt-20 mt-10 ">
      <div className="flex flex-col justify-around px-10">
      <div className="flex lg:flex-row flex-col  flex-wrap items-center justify-center lg:gap-y-6 gap-y-8 lg:gap-x-12 gap-x-3  text-center md:justify-between">
        <img src="/pdsLogo.png" alt="logo-ct" className="w-[190px]" />
        <div>
          <Typography
            color="blue-gray"
            className="font-semibold text-[20px] "
          >

            Nuestras Redes Sociales
          </Typography>

          <Typography
            color="blue-gray"
            className="font-light text-[20px]"
          >

            Peru Destino Seguro S.R.L
          </Typography>
          <div className="flex flex-row gap-x-3 mt-4">
            <SocialIcon bgColor="#D20000" url={data.youtube} />
            <SocialIcon bgColor="#D20000" url={data.facebook} />
            <SocialIcon bgColor="#D20000" url={data.instagram} />
            <SocialIcon bgColor="#D20000" url={data.tiktok} />
            <SocialIcon bgColor="#D20000" network="whatsapp" url={data.whatsapp} />
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-x-8 lg:text-right text-center leading-none">
          <li>
            <Typography
              color="blue-gray"
              className=" leading-normal"
            >

              RAZON SOCIAL:
            </Typography>
            <Typography
              color="blue-gray"
              className="font-normal leading-normal"
            >
              {data.razonSocial}
            </Typography>
            <Typography
              color="blue-gray"
              className=" leading-normal"
            >
              Direccion:
            </Typography>

            <Typography
              color="blue-gray"
              className=" leading-normal"
            >
              <MapPinIcon className="w-5 pb-2 inline-block " color="#D20000" />   Av. Tacna Nro. 168 - Cusco
            </Typography>


            <Typography
              color="blue-gray"
              className=" leading-normal"
            >
              Telefono
            </Typography>
            {data.telefonos.map((ele) => <Typography
              color="blue-gray"
              className="font-normal leading-normal"
            >

              <PhoneIcon className="w-5 pb-2 inline-block" color="#D20000" />  {ele.numero}
            </Typography>
            )}

            <Typography
              color="blue-gray"
              className=" leading-normal"
            >
              Correo Electronico:
            </Typography>

            <Typography
              color="blue-gray"
              className=" leading-normal"
            >
              <EnvelopeIcon className="w-5 pb-1 inline-block" color="#D20000" />     {data.email}
            </Typography>
          </li>
        </ul>
      </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />

      <div className="w-full flex flex-col justify-center">
        <div>
        <Typography color="blue-gray" className="text-center font-normal">
            Derechos Reservados - Perú Destino Seguro 2024
        </Typography>
        <Typography color="blue-gray" className="text-center font-normal">
                Desarrollado por: 
            {/* <img src="" /> */}
          </Typography>
        {/* <img src="/tarjetas.png" alt="logo-ct" className="w-2/12" /> */}
        </div>
      </div>
    </footer>
  );
}
