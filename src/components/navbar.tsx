'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon as UserCircleIconSolid } from '@heroicons/react/24/solid'
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
  Collapse,
  Card,
  CardBody,
} from "@material-tailwind/react";
// import {signIn } from "next-auth/react"
import { motion, AnimatePresence, Variants } from "framer-motion";
import LiNav from "./liNav";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useTranslation } from "../../i18next/client"
import { LocaleType } from '../../i18next/settings';


type Props = {
  lng: LocaleType
  destinos: string[]
}
export function NavbarDefault({ lng, destinos }: Props) {

  const { t } = useTranslation(lng, 'translation')
  const [openNav, setOpenNav] = React.useState(false);
  // const [tab,setTab] = React.useState(navNames[0]) 


  function getPath(str: string) {

    const first = str.slice(1)

    const sec = first.split("/")


    console.log("PATHH")
    console.log(str)
    console.log(sec)

    if (sec[1] !== "") {
      console.log('entroo')
      return t(sec[1])
    } else {

      return t('home')

    }



  }


  function getLinkbyName(lng: string, name: string) {

    let finalName = ""
    switch (name) {
      case t('home'):
        finalName = ""
        break;
      case t('destinations'):
        finalName = ""
        break;

      case t('blog'):
        finalName = "/blog?page=1"
        break;
      case t('groupOutings'):
        console.log(t('groupOutings'))
        console.log(name.replace(/ /g, ""))
        finalName = name.replace(/ /g, "").toLowerCase()
        break
      default:
        finalName = name
        break;
    }

    return `/${lng}/${finalName}`


  }



  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false),
  //   );
  // }, []);


  const [miniOpen, setMiniOpen] = useState(false)
  const toggleMiniOpen = () => {
    if (miniOpen == true) {
      setOpenNav(false)
    }
    setMiniOpen((prev) => !prev)

  }

  const navNames = [t('home'), t('destinations'), t('about'), "blog", t('groupOutings')]
  const lowerNavName = navNames.map(ele=> ele.toLowerCase().replace(/ /g, ""))
  console.log(lowerNavName)

  const currentPage = usePathname();
  const [idxNav, setIdxNav] = useState<number>(()=>lowerNavName.indexOf(getPath(currentPage)) + 1)
  const navList = navNames.map((ele, idx) => ele == t('destinations') ? (
    !openNav ? <Menu allowHover={openNav ? false : true} placement={openNav ? "right-end" : "bottom"}>
      <MenuHandler key={idx}>
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
      <MenuList >
        {destinos.map(ele => (<MenuItem><Link onClick={() => setIdxNav(2)} className="w-full block text-center" href={`/${lng}/${t('destinations')}/?city=${ele.toLowerCase()}`}>
          {ele}
        </Link>
        </MenuItem>))}
      </MenuList>
    </Menu>
      : <div className="">
        <div aria-label="close-Open" className=" font-bold mt-7 p-2 lg:text-center uppercase text-md lg:text-md text-gray-800" onClick={toggleMiniOpen} >
          {t('destinations')}
        </div>
        <Collapse open={miniOpen}>
          <Card className="rounded-none">

            <CardBody>
              {destinos.map(ele => (
                <Typography as="div" className="">
                  <Link onClick={() => { setIdxNav(2); setOpenNav(false) }} href={`/${lng}/${t('destinations')}/?city=${ele.toLowerCase()}`}>{ele} </Link>
                </Typography>

              ))
              }
            </CardBody>
          </Card>
        </Collapse>
      </div>

  ) : <LiNav key={idx} txt={ele} setIdxNav={setIdxNav} idxNavState={idxNav} id={idx + 1} lng={lng} func={getLinkbyName} setOpenNav={setOpenNav} />)
  // const mini = navNames.map(ele=>{[ele]:{}})
  const variants: Variants = {
    visible: (custom: number) => ({
      translateX: custom * 140
    })
  }
  return (
    <Navbar className="w-full   py-3 lg:px-0 lg:py-0" shadow={false}>
      <div className="container mx-auto flex items-center justify-center lg:justify-between text-blue-gray-900">

        <div className=" flex w-2/3 lg:w-3/12 flex-row justify-end lg:justify-center">
        <Link href="/" className="" onClick={() => setIdxNav(1)}>
          <img src="/pdsLogo.png" alt="logo-ct" className="w-[100px]" />
        </Link>
        </div>
        <div className="hidden lg:block flex mb-3">
          <ul className="mt-2 mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
            {navList}
          </ul>
          <motion.div custom={idxNav - 1} animate="visible" variants={variants} className="absolute w-28 h-1 bg bg-red-800 mx-2 mb-3" />
        </div>
        <div className="flex items-center gap-x-1 w-1/12">
          <Link href={"/api/auth/signin"}>

            <Button variant="text" size="lg" className="hidden lg:inline-block text-[#D20000] " >
              <UserCircleIcon className="w-5 inline-block" /> Entrar
            </Button>
          </Link>
          <Link href={`/${lng}/${t('contact')}`}>
            <Button variant="text" size="lg" className="hidden lg:inline-block bg bg-[#D20000] text-white p-2 px-2" >
              {t('contact')}
            </Button>
          </Link>

        </div>
        <div className="flex flex-row justify-end w-1/3 lg:w-0">
        <IconButton
          variant="text"
          className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      </div>
      <MobileNav open={openNav} >

        <ul className="container mx-auto ">
          <li className="flex items-center gap-x-1">
            <div className="flex flex-row justify-center items-center gap-x-1  w-screen mt-3">
              <Link href={"/api/auth/signin"} >

                <Button variant="text" size="lg" className="inline-block text-[#D20000] text-lg " >
                  <UserCircleIconSolid className="w-6 inline-block" /> Entrar
                </Button>
              </Link>
              <Link href={`/${lng}/${t('contact')}`}>
                <Button onClick={()=>setOpenNav(false)} variant="text" size="lg" className="inline-block rounded-[33px] bg bg-[#D20000] text-white p-2 px-2" >
                  {t('contact')}
                </Button>

              </Link>
            </div>
          </li>
          {navList}
        </ul>
      </MobileNav>
    </Navbar>
  );
}
