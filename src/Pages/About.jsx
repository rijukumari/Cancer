import React from "react";
import img from "../assets/img2.jpg";
import { LuUsersRound } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="w-full bg-white my-9 
    "
    >
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center my-8">
          <img src={img} alt="img" />
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            About
          </h1>
          <p className="text-gray-600 text-sm leading-6">
            Cancer is a leading cause of serious illness and death in many parts
            of the world. Our organization is ded cated to raising awareness and
            providing support to those affected by cancer. We believe that no
            one should face cancer alone. Through education , community support
            , and advocancy, we work tirelessly to create a world where cancer
            patients and their families have the resources and support they
            need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-4">
            <div className="shadow-md w-48 h-20 rounded-md flex  flex-col justify-center items-center  mx-auto">
              <LuUsersRound className="text size-6 " />
              <h2 className="font-bold">10,000+</h2>
              <p className="text-sm text-gray-600">Lives Touched</p>
            </div>
            <div className="shadow-md w-48 h-20  rounded-md flex flex-col justify-center items-center  mx-auto">
              <FaHandHoldingHeart className="text size-7 " />
              <h2 className="font-bold">50+</h2>
              <p className="text-sm text-gray-600">Support Groups</p>
            </div>
            <div className="shadow-md w-48 h-20 rounded-md flex  flex-col justify-center items-center mx-auto">
              <FaHeart className="text size-6 " />
              <h2 className="font-bold">200+</h2>
              <p className="text-sm text-gray-600">Awareness Events</p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn">Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
