/* eslint-disable no-unused-vars */
import React from "react";
import { cookieMenu } from "../data/shopData";
import ShopCards from "./ShopCards";

const CookiesMenu = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-3xl font-semibold">COOKIES</h1>
      <div className="flex flex-col">
        {cookieMenu.map((cookie) => (
          <ShopCards
            key={cookie.id}
            title={cookie.title}
            price={cookie.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CookiesMenu;
