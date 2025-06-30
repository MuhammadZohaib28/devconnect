"use client";
import DashboardSidebar from "@/components/DashboardSidebar";
import DevProfileCard from "@/components/DevProfileCard";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiUser,
  FiLogOut,
  FiBell,
} from "react-icons/fi";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  // Mock data
  const activeProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      client: "Acme Corp",
      status: "In Progress",
      deadline: "2023-12-15",
    },
    {
      id: 2,
      name: "Portfolio Website",
      client: "Jane Smith",
      status: "Review",
      deadline: "2023-11-30",
    },
  ];

  const recentBids = [
    {
      id: 1,
      project: "Mobile App Development",
      amount: "$5,000",
      status: "Pending",
    },
    { id: 2, project: "API Integration", amount: "$2,500", status: "Rejected" },
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
                Welcome back, John!
              </h2>
              <p className="text-gray-600">
                Here's what's happening with your projects today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Card */}
              <div className="md:col-span-1">
                <DevProfileCard />
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                {activeTab === "projects" && (
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Active Projects
                    </h3>
                    <div className="space-y-4">
                      {activeProjects.map((project) => (
                        <div
                          key={project.id}
                          className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {project.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                Client: {project.client}
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                project.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                              Deadline: {project.deadline}
                            </p>
                            <button className="text-sm text-indigo-600 hover:text-indigo-800">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "bids" && (
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Recent Bids
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Project
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentBids.map((bid) => (
                            <tr key={bid.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {bid.project}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {bid.amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    bid.status === "Pending"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {bid.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
