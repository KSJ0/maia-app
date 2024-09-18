/* eslint-disable no-unused-vars */
import React from "react";
import { loafMenu } from "../data/shopData";
import ShopCards from "./ShopCards";

const LoafMenu = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-3xl font-semibold">LOAF BREADS</h1>
      <div className="flex flex-col md:flex-row gap-5">
        {loafMenu.map((loaf) => (
          <ShopCards key={loaf.id} title={loaf.title} price={loaf.price} />
        ))}
      </div>
    </div>
  );
};

export default LoafMenu;
