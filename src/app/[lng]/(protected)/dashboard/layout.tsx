import { NavigationDash } from "@/components/navigationDash";

export default function Layout({children}:{children:React.ReactNode}){
  return(
    <div>
      <NavigationDash children={children}/>
  </div>)
}
