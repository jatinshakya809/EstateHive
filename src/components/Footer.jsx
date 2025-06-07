import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <div className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            <img className="h-12 w-auto" src="/Logo.png" alt="" />
            Nature Green Real Estate
          </div>
          <p className="mb-4 text-sm sm:text-base">
            अपने प्लॉट पर तुरंत निर्माण प्रारम्भ करे ।
          </p>
          <div className="flex gap-4 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-red-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Properties</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="">Residential</li>
            <li className="">Commercial</li>
            <li className="">Luxury Homes</li>
            <li className="">New Developments</li>
            <li className="">Open Houses</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="">Buying</li>
            <li className="">Selling</li>
            <li className="">Property Management</li>
            <li className="">Mortgage Advice</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="">Our Story</li>
            <li className="">Meet the Team</li>
            <li className="">Careers</li>
            <li className="">Contact</li>
          </ul>
        </div>

        <div className="text-white">
          <h3 className="font-semibold mb-3 text-lg">Contact Details</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {/* Phone Link */}
            <li className="hover:text-white transition flex items-center gap-2">
              <a
                href="tel:+919717731887"
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaPhoneAlt /> +91-9717731887
              </a>
            </li>

            {/* WhatsApp Link */}
            <li className="hover:text-white transition flex items-center gap-2">
              <a
                href="https://wa.me/919717731887"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaWhatsapp /> +91-9717731887
              </a>
            </li>

            {/* Email Link */}
            <li className="hover:text-white transition flex items-center gap-2">
              <a
                href="mailto:ashukashyap844@gmail.com"
                className="flex items-center gap-2 cursor-pointer"
              >
                <IoIosMail />
                <span className="text-[12px] sm:text-sm">
                  ashukashyap844@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs sm:text-sm text-gray-500">
        © 2025 WebMetrixSolutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
