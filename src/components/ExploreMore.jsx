import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748003834/Archiever%20property/xsbi6ahtgoiygxgqppb5.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748003834/Archiever%20property/acnzvg3aldyidvhtmxpz.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748003834/Archiever%20property/s0aic4udlbqcbcbj45yr.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748003834/Archiever%20property/z79woblg2p6co2qrble8.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748004236/Archiever%20property/y2leatxdtm9tzlnmfkn7.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748004236/Archiever%20property/zkyuuwrpjggyqhqsa9wh.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748004237/Archiever%20property/l7ap4803kbrfvaufnzh4.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748004237/Archiever%20property/kcnvw6xpptisjnzhdf9q.jpg",
  "https://res.cloudinary.com/jatincloud809/image/upload/v1748004237/Archiever%20property/ynuuqxcyic1r7michgzl.jpg",
];

const ExploreMore = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount =
    window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    return Array.from({ length: visibleCount }).map(
      (_, i) => images[(startIndex + i) % images.length]
    );
  };

  return (
    <div className="relative pb-16 lg:px-12">
      {/* Background Image - full screen width */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://res.cloudinary.com/jatincloud809/image/upload/v1748072170/Archiever%20property/yaoglnx9ufehvp92fxgr.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-5 pointer-events-none"
        />
      </div>

      {/* Foreground Content - centered inside max width */}
      <div className="relative z-10 px-4 md:px-20 max-w-7xl mx-auto">
        <div className="text-center space-y-4 md:space-y-6 py-8">
          <p className="text-sm md:text-base uppercase tracking-wide text-white">
            More to know
          </p>
          <p className="text-3xl text-shadow-lg text-white md:text-5xl font-semibold leading-snug">
            अपने प्लाट पर <br /> तुरंत निर्माण प्रारंभ करे |
          </p>
          <p className="max-w-3xl mx-auto text-white text-lg md:text-base">
            52, Sewla Kalan, Shimla Bypass Road Opp. Urban Buy, Dehradun,
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            key={startIndex}
            className="flex gap-4 sm:gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {getVisibleImages().map((src, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                <div className="bg-white border-2 border-yellow-500 shadow-lg overflow-hidden h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`carousel-${index}`}
                    className="w-full h-64 sm:h-72 md:h-96 object-cover "
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
