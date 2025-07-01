"use client";
import { useState } from "react";
import {
  FiSearch,
  FiArrowRight,
  FiCode,
  FiLayers,
  FiUsers,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import { FaGithub, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: <FiCode className="text-3xl text-indigo-600" />,
      title: "Find Top Talent",
      description:
        "Connect with skilled developers across various technologies",
    },
    {
      icon: <FiLayers className="text-3xl text-indigo-600" />,
      title: "Manage Projects",
      description: "Streamline your development workflow in one place",
    },
    {
      icon: <FiUsers className="text-3xl text-indigo-600" />,
      title: "Build Teams",
      description: "Create and manage your dream development team",
    },
  ];

  const techStack = [
    { icon: <FaReact className="text-4xl text-blue-500" />, name: "React" },
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
    { icon: <FaPython className="text-4xl text-yellow-500" />, name: "Python" },
    { icon: <FaGithub className="text-4xl text-gray-800" />, name: "GitHub" },
  ];

  const testimonials = [
    {
      quote:
        "DevConnect helped us find the perfect developer for our project in just 2 days!",
      author: "Sarah Johnson, CEO at TechStart",
    },
    {
      quote:
        "As a freelancer, I've doubled my client base since joining this platform.",
      author: "Michael Chen, Full Stack Developer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <Logo animated={true} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Build. Connect. <span className="text-indigo-600">Grow.</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          The premier platform connecting developers with businesses and clients
          worldwide
        </p>

        <div className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search developers, projects, or technologies..."
              className="bg-white w-full px-6 py-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-6 text-gray-400 text-xl" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/auth/selection" className="group">
            <button className="flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 group-hover:translate-x-1 cursor-pointer">
              Get Started
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          <button className="px-8 py-4 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-300">
            How It Works
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-2">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose DevConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-indigo-100">Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-indigo-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiAward key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-gray-800">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to find your perfect developer match?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and developers already growing with
              DevConnect
            </p>
            <div className="flex justify-center">
              <Link href="/auth/selection">
                <button className="flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 font-medium">
                  Get Started for Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-indigo-300">
                Terms
              </Link>
              <Link href="#" className="hover:text-indigo-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-indigo-300">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} DevConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
