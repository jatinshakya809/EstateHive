import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StateProperty from "./StateProperty";

const states = ["Dehradun"];

const propertyData = {
  Dehradun: [
    {
      id: 1,
      title: "Luxury Villa in Jaipur",
      img: "https://res.cloudinary.com/jatincloud809/image/upload/v1748065712/Archiever%20property/tpvb5koumjhjcrygoyio.jpg",
      price: "₹85 Lakhs",
    },
    {
      id: 2,
      title: "Heritage Haveli, Udaipur",
      img: "https://res.cloudinary.com/jatincloud809/image/upload/v1748065713/Archiever%20property/bohccndkffa2rxc8rncl.jpg",
      price: "₹1.5 Cr",
    },
    {
      id: 3,
      title: "Modern Flat, Jodhpur",
      img: "https://res.cloudinary.com/jatincloud809/image/upload/v1748065713/Archiever%20property/suls0mxkgxxkx2fmcwsu.jpg",
      price: "₹65 Lakhs",
    },
    {
      id: 4,
      title: "Modern Flat, Jodhpur",
      img: "https://res.cloudinary.com/jatincloud809/image/upload/v1748065713/Archiever%20property/snpomzwxhwytochxlxpe.jpg",
      price: "₹65 Lakhs",
    },
  ],
};

const Properties = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedState, setSelectedState] = useState("Dehradun");

  return (
    <div>
      {/* Top Navbar with State Links */}
      <div className="h-[8vh] border-b-2 flex justify-between items-center px-4 sm:px-8 bg-[#228B22] overflow-x-auto no-scrollbar whitespace-nowrap">
        {states.map((state, index) => (
          <span
            key={index}
            onClick={() => setSelectedState(state)}
            className={`inline-block text-white text-sm sm:text-base font-medium cursor-pointer mx-3 sm:mx-4 py-2 hover:scale-105 transition ${
              selectedState === state ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            {state.replace(/([A-Z])/g, " $1").trim()}
          </span>
        ))}
      </div>

      {/* Filter Toggle Button (for all devices) */}
      <div className="w-full bg-white px-4 sm:px-8 py-3 flex justify-end">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="text-sm flex items-center gap-1 text-[#1F7D53] font-medium"
        >
          {showFilters ? "Hide" : "Show"} Filters
          {showFilters ? (
            <FaChevronUp size={14} />
          ) : (
            <FaChevronDown size={14} />
          )}
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`w-full bg-white px-4 sm:px-8 transition-all duration-300 ${
          showFilters ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-wrap gap-4 sm:gap-6 py-4 shadow-md">
          <div className="flex flex-col min-w-[160px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              State
            </label>
            <select
              className="border px-3 py-2 rounded text-sm"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state.replace(/([A-Z])/g, " $1").trim()}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col min-w-[160px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              Min Price: ₹
            </label>
            <input
              type="range"
              min="0"
              max="300"
              step="10"
              className="w-full accent-[#1F7D53]"
            />
          </div>

          <div className="flex flex-col min-w-[160px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              Max Price: ₹
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              className="w-full accent-[#1F7D53]"
            />
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              Min Sq Ft
            </label>
            <input
              type="text"
              placeholder="e.g. 1000"
              className="border px-3 py-2 rounded text-sm"
            />
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              Garden
            </label>
            <select className="border px-3 py-2 rounded text-sm">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="flex flex-col min-w-[140px]">
            <label className="text-xs font-medium text-gray-600 mb-1">
              Parking
            </label>
            <select className="border px-3 py-2 rounded text-sm">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="my-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-10 tracking-wide">
          Properties in {selectedState.replace(/([A-Z])/g, " $1").trim()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyData[selectedState]?.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={prop.img}
                alt={prop.title}
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <StateProperty />
    </div>
  );
};

export default Properties;
