/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import cookies from "../assets/cookies/cookies.jpg";
import brownies from "../assets/brownies/brownies 5.jpg";
import loafs from "../assets/loafBread/bananaloaf_plain_6in.jpg";
import cakes from "../assets/cakes/blueberry cheesecake2.jpg";

const Categories = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:flex">
      <div className="text-center flex flex-col gap-5">
        <h3 className="text-xl text-[--main-color]">Categories</h3>
        <h2 className="font-extrabold text-4xl">Our Categories Menu</h2>
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <div className="content-center text-center flex flex-col gap-5">
          <div>
            <img src={cookies} className="cus-img" />
          </div>
          <h3 className="text-3xl font-semibold">Cookies</h3>
          <p className="text-[--other-color] text-xl px-7">
            Cookies in the morning, cookies late at night. Cookies all day, here
            take another bite!
          </p>
          <div className="mt-3">
            <Link to="/shop" className="cus-bttn">
              View More
            </Link>
          </div>
        </div>

        <div className="content-center text-center flex flex-col gap-5">
          <div>
            <img src={brownies} className="cus-img" />
          </div>
          <h3 className="text-3xl font-semibold">Brownies</h3>
          <p className="text-[--other-color] text-xl px-7">
            Brownies are like spare batteries. One could never have too many in
            the house.
          </p>
          <div className="mt-3">
            <Link to="/shop" className="cus-bttn">
              View More
            </Link>
          </div>
        </div>

        <div className="content-center text-center flex flex-col gap-5">
          <div>
            <img src={loafs} className="cus-img" />
          </div>
          <h3 className="text-3xl font-semibold">Loaf Bread</h3>
          <p className="text-[--other-color] text-xl px-7">
            A loaf of fresh homemade bread is always a pleasure to enjoy! Soft,
            fluffy and delicious!
          </p>
          <div className="mt-3">
            <Link to="/shop" className="cus-bttn">
              View More
            </Link>
          </div>
        </div>

        <div className="content-center text-center flex flex-col gap-5">
          <div>
            <img src={cakes} className="cus-img" />
          </div>
          <h3 className="text-3xl font-semibold">Cakes</h3>
          <p className="text-[--other-color] text-xl px-7">
            The taste of festival in every bite. Genuine price, great quality
            and amazing taste!
          </p>
          <div className="mt-3">
            <Link to="/shop" className="cus-bttn">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
