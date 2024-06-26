"use client"
import Brain from "@/components/brain"
import { motion, useInView, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const AboutPage = () => {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true }, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { once: true }, { margin: "-100px" });

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="lg:w-2/3 xl:w-1/2 flex flex-col gap-24 md:gap-22 lg:gap-48 xl:gap-64 pt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:pr-0">
          {/* BIOGRAPHY */}
          <div className="flex flex-col justify-center gap-12">
            {/* IMAGE */}
            <div className="h-[10rem] w-[10rem] relative justify-center m-auto">
              <Image src="https://raw.githubusercontent.com/karenfggutierrez/Images/main/ProfilePicture.jpg" alt="Profile picture" fill priority className="absolute rounded-full" />
            </div>
            <h1 className="items-center justify-center text-center font-bold text-2xl">ABOUT ME</h1>
            <p className="text-justify text-lg">I am a proactive and dedicated Front End Developer, who focuses on solving problems applying creativity. I am interested in keep on growing in this field, and being in constant learning. My main skills are JavaScript, React.js, HTML and CSS</p>
            <span className="italic">I studied Nanotechnology engineering, and I also completed a Full Stack Developer Bootcamp. I consider myself a technology enthusiast.</span>
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
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            <motion.h1 className="font-bold text-2xl" initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} >SKILLS</motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} className="flex flex-wrap gap-4">
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
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JSX</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SASS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git & Github</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Visual Studio Code</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">UX/UI</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Spring & Springboot</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JSON</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Eclipse</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Intellij</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">API Rest</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">API Soap</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SVN</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Scrum</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Azure DevOps</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">AWS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Postman</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Swagger</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Microsoft 365</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySQL</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Oracle Database</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Razor</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Linux Shell</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js & NPM</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Apache Maven</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Bitbucket</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Confluence</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jira</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Jenkins</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Microservices</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Sonarqube</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Trello</div>
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
          <div className="flex flex-col justify-center gap-12 pb-48" ref={experienceRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} className="">
              {/* EXPERIENCE ITEMS 1 */}
              <div className="h-48 flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Full Stack Developer</div>
                  <div className="text-sm p-3 italic">Development of Web pages</div>
                  <div className="text-sm text-purple-600 font-semibold p-3">2022 - 2024</div>
                  <div className="w-fit text-sm font-semibold bg-white p1 rounded">Capgemini</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="h-full w-1 relative bg-gray-600 rounded">
                    <div className="h-5 w-5 absolute bg-white rounded-full ring-4 ring-blue-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE ITEMS 2 */}
              <div className="h-48 flex justify-between">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="h-full w-1 relative bg-gray-600 rounded">
                    <div className="h-5 w-5 absolute bg-white rounded-full ring-4 ring-blue-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Continuous Improvement Technician</div>
                  <div className="text-sm p-3 italic">Lean Methodology, metrics creation, etc.</div>
                  <div className="text-sm text-purple-600 font-semibold p-3">2020 - 2022</div>
                  <div className="w-fit text-sm bg-white font-semibold p1 rounded">Plexus Corp.</div>
                </div>
              </div>
              {/* EXPERIENCE ITEMS 3 */}
              <div className="h-48 flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Chef & Waitress</div>
                  <div className="text-sm p-3 italic">Customer service and food preparation</div>
                  <div className="text-sm text-purple-600 font-semibold p-3">2016 - 2020</div>
                  <div className="w-fit text-sm bg-white font-semibold p1 rounded">Hacienda del Sol Hotel</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  <div className="h-full w-1 relative bg-gray-600 rounded">
                    <div className="h-5 w-5 absolute bg-white rounded-full ring-4 ring-blue-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="w-1/2 xl:w-1/2 hidden lg:block sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage