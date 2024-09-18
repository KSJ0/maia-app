/* eslint-disable no-unused-vars */
import React from "react";
import CookiesMenu from "./CookiesMenu";
import BrowniesMenu from "./BrowniesMenu";
import LoafMenu from "./LoafMenu";
import CakeMenu from "./CakeMenu";
import { Link } from "react-router-dom";

const ShopContent = () => {
  return (
    <div className="flex flex-col gap-10 m-auto max-w-7xl text-center mt-36">
      <h1 className="text-6xl font-semibold">Pick Your Order</h1>
      <CookiesMenu />
      <BrowniesMenu />
      <CakeMenu />
      <LoafMenu />
      <div className="flex flex-col gap-10 bg-[--other-color] rounded-md p-10 mx-auto">
        <p className="text-xl text-[--text-color]">Total: Php 0.00</p>
        <div>
          <Link to="/shop" className="cus-bttn">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
