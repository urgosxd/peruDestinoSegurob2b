import { get9Posts, getPostBySlug } from "@/app/lib/wp"
import BackBanner from "@/components/bacBanner"
import parse,{Element} from "html-react-parser"
import Image from 'next/image'

// export const generateStaticParams = async ({params:{page}}:{params:{page:string}})=>{
//   // console.log(page)
//   // console.log(parseInt(page))
//   let posts:any[] =await  get9Posts(parseInt(page))
//   // console.log("GAAAAAAAAA")
//   // console.log(posts[0])
//   posts = posts.reverse()
//   return posts.map(ele=>({slug:ele.slug}))
// }

export default async function Post(props:any){
  const post:any[] = await getPostBySlug(props.params.slug)
  let data = post[0]
  const test = parse(data.content.rendered,{
    replace(domNode){
      if(domNode.nodeType == 1){
        if(domNode.name == "img"){
          const atributos = ((domNode as Element)).attributes
          return <Image src={atributos.filter(ele=>ele.name == "src")[0].value} alt="" width={600} height={400}/>
        }
      }
    }
  }) as JSX.Element[]
  

  return (
  <div className="w-[100vw] flex flex-col items-center">
      {test.map(Ele=>Ele)}
      {/* <div className="" dangerouslySetInnerHTML={{__html:data.content.rendered}}> */}
  </div>
  )
}

