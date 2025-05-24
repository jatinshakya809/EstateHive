import React from "react";

const storiesData = [
  {
    id: 1,
    name: "Ravi Sharma",
    location: "Jaipur, Rajasthan",
    feedback:
      "I was looking for a traditional villa that still had modern amenities, and EstateHive helped me find the perfect one in Jaipur. The process was smooth, and the team was extremely helpful throughout the paperwork and negotiation. My family is now happily settled, and I couldn't be more grateful.",
  },
  {
    id: 2,
    name: "Anjali Mehta",
    location: "Kochi, Kerala",
    feedback:
      "I had always dreamed of owning a houseboat property in Kerala, but thought it was out of reach. EstateHive made it possible by showing me multiple options within my budget and guiding me through every step. I now wake up to the sound of backwaters — truly magical!",
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Goa",
    feedback:
      "Buying a beach property seemed overwhelming, but EstateHive made it incredibly easy. Their agents understood my needs and ensured I got a peaceful retreat in North Goa. Their transparency and honesty made the experience unforgettable.",
  },
  {
    id: 4,
    name: "Preeti Deshmukh",
    location: "Pune, Maharashtra",
    feedback:
      "As a first-time buyer, I had many concerns. EstateHive didn’t just provide listings, they offered genuine advice. Today I own a beautiful flat in Pune and it feels like a dream come true. Highly recommend their professional and caring team!",
  },
  {
    id: 5,
    name: "Harsh Kapoor",
    location: "Manali, Himachal Pradesh",
    feedback:
      "I was looking for a vacation property in the hills, and EstateHive helped me discover a charming wooden cottage in Manali. The fresh air, serene view, and hassle-free buying process made this investment one of my best decisions.",
  },
  {
    id: 6,
    name: "Neha Verma",
    location: "Chandigarh, Punjab",
    feedback:
      "EstateHive understood my desire to relocate from Delhi and helped me settle in Chandigarh. The property is well-located, affordable, and exactly what I had in mind. Their after-sale support is what truly won me over.",
  },
  {
    id: 7,
    name: "Amit Tiwari",
    location: "Lucknow, Uttar Pradesh",
    feedback:
      "I moved back to India after years abroad and was skeptical of the real estate process. But EstateHive’s expertise in handling NRI clients amazed me. They handled everything from virtual tours to document verification seamlessly.",
  },
  {
    id: 8,
    name: "Shruti Patil",
    location: "Nashik, Maharashtra",
    feedback:
      "I bought a vineyard home through EstateHive and the experience was extraordinary. They even introduced me to neighbors and helped me get settled. Their service doesn’t end with just selling — they genuinely care about your happiness.",
  },
  {
    id: 9,
    name: "Rahul Nair",
    location: "Trivandrum, Kerala",
    feedback:
      "EstateHive helped me downsize and find a peaceful retirement home. Their suggestions were thoughtful, never pushy, and the property I now live in feels like it was handpicked just for me. I’m very satisfied.",
  },
  {
    id: 10,
    name: "Divya Raj",
    location: "Dehradun, Uttarakhand",
    feedback:
      "I was looking for a nature-surrounded property and EstateHive nailed it. They found me a lovely house in Dehradun with breathtaking mountain views. Their agent even helped me move in — true dedication!",
  },
  {
    id: 11,
    name: "Kunal Joshi",
    location: "Ahmedabad, Gujarat",
    feedback:
      "EstateHive provided several budget-friendly property options. Their negotiation skills helped me seal the deal on a great apartment. The process was transparent and stress-free — something rare in real estate!",
  },
  {
    id: 12,
    name: "Roshni Singh",
    location: "Patna, Bihar",
    feedback:
      "I wanted a home near my parents in Patna and was unsure about the market. EstateHive’s team was patient, helpful, and knowledgeable. I ended up buying a duplex just five minutes from my parents' house. Heartfelt thanks!",
  },
  {
    id: 13,
    name: "Manoj Das",
    location: "Bhubaneswar, Odisha",
    feedback:
      "It was my dream to own a flat in a developing city, and EstateHive showed me how it could be done. I appreciate their dedication to finding me the best deal and simplifying all the formalities. Thank you!",
  },
  {
    id: 14,
    name: "Alisha Khan",
    location: "Srinagar, Jammu & Kashmir",
    feedback:
      "Finding property in Srinagar was a challenge until I contacted EstateHive. Their local expertise helped me find a safe and scenic location for a holiday home. Every guest I host now compliments the house — all thanks to EstateHive.",
  },
  {
    id: 15,
    name: "Arvind Bhatt",
    location: "Bhopal, Madhya Pradesh",
    feedback:
      "I was searching for a commercial property in Bhopal and EstateHive's team helped me close a deal in record time. They ensured all legal documents were cleared before the transaction. True professionals!",
  },
  {
    id: 16,
    name: "Simran Jain",
    location: "Surat, Gujarat",
    feedback:
      "Being a single working woman, safety and locality were my priorities. EstateHive understood that and found me a gated apartment with great community features. I feel confident and secure every day thanks to them.",
  },
];

const Story = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center text-[#1F7D53] mb-12">
        Happy Homeowners
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {storiesData.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1F7D53]">
              {story.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{story.location}</p>
            <p className="text-gray-700 italic">“{story.feedback}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
