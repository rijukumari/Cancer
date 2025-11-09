import React, { useState } from "react";
import logo from "../assets/logo_1.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  bg-white my-2  text-center sticky top-0 z-50">
      <div className=" max-w-7xl mx-auto px-6 flex  justify-between items-center ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="img" className="h-10 w-10 object-contain" />
          <h3 className="text-xl font-semibold -ml-3 text-gray-800">
            Cancer<span className="text">Care</span>
          </h3>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-gray-600 font-medium">
            <Link to={"/"} className="hover cursor-pointer  transition">
              Home
            </Link>
            <Link to={"/about"} className="hover cursor-pointer transition">
              About
            </Link>
            <Link to={"/support"} className="hover cursor-pointer transition">
              Support
            </Link>
            <Link to={"/contact"} className="hover cursor-pointer transition">
              Contact
            </Link>
          </ul>
        </nav>
        <Link to={"/donate"}>
          <button className="btn hidden md:block">Donate</button>
        </Link>
      </div>

      {/* mobile hamburger */}
      <button
        className="md:hidden text-3xl absolute top-4 right-4 text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
      {open && (
        <div className="md:hidden block bg-white shadow-md w-full text-center py-4">
          <ul className="space-y-4  text-gray-600 font-medium">
            <Link to={"/"} onClick={() => setOpen(false)} className="block">
              Home
            </Link>
            <Link
              to={"/about"}
              onClick={() => setOpen(false)}
              className="block"
            >
              About
            </Link>
            <Link
              to={"/support"}
              onClick={() => setOpen(false)}
              className="block"
            >
              Support
            </Link>
            <Link
              to={"/contact"}
              onClick={() => setOpen(false)}
              className="block"
            >
              Contact
            </Link>
          </ul>
          <Link to={"/donate"}>
            <button className="btn mt-4">Donate</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
