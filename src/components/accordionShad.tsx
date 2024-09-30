'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useMobile } from "@/hooks/useMobile"
import Image from "next/image"

interface Props {
  questionAnswer: { question: string, answer: string }[]
  paquete?: boolean
}

export const AccordionShad = ({ questionAnswer, paquete = false }: Props) => {

  const isMobile = useMobile()

  return (
    <Accordion type="single" collapsible className="w-full">
      {questionAnswer.map((ele, idx) => (
        <AccordionItem value={`item-${idx}`}>
          <AccordionTrigger className="mx-10 lg:mx-28 ">
          <div className="flex gap-x-4 text-start">
            {(!paquete && !isMobile) && <Image src="/nubesita.svg" alt="aa" width="25" height="25" className="inline-block " />}
            {(!paquete || isMobile) ? (idx+1) + " ." + ele.question : ele.question}
          </div>
        </AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: ele.answer }} className="tourQWERTY" />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
