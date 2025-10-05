import React from "react";

const TestimonialCard = ({ name, feedback, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left">
      <p className="text-gray-700 italic mb-4">“{feedback}”</p>
      <div className="flex items-center justify-between">
        <h3 className="text-purple-800 font-semibold">{name}</h3>
        <div className="text-orange-500">
          {"⭐".repeat(rating)}
          <span className="text-gray-400">
            {"⭐".repeat(5 - rating)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
