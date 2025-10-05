import React from "react";
import { Link } from "react-router-dom";

export default function LocationCard({ city, link }) {
  return (
    <Link
      to={link}
      className="group bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      {/* City Image with Fallback */}
      <img
        src={`https://source.unsplash.com/400x300/?${city},city`}
        alt={city}
        onError={(e) => (e.target.src = "/default-location.jpg")} // fallback image
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-purple-800 group-hover:text-orange-500 transition">
          {city}
        </h3>
      </div>
    </Link>
  );
}
