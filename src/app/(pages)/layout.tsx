import { Footer } from "@/components/footer"
import { NavbarDefault } from "@/components/navbar"

export default function Layout({children}:{children:React.ReactNode}){
  return (
  <div>
                <NavbarDefault/>
            <main>
              {children}
            </main>
            <Footer/>
    </div>
  )
}
