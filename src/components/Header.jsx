"use client";

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
// import Link from "./Link";
// import CustomLink from "./CustomLink";

const NavLinks = [
  { href: "#home", title: "HOME" },
  { href: "#skills", title: "sKILLS" },
  { href: "#projects", title: "PROJECTS" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(
    "bg-zinc-500 border-zinc-500 "
  );
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButtonHover = (event) => {
    setButtonStyle("bg-inherit border-zinc-500 border-solid");
  };
  return (
    <header className="relative  transition-all z-50 px-16 mx-auto lg:mb-[50px] md:mb-[50px]">
      <nav className="fixed top-0 left-0 right-0 container p-6 mx-auto text-white flex items-center justify-between lg:px-[5vw] lg:bg-black">
        <div className="logo">
          <h1 className="text-2xl font-medium">
            <span className="text-zinc-500">SEL</span>ZING
          </h1>
        </div>

        <div className="hidden md:flex md:space-x-10 lg:space-x-16 text-gray-200">
          <a href="#Home" className="desk-nav active">
            Home
          </a>
          <a href="#Skills" className="desk-nav">
            Skills
          </a>
          <a href="#Projects" className="desk-nav">
            Projects
          </a>
          <Button
            className={`hidden md:flex p-3 px-6 pt-2 text-white ${buttonStyle} rounded  baseline btn btn-hover`}
            onClick={handleClick}
            onMouseEnter={handleButtonHover}
            onMouseLeave={() => setButtonStyle("bg-zinc-500")}
            href="mailto:selzingmusa1@gmail.com"
            text="Get In Touch"
            color="blue-500"
            gradientFrom=" from-purple-500 "
            gradientTo=" to-pink-500"
          >
            {" "}
          </Button>
        </div>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <CiMenuBurger />
        </button>

        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black md:hidden overflow-auto  lg:mx-0">
            <div
              className="px-10 py-10 items-center justify-end h-screen px-4"
              onClick={handleClose}
            >
              <button
                id="menu-btn"
                className="block hamburger md:hidden focus:outline-none relative right"
                onClick={handleClose}
              >
                <IoClose size={28} />
              </button>

              <div className="pt-12">
                <div className="flex flex-col items-center">
                  {NavLinks.map((nav, index) => (
                    <CustomLink key={index} href={nav.href} title={nav.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="hidden lg:block fixed top-20 left-0 right-0  mx-auto h-1 max-w-5xl bg-gradient-to-r from-white via-transparent to-transparent bg-opacity-80"></div>
    </header>
  );
};

export default Header;
