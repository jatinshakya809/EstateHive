import React from "react";

const agentsData = [
  {
    id: 1,
    name: "Rajesh Sharma",
    state: "Rajasthan",
    city: "Jaipur",
    location: "Vaishali Nagar",
    image: "https://via.placeholder.com/100?text=Rajesh",
  },
  {
    id: 2,
    name: "Anita Pillai",
    state: "Kerala",
    city: "Kochi",
    location: "Marine Drive",
    image: "https://via.placeholder.com/100?text=Anita",
  },
  {
    id: 3,
    name: "Vikram Joshi",
    state: "Maharashtra",
    city: "Mumbai",
    location: "Andheri West",
    image: "https://via.placeholder.com/100?text=Vikram",
  },
  {
    id: 4,
    name: "Simran Kaur",
    state: "Punjab",
    city: "Amritsar",
    location: "Ranjit Avenue",
    image: "https://via.placeholder.com/100?text=Simran",
  },
  {
    id: 5,
    name: "Rahul Verma",
    state: "Uttar Pradesh",
    city: "Lucknow",
    location: "Hazratganj",
    image: "https://via.placeholder.com/100?text=Rahul",
  },
  {
    id: 6,
    name: "Divya Nair",
    state: "Karnataka",
    city: "Bangalore",
    location: "Indiranagar",
    image: "https://via.placeholder.com/100?text=Divya",
  },
  {
    id: 7,
    name: "Amit Bansal",
    state: "Delhi",
    city: "New Delhi",
    location: "Saket",
    image: "https://via.placeholder.com/100?text=Amit",
  },
  {
    id: 8,
    name: "Neha Sinha",
    state: "Himachal Pradesh",
    city: "Shimla",
    location: "Mall Road",
    image: "https://via.placeholder.com/100?text=Neha",
  },
  {
    id: 9,
    name: "Kunal Mehta",
    state: "Gujarat",
    city: "Ahmedabad",
    location: "Navrangpura",
    image: "https://via.placeholder.com/100?text=Kunal",
  },
  {
    id: 10,
    name: "Priya Das",
    state: "West Bengal",
    city: "Kolkata",
    location: "Salt Lake",
    image: "https://via.placeholder.com/100?text=Priya",
  },
  {
    id: 11,
    name: "Yash Kapoor",
    state: "Goa",
    city: "Panaji",
    location: "Campal",
    image: "https://via.placeholder.com/100?text=Yash",
  },
  {
    id: 12,
    name: "Meera Iyer",
    state: "Tamil Nadu",
    city: "Chennai",
    location: "Adyar",
    image: "https://via.placeholder.com/100?text=Meera",
  },
];

const AgentsPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#1F7D53]">
        Our Real Estate Agents
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {agentsData.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition duration-300"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-center">{agent.name}</h3>
            <p className="text-sm text-center text-gray-600">
              {agent.city}, {agent.state}
            </p>
            <p className="text-sm text-center text-gray-500 mb-2">
              {agent.location}
            </p>
            <button className="block mx-auto mt-2 px-4 py-1 bg-[#1F7D53] text-white rounded-full hover:bg-green-700 transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
