import React from "react";

const PlotLayout = () => {
  const bgColor = "#228B22"; // your background color
  const buttonColor = "#2ecc71"; // light green, blends well with bgColor

  // helper to trigger image download
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
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
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100"
            >
              {/* Download Button - smaller size */}
              <button
                onClick={() => handleDownload(src)}
                className="absolute top-2 right-2 z-10 flex items-center justify-center w-7 h-7 rounded-full shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: buttonColor }}
                aria-label={`Download layout ${index + 1}`}
                title="Download Image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
              </button>

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
