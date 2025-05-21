import React, { useEffect, useState } from "react";
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
    <nav className={`border-b-2 border-gray-500`}>
      {/* Top Bar */}
      <div className="h-[6vh] font-medium gap-5 bg-gray-900 justify-center flex items-center text-xs sm:text-sm">
        <div className="text-white cursor-pointer">Join / Log In</div>
        <div className="text-white gap-2 items-center flex cursor-pointer">
          <IoMdSettings className="inline text-white" /> Preferences
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-[14vh] flex items-center justify-between px-4 sm:px-12 bg-[#1F7D53] text-white">
        {/* Logo */}
        <div className="text-2xl font-bold">EstateHive</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 uppercase text-sm">
          <li className="flex items-center gap-1 cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            <IoSearchSharp /> Search
          </li>
          <li className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            Properties
          </li>
          <li className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            Agents
          </li>
          <li className="cursor-pointer pb-2 border-b-2 border-transparent hover:border-yellow-500 transition-all">
            Stories
          </li>
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
          <div className="flex items-center gap-2 cursor-pointer border-b border-yellow-500 pb-2">
            <IoSearchSharp /> Search
          </div>
          <div className="cursor-pointer border-b border-yellow-500 pb-2">
            Properties
          </div>
          <div className="cursor-pointer border-b border-yellow-500 pb-2">
            Agents
          </div>
          <div className="cursor-pointer border-b border-yellow-500 pb-2">
            Stories
          </div>
          <button className="w-full mt-2 px-4 py-2 border border-yellow-300 uppercase cursor-pointer text-white hover:text-orange-200 transition">
            Sell with Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
