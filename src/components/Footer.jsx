/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Maia Bakery Logo.png";
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
    <div className="grid gap-4 grid-cols-2 grid-rows-2 m-7">
      <div className="contact-box">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>

        <div className="flex gap-5 items-center text-4xl mx-10">
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

      <div className="flex flex-col gap-2 m-auto">
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

      <div className="flex flex-col gap-2 m-auto">
        <h3 className="text-xl font-semibold">Opening Hours</h3>
        <p>
          Mon - Fri : 7 am to 5 pm
          <br />
          Sat: 7 am to 3 pm
          <br />
          Sun: CLOSED
        </p>
      </div>

      <div className="flex flex-col gap-2 m-auto">
        <h3 className="text-xl font-semibold">Address</h3>
        <p>
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
