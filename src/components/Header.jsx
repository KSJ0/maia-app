/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  // stored state for the bar icon status
  const [isOpen, setIsOpen] = useState(false);

  // function for the bar icon
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // stored state for the dark mode status
  // const [darkMode, setDarkMode] = useState(false);

  // function for dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div>
      {/* backdrop-opacity-20 backdrop-invert bg-[--bg-color]/30 */}
      <header className="flex justify-between max-w-5xl m-auto font-mono px-5 bg-[#c78a855e] text-[--text-color] fixed top-0 left-0 right-0  md:rounded-xl md:mt-2">
        <Link to="/" className="">
          <img src={Logo} className="w-28 h-auto" />
        </Link>

        {/* NAVBAR LINKS */}
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

        {/* MOBILE MENU */}
        {/* bg-[#c78a855e] */}
        {isOpen && (
          <div className="md:hidden bg-[--bg-color] flex flex-col gap-10 text-center absolute ml-[-20px] mt-[109px] w-[320px] pt-[100px] h-screen">
            <Link
              to="/"
              className="block text-black text-3xl font-semibold hover:text-[--main-color]"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-black text-3xl font-semibold hover:text-[--main-color]"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block text-black text-3xl font-semibold hover:text-[--main-color]"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-black text-3xl font-semibold hover:text-[--main-color]"
            >
              Contact
            </Link>
          </div>
        )}

        <div className="flex gap-5 items-center text-4xl">
          {/* <a href="#">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hover:text-[--main-color]"
            />
          </a> */}
          {/* <a href="#">
            <FontAwesomeIcon
              icon={faBell}
              className="hover:text-[--main-color]"
            />
          </a> */}
          {/* <a href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="hover:text-[--main-color]"
            />
          </a> */}
          <div className="bx bx-menu md:hidden" id="menu-icon">
            <a href="#">
              <FontAwesomeIcon
                icon={faBars}
                className="hover:text-[--main-color]"
                onClick={toggleMenu}
                type="button"
              />
            </a>
          </div>

          {/* ----------darkmode---------- */}
          {/* <div>
            <FontAwesomeIcon
              icon={faMoon}
              className="hover:text-[--main-color]"
              onClick={toggleDarkMode}
            />
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
