/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HomeMenuCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col text-center gap-5 p-10 cursor-pointer">
      <img src={image} alt={title} className="cus-img" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-xl text-[--main-color]">{price}</p>
    </div>
  );
};

export default HomeMenuCard;
