'use client'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon,XMarkIcon } from '@heroicons/react/24/outline'

export default function Cartita({inclu,exclu}:{inclu:string[],exclu:string[]}){
  return <Card className="mt-6 w-46 ">
      <CardBody>
      <Typography as="h3" className="text-[#808080] font-semibold mb-3">
        Incluido
      </Typography>
      {
    inclu.map(ele=>(<Typography as="p"  className="lg:mb-2 font-ligth text-[14px] lg:text-sm">
       <CheckIcon className="w-3 inline-block" color="#D20000"/> {ele}
        </Typography>
))
    }
      
      <Typography as="h3" className="text-[#808080] font-semibold mb-3">
        Excluido
      </Typography>
      {exclu.map(ele=>(
<Typography as="p" className="lg:mb-2 font-ligth text-[14px] lg:text-sm">
       <XMarkIcon className="w-3 inline-block" color="#D20000"/> {ele}
        </Typography>

      ))}
              </CardBody>
    </Card>
}
