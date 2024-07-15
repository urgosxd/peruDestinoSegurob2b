import { Typography } from "@material-tailwind/react"
import React from "react"
import Link from 'next/link'

interface Props {
  txt:string
  setIdxNav:React.Dispatch<React.SetStateAction<number>>
  id:number
  idxNavState:number
  lng:string
}

const NamesNavbar2URL:{[key:string]:string} = {
  "inicio":"/",
  "destinos":"/destinos",
  "nosotros": "/nosotros",
  "blog": "/blog?page=1",
  "contacto": "/contacto",
  "Salidas Grupales": "/salidasGrupales"

}

function getLinkbyName(lng:string,name:string){
  let finalName = ""
  switch (name) {
    case "inicio":
      finalName = "/"
      break;

    case "blog":
      finalName = "/blog?page=1"
      break;
    default:
      finalName = `/${name}`
      break;
  }


  return `/${lng}/${finalName}`


}
export default function LiNav({txt,setIdxNav,idxNavState,id,lng}:Props){
    return (<Typography
        as="li"
        color="blue-gray"
        className={`flex lg:justify-center justify-start pt-0 font-bold ${(txt == "Salidas Grupales") ? "w-50":"w-32"}`}
      >
    <Link
    href={getLinkbyName(lng,txt)}
    // href={NamesNavbar2URL[txt]}
      className="flex flex-col gap-x-2"
        onClick={()=>setIdxNav(id)}
    >
     <div  className="mt-7 p-2 lg:text-center uppercase text-md lg:text-md">
      {txt}
        </div>
        
      {/* {txt == idxNavState ? <motion.div  className="underline" layoutId="underline"/>:null} */}
    </Link>
      </Typography>)
}
// export default function LiNav({txt,setIdxNav,idxNavState,id}:Props){
//   return idxNavState == id ? (<Typography
//         as={Link}
//         href={id==1 ? "/":txt +"/"}
//         // variant="small"
//         color="blue-gray"
//         className="flex items-center gap-x-2 pt-0 font-bold "
//         onClick={()=>setIdxNav(id)}
//       >
//         <p  className="flex items-center border-solid my-7 
//         border-b-4 border-[#D20000] p-1 text-center uppercase">
//       {txt}
//         </p>
//       </Typography>)
//       : (<Typography
//         as={Link}
//         href={id==1 ? "/":txt +"/"}
//         // variant="small"
//         color="blue-gray"
//         className="flex items-center gap-x-2 pt-0 font-bold "
//         onClick={()=>setIdxNav(id)}
//       >
//         <p  className="my-7 p-4 text-center uppercase">
//       {txt}
//         </p>
//       </Typography>)

//     
//   
// }
