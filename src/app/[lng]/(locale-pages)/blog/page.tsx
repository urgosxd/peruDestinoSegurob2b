import DefaultPagination from "@/components/Pagination";
import { getBlog, getBlogPage } from "@/app/lib/wp";
import BackBanner from "@/components/bacBanner";
import {CompleteGrid} from "@/components/grids";
import dynamic from "next/dynamic";
import react from "react"
import CardBlog from "@/components/cardBlog";

interface Props {
  searchParams:{[key:string]:string | string[] |undefined}
}

export default async function BlogPage({searchParams}:Props){


  const dataBlogPage = await getBlogPage({'fields':"*"})
  const page = typeof searchParams.page == 'string' ? Number(searchParams.page): 1

  const mainArticle = dataBlogPage.items[0].articuloPrincipal.id
  const subMainArticles = dataBlogPage.items[0].articulosRecomendados.map(ele=> ele.articuloPrincipal.id)

  const mainPosts = await getBlog({'sss':"articulosrec",'sender':[mainArticle].concat(subMainArticles).join(',')})

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
      <CardBlog ftImageSrc={item.background.meta.download_url} title={item.title} txtDescription={item.description} type={newAccumulator % 2 == 0 ? 1 : 2} slug="aoeaoe"/>
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


  return (
    <div className="flex flex-col w-[98vw] items-center">

      <BackBanner imgSrc={dataBlogPage.items[0].background.meta.download_url} txt={dataBlogPage.items[0].title} />

      <div className="grid lg:grid-cols-4 lg:gap-3 justify-items-center w-10/12 grid-cols-1 lg:gap-x-10 lg:pl-0 gap-y-10 mt-10">
        {components.components[0]}
        {components.components[1]}
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
