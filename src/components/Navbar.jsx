import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY < window.innerHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`border-b border-gray-400`}>
      {/* Top Bar */}
      <div className="h-[6vh] font-medium gap-5 bg-gray-900 justify-center flex items-center text-xs sm:text-sm">
        <Link to="/inquiryForm" className="text-white cursor-pointer">
          Enquire Now
        </Link>
        <div className="text-white gap-2 items-center flex cursor-pointer">
          <IoMdSettings className="inline text-white" /> Preferences
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-[14vh] flex items-center justify-between px-4 sm:px-12 bg-[#1F7D53] text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <img
            src="https://res.cloudinary.com/jatincloud809/image/upload/v1748065028/Archiever%20property/srlsbfp2hizvo1xmh0b9.png"
            alt="Company Logo"
            className="h-12 w-auto" // Adjust height as needed
            // Ensures white bg is preserved
          />
          Achiever Building Solution Pvt. Ltd.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 uppercase text-sm">
          <li className="flex items-center gap-1 cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            <IoSearchSharp /> Search
          </li>
          <Link
            to="/properties"
            className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all"
          >
            Properties
          </Link>
          <Link className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            Agents
          </Link>
          <Link
            to="/story"
            className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all"
          >
            Stories
          </Link>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline-block ml-6 px-4 py-2 border border-yellow-300 uppercase cursor-pointer text-white hover:text-orange-200 transition">
          Sell with Us
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F7D53] text-white px-4 py-4 space-y-4 uppercase text-base">
          <Link
            to="/search" // assuming you have a search page route
            className="flex items-center gap-2 border-b border-yellow-500 pb-2"
            onClick={() => setMobileMenuOpen(false)} // close menu on click
          >
            <IoSearchSharp /> Search
          </Link>

          <Link
            to="/properties"
            className="block border-b border-yellow-500 pb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Properties
          </Link>

          <Link
            className="block border-b border-yellow-500 pb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agents
          </Link>

          <Link
            to="/story"
            className="block border-b border-yellow-500 pb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Stories
          </Link>

          <button className="w-full mt-2 px-4 py-2 border border-yellow-300 uppercase cursor-pointer text-white hover:text-orange-200 transition">
            Sell with Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
