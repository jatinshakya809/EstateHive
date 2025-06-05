import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutOwner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.3, // triggers when 30% is in view
  });

  return (
    <div ref={ref} className="max-w-4xl mx-4 md:mx-auto my-20">
      <motion.div
        className="p-6 bg-white shadow-2xl rounded-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 min-h-[300px]">
          {/* Left side: Circle image with border */}
          <div className="rounded-full bg-green-600 p-4 flex justify-center items-center w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 flex-shrink-0">
            <img
              className="rounded-full object-cover w-full h-full border-8 border-white"
              src="https://res.cloudinary.com/jatincloud809/image/upload/v1749104793/Archiever%20property/ka2netxqmxgvxh8jbzld.jpg"
              alt="Owner"
            />
          </div>

          {/* Right side: Owner intro */}
          <div className="w-full md:flex-1 flex justify-center items-center text-center md:text-left">
            <div>
              <h2 className="text-3xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi, I am Ashu Kashyap, the proud owner of this property. With
                years of experience in real estate, I am committed to helping
                you find your dream home. Passionate about delivering quality
                and trust in every deal.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutOwner;
