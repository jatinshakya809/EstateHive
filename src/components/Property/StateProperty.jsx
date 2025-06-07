import React from "react";
import ReactPlayer from "react-player";
import { FiDownload } from "react-icons/fi";

const imageLink = [
  {
    image:
      "https://res.cloudinary.com/jatincloud809/image/upload/v1748066288/Archiever%20property/t0a7yjvsmcvvmq1c5g7d.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/jatincloud809/image/upload/v1748066288/Archiever%20property/ttvgbfwk2kx3rtk3glac.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/jatincloud809/image/upload/v1748066288/Archiever%20property/im94chczdppy9x43brgk.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/jatincloud809/image/upload/v1748066288/Archiever%20property/oi4hprmginlf6lk8mesq.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/jatincloud809/image/upload/v1748066288/Archiever%20property/ii7wkvf9metqazy5vhxp.jpg",
  },
];

const StateProperty = () => {
  return (
    <div className="p-4 md:px-12 pb-12">
      {/* Heading */}
      <div className="text-center px-4 sm:px-8 lg:px-16 py-8">
        <p className="text-xl sm:text-2xl font-semibold text-[#FFD700] uppercase tracking-wide">
          Your Nature Inspired
        </p>
        <p className="text-5xl sm:text-6xl font-extrabold text-[#F5F5DC] leading-tight">
          Dream Land
        </p>
        <p className="text-2xl sm:text-3xl text-white mt-2 font-semibold tracking-wide">
          Awaits
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-8 lg:px-16 pb-10">
        {imageLink.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={img.image}
              alt={`Property ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Offer Section with Video & Images */}
      <div className="py-8 px-4 text-white">
        {/* Offer Heading */}
        <p className="uppercase text-[#FFD700] text-3xl sm:text-4xl font-semibold text-center">
          At only <span className="text-6xl sm:text-7xl text-white">25%</span>{" "}
          of down payments
        </p>

        {/* Sub Heading */}
        <p className="text-xl sm:text-2xl text-white text-center mt-4">
          इन्वेस्ट करने का{" "}
          <span className="text-[#FFD700] font-semibold">सुनहरा</span> मौका
          प्रकृति की गोद में |
        </p>

        {/* Media Section */}
        <div className="py-6 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Video Section */}
          <div className="relative w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ReactPlayer
                playing
                muted
                loop
                controls={false}
                width="100%"
                height="100%"
                url="https://res.cloudinary.com/jatincloud809/video/upload/v1749279729/Archiever%20property/rsbzrc5o0hu0kodanwag.mp4"
              />
            </div>
            {/* Floating Circular Download Button */}
            <a
              href="https://res.cloudinary.com/jatincloud809/video/upload/v1749279729/Archiever%20property/rsbzrc5o0hu0kodanwag.mp4"
              download
              className="absolute top-3 right-3 bg-[#FFD700] text-black p-2 rounded-full shadow-md hover:bg-yellow-400 transition"
              title="Download Video"
            >
              <FiDownload size={20} />
            </a>
          </div>

          {/* Image Previews */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              className="w-full h-52 object-cover rounded-xl shadow-lg"
              src="/IMG-20250605-WA0010.jpg"
              alt="Property 1"
            />
            <img
              className="w-full h-52 object-cover rounded-xl shadow-lg"
              src="/IMG-20250605-WA0011.jpg"
              alt="Property 2"
            />
            <img
              className="w-full h-52 object-cover rounded-xl shadow-lg"
              src="/IMG-20250605-WA0006.jpg"
              alt="Property 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateProperty;
