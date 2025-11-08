import React from "react";
import img from "../assets/img2.jpg";

export default function About() {
  return (
    <section className="w-full bg-white my-9">
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center my-8">
          <img src={img} alt="img" />
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            About
          </h1>
          <p className="text-gray-600 text-sm">
            {" "}
            Cancer is a leading cause of serious illness
            <br />
            and death in many parts of the world. Our <br />
            organization is ded cated to raising awareness <br /> and providing
            support to those affected bt cancer.
          </p>
          <button className="btn">Back</button>
        </div>
      </div>
    </section>
  );
}
