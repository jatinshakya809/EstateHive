import React from "react";
import ReactPlayer from "react-player";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* <div className="text-center pb-12">
        <p className="text-4xl font-bold underline">About Us</p>
      </div> */}
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Text first on all screens */}
        <div className="md:w-1/2 order-1">
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-6">
            Achiever Building Solution Pvt. Ltd., <br /> the one for an
            exceptional home and life.
          </p>
          <div className="flex items-start gap-4">
            <div className="hidden md:block border-l-4 border-yellow-300 h-full" />
            <p className="text-gray-700 leading-relaxed">
              Built on centuries of tradition and dedicated to innovating the
              luxury real estate industry, Achiever Building Solution Pvt. Ltd.
              offers transformative experiences through a global network of
              exceptional agents.
            </p>
          </div>
        </div>

        {/* Video second on desktop, second on mobile too */}
        <div className="md:w-1/2 order-2 w-full aspect-w-16 aspect-h-9">
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            url="https://res.cloudinary.com/jatincloud809/video/upload/v1747998880/Archiever%20property/mjasjwec1mmvzwdt9rch.mp4"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-12 items-center mt-16">
        {/* Video first on desktop, second on mobile */}
        <div className="md:w-3/5 order-2 md:order-1 w-full aspect-w-16 aspect-h-9">
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            url="https://res.cloudinary.com/jatincloud809/video/upload/v1747999129/Archiever%20property/rv5ys4ls2enm6hramtkz.mp4"
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
        </div>

        {/* Text second on desktop, first on mobile */}
        <div className="md:w-2/5 order-1 md:order-2 space-y-6 text-center md:text-left px-4 md:px-0">
          <div className="bg-green-500 py-3 px-10 rounded-full">
            <p className="text-2xl font-bold text-white">
              Residential & Farm House
            </p>
          </div>
          <div className="bg-yellow-500  py-3 px-10 rounded-full">
            <p className="text-2xl font-bold text-black">
              छोटे प्लॉट, रिसोर्ट, विला, फॉर्म हाउस
            </p>
          </div>
          <div className="bg-green-500 py-3 px-10 rounded-full">
            <p className="text-2xl font-bold text-white">
              25 फिट से 30 फिट चौड़ी सड़के
            </p>
          </div>
          <div className="bg-yellow-500 py-3 px-10 rounded-full">
            <p className="text-2xl font-bold text-black">
              स्वच्छ वातावरण चारों ओर हरियाली
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-4 text-center">
        <h2 className="inline-block text-2xl sm:text-3xl font-bold border border-yellow-500 text-yellow-700 px-6 py-2 rounded-full">
          Amenities
        </h2>
      </div>

      {/* Amenities List */}
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800">
          {[
            "24x7 Security",
            "Play Ground",
            "Street Lights",
            "Electricity & Road",
            "Road Side Plantation",
            "Open Gym",
            "Gated Society",
            "Meditation Area",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center text-lg sm:text-xl font-medium"
            >
              <GoDotFill className="text-yellow-500 mr-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
