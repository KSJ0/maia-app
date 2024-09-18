/* eslint-disable no-unused-vars */
import React from "react";
import { cookieMenu } from "../data/shopData";
import ShopCards from "./cards/ShopCards";

const CookiesMenu = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-3xl font-semibold">COOKIES</h1>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5">
        {cookieMenu.map((cookie) => (
          <ShopCards
            key={cookie.id}
            title={cookie.title}
            price={cookie.price}
            image={cookie.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CookiesMenu;
