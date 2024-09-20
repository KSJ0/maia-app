/* eslint-disable no-unused-vars */
import React from "react";
import logo from "/images/Maia Bakery Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="grid gap-4 grid-cols-2 max-w-7xl m-auto md:flex md:flex-row p-5 md:gap-14 md:p-14">
      <div className="m-auto">
        <Link to="/">
          <img
            src={logo}
            className="w-[140px] max-w-screen h-auto mb-1 m-auto"
          />
        </Link>

        <div className="flex gap-5 items-center text-4xl m-auto">
          <Link to="https://www.facebook.com/maiabakeryph">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="hover:text-[--main-color]"
            />
          </Link>
          <Link to="https://instagram.com/maiabakeryph?igshid=YmMyMTA2M2Y=">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="hover:text-[--main-color]"
            />
          </Link>
          <Link to="#">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="hover:text-[--main-color]"
            />
          </Link>
          <Link to="#">
            <FontAwesomeIcon
              icon={faSquareYoutube}
              className="hover:text-[--main-color]"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1 m-auto md:mt-3">
        <h3 className="text-xl font-semibold">Shop</h3>

        <Link
          to="/about"
          className="text-[--other-color] hover:text-[--main-color]"
        >
          About
        </Link>

        <Link
          href="#"
          className="text-[--other-color] hover:text-[--main-color]"
        >
          Store Policy
        </Link>

        <Link
          href="#"
          className="text-[--other-color] hover:text-[--main-color]"
        >
          Shipping/Pick-up
        </Link>

        <Link
          href="#"
          className="text-[--other-color] hover:text-[--main-color]"
        >
          FAQ
        </Link>
      </div>

      <div className="flex flex-col gap-2 m-auto md:mt-3 md:gap-7">
        <h3 className="text-xl font-semibold">Opening Hours</h3>
        <p className="text-[--other-color]">
          Mon - Fri : 7 am to 5 pm
          <br />
          Sat: 7 am to 3 pm
          <br />
          Sun: CLOSED
        </p>
      </div>

      <div className="flex flex-col gap-2 m-auto md:mt-3 md:gap-7">
        <h3 className="text-xl font-semibold">Address</h3>
        <p className="text-[--other-color]">
          Angeles St. Caingin Road
          <br />
          Morong, Rizal PH 1960
          <br />
          Tel: 0960-382-0758
        </p>
      </div>
    </div>
  );
};

export default Footer;
