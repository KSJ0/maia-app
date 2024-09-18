// eslint-disable-next-line no-unused-vars
import React from "react";
import { brownieMenu } from "../data/shopData";
import ShopCards from "./cards/ShopCards";

const BrowniesMenu = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-3xl font-semibold">BROWNIES</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5">
        {brownieMenu.map((brownie) => (
          <ShopCards
            key={brownie.id}
            title={brownie.title}
            price={brownie.price}
            image={brownie.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowniesMenu;
