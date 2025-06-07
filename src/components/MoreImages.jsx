import React from "react";

const images = [
  { src: "/WhatsApp Image 2025-06-05 at 7.54.40 PM.jpeg", position: "up" }, // Left
  { src: "/WhatsApp Image 2025-06-05 at 7.54.44 PM.jpeg", position: "down" }, // Middle (lower)
  { src: "/WhatsApp Image 2025-06-05 at 7.54.46 PM.jpeg", position: "up" }, // Right
];

const MoreImages = () => {
  return (
    <div className="p-6 max-w-full mx-auto">
      <div className="flex justify-center items-end gap-8 flex-wrap">
        {images.map((image, index) => {
          const isMiddle = image.position === "down";

          return (
            <div
              key={index}
              className={`
                w-full sm:w-[280px] md:w-[300px]
                overflow-hidden rounded-lg shadow-lg
                ${isMiddle ? "md:mt-0" : "md:mt-0"}
                flex-shrink-0
              `}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover block"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreImages;
