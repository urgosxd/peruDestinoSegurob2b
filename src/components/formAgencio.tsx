'use client'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";
import Link from "next/link";

interface Props {
  lng: string
}
export default function AgenciaForm({lng}:Props) {
  return (

    <form className="lg:mt-3 mt-3 mb-2 w-full max-w-screen-lg pr-10">
      <div className="mb-1 flex flex-col lg:gap-6 gap-2 justify-content">
       <Button className=" text-white bg-[#D20000] lg:text-xl text-lg !px-0 w-fit lg:w-2/4" >
          <Link href={`/${lng}/contactar`} className="w-full block px-5">
          Contactar
          </Link>
        </Button>
      </div>
    </form>
  )
}

