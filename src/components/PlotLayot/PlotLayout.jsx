import React from "react";

const PlotLayout = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Layout Shankarpur
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://res.cloudinary.com/jatincloud809/image/upload/v1747999727/Archiever%20property/q4wippigt20q7uebvmg7.jpg",
            "https://res.cloudinary.com/jatincloud809/image/upload/v1747999726/Archiever%20property/l6kl68acynrdporr2ecy.jpg",
            "https://res.cloudinary.com/jatincloud809/image/upload/v1747999726/Archiever%20property/vojkrni5i3wfwuqp45do.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100"
            >
              <img
                src={src}
                alt={`Layout ${index + 1}`}
                className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlotLayout;
