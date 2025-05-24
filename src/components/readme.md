import React, { useState } from "react";

const properties = [
{
name: "Modern Villa",
location: "Beverly Hills, CA",
price: "$3,200,000",
image: "https://source.unsplash.com/1600x900/?villa,house",
},
{
name: "Urban Apartment",
location: "New York, NY",
price: "$850,000",
image: "https://source.unsplash.com/1600x900/?apartment,city",
},
{
name: "Lake House",
location: "Lake Tahoe, NV",
price: "$1,450,000",
image: "https://source.unsplash.com/1600x900/?lake,house",
},
];

const Carousel = () => {

return (

);
};

export default Carousel;

const propertyData = {
Rajasthan: [
{
id: 1,
title: "Luxury Villa in Jaipur",
img: "https://via.placeholder.com/300x200?text=Villa+Jaipur",
price: "₹85 Lakhs",
},
{
id: 2,
title: "Heritage Haveli, Udaipur",
img: "https://via.placeholder.com/300x200?text=Haveli+Udaipur",
price: "₹1.5 Cr",
},
{
id: 3,
title: "Modern Flat, Jodhpur",
img: "https://via.placeholder.com/300x200?text=Flat+Jodhpur",
price: "₹65 Lakhs",
},
],
Kerala: [
{
id: 4,
title: "Beachside Home in Alleppey",
img: "https://via.placeholder.com/300x200?text=Beach+Home+Kerala",
price: "₹70 Lakhs",
},
{
id: 5,
title: "Houseboat Property, Kochi",
img: "https://via.placeholder.com/300x200?text=Houseboat+Kochi",
price: "₹1.1 Cr",
},
{
id: 6,
title: "Hill View Villa, Munnar",
img: "https://via.placeholder.com/300x200?text=Villa+Munnar",
price: "₹90 Lakhs",
},
],
Maharashtra: [
{
id: 7,
title: "Sea-facing Apartment, Mumbai",
img: "https://via.placeholder.com/300x200?text=Flat+Mumbai",
price: "₹2.3 Cr",
},
{
id: 8,
title: "Farmhouse near Pune",
img: "https://via.placeholder.com/300x200?text=Farmhouse+Pune",
price: "₹1.2 Cr",
},
{
id: 9,
title: "Budget Flat in Nagpur",
img: "https://via.placeholder.com/300x200?text=Flat+Nagpur",
price: "₹45 Lakhs",
},
],
Goa: [
{
id: 10,
title: "Beach Villa, North Goa",
img: "https://via.placeholder.com/300x200?text=Beach+Villa+Goa",
price: "₹1.8 Cr",
},
{
id: 11,
title: "Portuguese House, Panaji",
img: "https://via.placeholder.com/300x200?text=House+Panaji",
price: "₹1.5 Cr",
},
{
id: 12,
title: "Studio Apartment, South Goa",
img: "https://via.placeholder.com/300x200?text=Studio+Goa",
price: "₹60 Lakhs",
},
],
Punjab: [
{
id: 13,
title: "Modern Kothi in Amritsar",
img: "https://via.placeholder.com/300x200?text=Kothi+Amritsar",
price: "₹1 Cr",
},
{
id: 14,
title: "Duplex in Ludhiana",
img: "https://via.placeholder.com/300x200?text=Duplex+Ludhiana",
price: "₹75 Lakhs",
},
{
id: 15,
title: "Farmhouse in Patiala",
img: "https://via.placeholder.com/300x200?text=Farmhouse+Patiala",
price: "₹2 Cr",
},
],
HimachalPradesh: [
{
id: 16,
title: "Hill Cottage, Shimla",
img: "https://via.placeholder.com/300x200?text=Cottage+Shimla",
price: "₹90 Lakhs",
},
{
id: 17,
title: "Mountain View Villa, Manali",
img: "https://via.placeholder.com/300x200?text=Villa+Manali",
price: "₹1.2 Cr",
},
{
id: 18,
title: "Cabin in Dharamshala",
img: "https://via.placeholder.com/300x200?text=Cabin+Dharamshala",
price: "₹75 Lakhs",
},
],
UttarPradesh: [
{
id: 19,
title: "Villa in Lucknow",
img: "https://via.placeholder.com/300x200?text=Villa+Lucknow",
price: "₹95 Lakhs",
},
{
id: 20,
title: "Apartment in Noida",
img: "https://via.placeholder.com/300x200?text=Flat+Noida",
price: "₹80 Lakhs",
},
{
id: 21,
title: "House in Varanasi",
img: "https://via.placeholder.com/300x200?text=House+Varanasi",
price: "₹60 Lakhs",
},
],
TamilNadu: [
{
id: 22,
title: "Villa in Chennai",
img: "https://via.placeholder.com/300x200?text=Villa+Chennai",
price: "₹1.4 Cr",
},
{
id: 23,
title: "Cottage in Ooty",
img: "https://via.placeholder.com/300x200?text=Cottage+Ooty",
price: "₹85 Lakhs",
},
{
id: 24,
title: "Flat in Coimbatore",
img: "https://via.placeholder.com/300x200?text=Flat+Coimbatore",
price: "₹55 Lakhs",
},
],
Gujarat: [
{
id: 25,
title: "Flat in Ahmedabad",
img: "https://via.placeholder.com/300x200?text=Flat+Ahmedabad",
price: "₹70 Lakhs",
},
{
id: 26,
title: "Bungalow in Surat",
img: "https://via.placeholder.com/300x200?text=Bungalow+Surat",
price: "₹1.3 Cr",
},
{
id: 27,
title: "Villa in Vadodara",
img: "https://via.placeholder.com/300x200?text=Villa+Vadodara",
price: "₹1 Cr",
},
],
Karnataka: [
{
id: 28,
title: "Penthouse in Bangalore",
img: "https://via.placeholder.com/300x200?text=Penthouse+Bangalore",
price: "₹2.5 Cr",
},
{
id: 29,
title: "Villa in Mysore",
img: "https://via.placeholder.com/300x200?text=Villa+Mysore",
price: "₹1 Cr",
},
{
id: 30,
title: "Budget Apartment, Mangalore",
img: "https://via.placeholder.com/300x200?text=Flat+Mangalore",
price: "₹60 Lakhs",
},
],
WestBengal: [
{
id: 31,
title: "Apartment in Kolkata",
img: "https://via.placeholder.com/300x200?text=Flat+Kolkata",
price: "₹85 Lakhs",
},
{
id: 32,
title: "Heritage Home in Darjeeling",
img: "https://via.placeholder.com/300x200?text=Home+Darjeeling",
price: "₹1.1 Cr",
},
{
id: 33,
title: "Bungalow in Siliguri",
img: "https://via.placeholder.com/300x200?text=Bungalow+Siliguri",
price: "₹95 Lakhs",
},
],
};
