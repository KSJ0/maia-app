/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import user from "/images/MAIA BAKERY 3.png";

const Testimonials = () => {
  return (
    <div className="flex flex-col content-center m-7 text-center gap-10 max-w-7xl md:m-auto md:flex-row">
      <div className="flex flex-col gap-5 md:m-auto md:flex-1">
        <h3 className="text-xl text-[--main-color]">Testimonials</h3>
        <h2 className="font-extrabold text-4xl">
          What People Say <br /> About Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-1">
        <div className="mb-5">
          <img src={user} className="max-w-[160px] w-screen h-auto m-auto" />
        </div>
        <h4 className="text-2xl font-extrabold">Venus San Diego</h4>
        <h6 className="text-[--main-color] mb-5">Paranaque City</h6>
        <p className="text-[--other-color] text-xl">
          "The taste was excellent. The delivery was good, very fast response.
          The brownies are superb!"
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
