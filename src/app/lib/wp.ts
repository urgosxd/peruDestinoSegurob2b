import axios from "axios"
// const API_URL = process.env.WORDPRESS_API_URL!!
const API_URL = "https://b2bcms.onrender.com/api/v2/"

async function fetchAPI(query = '', variable:string[] =[ ]) {
  // console.log(API_URL + "GAAAAAAAAAAAAAAa")
  const headers: any = { 'Content-Type': 'application/json' }

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers['authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  // }

  // WPGraphQL Plugin must be enabled

  if (variable.length > 0) {
    try {
      const res = await axios.get(API_URL + query + '?fields=' + variable.join(","))
      const data = await res.data
      return data
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
      }

    }



  } else {

    try {
      const res = await axios.get(API_URL + query )
      const data = await res.data
      return data
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message)
      }

    }


  }
}


// export async function getPreviewPost(id:string, idType = 'DATABASE_ID') {
//   const data = await fetchAPI(
//     `
//     query PreviewPost($id: ID!, $idType: PostIdType!) {
//       post(id: $id, idType: $idType) {
//         databaseId
//         slug
//         status
//       }
//     }`,
//     {
//       variables: { id, idType },
//     }
//   )
//   return data.post
// }

export async function getInicioPage() {
  const data = await fetchAPI('pages/inicio/4')
  return data
}

export async function getDestinos(variables:string[]){
  const data = await fetchAPI('snippets/destino/',variables)
  return data
}

export async function getPaquetes(variables:string[]){
  const data = await fetchAPI('sniPages/paquete/',variables)
  return data
}

export async function getPaqueteBySlug(id:number){
  const data = await fetchAPI(`sniPages/paquete/${id}`,[])
  return data
}

export async function getDataNumeros(variables:string[]){
  const data = await fetchAPI('snippets/dataNumeros',variables)
  return data
}

// export async function getAllPaquetes() {
//   const data = await fetchAPI('paquete/')
//   return data
// }
// export async function getAllDestinos() {
//   const data = await fetchAPI('destino/')
//   return data
// }
// export async function getAllImgCarousel() {
//   const data = await fetchAPI('imgcarousel/')
//   return data
// }
// export async function getAllPregFrecuentes() {
//   const data = await fetchAPI('pregfrecuente/')
//   return data
// }

export async function getNosotrosPage() {
  const data = await fetchAPI('pages/nosotros/7')
  return data
}

// export async function getPaqueteBySlug(slug: string) {
//   const data = await fetchAPI("paquete/", [`slug=${slug}`])
//   return data
// }
// export async function getContactoPage() {
//   const data = await fetchAPI('contacto_page/')
//   return data
// }
// export async function getBlogPage() {
//   const data = await fetchAPI('blog_page/')
//   return data
// }
// export async function getCalendarioPage() {
//   const data = await fetchAPI('calendario_page/')
//   return data
// }

// export async function get9Posts(page:number) {
//   const data = await fetchAPI('posts/',[`per_page=9`,`page=${page}`])
//   return data
// }
// export async function getPostBySlug(slug: string) {
//   const data = await fetchAPI("posts/", [`slug=${slug}`])
//   return data
// }
// export async function getDestinosPage() {
//   const data = await fetchAPI('destinos_page/')
//   return data
// }
// export async function getDestinoCusco() {
//   const data = await fetchAPI('destinos_cusco/')
//   return data
// }
// export async function getDestinoArequipa() {
//   const data = await fetchAPI('destinos_arequipa/')
//   return data
// }
// export async function getDestinoPuno() {
//   const data = await fetchAPI('destinos_puno/')
//   return data
// }
// export async function getAllSalidasGrupales() {
//   const data = await fetchAPI('salida_grupal/')
//   return data
//   }
// export async function getSalidasBySlug(slug:string) {
//   const data = await fetchAPI('salida_grupal/',[`slug=${slug}`])
//   return data
//   }
