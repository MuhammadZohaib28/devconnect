"use client";
import Link from "next/link";
import SelectionCard from "@/components/SelectionCard";
import { FaUserTie, FaUser } from "react-icons/fa";

export default function SelectionPage() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Join DevConnect as
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto">
        <Link href="/auth/developer/signup" className="flex-1">
          <SelectionCard
            icon={<FaUserTie className="text-4xl text-indigo-600" />}
            title="I'm a Developer"
            description="Showcase your skills, find projects, and grow your career."
          />
        </Link>

        <Link href="/auth/user/signup" className="flex-1">
          <SelectionCard
            icon={<FaUser className="text-4xl text-purple-600" />}
            title="I'm a User"
            description="Find talented developers for your projects and ideas."
          />
        </Link>
      </div>


    </div>
  );
}
