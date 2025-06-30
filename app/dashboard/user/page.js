"use client";
import DashboardSidebar from "@/components/DashboardSidebar";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiBriefcase,
  FiUser,
  FiLogOut,
  FiBell,
  FiPlus,
} from "react-icons/fi";

export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  // Mock data
  const activeProjects = [
    {
      id: 1,
      name: "E-commerce Website",
      developer: "Sarah Johnson",
      status: "In Development",
      deadline: "2023-12-15",
    },
    {
      id: 2,
      name: "Mobile App",
      developer: "Mike Chen",
      status: "Design Phase",
      deadline: "2023-11-30",
    },
  ];

  const availableDevelopers = [
    { id: 1, name: "Alex Rodriguez", skills: "React, Node.js", rating: 4.8 },
    { id: 2, name: "Priya Patel", skills: "Python, Django", rating: 4.9 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative flex flex-col w-72 max-w-xs h-full bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-indigo-600">DevConnect</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-md text-gray-500 hover:text-gray-700"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <DashboardSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            mobile
          />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-72 border-r border-gray-200 bg-white">
          <div className="flex items-center h-16 px-4 border-b">
            <h1 className="text-xl font-bold text-indigo-600">DevConnect</h1>
          </div>
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FiMenu className="h-6 w-6" />
            </button>

            <div className="flex-1 flex justify-between items-center md:justify-end">
              <button className="md:hidden text-indigo-600 font-medium">
                New Project
              </button>
              <div className="relative ml-4">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FiBell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome back, Client!
              </h2>
              <p className="text-gray-600">
                Manage your projects and find developers.
              </p>
            </div>

            <div className="space-y-6">
              {activeTab === "projects" && (
                <>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      Your Projects
                    </h3>
                    <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      <FiPlus className="mr-2" />
                      New Project
                    </button>
                  </div>

                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      {activeProjects.map((project) => (
                        <div key={project.id} className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {project.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                Developer: {project.developer}
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                project.status === "In Development"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                              Deadline: {project.deadline}
                            </p>
                            <div className="space-x-2">
                              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                                View Details
                              </button>
                              <button className="text-sm text-gray-600 hover:text-gray-800">
                                Message
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "developers" && (
                <>
                  <h3 className="text-lg font-medium text-gray-900">
                    Available Developers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableDevelopers.map((dev) => (
                      <div
                        key={dev.id}
                        className="bg-white shadow rounded-lg p-6"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-indigo-600 font-medium">
                              {dev.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">
                              {dev.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {dev.skills}
                            </p>
                            <div className="mt-2 flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(dev.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-sm text-gray-500">
                                {dev.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                            Hire
                          </button>
                          <button className="px-3 py-1 border border-gray-300 text-sm rounded-md hover:bg-gray-50">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
