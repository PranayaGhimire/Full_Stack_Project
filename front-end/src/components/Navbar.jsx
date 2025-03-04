import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({msg}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
        fetch("http://localhost:3000/logout", {
            method: "GET",
            credentials: "include", // Send cookies
        })
        .then((res) => res.json())
        .then(() => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear cookie in frontend
            window.location.href = "http://localhost:3000/login"; // Redirect to login page
        })
        .catch((err) => console.log("Logout error:", err));
    }
};

  return (
    <nav className=" fixed top-0 w-full bg-green-700 h-20 text-white flex justify-around items-center  md:flex-row md:items-center md:font-medium">
      <div className=" md:mx-0">{msg ? `Hello, ${msg}!` : "Loading..."}</div>
      <div className="md:hidden">
        <i className="fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden flex  flex-col justify-evenly absolute top-20 right-0 w-35 h-90 bg-green-800 space-y-2 py-4 transition-all duration-1000 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center">
            <Link to="/contact">Contact Me</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer text-center" >
            <a onClick={handleLogout} href="#">Logout</a>
          </li>
        </ul>
      )}
      <ul className=" hidden md:flex justify-evenly space-x-10">
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
        <li className="hover:text-amber-200">
          <a onClick={handleLogout} href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
