'use client'
import React from "react"
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { ChevronUpIcon,ChevronDownIcon } from '@heroicons/react/24/solid'

interface miniProps {
question:string
answer:string
}

function CollapseDefault({question,answer}:miniProps) {
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
 
  return (
    <div className="w-full items-left">
      <Button className="rounded-none py-4 text-left w-full bg-white text-gray-900 flex justify-between" onClick={toggleOpen}>{question}{open ? <ChevronDownIcon className="w-3 inline-block"/>:<ChevronUpIcon className="w-3 inline-block"/> }</Button>
      <Collapse open={open}>
        <Card className="rounded-none ">
          <CardBody>
            <Typography>
              {answer}
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

interface Props{
questionAnswer:miniProps[]
}

export default function Questions({questionAnswer}:Props){
  
  return (
  <div className="flex flex-col items-center">
      {questionAnswer.map(ele=>(<CollapseDefault question={ele.question} answer={ele.answer}/>))}
    </div>
  )
}
