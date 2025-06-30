"use client";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";

export default function Logo({ animated = false }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (animated) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  return (
    <div className="flex items-center">
      <div className={`relative ${isAnimating ? "animate-bounce" : ""}`}>
        <FaCode className="text-5xl text-indigo-600" />
      </div>
      <h1 className="ml-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        DevConnect
      </h1>
    </div>
  );
}
