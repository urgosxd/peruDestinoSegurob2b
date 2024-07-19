'use client'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import React,{ useState } from "react";
import { MiniNavbar } from "./miniNavBarDash";
import {UserIcon,PlayCircleIcon,ArrowDownTrayIcon,CalendarIcon} from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from 'next/link'

const NamesNavbar2URL:{[key:string]:string} = {
  "Perfil":"/dashboard/perfil",
  "Mis Cursos":"/dashboard/misCursos",
  "Recursos": "/dashboard/recursos",
  "Eventos": "/dashboard/eventos",
}

export function NavigationDash({children}:{children:React.ReactNode}) {
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleDrawer = ()=> {
    if (open == true){
      closeDrawer()
    }else{
      openDrawer()
    }
  }

  const currentPage = usePathname();
  
  const currentSlug = (currentPage.split("/")[-1])
  const navNameICon = [{logo:<UserIcon className="w-5"/>,name:"Perfil"},{logo:<PlayCircleIcon className="w-5"/>,name:"Mis Cursos"},{logo:<ArrowDownTrayIcon className="w-5"/>,name:"Recursos"},{logo:<CalendarIcon className="w-5"/>,name:"Eventos"}]
  const navNames = navNameICon.map(ele=>ele.name)

  const [idxNav, setIdxNav] = useState<number>(navNames.indexOf(currentSlug)+1)
  

  
const variants: Variants = {
    visible: (custom: number) => ({
      translateY: custom * 47.5
    })
  }

 
  return (
    <div>
      <MiniNavbar action={toggleDrawer}/>
      <div className="flex flex-row">
      <Drawer open={open} onClose={()=>{}} overlay={false} className="top-22 static">
        <div className="flex flex-row">
        <motion.div  custom={idxNav} animate="visible" variants={variants} className="h-7 w-2 bg bg-[#D20000] mt-4"></motion.div>
        <List>
          {navNameICon.map((ele,idx)=>(
          
                <Link href={NamesNavbar2URL[ele.name]}>
          <ListItem key={idx} onClick={()=>setIdxNav(idx)} >
                <ListItemPrefix>
                  {ele.logo}
                </ListItemPrefix>
                  {ele.name}
            </ListItem>
            
              </Link>
          ))}
        </List>
          </div>
      </Drawer>
        
      {children}
      </div>
    </div>
  );
}
