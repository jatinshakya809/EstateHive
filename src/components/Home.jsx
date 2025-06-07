import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#228B22] flex flex-col md:flex-row justify-between px-6 md:px-12 py-8 md:py-4">
        <div className="">
          <div className="text-white text-3xl md:text-4xl font-semibold mb-6 md:mb-0 leading-snug md:leading-normal">
            Find a home that suits your lifestyle.
          </div>
          <p className="text-yellow-500 text-xl md:text-2xl font-semibold mb-6 md:mb-0 leading-snug md:leading-normal">
            अपने प्लॉट पर तुरंत निर्माण प्रारम्भ करे ।
          </p>
        </div>
      </div>
      <div className="video-wrapper">
        <ReactPlayer
          url="https://res.cloudinary.com/jatincloud809/video/upload/f_auto,q_auto/v1747997012/Archiever%20property/vf7vt3mop125mescbrl0.mp4
" // or .m3u8 for HLS
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
