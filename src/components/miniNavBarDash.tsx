import React from "react"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {Bars3Icon} from '@heroicons/react/24/outline'
import Link from "next/link";
import { signOut } from "next-auth/react";
interface Props {
  action:()=>void
}
 
export function MiniNavbar({action}:Props) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography */}
      {/*   as="li" */}
      {/*   variant="small" */}
      {/*   color="blue-gray" */}
      {/*   className="flex items-center gap-x-2 p-1 font-medium" */}
      {/* > */}
      {/* </Typography> */}
    </ul>
  );
 
  return (
    <Navbar className=" px-4 py-2  lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="w-2/12 lg:w-2/12 flex flex-row">
          <Bars3Icon className="w-8" onClick={action}/><img src="/pdsLogo.png" alt="logo-ct" className="w-1/2" />
        </div>

        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <button className="lg:inline-block bg bg-[#D20000] text-white p-2 px-2" onClick={()=>signOut({callbackUrl:"/"})}> Salir </button>
       </div>
      </div>
          </Navbar>
  );
}
