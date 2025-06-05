import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { GoDotFill } from "react-icons/go";
import { motion, useInView } from "framer-motion";

const About = () => {
  const videoUrlLandscape =
    "https://res.cloudinary.com/jatincloud809/video/upload/v1749100329/Archiever%20property/r2z2dvtfhdbadt7fogj6.mp4";
  const videoUrlPortrait =
    "https://res.cloudinary.com/jatincloud809/video/upload/v1749100140/Archiever%20property/tomb5t2hisjvzyxe8pvp.mp4";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Top Section */}
      <div
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-12 py-10 overflow-hidden"
      >
        {/* Video 1 (Landscape) */}
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/3 rounded-lg shadow-2xl overflow-hidden min-h-[300px]"
        >
          <ReactPlayer
            url={videoUrlLandscape}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
            config={{
              file: {
                attributes: {
                  style: { objectFit: "cover" },
                },
              },
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={isInView ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/3 text-white text-center md:text-left min-h-[250px]"
        >
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-4">
            Achiever Building Solution Pvt. Ltd.
          </p>
          <div className="flex gap-3">
            <div className="hidden md:block border-l-4 border-yellow-300 h-auto" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Built on centuries of tradition and dedicated to innovating the
              luxury real estate industry, Achiever Building Solution Pvt. Ltd.
              offers transformative experiences through a global network of
              exceptional agents.
            </p>
          </div>
        </motion.div>

        {/* Video 2 (Portrait) */}
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden flex justify-center items-center min-h-[300px]"
        >
          <ReactPlayer
            url={videoUrlPortrait}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ maxHeight: "400px", width: "auto", objectFit: "contain" }}
            config={{
              file: {
                attributes: {
                  style: { objectFit: "contain" },
                },
              },
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-12 items-center mt-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, translateX: -80 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-3/5 order-2 md:order-1 w-full rounded overflow-hidden shadow-lg"
        >
          <ReactPlayer
            playing
            loop
            muted
            url="https://res.cloudinary.com/jatincloud809/video/upload/v1747999129/Archiever%20property/rv5ys4ls2enm6hramtkz.mp4"
            width="100%"
            height="auto"
            style={{ borderRadius: "8px", aspectRatio: "16 / 9" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: 80 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-2/5 order-1 md:order-2 space-y-6 text-center md:text-left px-4 md:px-0"
        >
          <div className="bg-green-500 py-3 px-10 rounded-full">
            <p className="text-2xl font-bold text-white">
              Residential & Farm House
            </p>
          </div>
          <div className="bg-yellow-500 py-3 px-10 rounded-full">
            <p className="text-xl font-bold text-black">
              छोटे प्लॉट, रिसोर्ट, विला, फॉर्म हाउस
            </p>
          </div>
          <div className="bg-green-500 py-3 px-10 rounded-full">
            <p className="text-xl font-bold text-white">
              25 फिट से 30 फिट चौड़ी सड़के
            </p>
          </div>
          <div className="bg-yellow-500 py-3 px-10 rounded-full">
            <p className="text-xl font-bold text-black">
              स्वच्छ वातावरण चारों ओर हरियाली
            </p>
          </div>
        </motion.div>
      </div>

      {/* Amenities */}
      <div className="pt-16 pb-4 text-center">
        <h2 className="inline-block text-2xl sm:text-3xl font-bold border border-yellow-500 text-white px-6 py-2 rounded-full">
          Amenities
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
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
