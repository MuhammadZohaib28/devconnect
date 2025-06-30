"use client";
import { useState } from "react";

export default function SelectionCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-full p-8 rounded-xl shadow-md bg-white border-2 border-transparent transition-all duration-300 ${
        isHovered ? "border-indigo-500 transform -translate-y-2 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center h-full">
        <div className="mb-6">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
