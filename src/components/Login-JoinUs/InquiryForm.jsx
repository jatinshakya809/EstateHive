import React, { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    propertyType: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend or email service
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-100">
        <h2 className="text-2xl font-semibold text-green-700">
          Thank you! We will contact you shortly.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-[#1F7D53]">
          Property Inquiry
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="contact"
          placeholder="Email or Phone"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="propertyType"
          placeholder="Type of Property (e.g., 2BHK Flat)"
          value={formData.propertyType}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Additional Details (optional)"
          value={formData.message}
          onChange={handleChange}
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
