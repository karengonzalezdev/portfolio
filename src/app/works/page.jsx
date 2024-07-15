"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Cyberstudio",
    desc: "Photography studio Web page.",
    img: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/cyberstudio/HomePage.PNG?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://cyberstudio.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Technology Blog",
    desc: "Blog that includes all the programming knowledge I have acquired.",
    img: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/TechnologyBlog.PNG?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://karengonzalezdev.github.io/blog/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "SecondPrime",
    desc: "E-commerce dedicated to technology sales.",
    img: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/PageUpSecondPrime.PNG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://karengonzalezdev.github.io/SecondPrime/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Pokedex",
    desc: "Page for viewing Pokemons ans their information",
    img: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/Pokedex.PNG?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://pokedex-lovat-three.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Travel Agency",
    desc: "Project for a travel agency from a popular bank.",
    img: "https://raw.githubusercontent.com/karengonzalezdev/Images/main/principalTravelAgency.PNG?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://karengonzalezdev.github.io/TravelAgency/#/principal",
  },
];

const WorksPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="h-[calc(100vh-6rem)] w-screen flex items-center justify-center text-center text-8xl">
          My Works
        </div>
        <div className="h-screen sticky flex items-center top-0 gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col text-white gap-6">
                  <h1 className="font-bold text-xl md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="h-56 md:h-64 lg:h-350px xl:h-420px relative">
                    <Image src={item.img} alt="image" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-500px xl:w-600px lg:text-lg text-justify">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold md:p-4 lg:p-2 m-4 rounded">See Page</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen flex flex-col items-center justify-center text-center overflow-clip">
        <h1 className="text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="h-16 md:h-28 w-16 md:w-28 absolute flex items-end justify-center top-0 left-0 right-0 bottom-0 m-auto text-white rounded-lg"
          >
            <h1 className="bg-black text-sm sm:text-md md:text-xl">Hire Me</h1>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default WorksPage;