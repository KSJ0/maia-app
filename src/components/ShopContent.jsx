/* eslint-disable no-unused-vars */
import React from "react";
import CookiesMenu from "./CookiesMenu";
import BrowniesMenu from "./BrowniesMenu";
import LoafMenu from "./LoafMenu";
import CakeMenu from "./CakeMenu";

const ShopContent = () => {
  return (
    <div className="flex flex-col gap-10 m-auto max-w-7xl text-center mt-44">
      <h1 className="text-6xl font-semibold">Pick Your Order</h1>
      <CookiesMenu />
      <BrowniesMenu />
      <LoafMenu />
      <CakeMenu />
    </div>
  );
};

export default ShopContent;
