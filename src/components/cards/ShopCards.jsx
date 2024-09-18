/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ShopCards = ({ image, title, price }) => {
  return (
    <div className="flex flex-col text-center gap-5 p-10">
      <img src={image} alt={title} className="cus-img" />
      <h3 className="text-xl font-semibold text-[--text-color]">{title}</h3>
      <p className="text-xl text-[--text-color]">{price}</p>
      <div className="mt-3">
        <Link to="/shop" className="cus-bttn">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ShopCards;
