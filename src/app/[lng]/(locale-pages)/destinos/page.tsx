import { useParams } from "next/navigation";

type Props = {
  params:{
    lng:string
  },
  searchParams:any

}
export default async function Destino({params,searchParams}) {


  const {city}  = searchParams

  console.log(searchParams)
  return(
    <div>
      {city}
    </div>
  )
}
