/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "/images/Maia Bakery Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCartShopping,
  faBars,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between max-w-5xl m-auto font-mono px-5 text-[--text-color] fixed top-0 left-0 right-0 backdrop-opacity-20 backdrop-invert bg-[--bg-color]/30 md:rounded-xl md:mt-2">
        <Link to="/" className="">
          <img src={Logo} className="w-28 h-auto" />
        </Link>

        <ul className="hidden md:flex gap-5 items-center text-xl">
          <li>
            <Link to="/" className="hover:text-[--main-color]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[--main-color]">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[--main-color]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[--main-color]">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex gap-5 items-center text-xl">
          <a href="#">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hover:text-[--main-color]"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faBell}
              className="hover:text-[--main-color]"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="hover:text-[--main-color]"
            />
          </a>
          <div className="bx bx-menu md:hidden" id="menu-icon">
            <a href="#">
              <FontAwesomeIcon
                icon={faBars}
                className="hover:text-[--main-color]"
              />
            </a>
          </div>

          {/* ----------darkmode---------- */}
          <div className="bx bx-moon" id="darkmode">
            <a href="#">
              <FontAwesomeIcon
                icon={faMoon}
                className="hover:text-[--main-color]"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
