/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col gap-5 text-[--text-color] md:gap-8">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
