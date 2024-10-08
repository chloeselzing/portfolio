"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectCards = ({ title, description, stacks, githubLink, liveLink }) => {
  return (
    <div className="bg-[#070a0e] border border-gray-500 rounded-md lg:p-4 md:p-4 p-2 text-white text-left  w-[55vw] md:w-[45vw] lg:w-[30vw] h-auto lg:h-[50vh] ">
      <div className="py-1 space-y-0 flex flex-row justify-between items-center px-2 md:px-4">
        <div>
          <span className="lg:text-[15px]  md:text-[20px] md:text-[24px] text-[10px]">
            {title}
          </span>
        </div>
        <div className="flex space-x-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="lg:text-xl text-l" />
          </a>
        </div>
      </div>

      <p className="py-2 px-2 md:px-4 text-gray-400  md:text-gray-300 h-[100px] lg:text-sm text-[10px] md:text-base">
        {description}
      </p>
      <p className="px-2 md:px-4 lg:text-sm text-[10px] py-2 text-gray-400 md:text-gray-300">
        Stacks: {stacks}
      </p>

      <div className="w-full border-t border-t-[#1F1F22] py-2 px-2 md:px-4">
        <div className="flex flex-row justify-between items-center">
          <div className="py-2 lg:px-4 px-2 rounded-lg border my-1 text-[#7ee787] bg-green-100/10 text-[12px] lg:text-[15px] ">
            {title}
          </div>
          <div>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <BsBoxArrowUpRight className="hidden lg:block md:block g:text-xl text-sm " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
