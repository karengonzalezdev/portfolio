"use client"

import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
]

const NavBar = () => {
    const [open,setOpen] = useState(false)

    const topVariants = {
        
    }

 return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* LINKS */}
        <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link)=>(
        <NavLink link={link} key={link.title} />
    ))} 
        </div>
    {/* LOGO */}
    <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Karen</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
        </Link>
    </div>
    {/* SOCIAL */}
    <div className="hidden md:flex gap-4 w-1/3">
            <Link href="https://github.com/karenfggutierrez">
            <img src="/github.png" alt="GitHub" width={24} height={24}/>
            </Link>
            <Link href="https://www.linkedin.com/in/karenfggutierrez">
            <img src="/linkedin.png" alt="LinkedIn" width={24} height={24}/>
            </Link>
            <Link href="/">
            <img src="/figma.png" alt="Figma" width={24} height={24}/>
            </Link>
            <Link href="/">
            <img src="/workana.png" alt="Workana" width={24} height={24}/>
            </Link>
            <Link href="/">
            <img src="/upWork.png" alt="UpWork" width={24} height={24}/>
            </Link>
    </div>   
    {/* RESPONSIVE MENU */}
    <div className="md:hidden">
    {/* MENU BUTTON */}
    <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
        <motion.div className="w-10 h-1 bg-black rounded"></motion.div>
        <motion.div className="w-10 h-1 bg-black rounded"></motion.div>
        <motion.div className="w-10 h-1 bg-black rounded"></motion.div>
    </button>
    {/* MENU LIST */}
    { open && (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
    {links.map(link=>(
        <Link href={link.url} key={link.title}>{link.title}</Link>
    ))}
    </div>
    )}
    </div>
 </div>

)
}

export default NavBar;