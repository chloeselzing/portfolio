"use client";

import React from "react";
import Image from "next/image";
import myImage from "../../public/Typing.jpeg"
import Button from "./Button";
import { LuDownload } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";



const Display = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="lg:p-16 p-auto py-[20px] flex justify-between " id="home">
      <div className="container flex flex-col md:flex-row px-6 mx-auto space-y-0 md:space-y-0 p-auto">
        <div className="flex-col mb-3 space-y-9 lg:space-y-12 md:w-1/2 md:my pt-20  md:pt-0 ">
          <motion.p className="greetings text-xl text-white md:text-2xl"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.5 }}   
          whileHover={{ scale: 1.1 }}      
          whileTap={{ scale: 0.9 }}  >
            Yo! <span className="peace">✌️</span>, Meet
            <span className="text-zinc-500 name"> Selzing-Musa Chloe</span>
          </motion.p>
          <h2 className="max-w-md lg:text-5xl text-3xl  font-bold lg:text-left md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            a Software Developer;
          </h2>
          <p className="max-w-sm text-left text-gray-200">
            With 3+ years of experience... I'm a seasoned programmer... My
            focus? Transforming problems into elegant solutions through stunning
            UIs.
          </p>
          <div className=" flex flex-row gap-4  ">
            <Button
              href="https://github.com/chloeselzing"
              text="Git Hub"
              gradientFrom="from-purple-500"
              color="white"
              gradientTo="to-pink-500"
            >
              <IoLogoGithub />
            </Button>
            <Button
              href="/../resume.pdf"
              download="my-resume.pdf"
              onClick={handleResumeClick}
              text="Resume"
              gradientFrom="from-pink-500"
              gradientTo="to-purple-500"
              color="white"

            >
              <LuDownload />
            </Button>
          </div>
        </div>
        <div className="hidden lg:block md:flex flex-col items-center justify-center space-y-4">
          <Image
            src={myImage}
            alt="Description of the image"
            className="object-cover lg:w-full md:w-[40vw] h-[70vh] ml-[150px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Display;
