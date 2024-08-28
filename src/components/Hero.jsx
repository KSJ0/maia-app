/* eslint-disable no-unused-vars */
import React from "react";
import heroImg from "../assets/MAIA BAKERY.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse h-auto gap-3 p-7 md:flex-row max-w-7xl m-auto"
      id="home"
    >
      <div className="flex flex-col text-center align-center gap-6 md:flex-1 md:m-auto md:text-left md:pr-50">
        <h1 className="font-bold text-6xl text-[--text-color]">
          Order Your <br /> Favourite Sweets.
        </h1>
        <p className="text-[--other-color] text-xl pb-8 md:w-[80%]">
          We promise you will enjoy every sweet moment to find your favourite.
          Eat what you love and save your time.
        </p>
        <div>
          <Link to="/shop" className="cus-bttn">
            Place An Order
          </Link>
        </div>
      </div>

      <div className="md:flex-1">
        <img src={heroImg} className="size-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
