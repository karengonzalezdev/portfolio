"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {

  return (

    <motion.div className="h-full overflow-scroll sm:overflow-scroll md:overflow-scroll lg:overflow-clip xl:overflow-clip" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row">
    {/* IMAGE CONTAINER */}
    <div className="h-1/3 lg:h-full lg:w-1/2 relative">
      <Image src="./background.gif" alt="BackgroundImage" fill priority className="border-5 border-black border-opacity-10 rounded-sm"/>
    </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 px-4 flex flex-col gap-5 items-center justify-center text-justify sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-5 sm:pt-5 md:pt-10 lg:pt-0 xl:pt-0 mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0">
          {/* TITLE */}
          <h1 className="text-2xl md:text-3xl lg:text-5.5xl xl:tex-6xl font-bold">
            Karen Gonzalez
          </h1>
          {/* DESC */}
          <p className="text-sm sm:text-lg md:text-xl">
            Welcome to my digital portfolio, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 pt-5">
          <Link href="/portfolio" className="btn btn-primary p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black font-bold">View My Work</Link>
          <Link href="/contact" className="btn btn-primary p-4 rounded-lg ring-1 ring-black hover:bg-white hover:text-black font-bold">Contact Me</Link>
          </div>
        </div>
      </div>
      </motion.div>
  )
};

export default Homepage;
