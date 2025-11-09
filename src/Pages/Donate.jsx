import React, { useState } from "react";
import { LuUsersRound } from "react-icons/lu";

import { GiArchiveResearch } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Donate() {
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation Submitted Successfully!");
    setFormData({ amount: "", name: "", email: "", phone: "", message: "" });
  };
  return (
    <section className="w-full bg-white my-9">
      <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-gray-900 leading-tight">
          Where Your Donation Goes
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-9 text-gray-700">
          <div className="shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2">
            <div className="text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full">
              <FaHeart className="text " />
            </div>
            <h3 className="font-bold">Patient Care:</h3>
            <p className="text-sm text-gray-500">
              Support comprehensive treatment and care for patients in need.
            </p>
          </div>
          <div className="shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2">
            <div className="text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full">
              <LuUsersRound className="text " />
            </div>
            <h3 className="font-bold">Support Programs:</h3>
            <p className="text-sm text-gray-500">
              Fund counseling, support groups, and family assistance programs.
            </p>
          </div>
          <div className="shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2">
            <div className="text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full">
              <GiArchiveResearch />
            </div>
            <h3 className="font-bold">Medical Research:</h3>
            <p className="text-sm text-gray-500">
              {" "}
              Advance cancer research and innovative treatment options.
            </p>
          </div>
          <div className="shadow-md w-72 h-44 rounded-md flex flex-col  mx-auto p-4 gap-2">
            <div className="text size-6 w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full">
              <MdLibraryBooks />
            </div>
            <h3 className="font-bold">Facility Upgrades:</h3>
            <p className="text-sm text-gray-500">
              Improve equipment and create comfortable environments for.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-900">
            Choose Your Donation Amount
          </h2>

          <form className="max-w-lg mx-auto mt-8  gap-2 flex flex-col" onSubmit={handleSubmit}>
            <p className="text-gray-700 font-medium text-center">
              Select Amount ($)
            </p>

            <div className="flex flex-wrap gap-16">
              {[10, 20, 50, 100].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className="px-6 py-2 border rounded-md text-gray-700 font-semibold hover:bg-pink-100 hover:border-pink-500 transition"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <label className="block font-medium  text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <label className="block font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your email@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <label className="block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="+91 -"
              name="phone"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <label className="block font-medium text-gray-700">
              Message (Optional)
            </label>
            <textarea
              placeholder="Share why you're supporting our cause..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
            ></textarea>

            <div className="text-center">
              <button className="flex items-center justify-center gap-2 w-full btn ">
                <FaHeart /> Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Donate;
