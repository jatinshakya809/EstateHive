import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <div className="text-white text-lg font-bold mb-4 flex items-center gap-2">
            <img
              className="h-12 w-auto"
              src="https://res.cloudinary.com/jatincloud809/image/upload/v1748065028/Archiever%20property/srlsbfp2hizvo1xmh0b9.png"
              alt=""
            />
            Achiever Building Solution Pvt. Ltd.
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
            <li className="hover:text-white cursor-pointer transition">
              Residential
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Commercial
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Luxury Homes
            </li>
            <li className="hover:text-white cursor-pointer transition">
              New Developments
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Open Houses
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer transition">
              Buying
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Selling
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Property Management
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Mortgage Advice
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer transition">
              Our Story
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Meet the Team
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer transition">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Licensing
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Disclosures
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
