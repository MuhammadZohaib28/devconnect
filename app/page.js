"use client";
import { useState } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mb-12">
        <Logo animated={true} />
      </div>

      <div className="w-full max-w-2xl mb-8">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search developers or projects..."
            className="w-full px-6 py-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute right-6 text-gray-400 text-xl" />
        </div>
      </div>

      <Link href="/auth/selection" className="group">
        <button className="flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 group-hover:translate-x-1">
          Get Started
          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </Link>

      <div className="mt-16 text-gray-600 text-center">
        <p>Connecting developers with clients worldwide</p>
      </div>
    </div>
  );
}
