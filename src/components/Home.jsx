import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const properties = [
  {
    name: "Modern Villa",
    location: "Beverly Hills, CA",
    price: "$3,200,000",
    image:
      "https://www.ats-greens.co.in/blogs/wp-content/uploads/2021/05/img-2.png",
  },
  {
    name: "Urban Apartment",
    location: "New York, NY",
    price: "$850,000",
    image:
      "https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5cf8df905b529.gif",
  },
  {
    name: "Lake House",
    location: "Lake Tahoe, NV",
    price: "$1,450,000",
    image:
      "https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5cf8df905b529.gif",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % properties.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + properties.length) % properties.length);

  const currentProperty = properties[current];

  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#1F7D53] flex flex-col md:flex-row justify-between px-6 md:px-12 py-8 md:py-12">
        <div className="text-white text-3xl md:text-4xl font-semibold mb-6 md:mb-0 leading-snug md:leading-normal">
          Find a home that suits your <br />
          lifestyle.
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

      {/* Carousel Section */}
      <div className="w-full mx-auto relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={currentProperty.image}
          alt={currentProperty.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {currentProperty.name}
          </h2>
          <p className="text-sm sm:text-lg">{currentProperty.location}</p>
          <p className="text-lg sm:text-xl font-semibold mt-1">
            {currentProperty.price}
          </p>
          <button className="mt-3 px-3 py-2 sm:px-4 sm:py-2 bg-white text-blue-900 rounded hover:bg-blue-100 transition text-sm sm:text-base">
            See More Details
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 px-2 sm:px-3 py-1 rounded-full hover:bg-black/60 z-20"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl bg-black/40 px-2 sm:px-3 py-1 rounded-full hover:bg-black/60 z-20"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Home;
