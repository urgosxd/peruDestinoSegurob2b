'use client'
import React from "react"
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface miniProps {
  question: string
  answer: string
  paquete: boolean
}

function CollapseDefault({ question, answer,paquete }: miniProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  console.log(question)
  return (
    <div className="w-[90%] mx-auto">
      <div aria-label="close-Open" className={` ${paquete?"rounded-lg":"rounded-none"} ${paquete ? "font-bold":"font-semibold"} py-4 ${paquete?"text-xl":"text-md"} w-full ${paquete?"text-gray-600":"text-[#000000]"} flex justify-between text-left ${paquete ?"bg-gray-200":"bg-white"}`} onClick={toggleOpen}> <div className="flex flex-row gap-x-3"> <Image src="/nubesita.svg" alt="aa" width="25" height="25"/>{question} </div>{open ? <ChevronDownIcon className="w-3 inline-block" /> : <ChevronUpIcon className="w-3 inline-block" />}</div>
      <Collapse open={open}>
        <Card className="rounded-none">
          <CardBody>
            <Typography as="div">
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

interface Props {
  questionAnswer: {question:string,answer:string}[]
  paquete?: boolean
}

export default function Questions({ questionAnswer, paquete=false }: Props) {

  return (
    <div className={`flex flex-col w-[90%] ${paquete ? "gap-y-5" : ""}`}>
      {questionAnswer.map(ele => (<CollapseDefault question={ele.question} answer={ele.answer} paquete={paquete} />))}
    </div>
  )
}
