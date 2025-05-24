// StickyIcons.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const StickyIcons = () => {
  return (
    <div className="fixed right-4 bottom-20 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919717731887" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Call */}
      <a
        href="tel:+919717731887" // Replace with your phone number
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Gmail */}
      <a
        href="mailto:ashukashyap844@gmail.com" // Replace with your email
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default StickyIcons;
