import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-xl sm:text-2xl font-semibold leading-relaxed mb-6">
            Sotheby’s International Realty, <br /> the one for an exceptional
            home and life.
          </p>
          <div className="flex items-start gap-4">
            <div className="hidden md:block border-4 border-yellow-300 h-full"></div>
            <p className="text-gray-700 leading-relaxed">
              Built on centuries of tradition and dedicated to innovating the
              luxury real estate industry, Sotheby's International Realty offers
              transformative experiences through a global network of exceptional
              agents.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2Fmy%20folder%2Fhugeimages%2FInspire.png&option=N&permitphotoenlargement=false&w=640"
            alt="Inspire"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 hidden md:flex justify-center">
        <div className="border border-yellow-300 w-1/2"></div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col mt-8 md:mt-0 md:flex-row gap-12 items-center">
        <div className="md:w-3/5">
          <img
            src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2Fmy%20folder%2Fhugeimages%2FOurStory.png&option=N&permitphotoenlargement=false&w=640"
            alt="Our Story"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/5 space-y-6 text-center md:text-left">
          <div>
            <p className="text-4xl font-extrabold text-gray-900">1,100</p>
            <p className="text-gray-500">Offices Worldwide</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">84</p>
            <p className="text-gray-500">Countries & territories</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">26,100</p>
            <p className="text-gray-500">Sales Associates</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-gray-900">
              $157 Billion
            </p>
            <p className="text-gray-500">Annual Sales (USD)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
