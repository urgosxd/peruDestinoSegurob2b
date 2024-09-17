'use client'
import React from "react"
import {
  Collapse,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useMobile } from "@/hooks/useMobile";

interface miniProps {
  question: string
  answer: string
  paquete: boolean
  mobile: boolean
  idxx: number
}

function CollapseDefault({ question, answer, paquete,mobile ,idxx }: miniProps) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  console.log(question)
  return (
    <div key={idxx} className="w-[97%] lg:w-[90%] mx-auto">
      <div aria-label="close-Open" className={`px-7 lg:px-8 border-solid border border-gray-300 ${(paquete || mobile) ? "rounded-2xl" : "rounded-none"} ${paquete ? "font-bold" : "font-normal"} py-4 ${(paquete || !mobile) ? mobile ? "text-[12px]":"" : "text-[12px]"} w-full ${(paquete) ? "text-gray-600" : "text-[#000000]"} flex justify-between text-left ${(paquete || mobile )? "bg-gray-200 capitalize" : "bg-white"}`} onClick={toggleOpen}> <div className="flex flex-row gap-x-3">
        {(!paquete && !mobile)  && <Image src="/nubesita.svg" alt="aa" width="25" height="25" />}{(!paquete || mobile) && (idxx + " .")} {question}
      </div>{open ? <ChevronDownIcon className="w-3 inline-block" />
        : <ChevronUpIcon className="w-3 inline-block" />}</div>
      <Collapse open={open}>
        <Card className="rounded-none">
          <CardBody>
            <Typography as="div">
              <div dangerouslySetInnerHTML={{ __html: answer }} className="tourQWERTY"/>
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

interface Props {
  questionAnswer: { question: string, answer: string }[]
  paquete?: boolean
  mobile?: boolean
}

export default function Questions({ questionAnswer, paquete = false }: Props) {

  const isMobile = useMobile()
  return (
    <div className={`flex flex-col w-[90%] mx-auto ${(paquete || isMobile) ? "gap-y-5" : ""}`}>
      {questionAnswer.map((ele, idx) => (<CollapseDefault question={ele.question} answer={ele.answer} paquete={paquete} mobile={isMobile} idxx={idx + 1} />))}
    </div>
  )
}
