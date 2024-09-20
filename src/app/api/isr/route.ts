import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";



const lngObject:{[keys:string]:string} = {"English": "en","Spanish": "es"}

const tourObject:{[keys:string]:string} = {"English": "destinations","Spanish": "destinos"}
const salidasObject:{[keys:string]:string} = {"English": "destinations","Spanish": "salidasgrupales"}


const nosotrosObject:{[keys:string]:string} = {"English": "about","Spanish": "nosotros"}
export async function POST(request: NextRequest) {
  // const secret = request.headers.get("secret");
  const document = await request.json();

  // if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
  //   return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  // }



  switch (document.sender) {
    case "Paquete":
      revalidatePath("/"+lngObject[document.lng as string]+"/")
      revalidatePath(`/${lngObject[document.lng as string]}/(dynamics-pages)/packages/[slug]`,"page")
      break;
    case "Tour":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+tourObject[document.lng]+"/")
      revalidatePath(`/${lngObject[document.lng as string]}/(dynamics-pages)/tour/[slug]`,"page")
      console.log("TOUR ENTROOO")
      break;
    case "Blog":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+"blog"+"/")
      revalidatePath(`/${lngObject[document.lng as string]}/(dynamics-pages)/blog/[slug]`,"page")

    case "SalidasGrupales":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+salidasObject[document.lng]+"/")
      break
    case "Inicio":
      revalidatePath("/"+lngObject[document.lng as string]+"/")
      break
    case "Nosotros":
      revalidatePath("/"+lngObject[document.lng as string]+"/"+nosotrosObject[document.lng]+"/")
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

  return NextResponse.json({
    "cache": `actualizado ${document.sender} 200`
  })}

export const revalidate = 0;
