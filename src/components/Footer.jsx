import React from "react";
import CustomLink from "./CustomLink";
const FooterLinks = [
  { href: "#", title: "Home" },
  { href: "mailto:selzingmusa1@gmail.com", title: "Contact" },
  { href: "/resume.pdf", title: "Resume", target: "_blank" },
  {
    href: "https://github.com/chloeselzing",
    title: "GitHub",
    target: "_blank",
  },
];

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
          {FooterLinks.map((nav, index) => (
            <CustomLink
              key={index}
              href={nav.href}
              title={nav.title}
              className="desk-nav"
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
