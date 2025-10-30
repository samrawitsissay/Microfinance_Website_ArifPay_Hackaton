import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        </div>
        <div className="text-gray-400">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
