import { Typography } from "@material-tailwind/react"
import React from "react"
import Link from 'next/link'

interface Props {
  txt:string
  setIdxNav:React.Dispatch<React.SetStateAction<number>>
  id:number
  idxNavState:number
}
export default function LiNav({txt,setIdxNav,idxNavState,id}:Props){
    return (<Typography
        as="li"
        color="blue-gray"
        className="flex justify-center pt-0 font-bold w-32"
      >
    <Link
    href={id==1 ? "/":"/"+txt +"/"}
      className="flex flex-col gap-x-2"
        onClick={()=>setIdxNav(id)}
    >
     <p  className="mt-7 p-2 text-center uppercase">
      {txt}
        </p>
        
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
