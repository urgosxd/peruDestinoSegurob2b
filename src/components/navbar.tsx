'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from "react"
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

  IconButton,
} from "@material-tailwind/react";
// import {signIn } from "next-auth/react"
import { motion, AnimatePresence, Variants } from "framer-motion";
import LiNav from "./liNav";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useTranslation } from "../../i18next/client"

function getPath(str: string) {
  if (str == "/") {
    return "inicio"
  }
  return str.substring(1)
}
type Props = {
  lng: string
  destinos: string[]
}
export function NavbarDefault({ lng, destinos }: Props) {
  console.log(lng)

  const { t } = useTranslation(lng, 'translation')
  console.log(t)
  const [openNav, setOpenNav] = React.useState(false);
  const navNames = [t('home'), t('destinations'), t('about'), "blog", "contacto", "Salidas Grupales"]
  console.log(navNames)
  // const [tab,setTab] = React.useState(navNames[0]) 


  function getLinkbyName(lng: string, name: string) {
    let finalName = ""
    switch (name) {
      case t('home'):
        finalName = "/"
        break;
      case t('destinations'):
        finalName = ""
        break;

      case t('blog'):
        finalName = "/blog?page=1"
        break;
      default:
        finalName = `/${name}`
        break;
    }


    return `/${lng}/${finalName}`


  }



  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  const currentPage = usePathname();
  const [idxNav, setIdxNav] = useState<number>(navNames.indexOf(getPath(currentPage)) + 1)
  // console.log(currentPage);
  const navList = navNames.map((ele, idx) => ele == t('destinations') ? (<Menu>
    <MenuHandler>
      <Typography
        as="li"
        color="blue-gray"
        className={`flex lg:justify-center justify-start pt-0 font-bold w-32 cursor-pointer`}
      >

        <div className="mt-7 p-2 lg:text-center uppercase text-md lg:text-md">
          {t('destinations')}
        </div>

        {/* {txt == idxNavState ? <motion.div  className="underline" layoutId="underline"/>:null} */}
      </Typography>
    </MenuHandler>
    <MenuList>
      {destinos.map(ele => (<MenuItem><Link className="w-full block" href={`/${lng}/${t('destinations')}/?city=${ele.toLowerCase()}`}>
        {ele}
      </Link> </MenuItem>))}
    </MenuList>
  </Menu>) : <LiNav key={idx} txt={ele} setIdxNav={setIdxNav} idxNavState={idxNav} id={idx + 1} lng={lng} func={getLinkbyName} />)
  // const mini = navNames.map(ele=>{[ele]:{}})
  const variants: Variants = {
    visible: (custom: number) => ({
      translateX: custom * 140
    })
  }
  return (
    <Navbar className="w-full mx-auto  py-3 lg:px-0 lg:py-0  " shadow={false}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

        <Link href="/" className="w-2/12 lg:w-1/12" onClick={() => setIdxNav(1)}>
          <img src="/pdsLogo.png" alt="logo-ct" className="w-full" />
        </Link>
        <div className="hidden lg:block flex mb-3">
          <ul className="mt-2 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
            {navList}
          </ul>
          <motion.div custom={idxNav - 1} animate="visible" variants={variants} className="absolute w-28 h-1 bg bg-red-800 mx-2 mb-3" />
        </div>
        <div className="flex items-center gap-x-1">
          <Link href={"/api/auth/signin"}>

            <Button variant="text" size="lg" className="hidden lg:inline-block text-[#D20000] " >
              <UserCircleIcon className="w-5 inline-block" /> Entrar
            </Button>
          </Link>
          <Button variant="text" size="lg" className="hidden lg:inline-block bg bg-[#D20000] text-white p-2 px-2" >
            Contactar
          </Button>

        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <ul className="container mx-auto ">
          {navList}
          <li className="flex items-center gap-x-1">

            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
          </li>
        </ul>
      </MobileNav>
    </Navbar>
  );
}
