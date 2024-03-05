"use client"
import Brain from "@/components/brain"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react"

const AboutPage = () => {

const containerRef = useRef();

const {scrollYProgress} = useScroll({container:containerRef});

const skillRef = useRef();
const isSkillRefInView = useInView(skillRef, {once:true}, {margin:"-100px"});

const experienceRef = useRef();
const isExperienceRefInView = useInView(experienceRef, {once:true}, {margin:"-100px"});

 return (
   <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
      {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-10 flex flex-col gap-24 md:gap-22 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, mollitia magnam? Necessitatibus velit totam eligendi itaque dolorum iste minima explicabo, voluptatem a odio harum repudiandae. Dolore voluptatibus voluptas debitis. Est!</p>
            <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem perferendis corporis facilis repudiandae unde odit accusamus et</span>
            <div className="self-end"></div>
            {/* SCROLL DOWN */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 className="font-bold text-2xl" initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} >SKILLS</motion.h1>
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} className="flex gap-4 flex-wrap">
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML5</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS3</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Angular</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bootstrap</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
          </motion.div>
          {/* SCROLL DOWN */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:0} : {}} className="">
              {/* EXPERIENCE ITEMS 1 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Full Stack Developer</div>
                <div className="p-3 text-sm italic">Development of Web pages</div>
                <div className="p-3 text-purple-600 text-sm font-semibold">2022 - 2024</div>
                <div className="p1 rounded bg-white text-sm font-semibold w-fit">Capgemini</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE ITEMS 2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Full Stack Developer</div>
                <div className="p-3 text-sm italic">Development of Web pages</div>
                <div className="p-3 text-purple-600 text-sm font-semibold">2022 - 2024</div>
                <div className="p1 rounded bg-white text-sm font-semibold w-fit">Capgemini</div>
                </div>
              </div>
              {/* EXPERIENCE ITEMS 3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Full Stack Developer</div>
                <div className="p-3 text-sm italic">Development of Web pages</div>
                <div className="p-3 text-purple-600 text-sm font-semibold">2022 - 2024</div>
                <div className="p1 rounded bg-white text-sm font-semibold w-fit">Capgemini</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
            </div>
        </div>
      {/* SVG CONTAINER */}
        <div className=" bg-red-500 hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
           <Brain scrollYProgress={scrollYProgress}/> 
        </div>
      </div>
   </motion.div>
 )
}

export default AboutPage