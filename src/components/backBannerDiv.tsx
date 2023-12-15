'use client'
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
  txt: string
  time: string
}
export default function BackBannerDiv({ imgSrc, txt, time }: Props) {
  console.log(imgSrc);
    
  let [dias,noches] = time.split("-")
  dias = dias + " Dias"
  noches = noches + " Noches"
  

  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 w-full rounded-none`}
      // style={{backgroundImage: `url(${imgSrc})`}}
      >
        <Image src={imgSrc} fill={true} priority alt="aeo" className="rounded-none" />

        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/20" />
      </CardHeader>
      <CardBody className="relative p-0 pr-0  pt-0">
        <div className="flex flex-col w-[98vw] px-16">
          <div>
            <Typography
              variant="h4"
              color="white"
              className="mb-1 font-bold` leading-[1.5] w-fit text-left text-6xl font-bold"
            >
              {txt}
            </Typography>
          </div>
          <div className="flex flex-row mb-10">
            <div className="w-1/2">
              <Typography
                as="p"
                color="white"
                className="mb-3 font-bold` leading-[1.5] w-fit text-left text-xl bg bg-[#D20000] font-normal rounded-lg px-5"
              >
                {dias} - {noches}
              </Typography>

            </div>
            <div className="w-1/2 flex flex-row justify-center gap-x-3 pl-16">

             <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit" > Descargar Pdf</Typography>
             <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4 font-semibold w-fit">Descargar Word</Typography>
             <Typography as="p" className="tracking-wide text-lg text-[#D20000] bg bg-white h-8 rounded-full px-4  font-semibold w-fit">Compartir</Typography>
            </div>
          </div>

        </div>

      </CardBody>
    </Card>
  );
}
