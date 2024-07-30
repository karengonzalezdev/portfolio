"use client"

import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink"
import { motion } from "framer-motion"

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/works", title: "Works" },
  { url: "/certificates", title: "Certificates" },
  { url: "/contact", title: "Contact" },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div className='h-full flex items-center justify-between text-xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LINKS */}
      <div className="w-1/3 hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="w-1/2 md:w-1/3 flex gap-2 sm:gap-4">
        <Link href="https://github.com/karengonzalezdev">
          <img src="./github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/karengonzalezdev">
          <img src="./linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
        <Link href="https://www.figma.com/@karenglezdev">
          <img src="./figma.png" alt="Figma" width={24} height={24} />
        </Link>
        <Link href="https://www.workana.com/freelancer/12400a56e29dde332e4b9b1c3bc20035">
          <img src="./workana.png" alt="Workana" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className="h-8 w-10 relative flex flex-col justify-between z-50" onClick={() => setOpen(!open)}>
          <motion.div variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="h-screen w-screen absolute flex flex-col items-center justify-center top-0 left-0 bg-black text-white gap-8 text-4xl z-40">
            {links.map(link => (
              <motion.div variants={listItemVariants} className="" key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>

  )
}

export default NavBar;