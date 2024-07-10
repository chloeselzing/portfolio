import React from "react";
import ProjectCards from "./ProjectCards";
const projectData = [
  {
    title: "Neighbourhood",
    description:
      "Experience a new wave of social mediaring, develop your own hood, become a neighborhood hero, and many more activities.",
    stacks: "Stacks : React.JS, Tailwind, TypeScript, Appwrite.",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Neighbourhood",
    description:
      "Experience a new wave of social mediaring, develop your own hood, become a neighborhood hero, and many more activities.",
    stacks: "Stacks : React.JS, Tailwind, TypeScript, Appwrite.",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Neighbourhood",
    description:
      "Experience a new wave of social mediaring, develop your own hood, become a neighborhood hero, and many more activities.",
    stacks: "Stacks : React.JS, Tailwind, TypeScript, Appwrite.",
    githubLink: "#",
    liveLink: "#",
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
          <ProjectCards
            title="Neighbourhood"
            description="Experience a new wave of social mediaring, develop your own hood, become a neighborhood hero, and many more activities."
            stacks="Stacks : React.JS, Tailwind, TypeScript, Appwrite."
            githubLink="#"
            liveLink
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
