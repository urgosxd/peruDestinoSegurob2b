'use client'
import { get9Posts } from "@/app/lib/wp"
import CardBlog from "./cardBlog"

interface PropsChild {
  data:any[]
}

const Gaa = ({ga}:any)=>{
  return(
  <div>
      {ga.title}
    </div>
  )
}

const TopGrid = ({data}:PropsChild) => {
    console.log(data)
  return (
    <div className="containerTop px-5">
      <div className="one p-10"><CardBlog title={data[0].title.rendered} ftImageSrc={data[0].featured_media_src_url} txtDescription={data[0].excerpt.rendered} type={1} slug={data[0].slug}/></div>
      <div className="two p-10"><CardBlog  title={data[1].title.rendered} ftImageSrc={data[1].featured_media_src_url} txtDescription={data[1].excerpt.rendered} type={1} slug={data[1].slug}/></div>
      <div className="three flex p-10"> <CardBlog title={data[2].title.rendered}  ftImageSrc={data[2].featured_media_src_url} txtDescription={data[2].excerpt.rendered} type={1} slug={data[2].slug}/></div>
    </div>
  ) 
}


const MidGrid = ({data}:PropsChild) => {
  return (
    <div className="containerMid px-5">
      <div className="gaaaaMid px-10"> <CardBlog  title={data[0].title.rendered} ftImageSrc={data[0].featured_media_src_url} txtDescription={data[0].excerpt.rendered} type={3} slug={data[0].slug}/></div>
      <div className="minigaMid p-5"> <CardBlog  title={data[1].title.rendered} ftImageSrc={data[1].featured_media_src_url} txtDescription={data[1].excerpt.rendered} type={2} slug={data[1].slug}/></div>
      <div className="midgaMid p-5"> <CardBlog  title={data[2].title.rendered} ftImageSrc={data[2].featured_media_src_url} txtDescription={data[2].excerpt.rendered} type={2} slug={data[2].slug}/></div>
    </div>
  )
}

const BotGrid = ({data}:PropsChild) => {
  return (
    <div className="containerBot px-5">
      <div className="minigaBot p-5 px-10">   <CardBlog  title={data[0].title.rendered} ftImageSrc={data[0].featured_media_src_url} txtDescription={data[0].excerpt.rendered} type={2} slug={data[0].slug}/></div>
      <div className="midgaBot p-5 px-10">   <CardBlog  title={data[1].title.rendered} ftImageSrc={data[1].featured_media_src_url} txtDescription={data[1].excerpt.rendered} type={2} slug={data[1].slug}/></div>
      <div className="gaaaaBot px-10">  <CardBlog  title={data[2].title.rendered} ftImageSrc={data[2].featured_media_src_url} txtDescription={data[2].excerpt.rendered} type={3} slug={data[2].slug}/></div>
    </div>
  )
}
interface Props {
  
  data:any[]
}

export function CompleteGrid({data}:Props){

  return(
    <div className="flex flex-col justify-items">
  <TopGrid data={[data[0],data[1],data[2]]}/>
  <MidGrid data={[data[3],data[4],data[5]]}/>
  <BotGrid data={[data[6],data[7],data[8]]}/>
    </div>
  ) 

}


interface PropsComp {
  idx:number
}

export async function CompleteGridClientCompo({data}:Props){

  // let posts:any[] = await get9Posts(idx)
   // posts = posts.reverse()
  // console.log(posts)
  // posts = posts.map((ele)=>{
  //   return {
  //     slug:ele.slug,
  //     content:ele.content.rendered,
  //     title:ele.title.rendered
  //   }
  // })
  
return(
    <div>
  <TopGrid data={[data[0],data[1],data[2]]}/>
  <MidGrid data={[data[3],data[4],data[5]]}/>
  <BotGrid data={[data[6],data[7],data[8]]}/>
    </div>
  )
}



