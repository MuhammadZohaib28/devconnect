"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaStar, FaRegStar } from "react-icons/fa";
import { FiMail, FiGlobe } from "react-icons/fi";

export default function DevProfileCard() {
  const [rating, setRating] = useState(4);
  const [isFavorite, setIsFavorite] = useState(false);

  const techStack = ["JavaScript", "React", "Node.js", "Express", "MongoDB"];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="bg-indigo-600 h-24"></div>
      <div className="px-6 pb-6">
        <div className="flex justify-center -mt-12 mb-4">
          <div className="relative">
            <img
              className="h-24 w-24 rounded-full border-4 border-white"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Developer profile"
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md"
            >
              {isFavorite ? (
                <FaStar className="h-5 w-5 text-yellow-400" />
              ) : (
                <FaRegStar className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">John Developer</h3>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <button key={i} onClick={() => setRating(i + 1)}>
              {i < rating ? (
                <FaStar className="h-5 w-5 text-yellow-400" />
              ) : (
                <FaRegStar className="h-5 w-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <FiMail className="mr-2" />
            <span>john.developer@example.com</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiGlobe className="mr-2" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/johndev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/johndev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
