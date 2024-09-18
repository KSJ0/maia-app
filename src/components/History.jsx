/* eslint-disable no-unused-vars */
import React from "react";
import historyImg from "/images/MAIA BAKERY 2.png";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="flex flex-col m-7 mt-9 md:flex-row max-w-7xl md:m-auto gap-3">
      <div className="md:flex-1">
        <img src={historyImg} className="size-full h-auto" />
      </div>

      <div className="md:flex-1 text-center flex flex-col gap-10 my-auto md:text-left">
        <h3 className="text-xl text-[--main-color]">Our History</h3>
        <h2 className="font-extrabold text-4xl">
          Discover Our Humble Beginnings.
        </h2>
        <p className="text-[--other-color] text-xl md:w-[80%]">
          Maia Bakery intends to serve the most innovative and mouth-watering
          baked goods to help you make your festival considerably increasingly
          unique.
        </p>
        <div className="mt-3">
          <Link to="/about" className="cus-bttn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
