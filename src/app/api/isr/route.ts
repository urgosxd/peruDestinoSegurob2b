import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";



const lngObject:{[keys:string]:string} = {"English": "en","Spanish": "es"}

const tourObject:{[keys:string]:string} = {"English": "destinations","Spanish": "destinos"}
const salidasObject:{[keys:string]:string} = {"English": "destinations","Spanish": "salidasgrupales"}
export async function POST(request: NextRequest) {
  // const secret = request.headers.get("secret");
  const document = await request.json();

  // if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
  //   return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  // }



  switch (document.sender) {
    case "Paquete":
      revalidatePath("/"+lngObject[document.lng as string]+"/")
      revalidatePath("/[lng]/(dynamics-pages)/packages/[slug]","page")
      break;
    case "Tour":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+tourObject[document.lng]+"/")
      revalidatePath("/[lng]/(dynamics-pages)/tour/[slug]","page")
      break;
    case "SalidasGrupales":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+salidasObject[document.lng]+"/")
      break
    default:
      break;
  }

  // This will revalidate any URL that matches the provided page file on the next page visit.
  // This will not invalidate pages beneath the specific page.
  // For example, /blog/[slug] won't invalidate /blog/[slug]/[author].

  // revalidatePath("/blog/[slug]", "page");
  // // or with route groups
  // revalidatePath("/(main)/post/[slug]", "page");

  // This will revalidate any URL that matches the provided layout file on the next page visit.
  // This will cause pages beneath with the same layout to revalidate on the next visit.
  // For example, in the above case, /blog/[slug]/[another] would also revalidate on the next visit.

  // revalidatePath("/blog/[slug]", "layout");
  // // or with route groups
  // revalidatePath("/(main)/post/[slug]", "layout");

  return new Response(`Revalidating ${document.sender}`, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
