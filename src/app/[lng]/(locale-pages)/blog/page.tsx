import DefaultPagination from "@/components/Pagination";
import { getAllBlogs, getBlog, getBlogPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import {CompleteGrid} from "@/components/grids";
import dynamic from "next/dynamic";
import react from "react"
import CardBlog from "@/components/cardBlog";

interface Props {
  searchParams:{[key:string]:string | string[] |undefined}
  params:{lng:string}
}

export default async function BlogPage({searchParams,params}:Props){


  const dataBlogPage = await getBlogPage({'fields':"*"})
  const page = typeof searchParams.page == 'string' ? Number(searchParams.page): 1

  const mainArticle = dataBlogPage.items[0].articuloPrincipal.id

  const subMainArticles = dataBlogPage.items[0].articulosRecomendados.map(ele=> ele.articuloPrincipal.id)

  const mainPosts = await getBlog({'fields':'*','sss':"articulosrec",'sender':[mainArticle].concat(subMainArticles).join(',')})

  const posts = await getBlog({'fields':'*','sss':"articulos",'sender':[mainArticle].concat(subMainArticles).join(',')})

  const initialAccumulator = 0

  const components = posts.items.reduce((acc, item, index) => {
    // Incrementa el acumulador cuando el índice es múltiplo de 4

   const addItemToRowEnd = (rowIndex:number, newItem) => {

    // Crear una copia profunda del array bidimensional
    const newArray2D = acc.components.map(row => [...row]);

    // Añadir el nuevo elemento al final del subarray en rowIndex
    newArray2D[rowIndex] = [...newArray2D[rowIndex], newItem];
    // Actualizar el estado con el nuevo array

    return (newArray2D);
  };

    const newAccumulator = (index + 1)% 5 === 0 ? acc.accumulator + 1 : acc.accumulator;

    const component = (
      <CardBlog ftImageSrc={item.background.meta.download_url} title={item.title} txtDescription={item.description} type={newAccumulator % 2 == 0 ? 1 : 2} slug={item.meta.slug} lng={params.lng}/>
    );
  

    switch (newAccumulator){
      case 0 :
      return {
      accumulator: newAccumulator,
      components: addItemToRowEnd(0,component),
    }   

    case 1:
      return {
      accumulator: newAccumulator,
      components: addItemToRowEnd(1,component),
    }  

      case 2:
      return {
      accumulator: newAccumulator,
      components: addItemToRowEnd(2,component),
    }  

    }


    // Retorna un nuevo objeto que acumula los componentes y el valor actualizado del acumulador
    return {
      accumulator: newAccumulator,
      components: [...acc.components, component],
    };
  }, { accumulator: initialAccumulator, components: [[],[],[]] });

  const gaaa = await getAllBlogs()

  console.log(gaaa.items.map(ele=>(ele.meta)))

  return (
    <div className="flex flex-col w-[98vw] items-center">

      <BackBanner imgSrc={dataBlogPage.items[0].background.meta.download_url} txt={dataBlogPage.items[0].title} />
      <div className="flex lg:flex-row flex-col mt-10 w-full justify-center">
        <div className="lg:w-1/2 w-full ">
        {<CardBlog ftImageSrc={mainPosts.items[0].background.meta.download_url} title={mainPosts.items[0].title} txtDescription={mainPosts.items[0].description} type={4} slug={mainPosts.items[0].meta.slug} lng={params.lng} />}
        </div>
      <div className="flex flex-col lg:gap-0 lg:w-1/2 w-full justify-items-start grid-cols-1 lg:gap-x-10 lg:pl-0 gap-y-5">
      <h2 className="subtitle w-[90%] lg:w-fit lg:text-[24px] text-[14px] lg:text-3xl p-3 lg:text-center text-left font-semibold text-gray-800 mx-auto">
        Articulos Destacados
      </h2>
        {mainPosts.items.slice(1,mainPosts.items.lenght).map(item=><CardBlog ftImageSrc={item.background.meta.download_url} title={item.title} txtDescription={item.description} type={3} slug={item.meta.slug}/>)}
      </div>

      </div>
      
      <div className="grid lg:grid-cols-4 lg:gap-3 justify-items-center w-10/12 grid-cols-1 lg:gap-x-10 lg:pl-0 gap-y-10 mt-10">
        {components.components[0]}
        {/* {posts.items.map(ele=><CardBlog ftImageSrc={ele.background.meta.download_url} title={ele.title} txtDescription={ele.description} type={1} slug="aoeaoe"/>)} */}
      </div>
       <div className="grid lg:grid-cols-2 lg:gap-3 justify-items-center w-10/12 grid-cols-1 lg:gap-x-10 lg:pl-0 gap-y-10 mt-10">
        {components.components[1]}
        {/* {posts.items.map(ele=><CardBlog ftImageSrc={ele.background.meta.download_url} title={ele.title} txtDescription={ele.description} type={1} slug="aoeaoe"/>)} */}
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-3 justify-items-center w-10/12 grid-cols-1 lg:gap-x-10 lg:pl-0 gap-y-10 mt-10">
        {components.components[2]}
        {/* {posts.items.map(ele=><CardBlog ftImageSrc={ele.background.meta.download_url} title={ele.title} txtDescription={ele.description} type={1} slug="aoeaoe"/>)} */}
      </div>
      
      {/* <BackBanner imgSrc={blogUnico.acf.imgback} txt="Blog" /> */}
      {/* <DefaultPagination active={page}/> */}
      {/* <CompleteGrid data={posts}/> */}

    </div>
  )
}
export const metadata = {
  title: "Blog Peru Destino Seguro",
  description: "**",
}
