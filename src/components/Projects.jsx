import React from "react";
import ProjectCards from "./ProjectCards";
const projectData = [
  {
    title: "Weather Whiz",
    description:
      "Weather Whiz is a web-based weather forecast app that allows users to enter a location and receive real-time weather information.I built a weather forecast site.",
    stacks: "Stacks : Next.JS, Tailwind",
    githubLink: "https://github.com/chloeselzing/Weather.git",
    liveLink: "https://weather-delta-blue.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "A simple portfolio website showcasing my personal projects, skills, and experiences.",
    stacks: "Stacks : Next.JS, Tailwind",
    githubLink: "https://github.com/chloeselzing/portfolio.git",
    liveLink: "https://portfolio-chloeselzings-projects.vercel.app/",
  },
  {
    title: "Jankara Market",
    description:
      "Jos Jankara Market is an online marketplace offering a wide range of products, including groceries, electronics, fashion, and more.",
    stacks: "Stacks : React.JS, Tailwind, TypeScript, Appwrite.",
    githubLink: "https://github.com/chloeselzing/jankaramarket.git",
    liveLink: "https://jankaramarket.vercel.app/",
  },
  {
    title: "4ES Africa",
    description:
      "4E School Africa provides in-demand tech skills training to African youth through partnerships and real-world projects, aiming to create a digitally employed society.",
    stacks: "Stacks : React.JS, Tailwind, TypeScript, Appwrite.",
    githubLink: "https://github.com/chloeselzing/4esafrica.git",
    liveLink: "https://4esafrica.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="lg:text-3xl text-xl text-black font-bold mb-2 text-left ">
        Projects
      </h2>
      <div className="border-[3px] border-gray-700 p-5 rounded-lg grid items-center justify-items-center lg:w-[70vw] md:w-[60vw] w-[80vw] ">
        <div className="grid grid-cols-1 mt-0 md:grid-cols-1 lg:grid-cols-2 lg:grid-cols-2 gap-4">
          {projectData.map((pc, index) => (
            <ProjectCards
              key={index}
              title={pc.title}
              description={pc.description}
              stacks={pc.stacks}
              githubLink={pc.githubLink}
              liveLink={pc.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
