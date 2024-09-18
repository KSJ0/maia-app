/* eslint-disable no-unused-vars */
import React from "react";
import { cakesMenu } from "../data/shopData";
import ShopCards from "./cards/ShopCards";

const CakeMenu = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-3xl font-semibold">CAKES</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5">
        {cakesMenu.map((cake) => (
          <ShopCards
            key={cake.id}
            title={cake.title}
            price={cake.price}
            image={cake.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CakeMenu;
