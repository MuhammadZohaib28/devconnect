"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiHome, FiBriefcase, FiUsers, FiLogOut } from "react-icons/fi";

export default function DashboardSidebar({
  activeTab,
  setActiveTab,
  mobile = false,
  setSidebarOpen,
}) {
  const router = useRouter();
  const navItems = [
    {
      id: "projects",
      icon: <FiBriefcase className="mr-3" />,
      label: "My Projects",
    },
    {
      id: "developers",
      icon: <FiUsers className="mr-3" />,
      label: "Find Developers",
    },
  ];

  return (
    <div className={`flex-1 flex flex-col ${mobile ? "p-2" : "pt-5 pb-4"}`}>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              if (setSidebarOpen) setSidebarOpen(false);
            }}
            className={`cursor-pointer w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              activeTab === item.id
                ? "bg-indigo-50 text-indigo-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 py-3">
        <button
          onClick={() => router.push("/")}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-200 hover:text-gray-900  bg-gray-100 cursor-pointer"
        >
          <FiLogOut className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}
