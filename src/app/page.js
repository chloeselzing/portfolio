import Display from "@/components/Display";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import React from "react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="relative not-italic">
      <Header className=" w-full h-16 z-50 " />
      <Display />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
