const API_URL = process.env.WORDPRESS_API_URL!!

async function fetchAPI(query = '',variable="xx") {
  const headers:any = { 'Content-Type': 'application/json' }

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers['authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  // }

  // WPGraphQL Plugin must be enabled

  if(variable !=  "xx"){
  const res = await fetch(API_URL+query+'?acf_format=standard&slug='+variable)
  const data = await res.json()
  if (data.errors) {
    console.error(data.errors)
    throw new Error('Failed to fetch API')
  }
  return data


  }else{
const res = await fetch(API_URL+query+'?acf_format=standard')
  const data = await res.json()
  if (data.errors) {
    console.error(data.errors)
    throw new Error('Failed to fetch API')
  }
  return data

  }
  console.log(API_URL+query+'?acf_format=standard');
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

export async function getAllPaquetes() {
  const data = await fetchAPI('paquete/')
  return data
}
export async function getAllDestinos() {
  const data = await fetchAPI('destino/')
  return data
}
export async function getAllImgCarousel(){
  const data = await fetchAPI('imgcarousel/')
  return data
}
export async function getAllPregFrecuentes(){
  const data = await fetchAPI('pregfrecuente/')
  return data
}

export async function getNosotrosPage(){
  const data = await fetchAPI('nosotros_page/')
  return data
}

export async function getPaqueteBySlug(slug:string){
  const data = await fetchAPI("paquete/",slug)
  return data
}
export async function getContactoPage(){
  const data = await fetchAPI('contacto/')
  return data
}
export async function getBlogPage(){
  const data = await fetchAPI('blog_page/')
  return data
}
