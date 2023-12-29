import DefaultPagination from "@/components/Pagination";
import { get9Posts, getBlogPage, getContactoPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import {CompleteGrid} from "@/components/grids";
import dynamic from "next/dynamic";
import react from "react"

interface Props {
  searchParams:{[key:string]:string | string[] |undefined}
}

export default async function BlogPage({searchParams}:Props){

  const page = typeof searchParams.page == 'string' ? Number(searchParams.page): 1

  let posts: any[] = await get9Posts(page)
    const data: any[] = await getBlogPage()
  const blogUnico = data[0]


  // posts = posts.reverse()
  
  // const gridsDinamic = []
  
  // const CompoDinamic = dynamic(()=>import('../../components/grids').then(ele=>ele.CompleteGridClientCompo))
  // for (let inde = 2; inde < 8; inde++) {
  //   gridsDinamic.push(<CompoDinamic idx={inde}/>);
  // }
  // const grids = [ <CompleteGrid data={posts}/>].concat(gridsDinamic)
  return (
  <div className="flex flex-col w-[98vw] items-center">
      <BackBanner imgSrc={blogUnico.acf.imgback} txt="Blog" />
        <CompleteGrid data={posts}/>
      <DefaultPagination active={page}/>
      </div>
  )
}
