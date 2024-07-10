import React from "react";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow  ">
      <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Selzing™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#About" className="desk-nav">
              About
            </a>
          </li>
          <li>
            <a href="mailto:selzingmusa1@gmail.com" className="desk-nav">
              Contact
            </a>
          </li>
          <li>
            <a href="/../resume.pdf" className="desk-nav">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/chloeselzing" className="desk-nav">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
