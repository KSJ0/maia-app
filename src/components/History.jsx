/* eslint-disable no-unused-vars */
import React from "react";
import historyImg from "../assets/MAIA BAKERY 2.png";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="flex flex-col m-7 mt-9 md:flex-row">
      <div className="md:flex-1">
        <img src={historyImg} className="size-full h-auto" />
      </div>

      <div className="md:flex-1 text-left flex flex-col gap-10 my-auto">
        <h3 className="text-xl text-[--main-color]">Our History</h3>
        <h2 className="font-extrabold text-4xl">
          Discover Our Humble Beginnings.
        </h2>
        <p className="text-[--other-color] text-xl">
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
