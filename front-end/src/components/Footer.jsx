import React from "react";
import { Link } from "react-router-dom";
import DateTimeDisplay from "./DateTimeDisplay";
const Footer = () => {
  return (
    <footer className="bg-green-700 h-45 text-white flex justify-evenly  flex-col md:font-medium">
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="mx-auto my-2 md:mx-0">Pranaya Ghimire</div>
        <ul className="flex justify-evenly space-x-10">
          <li className="hover:text-amber-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>

      <p className="text-center">
        copyright {"\u00A9"} pranayaghimire.com.np | All Rights Reserved
      </p>
      <DateTimeDisplay />
    </footer>
  );
};

export default Footer;
