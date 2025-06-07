import React from "react";

const InquiryForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        action="https://formsubmit.co/ashukashyap844@gmail.com" // ✅ replace with your email
        method="POST"
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1F7D53]">
          Property Inquiry
        </h2>

        {/* Optional: prevent spam bots */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="contact"
          placeholder="Email or Phone"
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="propertyType"
          placeholder="Type of Property (e.g., 2BHK Flat)"
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Additional Details (optional)"
          className="w-full mb-4 p-2 border rounded resize-none"
        />

        <button
          type="submit"
          className="w-full bg-[#1F7D53] text-white py-2 rounded hover:bg-[#1F7D83] transition"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;
