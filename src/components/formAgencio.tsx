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

    <form className="lg:mt-9 mt-3 mb-2 w-full max-w-screen-lg pr-10">
      <div className="mb-1 flex flex-col lg:gap-6 gap-2 justify-content">
       <Button className="mt-6 text-white bg-[#D20000] lg:text-xl text-lg !px-3 w-24 lg:w-2/4" >
          <Link href={`/${lng}/contactar`}>
          Contactar
          </Link>
        </Button>
      </div>
    </form>
  )
}

