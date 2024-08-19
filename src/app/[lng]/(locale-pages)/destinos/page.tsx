import { getDestinos, getTour } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import CardDestinos from "@/components/cardDestinos";
import { useParams } from "next/navigation";

type Props = {
  params:{
    lng:string
  },
  searchParams:any

}

// function capitalize(s:string){
//     return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
// };

export const fetchCache = 'force-no-store';
const miniTranslate:{[keys:string]:string} = {"es":"Destinos","en":"Destinys"}

export default async function Destino({params,searchParams}:Props) {


  const {city}  = searchParams


  const order = ["cusco","lima","arequipa","puno","ica"]
  const destinos = await getDestinos({fields:"*"})

  const destinosF = destinos.items.sort((a, b) => {
  return order.indexOf(a.name.toLowerCase()) - order.indexOf(b.name.toLowerCase());
  });

  const destinoBackground = destinosF.filter((ele)=> ele.name.toLowerCase() == city)[0]
  console.log(destinoBackground)
  const destinosObject = destinosF.map((ele)=>({id:ele.id,ciudad: ele.name.toLowerCase()}))


  // console.log(destinosObject.filter(ele=> ele.ciudad == capitalize(city)))
  const dataTours = await getTour({fields:"*",tourDestino:destinosObject.filter(ele=> ele.ciudad == city)[0].id,locale:params.lng})

  function capitalize(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return(
    <div className="w-[98vw] flex flex-col items-center">
      
      <BackBanner imgSrc={destinoBackground.backgroundDestinoPage.meta.download_url} txt={capitalize(city)}  />
       <h2 className="subtitle w-fit lg:text-[34px] text-3xl
        my-[50px] p-3 text-center font-semibold text-gray-800 mb-5 lg:mb-10"> 
        {miniTranslate[params.lng]}
    </h2>
      <div className="grid lg:grid-cols-3 lg:gap-3 justify-items-center w-10/12 grid-cols-1 lg:gap-x-24 lg:pl-0 gap-y-10">
       {dataTours.items.length > 0 && dataTours.items.map(ele=><CardDestinos imgSrc={ele.featuredImage.meta.download_url} txt1={ele.title} txt2={ele.precio} slug={ele.meta.slug} lng={params.lng}/>)}
      </div>

      {city}
    </div>
  )
}
