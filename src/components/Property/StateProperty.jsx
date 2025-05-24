import React from "react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {imageLink.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt={`Property ${index + 1}`}
            className="w-full h-auto rounded shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default StateProperty;
