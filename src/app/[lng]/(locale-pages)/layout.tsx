import { getDestinos } from "@/app/lib/wp"
import { Footer } from "@/components/footer"
import { NavbarDefault } from "@/components/navbar"
import Script from 'next/script'

export default async function Layout({children,params}:{children:React.ReactNode,params:any}){
  
  const destinos = await getDestinos({fields:"*"})

  const destinosObject = destinos.items.map((ele)=>(ele.name))
  return (
  <div>
    <NavbarDefault lng={params.lng} destinos={destinosObject}/>
            <main>
<Script dangerouslySetInnerHTML={{__html: `(function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.es/b15344011/crm/site_button/loader_7_qznmsh.js');`}}/>

              {children}
<Script dangerouslySetInnerHTML={{__html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"2ee835c433b36ed62861f1b5ba0aa7c8"})});`}}/>



            </main>
            <Footer/>
    </div>
  )
}
