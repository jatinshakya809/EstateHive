import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ExploreMore = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="px-4 md:px-20 max-w-7xl mx-auto">
      <div className="text-center space-y-4 md:space-y-6 py-8">
        <p className="text-sm md:text-base uppercase tracking-wide text-gray-700">
          More to know
        </p>
        <p className="text-3xl md:text-5xl font-semibold leading-snug">
          Exceptional Locations, <br /> Unrivaled Lifestyles.
        </p>
        <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-base">
          Conceived in the belief that home and living in full are inextricably
          entwined, RESIDE® is the Sotheby’s International Realty brand’s
          magazine devoted to the finest in inspirational locales and
          lifestyles.
        </p>
        <button className="mt-4 px-6 py-2 border rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition">
          Explore more <FaLongArrowAltRight />
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 py-16">
        {/* Card 1 */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <img
            src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2Fmy%20folder%2Fstatic-pages%2Freside-magazine%2Freside-march2023%2Fcover%2FRESIDE-MARCH-2023-COVER.jpg%26option%3DN%26w%3D200&option=N&h=353&permitphotoenlargement=false"
            alt="RESIDE Magazine"
            className="w-full max-w-xs md:max-w-sm mx-auto rounded shadow-lg"
          />
          <p className="text-2xl mt-4 font-semibold">RESIDE Magazine</p>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Exceptional location, Unrivaled lifestyle
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="text-center pt-8 md:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <img
            src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2FMy%20Folder%2Fstatic-pages%2Fluxury-outlook%2Fluxury-outlook-2023%2Fcover%2Fheader_luxoutlook.jpg&option=N&h=353&permitphotoenlargement=false"
            alt="Luxury Outlook"
            className="w-full max-w-xs md:max-w-sm mx-auto rounded shadow-lg"
          />
          <p className="text-2xl mt-4 font-semibold">Luxury Outlook</p>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            An ambitious exploration into high and residential markets across
            the globe
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <img
            src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2FMy%20Folder%2FhugeImages%2Fhomepage%2Freside%2Fvirtual.jpg&option=N&h=353&permitphotoenlargement=false"
            alt="Virtual Homes"
            className="w-full max-w-xs md:max-w-sm mx-auto rounded shadow-lg"
          />
          <p className="text-2xl mt-4 font-semibold">
            View Homes, From the comfort of Yours
          </p>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Experience luxury homes like never before, all from the comfort of
            yours
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreMore;
