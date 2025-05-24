import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#1F7D53] flex flex-col md:flex-row justify-between px-6 md:px-12 py-8 md:py-12">
        <div className="">
          <div className="text-white text-3xl md:text-4xl font-semibold mb-6 md:mb-0 leading-snug md:leading-normal">
            Find a home that suits your <br />
            lifestyle.
          </div>
          <p className="text-yellow-500 text-xl md:text-2xl font-semibold mb-6 md:mb-0 leading-snug md:leading-normal">
            अपने प्लॉट पर तुरंत निर्माण प्रारम्भ करे ।
          </p>
        </div>

        <div className="w-full md:w-[50%]">
          <div className="text-white px-4 py-4 md:px-6 md:py-6 bg-green-700/20 rounded">
            <ul className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 uppercase font-medium mb-4 text-xs sm:text-sm">
              {["BUY", "RENT", "SELL", "AGENT"].map((tab, index) => (
                <li
                  key={index}
                  className="border-b-2 border-[#1F7D53] hover:border-yellow-300 transition-all cursor-pointer whitespace-nowrap"
                >
                  {tab}
                </li>
              ))}
            </ul>

            <div className="flex items-center border-b border-gray-400 py-2 text-gray-300">
              <IoSearch className="text-xl mr-3" />
              <input
                type="text"
                placeholder="Country, City, Address, Postal Code or ID"
                className="bg-transparent outline-none flex-1 placeholder-gray-400 text-sm sm:text-base"
              />
              <FaArrowRight className="text-lg cursor-pointer hover:text-white transition" />
            </div>
          </div>
        </div>
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          url="https://res.cloudinary.com/jatincloud809/video/upload/v1747997012/Archiever%20property/vf7vt3mop125mescbrl0.mp4" // or .m3u8 for HLS
          muted={true}
          playing={true}
          width="100%"
          height="auto"
          loop={true}
        />
      </div>
    </div>
  );
};

export default Home;
