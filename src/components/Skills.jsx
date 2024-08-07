"use client";
import React from "react";
import Card from "../components/Card";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import ProjectCards from "./ProjectCards";
import Projects from "./Projects";

const frontendData = [
  { title: "HTML5", icon: <FaHtml5 /> },
  { title: "CSS3", icon: <FaCss3Alt /> },
  { title: "React", icon: <FaReact /> },
  { title: "JavaScript", icon: <IoLogoJavascript /> },
  { title: "Tailwind", icon: <BiLogoTailwindCss /> },
  { title: "Bootstrap", icon: <FaBootstrap /> },
  { title: "Figma", icon: <FaFigma /> },
  { title: "Next.js" },
];

const versionControlData = [
  { title: "Git", icon: <FaGitAlt /> },
  { title: "GitHub", icon: <FaGithub /> },
];

const textVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="grid min-h-screen bg-pink-200 lg:p-16 p-2 md:px-20 text-black "  id="skills">
      <div className="mx-auto">
        <div className="max-w-screen-lg w-[70vw]">
          <h2 className="lg:text-3xl text-xl text-black font-bold mb-2">
            Skills
          </h2>

          <h5
            ref={ref}
            className="my-0 text-black lg:text-2xl lg:p-3 text-l md:text-xl ml-[15px] lg:w-[700px] lg:h-[150px] h-[fill] py-10 border-l-[3px] border-zinc-700 px-5 "
          >
            <motion.span
              className="text-pink-500"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "hidden" : "visible"}
            >
              Skills Over my years of experience in web and software development
            </motion.span>
            <> </>
            below are the Technologies and tools I use in problem solving,
            Providing smooth and unique UI to users.
          </h5>
          <div className=" border-[3px] border-gray-700 p-5 rounded-lg align-center justify-center lg:w-[70vw] md:w-[60vw] w-[80vw]">
            <h5 className="text-[20px] pb-4">Frontend Languages and Tools:</h5>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center lg:gap-4 gap-3">
              {frontendData.map((card, index) => (
                <Card key={index} title={card.title} icon={card.icon} />
              ))}
            </div>

            <h5 className="text-[20px] py-4">Version Control:</h5>
            <div className="grid grid-cols-2 mt-0 md:grid-cols-2 lg:grid-cols-4 text-center gap-4">
              {versionControlData.map((card, index) => (
                <Card key={index} title={card.title} icon={card.icon} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h5 className="my-0 text-black lg:text-2xl lg:p-3 text-l md:text-xl ml-[15px] w-[60vw] lg:w-[700px] lg:h-[150px] h-[fill] py-10 border-l-[3px] border-zinc-700 px-5">
            <motion.span
              className="text-purple-500"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "hidden" : "visible"}
            >
              Making use of the above technologies and tools
            </motion.span>
            <> </>
            below are the projects I’ve worked on to provide unique and
            flabagasting interfaces to users.
          </h5>
          <Projects/>

        </div>
      </div>
    </section>
  );
};

export default Skills;
