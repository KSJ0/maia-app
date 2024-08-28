/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import History from "../components/History";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 text-[--text-color] md:gap-8">
      <Header />
      <Hero />
      <Categories />
      <History />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
