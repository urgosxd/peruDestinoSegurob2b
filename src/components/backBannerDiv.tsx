'use client'
import { useMobile } from "@/hooks/useMobile";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from 'next/image'

interface Props {
  imgSrc: string
  title: string
  duracion: string
  link1: string
  link2: string
  link3: string
}
export default function BackBannerDiv({ imgSrc, title, duracion, link1, link2, link3 }: Props) {
  console.log(imgSrc);

  let [dias, noches] = duracion.split("-") 
  dias = dias + " Dias"
  noches = noches + " Noches"

  const isMobile = useMobile()
  return (

    <div className="relative h-[50vh]  lg:h-[70vh] w-full">
      <Image src={imgSrc} sizes="(max-width: 768px) 50vw, 100vw" quality={100} alt="ims" objectFit="cover" priority fill className="lg:h-full lg:w-full"></Image>
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20"></div>
      <div className="absolute h-full w-full flex items-center lg:items-end">

        <div className="lg:h-[215px] w-full">
          <div className="flex px-10 lg:px-[60px] w-full h-full">
            <div className="lg:w-1/3 flex flex-col justify-center gap-y-5">
              <h1 className="mb-1 font-monse leading-[48px] lg:leading-[44px] w-fit text-left text-[40px] lg:text-[36px] font-bold text-white">{title}</h1>
              <p className="mb-3 font-semibold leading-[24px] w-fit text-left text-[16px] lg:text-[20px] bg bg-[#D20000] rounded-lg px-5 py-1 text-white"> {dias} - {noches} </p>
            </div>
            {!isMobile && <div className="lg:w-2/3 flex flex-row justify-end items-center gap-x-3">

              <a href={link1} target="_blank" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit" > Descargar Pdf</a>
              <a href={link2} target="_blank" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit">Descargar Word</a>
              <a href={link3} target="_blank" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4  font-semibold w-fit">Descargar Flyer</a>

            </div>
            }
          </div>
        </div>
      </div>
    </div>



    // <Card
    //   shadow={false}
    //   className="relative grid h-[640px] w-full items-end justify-center overflow-hidden text-center"
    // >
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="transparent"
    //     className={`absolute inset-0 m-0 w-full rounded-none`}
    //   // style={{backgroundImage: `url(${imgSrc})`}}
    //   >
    //     <Image src={imgSrc} fill={true} priority alt="aeo" className="rounded-none" />
    //     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20" />
    //     
    //   </CardHeader>
    //   <CardBody className="relative p-0 pr-0  pt-0">
    //     <div className="flex flex-col w-[98vw] px-16">
    //       <div>
    //         <Typography
    //           variant="h4"
    //           color="white"
    //           className="mb-1 font-monse leading-[44px] w-fit text-left text-[36px] font-bold"
    //         >
    //           {txt}
    //         </Typography>
    //       </div>
    //       <div className="flex flex-row mb-10">
    //         <div className="w-1/2">
    //           <Typography
    //             as="p"
    //             color="white"
    //             className="mb-3 font-semibold leading-[24px] w-fit text-left lg:text-[20px] bg bg-[#D20000] rounded-lg px-5 py-1"
    //           >
    //             {dias} - {noches}
    //           </Typography>

    //         </div>
    //         <div className="w-1/2 flex flex-row justify-center gap-x-3 pl-16">

    //          <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit" > Descargar Pdf</Typography>
    //          <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit">Descargar Word</Typography>
    //          <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4  font-semibold w-fit">Descargar Flyer</Typography>
    //         </div>
    //       </div>

    //     </div>

    //   </CardBody>
    // </Card>
  );
}
