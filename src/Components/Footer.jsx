import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="background text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">CancerCare Center</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Dedicated to providing compassionate cancer treatment, counseling,
            and support to patients and families with care and dignity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Important Links</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Treatments</li>
            <li className="hover:text-white cursor-pointer">Book Appointment</li>
            <li className="hover:text-white cursor-pointer">Patient Support</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <p className="text-sm text-gray-200 mb-3 leading-relaxed">
            Helpline: +91 90000 11122 <br />
            Email: support@cancercare.com
          </p>

          <div className="flex gap-4 text-2xl justify-center sm:justify-start">
            <FaFacebookF className="hover:scale-110 cursor-pointer transition" />
            <FaInstagram className="hover:scale-110 cursor-pointer transition" />
            <FaTwitter className="hover:scale-110 cursor-pointer transition" />
          </div>
        </div>

      </div>
    </footer>
  );
}
