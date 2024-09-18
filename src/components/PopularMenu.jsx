/* eslint-disable no-unused-vars */
import React from "react";
import { popMenuData } from "../data/shopData";
import HomeMenuCard from "./cards/HomeMenuCard";

const PopularMenu = () => {
  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto">
      <div className="text-center flex flex-col gap-5">
        <h3 className="text-xl text-[--main-color]">Our Popular Menu</h3>
        <h2 className="font-extrabold text-4xl">Some Popular Items</h2>
      </div>
      <div className="flex flex-col justify-evenly mx-auto gap-10 md:flex-row">
        {popMenuData.map((data) => (
          <HomeMenuCard
            key={data.id}
            title={data.title}
            price={data.price}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
