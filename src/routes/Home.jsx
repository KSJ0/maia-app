/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
