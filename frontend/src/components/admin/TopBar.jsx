import React from "react";
import { Bell, UserCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-2xl font-semibold text-gray-700">Admin Dashboard</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">3</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <UserCircle className="w-7 h-7 text-gray-700" />
          <span className="font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
